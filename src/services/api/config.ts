import { requestGraphql } from './request'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import { AUTH_TOKEN, CHANNEL_INFO } from 'config/constants'
import { getData, clearData, saveData } from 'services/storage'
import { MUTATION_REFRESH_TOKEN } from 'services/graphql'

const { REACT_APP_API_ENDPOINT, REACT_APP_ORGANIZATION_URL } = process.env
const httpLink = createHttpLink({
  uri: `https://${REACT_APP_API_ENDPOINT}/graphql`,
})

let isRefreshing = false
let pendingRequests: any[] = []

const setIsRefreshing = (value) => {
  isRefreshing = value
}

const addPendingRequest = (pendingRequest: Function) => {
  pendingRequests.push(pendingRequest)
}

const resolvePendingRequests = () => {
  pendingRequests.map((callback: any) => callback())
  pendingRequests = []
}

const invalidData = () => {
  clearData()
  window.location.href = '/'
}

const refreshToken = async (token) => {
  try {
    return requestGraphql({
      query: MUTATION_REFRESH_TOKEN,
      headers: {
        authorization: token ? `Bearer ${token}` : '',
        organization: REACT_APP_ORGANIZATION_URL,
      },
    })
  } catch (error) {
    console.warn(`refresh token error -> `, error)
  }
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (!err.extensions.code) {
          invalidData()
          return
        }
        if (err.extensions.code === 'UNAUTHENTICATED') {
          switch (err.message) {
            case 'INVALID_TOKEN':
              if (!isRefreshing) {
                setIsRefreshing(true)
                try {
                  const token = getData(AUTH_TOKEN)
                  return fromPromise(
                    refreshToken(token)
                      .then(({ data }: any) => {
                        const accessToken = data?.data?.refreshToken?.refreshToken?.accessToken
                        if (!accessToken) {
                          invalidData()
                          return
                        }
                        saveData(AUTH_TOKEN, accessToken)
                        const headers = operation.getContext().headers
                        operation.setContext({
                          headers: {
                            ...headers,
                            authorization: `Bearer ${accessToken}`,
                          },
                        })
                        return forward(operation)
                      })
                      .catch(() => invalidData())
                  ).flatMap(() => {
                    resolvePendingRequests()
                    setIsRefreshing(false)
                    return forward(operation)
                  })
                } catch (error) {
                  console.warn('error on refresh token')
                }
              }
              else {
                return fromPromise(
                  new Promise((resolve) => {
                    console.log('PROMISE >>>>>>>>>>>')
                    // addPendingRequest(() => resolve())
                  })
                ).flatMap(() => {
                  return forward(operation)
                })
              }
              break
            case 'exception:PASSWORD_MISMATCH':
              break
            default:
              invalidData()
          }
          if (err.extensions.code === 'FORBIDDEN') {
            console.warn(
              'User dont have permission to execute this action -> ',
              operation
            )
          }
        }
      }
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
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
      organization: REACT_APP_ORGANIZATION_URL,
      // TO-DO: REACT_APP_HOME_CHANNEL_ID is a temporary env as we will not have a home channel,
      // instead we will have a home page with the content of all channels,
      // so the user can select a specific channel or not. We don't have an API for that yet.
      channel: channel?.id || '',
    },
  }
})

const Client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
})

export { Client }
