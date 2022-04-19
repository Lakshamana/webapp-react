import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react'

import { useThemeStore, useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'

import { Text, ToggleButton, PlaylistPostCard } from 'components'
import { VideoPostCardProps } from 'types/posts'
import { Post } from 'generated/graphql'
import { VideoPlaylistProps } from './types'
import { theme } from 'styles/theme'
import { colors } from 'styles'
import { isEntityBlocked } from 'utils/accessVerifications'

const VideoPlaylist = ({ title, videos, autoplay }: VideoPlaylistProps) => {
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const { t } = useTranslation()
  const [checked, setChecked] = useState(true)
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

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || '',
      imageOptions
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

  const renderPlaylist = () =>
    playlist?.map((item) => <PlaylistPostCard key={item.id} {...item} />)

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
      {autoplay && <Flex alignItems="center" mb={2}>
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
      </Flex>}
      {!!playlist?.length && renderPlaylist()}
    </Flex>
  )
}

export { VideoPlaylist }
