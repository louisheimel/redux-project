import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import recompose from 'recompose'
import { createStore } from 'redux'
import { connect } from 'react-redux'


import { todoApp } from './reducers'

const store = createStore(todoApp)

const App = () => <div>Hello World!</div>

ReactDOM.render(
  connect(
    (state, ownProps) => ({}),
    (dispatch, ownProps) => ({})
  )(<App />), document.getElementById('root'))
