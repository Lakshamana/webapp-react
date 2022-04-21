import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { Center, Box } from '@chakra-ui/layout'
import {
  QUERY_VERIFY_CATEGORY_KIND,
  MUTATION_CATEGORY_PASSWORD_CHECK,
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

const VerifyCategoryKind = ({ categorySlug, accessGranted }: Props) => {
  const { t } = useTranslation()
  const [isPrivate, setIsPrivate] = useState<boolean>(false)
  const [isOnPaywall, setIsOnPaywall] = useState<boolean>(false)
  const [errorOnRequestAccess, setErrorOnRequestAccess] = useState('')

  const { data: categoryKind, loading: isLoadingVerifyCategoryKind } = useQuery(
    QUERY_VERIFY_CATEGORY_KIND,
    {
      variables: {
        slug: categorySlug,
      },
      fetchPolicy: 'no-cache',
    }
  )

  const [requestCategoryAccess, { loading: isLoadingPasswordCheck }] =
    useMutation(MUTATION_CATEGORY_PASSWORD_CHECK, {
      onCompleted: (result) => {
        if (result?.categoryPasswordCheck?.correct) accessGranted()
        if (!result?.categoryPasswordCheck?.correct)
          setErrorOnRequestAccess(
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

  return <div></div>
}

export { VerifyCategoryKind }
