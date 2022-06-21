import { initializeApp } from 'firebase/app'
import { getRemoteConfig } from 'firebase/remote-config'
import { getFirestore } from 'firebase/firestore'
import { configEnvs } from 'config/envs'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/remote-config'

const FIREBASE_CONFIG = {
  apiKey: configEnvs?.firebaseApiKey,
  authDomain: configEnvs?.firebaseDomain,
  databaseURL: configEnvs?.firebaseDatabaseUrl,
  projectId: configEnvs?.firebaseProject,
  storageBucket: configEnvs?.firebaseBucket,
  messagingSenderId: configEnvs?.firebaseSender,
  appId: configEnvs?.firebaseAppId,
  measurementId: configEnvs?.firebaseMeasurementId,
}

const { NODE_ENV, REACT_APP_REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL_MILLIS } =
  process.env

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

const productionFetchInterval =
  REACT_APP_REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL_MILLIS || '10800000'

export const firebaseRemoteConfig = getRemoteConfig()
firebaseRemoteConfig.settings.fetchTimeoutMillis = 15000
firebaseRemoteConfig.settings.minimumFetchIntervalMillis =
  NODE_ENV === 'development' ? 1000 : parseInt(productionFetchInterval)

// Get a reference to the database service
export const firebaseDB = getFirestore(firebaseApp)
