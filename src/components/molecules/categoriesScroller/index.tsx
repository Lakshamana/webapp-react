import { useState } from 'react'
import { Link } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import { CardsScroller } from 'components'
import { Text } from 'components'
import { CategoriesScrollerProps } from 'types/categories'
import { Header, ContentScroller } from './style'
import { colors, sizes, breakpoints } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard } from 'components/atoms'
import { useEffect } from 'react'
import { Category } from 'generated/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'

const CategoriesScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
}: CategoriesScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const [scrollerItems, setScrollerItems] = useState<CategoryPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
    setScrollerItems(mappedArr?.length ? mappedArr : [])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const renderHeader = () => {
    return (
      <Header>
        <Text
          color={colors.generalText[colorMode]}
          fontSize={isDesktop ? '1.55rem' : '1.3rem'}
          paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd]}
          marginRight={'10px'}
          fontWeight={'bolder'}
        >
          {sectionTitle}
        </Text>
        {hasMoreLink && (
          <Link
            color={colors.brand.primary[colorMode]}
            fontSize={'1.27rem'}
            to={sectionUrl}
          >
            {t('common.more')}
          </Link>
        )}
      </Header>
    )
  }

  const renderScroller = () => (
    <CardsScroller>
      {scrollerItems?.map((category: CategoryPostCardProps) => {
        return (
          <SwiperSlide key={`slide-${category.id}`}>
            <CategoryPostCard {...category} />
          </SwiperSlide>
        )
      })}
    </CardsScroller>
  )


  return (
    <ContentScroller>
      {scrollerItems?.length && (
        <>
          {sectionTitle && renderHeader()}
          {renderScroller()}
        </>
      )}
    </ContentScroller>
  )
}

export { CategoriesScroller }
