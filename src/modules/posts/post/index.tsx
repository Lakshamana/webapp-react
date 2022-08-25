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
  useCommonStore,
  useCustomizationStore,
  useThemeStore
} from 'services/stores'
import { breakpoints, colors } from 'styles'
import { VerifyContentKind } from '../components'
import { PhotoPost } from '../components/photo'
import { VideoPost } from '../components/video'
import { PostComments, PostDetails, Subtitle, Title } from './style'
import { relatedPostsFilter } from './utils'

const PostPage = () => {
  const { t } = useTranslation()
  const { isAnonymousAccess } = useAuthStore()
  const { colorMode } = useThemeStore()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()
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

  const [activeMedia, setActiveMedia] = useState('')

  const [addMyReaction] = useMutation(MUTATION_ADD_MY_REACTION)
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
        // setRelatedPostsData(result.posts)
        setRelatedPostsData((previous) => ({
          ...result.posts,
          rows: [...(previous?.rows || []), ...result.posts.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
      notifyOnNetworkStatusChange: false,
    }
  )

  //TODO: Create skeleton loading for playlist cards
  const [getPlaylist, { loading: loadingPlaylist }] = useLazyQuery(
    QUERY_PLAYLIST,
    {
      onCompleted: (result) => {
        if (result?.playlist) setPlaylistData(result.playlist)
      },
      fetchPolicy: 'no-cache',
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
                  !!playlistData?.posts?.length
                    ? { sm: '100%', md: '53%', lg: '55%', xl: '70%' }
                    : '100%'
                }
              >
                {postData && <Comments {...postData} />}
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
                  loadMore={() => {}}
                />
              )}
              {(postData?.type === PostType.Video ||
                postData?.type === PostType.OnDemand) && (
                <VideoPlaylist
                  loading={loadingVideosRelated}
                  title={t('page.post.related_videos')}
                  videos={relatedPostsData?.rows}
                  showAutoplay={false}
                  hasMoreResults={relatedPostsData?.hasNextPage}
                  loadMore={loadMoreRelatedPosts}
                />
              )}
            </Box>
          </PostComments>
        )}
      </Container>
    </Container>
  )
}

export { PostPage }
