import { CardsScroller, SkeletonScroller } from 'components'
import { CategoryPostCard } from 'components/atoms'
import { Category } from 'generated/graphql'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'hooks/useThumbor'
import { useEffect, useState } from 'react'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import {
  CategoriesScrollerProps,
  CategoryPostCardProps
} from 'types/categories'
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
  isLoading,
  loadMoreItems,
}: CategoriesScrollerProps) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState<CategoryPostCardProps[]>()

  //TODO: Transform this function in a util
  const getImageUrl = (item: Category) => {
    const imageOptions: ThumborParams = { size: { height: 400 } }
    if (isEntityBlocked(item)) imageOptions.blur = 20
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      item.customization?.thumbnail?.imgPath || '',
      imageOptions
    )
    return image
  }

  useEffect(() => {
    const categoriesItems = items?.map((item: Category) => {
      const thumbnail = getImageUrl(item)
      const url = `/c/${activeChannel?.slug}/category/${item.slug}`
      return {
        id: item.id || '',
        title: item.name || '',
        description: item.description || '',
        url,
        thumbnail,
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
        isPinned: item.pinnedStatus?.pinned,
      }
    })
    setScrollerItems(categoriesItems)
    // eslint-disable-next-line
  }, [items])

  return (
    <ContentScroller>
      {isLoading && !scrollerItems?.length && <SkeletonScroller />}
      {!!scrollerItems?.length && (
        <CardsScroller
          title={sectionTitle}
          moreUrl={sectionUrl}
          reachEnd={loadMoreItems}
        >
          {scrollerItems?.map((category: CategoryPostCardProps) => (
            <SwiperSlide key={`slide-${category.id}`}>
              <CategoryPostCard {...category} />
            </SwiperSlide>
          ))}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { CategoriesScroller }
