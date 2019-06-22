import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'
import { staticUrl } from './functions'
import querystring from 'querystring'

const VARIETALS = ['Cabernet Sauvignon', 'Syrah', 'Zinfandel', 'Pinot Noir']
const COUNTRIES = ['USA', 'Italy', 'France', 'Spain']

const Square = ({value, url}) => (
  <div className="col-md mb-3">
    <Link className="position-relative d-block square" to={`/all-wines#${url}=${value}`}>
      <img className='w-100' src={staticUrl(`images/${value.replace(' ', '')}.jpg`)} alt={value}/>
      <div className='position-absolute text-center p-2 z1 text' >{value}</div>
      <div className="cover position-absolute w-100 h-100"/>
    </Link>
  </div>
)

const Popular = ({title, values, url}) => (
  <div>
    <div className="row">
      <div className="col"><h3>Popular {title}</h3></div>
    </div>
    <div className="row">
      {values.map(v => <Square key={v} value={v} url={url} />)}
    </div>
  </div>
)

export default class Home extends React.Component {
  state = {}

  componentDidMount() {
    document.title = 'Shyr Wines'
    const params = querystring.parse(this.props.location.search.substring(1))
    if ('checkoutId' in params && 'transactionId' in params) {
      this.setState({showModal: true})
    }
  }

  render() {
    return (
      <div className='container'>
        <Popular title='Varietals' values={VARIETALS} url={'Varietal'}/>
        <Popular title='Countries' values={COUNTRIES} url={'Country'}/>
        <h3 className='text-center mt-3'><Link className='text-dark' to='/all-wines'>Browse all wines...</Link></h3>
        <ReactModal
          ariaHideApp={false}
          className='react-modal position-absolute text-center'
          closeTimeoutMS={500}
          isOpen={this.state.showModal}
        >
          <h5>Thanks for your order!</h5>
          <div className='font-weight-light mb-2'>We'll reach out to you shortly.</div>
          <button onClick={() => this.setState({showModal: false})}>Close</button>
        </ReactModal>
      </div>
    )
  }
}
