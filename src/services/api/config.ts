import {
  ApolloClient,
  from,
  fromPromise,
  HttpLink,
  InMemoryCache,
  split
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import * as Sentry from '@sentry/browser'
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
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { requestGraphql } from './request'

const {
  REACT_APP_API_ENDPOINT,
  REACT_APP_ORGANIZATION_URL,
  NODE_ENV,
  REACT_APP_WSS_ENDPOINT,
} = process.env

const ORGANIZATION_URL =
  NODE_ENV === 'development'
    ? REACT_APP_ORGANIZATION_URL
    : `https://${window.location.host}`

const httpLink = new HttpLink({
  uri: `https://${REACT_APP_API_ENDPOINT}/graphql`,
})

export const websocket = new SubscriptionClient(
  `wss://${REACT_APP_WSS_ENDPOINT}/graphql`,
  {
    reconnect: true,
    lazy: true,
    reconnectionAttempts: 3,
    connectionParams: {
      channel: getData(CHANNEL_INFO)?.id,
    },
  }
)

const wsLink = new WebSocketLink(websocket)

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink
)

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

    const isAnonymousUser = getData(ANONYMOUS_AUTH) === '1'

    if (!graphQLErrors) return

    if (operation.operationName === 'SubscribeToLiveEvent') {
      console.log('SubscriptionError', graphQLErrors)
      return
    }

    for (let err of graphQLErrors) {
      if (!err.extensions?.code) {
        console.log('This error is not mapped: ', JSON.stringify(graphQLErrors))
        invalidData()
        return
      }

      if (err.extensions?.code === '500') {
        Sentry.configureScope((scope) =>
          scope.setTransactionName(operation.operationName).setLevel('error')
        )
        Sentry.captureException(`[Graphql error]: ${err.message}`)
      }

      //TODO: backend needs to change errors messages related to WRONG CREDENTIALS on Login
      if (
        err.extensions?.code === '404' &&
        operation.operationName !== 'VerifyMail' &&
        err.message !== 'exception:ACCOUNT_NOT_FOUND'
      ) {
        show404()
        return
      }

      if (err.extensions?.code === 'FORBIDDEN') {
        console.log(
          'User dont have permission to execute this action -> ',
          operation
        )
      }

      if (err.extensions?.code === 'UNAUTHENTICATED') {
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
      channel: channel?.id || '',
    },
  }
})

const Client = new ApolloClient({
  link: from([errorLink, authLink.concat(splitLink)]),
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
