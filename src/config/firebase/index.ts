import { FIREBASE_CONFIG } from './settings'
import { initializeApp } from 'firebase/app'
import { getRemoteConfig } from 'firebase/remote-config'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/remote-config'

const { NODE_ENV, REACT_APP_REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL_MILLIS } =
  process.env

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

const developmentFetchInterval =
  REACT_APP_REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL_MILLIS || '1000'

  console.log(developmentFetchInterval)

export const firebaseRemoteConfig = getRemoteConfig()
firebaseRemoteConfig.settings.fetchTimeoutMillis = 15000
firebaseRemoteConfig.settings.minimumFetchIntervalMillis =
  NODE_ENV === 'development' ? parseInt(developmentFetchInterval) : 10800000
