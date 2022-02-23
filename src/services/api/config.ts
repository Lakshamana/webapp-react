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
import { MUTATION_REFRESH_TOKEN } from 'services/graphql/mutation/refreshToken'

const {
  REACT_APP_API_ENDPOINT,
  REACT_APP_ORGANIZATION_URL
} = process.env

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

const httpLink = createHttpLink({
  uri: `https://${REACT_APP_API_ENDPOINT}/graphql`,
})

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        if (!err.extensions.response) {
          clearData()
          window.location.href = '/'
          return
        }

        switch (err.extensions.response.message) {
          case 'INVALID_TOKEN':
            try {
              const token = getData(AUTH_TOKEN)
              const result = fromPromise(refreshToken(token))
              result.subscribe((data) => {
                const accessToken =
                  data?.data?.data?.refreshToken?.refreshToken?.accessToken

                if (!accessToken) {
                  clearData()
                  window.location.href = '/'
                  return
                }

                saveData(AUTH_TOKEN, accessToken)

                const authorization = accessToken ? `Bearer ${accessToken}` : ''
                const headers = operation.getContext().headers
                operation.setContext({
                  headers: {
                    ...headers,
                    authorization,
                  },
                })

                return forward(operation)
              })
            } catch (error) {
              console.warn('error on refresh token', error)
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
  // return the headers to the context so httpLink can read them
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
