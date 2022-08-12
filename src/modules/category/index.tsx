import { useLazyQuery, useMutation } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import {
  Button,
  CategoriesGrid,
  Container,
  EmptyState,
  HeroBanner,
  PostsGrid,
  Skeleton,
  Text
} from 'components'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import {
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY,
  QUERY_CATEGORY
} from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useThemeStore } from 'services/stores'
import { colors, sizes } from 'styles'
import { HeroBannerProps } from 'types/common'
import { VerifyCategoryKind } from './components'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { slug } = useParams<{ slug: string }>()
  const { generateImage } = useThumbor()
  const [categoryHero, setCategoryHero] = useState<HeroBannerProps>()
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)
  const [isVerifyingAccessPermission, setIsVerifyingAccessPermission] =
    useState<boolean>(true)

  const [getCategory, { data: categoryData, loading: loadingCategory }] =
    useLazyQuery(QUERY_CATEGORY, {
      variables: {
        slug: slug,
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    })

  const [pinCategory, { loading: loadingPinCategory }] = useMutation(
    MUTATION_PIN_CATEGORY,
    {
      variables: {
        payload: {
          category: categoryData?.category?.id,
          pinned: true,
        },
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.pinCategory?.pinned)
      },
    }
  )

  const [unpinCategory, { loading: loadingUnpinCategory }] = useMutation(
    MUTATION_UNPIN_CATEGORY,
    {
      variables: {
        id: categoryData?.category?.id,
      },
      onCompleted: (result) => {
        setIsCategoryPinned(result?.unpinCategory?.pinned)
      },
    }
  )

  const isLoadingPin = loadingUnpinCategory || loadingPinCategory

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: { width: 1080, height: 0 },
    })

  useEffect(() => {
    if (categoryData?.category) {
      setIsCategoryPinned(categoryData?.category?.pinnedStatus?.pinned || false)

      const desktopImage = getImageUrl(
        categoryData?.category?.customization?.desktop?.imgPath
      )
      const mobileImage = getImageUrl(
        categoryData?.category?.customization?.mobile?.imgPath
      )
      setCategoryHero({
        desktopImage,
        mobileImage,
        title: categoryData?.category?.name,
        description: categoryData?.category?.description,
      })
    }
    // eslint-disable-next-line
  }, [categoryData])

  const isLoading = loadingCategory

  const hasResults =
    !!categoryData?.category?.children?.length ||
    !!categoryData?.category?.posts?.rows?.length

  const isEmpty = !isLoading && !hasResults

  if (isVerifyingAccessPermission)
    return (
      <VerifyCategoryKind
        categorySlug={slug}
        accessGranted={() => {
          setIsVerifyingAccessPermission(false)
          getCategory()
        }}
      />
    )

  if (loadingCategory)
    <Box p={sizes.paddingSm} width="100%">
      <Skeleton kind="cards" numberOfCards={4} />
    </Box>

  return (
    <Container flexDirection={'column'} width={'100%'}>
      <HeroBanner {...categoryHero}>
        <Flex gridGap={2}>
          {!isLoadingPin && (
            <Button
              backgroundColor={`${colors.grey['800']}`}
              variant={'unstyled'}
              iconName={isCategoryPinned ? 'check' : 'plus-circle'}
              color={`${colors.white}`}
              width={'100%'}
              height={'100%'}
              label={t('page.categories.my_list')}
              onClick={() =>
                isCategoryPinned ? unpinCategory() : pinCategory()
              }
            />
          )}

          {isLoadingPin && (
            <Button
              backgroundColor={`${colors.grey['800']}`}
              variant={'unstyled'}
              color={`${colors.white}`}
              width={'100%'}
              height={'100%'}
              disabled={true}
            >
              <Spinner
                thickness="1px"
                width="15px"
                height="15px"
                mr={2}
                color={colors.brand.primary[colorMode]}
              />
              <Text>{t('page.categories.my_list')}</Text>
            </Button>
          )}
        </Flex>
      </HeroBanner>
      <Flex pb={2} gridGap={10} flexDirection={'column'} width={'100%'}>
        {!!categoryData?.category?.children?.length && (
          <CategoriesGrid
            sectionTitle={t('page.category.categories')}
            items={categoryData?.category?.children}
          />
        )}
        {!!categoryData?.category?.posts?.rows?.length && (
          <PostsGrid
            sectionTitle={t('page.category.videos')}
            items={categoryData?.category?.posts?.rows}
          />
        )}
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}

export { CategoryPage }
