import { FIREBASE_CONFIG } from './settings'
import { initializeApp } from 'firebase/app'
import { getRemoteConfig } from 'firebase/remote-config'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/remote-config'

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

export const firebaseRemoteConfig = getRemoteConfig()
firebaseRemoteConfig.settings.fetchTimeoutMillis = 60000
firebaseRemoteConfig.settings.minimumFetchIntervalMillis = 1
