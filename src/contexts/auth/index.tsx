import React, { useState, useEffect, createContext, useContext } from 'react';
import { useApolloClient } from '@apollo/client'
import {
  QUERY_ORGANIZATION_PUBLIC_SETTINGS,
  MUTATION_SIGNOUT,
} from 'services/graphql'
import { useAuthStore, useOrganizationStore } from 'services/stores'
import {
  USER_KEY,
  ORGANIZATION_INFO,
  AUTH_TOKEN,
  ACCOUNT_INFO,
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
  const [ loading, setLoading ] = useState(true)

  const client = useApolloClient()

  const signed = !!user
  const [ kind, setKind ] = useState('public');
  
  const { REACT_APP_ORGANIZATION_ID } = process.env

  const updateUser = async (user) => {
    saveData(USER_KEY, user)
    await getOrganization()
    setUser(user)
  }

  const updateAccount = async (account) => {
    saveData(ACCOUNT_INFO, account)
    setAccount(account)
  }

  const loadAccount = async () => {
    if (account) {
      setLoading(false)
      return
    }
    const accountData = getData(ACCOUNT_INFO)
    if (accountData) {
      setAccount(accountData)
      setLoading(false)
      return
    }
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
    const accessToken = getData(AUTH_TOKEN)
    if (accessToken) {
      await client.mutate({
        mutation: MUTATION_SIGNOUT,
        variables: {
          payload: {
            accessToken: getData(AUTH_TOKEN),
          },
        },
      })
    }
    await clearData()
    // TO-DO: Redirect based on Org kind (public, private, exclusive)
    window.location.href = '/login'
  }

  useEffect(() => {
    loadOrganization()
    loadAccount()
  }, [])

  return loading ? (
    <LoadingScreen />
  ) : (
    <AuthContext.Provider
      value={{ signOut, updateUser, updateAccount, signed, kind }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
