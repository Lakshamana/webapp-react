import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useTranslation } from 'react-i18next'
import { CardsScroller, Text } from 'components'
import { useMediaQuery } from '@chakra-ui/media-query'
import { CategoriesScrollerProps } from 'types/categories'
import { Header, ContentScroller } from './style'
import { colors, sizes, breakpoints } from 'styles'
import { useThemeStore, useChannelsStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard, Link } from 'components/atoms'
import { Category } from 'generated/graphql'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { isEntityBlocked } from 'utils/accessVerifications'

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
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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

  useEffect(() => {
    const categoriesItems = items?.map((item: Category) => {
      const thumbnail = getImageUrl(item)
      const url = getPostUrl(`${item.slug}`)
      return {
        id: item.id || '',
        title: item.name || '',
        description: item.description || '',
        url: url,
        thumbnail: thumbnail,
        isExclusive: isEntityBlocked(item),
        isPinned: item.pinnedStatus?.pinned,
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
          fontSize={isDesktop ? '1.55rem' : '1.3rem'}
          paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd]}
          marginRight={'10px'}
          fontWeight={'bolder'}
        >
          {sectionTitle}
        </Text>
        {hasMoreLink && (
          <Link
            color={colors.brand.action_link[colorMode]}
            fontSize={'1.27rem'}
            to={sectionUrl || ''}
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
