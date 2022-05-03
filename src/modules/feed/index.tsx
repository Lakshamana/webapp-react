import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { useQuery } from "@apollo/client"
import { intervalToDuration } from 'date-fns'
import { Center, Box } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS } from "services/graphql"
import { ThumborInstanceTypes, ThumborParams, useThumbor } from "services/hooks/useThumbor"
import { useChannelsStore, useCommonStore, useFeedStore } from 'services/stores'
import { Container, FeedPostCard, Select, EmptyState, Skeleton } from "components"
import { translateFormatDistance } from "utils/helperFunctions"
import { DEFAULT_PAGESIZE_FEEDS } from 'config/constants'
import { SortDirection } from "generated/graphql"
import { isEntityBlocked } from "utils/accessVerifications"

const FeedPage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const lastPositionCard = useFeedStore(state => state.lastPositionCard)
  const setLastPositionCard = useFeedStore(state => state.setLastPositionCard)
  const [filterBy, SetFilterBy] = useState<SortDirection>(SortDirection.Desc)

  const getSortByFilter = () => filterBy === 'ASC' ? "publishedAt.asc" : "publishedAt.desc"

  const { data: dataPosts, loading: loadingPosts, fetchMore, refetch } = useQuery(QUERY_POSTS, {
    context: { headers: { channel: activeChannel?.id } },
    variables: {
      filter: {
        page: 1,
        pageSize: DEFAULT_PAGESIZE_FEEDS,
        sortBy: getSortByFilter()
      }
    }
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { refetch() }, [filterBy])

  const filterList = [
    { value: 'DESC', label: t('page.feed.search_options.recent') },
    { value: 'ASC', label: t('page.feed.search_options.old') }
  ]

  const getImageUrl = (post) => {
    const defineType = post.type === 'IMAGE' ? 'media' : 'thumbnail'
    const imageOptions: ThumborParams = {
      size: {
        height: post?.[defineType]?.height || undefined,
        width: post?.[defineType]?.width || undefined
      },
    }

    if (isEntityBlocked(post)) {
      imageOptions.blur = 20
    }

    const imageUrl = generateImage(
      ThumborInstanceTypes.IMAGE ?? '',
      post?.[defineType]?.imgPath || '',
      imageOptions
    )
    return imageUrl
  }

  //TODO: refact this soon
  const convertDataPost = (post) => {
    const duration = post?.duration && intervalToDuration({ start: 0, end: post?.duration * 1000 })
    const mediaLength = !duration
      ? ''
      : `${duration.hours ? `${duration.hours}:` : ''}${duration.minutes}:${duration.seconds}`

    const coverImage = getImageUrl(post)
    const date = () => {
      if (post?.publishedAt) {
        return translateFormatDistance(post?.publishedAt)
      }
    }
    const type = post?.type &&
      post.type.charAt(0).toUpperCase() + post.type.slice(1)

    //TODO: why some items has default value?
    return {
      id: post.id,
      slug: post.slug,
      postTitle: post.title,
      postDescription: post.description,
      date: date(),
      type,
      hasActivity: true,
      displayViews: true,
      countMessages: post.countComments,
      countReactions: post.countReactions,
      myReactions: post.myReactions,
      reactions: post.reactions,
      coverImage,
      mediaLength,
      views: post.counts?.countViews,
      audioTitle: post.audioTitle,
      audioArtist: post.audioArtist,
      timeRemaining: '',
      itemQuestion: '',
      percentage: '',
      voted: !!post.myVote,
      isExclusive: isEntityBlocked(post),
      // TODO: geoLock waiting for API
      isGeolocked: false,
    }
  }

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

  const getNextRecords = () => {
    if (dataPosts?.posts) {
      const updatePage = dataPosts?.posts.page + 1
      fetchMore({
        variables: {
          filter: {
            page: updatePage,
            pageSize: DEFAULT_PAGESIZE_FEEDS,
            sortBy: getSortByFilter()
          }
        }
      })
    }
  }

  const handleScroll = () => () => {
    const positionY = window.pageYOffset;
    setLastPositionCard(positionY);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageTitle(t('header.tabs.feed')), [])

  useEffect(() => {
    if (window) {
      window.scrollTo(0, lastPositionCard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadingItems = (number) => (
    <Center width="100%" height="100%" flexDirection="column">
      <Box mt={2}>
        <Skeleton kind="posts" numberOfCards={number} />
      </Box>
    </Center>
  )

  return (
    <Center width="100%" height="100%" flexDirection="column">
      {
        loadingPosts && !!dataPosts?.posts.rows.length &&
        loadingItems(4)
      }
      {
        !loadingPosts &&
        !!dataPosts?.posts.rows.length &&
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
      }
      {
        !loadingPosts &&
        !!!dataPosts?.posts.rows.length &&
        <EmptyState />
      }
      <InfiniteScroll
        dataLength={dataPosts?.posts?.rows.length || 0}
        hasMore={dataPosts?.posts.hasNextPage}
        loader={loadingItems(2)}
        next={getNextRecords}
      >
        {dataPosts?.posts?.rows
          .filter(({ inFeed }) => inFeed)
          .map((post, key) => {
            const preparePost = convertDataPost(post)
            return (
              <FeedPostCard
                key={key}
                updateState={handleScroll}
                {...preparePost}
              />
            )
          })}
      </InfiniteScroll>
    </Center >
  )
}

export { FeedPage }
