import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from '@apollo/client'

import {
  PostType,
  Category,
  Billboard,
  Status,
  Post,
  LiveEvent,
} from 'generated/graphql'

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

import { convertToValidColor } from 'utils/helperFunctions'
import { sizes } from 'styles'

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
  const [hasTagsContent, setHasTagsContent] = useState<boolean>(false)

  const [getBillboard, { data: billboardData, loading: loadingBillboard }] =
    useLazyQuery(QUERY_BILLBOARDS, {
      variables: {
        filter: {
          target: BillboardTarget.Home,
        },
      },
      fetchPolicy: 'cache-and-network',
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
    useLazyQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          featured: true,
        },
      },
      onCompleted: (result) => {
        setFeaturedCategoriesData(result?.categories?.rows)
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    })

  const [getCategories, { loading: loadingCategoriesWithChildren }] =
    useLazyQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          isParent: true,
        },
      },
      onCompleted: (result) => {
        setCategoriesWithChildrenData(result?.categories?.rows)
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: true,
    })

  const isLoading =
    loadingLiveEvents ||
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategoriesWithChildren

  const hasResults =
    billboardData?.billboard?.length ||
    liveEventsData?.length ||
    featuredPostsData?.length ||
    featuredCategoriesData?.length ||
    (isHomeDisplayingCategories && categoriesWithChildrenData?.length) ||
    hasTagsContent

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  const clearAllItems = () => {
    setLiveEventsData([])
    setFeaturedCategoriesData([])
    setFeaturedPostsData([])
    setHasTagsContent(false)
  }
  const deactivateAllItems = () => {
    setIsFeaturedPostsActive(false)
    setIsFeaturedCategoriesActive(false)
    setIsLiveEventsActive(false)
  }

  useEffect(() => {
    getBillboard()
    deactivateAllItems()
    clearAllItems()
    //eslint-disable-next-line
  }, [activeChannel])

  useEffect(() => {
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
        hasMoreLink={false}
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

  const renderTagsScroller = (item: CarouselFlags) => (
    <TagsScroller
      key={`${item.LABEL[0].VALUE}`}
      tagID={item.TAGS}
      hasResults={() => setHasTagsContent(true)}
      hasMoreLink={true}
      content={item.CONTENT_TYPE}
      sectionTitle={getCarouselLabel(item)}
      sectionUrl={`/c/${activeChannel?.slug}/tag/`}
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
          <Skeleton kind="cards" numberOfCards={3} />
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
          {!!categoriesWithChildrenData?.length &&
            renderCategoriesWithChildren()}
          {isEmpty && <EmptyState />}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
