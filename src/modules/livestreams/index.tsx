import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { useThumbor, ThumborInstanceTypes } from 'services/hooks'
import { QUERY_POSTS, QUERY_BILLBOARDS } from 'services/graphql'
import { SortDirection, PostType } from 'generated/graphql'
import { Container, EmptyState, Skeleton } from 'components/atoms'
import {
  LivestreamScroller,
  VideosScroller,
  BillboardScroller,
} from 'components/molecules'
import { BillboardTarget } from 'types/common'
import { sizes } from 'styles'
import { useCommonStore } from 'services/stores'
import { convertToValidColor } from 'utils'

const Livestreams = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { generateImage } = useThumbor()
  const [liveItems, setLiveItems] = useState<any[]>()
  const [upcomingItems, setUpcomingItems] = useState<any[]>()
  const [billboardItems, setBillboardItems] = useState([])

  //TODO: ALL comments in this page is because we need to wait for API to list Livestreams Events

  // const [
  //   getLivestreamsScroler,
  //   { data: livestreamsData, loading: loadingLivestreams },
  // ] = useLazyQuery(QUERY_LIVESTREAMS_SCROLLER, {
  //   variables: {
  //     filter: {
  //       statusIn: [
  //         LivestreamStatus.Active,
  //         LivestreamStatus.Preparing,
  //         LivestreamStatus.Scheduled,
  //       ],
  //     } as LivestreamFilter,
  //     orderBy: [
  //       {
  //         name: LivestreamTypeSortEnum.StartedAt,
  //         direction: SortDirection.Asc,
  //       },
  //     ],
  //   },
  //   pollInterval: DEFAULT_POLLING_INTERVAL,
  // })

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

  //TODO: Implement infinite loading on Cards Scroller
  const [
    getOnDemandPostsData,
    { data: onDemandPostsData, loading: loadingOnDemandPostsData },
  ] = useLazyQuery(QUERY_POSTS, {
    variables: {
      filters: {
        typeIn: [PostType.OnDemand],
      },
      sort: {
        field: 'publishedAt',
        direction: SortDirection.Desc,
      },
    },
  })

  useEffect(() => {
    setPageTitle(t('header.tabs.live'))
    // getLivestreamsScroler()
    getOnDemandPostsData()
    // eslint-disable-next-line
  }, [])

  // useEffect(() => {
  //   const live = livestreamsData?.livestreams?.filter((live: Livestream) => {
  //     return live.status === LivestreamStatus.Active
  //   })
  //   setLiveItems(live?.length ? live : null)

  //   const upcoming = livestreamsData?.livestreams?.filter(
  //     (live: Livestream) => {
  //       return (
  //         live.status === LivestreamStatus.Scheduled ||
  //         live.status === LivestreamStatus.Preparing
  //       )
  //     }
  //   )
  //   setUpcomingItems(upcoming?.length ? upcoming : null)
  //   // eslint-disable-next-line
  // }, [livestreamsData])

  const isLoading = loadingOnDemandPostsData

  const hasResults = onDemandPostsData?.posts?.length

  const isEmpty = !isLoading && !hasResults

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton my={4} kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Flex gridGap={5} flexDirection={'column'} w={'100vw'}>
          {!!liveItems?.length && (
            <LivestreamScroller
              items={liveItems}
              sectionTitle={t('page.live.live')}
            ></LivestreamScroller>
          )}
          {!!upcomingItems?.length && (
            <LivestreamScroller
              items={upcomingItems}
              sectionTitle={t('page.live.upcoming')}
            ></LivestreamScroller>
          )}
          {!!onDemandPostsData?.posts?.length && (
            <VideosScroller
              items={onDemandPostsData.posts}
              sectionTitle={t('page.live.past')}
            ></VideosScroller>
          )}
          {isEmpty && <EmptyState />}
        </Flex>
      )}
    </Container>
  )
}
export { Livestreams }
