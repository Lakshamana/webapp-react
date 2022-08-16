import { useLazyQuery } from '@apollo/client'
import { Box, Center } from '@chakra-ui/react'
import {
  Container,
  EmptyState,
  FeedPostCard,
  Select,
  Skeleton,
  Text
} from 'components'
import { PaginatedPostsOutput, Post, SortDirection } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS, QUERY_PUBLIC_POSTS } from 'services/graphql'
import {
  useAuthStore,
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
  const [filterBy, setFilterBy] = useState<SortDirection>(SortDirection.Desc)
  const [isPositioned, setIsPositioned] = useState<boolean>(false)

  const [posts, setPosts] = useState<PaginatedPostsOutput>()
  const { isAnonymousAccess } = useAuthStore()

  const getSortByFilter = () =>
    filterBy === 'ASC' ? 'publishedAt.asc' : 'publishedAt.desc'

  const [getFeedPosts, { loading: loadingPosts }] = useLazyQuery(
    isAnonymousAccess ? QUERY_PUBLIC_POSTS : QUERY_POSTS,
    {
      onCompleted: (result) => {
        const posts = isAnonymousAccess ? result.publicPosts : result.posts
        //TODO: Include new INFEED filter to correctly show posts in feed

        // const filteredRows = posts.rows.filter(({ inFeed }) => inFeed)
        // if (filteredRows.length < 1) {
        //   getFeedPosts({ ...postsFilter(posts.page + 1, getSortByFilter()) })
        //   return
        // }

        setPosts((previous) => ({
          ...posts,
          rows: [...(previous?.rows || []), ...posts.rows],
        }))
      },
    }
  )

  const filterList = [
    { value: 'DESC', label: t('page.feed.search_options.recent') },
    { value: 'ASC', label: t('page.feed.search_options.old') },
  ]

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target
    setPosts(undefined)
    setFilterBy(value)
  }

  const handleScroll = () => () => {
    const positionY = window.pageYOffset
    setLastPositionCard(positionY)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageTitle(t('header.tabs.feed')), [])

  useEffect(() => {
    if (!!posts?.rows.length && !isPositioned) {
      setIsPositioned(true)
      window.scrollTo(0, lastPositionCard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts])

  useEffect(() => {
    getFeedPosts({ ...postsFilter(1, getSortByFilter()) })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getFeedPosts({ ...postsFilter(1, getSortByFilter()) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBy])

  const loadMoreFeedPosts = () => {
    if (posts?.hasNextPage)
      getFeedPosts({ ...postsFilter(posts.page + 1, getSortByFilter()) })
  }

  const loadingItems = (number) => (
    <Center width="100%" height="100%" flexDirection="column">
      <Box mt={2}>
        <Skeleton kind="posts" numberOfCards={number} />
      </Box>
    </Center>
  )

  const hasResults = posts?.rows?.length

  const isEmpty = !loadingPosts && !hasResults

  if (loadingPosts && !posts?.rows.length)
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
      {posts?.rows.length && (
        <InfiniteScroll
          dataLength={posts?.rows.length}
          next={loadMoreFeedPosts}
          hasMore={posts.hasNextPage}
          loader={
            <Center width="100%" height="100%" flexDirection="column">
              {loadingItems(1)}
            </Center>
          }
          endMessage={
            <Container mt={3} justifyContent={'center'}>
              <Text color={colors.generalText[colorMode]}>
                {t('page.feed.no_more')}
              </Text>
            </Container>
          }
        >
          {posts?.rows?.map((post: Post) => (
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
