import { useLazyQuery, useMutation } from '@apollo/client'
import { Box, Center } from '@chakra-ui/layout'
import * as Sentry from '@sentry/browser'
import {
  CheckoutFlow,
  GeolockedContent,
  PrivateContent,
  Skeleton
} from 'components'
import { Kinds } from 'generated/graphql'
import { NotAuthorized, PaywallPlatform } from 'modules'
import { getMaxmindLocation } from 'utils/location'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MUTATION_CATEGORY_PASSWORD_CHECK,
  MUTATION_LIVE_EVENT_PASSWORD_CHECK,
  MUTATION_POST_PASSWORD_CHECK,
  QUERY_VERIFY_CATEGORY_KIND,
  QUERY_VERIFY_LIVE_EVENT_KIND,
  QUERY_VERIFY_POST_KIND
} from 'services/graphql'
import { useAuthStore, useChannelsStore } from 'services/stores'
import {
  entityRequireLogin,
  isEntityBlocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'
import { ElegibleContent, Props } from './types'

const VerifyContentKind = ({
  contentSlug,
  contentType,
  accessGranted,
}: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [isGeolocked, setIsGeolocked] = useState<boolean>(false)
  const [isOnPaywallAnonymous, setIsOnPaywallAnonymous] =
    useState<boolean>(false)
  const [isExclusive, setIsExclusive] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')
  const [password, setPassword] = useState('')
  const [contentKind, setContentKind] = useState<ElegibleContent>()
  const { activeChannel } = useChannelsStore()
  const { isAnonymousAccess } = useAuthStore()
  const [isVerifyingGeo, setIsVerifyingGeo] = useState<boolean>(true)

  const getContentKindQuery = () => {
    const query = {
      post: QUERY_VERIFY_POST_KIND,
      category: QUERY_VERIFY_CATEGORY_KIND,
      liveEvent: QUERY_VERIFY_LIVE_EVENT_KIND,
    }
    return query[contentType]
  }

  const getRequestContentAccessQuery = () => {
    const query = {
      post: MUTATION_POST_PASSWORD_CHECK,
      category: MUTATION_CATEGORY_PASSWORD_CHECK,
      liveEvent: MUTATION_LIVE_EVENT_PASSWORD_CHECK,
    }
    return query[contentType]
  }

  const [getContentKind, { loading: isLoadingVerifyContentKind }] =
    useLazyQuery(getContentKindQuery(), {
      variables: {
        slug: contentSlug,
      },
      onCompleted: (result) => {
        const content = result[`${contentType}Kind`]
        setContentKind(content)
        verifyGeofence(content)
      },
      fetchPolicy: 'cache-and-network',
    })

  const setError = () => {
    setErrorOnRequestAccess(t('page.post.private_content.incorrect_password'))
  }

  const [requestContentAccess, { loading: isLoadingPasswordCheck }] =
    useMutation(getRequestContentAccessQuery(), {
      variables: {
        id: contentKind?.id,
        payload: {
          password,
        },
      },
      onCompleted: (result) => {
        const passwordCheckResult = result[`${contentType}PasswordCheck`]
        passwordCheckResult.correct ? accessGranted() : setError()
      },
    })

  const sendRequestToAccessPrivateContent = async (password: string) => {
    await setPassword(password)
    setErrorOnRequestAccess('')
    requestContentAccess()
  }

  const verifyGeofence = async (content: ElegibleContent) => {
    try {
      const {
        country: { iso_code },
      } = await getMaxmindLocation()

      const geofenceArr = content['geofence'] || content['geoFence']
      const userGeofenceIsInCountryCodes =
        geofenceArr['countryCodes'].includes(iso_code)

      if (
        (geofenceArr['type'] === 'BLACKLIST' && userGeofenceIsInCountryCodes) ||
        (geofenceArr['type'] === 'WHITELIST' && !userGeofenceIsInCountryCodes)
      )
        setIsGeolocked(true)
    } catch (e) {
      Sentry.configureScope((scope) =>
        scope.setTransactionName('get-user-location-error').setLevel('error')
      )
      Sentry.captureException(e)
    } finally {
      setIsVerifyingGeo(false)
    }
  }

  useEffect(() => {
    if (contentKind) {
      if (!isVerifyingGeo && !isGeolocked) {
        if (entityRequireLogin(contentKind) && !isAnonymousAccess)
          accessGranted()
        if (contentKind.kind !== Kinds.Public) {
          if (entityRequireLogin(contentKind) && isAnonymousAccess)
            setIsExclusive(true)
          if (contentKind.kind === Kinds.Paywall && isAnonymousAccess)
            setIsOnPaywallAnonymous(true)
          if (isEntityBlocked(contentKind)) {
            setIsPrivate(isEntityPrivate(contentKind))
            setIsOnPaywall(isEntityOnPaywall(contentKind))
          }
        } else {
          accessGranted()
        }
      }
    }
    //eslint-disable-next-line
  }, [isVerifyingGeo])

  useEffect(() => {
    if (activeChannel) getContentKind()
    //eslint-disable-next-line
  }, [activeChannel])

  if (isLoadingVerifyContentKind || isVerifyingGeo)
    return (
      <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
        <Box mt={2}>
          <Skeleton kind={'posts'} numberOfCards={1} />
        </Box>
      </Center>
    )

  if (isExclusive) return <NotAuthorized />

  if (isPrivate)
    return (
      <PrivateContent
        error={errorOnRequestAccess}
        isLoadingRequest={isLoadingPasswordCheck}
        requestAccess={(password) =>
          sendRequestToAccessPrivateContent(password)
        }
      />
    )

  if (isOnPaywallAnonymous)
    return (
      <PaywallPlatform
        type={contentType}
        contentTitle={
          contentKind && (contentKind['name'] || contentKind['title'])
        }
      />
    )

  if (isOnPaywall)
    return (
      <CheckoutFlow
        {...{ accessGranted }}
        products={contentKind?.entitlements || []}
      />
    )

  if (isGeolocked) return <GeolockedContent />

  return <div></div>
}

export { VerifyContentKind }
