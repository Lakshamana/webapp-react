import { Post } from 'generated/graphql'

export type PostsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  showCardMore?: number | boolean | undefined
  isLoading?: boolean
  items?: Post[]
  loadMoreItems?: () => void
}

export type PostsGridProps = {
  sectionTitle?: string
  items?: Post[]
  sendUnpinEvent?: (postId: string) => void
}

export interface GeneralPostCardProps {
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

interface PostCardProps {
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
  hasClickedOnCard: () => void
}

export interface ComponentPostCardProps
  extends GeneralPostCardProps,
    PostCardProps {}

export interface MobileViewProps {
  id: string
  title?: string
  url?: string
  description?: Maybe<string>
  thumbnail?: string
  mediaLength?: Maybe<number>
  countViews?: number
  isExclusive: boolean
  isGeolocked?: boolean
  isPostPinned?: boolean
  isLoading: boolean
  progress?: string
  hasPinButton?: boolean
  type?: string
  handlePinPost: () => void
  isOpen: boolean
  onClose: () => void
}
