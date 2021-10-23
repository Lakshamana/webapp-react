import { initializeApp } from "@firebase/app";

const firebaseConfig = {
  apiKey: process.env.WEBAPP_FIREBASE_KEY,
  authDomain: process.env.WEBAPP_FIREBASE_DOMAIN,
  databaseURL: process.env.WEBAPP_FIREBASE_BASE_URL,
  projectId: process.env.WEBAPP_FIREBASE_PROJECT,
  storageBucket: process.env.WEBAPP_FIREBASE_BUCKET,
  messagingSenderId: process.env.WEBAPP_FIREBASE_SENDER,
  appId: process.env.WEBAPP_FIREBASE_APP,
};

const firebase = initializeApp(firebaseConfig);

export default firebase;
