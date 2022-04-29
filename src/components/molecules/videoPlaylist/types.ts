import { Post } from 'generated/graphql'

export interface VideoPlaylistProps {
  title?: string
  showAutoplay?: boolean
  videos?: Post[]
  activeVideo?: string
}
