import { memo, ReactElement, useEffect, useRef } from 'react'
import VideoJS from 'components/molecules/videoJs'
import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'
import overlay from 'videojs-overlay'
import 'videojs-overlay/dist/videojs-overlay.css'
import videoJsVttThumbnails from 'videojs-vtt-thumbnails'
import 'videojs-vtt-thumbnails/dist/videojs-vtt-thumbnails.css'
import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'
import 'videojs-mux'
import { useCustomizationStore } from 'services/stores'

import { VideoPlayerProps } from './types'
import { getDefaultConfigs } from './settings'
import { SHOW_NEXT_VIDEO_IN, VIDEO_MUTED, VIDEO_VOLUME } from 'config/constants'
import { useAuthStore, useChannelsStore, useOrganizationStore, useVideoPlayerStore } from 'services/stores'
import { saveData } from 'services/storage'

const VideoPlayerComponent = ({
  src,
  title,
  isLiveStream,
  subtitle,
  vttSrc,
  poster,
  overlays,
  muxConfig,
  options,
  isMuted,
  setVolumeValue,
  videoId,
  categoryId,
  post_type,
  video_duration,
}: VideoPlayerProps): ReactElement => {
  const { activeChannelConfig } = useCustomizationStore()
  const playerRef = useRef(null)
  const setEndedVideo = useVideoPlayerStore((state) => state.setEndedVideo)
  const setRemainingTime = useVideoPlayerStore((state) => state.setRemainingTime)
  const { account } = useAuthStore()
  const { organization } = useOrganizationStore()
  const { activeChannel } = useChannelsStore()

  const defaultOptions = getDefaultConfigs(
    src,
    muxConfig,
    account?.id,
    videoId,
    categoryId,
    title,
    subtitle,
    isLiveStream ? 'livestream': 'onDemand',
    video_duration,
    post_type,
    organization?.id,
    activeChannel?.id,
    organization?.web_url?.[0],
  )

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    player?.on('dispose', () => {
      player.registerPlugin('qualityLevel', videoJsContribQualityLevels)
      player.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
      player.registerPlugin('overlay', overlay)
      player.registerPlugin('vttThumbnails', videoJsVttThumbnails)
    })
    player?.on('ready', () => {
      if (setVolumeValue) player.volume(setVolumeValue)
      player.chromecast()
      player.overlay({
        overlays: [...(overlays || [])],
      })
      if (vttSrc) {
        player.vttThumbnails({
          src: vttSrc,
          showTimestamp: true,
        })
      }
    })

    player?.on('ended', () => setEndedVideo(true))
    player?.on('volumechange', () => {
      const newVolumeValue = player.volume()
      saveData(VIDEO_VOLUME, newVolumeValue)
      const defineIsMuted = player.muted()
      saveData(VIDEO_MUTED, defineIsMuted)
    })
    player?.on('timeupdate', () => {
      const remainingTime = Math.round(player.remainingTime())
      const isRemainingTime = Boolean(remainingTime) && remainingTime < SHOW_NEXT_VIDEO_IN
      setRemainingTime(isRemainingTime)
    })
  }

  if (!src) return <></>

  return (
    <VideoJS
      options={{
        ...defaultOptions,
        muted: isMuted,
        ...(isLiveStream ? { playbackRates: undefined } : {}),
        ...(isLiveStream ? { liveui: true } : {}),
        ...options,
      }}
      islivestream
      skin={activeChannelConfig?.PLAYER.SKIN || ''}
      onReady={handlePlayerReady}
    />
  )
}

export const VideoPlayer = memo(VideoPlayerComponent)