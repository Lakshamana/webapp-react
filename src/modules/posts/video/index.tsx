import { useLazyQuery, useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import {
  Comments,
  Container,
  Participants,
  ReactionBar,
  Skeleton,
  VideoPlayer,
  VideoPlaylist
} from 'components'
import { TypeParticipant } from 'components/molecules/participants/types'
import { VIDEO_MUTED, VIDEO_VOLUME } from 'config/constants'
import { useAuth } from 'contexts/auth'
import { PlaylistOutput, Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import {
  MUTATION_ADD_MY_REACTION,
  MUTATION_REMOVE_MY_REACTION,
  QUERY_PLAYLIST,
  QUERY_POST,
  QUERY_POSTS_CARDS
} from 'services/graphql'
import { getData } from 'services/storage'
import {
  useCommonStore,
  useCustomizationStore,
  useThemeStore
} from 'services/stores'
import { breakpoints, colors } from 'styles'
import { buildUrlFromPath } from 'utils/helperFunctions'
import { VerifyContentKind } from '../components'
import { AlertNextVideo } from './AlertNextVideo'
import { Subtitle, Title, Video, VideoComments, VideoDetails } from './style'

const VideoPostPage = () => {
  const { t } = useTranslation()
  const { isAnonymousAccess } = useAuth()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { slug } = useParams<{ channel: string; slug: string }>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [isVerifyingAccessPermission, setIsVerifyingAccessPermission] =
    useState<boolean>(true)
  const [postData, setPostData] = useState<Post>()
  const [relatedVideosData, setRelatedVideosData] = useState<Post[]>()
  const [playlistData, setPlaylistData] = useState<PlaylistOutput>()
  const [engagedUsers, setEngagedUsers] = useState<TypeParticipant[]>()
  const [mediaUrl, setMediaUrl] = useState('')
  const [activeMedia, setActiveMedia] = useState('')

  const definePlayerIsMuted = getData(VIDEO_MUTED)
  const definePlayerVolume = getData(VIDEO_VOLUME)

  const [addMyReaction] = useMutation(MUTATION_ADD_MY_REACTION)
  const [removeMyReaction] = useMutation(MUTATION_REMOVE_MY_REACTION)

  const [getPost, { loading: loadingPost }] = useLazyQuery(QUERY_POST, {
    variables: { slug },
    onCompleted: (result) => {
      if (result?.post) {
        setPostData(result.post)
        if (!result.post.playlists.length) setPlaylistData(undefined)
        if (!result.post.categories.length) setRelatedVideosData(undefined)
        setActiveMedia(result.post.slug)
      }
    },
    fetchPolicy: 'no-cache',
  })

  const [getRelatedPosts, { loading: loadingVideosRelated }] = useLazyQuery(
    QUERY_POSTS_CARDS,
    {
      onCompleted: (result) => {
        const filteredRelatedVideos = result?.posts?.rows?.filter(
          (item) => item.slug !== slug
        )
        setRelatedVideosData(filteredRelatedVideos)
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  //TODO: Create skeleton loading for palylist cards
  const [getPlaylist, { loading: loadingPlaylist }] = useLazyQuery(
    QUERY_PLAYLIST,
    {
      onCompleted: (result) => {
        if (result?.playlist) setPlaylistData(result.playlist)
      },
      fetchPolicy: 'no-cache',
    }
  )

  useEffect(() => {
    if (!postData) return
    window.scrollTo(0, 0)

    setPageTitle(postData?.title || '')
    setMediaUrl(videoUrl())

    const filteredCategories = postData?.categories?.map((item) => item.id)

    if (!!filteredCategories?.length && !isAnonymousAccess) {
      getRelatedPosts({
        variables: {
          filter: {
            categories: filteredCategories,
          },
        },
      })
    }

    const engagedUsers =
      postData?.engagedUsers?.map((item) => ({
        name: item.username || '',
        avatar: '',
      })) || []

    setEngagedUsers(engagedUsers)

    if (!!postData?.playlists?.length && !isAnonymousAccess) {
      getPlaylist({
        variables: {
          id: postData?.playlists[0].id,
        },
      })
    }
    //eslint-disable-next-line
  }, [postData])

  useEffect(() => {
    if (!isVerifyingAccessPermission) getPost()
    //eslint-disable-next-line
  }, [isVerifyingAccessPermission])

  useEffect(() => {
    if (activeMedia && slug && activeMedia !== slug)
      setIsVerifyingAccessPermission(true)
    //eslint-disable-next-line
  }, [slug])

  const videoUrl = () => {
    const { media } = postData || {}
    const hlsPath = media?.__typename === 'MediaVideo' ? media.hlsPath : null
    if (!media || !hlsPath) {
      return ''
    }
    return buildUrlFromPath(media?.baseUrl!, hlsPath, 'https')
  }

  const postHasCommentsAllowed =
    activeChannelConfig?.SETTINGS.DISPLAY_COMMENTS && postData?.allowComments

  const getCategoryId = (post: any) => {
    if (post && post.categories) {
      return post.categories
        .map((el) => {
          return el.id
        })
        .join(',')
    }
    return ''
  }

  if (isVerifyingAccessPermission)
    return (
      <VerifyContentKind
        contentSlug={slug}
        contentType={'post'}
        accessGranted={() => setIsVerifyingAccessPermission(false)}
      />
    )

  if (loadingPost || loadingPlaylist || loadingVideosRelated)
    return (
      <Center mt={4} width="100%" height={'100%'} flexDirection={'column'}>
        <Box mt={2}>
          <Skeleton kind={'posts'} numberOfCards={1} />
        </Box>
      </Center>
    )

  return (
    <Container
      flexDirection={'column'}
      justifyContent="center"
      alignItems="center"
      mb={'-30px'}
    >
      <Video>
        <VideoPlayer
          isLiveStream={false}
          src={mediaUrl}
          title={postData?.title}
          subtitle={postData?.description}
          isMuted={definePlayerIsMuted}
          setVolumeValue={definePlayerVolume}
          videoId={postData?.id}
          categoryId={getCategoryId(postData)}
          post_type={postData?.type}
          video_duration={postData?.media?.['duration']}
        />
        <AlertNextVideo />
      </Video>
      <VideoDetails>
        <Title>{postData?.title}</Title>
        <Subtitle>
          <span
            dangerouslySetInnerHTML={{ __html: `${postData?.description}` }}
          />
        </Subtitle>
        <Flex w="100%" mt={4} flexDirection={isDesktop ? 'row' : 'column'}>
          {activeChannelConfig?.SETTINGS.DISPLAY_REACTIONS && (
            <ReactionBar
              postId={postData?.id}
              reactions={postData ? [...postData?.reactions] : []}
              totalReactions={postData?.countReactions}
              myReactions={postData?.myReactions ?? []}
              removeMyReaction={removeMyReaction}
              addMyReaction={addMyReaction}
            />
          )}
          <Spacer mt={isDesktop ? 0 : 4} />
          {postHasCommentsAllowed && (
            <Participants participants={engagedUsers || []} />
          )}
        </Flex>
      </VideoDetails>
      <Container
        width={'100vw'}
        mt={'30px'}
        pb={'30px'}
        backgroundColor={colors.cardBg[colorMode]}
        justifyContent="center"
      >
        <VideoComments>
          {postHasCommentsAllowed && (
            <Box
              w={
                !!relatedVideosData?.length || !!playlistData?.posts?.length
                  ? { sm: '100%', md: '53%', lg: '55%', xl: '70%' }
                  : '100%'
              }
            >
              {postData && !isAnonymousAccess && <Comments {...postData} />}
            </Box>
          )}
          <Spacer mx={3} />
          <Box w={{ sm: '100%', md: '47%', lg: '45%', xl: '30%' }}>
            {playlistData && (
              <VideoPlaylist
                activeVideo={postData?.id}
                title={playlistData?.title}
                videos={playlistData?.posts}
                showAutoplay={true}
              />
            )}
            {!!relatedVideosData?.length && (
              <VideoPlaylist
                title={t('page.post.related_videos')}
                videos={[...relatedVideosData]}
                showAutoplay={false}
              />
            )}
          </Box>
        </VideoComments>
      </Container>
    </Container>
  )
}

export { VideoPostPage }
