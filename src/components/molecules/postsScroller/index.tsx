import {
  CardMore,
  CardsScroller,
  PhotoPostCard,
  SkeletonScroller,
  TextPostCard,
  VideoPostCard
} from 'components'
import { Post, PostType } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import { GeneralPostCardProps, PostsScrollerProps } from 'types/posts'
import { ContentScroller } from './styles'

import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'

const PostsScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  loadMoreItems,
  showCardMore,
  isLoading,
}: PostsScrollerProps) => {
  const { generateImage } = useThumbor()
  const [scrollerItems, setScrollerItems] = useState<GeneralPostCardProps[]>()
  const { activeChannel } = useChannelsStore()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        width: 0,
        height: 250,
      },
    }

    if (isEntityBlocked(post)) imageOptions.blur = 20

    const thumbnailPath =
      (post.media?.__typename === 'MediaVideo' && post.thumbnail?.imgPath) ||
      (post.media?.__typename === 'MediaPhoto' && post.media.imgPath)

    const secondImgUrl =
      post.media?.__typename === 'MediaVideo'
        ? `${post.media.baseUrl}/${post.media.thumbnailPath}`
        : ''

    if (thumbnailPath) {
      return generateImage(
        ThumborInstanceTypes.IMAGE,
        thumbnailPath,
        imageOptions
      )
    }
    return secondImgUrl
  }

  useEffect(() => {
    const mappedArr = items?.map((item: Post) => {
      const thumbnail = getImageUrl(item)
      const url = `/c/${activeChannel?.slug}/post/${item.slug}`
      return {
        id: item.id,
        title: item.title,
        url,
        description: item?.description,
        thumbnail,
        mediaLength:
          item.media?.__typename === 'MediaVideo'
            ? item.media?.duration
            : undefined,
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
        isPinned: item.pinnedStatus?.pinned,
        type: item.type,
      }
    })
    setScrollerItems(mappedArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <ContentScroller>
      {isLoading && !scrollerItems?.length && <SkeletonScroller />}
      {!!scrollerItems?.length && (
        <CardsScroller
          title={sectionTitle}
          moreUrl={sectionUrl}
          reachEnd={loadMoreItems}
          {...{ isLoading }}
        >
          {scrollerItems?.map((item: GeneralPostCardProps) => (
            <SwiperSlide key={`slide-${item.id}-featured`}>
              {(item.type === PostType.Video ||
                item.type === PostType.OnDemand) && <VideoPostCard {...item} />}
              {item.type === PostType.Text && <TextPostCard {...item} />}
              {item.type === PostType.Photo && <PhotoPostCard {...item} />}
            </SwiperSlide>
          ))}
          {showCardMore && sectionUrl && (
            <SwiperSlide>
              <CardMore {...{ sectionUrl }} />
            </SwiperSlide>
          )}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { PostsScroller }
