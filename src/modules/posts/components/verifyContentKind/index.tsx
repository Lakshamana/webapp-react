import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Center, Box } from '@chakra-ui/layout'
import {
  MUTATION_POST_PASSWORD_CHECK,
  MUTATION_LIVE_EVENT_PASSWORD_CHECK,
  QUERY_VERIFY_LIVE_EVENT_KIND,
  QUERY_VERIFY_POST_KIND,
} from 'services/graphql'
import { PrivateContent, Skeleton } from 'components'
import { Props } from './types'
import { useEffect } from 'react'
import {
  isEntityBlocked,
  isEntityOnPaywall,
  isEntityPrivate,
} from 'utils/accessVerifications'
import { useTranslation } from 'react-i18next'
import { LiveEvent, Post } from 'generated/graphql'

const VerifyContentKind = ({
  contentSlug,
  contentType,
  accessGranted,
}: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')
  const [password, setPassword] = useState('')
  const [contentKind, setContentKind] = useState<Post | LiveEvent>()

  const { loading: isLoadingVerifyContentKind } = useQuery(
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
        return
      }
      accessGranted()
    }
    //eslint-disable-next-line
  }, [contentKind])

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
  if (isOnPaywall) return <div>Paywall</div>
  return <div></div>
}

export { VerifyContentKind }
