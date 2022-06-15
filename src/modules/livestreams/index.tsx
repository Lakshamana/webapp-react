import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useThumbor, ThumborInstanceTypes } from 'services/hooks'
import {
  QUERY_POSTS_CARDS,
  QUERY_BILLBOARDS,
  QUERY_LIVE_EVENTS,
} from 'services/graphql'
import { PostType, LiveEvent, Status } from 'generated/graphql'
import { Container, EmptyState, Skeleton } from 'components/atoms'
import {
  LivestreamScroller,
  VideosScroller,
  BillboardScroller,
} from 'components/molecules'
import { BillboardTarget } from 'types/common'
import { sizes } from 'styles'
import { useCommonStore, useCustomizationStore } from 'services/stores'
import { convertToValidColor } from 'utils/helperFunctions'

import { LiveCarouselTypes } from 'types/common'
import { LiveCarouselFlags } from 'types/flags'

import { DEFAULT_POLLING_INTERVAL } from 'config/constants'

const Livestreams = () => {
  const { t, i18n } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const [liveItems, setLiveItems] = useState<LiveEvent[]>()
  const [upcomingItems, setUpcomingItems] = useState<LiveEvent[]>()
  const [billboardItems, setBillboardItems] = useState([])
  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>(false)
  const [isUpcomingLiveEventsActive, setIsUpcomingLiveEventsActive] =
    useState<boolean>(false)
  const [isOnDemandActive, setIsOnDemandActive] = useState<boolean>(false)
  const [carousels, setCarousels] = useState<LiveCarouselFlags[]>()

  const [
    getLiveEvents,
    { data: livestreamsData, loading: loadingLivestreams },
  ] = useLazyQuery(QUERY_LIVE_EVENTS, {
    variables: {
      filter: {
        status: [Status.Live, Status.Scheduled, Status.Ready],
      },
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    pollInterval: DEFAULT_POLLING_INTERVAL,
  })

  //TODO: Implement infinite loading on Cards Scroller
  const [
    getOnDemandPostsData,
    { data: onDemandPostsData, loading: loadingOnDemandPostsData },
  ] = useLazyQuery(QUERY_POSTS_CARDS, {
    variables: {
      filter: {
        typeIn: [PostType.OnDemand],
        sortBy: 'publishedAt.asc',
      },
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  })

  const [getBillboard, { data: billboardData }] = useLazyQuery(QUERY_BILLBOARDS, {
    variables: {
      filter: {
        target: BillboardTarget.Live,
      },
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
  })

  const getImageUrl = (path: string) => {
    return generateImage(ThumborInstanceTypes.IMAGE, path)
  }

  useEffect(() => {
    const activeCarouselItems = activeChannelConfig?.LIVESTREAM.sort(
      (a, b) => a.ORDER - b.ORDER
    ).filter((item) => item.IS_ACTIVE)

    setCarousels(activeCarouselItems)

    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (carousels?.length) {
      carousels?.forEach((item) => {
        if (item.TAB === LiveCarouselTypes.Live) setIsLiveEventsActive(true)
        if (item.TAB === LiveCarouselTypes.Upcoming)
          setIsUpcomingLiveEventsActive(true)
        if (item.TAB === LiveCarouselTypes.Past) setIsOnDemandActive(true)
      })
    }
  }, [carousels])

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.rows
      ?.reduce((memo, curr) => {
        const cover = getImageUrl(curr.customization?.mobile?.imgPath)
        const banner = getImageUrl(curr.customization?.desktop?.imgPath)

        memo.push({
          ...curr,
          actions: curr.actions.map((action) => ({
            ...action,
            route: action.route && action?.route['content'],
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

  useEffect(() => {
    setPageTitle(t('header.tabs.live'))
    getBillboard()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const live = livestreamsData?.liveEvents?.rows?.filter(
      (live: LiveEvent) => {
        return live.status === Status.Live
      }
    )
    setLiveItems(live)

    const upcoming = livestreamsData?.liveEvents?.rows?.filter(
      (live: LiveEvent) => {
        return live.status === Status.Scheduled || live.status === Status.Ready
      }
    )
    setUpcomingItems(upcoming)
    // eslint-disable-next-line
  }, [livestreamsData])

  useEffect(() => {
    if (isLiveEventsActive || isUpcomingLiveEventsActive) getLiveEvents()
    if (isOnDemandActive) getOnDemandPostsData()
    // eslint-disable-next-line
  }, [isLiveEventsActive, isUpcomingLiveEventsActive, isOnDemandActive])

  const isLoading = loadingOnDemandPostsData || loadingLivestreams

  const hasResults =
    onDemandPostsData?.posts?.rows?.length ||
    liveItems?.length ||
    upcomingItems?.length

  const isEmpty = !isLoading && !hasResults

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const getCarouselLabel = (item: LiveCarouselFlags) => {
    const label = item.LABEL.filter((item) =>
      i18n.language.includes(item.LOCALE)
    )
    return label[0].VALUE
  }

  const renderLiveEventsScroller = (item: LiveCarouselFlags) =>
    !!liveItems?.length && (
      <LivestreamScroller
        items={liveItems}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
      />
    )

  const renderUpcomingLiveEventsScroller = (item: LiveCarouselFlags) =>
    !!upcomingItems?.length && (
      <LivestreamScroller
        items={upcomingItems}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
      />
    )

  const renderOnDemandPosts = (item: LiveCarouselFlags) =>
    !!onDemandPostsData?.posts?.rows?.length && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={onDemandPostsData.posts.rows}
        sectionTitle={getCarouselLabel(item)}
      />
    )

  const renderCarouselsOrderedByRemoteConfig = (item: LiveCarouselFlags) => {
    switch (item.TAB) {
      case LiveCarouselTypes.Live:
        return renderLiveEventsScroller(item)
      case LiveCarouselTypes.Upcoming:
        return renderUpcomingLiveEventsScroller(item)
      case LiveCarouselTypes.Past:
        return renderOnDemandPosts(item)
    }
  }

  if (isLoading)
    <Box p={sizes.paddingSm} width="100%">
      <Skeleton my={4} kind="cards" numberOfCards={4} />
    </Box>

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      <Flex gridGap={5} flexDirection={'column'} w={'100vw'}>
        {!!carousels?.length &&
          carousels.map((item: LiveCarouselFlags) =>
            renderCarouselsOrderedByRemoteConfig(item)
          )}
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}
export { Livestreams }
