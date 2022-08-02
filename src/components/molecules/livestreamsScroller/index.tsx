import { CardsScroller, LivestreamPostCard } from 'components'
import { compareAsc, parseISO } from 'date-fns'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import {
  isEntityBlocked,
  isEntityExclusive,
  isEntityGeolocked
} from 'utils/accessVerifications'
import { ContentScroller } from './style'

import { LiveEvent, Status } from 'generated/graphql'
import {
  LivestreamPostCardProps,
  LivestreamsScrollerProps
} from 'types/livestreams'

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
    const imageOptions: ThumborParams = { size: { height: 400 }, }
    if (isEntityBlocked(live)) imageOptions.blur = 20
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      live.thumbnail?.imgPath || '',
      imageOptions
    )
    return image
  }

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
      const url = `/c/${activeChannel?.slug}/live/${item.slug || ''}`
      return {
        id: item.id,
        title: item.title,
        description: item.description || '',
        url,
        status: item.status,
        thumbnail,
        isExclusive: isEntityExclusive(item),
        isGeolocked: isEntityGeolocked(item),
      }
    })
    setScrollerItems(mappedArr)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <ContentScroller>
      {!!scrollerItems?.length &&
        <CardsScroller title={sectionTitle} moreUrl={sectionUrl}>
          {scrollerItems?.map((item: LivestreamPostCardProps) => (
            <SwiperSlide key={`slide-${item.id}-livestream`}>
              <LivestreamPostCard {...item} />
            </SwiperSlide>
          ))}
        </CardsScroller>
      }
    </ContentScroller>
  )
}

export { LivestreamScroller }
