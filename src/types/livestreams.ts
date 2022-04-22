import { LiveEvent } from 'generated/graphql'

export type LivestreamsScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: LiveEvent[]
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
