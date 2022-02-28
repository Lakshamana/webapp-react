import { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import {
  VideosScrollerProps,
  VideoPostProps,
  VideoPostCardProps,
  RedactedVideo,
} from 'types/posts'
import { RedactReason } from 'generated/graphql'
import { useThemeStore } from 'services/stores/theme'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { Text, CardsScroller, VideoPostCard } from 'components'
import { Header, ContentScroller } from './styles'
import { colors, sizes, breakpoints } from 'styles'

const VideosScroller = ({
  items,
  sectionTitle, 
  sectionUrl,
  hasMoreLink,
}: VideosScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const [scrollerItems, setScrollerItems] = useState<VideoPostCardProps[]>()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

  const getImageUrl = (post: VideoPostProps) => {
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
      imageOptions
    )

    return image
  }

  const getPostUrl = (id: string) => {
    return `post/${id}`
  }

  const isRedacted = (post: VideoPostProps) => {
    return (
      post.__typename === 'RedactedOnDemandPost' ||
      post.__typename === 'RedactedVideoPost'
    )
  }

  const isExclusive = (post: VideoPostProps) => {
    return (
      (isRedacted(post) &&
        (post as RedactedVideo).reason === RedactReason.Exclusive) ||
      false
    )
  }

  const isGeolocked = (post: VideoPostProps) => {
    return (
      (isRedacted(post) &&
        (post as RedactedVideo).reason === RedactReason.Geofence) ||
      false
    )
  }

  useEffect(() => {
    if (items && items?.length) {
      const mappedArr = items?.map((item: VideoPostProps) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(`${item.id}`)
        return {
          id: `${item.id}`,
          title: `${item.title}`,
          url: url,
          thumbnail: thumbnail,
          mediaLength: item.media?.duration || undefined,
          countViews: item.counts?.countViews || undefined,
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
          marginRight={'10px'}
          fontWeight={'bolder'}
        >
          {sectionTitle}
        </Text>
        {hasMoreLink && (
          <Link
            color={colors.brand.primary[colorMode]}
            fontSize={'1.27rem'}
            to={sectionUrl}
          >
            {t('common.more')}
          </Link>
        )}
      </Header>
      {scrollerItems && scrollerItems.length && (
        <CardsScroller>
          {scrollerItems?.map((item: VideoPostCardProps) => {
            return (
              <SwiperSlide key={`slide-${item.id}`}>
                <VideoPostCard {...item} />
              </SwiperSlide>
            )
          })}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { VideosScroller }
