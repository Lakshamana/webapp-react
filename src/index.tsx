import { disableCache } from '@iconify/react';
import React from 'react';
import ReactDOM from 'react-dom';
import "./config/sentry";
import reportWebVitals from './reportWebVitals';

import { AppFactory } from 'factory/AppFactory';
// Disable iconify caching in LocalStorage
disableCache('local')

ReactDOM.render(
  <React.StrictMode>
    <AppFactory />
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
