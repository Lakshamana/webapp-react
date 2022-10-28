import { useLazyQuery } from '@apollo/client'
import { TagsScroller } from 'components'
import { MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'
import { useEffect, useState } from 'react'
import { QUERY_PAGINATE_TAG } from 'services/graphql'
import { useChannelsStore } from 'services/stores'
import { HomeCarouselsTypes } from 'types/common'
import { Props } from './types'

const initialTagState = {
  rows: [],
  slug: null,
  postFilters: { page: 0, hasNextPage: true },
  categoryFilters: { page: 0, hasNextPage: true },
}

const TagsScrollerComponent = ({
  item,
  getCarouselLabel,
  hasResults,
}: Props) => {
  const [variables, setVariables] = useState({ tagId: item.TAGS })
  const [tag, setTag] = useState(initialTagState)
  const { activeChannel } = useChannelsStore()

  const [getData, { loading }] = useLazyQuery(
    QUERY_PAGINATE_TAG(item.CONTENT_TYPE),
    {
      onCompleted: (result) => {
        const { relatedPosts, relatedCategories, ...all } = result.tag
        setTag((previous) => {
          let rows: any = [...previous.rows] || []
          if (relatedPosts) rows = [...rows, ...relatedPosts?.rows]
          if (relatedCategories) rows = [...rows, ...relatedCategories?.rows]
          return {
            ...previous,
            ...all,
            rows,
            postFilters: {
              page: relatedPosts?.page,
              hasNextPage: relatedPosts?.hasNextPage,
            },
            categoryFilters: {
              page: relatedCategories?.page,
              hasNextPage: relatedCategories?.hasNextPage,
            },
          }
        })
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const calculateRate = (contentType: string[]) =>
    contentType.length >= 2
      ? Math.round(MAX_CARDS_SCROLLER_RESULTS / 2)
      : MAX_CARDS_SCROLLER_RESULTS

  const defineVariables = () => {
    setVariables((previous) => {
      let defineParams: any = { ...previous }
      if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Posts)) {
        defineParams = {
          ...defineParams,
          postFilters: {
            pageSize: calculateRate(item.CONTENT_TYPE),
            page: tag.postFilters.page + 1 ?? 1,
          },
        }
      }
      if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Collections)) {
        defineParams = {
          ...defineParams,
          categoryFilters: {
            pageSize: calculateRate(item.CONTENT_TYPE),
            page: tag.categoryFilters.page + 1 ?? 1,
          },
        }
      }
      return defineParams
    })
  }

  useEffect(() => {
    if (tag.rows.length) hasResults()
    // eslint-disable-next-line
  }, [tag])

  // eslint-disable-next-line
  useEffect(() => getData({ variables }), [variables])

  // eslint-disable-next-line
  useEffect(() => defineVariables(), [item])

  useEffect(() => setTag(initialTagState), [activeChannel])

  const loadMore = () => {
    if (item.CONTENT_TYPE.length >= 2) {
      if (!tag.postFilters.hasNextPage && !tag.categoryFilters.hasNextPage)
        return
      defineVariables()
    }
    if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Posts)) {
      return tag.postFilters.hasNextPage ? defineVariables() : null
    }
    if (item.CONTENT_TYPE.includes(HomeCarouselsTypes.Collections)) {
      return tag.categoryFilters.hasNextPage ? defineVariables() : null
    }
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
