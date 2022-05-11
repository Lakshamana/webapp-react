import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { CardsScroller } from 'components'
import { CategoriesScrollerProps } from 'types/categories'
import { ContentScroller } from './style'
import { useChannelsStore } from 'services/stores'
import { CategoryPostCardProps } from 'types/categories'
import { CategoryPostCard } from 'components/atoms'
import { Category } from 'generated/graphql'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { isEntityBlocked } from 'utils/accessVerifications'

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
        isExclusive: isEntityBlocked(item),
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
