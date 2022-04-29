import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react'

import { getData, saveData } from 'services/storage'
import { useThemeStore, useChannelsStore, useVideoPlayerStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'

import { Text, ToggleButton, PlaylistPostCard } from 'components'
import { VideoPostCardProps } from 'types/posts'
import { Post } from 'generated/graphql'
import { VideoPlaylistProps } from './types'
import { theme } from 'styles/theme'
import { colors } from 'styles'
import { isEntityBlocked } from 'utils/accessVerifications'
import { VIDEO_AUTOPLAY } from 'config/constants'

const VideoPlaylist = ({
  title,
  videos,
  showAutoplay,
  activeVideo
}: VideoPlaylistProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const setNextVideo = useVideoPlayerStore(state => state.setNextVideo)
  const setAutoplay = useVideoPlayerStore(state => state.setAutoplay)
  const setIsLastVideo = useVideoPlayerStore(state => state.setIsLastVideo)
  const autoplay = useVideoPlayerStore(state => state.hasAutoplay)
  const [playlist, setPlaylist] = useState<VideoPostCardProps[]>()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(post)) {
      imageOptions.blur = 20
    }

    const thumbnailPath =
      post.media?.__typename === 'MediaVideo' ? post.media?.thumbnailPath : ''

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || thumbnailPath || '',
      imageOptions,
      post.thumbnail?.imgPath ? null : post.media?.baseUrl
    )

    return image
  }

  const getPostUrl = (slug: string) => `/c/${activeChannel?.slug}/post/${slug}`

  useEffect(() => {
    const mapped = videos?.map((item) => {
      return {
        id: `${item.id}`,
        title: item?.title || '',
        url: getPostUrl(item.slug || ''),
        description: item?.description || '',
        thumbnail: getImageUrl(item),
        mediaLength:
          item.media?.__typename === 'MediaVideo'
            ? item.media?.duration
            : undefined,
        //TODO: Verify if countViews exists on API
        countViews: undefined,
        isExclusive: isEntityBlocked(item),
        isGeolocked: false,
      }
    })
    setPlaylist(mapped)

    //eslint-disable-next-line
  }, [videos])

  useEffect(() => {
    const playlistLength = playlist?.length
    if (playlistLength) {
      let defineNextVideo
      playlist.forEach((videoItem, index) => {
        if (videoItem.id === activeVideo) {
          defineNextVideo = playlist[index + 1]?.url
        }
      })
      if (defineNextVideo) {
        setNextVideo(defineNextVideo)
        setIsLastVideo(false)
      }
    }
    //eslint-disable-next-line
  }, [playlist])
  

  useEffect(() => {
    if (!autoplay) {
      const autoplayPreferences = getData(VIDEO_AUTOPLAY)
      setAutoplay(autoplayPreferences)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleAutoplay = () => {
    const UPDATE_STATUS = !autoplay
    saveData(VIDEO_AUTOPLAY, UPDATE_STATUS)
    setAutoplay(UPDATE_STATUS)
  }

  const renderPlaylist = () =>
    playlist?.map((item) => <PlaylistPostCard key={item.id} isActive={activeVideo === item.id} {...item} />)

  return (
    <Flex flexDirection="column" mb={5}>
      <Text
        fontWeight="bolder"
        fontSize="1.4rem"
        mb={2}
        color={colors.generalText[colorMode]}
      >
        {title}
      </Text>
      {showAutoplay && (
        <Flex alignItems="center" mb={2}>
          <ToggleButton
            checked={autoplay}
            onChange={toggleAutoplay}
          />
          <Text
            ml={theme.pxToRem(12)}
            color={theme.colors.generalText[colorMode]}
          >
            {t('page.post.autoplay')}
          </Text>
        </Flex>
      )}
      {!!playlist?.length && renderPlaylist()}
    </Flex>
  )
}

export { VideoPlaylist }
