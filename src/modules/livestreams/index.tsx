import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { QUERY_LIVESTREAMS_SCROLLER, QUERY_POSTS } from 'services/graphql'
import {
  LivestreamFilter,
  LivestreamStatus,
  LivestreamTypeSortEnum,
  SortDirection,
  PostType,
  Livestream,
} from 'generated/graphql'
import { Container, Skeleton } from 'components/atoms'
import { LivestreamScroller, VideosScroller } from 'components/molecules'
import { sizes } from 'styles'
import { DEFAULT_POLLING_INTERVAL } from 'config/constants'

const Livestreams = () => {
  const { t } = useTranslation()
  const [liveItems, setLiveItems] = useState<Livestream[]>()
  const [upcomingItems, setUpcomingItems] = useState<Livestream[]>()

  const [
    getLivestreamsScroler,
    { data: livestreamsData, loading: loadingLivestreams },
  ] = useLazyQuery(QUERY_LIVESTREAMS_SCROLLER, {
    variables: {
      filter: {
        statusIn: [
          LivestreamStatus.Active,
          LivestreamStatus.Preparing,
          LivestreamStatus.Scheduled,
        ],
      } as LivestreamFilter,
      orderBy: [
        {
          name: LivestreamTypeSortEnum.StartedAt,
          direction: SortDirection.Asc,
        },
      ],
    },
    pollInterval: DEFAULT_POLLING_INTERVAL,
  })

  //TODO: Add billboard (waiting for API)

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
    getLivestreamsScroler()
    getOnDemandPostsData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const live = livestreamsData?.livestreams?.filter((live: Livestream) => {
      return live.status === LivestreamStatus.Active
    })
    setLiveItems(live?.length ? live : null)

    const upcoming = livestreamsData?.livestreams?.filter(
      (live: Livestream) => {
        return (
          live.status === LivestreamStatus.Scheduled ||
          live.status === LivestreamStatus.Preparing
        )
      }
    )
    setUpcomingItems(upcoming?.length ? upcoming : null)
    // eslint-disable-next-line
  }, [livestreamsData])

  const isLoading = loadingLivestreams || loadingOnDemandPostsData

  const hasResults =
    livestreamsData?.livestreams?.length || onDemandPostsData?.posts?.length

  const isEmpty = !isLoading && !hasResults

  return (
    <Container defaultPadding marginTop={15}>
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
          {/* TODO: built a empty state component */}
          {isEmpty && (
            <Flex w={'100vw'} justifyContent="center" color="white">
              Page empty! We need to create an empty state component.
            </Flex>
          )}
        </Flex>
      )}
    </Container>
  )
}
export { Livestreams }
