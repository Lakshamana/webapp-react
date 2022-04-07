import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import { PostType, SortDirection, Category } from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import {
  useChannelsStore,
  useCommonStore,
  useCustomizationStore,
} from 'services/stores'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES,
  QUERY_POSTS,
} from 'services/graphql'

import { HomeCarouselsTypes } from 'types/common'

import { Container, EmptyState, Skeleton } from 'components/atoms'

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
  const { activeChannelConfig } = useCustomizationStore()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [categoriesWithChildren, setCategoriesWithChildren] =
    useState<Category[]>()

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
      filter: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
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
        featured: true,
      },
    },
    skip: !activeChannel,
  })

  const {
    data: categoriesData,
    loading: loadingCategories,
    refetch: refetchCategories,
  } = useQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {},
    },
    skip: !isHomeDisplayingCategories,
  })

  const isLoading =
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategories

  const hasResults =
    billboardData?.billboard?.length ||
    featuredPostsData?.posts?.rows?.length ||
    featuredCategoriesData?.categories?.rows?.length ||
    (isHomeDisplayingCategories && categoriesWithChildren?.length)

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (activeChannel) {
      refetchBillboard()
      refetchFeaturedPosts()
      refetchFeaturedCategories()
    }
    // eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )
    if (isHomeDisplayingCategories) refetchCategories()

    //eslint-disable-next-line
  }, [activeChannelConfig])

  const getImageUrl = (path: string) => {
    return generateImage(ThumborInstanceTypes.IMAGE, path)
  }

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.rows?.reduce(
      (memo, curr) => {
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
      },
      []
    )

    setBillboardItems(billboardItems)

    // eslint-disable-next-line
  }, [billboardData])

  useEffect(() => {
    const categoriesWithChildren = categoriesData?.categories.rows.filter(
      (category: Category) => category.children?.length
    )
    setCategoriesWithChildren(categoriesWithChildren)
    // eslint-disable-next-line
  }, [categoriesData])

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderFeaturedPostsScroller = () =>
    !!featuredPostsData?.posts?.rows && (
      <VideosScroller
        key="featured-posts"
        items={featuredPostsData?.posts?.rows}
        sectionTitle={t('page.home.featured_posts')}
        hasMoreLink={true}
      />
    )

  const renderFeaturedCategoriesScroller = () =>
    !!featuredCategoriesData?.categories?.rows && (
      <CategoriesScroller
        key="featured-categories"
        items={featuredCategoriesData?.categories?.rows}
        sectionTitle={t('page.home.featured_categories')}
        hasMoreLink={true}
      />
    )

  const renderCategoriesWithChildren = () =>
    categoriesWithChildren?.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel}/category/${category.id}`}
      />
    ))

  const homeCarouselsFiltered = activeChannelConfig?.HOME_ITEMS.CAROUSELS.sort(
    (a, b) => a.ORDER - b.ORDER
  ).filter((item) => item.IS_ACTIVE)

  const renderCarouselsOrderedByRemoteConfig = (contentType: string) => {
    switch (contentType) {
      case HomeCarouselsTypes.Posts:
        return renderFeaturedPostsScroller()
      case HomeCarouselsTypes.Collections:
        return renderFeaturedCategoriesScroller()
      default:
        return ''
    }
  }

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
          {!!homeCarouselsFiltered?.length &&
            homeCarouselsFiltered.map((item) =>
              renderCarouselsOrderedByRemoteConfig(item.CONTENT_TYPE[0])
            )}
          {!!categoriesWithChildren?.length && renderCategoriesWithChildren()}
          {isEmpty && <EmptyState />}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
