import { useEffect, useState } from 'react'
import { useLazyQuery, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Flex, Spacer, Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { QUERY_POST, QUERY_POSTS_SCROLLER } from 'services/graphql'
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
import { AvailableVideoPost } from 'types/posts'
import { Title, Subtitle, VideoDetails, Video, VideoComments } from './style'
import { colors, breakpoints } from 'styles'
import { video } from './mock'
import { VideoPost } from 'generated/graphql'

const VideoPostView = () => {
  const { colorMode } = useThemeStore()
  const { id } = useParams<{ channel: string; id: string }>()
  const { t } = useTranslation()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [postData, setPostData] = useState<AvailableVideoPost>()
  const [relatedVideosData, setRelatedVideosData] = useState<VideoPost[]>()

  const { data, loading } = useQuery(QUERY_POST, {
    variables: {
      id: id,
    },
  })

  const [
    getRelatedPosts,
    { data: relatedPosts, loading: loadingRelatedPosts },
  ] = useLazyQuery(QUERY_POSTS_SCROLLER, {
    onCompleted: (result) => {
      setRelatedVideosData(result?.posts)
    },
  })

  useEffect(() => {
    setPostData(data?.post)
  }, [data])

  useEffect(() => {
    if (postData?.categories?.length) {
      getRelatedPosts({
        variables: {
          filter: {
            categoryId: postData.categories[0]?.id,
          },
          limit: 10,
        },
      })
    }
  }, [postData])

  const mediaUrl = () => {
    const { media } = postData || {}
    if (!media) {
      return ''
    }

    return buildUrlFromPath(media?.baseUrl!, media?.hlsPath!, 'https')
  }

  const postReactions =
    postData?.counts?.reactions?.map((item) => ({
      name: `${item?.name}`,
      count: item?.count || 0,
    })) || []

  const postMyReactions =
    postData?.myReactions?.map((item) => ({
      name: `${item?.name}`,
      count: item?.count || 0,
    })) || []

  return (
    <>
      {loading ? (
        <></>
      ) : (
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
              ></span>
            </Subtitle>
            <Flex w="100%" mt={4} flexDirection={isDesktop ? 'row' : 'column'}>
              <ReactionBar
                reactions={postReactions}
                totalReactions={postData?.counts?.countReactions}
                myReactions={postMyReactions}
              />
              <Spacer mt={isDesktop ? 0 : 4}></Spacer>
              <Participants participants={video.participants} />
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
                  <Comments {...postData}></Comments>
                </Box>
              )}
              <Spacer mx={3}></Spacer>
              {relatedVideosData?.length && (
                <Box w={{ sm: '100%', md: '45%', lg: '40%', xl: '30%' }}>
                  <VideoPlaylist
                    title={t('page.post.related_videos')}
                    videos={[...relatedVideosData]}
                  ></VideoPlaylist>
                </Box>
              )}
            </VideoComments>
          </Container>
        </Container>
      )}
    </>
  )
}

export { VideoPostView }
