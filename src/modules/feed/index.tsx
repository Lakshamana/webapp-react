import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { useLazyQuery, useMutation } from '@apollo/client'
import { intervalToDuration } from 'date-fns'
import { Center, Box } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS, MUTATION_ADD_MY_REACTION, MUTATION_REMOVE_MY_REACTION } from 'services/graphql'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from "services/hooks/useThumbor"
import { useChannelsStore, useCommonStore, useFeedStore } from 'services/stores'
import { Container, FeedPostCard, Select, EmptyState, Skeleton } from "components"
import { translateFormatDistance } from "utils/helperFunctions"
import { DEFAULT_PAGESIZE_FEEDS } from 'config/constants'
import { Post, SortDirection, Status } from "generated/graphql"
import { isEntityBlocked } from "utils/accessVerifications"

const FeedPage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const lastPositionCard = useFeedStore(state => state.lastPositionCard)
  const setLastPositionCard = useFeedStore(state => state.setLastPositionCard)
  const [filterBy, SetFilterBy] = useState<SortDirection>(SortDirection.Desc)
  const [listOfPosts, setListOfPosts] = useState<Post[]>([])
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [isPositioned, setIsPositioned] = useState<boolean>(false)
  const [updateReactions, setUpdateReactions] = useState({ post: '', reaction: '' })

  const getSortByFilter = () => filterBy === 'ASC' ? "publishedAt.asc" : "publishedAt.desc"
  const [loadPosts, { data: dataPosts, loading: loadingPosts }] = useLazyQuery(QUERY_POSTS)

  const [addMyReaction] = useMutation(MUTATION_ADD_MY_REACTION, {
    onCompleted: ({ addReaction }) => {
      const updateRows = listOfPosts?.map((postRow: Post) => {
        if (postRow.id !== updateReactions.post) return postRow
        const updateMyReactions = [
          ...postRow.myReactions,
          { name: updateReactions.reaction, count: 1 }
        ]
        return {
          ...postRow,
          reactions: addReaction,
          myReactions: updateMyReactions,
          countReactions: postRow.countReactions + 1
        }
      })
      setListOfPosts(updateRows)
      setHasMore(dataPosts.posts.hasNextPage)
    }
  })

  const [removeMyReaction] = useMutation(MUTATION_REMOVE_MY_REACTION, {
    onCompleted: ({ removeReaction }) => {
      const updateRows = listOfPosts?.map((postRow: Post) => {
        if (postRow.id !== updateReactions.post) return postRow
        const updateMyReactions = postRow.myReactions.filter(reactName => reactName.name !== updateReactions.reaction)
        return {
          ...postRow,
          reactions: removeReaction,
          myReactions: updateMyReactions,
          countReactions: postRow.countReactions - 1
        }
      })
      setListOfPosts(updateRows)
      setHasMore(dataPosts.posts.hasNextPage)
    }
  })

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
    setListOfPosts([])
    SetFilterBy(value)
  }

  const handleScroll = () => () => {
    const positionY = window.pageYOffset;
    setLastPositionCard(positionY);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setPageTitle(t('header.tabs.feed')), [])

  useEffect(() => {
    if (!!listOfPosts.length && !isPositioned) {
      setIsPositioned(true)
      window.scrollTo(0, lastPositionCard)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listOfPosts])

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
    setListOfPosts(listOfPosts.concat(dataPosts?.posts.rows))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPosts])


  const getPosts = (page: number = 1) => {
    loadPosts({
      context: { headers: { channel: activeChannel?.id } },
      variables: {
        filter: {
          page,
          pageSize: DEFAULT_PAGESIZE_FEEDS,
          status: Status.Published,
          sortBy: getSortByFilter()
        }
      }
    })
  }

  const loadMore = () => {
    if (hasMore) getPosts(dataPosts?.posts.page + 1)
  }

  const handleAddMyReaction = ({ variables }) => {
    setHasMore(false)
    setUpdateReactions({ ...variables.input })
    return addMyReaction({ variables })
  }
  const handleRemoveMyReaction = ({ variables }) => {
    setHasMore(false)
    setUpdateReactions({ ...variables.input })
    return removeMyReaction({ variables })
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
        loadingPosts && !!listOfPosts?.length &&
        loadingItems(4)
      }
      {
        !loadingPosts &&
        !!listOfPosts?.length &&
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
        !!!listOfPosts?.length &&
        <EmptyState />
      }
      <InfiniteScroll
        dataLength={listOfPosts.length || 0}
        next={loadMore}
        hasMore={hasMore}
        loader={loadingItems(2)}
      >
        {listOfPosts?.filter(({ inFeed }) => inFeed)
          .map((post: Post, key) => {
            const preparePost = convertDataPost(post)
            return (
              <FeedPostCard
                key={key}
                updateState={handleScroll}
                addMyReaction={handleAddMyReaction}
                removeMyReaction={handleRemoveMyReaction}
                {...preparePost}
              />
            )
          })}
      </InfiniteScroll>
    </Center >
  )
}

export { FeedPage }
