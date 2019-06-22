import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import { NotFound } from './Pages'
import { add } from './actions'
import { ATTRIBUTES, RATERS } from './constants'
import { formatPrice, staticUrl } from './functions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(add(ownProps.id, ownProps.quantity))
    ownProps.toast()
  }
})
let AddButton = ({ onClick }) => (
  <button className='w-100 height50' onClick={onClick}>Add to cart</button>
)
AddButton = connect(null, mapDispatchToProps)(AddButton)

const Row = ({attribute, value}) => {
  if (value) {
    return (
      <div className='d-flex justify-content-between'>
        <h5 className='color'>{attribute}</h5>
        <h5><Link className='text-dark' to={'/all-wines#' + querystring.stringify({[attribute]: value}) }>{value}</Link></h5>
      </div>
    )
  }
  return null
}

export default class View extends React.Component {
  constructor(props) {
    super(props)
    this.state = {quantity: 1, show: false}
    this.toast = this.toast.bind(this)
  }

  parseId(id) {
    const wine = this.props.wines[id]
    if (wine) {
      window.scrollTo(0, 0)
      document.title = wine.Name + ' | Shyr Wines'
      this.setState({id, wine})
    } else {
      this.setState({wine})
    }
  }

  componentDidMount() {
    if (this.props.wines) {
      this.parseId(this.props.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.parseId(this.props.id)
    }
  }

  toast() {
    setTimeout(() => this.setState({toastClass: ''}), 2000)
    this.setState({toastClass: 'active'})
  }

  render() {
    const { wines } = this.props
    if (!wines) {
      // TODO: Loading
      return null
    }
    const { id, quantity, wine } = this.state
    if (!wine) {
      return <NotFound/>
    }
    return (
      <div className='container'>
        <h1 className='text-center'>{wine.Name}</h1>
        <div className='row'>
          <div className='col-md text-center'>
            <img
              alt={wine.Name}
              className='img-fluid view'
              onError={e => e.target.src = staticUrl('images/bottle.svg')}
              src={staticUrl(`wine-images/${wine.SKU}.jpg`)}
            />
            {wine.factsheet && <div className='my-2' >
              <a
                className='text-dark mr-1'
                href={staticUrl(`factsheets/${wine.SKU}.pdf`)}
                rel='noopener noreferrer'
                target='_blank'
                >Factsheet</a>
              <img width='15px' src={staticUrl('images/open.svg')} alt="(Open)"/>
            </div>}
          </div>
          <div className='col-md-6'>
            {Object.entries(RATERS).map(([r, rater]) => wine[r] && (
              <div key={r} className='text-center'>{rater} &ndash; {wine[r]}</div>
            ))}
            <h5 className='color mt-1'>Winemaker's Notes</h5>
            <p className='text-justify indent'>{wine.Description}</p>
            {ATTRIBUTES.map(a => <Row key={a} attribute={a} value={wine[a]}/>)}
          </div>
          <div className='col-md'>
            <h2 className='text-center green'>{formatPrice(wine.Price / 100)}</h2>
            <div className='d-flex flex-column position-relative'>
              {wine.Count === 0 && <div className='sold-out position-absolute'>Sold Out</div>}
              {wine.Count === 0 && <div className='position-absolute h-100 w-100 z1'/>}
              <div>Quantity:</div>
              <input
                className='form-control height50'
                defaultValue={1}
                min='1'
                onChange={e => this.setState({quantity: parseInt(e.target.value, 10)})}
                pattern="\d*"
                type='number'
              />
              <AddButton id={id} quantity={quantity} toast={this.toast} />
            </div>
          </div>
        </div>
        <div className={'position-fixed d-flex align-items-center justify-content-center text-center p-2 z1 toast ' + this.state.toastClass}>
          <div>{wine.Name} ({quantity}) added to <Link to='/cart'>cart</Link></div>
        </div>
      </div>
    )
  }
}
