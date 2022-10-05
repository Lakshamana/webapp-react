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

import { LoadingScreen } from 'components'
import { Organization } from 'generated/graphql'
import { useTranslation } from 'react-i18next'
import { ChannelStorageData } from 'types/channel'
import {
  entityRequireLogin,
  isEntityGeolocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'

import { useHistory } from 'react-router-dom'

import { channelRoutes, organizationRoutes } from './utils'

const AccessVerificationsContext = createContext({})

export const useAccessVerifications = () => {
  const context = useContext(AccessVerificationsContext)
  return context as AccessVerificationsTypes
}

export const AccessVerificationsProvider = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const history = useHistory()

  const [isLoadingAccessVerifications, setIsLoadingAccessVerifications] =
    useState<boolean>(true)

  const { t } = useTranslation()

  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [isGeolocked, setIsGeolocked] = useState<boolean>(false)
  const [isExclusive, setIsExclusive] = useState<boolean>(false)

  const [errorOnPrivateRequestAccess, setErrorOnPrivateRequestAccess] =
    useState<string>('')

  const [contentType, setContentType] = useState<'channel' | 'organization'>(
    'channel'
  )

  const [entitlements, setEntitlements] = useState([])

  const { activeChannel, clearActiveChannel } = useChannelsStore()

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

  const isChannelRoute = channelRoutes(activeChannel?.slug).includes(
    history.location.pathname
  )
  const isOrgRoute = organizationRoutes.includes(history.location.pathname)

  useEffect(() => {
    clearAllStatus()
    if (isOrgRoute && organization) {
      clearActiveChannel()
      setContentType('organization')
      setEntityStatus(organization).finally(() =>
        setIsLoadingAccessVerifications(false)
      )
    }
    //eslint-disable-next-line
  }, [organization, history.location])

  useEffect(() => {
    clearAllStatus()
    if (isChannelRoute && activeChannel) {
      setContentType('channel')
      setEntityStatus(activeChannel).finally(() =>
        setIsLoadingAccessVerifications(false)
      )
    }
    //eslint-disable-next-line
  }, [activeChannel, history.location])

  useEffect(() => {
    if (!isChannelRoute && !isOrgRoute) setIsLoadingAccessVerifications(false)
  }, [isChannelRoute, isOrgRoute])

  const setEntityStatus = async (entity: ChannelStorageData | Organization) => {
    await setIsPrivate(isEntityPrivate(entity))
    await setIsOnPaywall(isEntityOnPaywall(entity))
    await setIsGeolocked(isEntityGeolocked(entity))
    await setIsExclusive(entityRequireLogin(entity))
  }

  const clearAllStatus = () => {
    setIsOnPaywall(false)
    setIsGeolocked(false)
    setIsPrivate(false)
    setIsExclusive(false)
  }

  useEffect(() => {
    if (isOnPaywall && !isAnonymousAccess) getEntitlements()
    //eslint-disable-next-line
  }, [isOnPaywall])

  const showActionNotAllowedAlert = () => onOpen()
  const closeActionNotAllowed = () => onClose()
  const isActionNotAllowedOpen = isOpen

  if (isLoadingAccessVerifications) return <LoadingScreen />

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
        isExclusive,
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
