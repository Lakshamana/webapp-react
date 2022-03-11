import { AvailableVideoPost } from 'types/posts'

export interface VideoPlaylistProps {
  title?: string
  autoplay?: boolean
  videos?: AvailableVideoPost[]
}
