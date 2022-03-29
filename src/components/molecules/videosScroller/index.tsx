import { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import { VideosScrollerProps, VideoPostCardProps } from 'types/posts'
import { Post } from 'generated/graphql'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { convertCamelCaseToDash } from 'utils'
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
  const { activeChannel } = useChannelsStore()

  const getImageUrl = (post: Post) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isExclusive(post)) {
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
    return `/c/${convertCamelCaseToDash(activeChannel?.name)}/post/${id}`
  }

  const isExclusive = (post: Post) => post.kind === 'exclusive'

  useEffect(() => {
    const mappedArr = items?.map((item: Post) => {
      const thumbnail = getImageUrl(item)
      const url = getPostUrl(`${item.id}`)
      return {
        id: `${item.id}`,
        title: `${item.title}`,
        url: url,
        thumbnail: thumbnail,
        mediaLength:
          item.media?.__typename === 'MediaVideo' ? item.media?.duration : undefined,
        //TODO: Verify if countViews exists on API
        countViews: undefined,
        isExclusive: isExclusive(item),
        //TODO: Implement isGeolocked
        isGeolocked: false,
        //TODO: Waiting for API
        isPinned: false,
      }
    })
    setScrollerItems(mappedArr?.length ? mappedArr : [])

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
            color={colors.brand.primary[colorMode]}
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
      <CardsScroller>
        {scrollerItems?.map((item: VideoPostCardProps) => {
          return (
            <SwiperSlide key={`slide-${item.id}`}>
              <VideoPostCard {...item} />
            </SwiperSlide>
          )
        })}
      </CardsScroller>
    )
  }

  return (
    <ContentScroller>
      {scrollerItems?.length && (
        <>
          {sectionTitle && renderHeader()}
          {renderScroller()}
        </>
      )}
    </ContentScroller>
  )
}

export { VideosScroller }
