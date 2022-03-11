import {
  OnDemandPost,
  RedactedOnDemandPost,
  RedactedVideoPost,
  VideoPost,
} from 'generated/graphql'

export type RedactedVideo = RedactedOnDemandPost | RedactedVideoPost

export type VideoPostProps =
  | OnDemandPost
  | RedactedOnDemandPost
  | RedactedVideoPost
  | VideoPost

export type VideosScrollerProps = {
  sectionTitle?: string
  sectionUrl?: string
  hasMoreLink?: boolean
  items?: VideoPostProps[]
}

export type VideosGridProps = {
  sectionTitle?: string
  items?: VideoPostProps[]
}

export type VideoPostCardProps = {
  id: string
  title: string
  url?: string
  description?: string
  thumbnail?: string
  mediaLength?: number
  countViews?: number
  isExclusive?: boolean
  isGeolocked?: boolean
}

export type AvailableVideoPost = VideoPost | OnDemandPost