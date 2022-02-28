import { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { VideoPostCard, Text } from 'components'
import {
  VideoPostProps,
  VideoPostCardProps,
  VideosGridProps,
} from 'types/posts'
import { colors, breakpoints } from 'styles'

const PostsGrid = ({ items, sectionTitle }: VideosGridProps) => {
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [gridItems, setGridItems] = useState<VideoPostCardProps[]>()
  const { colorMode } = useThemeStore()

  const getImageUrl = (post: VideoPostProps) => {
    return generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || '',
      {
        size: {
          height: 400,
        },
      }
    )
  }

  const getPostUrl = (id: string) => {
    return `post/${id}`
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: VideoPostProps) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.id}`)
        return {
          id: `${item.id}`,
          title: `${item.title}`,
          url: url,
          thumbnail: thumbnail,
          mediaLength: item.media?.duration || undefined,
          countViews: item.counts?.countViews || undefined,
          isExclusive:
            item.__typename === ('RedactedVideoPost' || 'RedactedOnDemandPost'),
          isGeolocked: false,
        }
      })
      setGridItems(mappedArr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <Flex alignItems={'left'} flexDirection={'column'} w={'100vw'}>
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
          <VideoPostCard {...item}></VideoPostCard>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { PostsGrid }
