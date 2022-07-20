import {
  ApolloClient,
  createHttpLink,
  from,
  fromPromise,
  InMemoryCache
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import {
  ANONYMOUS_AUTH,
  AUTH_TOKEN,
  CHANNEL_INFO,
  FIREBASE_TOKEN
} from 'config/constants'
import {
  authWithCustomToken,
  isUserLoggedFB,
  signOutFB
} from 'services/firebase'
import { MUTATION_REFRESH_TOKEN } from 'services/graphql'
import { clearData, getData, saveData } from 'services/storage'
import { requestGraphql } from './request'

const isAnonymousUser = getData(ANONYMOUS_AUTH) === '1'

const { REACT_APP_API_ENDPOINT, REACT_APP_ORGANIZATION_URL, NODE_ENV } =
  process.env

const ORGANIZATION_URL = REACT_APP_ORGANIZATION_URL
//TODO: dynamic metadata tests
// NODE_ENV === 'development'
//   ? REACT_APP_ORGANIZATION_URL
//   : window.location.origin

const httpLink = createHttpLink({
  uri: `https://${REACT_APP_API_ENDPOINT}/graphql`,
})

let isRefreshing = false
let pendingRequests: any[] = []

const setIsRefreshing = (value) => {
  isRefreshing = value
}

const addPendingRequest = (pendingRequest: Function) =>
  pendingRequests.push(pendingRequest)

const resolvePendingRequests = async () => {
  pendingRequests.map((callback: any) => callback())
  pendingRequests = []
}

const invalidData = () => {
  clearData()
  window.location.href = '/'
}

//TODO: Refactor routes structure to use history outside of a react component
const show404 = () => {
  window.location.href = '/404'
}

const refreshToken = async (token) => {
  try {
    return requestGraphql({
      query: MUTATION_REFRESH_TOKEN,
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        organization: ORGANIZATION_URL,
      },
    })
  } catch (error) {
    console.warn(`refresh token error -> `, error)
  }
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }

    if (!graphQLErrors) return

    for (let err of graphQLErrors) {
      if (!err.extensions.code) {
        console.log('This error is not mapped: ', JSON.stringify(graphQLErrors))
        invalidData()
        return
      }

      //TODO: backend needs to change errors messages related to WRONG CREDENTIALS on Login
      if (
        err.extensions.code === '404' &&
        operation.operationName !== 'VerifyMail' &&
        err.message !== 'exception:ACCOUNT_NOT_FOUND'
      ) {
        show404()
        return
      }

      if (err.extensions.code === 'FORBIDDEN') {
        console.log(
          'User dont have permission to execute this action -> ',
          operation
        )
      }

      if (err.extensions.code === 'UNAUTHENTICATED') {
        if (
          err.message === 'exception:PASSWORD_MISMATCH' ||
          err.message === 'exception:TOO_MANY_ATTEMPTS_TRY_LATER' ||
          err.message === 'exception:DEACTIVED_ACCOUNT'
        )
          return

        if (err.message !== 'INVALID_TOKEN') {
          invalidData()
          return
        }

        if (err.message === 'INVALID_TOKEN' && isAnonymousUser) {
          window.location.replace('/create-your-account')
          return
        }

        if (isRefreshing) {
          return fromPromise(
            new Promise((resolve) => addPendingRequest(resolve))
          ).flatMap(() => forward(operation))
        }

        setIsRefreshing(true)
        try {
          const token = getData(AUTH_TOKEN)
          return fromPromise(
            refreshToken(token)
              .then(async ({ data }: any) => {
                const accessToken =
                  data?.data?.refreshToken?.refreshToken?.accessToken
                const firebaseToken =
                  data?.data?.refreshToken?.refreshToken?.firebaseToken
                if (!accessToken || !firebaseToken) {
                  invalidData()
                  return
                }
                saveData(AUTH_TOKEN, accessToken)
                saveData(FIREBASE_TOKEN, firebaseToken)
                const isFBLogged = await isUserLoggedFB()
                if (isFBLogged) await signOutFB()
                await authWithCustomToken()
                const headers = operation.getContext().headers
                operation.setContext({
                  headers: {
                    ...headers,
                    authorization: `Bearer ${accessToken}`,
                  },
                })
                return forward(operation)
              })
              .catch(invalidData)
          ).flatMap(() => {
            resolvePendingRequests()
            setIsRefreshing(false)
            return forward(operation)
          })
        } catch (error) {
          console.warn('error on refresh token')
        }
      }
    }
  }
)

const authLink = setContext((_, { headers }) => {
  const token = getData(AUTH_TOKEN)
  const channel = getData(CHANNEL_INFO)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      organization: ORGANIZATION_URL,
      // TO-DO: REACT_APP_HOME_CHANNEL_ID is a temporary env as we will not have a home channel,
      // instead we will have a home page with the content of all channels,
      // so the user can select a specific channel or not. We don't have an API for that yet.
      channel: channel?.id || '',
    },
  }
})

const Client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache({
    typePolicies: {
      Category: {
        fields: {
          customization: {
            merge: true,
          },
        },
      },
    },
  }),
})

export { Client }
