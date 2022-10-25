import { PaginatedPostsOutput } from 'generated/graphql'
import create from 'zustand'

type FeedState = {
  lastPositionCard: number
  lastActiveChannel: string
  feedPosts: PaginatedPostsOutput | null
  setFeedPosts: (postsObj: PaginatedPostsOutput) => void
  setLastActiveChannel: (lastActiveChannel: string) => void
  setLastPositionCard: (value: number) => void
  resetFeed: () => void
}

export const useFeedStore = create<FeedState>((set) => ({
  lastPositionCard: 0,
  feedPosts: null,
  lastActiveChannel: '',
  setFeedPosts: (feedPosts: PaginatedPostsOutput | null) => set({ feedPosts }),
  setLastActiveChannel: (lastActiveChannel: string) => set({lastActiveChannel}),
  setLastPositionCard: (lastPositionCard: number) => set({ lastPositionCard }),
  resetFeed: () => set({ feedPosts: null }),
}))
