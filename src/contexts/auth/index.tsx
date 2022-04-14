import { useState, useEffect, createContext, useContext } from 'react'
import { useApolloClient } from '@apollo/client'
import {
  QUERY_ORGANIZATION_PUBLIC_SETTINGS,
  QUERY_ME,
  MUTATION_SIGNOUT,
  QUERY_CHANNEL,
} from 'services/graphql'
import { useFlags } from 'contexts/flags'
import {
  useAuthStore,
  useOrganizationStore,
  useChannelsStore,
  useCustomizationStore,
} from 'services/stores'
import {
  signOutFB,
  authWithCustomToken,
  isUserLoggedFB,
} from 'services/firebase'
import {
  USER_INFO,
  ORGANIZATION_INFO,
  AUTH_TOKEN,
  ACCOUNT_INFO,
  FIREBASE_TOKEN,
} from 'config/constants'

import { saveData, getData, clearData } from 'services/storage'
import { LoadingScreen } from 'components'

import { AuthTypes } from './types'
import { Kinds } from 'generated/graphql'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context as AuthTypes
}

export const AuthProvider = ({ children }) => {
  const { user, setUser, setAccount, account } = useAuthStore()
  const { organization, setOrganization } = useOrganizationStore()
  const { setActiveChannelConfig, setOrganizationConfig } =
    useCustomizationStore()
  const [loading, setLoading] = useState(true)
  const [loadingAccount, setLoadingAcount] = useState(false)
  const { setActiveChannel, activeChannel } = useChannelsStore()
  const { CHANNELS, ORGANIZATION } = useFlags()

  const client = useApolloClient()

  const signed = !!user

  const [kind, setKind] = useState<Kinds>(Kinds.Public)

  const accessToken = getData(AUTH_TOKEN)
  const firebaseToken = getData(FIREBASE_TOKEN)

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

  const updateActiveChannel = async (channelSlug?: string) => {
    if (!channelSlug) return
    setLoading(true)
    const { data } = await client.query({
      query: QUERY_CHANNEL,
      variables: {
        slug: channelSlug,
      },
    })
    if (data?.channel) {
      setActiveChannel(data.channel)
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
      if (organization.kind) setKind(organization.kind as Kinds)
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
    await signOutFB()
    await clearData()
    // TODO: Redirect based on Org kind (public, private, exclusive)
    window.location.href = '/login'
  }

  useEffect(() => {
    loadAccount()
    // eslint-disable-next-line
  }, [accessToken])

  useEffect(() => {
    if (accessToken && !isUserLoggedFB()) authWithCustomToken()
    //eslint-disable-next-line
  }, [firebaseToken])

  useEffect(() => {
    if (activeChannel?.id) {
      setActiveChannelConfig(CHANNELS[activeChannel.id])
    }
    // eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
    loadOrganization()
    setOrganizationConfig(ORGANIZATION)
    // eslint-disable-next-line
  }, [])

  if (loading) return <LoadingScreen />

  return (
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
