import { MAX_PLAYLIST_RESULTS } from 'config/constants'
import { PostType, Status } from 'generated/graphql'

export const relatedPostsFilter = (page: number, categories?: string[]) => {
  return {
    filter: {
      typeIn: [PostType.Video, PostType.OnDemand],
      status: Status.Published,
      pageSize: MAX_PLAYLIST_RESULTS,
      page,
      categories,
    },
  }
}

export const playlistPostsFilter = (page: number) => {
  return {
    postsFilters: {
      typeIn: [PostType.Video, PostType.OnDemand],
      status: Status.Published,
      pageSize: MAX_PLAYLIST_RESULTS,
      page,
    },
  }
}
