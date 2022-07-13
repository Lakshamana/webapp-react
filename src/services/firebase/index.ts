import { AUTH_TOKEN, FIREBASE_TOKEN } from 'config/constants'
import { configEnvs } from 'config/envs'
import { firebaseApp } from 'config/firebase'
import { organizationData } from 'config/organization'
import { initializeApp } from 'firebase/app'
import {
  AuthError,
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  getAuth,
  GoogleAuthProvider,
  linkWithCredential,
  linkWithPopup,
  signInAnonymously,
  signInWithCustomToken,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  UserCredential
} from 'firebase/auth'
import { CreateAccountSocialSignInDto } from 'generated/graphql'
import { getData, saveData } from 'services/storage'
import { SocialType } from 'types/common'

const CUSTOM_TOKEN_AUTH = getAuth(firebaseApp)

export const authWithCustomToken = () => {
  const firebaseToken = getData(FIREBASE_TOKEN)
  if (firebaseToken) signInWithCustomToken(CUSTOM_TOKEN_AUTH, firebaseToken)
}

export const anonymousAuth = (): Promise<string> => {
  return new Promise(function (resolve, reject) {
    signInAnonymously(CUSTOM_TOKEN_AUTH).then((result) => {
      result.user
        .getIdToken()
        .then((result) => {
          saveData(AUTH_TOKEN, result)
          resolve(result)
        })
        .catch((error) => reject(error))
    })
  })
}

const AUTH_CONFIG = {
  apiKey: configEnvs.firebaseAuthApiKey,
  authDomain: configEnvs.firebaseAuthDomain,
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

const generateCredential = (kind: SocialType, result: UserCredential) => {
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
  AUTH.tenantId = organizationData?.tenant_id || ''
  const PROVIDER = getProvider(kind)
  return new Promise(function (resolve, reject) {
    signInWithPopup(AUTH, PROVIDER)
      .then((result: UserCredential) => {
        // console.log("==> fluxo sucesso login")
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
      .catch((err: AuthError) => {
        // console.log("==> fluxo erro login")
        const email = err.customData?.email || ''
        const pendingCred = generatePendingCredential(kind, err)
        if (err.code === 'auth/account-exists-with-different-credential') {
          // console.log("==> fluxo erro 'auth/account-exists-with-different-credential'")
          fetchSignInMethodsForEmail(AUTH, email).then((methods) => {
            // console.log(methods)
            if (methods[0] === 'password') {
              // console.log("==> fluxo erro method 'password'")
              return reject(err)
            }
            const provider = getProvider(methods[0])
            if (methods[0] !== kind) {
              // console.log("==> fluxo erro if kind diferente do method")
              const { currentUser } = AUTH
              if (currentUser) {
                // console.log("==> fluxo de link de provinders")
                linkWithPopup(currentUser, provider)
                  .then((resultLink) => {
                    // console.log("==> sucesso no fluxo de link de multiplas contas")
                    // console.log(resultLink)
                    const credential = generateCredential(kind, resultLink)
                    if (credential) {
                      const { refreshToken, accessToken } =
                        resultLink.user['stsTokenManager']
                      const { providerId } = credential
                      resolve({
                        accessToken,
                        authProvider: providerId,
                        refreshToken,
                      })
                    }
                  })
                  .catch((error) => {
                    // console.log("==> erro no fluxo de link de multiplas contas")
                    return reject(error)
                  })
              }
            }
            signInWithPopup(AUTH, provider)
              .then((result: UserCredential) => {
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
                    .catch((err) => reject(err))
                }
              })
              .catch((err) => reject(err))
          })
        }
        reject(err)
      })
  })
}

export const signOutFB = () => signOut(CUSTOM_TOKEN_AUTH)
export const isUserLoggedFB = (): boolean => !!CUSTOM_TOKEN_AUTH.currentUser
