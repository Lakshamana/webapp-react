import { LiveEvent, Status } from 'generated/graphql'

export type LivestreamsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: LiveEvent[]
  loadMoreItems?: () => void
}

export type LivestreamPostCardProps = {
  id: string
  title?: string
  description?: string
  url?: string
  thumbnail?: string
  status?: string | null
  isExclusive?: boolean
  isGeolocked?: boolean
}

export type LivestreamBadge = {
  label: string
  color: string
}

export type LivestreamSnapshot = {
  isPresenceEnabled?: boolean
  status?: Status
  isCommentsEnabled?: boolean
  isReactionsEnabled?: boolean
  hlsPlaybackUrl?: string
}

export type LivestreamGridProps = {
  sectionTitle?: string
  items?: LiveEvent[]
}

type PostCardProps = {
  hover: boolean
  mobileBehavior?: boolean
  actionHover: (status: boolean) => () => void
  defineAction: () => void
}

export type ComponentPostCardProps = LivestreamPostCardProps & PostCardProps