import { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { useThemeStore, useChannelsStore } from 'services/stores'
import { useTranslation } from 'react-i18next'
import { Text, ToggleButton, PlaylistPostCard } from 'components'
import { RedactReason } from 'generated/graphql'
import { VideoPlaylistProps } from './types'
import { theme } from 'styles/theme'
import { colors } from 'styles'
import { useEffect } from 'react'
import { VideoPostCardProps, VideoPostProps, RedactedVideo } from 'types/posts'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { convertCamelCaseToDash } from 'utils'

const VideoPlaylist = ({ title, videos, autoplay }: VideoPlaylistProps) => {
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { t } = useTranslation()

  const [checked, setChecked] = useState(true)
  const [playlist, setPlaylist] = useState<VideoPostCardProps[]>()

  const getImageUrl = (post: VideoPostProps) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isExclusive(post) || isGeolocked(post)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || '',
      imageOptions
    )

    return image
  }

  const getPostUrl = (id: string) => {
    return `/c/${convertCamelCaseToDash(activeChannel?.name)}/post/${id}`
  }

  const isRedacted = (post: VideoPostProps) => {
    return (
      post.__typename === 'RedactedOnDemandPost' ||
      post.__typename === 'RedactedVideoPost'
    )
  }

  const isExclusive = (post: VideoPostProps) => {
    return (
      (isRedacted(post) &&
        (post as RedactedVideo).reason === RedactReason.Exclusive) ||
      false
    )
  }

  const isGeolocked = (post: VideoPostProps) => {
    return (
      (isRedacted(post) &&
        (post as RedactedVideo).reason === RedactReason.Geofence) ||
      false
    )
  }

  useEffect(() => {
    const mapped = videos?.map((item) => {
      return {
        id: `${item.id}`,
        title: item?.title || '',
        url: getPostUrl(item.id || ''),
        description: item?.description || '',
        thumbnail: getImageUrl(item),
        mediaLength: item.media?.duration || 0,
        countviews: item.counts?.countViewsTotal || 0,
        isExclusive: isExclusive(item),
        isGeolocked: isGeolocked(item),
      }
    })
    setPlaylist(mapped)
  }, [videos])

  const renderPlaylist = () => {
    return playlist?.map((item) => <PlaylistPostCard key={item.id} {...item} />)
  }

  return (
    <Flex flexDirection="column" mb={5}>
      {title && (
        <Text
          fontWeight="bolder"
          fontSize="1.4rem"
          mb={2}
          color={colors.generalText[colorMode]}
        >
          {title}
        </Text>
      )}
      <Flex alignItems="center" mb={2}>
        <ToggleButton
          checked={!!checked}
          onChange={() => setChecked(!checked)}
        />
        <Text
          ml={theme.pxToRem(12)}
          color={theme.colors.generalText[colorMode]}
        >
          {t('page.post.autoplay')}
        </Text>
      </Flex>
      {playlist?.length && renderPlaylist()}
    </Flex>
  )
}

export { VideoPlaylist }
