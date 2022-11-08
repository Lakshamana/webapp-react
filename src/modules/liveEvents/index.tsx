import { useLazyQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/layout'
import { Container, EmptyState } from 'components/atoms'
import {
  BillboardScroller,
  LivestreamScroller,
  PostsScroller
} from 'components/molecules'
import {
  Kinds,
  PaginatedLiveEventsOutput,
  PaginatedPostsOutput,
  Status
} from 'generated/graphql'
import { ThumborInstanceTypes, useThumbor } from 'hooks/useThumbor'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  QUERY_BILLBOARDS,
  QUERY_LIVE_EVENTS,
  QUERY_POSTS_CARDS,
  QUERY_PUBLIC_LIVE_EVENTS,
  QUERY_PUBLIC_POSTS_CARDS
} from 'services/graphql'
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useCustomizationStore
} from 'services/stores'
import { BillboardTarget } from 'types/common'
import { convertToValidColor } from 'utils/helperFunctions'

import { LiveCarouselTypes } from 'types/common'
import { LiveCarouselFlags } from 'types/flags'

import { onDemandFilter, upcomingFilter } from './utils'

const LiveEvents = () => {
  const { t, i18n } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { generateImage } = useThumbor()
  const [onDemandData, setOnDemandData] = useState<PaginatedPostsOutput>()
  const [liveEvents, setLiveEvents] = useState<PaginatedLiveEventsOutput>()
  const [billboardItems, setBillboardItems] = useState([])

  const [isLiveEventsActive, setIsLiveEventsActive] = useState<boolean>(false)
  const [isUpcomingLiveEventsActive, setIsUpcomingLiveEventsActive] =
    useState<boolean>(false)
  const [isOnDemandActive, setIsOnDemandActive] = useState<boolean>(false)
  const [carousels, setCarousels] = useState<LiveCarouselFlags[]>()
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(true)

  const { activeChannel } = useChannelsStore()

  const { isAnonymousAccess } = useAuthStore()

  const isAnonymousAllowed =
    isAnonymousAccess &&
    (activeChannel?.kind === Kinds.Public ||
      activeChannel?.kind === Kinds.Private)

  const [getLiveEvents, { loading: loadingLiveEvents }] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_LIVE_EVENTS : QUERY_LIVE_EVENTS,
    {
      variables: {
        filter: {
          status: [Status.Live, Status.Scheduled, Status.Ready],
        },
      },
      onCompleted: (result) => {
        const liveEvents = isAnonymousAllowed
          ? result.publicLiveEvents
          : result.liveEvents
        setLiveEvents(liveEvents)
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [getOnDemandPosts, { loading: loadingOnDemandPostsData }] =
    useLazyQuery(
      isAnonymousAllowed ? QUERY_PUBLIC_POSTS_CARDS : QUERY_POSTS_CARDS,
      {
        onCompleted: (result) => {
          const posts = isAnonymousAllowed ? result.publicPosts : result.posts
          setOnDemandData((previous) => ({
            ...posts,
            rows: [...(previous?.rows || []), ...posts.rows],
          }))
        },
        fetchPolicy: 'cache-and-network',
      }
    )

  const [getBillboard, { data: billboardData }] = useLazyQuery(
    QUERY_BILLBOARDS,
    {
      variables: {
        filter: {
          target: BillboardTarget.Live,
        },
      },
      onCompleted: () => setIsLoadingPage(false),
      notifyOnNetworkStatusChange: true,
      fetchPolicy: 'cache-and-network',
    }
  )

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
    if (isLiveEventsActive || isUpcomingLiveEventsActive) getLiveEvents()
    if (isOnDemandActive) getOnDemandPosts({ variables: onDemandFilter(1) })
    // eslint-disable-next-line
  }, [isLiveEventsActive, isUpcomingLiveEventsActive, isOnDemandActive])

  const isLoading =
    loadingOnDemandPostsData || loadingLiveEvents || isLoadingPage

  const hasResults = onDemandData?.rows?.length || liveEvents?.rows?.length

  const isEmpty = !isLoading && !hasResults

  const renderBillboard = () => (
    <BillboardScroller
      reachEnd={() => {}}
      items={billboardItems}
      customButtons={true}
    />
  )

  const getCarouselLabel = (item: LiveCarouselFlags) => {
    const label = item.LABEL.find((item) =>
      i18n.language.includes(item.LOCALE || 'en-US')
    )
    return label?.VALUE || ''
  }

  const renderLiveEventsScroller = (item: LiveCarouselFlags) => {
    const liveItems = liveEvents?.rows.filter(
      (item) => item.status === Status.Live
    )
    return !!liveItems?.length ? (
      <LivestreamScroller
        items={liveItems}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        isLoading={loadingLiveEvents}
      />
    ) : null
  }

  const renderUpcomingLiveEventsScroller = (item: LiveCarouselFlags) => {
    const upcomingItems = liveEvents?.rows.filter(
      (item) => item.status === Status.Scheduled || item.status === Status.Ready
    )
    return !!upcomingItems?.length ? (
      <LivestreamScroller
        items={upcomingItems}
        key={`${item.LABEL[0].VALUE}`}
        sectionTitle={getCarouselLabel(item)}
        isLoading={loadingLiveEvents}
      />
    ) : null
  }

  const renderOnDemandPosts = (item: LiveCarouselFlags) =>
    !!onDemandData?.rows?.length ? (
      <PostsScroller
        key={`${item.LABEL[0].VALUE}`}
        items={onDemandData.rows}
        sectionTitle={getCarouselLabel(item)}
        loadMoreItems={loadMoreOnDemand}
        isLoading={loadingOnDemandPostsData}
      />
    ) : null

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
        {isEmpty && <EmptyState />}
      </Flex>
    </Container>
  )
}
export { LiveEvents }
