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
}