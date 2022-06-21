import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { disableCache } from '@iconify/react'

import { AppFactory } from 'factory/AppFactory'
// Disable iconify caching in LocalStorage
disableCache('local')

ReactDOM.render(
  <React.StrictMode>
    <AppFactory />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
