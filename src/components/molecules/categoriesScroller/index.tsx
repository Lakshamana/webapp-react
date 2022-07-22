import { CardsScroller } from 'components'
import { CategoryPostCard } from 'components/atoms'
import { Category } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import { CategoriesScrollerProps, CategoryPostCardProps } from 'types/categories'
import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'
import { ContentScroller } from './style'

const CategoriesScroller = ({
  items,
  sectionTitle,
  sectionUrl,
}: CategoriesScrollerProps) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState<CategoryPostCardProps[]>()

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
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
        isPinned: item.pinnedStatus?.pinned,
      }
    })
    setScrollerItems(categoriesItems)
    // eslint-disable-next-line
  }, [items])

  const renderScroller = () => (
    <CardsScroller title={sectionTitle} moreUrl={sectionUrl}>
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
      {scrollerItems?.length && renderScroller()}
    </ContentScroller>
  )
}

export { CategoriesScroller }
