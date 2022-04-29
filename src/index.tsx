import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { TemplateProvider } from 'components/templates'
import reportWebVitals from './reportWebVitals'
import { disableCache } from '@iconify/react'

import { Client } from 'services/api'
import { ApolloProvider } from '@apollo/client'
import './config/firebase'
import './config/sentry'
import './config/i18n'

// Disable iconify caching in LocalStorage
disableCache('local')

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={Client}>
      <TemplateProvider>
        <App />
      </TemplateProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
