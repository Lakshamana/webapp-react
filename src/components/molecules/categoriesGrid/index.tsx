import { useEffect, useState } from 'react'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { useThemeStore } from 'services/stores/theme'
import { CategoriesGridProps, CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard, Text } from 'components'
import { colors, breakpoints, sizes } from 'styles'
import { useChannelsStore } from 'services/stores'
import { Wrapper } from './style'
import { Category } from 'generated/graphql'
import { isEntityBlocked } from 'utils/accessVerifications'

const CategoriesGrid = ({
  sendUnpinEvent,
  items,
  sectionTitle,
}: CategoriesGridProps) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [gridItems, setGridItems] = useState<CategoryPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { colorMode } = useThemeStore()

  //TODO: Transform this function in a util
  const getImageUrl = (item: Category) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(item)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      item.customization?.thumbnail?.imgPath || '',
      imageOptions
    )

    return image
  }

  const getPostUrl = (slug: string) => {
    return `/c/${activeChannel?.slug}/category/${slug}`
  }

  const callUnpinEvent = (categoryId: string) => {
    if (sendUnpinEvent) sendUnpinEvent(categoryId)
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Category) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.slug}`)
        return {
          id: item.id,
          title: item.name,
          url,
          thumbnail,
          isExclusive: isEntityBlocked(item),
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
            <CategoryPostCard
              categoryUnpinned={(id) => {
                callUnpinEvent(id)
              }}
              {...item}
            />
          </Wrapper>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { CategoriesGrid }
