import { MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'
import { PostType, Status } from 'generated/graphql'

export const onDemandFilter = (page: number) => ({
  filter: {
    typeIn: [PostType.OnDemand],
    sortBy: 'publishedAt.asc',
    pageSize: MAX_CARDS_SCROLLER_RESULTS,
    page,
  },
})

export const upcomingFilter = (page: number) => ({
  filter: {
    status: [Status.Scheduled, Status.Ready],
    sortBy: 'scheduledStartAt.asc',
    pageSize: MAX_CARDS_SCROLLER_RESULTS,
    page,
  },
})
