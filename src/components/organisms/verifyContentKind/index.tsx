import { useLazyQuery, useMutation } from '@apollo/client'
import { Box, Center } from '@chakra-ui/layout'
import {
  CheckoutFlow,
  GeolockedContent,
  PrivateContent,
  Skeleton
} from 'components'
import { Kinds } from 'generated/graphql'
import { NotAuthorized, PaywallPlatform } from 'modules'

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
  isEntityGeolocked,
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

  useEffect(() => {
    if (contentKind) {
      if (isEntityGeolocked(contentKind)) {
        setIsGeolocked(true)
        return
      }

      if (
        (entityRequireLogin(contentKind) && !isAnonymousAccess) ||
        contentKind.kind === Kinds.Public
      ) {
        accessGranted()
        return
      }

      if (entityRequireLogin(contentKind) && isAnonymousAccess) {
        setIsExclusive(true)
        return
      }

      if (contentKind.kind === Kinds.Paywall && isAnonymousAccess) {
        setIsOnPaywallAnonymous(true)
        return
      }

      if (isEntityBlocked(contentKind)) {
        setIsPrivate(isEntityPrivate(contentKind))
        setIsOnPaywall(isEntityOnPaywall(contentKind))
      } else {
        accessGranted()
      }
    }

    //eslint-disable-next-line
  }, [contentKind])

  useEffect(() => {
    if (activeChannel) getContentKind()
    //eslint-disable-next-line
  }, [activeChannel])

  if (isLoadingVerifyContentKind)
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
