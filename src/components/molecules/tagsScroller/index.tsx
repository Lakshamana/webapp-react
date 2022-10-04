import { CardsScroller, SkeletonScroller, VideoPostCard } from 'components'
import { CategoryPostCard } from 'components/atoms'
import { Category, Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { SwiperSlide } from 'swiper/react'
import { TagScrollerItem } from 'types/tags'
import { isEntityBlocked } from 'utils/accessVerifications'
import { ContentScroller } from './styles'
import { Props } from './types'

const TagsScroller = (props: Props) => {
  const { generateImage } = useThumbor()
  const { activeChannel } = useChannelsStore()
  const [scrollerItems, setScrollerItems] = useState([])
  const [filteredItems, setFilteredItems] = useState<TagScrollerItem[]>()

  useEffect(() => {
    const allItems: any = props.rows
      .sort((a, b) => (a.createdAt || a.publishedAt) - (b.createdAt || b.publishedAt))
    setScrollerItems(allItems)
    //eslint-disable-next-line
  }, [props])

  const getPostUrl = (item) =>
    `/c/${activeChannel?.slug}/${item.__typename.toLowerCase()}/${item.slug}`

  useEffect(() => {
    if (scrollerItems.length) {
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
    const imageOptions: ThumborParams = { size: { height: 400 } }
    if (isEntityBlocked(item)) imageOptions.blur = 20
    let path = ''
    if (item.__typename === 'Post') path = item.thumbnail?.imgPath || ''
    if (item.__typename === 'Category')
      path = item.customization?.thumbnail?.imgPath || ''
    const image = generateImage(ThumborInstanceTypes.IMAGE, path, imageOptions)
    return image
  }

  return (
    <ContentScroller>
      {
        props.isLoading &&
        !filteredItems?.length &&
        <SkeletonScroller />
      }
      {!!filteredItems?.length && (
        <CardsScroller
          title={props.sectionTitle}
          moreUrl={props.sectionUrl}
          reachEnd={props.onReachEnd}
          {...{ isLoading: props.isLoading }}
        >
          {filteredItems?.map((item: TagScrollerItem) => (
            <SwiperSlide key={`slide-${item.id}`}>
              {item.__typename === 'Post' && (
                <VideoPostCard key={`post-${item.id}`} {...item} />
              )}
              {item.__typename === 'Category' && (
                <CategoryPostCard key={`category-${item.id}`} {...item} />
              )}
            </SwiperSlide>
          ))}
        </CardsScroller>
      )}
    </ContentScroller>
  )
}

export { TagsScroller }
