import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { AudioPostCard, ImagePostCard, Text, TextPostCard, VideoPostCard } from 'components'
import { Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore, useThemeStore } from 'services/stores'
import { breakpoints, colors, sizes } from 'styles'
import { VideoPostCardProps, VideosGridProps } from 'types/posts'
import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'
import { Wrapper } from './style'

const PostsGrid = ({ items, sectionTitle }: VideosGridProps) => {
  const { generateImage } = useThumbor()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [gridItems, setGridItems] = useState<VideoPostCardProps[]>()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        width: 400,
        height: 0,
      },
    }

    if (isEntityBlocked(post)) imageOptions.blur = 20

    const thumbnailPath = post.type === 'PHOTO' ? 
      post.media?.['imgPath'] :
      post.thumbnail?.imgPath

    const secondImgUrl =
      post.media?.__typename === 'MediaVideo'
        ? `${post.media.baseUrl}/${post.media.thumbnailPath}`
        : ''

    if (thumbnailPath) {
      return generateImage(
        ThumborInstanceTypes.IMAGE,
        thumbnailPath,
        imageOptions
      )
    }
    return secondImgUrl
  }

  const getPostUrl = (slug: string) => {
    return `/c/${activeChannel?.slug}/post/${slug}`
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Post) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.slug}`)
        return {
          id: item.id || '',
          title: item.title || '',
          description: item.description,
          url,
          thumbnail,
          mediaLength:
            item.media?.__typename === 'MediaVideo'
              ? item.media?.duration
              : undefined,
          countViews: undefined,
          isExclusive: isEntityExclusive(item),
          isGeolocked: isEntityGeolocked(item),
          isPinned:
            item.__typename === 'Post' ? item.pinnedStatus?.pinned : false,
          type: item.type
        }
      })
      setGridItems(mappedArr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <Flex
      paddingX={{ base: sizes.paddingSm, md: sizes.paddingMd }}
      alignItems={'left'}
      flexDirection={'column'}
      w={'100vw'}
    >
      <Text
        marginBottom={'10px'}
        color={colors.generalText[colorMode]}
        fontSize={isDesktop ? '1.55rem' : '1.3rem'}
        fontWeight={'bolder'}
      >
        {sectionTitle}
      </Text>
      <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
        {gridItems?.map((item) => (
          <Wrapper key={item.id}>
            {
              (item.type === 'AUDIO') &&
              <AudioPostCard hasPinButton={false} {...item} />
            }
            {
              (item.type === 'PHOTO') &&
              <ImagePostCard hasPinButton={false} {...item} />
            }
            {
              (item.type === 'TEXT') &&
              <TextPostCard hasPinButton={false} {...item} />
            }
            {
              (item.type === 'ON_DEMAND' || item.type === 'VIDEO') &&
              <VideoPostCard hasPinButton={false} {...item} />
            }
          </Wrapper>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { PostsGrid }

