import { useEffect, useState } from 'react'
import { SimpleGrid, Flex } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useThemeStore } from 'services/stores/theme'
import { Category } from 'generated/graphql'
import { CategoriesGridProps, CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard, Text } from 'components'
import { colors, breakpoints } from 'styles'

const CategoriesGrid = ({ items, sectionTitle }: CategoriesGridProps) => {
  const { generateImage } = useThumbor()
  const [gridItems, setGridItems] = useState<CategoryPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { colorMode } = useThemeStore()

  const getImageUrl = (category: Category) => {
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      category.image?.imgPath || '',
      {
        size: {
          height: 400,
        },
      }
    )
    return image
  }

  const getPostUrl = (id: string) => {
    return `category/${id}`
  }
  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Category) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.id}`)
        return {
          id: `${item.id}`,
          title: `${item.name}`,
          url: url,
          thumbnail: thumbnail,
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
          <CategoryPostCard {...item}></CategoryPostCard>
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export { CategoriesGrid }
