import { useLazyQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/layout'
import { Container, EmptyState, Skeleton } from 'components/atoms'
import {
  BillboardScroller,
  LivestreamScroller,
  VideosScroller
} from 'components/molecules'
import {
  PaginatedLiveEventsOutput,
  PaginatedPostsOutput,
  Status
} from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  QUERY_BILLBOARDS,
  QUERY_LIVE_EVENTS,
  QUERY_POSTS_CARDS
} from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useCommonStore, useCustomizationStore } from 'services/stores'
import { sizes } from 'styles'
import { BillboardTarget } from 'types/common'
import { convertToValidColor } from 'utils/helperFunctions'

import { LiveCarouselTypes } from 'types/common'
import { LiveCarouselFlags } from 'types/flags'

import { DEFAULT_POLLING_INTERVAL } from 'config/constants'

import { onDemandFilter, upcomingFilter } from './utils'

const Livestreams = () => {
  const { t, i18n } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const [upcomingEventsData, setUpcomingEventsData] =
    useState<PaginatedLiveEventsOutput>()
  const [onDemandData, setOnDemandData] = useState<PaginatedPostsOutput>()
  const [billboardItems, setBillboardItems] = useState([])

  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>(false)
  const [isUpcomingLiveEventsActive, setIsUpcomingLiveEventsActive] =
    useState<boolean>(false)
  const [isOnDemandActive, setIsOnDemandActive] = useState<boolean>(false)
  const [carousels, setCarousels] = useState<LiveCarouselFlags[]>()

  const [getLiveEvents, { data: liveEventsData, loading: loadingLiveEvents }] =
    useLazyQuery(QUERY_LIVE_EVENTS, {
      variables: {
        filter: {
          status: [Status.Live],
        },
      },
      fetchPolicy: 'cache-and-network',
      pollInterval: DEFAULT_POLLING_INTERVAL,
    })

  const [getUpcomingEvents, { loading: loadingUpcomingEvents }] = useLazyQuery(
    QUERY_LIVE_EVENTS,
    {
      onCompleted: (result) => {
        setUpcomingEventsData((previous) => ({
          ...result.liveEvents,
          rows: [...(previous?.rows || []), ...result.liveEvents.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [getOnDemandPosts, { loading: loadingOnDemandPostsData }] =
    useLazyQuery(QUERY_POSTS_CARDS, {
      onCompleted: (result) => {
        setOnDemandData((previous) => ({
          ...result.posts,
          rows: [...(previous?.rows || []), ...result.posts.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    })

  const [getBillboard, { data: billboardData }] = useLazyQuery(
    QUERY_BILLBOARDS,
    {
      variables: {
        filter: {
          target: BillboardTarget.Live,
        },
      },
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  )

  const loadMoreUpcomingEvents = () => {
    if (upcomingEventsData?.hasNextPage) {
      getUpcomingEvents({
        variables: { ...upcomingFilter(upcomingEventsData.page + 1) },
      })
    }
  }

  const loadMoreOnDemand = () => {
    if (onDemandData?.hasNextPage) {
      getOnDemandPosts({
        variables: { ...upcomingFilter(onDemandData.page + 1) },
      })
    }
  }

  const getImageUrl = (path: string) => {
    return generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: { width: 1080, height: 0 },
    })
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
    if (isLiveEventsActive) getLiveEvents()
    if (isUpcomingLiveEventsActive)
      getUpcomingEvents({ variables: upcomingFilter(1) })
    if (isOnDemandActive) getOnDemandPosts({ variables: onDemandFilter(1) })
    // eslint-disable-next-line
  }, [isLiveEventsActive, isUpcomingLiveEventsActive, isOnDemandActive])

  const isLoading =
    loadingOnDemandPostsData || loadingLiveEvents || loadingUpcomingEvents

  const hasResults =
    onDemandData?.rows?.length ||
    liveEventsData?.liveEvents?.rows?.length ||
    upcomingEventsData?.rows?.length

  const isEmpty = !isLoading && !hasResults

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const getCarouselLabel = (item: LiveCarouselFlags) => {
    const label = item.LABEL.find((item) =>
      i18n.language.includes(item.LOCALE || 'en-US')
    )
    return label?.VALUE || ''
  }

  const renderLiveEventsScroller = (item: LiveCarouselFlags) =>
    !!liveEventsData?.liveEvents?.rows?.length && (
      <LivestreamScroller
        items={liveEventsData.liveEvents.rows}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
      />
    )

  const renderUpcomingLiveEventsScroller = (item: LiveCarouselFlags) =>
    !!upcomingEventsData?.rows.length && (
      <LivestreamScroller
        items={upcomingEventsData.rows}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        loadMoreItems={loadMoreUpcomingEvents}
      />
    )

  const renderOnDemandPosts = (item: LiveCarouselFlags) =>
    !!onDemandData?.rows?.length && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={onDemandData.rows}
        sectionTitle={getCarouselLabel(item)}
        loadMoreItems={loadMoreOnDemand}
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

  return (
    <Container
      flexDirection={'column'}
      display={'flex'}
      mt={billboardItems ? 0 : 4}
    >
      {!!billboardItems?.length && renderBillboard()}
      <Flex gridGap={5} flexDirection={'column'} w={'100vw'}>
        {!!carousels?.length &&
          carousels.map((item: LiveCarouselFlags) =>
            renderCarouselsOrderedByRemoteConfig(item)
          )}
        {isLoading && (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton my={4} kind="cards" />
          </Box>
        )}
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}
export { Livestreams }
