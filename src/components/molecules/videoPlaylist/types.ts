import { VideoProps } from '../playlistPostCard/types'

export interface VideoPlaylistProps {
  title?: string;
  autoplay?: boolean;
  videos?: Array<VideoProps>
}