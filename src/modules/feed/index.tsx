import { useEffect, useRef, useState } from "react"
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from "@apollo/client"
import { intervalToDuration } from 'date-fns'
import { Center, Box } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS } from "services/graphql"
import { ThumborInstanceTypes, useThumbor } from "services/hooks/useThumbor"
import { useChannelsStore, useCommonStore, useFeedStore } from 'services/stores'
import { Container, FeedPostCard, Select, EmptyState, Skeleton } from "components"
import { translateFormatDistance } from "utils/helperFunctions"
import { DEFAULT_PAGESIZE_FEEDS } from 'config/constants'
import { SortDirection } from "generated/graphql"

const FeedPage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const {stateFeed, setStateFeed} = useFeedStore()
  const [filterBy, SetFilterBy] = useState<SortDirection>(stateFeed.filterBy)
  const [listOfPosts, setListOfPosts] = useState(stateFeed.listOfPosts)
  const [hasMore, setHasMore] = useState(stateFeed.hasMore)
  const [position, setPosition] = useState(stateFeed.position)
  const page = useRef(stateFeed.page)
  const [loadPosts, { data: dataPosts, loading: loadingPosts }] = useLazyQuery(QUERY_POSTS, {
    fetchPolicy: "network-only"
  })

  const handleScroll = () => {
    const positionY = window.pageYOffset;
    setPosition(positionY);
  };

  const filterList = [
    { value: 'DESC', label: t('page.feed.search_options.recent') },
    { value: 'ASC', label: t('page.feed.search_options.old') }
  ]
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollTo(0, position)
    setPageTitle(t('header.tabs.feed'))
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateState = () => 
    setStateFeed({
      position,
      filterBy,
      listOfPosts,
      hasMore,
      page: page.current,
    })
  

  useEffect(() => {
    if (activeChannel && listOfPosts.length === 0) {
      setListOfPosts([])
      getPosts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel, filterBy])

  useEffect(() => {
    if (!dataPosts) return
    setHasMore(dataPosts.posts.hasNextPage)
    convertDataPost(dataPosts.posts.rows)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPosts])

  const getPosts = () => {
    loadPosts({
      context: { headers: { channel: activeChannel?.id } },
      variables: {
        filter: {
          page: page.current,
          pageSize: DEFAULT_PAGESIZE_FEEDS,
          sortBy: getSortByFilter()
        }
      }
    })
  }

  const loadMore = () => {
    if (hasMore) {
      page.current = page.current + 1
      getPosts()
    }
  }

  const getSortByFilter = () => filterBy === 'ASC' ? "publishedAt.asc" : "publishedAt.desc"

  const getUrl = (obj) =>
    generateImage(
      ThumborInstanceTypes.IMAGE,
      obj?.imgPath,
      {
        size: {
          height: obj.height || undefined,
          width: obj.width || undefined
        },
      }
    )

  //TODO: refact this soon
  const convertDataPost = (rawPosts) => {
    const preparedPost = rawPosts
      .filter(({ inFeed }) => inFeed)
      .map(post => {
        const duration = post?.duration && intervalToDuration({ start: 0, end: post?.duration * 1000 })

        const mediaLength = !duration
          ? ''
          : `${duration.hours ? `${duration.hours}:` : ''}${duration.minutes}:${duration.seconds}`

        let coverImage
        if (post?.type) {
          coverImage = post.type === 'IMAGE'
            ? getUrl(post.media)
            : getUrl(post.thumbnail)
        }

        const date = () => {
          if (post.publishedAt) {
            return translateFormatDistance(post.publishedAt)
          }
        }

        const type = post.type &&
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
          isExclusive: false,
          isGeolocked: false,
        }
      })
    setListOfPosts(listOfPosts.concat(preparedPost))
  }

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

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
        loadingPosts &&
        <>
          {
            listOfPosts.length === 0
              ? loadingItems(4)
              : <EmptyState />
          }
        </>
      }
      {
        !loadingPosts && listOfPosts.length > 0 &&
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
      <InfiniteScroll
        dataLength={listOfPosts.length}
        next={loadMore}
        hasMore={hasMore}
        loader={loadingItems(2)}
      >
        {listOfPosts.map((post, key) =>
          <FeedPostCard key={key} {...post} updateState={updateState}/>
        )}
      </InfiniteScroll>
    </Center >
  )
}

export { FeedPage }
