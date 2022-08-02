import { Post } from 'generated/graphql'

export type VideosScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: Post[]
}

export type VideosGridProps = {
  sectionTitle?: string
  items?: Post[]
  sendUnpinEvent?: (postId: string) => void
}

export type VideoPostCardProps = {
  id: string
  title?: string
  url?: string
  description?: Maybe<string>
  thumbnail?: string
  mediaLength?: Maybe<number>
  countViews?: number
  isExclusive: boolean
  isGeolocked?: boolean
  isPinned?: boolean
  isActive?: boolean
  postUnpinned?: (postId: string) => void
}

type PostCardProps = {
  hover: boolean
  mobileBehavior?: boolean
  isLoading: boolean
  isPostPinned: boolean
  pinPost: () => void
  unpinPost: () => void
  actionHover: (status: boolean) => () => void
  defineAction: () => void
}

export type ComponentPostCardProps = VideoPostCardProps & PostCardProps
