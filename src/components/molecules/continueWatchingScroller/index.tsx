import { CardsScroller, SkeletonScroller, VideoPostCard } from 'components'
import { PostType } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import { GeneralPostCardProps } from 'types/posts'
import { ContentScroller } from './styles'

import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'hooks/useThumbor'
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
  isLoading
}) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState([])

  const getImageUrl = (item) => {
    const imageOptions: ThumborParams = { size: { height: 400 } }
    if (isEntityBlocked(item)) imageOptions.blur = 20
    const path = item.thumbnail[0] || ''
    if (path) {
      return generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
    }
    if (item?.mediaBaseUrl?.length && item?.mediaThumbnailPath?.length) {
      return `${item?.mediaBaseUrl[0]}/${item?.mediaThumbnailPath[0]}`
    }
    return ''
  }

  useEffect(() => {
    const mappedArr = items?.map((item) => {
      const thumbnail = getImageUrl(item)
      const url = `/c/${activeChannel?.slug}/post/${item.slug}`
      return {
        id: item._id,
        title: item.title,
        url,
        description: item?.description,
        thumbnail,
        mediaLength: item.media?.duration,
        countViews: item?.countViewsTotal || 0,
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
        isPinned: item.pinnedStatus?.pinned,
        progress: item.progress,
        type: PostType.Video
      }
    })
    setScrollerItems(mappedArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <ContentScroller>
      {
        isLoading &&
        !scrollerItems?.length &&
        <SkeletonScroller />
      }
      {!!scrollerItems?.length && (
        <CardsScroller
          title={sectionTitle}
          moreUrl={sectionUrl}
          reachEnd={loadMoreItems}
          {...{ isLoading }}
        >
          {scrollerItems?.map((item: GeneralPostCardProps) => (
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
