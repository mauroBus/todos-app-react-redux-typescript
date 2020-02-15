import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import App from './app'

const { store } = createStore()

const root = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

// @ts-ignore
module.hot.accept()
