import 'core-js/es6'
import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import registerServiceWorker, { unregister } from './registerServiceWorker'
import 'normalize.css'
import './globalStyles.css'
import data from './data.json'

const rootEl = document.getElementById('root')
render(<App />, rootEl)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(<NextApp />, rootEl)
  })
}

const globalSettings =
  data.settings && data.settings.filter(doc => doc.name === 'global')[0]

if (globalSettings) {
  globalSettings.enableServiceWorker ? registerServiceWorker() : unregister()
}

if (process.env.REACT_APP_SITE_URL && 'localStorage' in window) {
  window.localStorage.setItem('netlifySiteURL', process.env.REACT_APP_SITE_URL)
}
