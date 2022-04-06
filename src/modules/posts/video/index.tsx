import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { QUERY_POST, QUERY_POSTS } from 'services/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useTranslation } from 'react-i18next'
import {
  VideoPlayer,
  ReactionBar,
  VideoPlaylist,
  Participants,
  Container,
  Comments,
} from 'components'
import { buildUrlFromPath } from 'utils'
import { Title, Subtitle, VideoDetails, Video, VideoComments } from './style'
import { colors, breakpoints } from 'styles'
import { Post } from 'generated/graphql'

const VideoPostView = () => {
  const { colorMode } = useThemeStore()
  const { id } = useParams<{ channel: string; id: string }>()
  const { t } = useTranslation()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [postData, setPostData] = useState<Post>()
  const [relatedVideosData, setRelatedVideosData] = useState<Post[]>()

  const { data, loading } = useQuery(QUERY_POST, {
    variables: { id },
    onCompleted: (result) => setPostData(result?.post)
  })

  const [
    getRelatedPosts,
    { data: relatedPosts, loading: loadingRelatedPosts },
  ] = useLazyQuery(QUERY_POSTS, {
    onCompleted: (result) => setRelatedVideosData(result?.posts)
  })

  useEffect(() => {
    if (postData?.categories?.length) {
      getRelatedPosts({
        variables: {
          filter: {
            category: postData.categories[0]?.id,
          },
        },
      })
    }
    //eslint-disable-next-line
  }, [postData])

  const mediaUrl = () => {
    const { media } = postData || {}
    const hlsPath = media?.__typename === 'MediaVideo' ? media.hlsPath : null
    if (!media || !hlsPath) {
      return ''
    }
    return buildUrlFromPath(media?.baseUrl!, hlsPath, 'https')
  }

  const postReactions =
    postData?.reactions?.map((item) => ({
      name: `${item?.name}`,
      count: item?.count || 0,
    })) || []

  const engagedUsers =
    postData?.engagedUsers.map((item) => ({
      name: item.username,
      avatar: '',
    })) || []

  //TODO: Waiting for API to get My Reactions
  // const postMyReactions =
  //   postData?.myReactions?.map((item) => ({
  //     name: `${item?.name}`,
  //     count: item?.count || 0,
  //   })) || []

  return (
    <Container
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
    >
      <Video>
        <VideoPlayer src={mediaUrl()} />
      </Video>
      <VideoDetails>
        <Title>{postData?.title}</Title>
        <Subtitle>
          <span
            dangerouslySetInnerHTML={{ __html: `${postData?.description}` }}
          />
        </Subtitle>
        <Flex w="100%" mt={4} flexDirection={isDesktop ? 'row' : 'column'}>
          <ReactionBar
            postId={postData?.id}
            reactions={postReactions}
            totalReactions={postData?.countReactions}
            myReactions={[]}
          />
          <Spacer mt={isDesktop ? 0 : 4} />
          <Participants participants={engagedUsers} />
        </Flex>
      </VideoDetails>
      <Container
        width={'100vw'}
        mt={'30px'}
        backgroundColor={colors.cardBg[colorMode]}
        justifyContent="center"
      >
        <VideoComments>
          {postData && (
            <Box w={{ sm: '100%', md: '55%', lg: '60%', xl: '70%' }}>
              <Comments {...postData} />
            </Box>
          )}
          <Spacer mx={3} />
          {relatedVideosData?.length && (
            <Box w={{ sm: '100%', md: '45%', lg: '40%', xl: '30%' }}>
              <VideoPlaylist
                title={t('page.post.related_videos')}
                videos={[...relatedVideosData]}
              />
            </Box>
          )}
        </VideoComments>
      </Container>
    </Container>
  )
}

export { VideoPostView }
