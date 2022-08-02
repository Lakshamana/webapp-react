import { useLazyQuery, useMutation } from '@apollo/client'
import { Box, Center } from '@chakra-ui/layout'
import {
  GeolockedContent,
  PlanSelectFlow,
  PrivateContent,
  Skeleton
} from 'components'
import { LiveEvent, Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MUTATION_LIVE_EVENT_PASSWORD_CHECK,
  MUTATION_POST_PASSWORD_CHECK,
  QUERY_VERIFY_LIVE_EVENT_KIND,
  QUERY_VERIFY_POST_KIND
} from 'services/graphql'
import { useChannelsStore } from 'services/stores'
import {
  isEntityBlocked,
  isEntityGeolocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'
import { Props } from './types'

const VerifyContentKind = ({
  contentSlug,
  contentType,
  accessGranted,
}: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [isGeolocked, setIsGeolocked] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')
  const [password, setPassword] = useState('')
  const [contentKind, setContentKind] = useState<Post | LiveEvent>()
  const { activeChannel } = useChannelsStore()

  const [getContentKind, { loading: isLoadingVerifyContentKind }] =
    useLazyQuery(
      contentType === 'live'
        ? QUERY_VERIFY_LIVE_EVENT_KIND
        : QUERY_VERIFY_POST_KIND,
      {
        variables: {
          slug: contentSlug,
        },
        onCompleted: (result) => {
          setContentKind(
            contentType === 'live' ? result?.liveEvent : result?.post
          )
        },
        fetchPolicy: 'no-cache',
      }
    )

  const setError = () => {
    setErrorOnRequestAccess(t('page.post.private_content.incorrect_password'))
  }

  const [requestLiveAccess, { loading: isLoadingLivePasswordCheck }] =
    useMutation(MUTATION_LIVE_EVENT_PASSWORD_CHECK, {
      variables: {
        id: contentKind?.id,
        payload: {
          password,
        },
      },
      onCompleted: (result) => {
        result?.liveEventPasswordCheck?.correct ? accessGranted() : setError()
      },
    })

  const [requestPostAccess, { loading: isLoadingPostPasswordCheck }] =
    useMutation(MUTATION_POST_PASSWORD_CHECK, {
      variables: {
        id: contentKind?.id,
        payload: {
          password,
        },
      },
      onCompleted: (result) => {
        result?.postPasswordCheck?.correct ? accessGranted() : setError()
      },
    })

  const sendRequestToAccessPrivatePost = async (password: string) => {
    await setPassword(password)
    setErrorOnRequestAccess('')
    contentType === 'live' ? requestLiveAccess() : requestPostAccess()
  }

  useEffect(() => {
    if (contentKind) {
      if (isEntityBlocked(contentKind)) {
        setIsPrivate(isEntityPrivate(contentKind))
        setIsOnPaywall(isEntityOnPaywall(contentKind))
        setIsGeolocked(isEntityGeolocked(contentKind))
        return
      }
      accessGranted()
    }
    //eslint-disable-next-line
  }, [contentKind])

  useEffect(() => {
    if (activeChannel) getContentKind()
    //eslint-disable-next-line
  }, [activeChannel])

  const isLoadingPasswordCheck =
    isLoadingLivePasswordCheck || isLoadingPostPasswordCheck

  if (isLoadingVerifyContentKind)
    return (
      <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
        <Box mt={2}>
          <Skeleton kind={'posts'} numberOfCards={1} />
        </Box>
      </Center>
    )

  if (isPrivate)
    return (
      <PrivateContent
        error={errorOnRequestAccess}
        isLoadingRequest={isLoadingPasswordCheck}
        requestAccess={(password) => sendRequestToAccessPrivatePost(password)}
      />
    )
  if (isOnPaywall)
    return <PlanSelectFlow entitlement={contentKind?.entitlements} />

  if (isGeolocked) return <GeolockedContent />

  return <div></div>
}

export { VerifyContentKind }
