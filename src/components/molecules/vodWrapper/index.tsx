import { ReactElement, useRef } from 'react'

import VideoJS from "components/molecules/videoJs"

import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'

import overlay from 'videojs-overlay'
import 'videojs-overlay/dist/videojs-overlay.css'

import videoJsVttThumbnails from 'videojs-vtt-thumbnails'
import 'videojs-vtt-thumbnails/dist/videojs-vtt-thumbnails.css'

import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'

import 'videojs-mux'

import { VODWrapperProps } from './types'
import { getDefaultConfigs } from './settings'

const VODWrapper = ({ 
  src, 
  title, 
  subtitle, 
  vttSrc, 
  overlays, 
  muxConfig, 
  options 
}: VODWrapperProps): ReactElement => {

  const playerRef = useRef(null);

  const defaultOptions = getDefaultConfigs(src, muxConfig, title, subtitle)

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    player?.on('dispose', () => {
      player.registerPlugin('qualityLevel', videoJsContribQualityLevels)
      player.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
      player.registerPlugin('overlay', overlay)
      player.registerPlugin('vttThumbnails', videoJsVttThumbnails)
    });

    player?.on('ready', () => {
      player.chromecast();

      player.overlay({
        overlays: [...(overlays || [])]
      })

      if (vttSrc) {
        player.vttThumbnails({
          src: vttSrc,
          showTimestamp: true,
        })
      }

      console.log('PLAYER PLUGINS -', player.activePlugins_)
    })
  };

  return (
    src ? <VideoJS options={{...defaultOptions, ...options}} onReady={handlePlayerReady} /> : <></>
  );
}

export { VODWrapper }