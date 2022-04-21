import { SortDirection } from 'generated/graphql'
import create from 'zustand'

type State = {
  position: number
  filterBy: SortDirection
  listOfPosts: any[]
  hasMore: boolean
  page: number
}

type FeedState = {
  stateFeed: State
  setStateFeed: (hasMore: State) => void
}

export const useFeedStore = create<FeedState>((set) => ({
  stateFeed: {
    position: 0,
    filterBy: SortDirection.Desc,
    listOfPosts: [],
    hasMore: true,
    page: 1,
  },
  setStateFeed: (stateFeed) => set({ stateFeed }),
}))
