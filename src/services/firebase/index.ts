import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  AuthError,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { CreateAccountSocialSignInDto } from 'generated/graphql'
import { SocialType } from 'types/common'

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

onAuthStateChanged(AUTH, (user) => {})

const FB_PROVIDER = new FacebookAuthProvider()
const GOOGLE_PROVIDER = new GoogleAuthProvider()

function getProvider(kind: string) {
  switch (kind) {
    case 'facebook':
    case 'facebook.com':
      return FB_PROVIDER
    case 'google':
    case 'google.com':
      return GOOGLE_PROVIDER
    default:
      throw new Error(`No provider implemented for ${kind}`)
  }
}

export const SocialSignIn = (
  kind: SocialType
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
          const { refreshToken } = result.user
          const { accessToken, providerId } = credential
          resolve({
            accessToken: accessToken || '',
            authProvider: providerId,
            refreshToken: refreshToken,
          })
        }
      })
      .catch(function (err: AuthError) {
        const email = err.customData?.email || ''
        const pendingCred =
          kind === 'facebook'
            ? FacebookAuthProvider.credentialFromError(err)
            : GoogleAuthProvider.credentialFromError(err)

        if (err.code === 'auth/account-exists-with-different-credential') {
          fetchSignInMethodsForEmail(AUTH, email).then((methods) => {
            const provider = getProvider(methods[0])
            signInWithPopup(AUTH, provider)
              .then((result) => {
                if (pendingCred) {
                  linkWithCredential(result.user, pendingCred)
                    .then((usercred) => {
                      const credential =
                        kind === 'facebook'
                          ? FacebookAuthProvider.credentialFromResult(usercred)
                          : GoogleAuthProvider.credentialFromResult(usercred)
                      if (credential) {
                        const { refreshToken } = usercred.user
                        const { accessToken, providerId } = credential
                        resolve({
                          accessToken: accessToken || '',
                          authProvider: providerId,
                          refreshToken: refreshToken,
                        })
                      }
                    })
                    .catch((err) => {
                      reject(err)
                    })
                }
              })
              .catch((err) => {
                reject(err)
              })
          })
        }
        reject(err)
      })
  })
}

export const signOutSocial = () => {
  signOut(AUTH)
    .then((result) => {})
    .catch((error) => {})
}
