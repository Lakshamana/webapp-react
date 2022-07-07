import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Billboard,
  Category,
  LiveEvent,
  Post,
  PostType,
  Status
} from 'generated/graphql'

import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES_CARDS,
  QUERY_LIVE_EVENTS,
  QUERY_POSTS_CARDS,
  QUERY_TAG
} from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import {
  useChannelsStore,
  useCommonStore,
  useCustomizationStore
} from 'services/stores'

import { BillboardTarget, HomeCarouselsTypes } from 'types/common'
import { CarouselFlags } from 'types/flags'

import { Container, EmptyState, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  LivestreamScroller,
  TagsScroller,
  VideosScroller
} from 'components/molecules'

import { sizes } from 'styles'
import { convertToValidColor } from 'utils/helperFunctions'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const [featuredPostsData, setFeaturedPostsData] = useState<Post[]>()
  const [liveEventsData, setLiveEventsData] = useState<LiveEvent[]>()
  const [featuredCategoriesData, setFeaturedCategoriesData] =
    useState<Category[]>()
  const [categoriesWithChildrenData, setCategoriesWithChildrenData] =
    useState<Category[]>()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [isFeaturedPostsActive, setIsFeaturedPostsActive] = useState<boolean>()
  const [isFeaturedCategoriesActive, setIsFeaturedCategoriesActive] =
    useState<boolean>()
  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>()
  const [tagsIds, setTagsIds] = useState<string[]>()
  const [tagsData, setTagsData] = useState<any[]>()

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: {
        filter: {
          target: BillboardTarget.Home,
        },
      },
      fetchPolicy: 'no-cache',
    })

  const [getLiveEvents, { loading: loadingLiveEvents }] = useLazyQuery(
    QUERY_LIVE_EVENTS,
    {
      variables: {
        filter: {
          status: [Status.Live, Status.Scheduled, Status.Ready],
        },
      },
      onCompleted: (result) => {
        setLiveEventsData(result?.liveEvents?.rows)
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  )

  const [getFeaturedPosts, { loading: loadingFeaturedPosts }] = useLazyQuery(
    QUERY_POSTS_CARDS,
    {
      variables: {
        filter: {
          featured: true,
          typeIn: [PostType.Video, PostType.OnDemand],
          status: Status.Published,
        },
      },
      onCompleted: (result) => {
        setFeaturedPostsData(result?.posts?.rows)
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    }
  )

  const [getFeaturedCategories, { loading: loadingFeaturedCategories }] =
    useLazyQuery(QUERY_CATEGORIES_CARDS, {
      variables: {
        filter: {
          featured: true,
          sortBy: 'sort.asc',
        },
      },
      onCompleted: (result) => {
        setFeaturedCategoriesData(result?.categories?.rows)
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    })

  const [getCategories, { loading: loadingCategoriesWithChildren }] =
    useLazyQuery(QUERY_CATEGORIES_CARDS, {
      variables: {
        filter: {
          isParent: true,
          sortBy: 'sort.asc',
        },
      },
      onCompleted: (result) => {
        setCategoriesWithChildrenData(result?.categories?.rows)
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    })

  const [getTags, { loading: loadingTag }] = useLazyQuery(QUERY_TAG, {
    onCompleted: (result) => {
      setTagsData((oldState) => [{ ...oldState }, result?.tag])
    },
  })

  const isLoading =
    loadingLiveEvents ||
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategoriesWithChildren ||
    loadingTag

  const hasResults =
    billboardData?.billboard?.length ||
    liveEventsData?.length ||
    featuredPostsData?.length ||
    featuredCategoriesData?.length ||
    (isHomeDisplayingCategories && categoriesWithChildrenData?.length) ||
    tagsData?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  const clearAllItems = () => {
    setLiveEventsData([])
    setFeaturedCategoriesData([])
    setFeaturedPostsData([])
    setBillboardItems([])
    setTagsIds([])
    setTagsData([])
  }
  const deactivateAllItems = () => {
    setIsFeaturedPostsActive(false)
    setIsFeaturedCategoriesActive(false)
    setIsLiveEventsActive(false)
  }

  useEffect(() => {
    deactivateAllItems()
    clearAllItems()
    getBillboard()
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

    setTagsIds(ids)

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

  useEffect(() => {
    if (tagsIds?.length) {
      tagsIds.forEach((item) => getTags({ variables: { id: item } }))
    }
    //eslint-disable-next-line
  }, [tagsIds])

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

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
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderLiveEventsScroller = (item: CarouselFlags) =>
    !!liveEventsData?.length && (
      <LivestreamScroller
        items={liveEventsData}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/lives`}
      />
    )

  const renderFeaturedPostsScroller = (item: CarouselFlags) =>
    !!featuredPostsData?.length && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={featuredPostsData}
        sectionTitle={getCarouselLabel(item)}
        sectionUrl={''}
      />
    )

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) =>
    !!featuredCategoriesData?.length && (
      <CategoriesScroller
        key="featured-categories"
        items={featuredCategoriesData}
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
    const currentTag = tagsData?.find((tag) => tag.id === item.TAGS)
    if (currentTag)
      return (
        <TagsScroller
          key={`${item.LABEL[0].VALUE}`}
          tagData={currentTag}
          hasMoreLink={true}
          content={item.CONTENT_TYPE}
          sectionTitle={getCarouselLabel(item)}
          sectionUrl={`/c/${activeChannel?.slug}/tag/`}
        />
      )
    return <></>
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
        {!isLoading &&
          !!homeCarouselsFiltered?.length &&
          homeCarouselsFiltered.map((item: CarouselFlags) =>
            renderCarouselsOrderedByRemoteConfig(item)
          )}
        {!!categoriesWithChildrenData?.length && renderCategoriesWithChildren()}
        {isEmpty && <EmptyState />}
      </Flex>
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
    </Container>
  )
}

export { HomePage }
