import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { compareAsc } from 'date-fns'

import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { useThemeStore } from 'services/stores'
import { useChannelsStore } from 'services/stores'

import { CardsScroller, LivestreamPostCard, Link } from 'components'
import { Text } from 'components'

import { Header, ContentScroller } from './style'
import { colors, sizes, breakpoints } from 'styles'

import { isEntityBlocked } from 'utils/accessVerifications'

import {
  LivestreamPostCardProps,
  LivestreamsScrollerProps,
} from 'types/livestreams'
import { LiveEvent, Status } from 'generated/graphql'

const LivestreamScroller = ({
  items,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
}: LivestreamsScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] =
    useState<LivestreamPostCardProps[]>()

  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
      {
        size: {
          height: 400,
        },
      }
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
        : compareAsc(a.scheduledStartAt, b.scheduledStartAt)
    })
    const mappedArr = arrForSort?.map((item: LiveEvent) => {
      const thumbnail = getImageUrl(item)
      const url = getLivestreamUrl(item.slug || '')
      return {
        id: item.id,
        title: item.title,
        description: item.description,
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

  const renderHeader = () => (
    <Header>
      <Text
        color={colors.generalText[colorMode]}
        fontSize={isDesktop ? '1.55rem' : '1.3rem'}
        paddingLeft={[sizes.paddingSm, sizes.paddingSm, sizes.paddingMd]}
        fontWeight={'bolder'}
        marginRight={'10px'}
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

  const renderScroller = () => (
    <CardsScroller>
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
      {!!scrollerItems?.length && (
        <>
          {renderHeader()}
          {renderScroller()}
        </>
      )}
    </ContentScroller>
  )
}

export { LivestreamScroller }
