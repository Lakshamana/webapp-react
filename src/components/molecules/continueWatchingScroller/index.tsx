import { CardsScroller, VideoPostCard } from 'components'
import { useEffect, useState } from 'react'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import { VideoPostCardProps } from 'types/posts'
import { ContentScroller } from './styles'

import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'

const ContinueWatchingScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  loadMoreItems,
}) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState([])

  const getImageUrl = (item) => {
    const imageOptions: ThumborParams = { size: { height: 400 } }
    if (isEntityBlocked(item)) imageOptions.blur = 20
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      item?.thumbnail?.imgPath || '',
      imageOptions
    )
    return image
  }

  useEffect(() => {
    const mappedArr = items?.map((item) => {
      const thumbnail = getImageUrl(item)
      const url = `/c/${activeChannel?.slug}/post/${item.slug}`
      return {
        id: item.id,
        title: item.title,
        url,
        description: item?.description,
        thumbnail,
        mediaLength: item.media?.duration,
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
        isPinned: item.pinnedStatus?.pinned,
        progress: item.progress
      }
    })
    setScrollerItems(mappedArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <ContentScroller>
      {!!scrollerItems?.length && (
        <CardsScroller
          title={sectionTitle}
          moreUrl={sectionUrl}
          reachEnd={loadMoreItems}
        >
          {scrollerItems?.map((item: VideoPostCardProps) => (
            <SwiperSlide key={`slide-${item.id}-featured`}>
              <VideoPostCard {...item} />
            </SwiperSlide>
          ))}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { ContinueWatchingScroller }
