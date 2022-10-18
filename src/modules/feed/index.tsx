import { useLazyQuery } from '@apollo/client'
import { Box, Center, Spinner } from '@chakra-ui/react'
import {
  Container,
  EmptyState,
  FeedPostCard,
  Select,
  Skeleton,
  Text
} from 'components'
import { Kinds, Post, SortDirection } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS, QUERY_PUBLIC_POSTS } from 'services/graphql'
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useFeedStore,
  useThemeStore
} from 'services/stores'
import { colors } from 'styles'
import { postsFilter } from './utils'

const FeedPage = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const lastPositionCard = useFeedStore((state) => state.lastPositionCard)
  const setLastPositionCard = useFeedStore((state) => state.setLastPositionCard)
  const { feedPosts, setFeedPosts, resetFeed } = useFeedStore()

  const [filterBy, setFilterBy] = useState<SortDirection>()
  const [isPositioned, setIsPositioned] = useState<boolean>(false)

  const { isAnonymousAccess } = useAuthStore()
  const { activeChannel } = useChannelsStore()

  const isAnonymousAllowed =
    isAnonymousAccess && activeChannel?.kind === Kinds.Public
  const getSortByFilter = () =>
    filterBy === 'ASC' ? 'publishedAt.asc' : 'publishedAt.desc'

  const [getFeedPosts, { loading: loadingPosts }] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_POSTS : QUERY_POSTS,
    {
      onCompleted: (result) => {
        const posts = isAnonymousAllowed ? result.publicPosts : result.posts
        const previousRows = feedPosts?.rows
        setFeedPosts({
          ...posts,
          rows: [...(previousRows || []), ...posts.rows],
        })
      },
    }
  )

  const filterList = [
    { value: 'DESC', label: t('page.feed.search_options.recent') },
    { value: 'ASC', label: t('page.feed.search_options.old') },
  ]

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target
    resetFeed()
    setFilterBy(value)
  }

  const handleScroll = () => () => {
    const positionY = window.pageYOffset
    setLastPositionCard(positionY)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageTitle(t('header.tabs.feed')), [])

  useEffect(() => {
    if (!!feedPosts?.rows.length && !isPositioned) {
      setIsPositioned(true)
      window.scrollTo(0, lastPositionCard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedPosts])

  useEffect(() => {
    if (!feedPosts?.rows.length)
      getFeedPosts({ ...postsFilter(1, getSortByFilter()) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (filterBy) getFeedPosts({ ...postsFilter(1, getSortByFilter()) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  const loadMoreFeedPosts = () => {
    if (feedPosts?.hasNextPage)
      getFeedPosts({ ...postsFilter(feedPosts.page + 1, getSortByFilter()) })
  }

  const loadingItems = (number) => (
    <Center width="100%" height="100%" flexDirection="column">
      <Box mt={2}>
        <Skeleton kind="posts" numberOfCards={number} />
      </Box>
    </Center>
  )

  const hasResults = feedPosts?.rows?.length

  const isEmpty = !loadingPosts && !hasResults

  if (loadingPosts && !feedPosts?.rows.length)
    return (
      <Center width="100%" height="100%" flexDirection="column">
        {loadingItems(4)}
      </Center>
    )

  return (
    <Center width="100%" height="100%" flexDirection="column">
      <Container
        flexDirection="column"
        width="100%"
        margin="1em auto 0 auto"
        maxWidth="746px"
        alignItems="flex-end"
      >
        <Select
          options={filterList}
          value={filterBy}
          onChange={handleFilterChange}
        />
      </Container>
      {feedPosts?.rows.length && (
        <InfiniteScroll
          dataLength={feedPosts?.rows.length}
          next={loadMoreFeedPosts}
          hasMore={feedPosts.hasNextPage}
          scrollableTarget='scroll-master'
          loader={
            <Box pt={5} textAlign={'center'}>
              <Spinner color={colors.brand.primary[colorMode]} />
            </Box>
          }
          endMessage={
            <Container mt={2} justifyContent={'center'}>
              <Text color={colors.generalText[colorMode]}>
                {t('page.feed.no_more')}
              </Text>
            </Container>
          }
        >
          {feedPosts?.rows?.map((post: Post) => (
            <FeedPostCard
              key={post.id}
              updateState={handleScroll}
              item={post}
            />
          ))}
        </InfiniteScroll>
      )}
      {isEmpty && (
        <Center width="100%" height="100%" flexDirection="column">
          <EmptyState />
        </Center>
      )}
    </Center>
  )
}

export { FeedPage }

