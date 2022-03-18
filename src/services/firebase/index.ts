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
  signInWithCustomToken,
} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { CreateAccountSocialSignInDto } from 'generated/graphql'
import { SocialType } from 'types/common'
import { getData } from 'services/storage'
import { FIREBASE_TOKEN, ORGANIZATION_INFO } from 'config/constants'

const { REACT_APP_FIREBASE_AUTH_API_KEY, REACT_APP_FIREBASE_AUTH_DOMAIN } =
  process.env

const OrganizationData = getData(ORGANIZATION_INFO)
const FirebaseToken = getData(FIREBASE_TOKEN)

const CONFIG = {
  apiKey: REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
}

// AUTH
const FirebaseAuth = initializeApp(CONFIG, 'Auth')

const AUTH = getAuth(FirebaseAuth)

AUTH.tenantId = OrganizationData?.tenant_id || ''

//TODO: Handle auth state changed
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

//TODO: Handle errors in signOut
export const signOutFB = () => {
  signOut(AUTH)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    })
}

export const isUserLoggedFB = (): boolean => {
  return !!AUTH.currentUser
}

// TODO: Improve this code, it's a example
export const FBAuthWithCustomToken = (): Promise<boolean> => {
  return new Promise(function (resolve, reject) {
    signInWithCustomToken(AUTH, FirebaseToken)
      .then((userCredential) => {
        const user = userCredential.user
        resolve(!!user)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
