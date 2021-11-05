export interface PlaylistPostCardProps {
  videos?: Array<VideoProps>
}

export interface VideoProps {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
}