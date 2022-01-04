import { FIREBASE_CONFIG } from './settings'
import { initializeApp } from 'firebase/app'
import { getRemoteConfig } from 'firebase/remote-config'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/remote-config'

const { NODE_ENV } = process.env

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

export const firebaseRemoteConfig = getRemoteConfig()
firebaseRemoteConfig.settings.fetchTimeoutMillis = 15000
firebaseRemoteConfig.settings.minimumFetchIntervalMillis =
  NODE_ENV === 'development' ? 1000 : 10800000
