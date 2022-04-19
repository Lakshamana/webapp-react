import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'

import { PostType, Category, Billboard } from 'generated/graphql'

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

import { CarouselFlags } from 'types/flags'

import { Container, EmptyState, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  VideosScroller,
  TagsScroller,
} from 'components/molecules'
import { BillboardTarget } from 'types/common'

import { convertToValidColor } from 'utils/helperFunctions'
import { sizes } from 'styles'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [isFeaturedPostsActive, setIsFeaturedPostsActive] = useState<boolean>()
  const [isFeaturedCategoriesActive, setIsFeaturedCategoriesActive] =
    useState<boolean>()

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: {
        filter: {
          target: BillboardTarget.Home,
        },
      },
      fetchPolicy: 'network-only',
    })

  const [
    getFeaturedPosts,
    { data: featuredPostsData, loading: loadingFeaturedPosts },
  ] = useLazyQuery(QUERY_POSTS, {
    variables: {
      filter: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
      },
    },
    fetchPolicy: 'network-only',
  })

  const [
    getFeaturedCategories,
    { data: featuredCategoriesData, loading: loadingFeaturedCategories },
  ] = useLazyQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {
        featured: true,
      },
    },
    fetchPolicy: 'no-cache',
  })

  const [
    getCategories,
    {
      data: categoriesWithChildrenData,
      loading: loadingCategoriesWithChildren,
    },
  ] = useLazyQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {
        isParent: true,
      },
    },
    fetchPolicy: 'no-cache',
  })

  const isLoading =
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategoriesWithChildren

  const hasResults =
    billboardData?.billboard?.length ||
    featuredPostsData?.posts?.rows?.length ||
    featuredCategoriesData?.categories?.rows?.length ||
    (isHomeDisplayingCategories &&
      categoriesWithChildrenData?.categories?.rows?.length)

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getBillboard()

    const defaultCarouselsItems =
      activeChannelConfig?.HOME_ITEMS.CAROUSELS.filter(
        (item) => item.DEFAULT && item.IS_ACTIVE
      )

    defaultCarouselsItems?.forEach((item) => {
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Posts)
        setIsFeaturedPostsActive(true)
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Collections)
        setIsFeaturedCategoriesActive(true)
    })

    if (activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES) getCategories()

    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )
    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (isFeaturedPostsActive) getFeaturedPosts()
    if (isFeaturedCategoriesActive) getFeaturedCategories()
    // eslint-disable-next-line
  }, [isFeaturedCategoriesActive, isFeaturedPostsActive])

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.rows
      ?.reduce((memo, curr: Billboard) => {
        const cover = getImageUrl(curr.customization?.mobile?.imgPath || '')
        const banner = getImageUrl(curr.customization?.desktop?.imgPath || '')

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
      .sort((a, b) => a.sort - b.sort)

    setBillboardItems(billboardItems)

    // eslint-disable-next-line
  }, [billboardData])

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderFeaturedPostsScroller = (item: CarouselFlags) =>
    !!featuredPostsData?.posts?.rows && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={featuredPostsData?.posts?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
      />
    )

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) =>
    !!featuredCategoriesData?.categories?.rows && (
      <CategoriesScroller
        key="featured-categories"
        items={featuredCategoriesData?.categories?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
      />
    )

  const renderCategoriesWithChildren = () =>
    categoriesWithChildrenData?.categories?.rows?.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel}/category/${category.id}`}
      />
    ))

  const renderTagsScroller = (item: CarouselFlags) => (
    <TagsScroller
      key={`${item.LABEL[0].VALUE}`}
      tagID={item.TAGS.slice(0, 1).shift()}
      hasMoreLink={true}
      content={item.CONTENT_TYPE}
      sectionTitle={getCarouselLabel(item)}
    />
  )

  const getCarouselLabel = (item: CarouselFlags) => {
    const label = item.LABEL.filter((item) =>
      i18n.language.includes(item.LOCALE)
    )
    return label[0].VALUE
  }

  const homeCarouselsFiltered = activeChannelConfig?.HOME_ITEMS.CAROUSELS.sort(
    (a, b) => a.ORDER - b.ORDER
  ).filter((item) => item.IS_ACTIVE)

  const renderCarouselsOrderedByRemoteConfig = (item: CarouselFlags) => {
    if (!item?.TAGS?.length) {
      switch (item.CONTENT_TYPE[0]) {
        case HomeCarouselsTypes.Livestreams:
          //TODO: Waiting for API
          return ''
        case HomeCarouselsTypes.Posts:
          return renderFeaturedPostsScroller(item)
        case HomeCarouselsTypes.Collections:
          return renderFeaturedCategoriesScroller(item)
        case HomeCarouselsTypes.ContinueWatching:
          //TODO: Waiting for API
          return ''
      }
    } else {
      return renderTagsScroller(item)
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
            homeCarouselsFiltered.map((item: CarouselFlags) =>
              renderCarouselsOrderedByRemoteConfig(item)
            )}
          {!!categoriesWithChildrenData?.categories?.rows?.length &&
            renderCategoriesWithChildren()}
          {isEmpty && <EmptyState />}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
