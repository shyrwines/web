import React from 'react'
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import { ATTRIBUTES, RATERS } from './constants'
import { formatPrice, removeUndefined, staticUrl, removeKey } from './functions'

const PRICES = {
  'Less than $20': { lower: 0, upper: 2000 },
  '$20 - $50': { lower: 2000, upper: 5000 },
  '$50 - $100': { lower: 5000, upper: 10000 },
  'More than $100': { lower: 10000, upper: Infinity },
}

const nameCompare = (x, y) => {
  // Remove year from wine name
  const a = x[1].Name.replace(/^\d{4} /, '').toUpperCase()
  const b = y[1].Name.replace(/^\d{4} /, '').toUpperCase()
  return a < b ? -1 : a === b ? 0 : 1
}

const compare = (a, b, attribute) => a[1][attribute] - b[1][attribute]

const SORTS = {
  'Alphabetical: A to Z': nameCompare,
  'Alphabetical: Z to A': (a, b) => nameCompare(b, a),
  'Vintage: Old to New': (a, b) => compare(a, b, 'Vintage'),
  'Vintage: New to Old': (a, b) => compare(b, a, 'Vintage'),
  'Price: Low to High': (a, b) => compare(a, b, 'Price'),
  'Price: High to Low': (a, b) => compare(b, a, 'Price')
}

const Wine = ({ id, wine }) => (
  <Link className="col-xl-4 col-lg-6 p-2 d-flex wine" to={'/view/' + id}>
    {wine.Count === 0 && <div className='sold-out position-absolute'>Sold Out</div>}

    <div className="image h-100 d-flex justify-content-center">
      {/* TODO: include srcset */}
      <img
        alt={wine.Name}
        className='h-100'
        src={staticUrl(`wine-images/${wine.SKU}.jpg`)}
        onError={e => e.target.src = staticUrl('images/bottle.svg')}
      />
    </div>

    <div className="ml-1">
      <div className='font-weight-normal'>{ wine.Name }</div>
      <div className='d-flex flex-wrap'>
        {Object.keys(RATERS).map(r => wine[r] && <div key={id + r} className='d-flex pr-1 mr-1 rating'>
          <div className='color mr-1'>{r}</div>
          <div>{wine[r]}</div>
        </div>)}
      </div>
      <div className='price position-absolute mr-2 mb-1'>{ formatPrice(wine.Price / 100) }</div>
    </div>
  </Link>
)

class Switch extends React.Component {
  state = { active: false }

  render() {
    const { attribute, params, options } = this.props
    const { active } = this.state
    return [
      <div
        key={attribute}
        className='font-weight-normal py-2 d-flex justify-content-between switch-key'
        onClick={() => this.setState({active: !active})}
      >
        <div>{attribute}</div>
        <div className={'notch mr-1 ' + (active ? 'active' : '')}/>
      </div>,
      <div
        key={attribute + 'options'}
        className='options-wrapper'
        style={{height: active ? options.length * 1.5 + 0.5 + 'rem' : 0}}
      >
        {options.map(o => <Link
          className='d-block text-dark ml-2'
          key={attribute + o}
          to={'#' + querystring.stringify(Object.assign({}, params, {[attribute]: o}))}
        >{o}</Link>)}
      </div>
      ]
  }
}

export default class AllWines extends React.Component {
  state = {}

  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'All Wines | Shyr Wines'
    if (this.props.wines) {
      this.filterWines()
    }
    document.addEventListener('scroll', this.loadElements.bind(this))
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.filterWines()
    }
  }

  loadElements() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
      this.setState({numWines: this.state.numWines + 15})
    }
  }

  filterWines() {
    const params = querystring.parse(this.props.location.hash.substring(1))  // Remove leading #
    const chosen = ATTRIBUTES.filter(a => a in params)
    const unChosen = ATTRIBUTES.filter(a => !(a in params))

    let filteredWines = Object.entries(this.props.wines).filter(([id, wine]) => {
      for (let a of chosen) {
        if (wine[a] !== params[a]) {
          return false
        }
      }
      return true
    })

    const query = params['Text Search']
    if (query) {
      chosen.unshift('Text Search')
      const lowerCaseQuery = query.toLowerCase()
      filteredWines = filteredWines.filter(([_, w]) => w.Name.toLowerCase().includes(lowerCaseQuery))
    }

    const price = params['Price']
    if (price) {
      chosen.push('Price')
      const { lower, upper } = PRICES[price]
      filteredWines = filteredWines.filter(([id, wine]) => lower <= wine.Price && wine.Price <= upper)
    }

    const sort = params['Sort']
    if (sort) {
      chosen.push('Sort')
      filteredWines.sort(SORTS[sort])
    }

    this.setState({chosen, filteredWines, params, query, unChosen, numWines: 25})
  }

  render() {
    const { wines } = this.props
    const { chosen, filteredWines, params, unChosen, numWines } = this.state
    if (!wines || !params || !filteredWines) {
      // TODO: Loading here
      return null;
    }
    return (
      <div className='container'>
        <h1 className='text-center'>All Wines</h1>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            {/* TODO: Hide this menu on mobile */}
            {chosen.map(a => (
              <div key={a}>
                <div className='font-weight-normal'>{a}</div>
                <div className='d-flex mb-2'>
                  <Link
                    className='text-dark mx-2'
                    to={'#' + querystring.stringify(removeKey(a, params))}
                  >&times; {params[a]}</Link>
                </div>
              </div>
            ))}
            {unChosen.map(a => <Switch
              key={a}
              attribute={a}
              options={removeUndefined([...new Set(filteredWines.map(([_, w]) => w[a]))])}
              params={params}
            />)}
            {chosen.includes('Price') || <Switch
              attribute='Price'
              options={Object.keys(PRICES)}
              params={params}
            />}
            {chosen.includes('Sort') || <Switch
              attribute='Sort'
              options={Object.keys(SORTS)}
              params={params}
            />}
          </div>
          <div className='col-lg-9 col-md-8'>
            <div className='container-fluid'>
              <div className='row'>
                {filteredWines.length === 0 ?
                  'No wines found!' :
                  filteredWines.slice(0, numWines).map(([id, wine]) => <Wine key={id} id={id} wine={wine}/>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
