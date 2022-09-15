import { Post } from 'generated/graphql'

export type VideosScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: Post[]
  loadMoreItems?: () => void
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
  progress?: string
  hasPinButton?: boolean
  type?: string
  postUnpinned?: (postId: string) => void
}

type PostCardProps = {
  hover: boolean
  mobileBehavior?: boolean
  isLoading: boolean
  isPostPinned: boolean
  isOpen?: boolean
  progress?: string
  pinPost: () => void
  unpinPost: () => void
  actionHover: (status: boolean) => () => void
  defineAction?: () => void
  onClickCard: () => void
}

export type ComponentPostCardProps = VideoPostCardProps & PostCardProps
