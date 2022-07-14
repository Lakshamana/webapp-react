import { useMediaQuery } from '@chakra-ui/media-query'
import { Flex, SimpleGrid } from '@chakra-ui/react'
import { LivestreamPostCard, Text } from 'components'
import { compareAsc, parseISO } from 'date-fns'
import { LiveEvent, Status } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore, useThemeStore } from 'services/stores'
import { breakpoints, colors, sizes } from 'styles'
import { LivestreamGridProps, LivestreamPostCardProps } from 'types/livestreams'
import { isEntityBlocked } from 'utils/accessVerifications'
import { Wrapper } from './style'

const LiveEventsGrid = ({ items, sectionTitle }: LivestreamGridProps) => {
  const { generateImage } = useThumbor()
  const { colorMode } = useThemeStore()
  const { activeChannel } = useChannelsStore()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const [gridItems, setGridItems] = useState<LivestreamPostCardProps[]>()

  const getImageUrl = (live: LiveEvent) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(live)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      live.thumbnail?.imgPath || '',
      imageOptions
    )
    return image
  }

  const getLivestreamUrl = (slug: string) =>
    `/c/${activeChannel?.slug}/live/${slug}`

  const isLive = (live: LiveEvent) => live.status === Status.Live

  useEffect(() => {
    const arrForSort = [...items!]
    arrForSort.sort((a, b) => {
      const liveA = isLive(a)
      const liveB = isLive(b)
      return !liveA && liveB
        ? 1
        : liveA && !liveB
        ? -1
        : compareAsc(parseISO(a.scheduledStartAt), parseISO(b.scheduledStartAt))
    })
    const mappedArr = arrForSort?.map((item: LiveEvent) => {
      const thumbnail = getImageUrl(item)
      const url = getLivestreamUrl(item.slug || '')
      return {
        id: item.id,
        title: item.title,
        description: item.description || '',
        url: url,
        status: item.status,
        thumbnail: thumbnail,
        isExclusive: isEntityBlocked(item),
        //TODO: Waiting for API
        isGeolocked: false,
      }
    })
    setGridItems(mappedArr)
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
            <LivestreamPostCard {...item} />
          </Wrapper>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { LiveEventsGrid }
