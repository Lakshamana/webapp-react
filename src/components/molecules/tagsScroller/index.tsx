import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@chakra-ui/media-query'
import { useTranslation } from 'react-i18next'
import { TagsScrollerProps } from 'types/tags'
import { useThemeStore } from 'services/stores/theme'
import { useChannelsStore } from 'services/stores'
import { ThumborInstanceTypes, useThumbor, ThumborParams } from 'services/hooks'
import { Text, CardsScroller, VideoPostCard, Skeleton } from 'components'
import { Header, ContentScroller } from './styles'
import { colors, sizes, breakpoints } from 'styles'
import { isEntityBlocked } from 'utils/accessVerifications'
import { useLazyQuery } from '@apollo/client'
import { QUERY_TAG } from 'services/graphql'
import { TagScrollerItem } from 'types/tags'
import { Category, Post } from 'generated/graphql'
import { CategoryPostCard, Link } from 'components/atoms'

const TagsScroller = ({
  tagID,
  sectionTitle,
  sectionUrl,
  hasMoreLink,
  hasResults
}: TagsScrollerProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { generateImage } = useThumbor()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState([])
  const [filteredItems, setFilteredItems] = useState<TagScrollerItem[]>()

  const [getTag, { data, loading }] = useLazyQuery(QUERY_TAG, {
    variables: {
      id: tagID,
    },
  })

  useEffect(() => {
    if (tagID) getTag()
    //eslint-disable-next-line
  }, [tagID])

  useEffect(() => {
    if (data?.tag) {
      const postItems = data?.tag?.relatedPosts
      const categoryItems = data?.tag?.relatedCategories
      const myArr = postItems
        .concat(categoryItems)
        .sort(
          (a, b) =>
            (a.createdAt || a.publishedAt) - (b.createdAt || b.publishedAt)
        )

      setScrollerItems(myArr)
    }
  }, [data])

  useEffect(() => {
    if (scrollerItems.length) {
      hasResults()
      const mappedArr = scrollerItems?.map((item: Post | Category) => {
        const thumbnail = getImageUrl(item)
        const url = getPostUrl(item)
        return {
          id: item.id,
          slug: item.slug,
          title:
            (item.__typename === 'Post' && item.title) ||
            (item.__typename === 'Category' && item.name) ||
            '',
          description: item.description,
          duration:
            item.__typename === 'Post' &&
            item.media?.__typename === 'MediaVideo'
              ? item.media?.duration
              : '',
          isExclusive: isEntityBlocked(item),
          thumbnail,
          isPinned: item.pinnedStatus?.pinned,
          url,
          __typename: item.__typename,
        }
      })
      setFilteredItems(mappedArr)
    }
    //eslint-disable-next-line
  }, [scrollerItems])

  const getImageUrl = (item: Post | Category) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(item)) {
      imageOptions.blur = 20
    }

    let path = ''

    if (item.__typename === 'Post') path = item.thumbnail?.imgPath || ''
    if (item.__typename === 'Category')
      path = item.customization?.thumbnail?.imgPath || ''

    const image = generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)

    return image
  }

  const getPostUrl = (item) =>
    `/c/${activeChannel?.slug}/${item.__typename.toLowerCase()}/${item.slug}`

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
        {hasMoreLink && !!filteredItems?.length ? (
          <Link
            color={colors.brand.action_link[colorMode]}
            fontSize={'1.27rem'}
            to={`${sectionUrl}${data?.tag?.slug}`}
          >
            {t('common.more')}
          </Link>
        ) : (
          <Box fontSize={'1.1rem'} color={colors.secondaryText[colorMode]}>
            {t('page.tag.no_content')}
          </Box>
        )}
      </Header>
    )
  }

  const renderScroller = () => {
    return (
      <CardsScroller>
        {!!filteredItems?.length &&
          filteredItems?.map((item: TagScrollerItem) => {
            return (
              <SwiperSlide key={`slide-${item.id}`}>
                {item.__typename === 'Post' && <VideoPostCard {...item} />}
                {item.__typename === 'Category' && (
                  <CategoryPostCard {...item} />
                )}
              </SwiperSlide>
            )
          })}
      </CardsScroller>
    )
  }

  if (loading)
    return (
      <Box p={sizes.paddingSm} width="100%">
        <Skeleton kind="cards" numberOfCards={3} />
      </Box>
    )

  return (
    <ContentScroller>
      {sectionTitle && renderHeader()}
      {renderScroller()}
    </ContentScroller>
  )
}

export { TagsScroller }
