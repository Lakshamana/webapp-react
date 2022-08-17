import { MAX_FEED_POSTS_RESULTS } from 'config/constants'
import { Status } from 'generated/graphql'

export const postsFilter = (
  page: number,
  sortBy: string = 'publishedAt.asc'
) => {
  return {
    variables: {
      filter: {
        page,
        inFeed: true,
        pageSize: MAX_FEED_POSTS_RESULTS,
        status: Status.Published,
        sortBy,
      },
    },
  }
}
