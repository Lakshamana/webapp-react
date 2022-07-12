import { useApolloClient } from '@apollo/client'
import {
  AUTH_TOKEN,
  FIREBASE_TOKEN
} from 'config/constants'
import { useFlags } from 'contexts/flags'
import { createContext, useContext, useEffect, useState } from 'react'
import { signOutFB } from 'services/firebase'
import {
  MUTATION_SIGNOUT,
  QUERY_CHANNEL, QUERY_ME
} from 'services/graphql'
import {
  useAuthStore, useChannelsStore,
  useCustomizationStore, useOrganizationStore, useThemeStore
} from 'services/stores'

import { LoadingScreen } from 'components'
import { clearData, getData } from 'services/storage'

import { useTranslation } from 'react-i18next'
import { AuthTypes } from './types'

import { configEnvs } from 'config/envs'

import { setOrganizationData } from 'config/organization'

import axios from 'axios'
import { ColorMode } from 'types/common'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  return context as AuthTypes
}

export const AuthProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const { user, setUser, setAccount, account } = useAuthStore()
  const { setOrganization } = useOrganizationStore()
  const { setActiveChannelConfig, setOrganizationConfig } =
    useCustomizationStore()
  const [loading, setLoading] = useState(true)
  const [loadingAccount, setLoadingAcount] = useState(false)
  const { setActiveChannel, activeChannel } = useChannelsStore()
  const { CHANNELS, ORGANIZATION } = useFlags()
  const { setColorMode } = useThemeStore()

  const client = useApolloClient()

  const accessToken = getData(AUTH_TOKEN)
  const firebaseToken = getData(FIREBASE_TOKEN)

  const signed = !!accessToken
  const { REACT_APP_API_ENDPOINT, REACT_APP_ORGANIZATION_URL, NODE_ENV } = process.env
  const origin =
    NODE_ENV === 'development'
      ? REACT_APP_ORGANIZATION_URL
      : window.location.origin

  const updateAccount = async (account) => {
    await setAccount(account)
  }

  const updateUser = async (user) => {
    await setUser(user)
  }

  const loadAccount = async () => {
    setLoadingAcount(true)
    if (account && user) {
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
      setActiveChannel({
        id: data.channel.id,
        name: data.channel.name,
        slug: data.channel.slug || '',
        kind: data.channel.kind || '',
      })
    }
    setLoading(false)
  }

  const getAccount = () => {
    new Promise(async (resolve) => {
      try {
        const { data } = await client.query({
          query: QUERY_ME,
        })
        if (data?.me) {
          const userData = data.me.profile
          const accountData = data.me.account
          updateUser(userData)
          if (data.me.profile?.locale) i18n.changeLanguage(data.me.profile.locale)
          updateAccount(accountData)
          setLoadingAcount(false)
        }
        resolve(data.me)
      } catch {
      } finally {
        setLoadingAcount(false)
      }
    })
  }

  const getOrganization = () => {
    new Promise(async (resolve, reject) => {
      try {
        const { data } = await axios.get(
          `https://${REACT_APP_API_ENDPOINT}/organizations/public/${configEnvs.organization} `,
          {
            headers: {
              organization: origin || ''
            }
          }
        )

        if (data?.body?.data) {
          const dataOrganization = data?.body?.data
          setOrganizationData(dataOrganization)
          setOrganization(dataOrganization)
          setLoading(false)
        }
        resolve(true)
      } catch (error) {
        reject(error)
      } finally {
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
    // TODO: Redirect based on Org kind
    window.location.href = '/login'
  }

  useEffect(() => {
    if (!accessToken) clearData()
    if (!accessToken && !firebaseToken) return
    loadAccount()
    // eslint-disable-next-line
  }, [accessToken, firebaseToken])

  useEffect(() => {
    if (activeChannel?.id) {
      setActiveChannelConfig(CHANNELS[activeChannel.id])
      if (CHANNELS[activeChannel.id]?.THEME) setColorMode(CHANNELS[activeChannel.id]?.THEME.toLowerCase() as ColorMode)
    }
    // eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
    getOrganization()
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
        loadingAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
