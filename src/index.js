import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import './App.sass'
import withTracker from './withTracker';

const reducer = (state = {}, action) => {
  const newState = {...state}
  switch (action.type) {
    case 'ADD':
      newState[action.id] = (newState[action.id] || 0) + action.quantity
      return newState
    case 'CHANGE':
      newState[action.id] = action.quantity
      return newState
    case 'CLEAR':
      return {}
    case 'REMOVE':
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    return serializedState ? JSON.parse(serializedState) : undefined
  } catch (error) {
    return undefined
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const store = createStore(reducer, loadState())

store.subscribe(() => saveState(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={withTracker(App)}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
