import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import querystring from 'querystring'
import { About, Contact, NotFound, PrivacyPolicy, TermsOfService } from './Pages'
import AllWines from './AllWines'
import Cart from './Cart'
import Home from './Home'
import View from './View'
import { ATTRIBUTES } from './constants'
import { highlightMatch, removeUndefined, staticUrl } from './functions'

class AutoComplete extends React.Component {
  constructor(props) {
    super(props)
    this.autoComplete = this.autoComplete.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      matched: [],
      query: querystring.parse(this.props.location.hash.substring(1))['Text Search'] || '',
      showContainer: false
    }
  }

  autoComplete(event) {
    if (event.target.value === '') {
      this.setState({matched: [], query: '', showContainer: false})
    } else {
      const query = event.target.value
      const lowerCaseQuery = query.toLowerCase()
      const matched = Object.entries(this.props.wines)
        .filter(([_, w]) => w.Name.toLowerCase().includes(lowerCaseQuery))
        .slice(0, 5)
        .map(([id, w]) => ({
          match: highlightMatch(w.Name, lowerCaseQuery),
          url: '/view/' + id
        }))
      ATTRIBUTES.forEach(a => {
        const value = removeUndefined([...new Set(Object.values(this.props.wines).map(w => w[a]))])
          .find(v => v.toLowerCase().includes(lowerCaseQuery))
        if (value) {
          matched.push({
            match: [a + ': '].concat(highlightMatch(value, lowerCaseQuery)),
            url: `/all-wines#${a}=${value}`
          })
        }
      })
      this.setState({
        matched,
        query,
        showContainer: true
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.query) {
      this.setState({showContainer: false},
        () => {
          this.refs.searchInput.blur()
          this.props.history.push('/all-wines#' + querystring.stringify({'Text Search': this.state.query}))
        })
    }
  }

  render() {
    const { matched, query, showContainer } = this.state
    return (
      <div className='w-100'>
        <form onSubmit={this.handleSubmit}>
          <input
            className='form-control'
            onBlur={() => this.state.preventBlur || this.setState({showContainer: false})}
            onFocus={() => this.setState({showContainer: true})}
            onChange={this.autoComplete}
            placeholder='Search by wine name, keyword...'
            ref='searchInput'
            value={query}
          />
        </form>
        {showContainer && matched.length > 0 &&
        <div id='autocomplete' className='position-absolute w-100 z1'>
          {matched.map(({match, url}) => {
            return <Link
              className='d-block text-dark p-2'
              key={url}
              onClick={() => this.setState({showContainer: false})}
              onMouseDown={() => this.setState({preventBlur: true})}
              onMouseUp={() => this.setState({preventBlur: false})}
              to={url}
            >{match}</Link>
          })}
        </div>
        }
      </div>
    )
  }
}

let NavBar = ({ count, wines }) => (
  <div className='container'>
    <div className='row mb-1'>
      <Link className='col-sm-4 col-lg-2 my-1 d-flex justify-content-center align-items-center' to='/'>
        <img src={staticUrl('images/logo.svg')} alt='Logo'/>
      </Link>
      <div className='col-sm-8 col-lg-4 order-lg-12 my-1 d-flex align-items-center'>
        <Route render={routeProps => <AutoComplete {...routeProps} wines={wines || {}} />}/>
      </div>
      <Link className='col-4 col-lg-2 my-1 d-flex justify-content-center align-items-center text-dark' to='/about'>ABOUT</Link>
      <Link className='col-4 col-lg-2 my-1 d-flex justify-content-center align-items-center text-dark' to='/contact-us'>CONTACT</Link>
      <Link className='col-4 col-lg-2 my-1 d-flex justify-content-center align-items-center text-dark' to='/cart'>CART{count !== 0 && ` (${count})`}</Link>
    </div>
  </div>
)
const mapStateToProps = state => ({ count: Object.values(state).reduce((a, b) => a + b, 0) })
NavBar = connect(mapStateToProps)(NavBar)

export default class App extends React.Component {
  state = {}

  componentDidMount() {
    fetch(staticUrl('wines.json'), {cache: 'no-store'})
      .then(r => r.json())
      .then(wines => this.setState({wines}))
  }

  render() {
    const { wines } = this.state
    return (
      <div className='font-weight-light'>
        <NavBar wines={wines}/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/all-wines' render={({location}) => <AllWines location={location} wines={wines} />}/>
          <Route exact path='/cart' render={() => <Cart wines={wines}/>}/>
          <Route exact path='/contact-us' component={Contact}/>
          <Route exact path='/privacy-policy' component={PrivacyPolicy}/>
          <Route exact path='/terms-of-service' component={TermsOfService}/>
          <Route exact path='/view/:id' render={({match}) => <View id={match.params.id} wines={wines}/>}/>
          <Route path='*' component={NotFound}/>
        </Switch>

        <footer className='position-absolute w-100 p-1 text-center'>
          <span>&copy; Shyr Wines</span>
          <span className='d-none d-sm-inline mx-1'>&middot;</span>
          <br className='d-block d-sm-none'/>
          <Link className='text-dark' to='/terms-of-service'>TERMS OF SERVICE</Link>
          <span className='mx-1'>&middot;</span>
          <Link className='text-dark' to='/privacy-policy'>PRIVACY POLICY</Link>
        </footer>
      </div>
    )
  }
}
