import { useLazyQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import {
  Billboard,
  Category,
  Kinds,
  PaginatedCategoriesOutput,
  PaginatedLiveEventsOutput,
  PaginatedPostsOutput
} from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  BillboardScroller,
  CategoriesScroller,
  Container,
  EmptyState,
  LivestreamScroller,
  VideosScroller
} from 'components'
import {
  DEFAULT_POLLING_INTERVAL,
  MAXIMUM_SCROLLER_REQUESTS
} from 'config/constants'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES_CARDS,
  QUERY_LIVE_EVENTS,
  QUERY_POSTS_CARDS,
  QUERY_PUBLIC_CATEGORIES_CARDS,
  QUERY_PUBLIC_LIVE_EVENTS,
  QUERY_PUBLIC_POSTS_CARDS
} from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useCustomizationStore,
  useThemeStore
} from 'services/stores'
import { colors } from 'styles'
import { BillboardTarget, HomeCarouselsTypes } from 'types/common'
import { CarouselFlags } from 'types/flags'
import { convertToValidColor } from 'utils/helperFunctions'
import { askForPushPermission } from 'utils/pushNotifications'
import {
  ContinueWatchingScrollerComponent,
  TagsScrollerComponent
} from './components'
import {
  appendNewData,
  categoriesFilter,
  liveEventsFilter,
  postsFilter
} from './utils'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { activeChannel } = useChannelsStore()
  const { isAnonymousAccess } = useAuthStore()

  const isAnonymousAllowed =
    isAnonymousAccess && activeChannel?.kind === Kinds.Public

  const [featuredPostsData, setFeaturedPostsData] =
    useState<PaginatedPostsOutput>()
  const [liveEventsData, setLiveEventsData] =
    useState<PaginatedLiveEventsOutput>()
  const [featuredCategoriesData, setFeaturedCategoriesData] =
    useState<PaginatedCategoriesOutput>()
  const [categoriesWithChildrenData, setCategoriesWithChildrenData] =
    useState<PaginatedCategoriesOutput>()

  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [isFeaturedPostsActive, setIsFeaturedPostsActive] = useState<boolean>()
  const [isFeaturedCategoriesActive, setIsFeaturedCategoriesActive] =
    useState<boolean>()
  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>()
  // const [tagsIds, setTagsIds] = useState<string[]>([])
  // const [loadingTags, setLoadingTags] = useState(false)
  // const [tagsData, setTagsData] = useState({})
  const [fetchControl, setFetchControl] = useState({})

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: { filter: { target: BillboardTarget.Home } },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    })

  const updateFetchControl = (scrollerName: string) => {
    let updateRequest = fetchControl[scrollerName]
      ? fetchControl[scrollerName] + 1
      : 1
    if (updateRequest >= MAXIMUM_SCROLLER_REQUESTS) updateRequest = true
    setFetchControl((previous) => ({
      ...previous,
      [scrollerName]: updateRequest,
    }))
  }

  const [getLiveEvents, { loading: loadingLiveEvents }] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_LIVE_EVENTS : QUERY_LIVE_EVENTS,
    {
      onCompleted: (result) => {
        const liveEvents = isAnonymousAllowed
          ? result.publicLiveEvents
          : result.liveEvents
        setLiveEventsData((previous) => appendNewData(previous, liveEvents))
      },
      fetchPolicy: 'cache-and-network',
      pollInterval: DEFAULT_POLLING_INTERVAL,
    }
  )

  const [getFeaturedPosts, { loading: loadingFeaturedPosts }] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_POSTS_CARDS : QUERY_POSTS_CARDS,
    {
      onCompleted: (result) => {
        const posts = isAnonymousAllowed ? result.publicPosts : result.posts
        setFeaturedPostsData((previous) => appendNewData(previous, posts))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [getFeaturedCategories, { loading: loadingFeaturedCategories }] =
    useLazyQuery(
      isAnonymousAllowed
        ? QUERY_PUBLIC_CATEGORIES_CARDS
        : QUERY_CATEGORIES_CARDS,
      {
        onCompleted: (result) => {
          const categories = isAnonymousAllowed
            ? result.publicCategories
            : result.categories
          setFeaturedCategoriesData((previous) =>
            appendNewData(previous, categories)
          )
        },
        fetchPolicy: 'cache-and-network',
      }
    )

  const [getCategories, { loading: loadingCategoriesWithChildren }] =
    useLazyQuery(
      isAnonymousAllowed
        ? QUERY_PUBLIC_CATEGORIES_CARDS
        : QUERY_CATEGORIES_CARDS,
      {
        onCompleted: (result) => {
          const categories = isAnonymousAllowed
            ? result.publicCategories
            : result.categories
          setCategoriesWithChildrenData((previous) =>
            appendNewData(previous, categories)
          )
        },
        fetchPolicy: 'cache-and-network',
      }
    )

  const loadMoreLiveEvents = (scrollerName: string) => () => {
    if (
      liveEventsData?.hasNextPage &&
      typeof fetchControl[scrollerName] !== 'boolean'
    ) {
      updateFetchControl(scrollerName)
      getLiveEvents({
        variables: { ...liveEventsFilter(liveEventsData.page + 1) },
      })
    }
  }

  const loadMoreFeaturedPosts = (scrollerName: string) => () => {
    if (
      featuredPostsData?.hasNextPage &&
      typeof fetchControl[scrollerName] !== 'boolean'
    ) {
      updateFetchControl(scrollerName)
      getFeaturedPosts({
        variables: { ...postsFilter(featuredPostsData.page + 1) },
      })
    }
  }

  const loadMoreFeaturedCategories = (scrollerName: string) => () => {
    if (
      featuredCategoriesData?.hasNextPage &&
      typeof fetchControl[scrollerName] !== 'boolean'
    ) {
      updateFetchControl(scrollerName)
      getFeaturedCategories({
        variables: {
          ...categoriesFilter(featuredCategoriesData.page + 1, undefined, true),
        },
      })
    }
  }

  const loadMoreCategories = () => {
    if (categoriesWithChildrenData?.hasNextPage) {
      getCategories({
        variables: {
          ...categoriesFilter(
            categoriesWithChildrenData.page + 1,
            true,
            undefined,
            3
          ),
        },
      })
    }
  }

  const isLoading =
    loadingLiveEvents ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategoriesWithChildren ||
    loadingBillboard

  const hasResults =
    billboardData?.billboard?.length ||
    liveEventsData?.rows?.length ||
    featuredPostsData?.rows?.length ||
    featuredCategoriesData?.rows?.length ||
    (isHomeDisplayingCategories && categoriesWithChildrenData?.rows?.length)

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    askForPushPermission()
    // eslint-disable-next-line
  }, [])

  const clearAllItems = () => {
    setLiveEventsData(undefined)
    setFeaturedCategoriesData(undefined)
    setFeaturedPostsData(undefined)
    setCategoriesWithChildrenData(undefined)
    setBillboardItems([])
  }

  const deactivateAllItems = () => {
    setIsFeaturedPostsActive(false)
    setIsFeaturedCategoriesActive(false)
    setIsLiveEventsActive(false)
  }

  useEffect(() => {
    if (activeChannel) getBillboard()
    return () => {
      deactivateAllItems()
      clearAllItems()
    }
    //eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
    const defaultCarouselsItems =
      activeChannelConfig?.HOME_ITEMS.CAROUSELS.filter(
        (item) => !item?.TAGS?.length && item.IS_ACTIVE
      )

    defaultCarouselsItems?.forEach((item) => {
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Posts)
        setIsFeaturedPostsActive(true)
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Collections)
        setIsFeaturedCategoriesActive(true)
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Livestreams)
        setIsLiveEventsActive(true)
    })

    if (activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES)
      getCategories({
        variables: { ...categoriesFilter(1, true, undefined, 3) },
      })

    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )

    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (isFeaturedPostsActive)
      getFeaturedPosts({ variables: { ...postsFilter(1) } })
    if (isFeaturedCategoriesActive)
      getFeaturedCategories({
        variables: { ...categoriesFilter(1, undefined, true) },
      })
    if (isLiveEventsActive)
      getLiveEvents({ variables: { ...liveEventsFilter(1) } })
    // eslint-disable-next-line
  }, [isFeaturedPostsActive, isFeaturedCategoriesActive, isLiveEventsActive])

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: { width: 1080, height: 0 },
    })

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.rows
      ?.reduce((memo, curr: Billboard) => {
        const cover = getImageUrl(curr.customization?.mobile?.imgPath || '')
        const banner = getImageUrl(curr.customization?.desktop?.imgPath || '')

        memo.push({
          ...curr,
          actions: curr.actions?.map((action) => ({
            ...action,
            route: action.route && action?.route['contentWeb'],
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
    <BillboardScroller
      reachEnd={() => {}}
      items={billboardItems}
      customButtons={true}
    />
  )

  const renderLiveEventsScroller = (item: CarouselFlags) => {
    const scrollerName = `${item.LABEL[0].VALUE}`
    return (
      <LivestreamScroller
        key={scrollerName}
        items={liveEventsData?.rows}
        sectionTitle={getCarouselLabel(item)}
        sectionUrl={`/c/${activeChannel?.slug}/lives`}
        loadMoreItems={loadMoreLiveEvents(scrollerName)}
        isLoading={loadingLiveEvents}
      />
    )
  }

  const renderFeaturedPostsScroller = (item: CarouselFlags) => {
    const scrollerName = `${item.LABEL[0].VALUE}`
    return (
      <VideosScroller
        key={scrollerName}
        items={featuredPostsData?.rows}
        sectionTitle={getCarouselLabel(item)}
        loadMoreItems={loadMoreFeaturedPosts(scrollerName)}
        isLoading={loadingFeaturedPosts}
        showCardMore={fetchControl[scrollerName]}
        {...featuredPostsData}
      />
    )
  }

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) => {
    const scrollerName = 'featured-categories'
    return (
      <CategoriesScroller
        key={scrollerName}
        items={featuredCategoriesData?.rows}
        sectionTitle={getCarouselLabel(item)}
        sectionUrl={`/c/${activeChannel?.slug}/categories`}
        loadMoreItems={loadMoreFeaturedCategories(scrollerName)}
        isLoading={loadingFeaturedCategories}
      />
    )
  }

  const getCarouselLabel = (item: CarouselFlags) => {
    const label = item.LABEL.find((item) =>
      i18n.language.includes(item.LOCALE || 'en-US')
    )
    return label?.VALUE || ''
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
          return (
            <ContinueWatchingScrollerComponent
              {...{ item, getCarouselLabel }}
            />
          )
      }
    } else {
      //TODO: this item should be previous filtered by API
      const isActive = item?.TAGS && item.IS_ACTIVE
      return isActive ? (
        <TagsScrollerComponent {...{ item, getCarouselLabel }} />
      ) : (
        <></>
      )
    }
  }

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      <Flex
        gridGap={5}
        flexDirection={'column'}
        mt={billboardItems ? 5 : 7}
        w={'100vw'}
      >
        {!!homeCarouselsFiltered?.length &&
          homeCarouselsFiltered.map((item: CarouselFlags, key: number) => (
            <div key={key}>{renderCarouselsOrderedByRemoteConfig(item)}</div>
          ))}
        {!!categoriesWithChildrenData?.rows.length && (
          <InfiniteScroll
            style={{ overflowX: 'hidden' }}
            dataLength={categoriesWithChildrenData.rows.length}
            next={loadMoreCategories}
            hasMore={categoriesWithChildrenData.hasNextPage}
            loader={
              <Box pt={5} textAlign={'center'}>
                <Spinner color={colors.brand.primary[colorMode]} />
              </Box>
            }
          >
            <Flex gridGap={5} flexDirection={'column'}>
              {categoriesWithChildrenData?.rows?.map((category: Category) => (
                <CategoriesScroller
                  key={category.id}
                  items={category.children}
                  sectionTitle={category?.name}
                  sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
                />
              ))}
            </Flex>
          </InfiniteScroll>
        )}
        {isEmpty && (
          <Box mt={7}>
            <EmptyState />
          </Box>
        )}
      </Flex>
    </Container>
  )
}

export { HomePage }
