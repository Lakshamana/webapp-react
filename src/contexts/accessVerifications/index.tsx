import { useLazyQuery, useMutation } from '@apollo/client'
import { createContext, useContext, useEffect, useState } from 'react'

import {
  MUTATION_CHANNEL_PASSWORD_CHECK,
  MUTATION_ORGANIZATION_PASSWORD_CHECK,
  QUERY_CHANNEL_ENTITLEMENTS,
  QUERY_ORGANIZATION_ENTITLEMENTS
} from 'services/graphql'

import {
  useAuthStore,
  useChannelsStore,
  useOrganizationStore
} from 'services/stores'

import { useDisclosure } from '@chakra-ui/react'
import { AccessVerificationsTypes } from './types'

import { useTranslation } from 'react-i18next'
import {
  isEntityGeolocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'

const AccessVerificationsContext = createContext({})

export const useAccessVerifications = () => {
  const context = useContext(AccessVerificationsContext)
  return context as AccessVerificationsTypes
}

export const AccessVerificationsProvider = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const { t } = useTranslation()

  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [isGeolocked, setIsGeolocked] = useState<boolean>(false)

  const [errorOnPrivateRequestAccess, setErrorOnPrivateRequestAccess] =
    useState<string>('')

  const [contentType, setContentType] = useState<'channel' | 'organization'>(
    'channel'
  )

  const [entitlements, setEntitlements] = useState([])

  const { activeChannel } = useChannelsStore()

  const { organization } = useOrganizationStore()

  const { isAnonymousAccess } = useAuthStore()

  const getRequestContentAccessQuery = () => {
    const query = {
      channel: MUTATION_CHANNEL_PASSWORD_CHECK,
      organization: MUTATION_ORGANIZATION_PASSWORD_CHECK,
    }
    return query[contentType]
  }

  const [getEntitlements, { loading: isLoadingEntitlements }] = useLazyQuery(
    contentType === 'channel'
      ? QUERY_CHANNEL_ENTITLEMENTS
      : QUERY_ORGANIZATION_ENTITLEMENTS,
    {
      variables: {
        id: contentType === 'channel' ? activeChannel?.id : organization?.id,
      },
      onCompleted: (result) => {
        setEntitlements(result[contentType].entitlements)
      },
    }
  )

  const requestContentAccess = (password: string) => {
    setErrorOnPrivateRequestAccess('')

    const isChannel = contentType === 'channel'

    privateContentAccess({
      variables: {
        [isChannel ? 'channelId' : 'organizationId']: isChannel
          ? activeChannel?.id
          : organization?.id,
        password,
      },
    })
  }

  const [privateContentAccess, { loading: isLoadingPasswordCheck }] =
    useMutation(getRequestContentAccessQuery(), {
      onCompleted: (result) => {
        const passwordCheckResult = result[`${contentType}PasswordCheck`]
        passwordCheckResult.correct
          ? setIsPrivate(false)
          : setErrorOnPrivateRequestAccess(
              t('page.post.private_content.incorrect_password')
            )
      },
    })

  const channelRoutes = [
    `/c/${activeChannel?.slug}`,
    `/c/${activeChannel?.slug}/categories`,
    `/c/${activeChannel?.slug}/feed`,
    `/c/${activeChannel?.slug}/mylist`,
    `/c/${activeChannel?.slug}/live`,
  ]

  const organizationRoutes = ['/channels']

  useEffect(() => {
    const isOrgRoute = organizationRoutes.includes(window.location.pathname)
    if (isOrgRoute && organization) {
      setContentType('organization')
      setIsPrivate(isEntityPrivate(organization))
      setIsOnPaywall(isEntityOnPaywall(organization))
      setIsGeolocked(isEntityGeolocked(organization))
    }
    //eslint-disable-next-line
  }, [organization])

  const clearAllStatus = () => {
    setIsOnPaywall(false)
    setIsGeolocked(false)
    setIsPrivate(false)
  }

  useEffect(() => {
    const isChannelRoute = channelRoutes.includes(window.location.pathname)

    if (isChannelRoute && activeChannel) {
      setContentType('channel')
      setIsPrivate(isEntityPrivate(activeChannel))
      setIsOnPaywall(isEntityOnPaywall(activeChannel))
      setIsGeolocked(isEntityGeolocked(activeChannel))
    }
    //eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
    if (isOnPaywall && isAnonymousAccess) {
      window.location.href = '/create-your-account'
    }
    if (isOnPaywall) getEntitlements()

    //eslint-disable-next-line
  }, [isOnPaywall])

  const showActionNotAllowedAlert = () => onOpen()
  const closeActionNotAllowed = () => onClose()
  const isActionNotAllowedOpen = isOpen

  return (
    <AccessVerificationsContext.Provider
      value={{
        contentType,
        showActionNotAllowedAlert,
        isActionNotAllowedOpen,
        closeActionNotAllowed,
        isOnPaywall,
        isPrivate,
        isGeolocked,
        entitlements,
        isLoadingEntitlements,
        isLoadingPasswordCheck,
        requestContentAccess,
        errorOnPrivateRequestAccess,
        clearAllStatus,
      }}
    >
      {children}
    </AccessVerificationsContext.Provider>
  )
}

export default AccessVerificationsProvider
