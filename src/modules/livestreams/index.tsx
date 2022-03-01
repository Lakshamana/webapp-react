import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { useLazyQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import {
  LivestreamFilter,
  LivestreamStatus,
  LivestreamTypeSortEnum,
  SortDirection,
  PostType,
  PostFilter,
  PostTypeSortEnum,
  Livestream,
} from 'generated/graphql'
import { DEFAULT_POLLING_INTERVAL } from 'config/constants'
import {
  QUERY_LIVESTREAMS_SCROLLER,
  QUERY_POSTS_SCROLLER,
} from 'services/graphql'
import { Container } from 'components'
import { LivestreamScroller, VideosScroller } from 'components/molecules'

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
    fetchPolicy: 'network-only'
  })
  // TO-DO: Add skeleton loading
  // TO-DO: Add billboard (waiting for API)

  // TO-DO: Implement infinite loading on Cards Scroller
  // limit: MAX_CARDS_SCROLLER_RESULTS,
  const [
    getOnDemandPostsData,
    { data: onDemandPostsData, loading: loadingOnDemandPostsData },
  ] = useLazyQuery(QUERY_POSTS_SCROLLER, {
    variables: {
      filter: {
        featuredAtExists: true,
        typeIn: [PostType.OnDemand],
      } as PostFilter,
      // TO-DO: Implement infinite loading on Cards Scroller
      // limit: MAX_CARDS_SCROLLER_RESULTS,
      orderBy: [
        {
          name: PostTypeSortEnum.PublishedAt,
          direction: SortDirection.Desc,
        },
      ],
    },
    fetchPolicy: 'network-only'
  })

  useEffect(() => {
    getLivestreamsScroler()
    getOnDemandPostsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const live = livestreamsData?.livestreams?.filter((live: Livestream) => {
      return live.status === LivestreamStatus.Active
    })
    setLiveItems(live && live.length ? live : null)

    const upcoming = livestreamsData?.livestreams?.filter(
      (live: Livestream) => {
        return (
          live.status === LivestreamStatus.Scheduled ||
          live.status === LivestreamStatus.Preparing
        )
      }
    )
    setUpcomingItems(upcoming && upcoming.length ? upcoming : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [livestreamsData])

  return (
    <Container defaultPadding marginTop={15}>
      <Flex gridGap={5} flexDirection={'column'} w={'100vw'}>
        {!!liveItems?.length && !loadingLivestreams && (
          <LivestreamScroller
            items={liveItems}
            sectionTitle={t('page.live.live')}
          ></LivestreamScroller>
        )}
        {!!upcomingItems?.length && !loadingLivestreams && (
          <LivestreamScroller
            items={upcomingItems}
            sectionTitle={t('page.live.upcoming')}
          ></LivestreamScroller>
        )}
        {!!onDemandPostsData?.posts?.length && !loadingOnDemandPostsData && (
          <VideosScroller
            items={onDemandPostsData.posts}
            sectionTitle={t('page.live.past')}
          ></VideosScroller>
        )}
      </Flex>
    </Container>
  )
}
export { Livestreams }
