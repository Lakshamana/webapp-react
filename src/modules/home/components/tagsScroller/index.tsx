import { useLazyQuery } from '@apollo/client'
import { TagsScroller } from 'components'
import { MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'
import { useEffect, useState } from 'react'
import { QUERY_PAGINATE_TAG } from 'services/graphql'
import { useChannelsStore } from 'services/stores'
import { HomeCarouselsTypes } from 'types/common'
import { Props } from './types'

const TagsScrollerComponent = ({ item, getCarouselLabel }: Props) => {
  const [variables, setVariables] = useState({ tagId: item.TAGS })
  const [tag, setTag] = useState({
    rows: [],
    slug: null,
    postFilters: { page: 0, hasNextPage: true },
    collectionsFilters: { page: 0, hasNextPage: true }
  })
  const { activeChannel } = useChannelsStore()

  const [getData, { loading }] = useLazyQuery(QUERY_PAGINATE_TAG(item.CONTENT_TYPE),
    {
      onCompleted: (result) => {
        const { relatedPosts, ...all } = result.tag
        setTag((previous) => {
          let rows: any = []
          if (relatedPosts) {
            rows = [...(previous.rows || []), ...relatedPosts?.rows]
          }
          return ({
            ...previous,
            ...all,
            rows,
            postFilters: {
              page: relatedPosts?.page,
              hasNextPage: relatedPosts?.hasNextPage,
            },
          })
        })
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const defineVariables = () => {
    setVariables((previous) => {
      let defaultValues: any = { ...previous }
      if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Posts)) {
        defaultValues = {
          ...defaultValues,
          postFilters: {
            pageSize: MAX_CARDS_SCROLLER_RESULTS,
            page: tag.postFilters.page + 1 ?? 1
          }
        }
      }
      if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Collections)) {
        defaultValues = {
          ...defaultValues,
          collectionsFilters: {
            pageSize: MAX_CARDS_SCROLLER_RESULTS,
            page: tag.collectionsFilters.page + 1 ?? 1
          }
        }
      }
      return defaultValues
    })
  }

  // eslint-disable-next-line
  useEffect(() => getData({ variables }), [variables])

  // eslint-disable-next-line
  useEffect(() => defineVariables(), [item])

  const loadMore = () => {
    if (!tag.postFilters.hasNextPage) return
    defineVariables()
  }

  return (
    <TagsScroller
      sectionTitle={getCarouselLabel(item)}
      sectionUrl={`/c/${activeChannel?.slug}/tag/${tag.slug}`}
      onReachEnd={loadMore}
      isLoading={loading}
      {...tag}
    />
  )
}

export { TagsScrollerComponent }
