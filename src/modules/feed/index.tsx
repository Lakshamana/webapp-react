import { Container, FeedPostCard, Select } from "components"
import { useEffect, useState } from "react"
import { formatDistance, intervalToDuration } from 'date-fns'
import { QUERY_FEED_POSTS } from "services/graphql"
import { useLazyQuery } from "@apollo/client"
import { ThumborInstanceTypes, useThumbor } from "services/hooks/useThumbor"
import { useChannelsStore } from 'services/stores'
import { colors } from 'styles'
import { Center, Spinner } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'

const FeedPage = () => {
  const limit = 10

  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()

  const filterList = [
		{ value: 'recent', label: 'Most Recent' },
		{ value: 'old', label: 'Most Old' },
		{ value: 'popular', label: 'Popular' },
	]

  const [filterBy, SetFilterBy] = useState();
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true)

  const getOrderBy = () => {
    if (filterBy === 'popular')
      return [{ name: "popular", direction: "DESC" }]

    if (filterBy === 'old')
      return [{ name: "publishedAt", direction: "ASC" }]

    return [{ name: "publishedAt", direction: "DESC" }]
  }

  useEffect(() => {
    setPosts([])
    loadPosts({
      variables: {
        limit,
        skip: 0,
        orderBy: getOrderBy(),
      }
    })
  }, [filterBy])

	const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

  const [loadPosts, { data: dataPosts }] = useLazyQuery(QUERY_FEED_POSTS)

  const loadMorePosts = () => {
    loadPosts({
      context: { headers: { channel: activeChannel?.id || '5c9277169a57aca84e2cdced' } },
      variables: {
        limit,
        skip: posts.length,
        orderBy: getOrderBy(),
      }
    })
  }

  const getUrl = (obj) =>
    generateImage(
      ThumborInstanceTypes.IMAGE,
      obj.imgPath,
      {
        size: {
          height: obj.height || undefined,
          width: obj.width || undefined
        },
      }
    )

  useEffect(() => {
    if (!dataPosts) return

    if (dataPosts?.posts?.length === 0) {
      setHasMore(false)
      return
    }

    const reduced = dataPosts.posts.map(post => {
      const duration = post?.duration 
        ? intervalToDuration({ start: 0, end: post?.duration * 1000 }) 
        : undefined

      const mediaLength = !duration 
        ? '' 
        : `${duration.hours ? `${duration.hours}:` : ''}${duration.minutes}:${duration.seconds}`

      const coverImage = post?.type && post.type === 'image' 
        ? getUrl(post.media) 
        : post.thumbnail 
          ? getUrl(post.thumbnail) 
          : ''

      const date = post.publishedAt 
        ? formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true }) 
        : ''

      const type = post.type 
        ? post.type.charAt(0).toUpperCase() + post.type.slice(1) 
        : ''

      return {
        postTitle: post.title,
        postDescription: post.description,
        date,
        type,

        hasActivity: true,
        displayViews: true,

        countMessages: post.counts?.countComments,

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

    setPosts(posts.concat(reduced))
  }, [dataPosts])

   useEffect(() => {
    // if (!activeChannel?.id) return
    if (!activeChannel?.id) console.log('--- not channel', 'activeChannel?.id', activeChannel?.id)

    setPosts([])
    loadPosts({
      context: { headers: { channel: activeChannel?.id || '5c9277169a57aca84e2cdced' } },
      variables: { limit, skip: 0, orderBy: getOrderBy() }
    })
  }, [activeChannel])

	return (
    <Container flexDirection={"column"} width={"100%"}>
      <Container 
        flexDirection={"column"}
        width={"100%"}
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

      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={(
          <Center width="100%">
            <Spinner size={'xl'} color={colors.brand.primary['dark']} />
          </Center>
        )}
        endMessage={<></>}
      >
        {!!posts?.length && posts.map((post) => (
          <FeedPostCard {...post} />
        ))}
      </InfiniteScroll>
    </Container>
	)
}

export { FeedPage }
