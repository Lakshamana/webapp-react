import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { CreateAccountSocialSignInDto } from 'generated/graphql'

export type Social = 'facebook' | 'google'

const {
  REACT_APP_FIREBASE_AUTH_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_AUTH_TENANT_ID,
} = process.env

const CONFIG = {
  apiKey: REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
}

const FirebaseAuth = initializeApp(CONFIG, 'Auth')

const AUTH = getAuth(FirebaseAuth)
AUTH.tenantId = REACT_APP_FIREBASE_AUTH_TENANT_ID || ''

onAuthStateChanged(AUTH, (user) => {
  // TO-DO: Check for user status
})

const FB_PROVIDER = new FacebookAuthProvider()
const GOOGLE_PROVIDER = new GoogleAuthProvider()

export const SocialSignIn = (
  kind: Social
): Promise<CreateAccountSocialSignInDto> => {
  return new Promise(function (resolve, reject) {
    const PROVIDER = kind === 'facebook' ? FB_PROVIDER : GOOGLE_PROVIDER
    signInWithPopup(AUTH, PROVIDER)
      .then((result) => {
        const credential =
          kind === 'facebook'
            ? FacebookAuthProvider.credentialFromResult(result)
            : GoogleAuthProvider.credentialFromResult(result)
        if (credential) {
          const { email, refreshToken } = result.user
          const { accessToken, providerId } = credential
          resolve({
            accessToken: accessToken || '',
            authProvider: providerId,
            email: email || '',
            refreshToken: refreshToken,
          })
        }
      })
      .catch((error) => {
        reject(new Error(`${error.code}: ${error.message}`))
      })
  })
}

// TO-DO: Firebase Auth Error handler
const handleErrors = (code) => {}

export const signOutSocial = () => {
  signOut(AUTH)
    .then((result) => {})
    .catch((error) => {})
}
