import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from "@apollo/client"
import { formatDistance, intervalToDuration } from 'date-fns'
import { Center } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS } from "services/graphql"
import { ThumborInstanceTypes, useThumbor } from "services/hooks/useThumbor"
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore, useCommonStore } from 'services/stores'
import { Container, FeedPostCard, Select, Text, LoadingItem } from "components"
import { colors } from 'styles'

const FeedPage = () => {
  const LIMIT_RESULTS = 4
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const [filterBy, SetFilterBy] = useState()
  const [listOfPosts, setListOfPosts] = useState([])
  const [noPosts, setNoPosts] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [loadPosts, { data: dataPosts }] = useLazyQuery(QUERY_POSTS, {
    fetchPolicy: "network-only"
  })

  const filterList = [
    { value: 'recent', label: t('page.feed.search_options.recent') },
    { value: 'old', label: t('page.feed.search_options.old') }
  ]

  useEffect(() => setPageTitle(t('header.tabs.feed')), [])

  useEffect(() => {
    if (activeChannel) {
      setListOfPosts([])
      getPosts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel, filterBy])

  useEffect(() => {
    if (!dataPosts) return
    if (dataPosts?.posts?.length === 0) {
      listOfPosts.length > 0
        ? setHasMore(false)
        : setNoPosts(true)
      return
    }
    convertDataPost(dataPosts.posts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPosts])

  const getPosts = (skip: number = 0) => {
    loadPosts({
      context: { headers: { channel: activeChannel?.id } },
      variables: {
        filter: {
          skip,
          limit: LIMIT_RESULTS,
          sort: getSortByFilter()
        }
      }
    })
  }

  const loadMorePosts = () => getPosts(listOfPosts.length)

  const getSortByFilter = () => ({
    field: "publishedAt",
    direction: filterBy !== 'old' ? "ASC" : "DESC"
  })

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

  //TODO: refact this soon
  const convertDataPost = (rawPosts) => {
    const preparedPost = rawPosts.map(post => {
      const duration = post?.duration && intervalToDuration({ start: 0, end: post?.duration * 1000 })

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
    setListOfPosts(listOfPosts.concat(preparedPost))
  }

  const handleFilterChange = (evt: any) => {
    const { value } = evt?.target;
    SetFilterBy(value)
  }

  if (noPosts) {
    return (
      <Center width="100%" height={100}>
        <Text
          kind="headline"
          fontSize={18}
          fontWeight="Bold"
          color={colors.generalText[colorMode]}
        >
          {t('page.feed.empty_list')}
        </Text>
      </Center>
    )
  }

  if (listOfPosts.length === 0) {
    return <LoadingItem />
  }

  return (
    <Center width="100%" height={'100%'} flexDirection={'column'}>
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
        dataLength={listOfPosts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<LoadingItem />}
        endMessage={<></>}
      >
        {listOfPosts.map((post, key) => (
          <FeedPostCard key={key} {...post} />
        ))}
      </InfiniteScroll>
    </Center>
  )
}

export { FeedPage }
