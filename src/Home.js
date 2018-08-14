import React from 'react'
import { Link } from 'react-router-dom'
import { staticUrl } from './functions'

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
  componentDidMount() {
    document.title = 'Shyr Wines'
  }

  render() {
    return (
      <div className='container'>
        <Popular title='Varietals' values={VARIETALS} url={'Varietal'}/>
        <Popular title='Countries' values={COUNTRIES} url={'Country'}/>
        <h3 className='text-center mt-3'><Link className='text-dark' to='/all-wines'>Browse all wines...</Link></h3>
      </div>
    )
  }
}
