import { Post } from 'generated/graphql'

export interface VideoPlaylistProps {
  title?: string
  autoplay?: boolean
  videos?: Post[]
}
