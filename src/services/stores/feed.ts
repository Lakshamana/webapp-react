import { PaginatedPostsOutput } from 'generated/graphql'
import create from 'zustand'

type FeedState = {
  lastPositionCard: number
  feedPosts: PaginatedPostsOutput | null
  setFeedPosts: (postsObj: PaginatedPostsOutput) => void
  setLastPositionCard: (value: number) => void
  resetFeed: () => void
}

export const useFeedStore = create<FeedState>((set) => ({
  lastPositionCard: 0,
  feedPosts: null,
  setFeedPosts: (feedPosts: PaginatedPostsOutput | null) => set({ feedPosts }),
  setLastPositionCard: (lastPositionCard: number) => set({ lastPositionCard }),
  resetFeed: () => set({ feedPosts: null }),
}))
