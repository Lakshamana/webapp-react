import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'

import { PostType, Category, Billboard, Status } from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import {
  useChannelsStore,
  useCommonStore,
  useCustomizationStore,
} from 'services/stores'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES,
  QUERY_LIVE_EVENTS,
  QUERY_POSTS_CARDS,
} from 'services/graphql'

import { HomeCarouselsTypes } from 'types/common'
import { CarouselFlags } from 'types/flags'
import { BillboardTarget } from 'types/common'

import { Container, EmptyState, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  VideosScroller,
  TagsScroller,
  LivestreamScroller,
} from 'components/molecules'

import { DEFAULT_POLLING_INTERVAL } from 'config/constants'
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
  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>()

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: {
        filter: {
          target: BillboardTarget.Home,
        },
      },
      fetchPolicy: 'cache-and-network',
    })

  const [getLiveEvents, { data: liveEventsData, loading: loadingLiveEvents }] =
    useLazyQuery(QUERY_LIVE_EVENTS, {
      variables: {
        filter: {
          status: [Status.Live, Status.Scheduled, Status.Ready],
        },
      },
      pollInterval: DEFAULT_POLLING_INTERVAL,
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    })

  const [
    getFeaturedPosts,
    { data: featuredPostsData, loading: loadingFeaturedPosts },
  ] = useLazyQuery(QUERY_POSTS_CARDS, {
    variables: {
      filter: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
      },
    },
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
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
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
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
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
  })

  const isLoading =
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategoriesWithChildren ||
    loadingLiveEvents

  const hasResults =
    billboardData?.billboard?.length ||
    liveEventsData?.liveEvents?.rows?.length ||
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
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Livestreams)
        setIsLiveEventsActive(true)
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
    if (isLiveEventsActive) getLiveEvents()
    // eslint-disable-next-line
  }, [isFeaturedPostsActive, isFeaturedCategoriesActive, isLiveEventsActive])

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

  const renderLiveEventsScroller = (item: CarouselFlags) =>
    !!liveEventsData?.liveEvents?.rows?.length && (
      <LivestreamScroller
        items={liveEventsData?.liveEvents?.rows}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/lives`}
      />
    )

  const renderFeaturedPostsScroller = (item: CarouselFlags) =>
    !!featuredPostsData?.posts?.rows.length && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={featuredPostsData?.posts?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={false}
      />
    )

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) =>
    !!featuredCategoriesData?.categories?.rows.length && (
      <CategoriesScroller
        key="featured-categories"
        items={featuredCategoriesData?.categories?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/categories`}
      />
    )

  const renderCategoriesWithChildren = () =>
    categoriesWithChildrenData?.categories?.rows?.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
      />
    ))

  const renderTagsScroller = (item: CarouselFlags) => (
    <TagsScroller
      key={`${item.LABEL[0].VALUE}`}
      tagID={item.TAGS.slice(0, 1).shift()}
      hasMoreLink={true}
      content={item.CONTENT_TYPE}
      sectionTitle={getCarouselLabel(item)}
      sectionUrl={`/c/${activeChannel?.slug}/tag/${item.TAGS.slice(
        0,
        1
      ).shift()}`}
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
          return renderLiveEventsScroller(item)
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
