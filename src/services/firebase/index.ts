import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  fetchSignInMethodsForEmail,
  linkWithCredential,
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

function getProvider(kind: string) {
  switch (kind) {
    case 'facebook':
      return FB_PROVIDER
    case 'google':
      return GOOGLE_PROVIDER
    default:
      throw new Error(`No provider implemented for ${kind}`)
  }
}

export const SocialSignIn = (
  kind: Social
): Promise<CreateAccountSocialSignInDto> => {
  return new Promise(function (resolve, reject) {
    const PROVIDER = getProvider(kind)
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
        if (error.code === 'auth/account-exists-with-different-credential') {
          const pendingCred = error.credential
          const email = error.email
          fetchSignInMethodsForEmail(AUTH, email).then((methods) => {
            const provider = getProvider(methods[0])
            signInWithPopup(AUTH, provider).then((result) => {
              linkWithCredential(result.user, pendingCred).then((usercred) => {
                const credential =
                  kind === 'facebook'
                    ? FacebookAuthProvider.credentialFromResult(usercred)
                    : GoogleAuthProvider.credentialFromResult(usercred)
                if (credential) {
                  const { email, refreshToken } = usercred.user
                  const { accessToken, providerId } = credential
                  resolve({
                    accessToken: accessToken || '',
                    authProvider: providerId,
                    email: email || '',
                    refreshToken: refreshToken,
                  })
                }
              })
            })
          })
        }
      })
  })
}

export const signOutSocial = () => {
  signOut(AUTH)
    .then((result) => {})
    .catch((error) => {})
}
