import { useState } from 'react'
import { Link } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import { CardsScroller } from 'components'
import { Text } from 'components'
import { CategoriesScrollerProps } from 'types/categories'
import { Header, ContentScroller } from './style'
import { colors, sizes } from 'styles'
import { useThemeStore, useChannelsStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard } from 'components/atoms'
import { useEffect } from 'react'
import { Category } from 'generated/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { convertCamelCaseToDash } from 'utils/helperFunctions'

const CategoriesScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
}: CategoriesScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState<CategoryPostCardProps[]>()

  // TODO: Change this ANY type when generate graphql fragments work
  const getImageUrl = (category: any) => {
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      category?.customization?.thumbnail.imgPath,
      {
        size: {
          height: 400,
        },
      }
    )
    return image
  }

  const getPostUrl = (id: string) => {
    return `/c/${convertCamelCaseToDash(activeChannel?.name)}/category/${id}`
  }

  useEffect(() => {
    const categoriesItems = items?.map((item: Category) => {
      const thumbnail = getImageUrl(item)
      const url = getPostUrl(`${item.id}`)
      return {
        id: item.id || '',
        title: item.name || '',
        description: item.description || '',
        url: url,
        thumbnail: thumbnail,
        isPinned: item.pinnedAt,
      }
    })
    setScrollerItems(categoriesItems)
    // eslint-disable-next-line
  }, [items])

  const renderHeader = () => {
    return (
      <Header>
        <Text
          color={colors.generalText[colorMode]}
          fontSize={{ sm: '1.3rem', md: '1.55rem' }}
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
