import { useState, useEffect, createContext, useContext } from 'react'
import { useApolloClient } from '@apollo/client'
import {
  QUERY_ORGANIZATION_PUBLIC_SETTINGS,
  QUERY_ME,
  MUTATION_SIGNOUT,
  QUERY_CHANNELS,
} from 'services/graphql'
import {
  useAuthStore,
  useOrganizationStore,
  useChannelsStore,
} from 'services/stores'
import {
  USER_INFO,
  ORGANIZATION_INFO,
  AUTH_TOKEN,
  ACCOUNT_INFO,
  CHANNEL_INFO,
} from 'config/constants'

import { saveData, getData, clearData } from 'services/storage'
import { LoadingScreen } from 'components'

import { AuthTypes } from './types'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context as AuthTypes
}

export const AuthProvider = ({ children }) => {
  const { user, setUser, setAccount, account } = useAuthStore()
  const { organization, setOrganization } = useOrganizationStore()
  const [loading, setLoading] = useState(true)
  const [loadingAccount, setLoadingAcount] = useState(false)
  const { setActiveChannel, activeChannel } = useChannelsStore()

  const storedChannel = getData(CHANNEL_INFO)

  const client = useApolloClient()

  const signed = !!user
  const [kind, setKind] = useState('public')

  const accessToken = getData(AUTH_TOKEN)

  const { REACT_APP_ORGANIZATION_ID } = process.env

  const updateAccount = async (account) => {
    await saveData(ACCOUNT_INFO, account)
    await setAccount(account)
  }

  const updateUser = async (user) => {
    await saveData(USER_INFO, user)
    await setUser(user)
  }

  const loadAccount = async () => {
    setLoadingAcount(true)
    if (account && user) {
      setLoadingAcount(false)
      return
    }
    const accountData = getData(ACCOUNT_INFO)
    const userData = getData(USER_INFO)
    if (accountData && userData) {
      setAccount(accountData)
      setUser(userData)
      setLoadingAcount(false)
      return
    }
    if (accessToken) await getAccount()
  }

  const updateActiveChannel = async (channel?: string) => {
    setLoading(true)
    const { data } = await client.query({
      query: QUERY_CHANNELS,
      variables: {
        filter: {
          name__exact: channel || storedChannel?.name,
        },
      },
    })
    if (data?.channels.length) {
      setActiveChannel(data.channels[0])
      setLoading(false)
    }
    setLoading(false)
  }

  const getAccount = () => {
    new Promise(async (resolve, reject) => {
      try {
        const { data } = await client.query({
          query: QUERY_ME,
        })
        if (data?.me) {
          const userData = data.me.profile
          const accountData = data.me.account
          updateUser(userData)
          updateAccount(accountData)
          setLoadingAcount(false)
        }
        resolve(data.me)
      } catch {
        setLoadingAcount(false)
      }
    })
  }

  const loadOrganization = async () => {
    if (organization) {
      if (organization.kind) setKind(organization.kind)
      setLoading(false)
      return
    }
    const organizationData = getData(ORGANIZATION_INFO)
    if (organizationData) {
      setOrganization(organizationData)
      setKind(organizationData.kind)
      setLoading(false)
      return
    }
    await getOrganization()
  }

  const getOrganization = () => {
    new Promise(async (resolve, reject) => {
      try {
        const { data } = await client.query({
          query: QUERY_ORGANIZATION_PUBLIC_SETTINGS,
          variables: {
            id: REACT_APP_ORGANIZATION_ID,
          },
        })
        if (data?.organizationPublicSettings) {
          const dataOrganization = data.organizationPublicSettings
          saveData(ORGANIZATION_INFO, dataOrganization)
          setOrganization(dataOrganization)
          setKind(dataOrganization.kind)
          setLoading(false)
        }
        resolve(true)
      } catch (error) {
        reject(error)
        setLoading(false)
      }
    })
  }

  const signOut = async () => {
    if (accessToken) {
      await client.mutate({
        mutation: MUTATION_SIGNOUT,
        variables: {
          payload: {
            accessToken: accessToken,
          },
        },
      })
    }
    await clearData()
    // TO-DO: Redirect based on Org kind (public, private, exclusive)
    window.location.href = '/login'
  }

  useEffect(() => {
    loadAccount()
    // eslint-disable-next-line
  }, [accessToken])

  useEffect(() => {
    loadOrganization()
    // eslint-disable-next-line
  }, [])

  return loading ? (
    <LoadingScreen />
  ) : (
    <AuthContext.Provider
      value={{
        signOut,
        updateAccount,
        updateUser,
        getAccount,
        updateActiveChannel,
        signed,
        kind,
        loadingAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
