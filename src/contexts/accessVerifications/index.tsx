import { useState, useEffect, createContext } from 'react'
import { useTranslation } from 'react-i18next'
import { useApolloClient } from '@apollo/client'
import { MUTATION_CHANNEL_PASSWORD_CHECK } from 'services/graphql'
import { useChannelsStore } from 'services/stores'

import { PrivateContent } from 'components'

import { Kinds } from 'generated/graphql'

const AccessVerificationsContext = createContext({})

export const AccessVerificationsProvider = ({ children }) => {
  const { t } = useTranslation()
  const [channelAccessGranted, setChannelAccesGranted] =
    useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const { activeChannel, activeChannelKind } = useChannelsStore()

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

  useEffect(() => {
    if (activeChannelKind === Kinds.Private) setChannelAccesGranted(false)
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
    <AccessVerificationsContext.Provider value={{}}>
      {children}
    </AccessVerificationsContext.Provider>
  )
}

export default AccessVerificationsProvider
