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
  postUnpinned?: (postId: string) => void
}
