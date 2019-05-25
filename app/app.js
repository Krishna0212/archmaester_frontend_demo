import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import App from './containers/App'

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)

module.hot.accept()
