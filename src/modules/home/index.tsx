import { useLazyQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import axios from 'axios'
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
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES_CARDS,
  QUERY_LIVE_EVENTS,
  QUERY_LOOP_TAGS,
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

import { Client } from 'services/api'

import { BillboardTarget, HomeCarouselsTypes } from 'types/common'
import { CarouselFlags } from 'types/flags'

import {
  BillboardScroller,
  CategoriesScroller,
  Container, ContinueWatchingScroller, EmptyState,
  LivestreamScroller,
  Skeleton,
  TagsScroller,
  VideosScroller
} from 'components'
import { DEFAULT_POLLING_INTERVAL } from 'config/constants'
import InfiniteScroll from 'react-infinite-scroll-component'
import { colors, sizes } from 'styles'
import { convertToValidColor } from 'utils/helperFunctions'
import { askForPushPermission } from 'utils/pushNotifications'
import { categoriesFilter, liveEventsFilter, postsFilter } from './utils'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { activeChannel } = useChannelsStore()
  const { isAnonymousAccess, user } = useAuthStore()

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

  const [continueWatchingListData, setContinueWatchingListData] = useState<any>()

  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [isFeaturedPostsActive, setIsFeaturedPostsActive] = useState<boolean>()
  const [isFeaturedCategoriesActive, setIsFeaturedCategoriesActive] =
    useState<boolean>()
  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>()
  const [tagsIds, setTagsIds] = useState<string[]>([])
  const [tagsData, setTagsData] = useState({})
  const [loadingTags, setLoadingTags] = useState(false)

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: { filter: { target: BillboardTarget.Home } },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'no-cache',
    })

  const [getLiveEvents, { loading: loadingLiveEvents }] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_LIVE_EVENTS : QUERY_LIVE_EVENTS,
    {
      onCompleted: (result) => {
        const liveEvents = isAnonymousAllowed
          ? result.publicLiveEvents
          : result.liveEvents
        setLiveEventsData((previous) => ({
          ...liveEvents,
          rows: [...(previous?.rows || []), ...liveEvents?.rows],
        }))
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
        setFeaturedPostsData((previous) => ({
          ...posts,
          rows: [...(previous?.rows || []), ...posts.rows],
        }))
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
          setFeaturedCategoriesData((previous) => ({
            ...categories,
            rows: [...(previous?.rows || []), ...categories.rows],
          }))
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
          setCategoriesWithChildrenData((previous) => ({
            ...categories,
            rows: [...(previous?.rows || []), ...categories.rows],
          }))
        },
        fetchPolicy: 'cache-and-network',
      }
    )

  const loadTags = () => {
    setLoadingTags(true)
    Client.query({
      query: QUERY_LOOP_TAGS(tagsIds),
      fetchPolicy: 'no-cache',
    })
      .then((result) => setTagsData(result.data))
      .finally(() => setLoadingTags(false))
  }

  const loadMoreLiveEvents = () => {
    if (liveEventsData?.hasNextPage) {
      getLiveEvents({
        variables: { ...liveEventsFilter(liveEventsData.page + 1) },
      })
    }
  }

  const loadMoreFeaturedPosts = () => {
    if (featuredPostsData?.hasNextPage) {
      getFeaturedPosts({
        variables: { ...postsFilter(featuredPostsData.page + 1) },
      })
    }
  }

  const loadMoreFeaturedCategories = () => {
    if (featuredCategoriesData?.hasNextPage) {
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
    loadingTags ||
    loadingBillboard

  const hasResults =
    billboardData?.billboard?.length ||
    liveEventsData?.rows?.length ||
    featuredPostsData?.rows?.length ||
    featuredCategoriesData?.rows?.length ||
    (isHomeDisplayingCategories && categoriesWithChildrenData?.rows?.length) ||
    Object.keys(tagsData).length !== 0

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // Ask for permission to show push notifications
    askForPushPermission()
    // eslint-disable-next-line
  }, [])

  const clearAllItems = () => {
    setLiveEventsData(undefined)
    setFeaturedCategoriesData(undefined)
    setFeaturedPostsData(undefined)
    setCategoriesWithChildrenData(undefined)
    setBillboardItems([])
    setTagsData({})
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

    const tagsCarouselItems = activeChannelConfig?.HOME_ITEMS.CAROUSELS.filter(
      (item) => item?.TAGS && item.IS_ACTIVE
    )

    const ids = tagsCarouselItems
      ?.filter((item) => item.TAGS && item.TAGS.length)
      .map((item) => item.TAGS)

    ids?.length && setTagsIds(ids)

    defaultCarouselsItems?.forEach((item) => {
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Posts)
        setIsFeaturedPostsActive(true)
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Collections)
        setIsFeaturedCategoriesActive(true)
      if (item.CONTENT_TYPE[0] === HomeCarouselsTypes.Livestreams)
        setIsLiveEventsActive(true)
    })

    if (activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES)
      getCategories({ variables: { ...categoriesFilter(1, true, undefined, 3) } })

    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )

    return () => setTagsIds([])
    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (isFeaturedPostsActive)
      getFeaturedPosts({ variables: { ...postsFilter(1) } })
    if (isFeaturedCategoriesActive)
      getFeaturedCategories({ variables: { ...categoriesFilter(1, undefined, true) } })
    if (isLiveEventsActive)
      getLiveEvents({ variables: { ...liveEventsFilter(1) } })
    // eslint-disable-next-line
  }, [isFeaturedPostsActive, isFeaturedCategoriesActive, isLiveEventsActive])

  useEffect(() => {
    if (!tagsIds?.length) {
      setTagsData({})
      return
    }
    loadTags()
    //eslint-disable-next-line
  }, [tagsIds])

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
      reachEnd={() => { }}
      items={billboardItems}
      customButtons={true}
    />
  )

  const renderLiveEventsScroller = (item: CarouselFlags) =>
    !!liveEventsData?.rows?.length && (
      <LivestreamScroller
        loadMoreItems={loadMoreLiveEvents}
        items={liveEventsData?.rows}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/lives`}
      />
    )

  const renderFeaturedPostsScroller = (item: CarouselFlags) =>
    !!featuredPostsData?.rows?.length && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={featuredPostsData.rows}
        sectionTitle={getCarouselLabel(item)}
        sectionUrl={''}
        loadMoreItems={loadMoreFeaturedPosts}
      />
    )

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) =>
    !!featuredCategoriesData?.rows?.length && (
      <CategoriesScroller
        loadMoreItems={loadMoreFeaturedCategories}
        key="featured-categories"
        items={featuredCategoriesData.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/categories`}
      />
    )

  const continueWatchingList = async (lastId?: String) => {
    const URL = process.env.REACT_APP_ANALYTICS_API
    let URL_PARAMS = `?userId=${user?.id}&channelId=${activeChannel?.id}`
    if (lastId) URL_PARAMS += `&lastId=${lastId}`
    try {
      const { data } = await axios.get(`${URL}/posts/continue-watching${URL_PARAMS}`)
      if (data?.statusCode === 200) {
        const { rows, ...allRest } = data.body.data
        setContinueWatchingListData((previous) => ({
          ...continueWatchingListData,
          ...allRest,
          rows: [...(previous?.rows || []), ...rows],
        }))
      }
    } catch (error) { }
  }

  useEffect(() => {
    if (!isAnonymousAccess && user?.id && activeChannel?.id) continueWatchingList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, activeChannel])

  const loadMoreContinueWatchingPosts = () => {
    if (continueWatchingListData?.hasNextPage) {
      continueWatchingList(continueWatchingListData?.lastId)
    }
  }

  const renderContinueWatchingScroller = (item: CarouselFlags) =>
    !!continueWatchingListData?.rows?.length && (
      <ContinueWatchingScroller
        key={`${item.LABEL[0].VALUE}`}
        items={continueWatchingListData.rows}
        sectionTitle={getCarouselLabel(item)}
        loadMoreItems={loadMoreContinueWatchingPosts}
        sectionUrl={''}
      />
    )

  const renderTagsScroller = (item: CarouselFlags) => {
    const currentTag = tagsData[`tag${item.TAGS}`]
    if (!currentTag) return undefined
    return (
      <TagsScroller
        key={`${item.TAGS}`}
        tagData={currentTag}
        hasMoreLink={true}
        content={item.CONTENT_TYPE}
        sectionTitle={getCarouselLabel(item)}
        sectionUrl={`/c/${activeChannel?.slug}/tag/`}
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
          return renderContinueWatchingScroller(item)
      }
    } else {
      return renderTagsScroller(item)
    }
  }

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      <Flex
        gridGap={5}
        flexDirection={'column'}
        mt={billboardItems ? 0 : 7}
        w={'100vw'}
      >
        {!!homeCarouselsFiltered?.length &&
          homeCarouselsFiltered.map((item: CarouselFlags, key: number) => (
            <div key={key}>
              {renderCarouselsOrderedByRemoteConfig(item)}
            </div>
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
            {categoriesWithChildrenData?.rows?.map((category: Category) => (
              <CategoriesScroller
                key={category.id}
                items={category.children}
                sectionTitle={category?.name}
                hasMoreLink={true}
                sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
              />
            ))}
          </InfiniteScroll>
        )}

        {isLoading && !hasResults && (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton kind="cards" numberOfCards={4} />
          </Box>
        )}
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}

export { HomePage }
