import { MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'
import { PostType, Status } from 'generated/graphql'

export const liveEventsFilter = (page: number) => {
  return {
    filter: {
      status: [Status.Live, Status.Scheduled, Status.Ready],
      sortBy: 'scheduledStartAt.asc',
      // pageSize: MAX_CARDS_SCROLLER_RESULTS,
      // page,
    },
  }
}

export const postsFilter = (page: number) => {
  return {
    filter: {
      featured: true,
      typeIn: [PostType.Video, PostType.OnDemand, PostType.Photo, PostType.Text],
      status: Status.Published,
      pageSize: MAX_CARDS_SCROLLER_RESULTS,
      page,
    },
  }
}

export const categoriesFilter = (page: number, isParent?: boolean, featured?: boolean, pageSize?: number) => {
  return {
    filter: {
      featured,
      isParent,
      sortBy: 'sort.asc',
      pageSize: pageSize || MAX_CARDS_SCROLLER_RESULTS,
      page,
    },
  }
}

export const appendNewData = (previous: any, newData: any) => ({
  ...newData,
  rows: [...(previous?.rows || []), ...newData?.rows],
})