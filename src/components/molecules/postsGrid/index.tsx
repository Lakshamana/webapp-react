import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { PhotoPostCard, Text, TextPostCard, VideoPostCard } from 'components'
import { Post, PostType } from 'generated/graphql'
import {
  ThumborInstanceTypes,
  ThumborParams,
  useThumbor
} from 'hooks/useThumbor'
import { useEffect, useState } from 'react'
import { useChannelsStore, useThemeStore } from 'services/stores'
import { breakpoints, colors, sizes } from 'styles'
import { GeneralPostCardProps, PostsGridProps } from 'types/posts'
import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'
import { Wrapper } from './style'

const PostsGrid = ({ items, sectionTitle }: PostsGridProps) => {
  const { generateImage } = useThumbor()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [gridItems, setGridItems] = useState<GeneralPostCardProps[]>()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        width: 0,
        height: 250,
      },
    }

    if (isEntityBlocked(post)) imageOptions.blur = 20

    const thumbnailPath =
      (post.media?.__typename === 'MediaVideo' && post.thumbnail?.imgPath) ||
      (post.media?.__typename === 'MediaPhoto' && post.media.imgPath)

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

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Post) => {
        const thumbnail = getImageUrl(item)
        const url = `/c/${activeChannel?.slug}/post/${item.slug}`
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
          countViews: item.countViewsTotal,
          isExclusive: isEntityExclusive(item),
          isGeolocked: isEntityGeolocked(item),
          isPinned: item.pinnedStatus?.pinned,
          type: item.type,
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
            {(item.type === PostType.Video ||
              item.type === PostType.OnDemand) && <VideoPostCard {...item} />}
            {item.type === PostType.Text && <TextPostCard {...item} />}
            {item.type === PostType.Photo && <PhotoPostCard {...item} />}
          </Wrapper>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { PostsGrid }
