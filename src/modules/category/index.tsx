import { useEffect, useState } from 'react'
import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Flex, Box, Spinner } from '@chakra-ui/react'
import { useThumbor, ThumborInstanceTypes } from 'services/hooks'
import {
  QUERY_CATEGORY,
  MUTATION_PIN_CATEGORY,
  MUTATION_UNPIN_CATEGORY,
  QUERY_POSTS_CARDS,
} from 'services/graphql'
import {
  Container,
  HeroBanner,
  Skeleton,
  CategoriesGrid,
  Button,
  PostsGrid,
  EmptyState,
  Text,
} from 'components'
import { HeroBannerProps } from 'types/common'
import { sizes, colors } from 'styles'
import { useThemeStore } from 'services/stores'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { slug } = useParams<{ slug: string }>()
  const { generateImage } = useThumbor()
  const [categoryHero, setCategoryHero] = useState<HeroBannerProps>()
  const [isCategoryPinned, setIsCategoryPinned] = useState(false)

  const { data: categoryData, loading: loadingCategory } = useQuery(
    QUERY_CATEGORY,
    {
      variables: {
        slug: slug,
      },
    }
  )

  const [
    getCategoryPosts,
    { data: categoryPostsData, loading: loadingCategoryPosts },
  ] = useLazyQuery(QUERY_POSTS_CARDS)

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

  //TODO: API has to return width and height
  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

  useEffect(() => {
    if (categoryData?.category) {
      setIsCategoryPinned(categoryData?.isPinned || false)

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

      getCategoryPosts({
        variables: {
          filter: {
            categories: [categoryData?.category?.id],
          },
        },
      })
    }
    // eslint-disable-next-line
  }, [categoryData])

  const isLoading = loadingCategory || loadingCategoryPosts

  const hasResults =
    !!categoryData?.category?.children?.length ||
    !!categoryPostsData?.posts.rows.length

  const isEmpty = !isLoading && !hasResults

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
        {loadingCategory && (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton kind="cards" numberOfCards={4} />
          </Box>
        )}
        {!!categoryData?.category?.children?.length && (
          <CategoriesGrid
            sectionTitle={t('page.category.categories')}
            items={categoryData?.category?.children}
          />
        )}
        {!!categoryPostsData?.posts?.rows?.length && (
          <PostsGrid
            sectionTitle={t('page.category.videos')}
            items={categoryPostsData?.posts?.rows}
          ></PostsGrid>
        )}
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}

export { CategoryPage }
