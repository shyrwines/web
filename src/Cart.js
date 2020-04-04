import React from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { change, clear, remove } from './actions'
import { formatPrice } from './functions'

const TotalRow = ({ name, value }) => (
  <div className='row height50'>
    <div className="col-8 d-flex align-items-center justify-content-end pr-0">{ name }</div>
    <div className="col-1 d-flex align-items-center justify-content-center px-0">=</div>
    <div className="col-md-1 col-3 d-flex align-items-center justify-content-end pl-0 pr-md-0">{formatPrice(value / 100)}</div>
  </div>
)

let CartItems = ({ cartWines, total, dispatch }) => {
  return (
    <div className='container'>
      {cartWines.map(wine => {
        return [(
          <div className='row cart' key={wine.id}>
            <div className="col-md-5 col-9 d-flex align-items-center height50 name">
              <Link className='text-dark' to={'/view/' + wine.id}>{ wine.name }</Link>
            </div>
            <div className="col-md-2 col-3 order-md-7 d-flex align-items-center justify-content-end">
              <button onClick={() => dispatch(remove(wine.id))}>Remove</button>
            </div>
            <div className="col-md-1 col-2 offset-2 offset-md-0 px-0">
              <input
                className='form-control height50'
                defaultValue={wine.quantity}
                min='1'
                onChange={e => dispatch(change(wine.id, parseInt(e.target.value, 10) || 0))}
                pattern="\d*"
                type="number"
              />
            </div>
            <div className="col-1 d-flex align-items-center justify-content-center px-0">&times;</div>
            <div className="col-md-1 col-3 d-flex align-items-center justify-content-end px-0">{formatPrice(wine.price / 100)}</div>
            <div className="col-1 d-flex align-items-center justify-content-center px-0">=</div>
            <div className="col-md-1 col-3 d-flex align-items-center justify-content-end pl-0 pr-md-0">{formatPrice(wine.total / 100)}</div>
          </div>
        ), <div key={'border' + wine.id} className='d-md-none cart-border w-100 mt-3'/>]
      })}
      <TotalRow name='Estimated Tax' value={total * 0.09}/>
      <TotalRow name='Subtotal (before shipping)' value={total * 1.09}/>
    </div>
  )
}
CartItems = connect()(CartItems)

class Order extends React.Component {
  state = {}

  onOrderSubmit(e) {
    if (this.form.checkValidity()) {
      e.preventDefault()
      this.props.sendEmail(this.state)
    }
  }

