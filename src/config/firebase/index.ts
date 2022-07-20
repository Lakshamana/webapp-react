import { configEnvs } from 'config/envs'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

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

export const firebaseApp = initializeApp(FIREBASE_CONFIG)

// Get a reference to the database service
export const firebaseDB = getFirestore(firebaseApp)
