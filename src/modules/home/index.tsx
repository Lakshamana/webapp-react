import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Billboard,
  Category,
  Kinds,
  PaginatedCategoriesOutput,
  PaginatedLiveEventsOutput,
  PaginatedPostsOutput
} from 'generated/graphql'

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
  useCustomizationStore
} from 'services/stores'

import { Client } from 'services/api'

import { BillboardTarget, HomeCarouselsTypes } from 'types/common'
import { CarouselFlags } from 'types/flags'

import {
  BillboardScroller,
  CategoriesScroller,
  Container,
  EmptyState,
  LivestreamScroller,
  Skeleton,
  TagsScroller,
  VideosScroller
} from 'components'

import { categoriesFilter, liveEventsFilter, postsFilter } from './utils'

import { convertToValidColor } from 'utils/helperFunctions'

import { sizes } from 'styles'

const HomePage = () => {
  const { t, i18n } = useTranslation()
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
    useState<Category[]>()

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
      variables: {
        filter: {
          target: BillboardTarget.Home,
        },
      },
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
          setCategoriesWithChildrenData(categories?.rows)
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
      .then((result) => {
        setTagsData(result.data)
      })
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
    (isHomeDisplayingCategories && categoriesWithChildrenData?.length) ||
    Object.keys(tagsData).length !== 0

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  const clearAllItems = () => {
    setLiveEventsData(undefined)
    setFeaturedCategoriesData(undefined)
    setFeaturedPostsData(undefined)
    setCategoriesWithChildrenData([])
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
      getCategories({ variables: { ...categoriesFilter(1, true, undefined) } })

    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )

    return () => {
      setTagsIds([])
    }
    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (isFeaturedPostsActive)
      getFeaturedPosts({
        variables: { ...postsFilter(1) },
      })
    if (isFeaturedCategoriesActive)
      getFeaturedCategories({
        variables: { ...categoriesFilter(1, undefined, true) },
      })
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
      reachEnd={() => {}}
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

  const renderCategoriesWithChildren = () =>
    categoriesWithChildrenData?.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
      />
    ))

  const renderTagsScroller = (item: CarouselFlags) => {
    const currentTag = tagsData[`tag${item.TAGS}`]
    if (currentTag)
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
    return undefined
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
      <Flex
        gridGap={5}
        flexDirection={'column'}
        mt={billboardItems ? 0 : 7}
        w={'100vw'}
      >
        {!!homeCarouselsFiltered?.length &&
          homeCarouselsFiltered.map((item: CarouselFlags, key: number) => (
            <div key={key}>{renderCarouselsOrderedByRemoteConfig(item)}</div>
          ))}
        {!!categoriesWithChildrenData?.length && renderCategoriesWithChildren()}
        {isLoading && (
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
