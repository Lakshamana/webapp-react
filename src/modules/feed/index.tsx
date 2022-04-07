import { useEffect, useState } from "react"
import { useTranslation } from 'react-i18next'
import { useLazyQuery } from "@apollo/client"
import { formatDistance, intervalToDuration } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Center, Box } from "@chakra-ui/react"
import InfiniteScroll from 'react-infinite-scroll-component'
import { QUERY_POSTS } from "services/graphql"
import { ThumborInstanceTypes, useThumbor } from "services/hooks/useThumbor"
import { useChannelsStore, useCommonStore } from 'services/stores'
import { Container, FeedPostCard, Select, EmptyState, Skeleton } from "components"
import { APP_LOCALE } from 'config/constants'
import { getData } from 'services/storage'

const FeedPage = () => {
  const LIMIT_RESULTS = 5
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { setPageTitle } = useCommonStore()
  const [filterBy, SetFilterBy] = useState()
  const [listOfPosts, setListOfPosts] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const [loadPosts, { data: dataPosts, loading: loadingPosts }] = useLazyQuery(QUERY_POSTS, {
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
    setHasMore(dataPosts.posts.hasNextPage)
    convertDataPost(dataPosts.posts.rows)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataPosts])

  const getPosts = (page: number = 1) => {
    loadPosts({
      context: { headers: { channel: activeChannel?.id } },
      variables: {
        filter: {
          page,
          pageSize: LIMIT_RESULTS,
          sortBy: getSortByFilter()
        }
      }
    })
  }

  const loadMorePosts = () => {
    if (hasMore) getPosts(dataPosts?.posts.page + 1)
  }

  const getSortByFilter = () => filterBy !== 'old' ? "publishedAt.asc" : "publishedAt.desc"

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
            const params = { addSuffix: true }
            const defineLanguage = getData(APP_LOCALE)
            if (defineLanguage === 'pt-BR') {
              params['locale'] = ptBR
            }
            return formatDistance(new Date(post.publishedAt), new Date(), params)
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
    <Center width="100%" height={'100%'} flexDirection={'column'}>
      <Box mt={2}>
        <Skeleton kind={'posts'} numberOfCards={number} />
      </Box>
    </Center>
  )

  return (
    <Center width="100%" height={'100%'} flexDirection={'column'}>
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
      }
      <InfiniteScroll
        dataLength={listOfPosts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={loadingItems(2)}
      >
        {listOfPosts.map((post, key) =>
          <FeedPostCard key={key} {...post} />
        )}
      </InfiniteScroll>
    </Center >
  )
}

export { FeedPage }
