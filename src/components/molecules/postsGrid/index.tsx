import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { useThemeStore, useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { VideoPostCard, Text } from 'components'
import { Post } from 'generated/graphql'
import { VideoPostCardProps, VideosGridProps } from 'types/posts'
import { colors, breakpoints, sizes } from 'styles'
import { Wrapper } from './style'
import { isEntityBlocked } from 'utils/accessVerifications'

const PostsGrid = ({
  sendUnpinEvent,
  items,
  sectionTitle,
}: VideosGridProps) => {
  const { generateImage } = useThumbor()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [gridItems, setGridItems] = useState<VideoPostCardProps[]>()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(post)) {
      imageOptions.blur = 20
    }

    const thumbnailPath = post.media?.__typename === 'MediaVideo' ? post.media?.thumbnailPath : ''

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || thumbnailPath || '',
      imageOptions,
      post.thumbnail?.imgPath ? null : post.media?.baseUrl
    )

    return image
  }

  const getPostUrl = (slug: string) => {
    return `/c/${activeChannel?.slug}/post/${slug}`
  }

  const callUnpinEvent = (postId: string) => {
    if (sendUnpinEvent) sendUnpinEvent(postId)
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Post) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.slug}`)
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          url,
          thumbnail,
          mediaLength:
            item.media?.__typename === 'MediaVideo'
              ? item.media?.duration
              : undefined,
          countViews: undefined,
          isExclusive: isEntityBlocked(item),
          //TODO: Implement isGeolocked
          isGeolocked: false,
          isPinned: item.pinnedStatus?.pinned,
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
            <VideoPostCard
              postUnpinned={(id) => {
                callUnpinEvent(id)
              }}
              {...item}
            ></VideoPostCard>
          </Wrapper>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { PostsGrid }
