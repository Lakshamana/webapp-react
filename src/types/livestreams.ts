import { Livestream, LivestreamStatus } from 'generated/graphql'

export type LivestreamsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: Livestream[]
}

export type LivestreamPostCardProps = {
  id: string
  title?: string
  url?: string
  thumbnail?: string
  status?: LivestreamStatus | null
  isExclusive?: boolean
  isGeolocked?: boolean
}

export type LivestreamBadge = {
  label: string
  color: string
}
