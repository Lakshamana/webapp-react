import { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { VideosScrollerProps, VideoPostCardProps } from 'types/posts'
import { Post } from 'generated/graphql'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { CardsScroller, VideoPostCard } from 'components'
import { ContentScroller } from './styles'

import { isEntityBlocked } from 'utils/accessVerifications'

const VideosScroller = ({
  items,
  sectionTitle,
  sectionUrl,
}: VideosScrollerProps) => {
  const { generateImage } = useThumbor()
  const [scrollerItems, setScrollerItems] = useState<VideoPostCardProps[]>()

  const { activeChannel } = useChannelsStore()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(post)) {
      imageOptions.blur = 20
    }

    const thumbnailPath =
      post.media?.__typename === 'MediaVideo' ? post.media?.thumbnailPath : ''

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || thumbnailPath || '',
      imageOptions,
      post.thumbnail?.imgPath ? null : post.media?.baseUrl
    )

    return image
  }

  const getPostUrl = (slug: string) => {
    return `/c/${activeChannel?.slug}/post/${slug}`
  }

  useEffect(() => {
    const mappedArr = items?.map((item: Post) => {
      const thumbnail = getImageUrl(item)
      const url = getPostUrl(`${item.slug}`)
      return {
        id: item.id,
        title: item.title,
        url: url,
        description: item?.description,
        thumbnail: thumbnail,
        mediaLength:
          item.media?.__typename === 'MediaVideo'
            ? item.media?.duration
            : undefined,
        isExclusive: isEntityBlocked(item),
        //TODO: Implement isGeolocked
        isGeolocked: false,
        isPinned: item.pinnedStatus?.pinned,
      }
    })
    setScrollerItems(mappedArr)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const renderScroller = () => {
    return (
      <CardsScroller title={sectionTitle} moreUrl={sectionUrl}>
        {scrollerItems?.map((item: VideoPostCardProps) => {
          return (
            <SwiperSlide key={`slide-${item.id}-featured`}>
              <VideoPostCard {...item} />
            </SwiperSlide>
          )
        })}
      </CardsScroller>
    )
  }

  return (
    <ContentScroller>
      {!!scrollerItems?.length && renderScroller()}
    </ContentScroller>
  )
}

export { VideosScroller }
