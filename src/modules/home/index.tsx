import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import {
  PostType,
  SortDirection
} from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useChannelsStore, useCommonStore } from 'services/stores'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES,
  QUERY_POSTS,
} from 'services/graphql'

import { Container, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  VideosScroller,
} from 'components/molecules'

import { convertToValidColor } from 'utils'
import { sizes } from 'styles'

const HomePage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])

  const {
    data: billboardData,
    refetch: refetchBillboard,
    loading: loadingBillboard,
  } = useQuery(QUERY_BILLBOARDS, {
    variables: {
      filter: {
        target: 'home',
      },
    },
    skip: !activeChannel,
  })

  const {
    data: featuredPostsData,
    refetch: refetchFeaturedPosts,
    loading: loadingFeaturedPosts,
  } = useQuery(QUERY_POSTS, {
    variables: {
      filters: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
        sort: {
          field: 'publishedAt',
          direction: SortDirection.Desc,
        },
      },
    },
    skip: !activeChannel,
  })

  const {
    data: featuredCategoriesData,
    refetch: refetchFeaturedCategories,
    loading: loadingFeaturedCategories,
  } = useQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {
        featuredAt: {},
      },
    },
    skip: !activeChannel,
  })

  const isLoading =
    loadingBillboard || loadingFeaturedCategories || loadingFeaturedPosts

  const hasResults =
    billboardData?.billboard?.length ||
    featuredPostsData?.posts?.length ||
    featuredCategoriesData?.categories?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    if (activeChannel) {
      refetchBillboard()
      refetchFeaturedPosts()
      refetchFeaturedCategories()
    }
    // eslint-disable-next-line
  }, [activeChannel])

  const getImageUrl = (path: string) => {
    return generateImage(ThumborInstanceTypes.IMAGE, path)
  }

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))

    const billboardItems = billboardData?.billboards?.reduce((memo, curr) => {
      const cover = getImageUrl(curr.customization?.mobile?.imgPath)
      const banner = getImageUrl(curr.customization?.desktop?.imgPath)

      memo.push({
        ...curr,
        actions: curr.actions.map((action) => ({
          ...action,
          bgColor: convertToValidColor(action.bgColor),
          borderColor: convertToValidColor(action.borderColor),
          textColor: convertToValidColor(action.textColor),
        })),
        cover,
        banner,
      })
      return memo
    }, [])

    setBillboardItems(billboardItems)

    // eslint-disable-next-line
  }, [billboardData])

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderFeaturedPostsScroller = () => (
    <VideosScroller
      items={featuredPostsData?.posts}
      sectionTitle={t('page.home.featured_posts')}
      hasMoreLink={true}
    />
  )

  const renderFeaturedCategoriesScroller = () => (
    <CategoriesScroller
      items={featuredCategoriesData?.categories}
      sectionTitle={t('page.home.featured_categories')}
      hasMoreLink={true}
    />
  )

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Flex
          gridGap={5}
          flexDirection={'column'}
          mt={billboardItems ? 0 : 7}
          w={'100vw'}
        >
          {!!featuredPostsData?.posts?.length && renderFeaturedPostsScroller()}
          {!!featuredCategoriesData?.categories?.length &&
            renderFeaturedCategoriesScroller()}

          {/* TODO: Built a empty state component */}
          {isEmpty && (
            <Flex w={'100vw'} py={20} justifyContent="center" color="white">
              Page empty! We need to create an empty state component.
            </Flex>
          )}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
