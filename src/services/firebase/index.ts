import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  AuthError,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  signInWithCustomToken,
} from 'firebase/auth'
import { requestGraphql } from 'services/api/request'
import { initializeApp } from 'firebase/app'
import { CreateAccountSocialSignInDto } from 'generated/graphql'
import { SocialType } from 'types/common'
import { getData, saveData } from 'services/storage'
import { AUTH_TOKEN } from 'config/constants'
import { FIREBASE_TOKEN, ORGANIZATION_INFO } from 'config/constants'
import { firebaseApp } from 'config/firebase'
import { MUTATION_REFRESH_FIREBASE_TOKEN } from 'services/graphql'

const { REACT_APP_ORGANIZATION_URL } = process.env

const accessToken = getData(AUTH_TOKEN)

const CUSTOM_TOKEN_AUTH = getAuth(firebaseApp)

export const authWithCustomToken = () => {
  const FirebaseToken = getData(FIREBASE_TOKEN)
  if (FirebaseToken)
    signInWithCustomToken(CUSTOM_TOKEN_AUTH, FirebaseToken).catch(() => {
      refreshFirebaseToken()
      return
    })
  refreshFirebaseToken()
}

export const refreshFirebaseToken = async () => {
  try {
    await requestGraphql({
      query: MUTATION_REFRESH_FIREBASE_TOKEN,
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
        organization: REACT_APP_ORGANIZATION_URL,
      },
    })
      .then(({ data }: any) => {
        const newFirebaseToken =
          data?.data?.refreshToken?.refreshToken?.firebaseToken
        if (newFirebaseToken) {
          saveData(FIREBASE_TOKEN, newFirebaseToken)
          signInWithCustomToken(CUSTOM_TOKEN_AUTH, newFirebaseToken)
        }
      })
      .catch((error) => console.log(error))
  } catch (error) {
    console.warn(`refresh firebase token error -> `, error)
  }
}

// FB SOCIAL AUTH CONFIG
const { REACT_APP_FIREBASE_AUTH_DOMAIN, REACT_APP_FIREBASE_AUTH_API_KEY } =
  process.env

const AUTH_CONFIG = {
  apiKey: REACT_APP_FIREBASE_AUTH_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
}

const FirebaseAuth = initializeApp(AUTH_CONFIG, 'Auth')
const AUTH = getAuth(FirebaseAuth)

const FB_PROVIDER = new FacebookAuthProvider()
const GOOGLE_PROVIDER = new GoogleAuthProvider()
const TWITER_PROVIDER = new TwitterAuthProvider()

function getProvider(kind: string) {
  switch (kind) {
    case 'facebook':
    case 'facebook.com':
      return FB_PROVIDER
    case 'google':
    case 'google.com':
      return GOOGLE_PROVIDER
    case 'twitter':
    case 'twitter.com':
      return TWITER_PROVIDER
    default:
      throw new Error(`No provider implemented for ${kind}`)
  }
}

const generateCredential = (kind: SocialType, result: any) => {
  const Credential = {
    facebook: FacebookAuthProvider.credentialFromResult(result),
    google: GoogleAuthProvider.credentialFromResult(result),
    twitter: TwitterAuthProvider.credentialFromResult(result),
  }

  return Credential[kind]
}

const generatePendingCredential = (kind: SocialType, err: any) => {
  const Credential = {
    facebook: FacebookAuthProvider.credentialFromError(err),
    google: GoogleAuthProvider.credentialFromError(err),
    twitter: TwitterAuthProvider.credentialFromError(err),
  }

  return Credential[kind]
}

export const SocialSignIn = (
  kind: SocialType
): Promise<CreateAccountSocialSignInDto> => {
  const OrganizationData = getData(ORGANIZATION_INFO)
  AUTH.tenantId = OrganizationData?.tenant_id
  const PROVIDER = getProvider(kind)
  return new Promise(function (resolve, reject) {
    signInWithPopup(AUTH, PROVIDER)
      .then((result: any) => {
        const credential = generateCredential(kind, result)

        if (credential) {
          const { refreshToken, accessToken } = result.user['stsTokenManager']
          const { providerId } = credential

          resolve({
            accessToken,
            authProvider: providerId,
            refreshToken,
          })
        }
      })
      .catch(function (err: AuthError) {
        const email = err.customData?.email || ''
        const pendingCred = generatePendingCredential(kind, err)

        if (err.code === 'auth/account-exists-with-different-credential') {
          fetchSignInMethodsForEmail(AUTH, email).then((methods) => {
            const provider = getProvider(methods[0])
            signInWithPopup(AUTH, provider)
              .then((result) => {
                if (pendingCred) {
                  linkWithCredential(result.user, pendingCred)
                    .then((usercred) => {
                      const credential = generateCredential(kind, usercred)
                      if (credential) {
                        const { refreshToken, accessToken } =
                          usercred.user['stsTokenManager']
                        const { providerId } = credential
                        resolve({
                          accessToken,
                          authProvider: providerId,
                          refreshToken,
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

export const signOutFB = () => {
  signOut(CUSTOM_TOKEN_AUTH)
}

export const isUserLoggedFB = (): boolean => {
  return !!CUSTOM_TOKEN_AUTH.currentUser
}
