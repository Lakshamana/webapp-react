import { PostType } from "generated/graphql";

export interface VideoPlayerProps {
  src: string;
  title?: string | undefined;
  isLiveStream?: boolean;
  subtitle?: string | undefined;
  vttSrc?: string | undefined;
  overlays?: Array<Object> | undefined;
  muxConfig?: Object | undefined;
  options?: Object | undefined;
  skin?: string | undefined;
  poster?: string;
  isMuted?: boolean;
  setVolumeValue?: number;
  videoId?: string
  categoryId?: string;
  post_type?: PostType | string;
}