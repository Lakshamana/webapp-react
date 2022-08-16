import { useApolloClient } from '@apollo/client'
import { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MUTATION_CHANNEL_PASSWORD_CHECK } from 'services/graphql'
import { useAuthStore, useChannelsStore } from 'services/stores'

import { PrivateContent } from 'components'

import { Kinds } from 'generated/graphql'

import { useDisclosure } from '@chakra-ui/react'
import { AccessVerificationsTypes } from './types'

const AccessVerificationsContext = createContext({})

export const useAccessVerifications = () => {
  const context = useContext(AccessVerificationsContext)
  return context as AccessVerificationsTypes
}

export const AccessVerificationsProvider = ({ children }) => {
  const { t } = useTranslation()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [channelAccessGranted, setChannelAccesGranted] =
    useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { activeChannel, activeChannelKind } = useChannelsStore()
  const { isAnonymousAccess } = useAuthStore()

  const client = useApolloClient()

  const requestPrivateChannelAccess = async (password: string) => {
    setIsLoading(true)
    setError('')
    await client
      .mutate({
        mutation: MUTATION_CHANNEL_PASSWORD_CHECK,
        variables: {
          channelId: activeChannel?.id,
          password,
        },
      })
      .then((result) => {
        result.data.channelPasswordCheck.correct
          ? setChannelAccesGranted(true)
          : setError(t('page.channels.incorrect_password'))
      })
      .finally(() => setIsLoading(false))
  }

  const isRouteElegibleToChannelAnonymous =
    window.location.pathname === `/c/${activeChannel?.slug}` ||
    window.location.pathname === `/c/${activeChannel?.slug}/categories` ||
    window.location.pathname === `/c/${activeChannel?.slug}/feed` ||
    window.location.pathname === `/c/${activeChannel?.slug}/mylist` ||
    window.location.pathname === `/c/${activeChannel?.slug}/live`

  const showActionNotAllowedAlert = () => onOpen()

  const closeActionNotAllowed = () => onClose()

  const isActionNotAllowedOpen = isOpen

  useEffect(() => {
    if (activeChannelKind === Kinds.Private) setChannelAccesGranted(false)
    if (
      activeChannelKind === Kinds.Exclusive &&
      isAnonymousAccess &&
      isRouteElegibleToChannelAnonymous
    ) {
      window.location.href = '/create-your-account'
    }
    //eslint-disable-next-line
  }, [activeChannelKind])

  if (activeChannelKind === Kinds.Private && !channelAccessGranted)
    return (
      <PrivateContent
        type="channel"
        requestAccess={(password) => requestPrivateChannelAccess(password)}
        isLoadingRequest={isLoading}
        error={error}
      />
    )

  return (
    <AccessVerificationsContext.Provider
      value={{
        showActionNotAllowedAlert,
        isActionNotAllowedOpen,
        closeActionNotAllowed,
      }}
    >
      {children}
    </AccessVerificationsContext.Provider>
  )
}

export default AccessVerificationsProvider
