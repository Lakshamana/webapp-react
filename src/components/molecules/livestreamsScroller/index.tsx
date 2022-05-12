import { useState, useEffect } from 'react'
import { SwiperSlide } from 'swiper/react'
import { compareAsc } from 'date-fns'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { CardsScroller, LivestreamPostCard } from 'components'
import { ContentScroller } from './style'
import { isEntityBlocked } from 'utils/accessVerifications'
import { parseISO } from 'date-fns'

import {
  LivestreamPostCardProps,
  LivestreamsScrollerProps,
} from 'types/livestreams'
import { LiveEvent, Status } from 'generated/graphql'

const LivestreamScroller = ({
  items,
  sectionTitle,
  sectionUrl,
}: LivestreamsScrollerProps) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] =
    useState<LivestreamPostCardProps[]>()

  const getImageUrl = (live: LiveEvent) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(live)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      live.thumbnail?.imgPath || '',
      imageOptions
    )
    return image
  }

  const getLivestreamUrl = (slug: string) =>
    `/c/${activeChannel?.slug}/live/${slug}`

  const isLive = (live: LiveEvent) => live.status === Status.Live

  useEffect(() => {
    const arrForSort = [...items!]
    arrForSort.sort((a, b) => {
      const liveA = isLive(a)
      const liveB = isLive(b)
      return !liveA && liveB
        ? 1
        : liveA && !liveB
        ? -1
        : compareAsc(parseISO(a.scheduledStartAt), parseISO(b.scheduledStartAt))
    })
    const mappedArr = arrForSort?.map((item: LiveEvent) => {
      const thumbnail = getImageUrl(item)
      const url = getLivestreamUrl(item.slug || '')
      return {
        id: item.id,
        title: item.title,
        description: item.description || '',
        url: url,
        status: item.status,
        thumbnail: thumbnail,
        isExclusive: isEntityBlocked(item),
        //TODO: Waiting for API
        isGeolocked: false,
      }
    })
    setScrollerItems(mappedArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  const renderScroller = () => (
    <CardsScroller title={sectionTitle} moreUrl={sectionUrl}>
      {scrollerItems?.map((item: LivestreamPostCardProps) => {
        return (
          <SwiperSlide key={`slide-${item.id}-livestream`}>
            <LivestreamPostCard {...item} />
          </SwiperSlide>
        )
      })}
    </CardsScroller>
  )

  return (
    <ContentScroller>
      {!!scrollerItems?.length && renderScroller()}
    </ContentScroller>
  )
}

export { LivestreamScroller }
