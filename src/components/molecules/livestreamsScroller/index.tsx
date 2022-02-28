import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { Link } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores/theme'

import { CardsScroller, LivestreamPostCard } from 'components'
import { Text } from 'components'
import { Header, ContentScroller } from './style'
import { colors, sizes, breakpoints } from 'styles'

import {
  Livestream,
  LivestreamStatus,
  RedactedLivestreamEvent,
  RedactReason,
} from 'generated/graphql'

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
  const [scrollerItems, setScrollerItems] =
    useState<LivestreamPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const getImageUrl = (post: Livestream) => {
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

  const getLivestreamUrl = (id: string) => {
    return `live/${id}`
  }

  const isRedacted = (post: Livestream) => {
    return post.__typename === 'RedactedLivestreamEvent'
  }

  const isExclusive = (post: Livestream) => {
    return (
      (isRedacted(post) &&
        (post as RedactedLivestreamEvent).reason === RedactReason.Exclusive) ||
      false
    )
  }

  const isGeolocked = (post: Livestream) => {
    return (
      (isRedacted(post) &&
        (post as RedactedLivestreamEvent).reason === RedactReason.Geofence) ||
      false
    )
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: Livestream) => {
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
      setScrollerItems(mappedArr)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  return (
    <ContentScroller>
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
            color={colors.brand.primary[colorMode]}
            fontSize={isDesktop ? '1.27rem' : '1.1rem'}
            to={sectionUrl}
          >
            {t('common.more')}
          </Link>
        )}
      </Header>
      {scrollerItems && scrollerItems.length && (
        <CardsScroller>
          {scrollerItems.map((item: LivestreamPostCardProps) => {
            return (
              <SwiperSlide key={`slide-${item.id}-livestream`}>
                <LivestreamPostCard {...item} />
              </SwiperSlide>
            )
          })}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { LivestreamScroller }
