import { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import { VideosScrollerProps, VideoPostCardProps } from 'types/posts'
import { Post } from 'generated/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { Text, CardsScroller, VideoPostCard } from 'components'
import { Header, ContentScroller } from './styles'
import { colors, sizes, breakpoints } from 'styles'
import { isEntityBlocked } from 'utils/accessVerifications'

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

    const thumbnailPath = post.media?.__typename === 'MediaVideo' ? post.media?.thumbnailPath : ''

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

  const renderHeader = () => {
    return (
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
            color={colors.brand.action_link[colorMode]}
            fontSize={'1.27rem'}
            to={sectionUrl}
          >
            {t('common.more')}
          </Link>
        )}
      </Header>
    )
  }
  const renderScroller = () => {
    return (
      <CardsScroller >
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
      {!!scrollerItems?.length && (
        <>
          {renderHeader()}
          {renderScroller()}
        </>
      )}
    </ContentScroller>
  )
}

export { VideosScroller }