  render() {
    return (
      <form ref={form => this.form = form} className='container'>
        <h1 className='text-center'>Order Form</h1>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Name</label>
            <input className='form-control' type="text" onChange={e => this.setState({name: e.target.value})} required/>
          </div>
          <div className="col-md-5 mb-3">
            <label>Email</label>
            <input className='form-control' type="email" onChange={e => this.setState({email: e.target.value})} required/>
          </div>
          <div className="col-md-3 mb-3">
            <label>Phone Number</label>
            <input className='form-control' type="tel" onChange={e => this.setState({phone: e.target.value})} required/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label>Street Address</label>
            <input className='form-control' type="text" onChange={e => this.setState({address: e.target.value})} />
          </div>
          <div className="col-md-3 mb-3">
            <label>City</label>
            <input className='form-control' type="text" onChange={e => this.setState({city: e.target.value})} />
          </div>
          <div className="col-md-2 mb-3">
            <label>State</label>
            <select className='form-control' defaultValue='none' onChange={e => this.setState({state: e.target.value})}>
              <option value='none' disabled/>
              <option>AL</option>
              <option>AK</option>
              <option>AZ</option>
              <option>AR</option>
              <option>CA</option>
              <option>CO</option>
              <option>CT</option>
              <option>DE</option>
              <option>FL</option>
              <option>GA</option>
              <option>HI</option>
              <option>ID</option>
              <option>IL</option>
              <option>IN</option>
              <option>IA</option>
              <option>KS</option>
              <option>KY</option>
              <option>LA</option>
              <option>ME</option>
              <option>MD</option>
              <option>MA</option>
              <option>MI</option>
              <option>MN</option>
              <option>MS</option>
              <option>MO</option>
              <option>MT</option>
              <option>NE</option>
              <option>NV</option>
              <option>NH</option>
              <option>NJ</option>
              <option>NM</option>
              <option>NY</option>
              <option>NC</option>
              <option>ND</option>
              <option>OH</option>
              <option>OK</option>
              <option>OR</option>
              <option>PA</option>
              <option>RI</option>
              <option>SC</option>
              <option>SD</option>
              <option>TN</option>
              <option>TX</option>
              <option>UT</option>
              <option>VT</option>
              <option>VA</option>
              <option>WA</option>
              <option>WV</option>
              <option>WI</option>
              <option>WY</option>
            </select>
          </div>
          <div className="col-md-3 mb-3">
            <label>Zip Code</label>
            <input className='form-control' onChange={e => this.setState({zipcode: e.target.value})} pattern="\d*" type="number" />
          </div>
        </div>
        <div className='mb-3'>
          <label>Include a comment (Optional)</label>
          <textarea className='form-control' onChange={e => this.setState({comment: e.target.value})} />
        </div>
        <div className="row">
          <div className="col-md-9 mb-3">
            * By submitting this order, you confirm that you are at least the age of 21, and have read and agreed to the <Link to='/terms-of-service'>Terms of Service</Link> and <Link to='/privacy-policy'>Privacy Policy</Link>.
          </div>
          <div className="col-md-3">
            <button className='w-100 height50' onClick={e => this.onOrderSubmit(e)}>Submit Order</button>
          </div>
        </div>
      </form>
    )
  }
}
const OrderForm = connect()(Order)

class CartPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showModal: false, submitted: false }
    this.sendEmail = this.sendEmail.bind(this)
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    document.title = 'Cart | Shyr Wines'
  }

  sendEmail(orderState) {
    this.setState({error: false, showModal: true, submitted: false})
    const { cartWines, dispatch, total } = this.props
    fetch('/sendEmail?' + queryString.stringify({...orderState, total, cartWines: JSON.stringify(cartWines)}))
      .then(r => {
        if (r.ok) {
          dispatch(clear())
          this.setState({submitted: true})
        } else {
          this.setState({error: true})
        }
      })
      .catch(() => this.setState({error: true}))
  }

  render() {
    const { cartWines, loading, total } = this.props
    const { error, showModal, submitted } = this.state
    return (
      <div>
        <h1 className='text-center'>Cart</h1>
        {
          loading ? null :
            cartWines === undefined ?
            <div className='text-center'>Your cart is empty!</div> :
            <div>
              <CartItems cartWines={cartWines} total={total}/>
              <OrderForm sendEmail={this.sendEmail}/>
            </div>
        }
        <ReactModal
          ariaHideApp={false}
          className='react-modal position-absolute text-center'
          closeTimeoutMS={500}
          isOpen={showModal}
        >
          {submitted ?
            <div>
              <h5>Thanks for your order!</h5>
              <div className='font-weight-light mb-2'>We'll reach out to you shortly.</div>
              <button onClick={() => this.setState({showModal: false})}>Close</button>
            </div> :
            error ?
              <div>
                <h5>Sorry, we've encountered an error!</h5>
                <div className='font-weight-light mb-2'>Please try again later or email <a href='mailto:info@shyrwines.com'>info@shyrwines.com</a>.</div>
                <button onClick={() => this.setState({showModal: false})}>Close</button>
              </div> :
              <div>Submitting Order...</div>
          }
        </ReactModal>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.wines) {
    const cartWines = Object.entries(state).map(([id, quantity]) => {
      const wine = ownProps.wines[id]
      return { id, quantity, name: wine.Name, price: wine.Price, total: quantity * wine.Price }
    })
    if (cartWines.length > 0) {
      const { total } = cartWines.reduce((a, b) => ({total: a.total + b.total})) || 0;
      return { cartWines, loading: false, total }
    }
    return { loading: false }
  }
  return { loading: true }
}
const Cart = connect(mapStateToProps)(CartPage)

export default Cart
