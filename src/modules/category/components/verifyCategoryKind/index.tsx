import { useLazyQuery, useMutation } from '@apollo/client'
import { Box, Center } from '@chakra-ui/layout'
import { GeolockedContent, PrivateContent, Skeleton } from 'components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MUTATION_CATEGORY_PASSWORD_CHECK,
  QUERY_VERIFY_CATEGORY_KIND
} from 'services/graphql'
import { useChannelsStore } from 'services/stores'
import {
  isEntityBlocked,
  isEntityGeolocked,
  isEntityOnPaywall,
  isEntityPrivate
} from 'utils/accessVerifications'
import { Props } from './types'

const VerifyCategoryKind = ({ categorySlug, accessGranted }: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [isGeolocked, setIsGeolocked] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')
  const { activeChannel } = useChannelsStore()

  const [
    getCategoryKind,
    { data: categoryKind, loading: isLoadingVerifyCategoryKind },
  ] = useLazyQuery(QUERY_VERIFY_CATEGORY_KIND, {
    variables: {
      slug: categorySlug,
    },
    fetchPolicy: 'no-cache',
  })

  useEffect(() => {
    if (activeChannel) getCategoryKind()
    //eslint-disable-next-line
  }, [activeChannel])

  const [requestCategoryAccess, { loading: isLoadingPasswordCheck }] =
    useMutation(MUTATION_CATEGORY_PASSWORD_CHECK, {
      onCompleted: (result) => {
        result?.categoryPasswordCheck?.correct
          ? accessGranted()
          : setErrorOnRequestAccess(
              t('page.post.private_content.incorrect_password')
            )
      },
    })

  const sendRequestToAccessPrivateCategory = (password: string) => {
    setErrorOnRequestAccess('')
    requestCategoryAccess({
      variables: {
        id: categoryKind.category.id,
        payload: {
          password,
        },
      },
    })
  }

  useEffect(() => {
    if (categoryKind?.category) {
      if (isEntityBlocked(categoryKind.category)) {
        setIsPrivate(isEntityPrivate(categoryKind.category))
        setIsOnPaywall(isEntityOnPaywall(categoryKind.category))
        setIsGeolocked(isEntityGeolocked(categoryKind.category))
        return
      }
      accessGranted()
    }
    //eslint-disable-next-line
  }, [categoryKind])

  if (isLoadingVerifyCategoryKind)
    return (
      <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
        <Box mt={2}>
          <Skeleton kind={'cards'} numberOfCards={4} />
        </Box>
      </Center>
    )

  if (isPrivate)
    return (
      <PrivateContent
        error={errorOnRequestAccess}
        isLoadingRequest={isLoadingPasswordCheck}
        requestAccess={(password) =>
          sendRequestToAccessPrivateCategory(password)
        }
      />
    )

  if (isOnPaywall) return <div>Paywall</div>

  if (isGeolocked) return <GeolockedContent />

  return <div></div>
}

export { VerifyCategoryKind }
