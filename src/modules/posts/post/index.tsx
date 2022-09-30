import { useLazyQuery, useMutation } from '@apollo/client'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Center, Flex, Spacer } from '@chakra-ui/react'
import {
  Comments,
  Container,
  Participants,
  ReactionBar,
  Skeleton,
  VideoPlaylist
} from 'components'
import { TypeParticipant } from 'components/molecules/participants/types'

import { VerifyContentKind } from 'components/organisms'
import {
  PaginatedPostsOutput,
  PlaylistOutput,
  Post,
  PostType
} from 'generated/graphql'
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
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useCustomizationStore,
  useThemeStore
} from 'services/stores'
import { breakpoints, colors } from 'styles'
import { sendPostReactionReport } from 'utils/analytics'
import { RANDOM_ID } from 'utils/helperFunctions'
import { PhotoPost } from '../components/photo'
import { VideoPost } from '../components/video'
import { PostComments, PostDetails, Subtitle, Title } from './style'
import { playlistPostsFilter, relatedPostsFilter } from './utils'

const PostPage = () => {
  const { t } = useTranslation()
  const { isAnonymousAccess } = useAuthStore()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
  const { activeChannel } = useChannelsStore()
  const { user } = useAuthStore()
  const { slug } = useParams<{ channel: string; slug: string }>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [isVerifyingAccessPermission, setIsVerifyingAccessPermission] =
    useState<boolean>(true)
  const [postData, setPostData] = useState<Post>()
  const [relatedPostsData, setRelatedPostsData] =
    useState<PaginatedPostsOutput>()
  const [playlistData, setPlaylistData] = useState<PlaylistOutput>()
  const [engagedUsers, setEngagedUsers] = useState<TypeParticipant[]>()
  const [relatedCategories, setRelatedCategories] = useState<string[]>()
  const [activeReaction, setActiveReaction] = useState<string>()

  const [activeMedia, setActiveMedia] = useState('')

  const [addMyReaction] = useMutation(MUTATION_ADD_MY_REACTION, {
    onCompleted: () => {
      sendPostReactionReport(
        {
          channelId: activeChannel?.id,
          contentTitle: postData?.title,
          mediaSessionId: RANDOM_ID(),
          contentId: postData?.id,
          reaction: activeReaction,
          collectionId: postData?.categories?.length
            ? `${postData?.categories[0].id}`
            : '',
          typename: postData?.__typename,
          userId: user?.id,
        },
        'post'
      )
    },
  })
  const [removeMyReaction] = useMutation(MUTATION_REMOVE_MY_REACTION)

  const [getPost, { loading: loadingPost }] = useLazyQuery(QUERY_POST, {
    variables: { slug },
    onCompleted: (result) => {
      if (result?.post) {
        setPostData(result.post)
        if (!result.post.playlists.length) setPlaylistData(undefined)
        if (!result.post.categories.length) setRelatedPostsData(undefined)
        setActiveMedia(result.post.slug)
      }
    },
    fetchPolicy: 'no-cache',
  })

  const [getRelatedPosts, { loading: loadingVideosRelated }] = useLazyQuery(
    QUERY_POSTS_CARDS,
    {
      onCompleted: (result) => {
        setRelatedPostsData((previous) => ({
          ...result.posts,
          rows: [...(previous?.rows || []), ...result.posts.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [getPlaylist, { loading: loadingPlaylist }] = useLazyQuery(
    QUERY_PLAYLIST,
    {
      onCompleted: (result) => {
        setPlaylistData((previous) => ({
          ...result.playlist,
          posts: {
            ...result.playlist.posts,
            rows: [
              ...(previous?.posts?.rows || []),
              ...result.playlist.posts.rows,
            ],
          },
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const loadMoreRelatedPosts = () => {
    if (relatedPostsData?.hasNextPage)
      getRelatedPosts({
        variables: {
          ...relatedPostsFilter(relatedPostsData.page + 1, relatedCategories),
        },
      })
  }

  const loadMorePlaylists = () => {
    if (playlistData?.posts?.hasNextPage && postData?.playlists?.length)
      getPlaylist({
        variables: {
          id: postData?.playlists[0].id,
          ...playlistPostsFilter(playlistData.posts.page + 1),
        },
      })
  }

  useEffect(() => {
    if (!postData) return
    window.scrollTo(0, 0)

    setPageTitle(postData?.title || '')

    setRelatedCategories(postData?.categories?.map((item) => item.id))

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
          ...playlistPostsFilter(1),
        },
      })
    }
    //eslint-disable-next-line
  }, [postData])

  useEffect(() => {
    if (!!relatedCategories?.length && !isAnonymousAccess) {
      getRelatedPosts({
        variables: {
          ...relatedPostsFilter(1, relatedCategories),
        },
      })
    }
    //eslint-disable-next-line
  }, [relatedCategories])

  useEffect(() => {
    if (!isVerifyingAccessPermission) getPost()
    //eslint-disable-next-line
  }, [isVerifyingAccessPermission])

  useEffect(() => {
    if (activeMedia && slug && activeMedia !== slug)
      setIsVerifyingAccessPermission(true)
    //eslint-disable-next-line
  }, [slug])

  const postHasCommentsAllowed =
    activeChannelConfig?.SETTINGS.DISPLAY_COMMENTS && postData?.allowComments

  const renderPostType = () => {
    switch (postData?.type) {
      case PostType.Video:
        return <VideoPost {...postData} />
      case PostType.Photo:
        return <PhotoPost {...postData} />
    }
  }

  if (isVerifyingAccessPermission)
    return (
      <VerifyContentKind
        contentSlug={slug}
        contentType={'post'}
        accessGranted={() => setIsVerifyingAccessPermission(false)}
      />
    )

  if (loadingPost)
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
      mb={isAnonymousAccess ? '-60px' : '-30px'}
    >
      {renderPostType()}
      <PostDetails>
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
              setNewReaction={(reaction) => setActiveReaction(reaction)}
            />
          )}
          <Spacer mt={isDesktop ? 0 : 4} />
          {postHasCommentsAllowed && (
            <Participants participants={engagedUsers || []} />
          )}
        </Flex>
      </PostDetails>
      <Container
        width={'100vw'}
        mt={'30px'}
        pb={'30px'}
        backgroundColor={colors.cardBg[colorMode]}
        justifyContent="center"
      >
        {!isAnonymousAccess && (
          <PostComments>
            {postHasCommentsAllowed && (
              <Box
                w={
                  !!relatedPostsData?.rows?.length ||
                  !!playlistData?.posts?.rows.length
                    ? { sm: '100%', md: '53%', lg: '55%', xl: '70%' }
                    : '100%'
                }
              >
                {postData && <Comments {...postData} />}
              </Box>
            )}
            <Spacer mx={3} />
            <Box w={{ sm: '100%', md: '47%', lg: '45%', xl: '30%' }}>
              <Box>
                {playlistData?.posts && (
                  <VideoPlaylist
                    loading={loadingPlaylist}
                    activeVideo={postData?.id}
                    title={playlistData?.title}
                    videos={playlistData?.posts.rows}
                    hasMoreResults={playlistData?.posts.hasNextPage}
                    showAutoplay
                    loadMore={loadMorePlaylists}
                  />
                )}
              </Box>
              <Box mt={10}>
                {(postData?.type === PostType.Video ||
                  postData?.type === PostType.OnDemand) && (
                  <VideoPlaylist
                    loading={loadingVideosRelated}
                    title={t('page.post.related_videos')}
                    videos={relatedPostsData?.rows}
                    hasMoreResults={relatedPostsData?.hasNextPage}
                    loadMore={loadMoreRelatedPosts}
                  />
                )}
              </Box>
            </Box>
          </PostComments>
        )}
      </Container>
    </Container>
  )
}

export { PostPage }
