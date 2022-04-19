import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Center, Box } from '@chakra-ui/layout'
import { QUERY_VERIFY_POST_KIND } from 'services/graphql'
import { PrivateContent, Skeleton } from 'components'
import { Props } from './types'
import { useEffect } from 'react'
import {
  isEntityBlocked,
  isEntityOnPaywall,
  isEntityPrivate,
} from 'utils/accessVerifications'

const VerifyPostKind = ({ postSlug, postType, accessGranted }: Props) => {
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  
  //TODO: implement logic to get post or live
  const { data: postKind, loading } = useQuery(QUERY_VERIFY_POST_KIND, {
    variables: {
      slug: postSlug,
    },
    fetchPolicy: 'no-cache',
  })

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
  if (loading)
    return (
      <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
        <Box mt={2}>
          <Skeleton kind={'posts'} numberOfCards={1} />
        </Box>
      </Center>
    )
  if (isPrivate) return <PrivateContent></PrivateContent>
  if (isOnPaywall) return <div>Paywall</div>
  return <div>{JSON.stringify(postKind)}</div>
}

export { VerifyPostKind }
