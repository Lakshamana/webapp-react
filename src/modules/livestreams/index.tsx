import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useLazyQuery, useQuery } from '@apollo/client'
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
import { useCommonStore } from 'services/stores'
import { convertToValidColor } from 'utils/helperFunctions'

import { DEFAULT_POLLING_INTERVAL } from 'config/constants'

const Livestreams = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { generateImage } = useThumbor()
  const [liveItems, setLiveItems] = useState<any[]>()
  const [upcomingItems, setUpcomingItems] = useState<any[]>()
  const [billboardItems, setBillboardItems] = useState([])

  //TODO: Waiting for API to send correct filters
  const [
    getLivestreamsScroler,
    { data: livestreamsData, loading: loadingLivestreams },
  ] = useLazyQuery(QUERY_LIVE_EVENTS, {
    variables: {
      filter: {},
    },
    // variables: {
    //   filter: {
    //     statusIn: [
    //       LivestreamStatus.Active,
    //       LivestreamStatus.Preparing,
    //       LivestreamStatus.Scheduled,
    //     ],
    //   } as LivestreamFilter,
    //   orderBy: [
    //     {
    //       name: LivestreamTypeSortEnum.StartedAt,
    //       direction: SortDirection.Asc,
    //     },
    //   ],
    // },
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
  })

  const { data: billboardData } = useQuery(QUERY_BILLBOARDS, {
    variables: {
      filter: {
        target: BillboardTarget.Live,
      },
    },
  })

  const getImageUrl = (path: string) => {
    return generateImage(ThumborInstanceTypes.IMAGE, path)
  }

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))

    const billboardItems = billboardData?.billboards?.rows
      ?.reduce((memo, curr) => {
        const cover = getImageUrl(curr.customization?.mobile?.imgPath)
        const banner = getImageUrl(curr.customization?.desktop?.imgPath)

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

  useEffect(() => {
    setPageTitle(t('header.tabs.live'))
    getLivestreamsScroler()
    getOnDemandPostsData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const live = livestreamsData?.liveEvents?.rows?.filter(
      (live: LiveEvent) => {
        return live.status === Status.Live
      }
    )
    console.log(live)
    setLiveItems(live?.length ? live : null)

    const upcoming = livestreamsData?.liveEvents?.rows?.filter(
      (live: LiveEvent) => {
        return (
          live.status === Status.Scheduled || live.status === Status.Published
        )
      }
    )
    console.log(upcoming)
    setUpcomingItems(upcoming)
    // eslint-disable-next-line
  }, [livestreamsData])

  const isLoading = loadingOnDemandPostsData || loadingLivestreams

  const hasResults =
    onDemandPostsData?.posts?.rows?.length ||
    liveItems?.length ||
    upcomingItems?.length

  const isEmpty = !isLoading && !hasResults

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  if (isLoading)
    <Box p={sizes.paddingSm} width="100%">
      <Skeleton my={4} kind="cards" numberOfCards={4} />
    </Box>

  if (isEmpty) <EmptyState />

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      <Flex gridGap={5} flexDirection={'column'} w={'100vw'}>
        {!!liveItems?.length && (
          <LivestreamScroller
            items={liveItems}
            sectionTitle={t('page.live.live')}
            hasMoreLink={false}
          ></LivestreamScroller>
        )}
        {!!upcomingItems?.length && (
          <LivestreamScroller
            items={upcomingItems}
            sectionTitle={t('page.live.upcoming')}
            hasMoreLink={false}
          ></LivestreamScroller>
        )}
        {!!onDemandPostsData?.posts?.length && (
          <VideosScroller
            items={onDemandPostsData.posts}
            sectionTitle={t('page.live.past')}
            hasMoreLink={false}
          ></VideosScroller>
        )}
      </Flex>
    </Container>
  )
}
export { Livestreams }
