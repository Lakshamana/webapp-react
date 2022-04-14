import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { compareAsc } from 'date-fns'
import { Link } from '@chakra-ui/react'

import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { useThemeStore } from 'services/stores'
import { useChannelsStore } from 'services/stores'

import { CardsScroller, LivestreamPostCard } from 'components'
import { Text } from 'components'

import { Header, ContentScroller } from './style'
import { colors, sizes, breakpoints } from 'styles'

import {
  LivestreamPostCardProps,
  LivestreamsScrollerProps,
} from 'types/livestreams'

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

  const getImageUrl = (post: any) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isExclusive(post) || isGeolocked(post)) {
      imageOptions.blur = 20
    }

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      post.thumbnail?.imgPath || '',
      {
        size: {
          height: 400,
        },
      }
    )
    return image
  }

  const getLivestreamUrl = (id: string) =>
    `/c/${activeChannel?.slug}/live/${id}`

  const isExclusive = (post: any) => false

  const isGeolocked = (post: any) => false

  const isLive = (post: any) => post.status === 'active'

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
    const mappedArr = arrForSort?.map((item: any) => {
      const thumbnail = getImageUrl(item)
      const url = getLivestreamUrl(`${item.id}`)
      return {
        id: `${item.id}`,
        title: `${item.title}`,
        url: url,
        status: item.status,
        thumbnail: thumbnail,
        isExclusive: isExclusive(item),
        isGeolocked: isGeolocked(item),
      }
    })
    setScrollerItems(mappedArr?.length ? mappedArr : [])
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
          fontSize={isDesktop ? '1.27rem' : '1.1rem'}
          to={sectionUrl}
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
