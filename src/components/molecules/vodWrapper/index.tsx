import { useRef } from 'react'

import VideoJS from "components/molecules/videoJs"

import videoJsContribQualityLevels from 'videojs-contrib-quality-levels'
import videoJsHlsQualitySelector from 'videojs-hls-quality-selector'

import overlay from 'videojs-overlay'
import 'videojs-overlay/dist/videojs-overlay.css'

import videoJsVttThumbnails from 'videojs-vtt-thumbnails'
import 'videojs-vtt-thumbnails/dist/videojs-vtt-thumbnails.css'

import '@silvermine/videojs-chromecast/dist/silvermine-videojs-chromecast.css'

import 'videojs-mux'

const VODWrapper = ({ src, title, subtitle, vttSrc, overlays, muxConfig, options }: any): any => {
  const playerRef = useRef(null);

  const defaultOptions = { // lookup the options in the docs for more options1
    autoplay: true,
    controls: true,
    muted: false,
    responsive: true,
    fill: true,
    fluid: true,
    preload: 'auto',
    preloadWebComponents: true,
    techOrder: ['chromecast', 'html5'],
    html5: {
      hls: {
        enableLowInitialPlaylist: true,
        smoothQualityChange: true,
        overrideNative: true,
      },
    },
    playbackRates: [0.5, 1, 1.5, 2],
    plugins: {
      hlsQualitySelector: {
          vjsIconClass: 'vjs-icon-hd',
          displayCurrentQuality: true,
      },
      mux: {
        data: {
          env_key:  'f79842543033c226c5d396a7d',
          viewer_user_id: 'viewer_user_id',
          video_id: 'video_id',
          video_title: title || 'title',
          video_series: 'series',
          player_name: 'Clappr-ContentVideo',
          player_init_time: Date.now(),
          video_stream_type: 'on-demand',
          ...muxConfig,
        }
      },
      chromecast: {
        appId: "10AE2759",
        metadata: {
          title: title || "Title",
          subtitle: subtitle || "Subtitle"
        }
      },
    },
    sources: [{
      src,
      type: 'application/x-mpegURL'
    }]
  }

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
    src && <VideoJS options={{...defaultOptions, ...options}} onReady={handlePlayerReady} />
  );
}

export { VODWrapper }