import { useEffect, useState } from 'react'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useThemeStore } from 'services/stores/theme'
import { CategoriesGridProps, CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard, Text } from 'components'
import { colors, breakpoints, sizes } from 'styles'

const CategoriesGrid = ({ items, sectionTitle }: CategoriesGridProps) => {
  const { generateImage } = useThumbor()
  const [gridItems, setGridItems] = useState<CategoryPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { colorMode } = useThemeStore()

  const getImageUrl = (path: string) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: {
        height: 400,
      },
    })
    return image
  }

  const getPostUrl = (id: string) => {
    return `category/${id}`
  }
  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: any) => {
        const thumbnail = getImageUrl(item.customization?.thumbnail?.imgPath)
        const url = getPostUrl(`${item.id}`)
        return {
          id: item.id,
          title: item.name,
          url,
          thumbnail,
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
          <CategoryPostCard {...item}></CategoryPostCard>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { CategoriesGrid }
