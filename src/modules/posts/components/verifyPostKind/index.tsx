import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Center, Box } from '@chakra-ui/layout'
import {
  MUTATION_POST_PASSWORD_CHECK,
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

const VerifyPostKind = ({ postSlug, postType, accessGranted }: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')

  //TODO: implement logic to get post or live
  const { data: postKind, loading: isLoadingVerifyPostKind } = useQuery(
    QUERY_VERIFY_POST_KIND,
    {
      variables: {
        slug: postSlug,
      },
      fetchPolicy: 'no-cache',
    }
  )

  const [requestPostAccess, { loading: isLoadingPasswordCheck }] = useMutation(
    MUTATION_POST_PASSWORD_CHECK,
    {
      onCompleted: (result) => {
        if (result?.postPasswordCheck?.correct) accessGranted()
        if (!result?.postPasswordCheck?.correct)
          setErrorOnRequestAccess(
            t('page.post.private_content.incorrect_password')
          )
      },
    }
  )

  const sendRequestToAccessPrivatePost = (password: string) => {
    setErrorOnRequestAccess('')
    requestPostAccess({
      variables: {
        id: postKind.post.id,
        payload: {
          password,
        },
      },
    })
  }

  useEffect(() => {
    if (postKind?.post) {
      if (isEntityBlocked(postKind.post)) {
        setIsPrivate(isEntityPrivate(postKind.post))
        setIsOnPaywall(isEntityOnPaywall(postKind.post))
        return
      }
      accessGranted()
    }
    //eslint-disable-next-line
  }, [postKind])
  if (isLoadingVerifyPostKind)
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

export { VerifyPostKind }
