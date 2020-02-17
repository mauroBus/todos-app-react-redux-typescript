import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import { initFormatMessage } from './format'
import App from './app'

const { store } = createStore()

const root = document.getElementById('root')

initFormatMessage()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
