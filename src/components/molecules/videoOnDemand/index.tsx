// @ts-nocheck
import { useCallback, useEffect, useState } from 'react'
import videoJS from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-mux'
import 'videojs-youtube'

require('videojs-contrib-quality-levels')
require('videojs-http-source-selector')
require('videojs-overlay')

require('@silvermine/videojs-chromecast')
require('videojs-vtt-thumbnails')

const defaultConfig = {
  playbackRates: [0.5, 1, 1.5, 2],
  controls: true,
  plugins: {
    httpSourceSelector: {
      default: 'auto'
    },
    mux: {
      debug: false,
      data: {
        env_key:  'f79842543033c226c5d396a7d',
        viewer_user_id: 'viewer_user_id',
        video_id: 'video_id',
        video_title: 'title',
        video_series: 'series',
        player_name: 'Clappr-ContentVideo',
        player_init_time: Date.now(),
        video_stream_type: 'on-demand',
      }
    },
  }
}

const VideoOnDemand = (props: any) => {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const config = Object.assign({}, props, defaultConfig)

    const player = videoJS(videoEl, config)

    if (player.hlsQualitySelector) {
      player.hlsQualitySelector({
        vjsIconClass: 'vjs-icon-hd',
        displayCurrentQuality: true,
      });
    }

    if (player.vttThumbnails) {
      player.vttThumbnails({
        src: `https://raw.githubusercontent.com/brenopolanski/html5-video-webvtt-example/master/MIB2-subtitles-pt-BR.vtt`,
        showTimestamp: true
      });
    }

    if (player.overlay) {
      player.overlay({
        overlays: [{

          // This overlay will appear when a video is playing and disappear when
          // the player is paused.
          start: 'playing',
          end: 'pause'
        }, {

          // This overlay will appear when the "custom1" event is triggered and
          // disappear when the "custom2" event is triggered.
          start: 'custom1',
          end: 'custom2'
        }]
      });
    }

    if (player.chromecast) {
      // initializes the Chromecast plugin
      player.chromecast();
    }

    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <h1>Implementation for Video JS on Demand</h1>
      <div data-vjs-player style={{ width: '100vh', height: '50vh' }}>
        <video ref={onVideo} className="video-js" playsInline />
      </div>
    </>
  )
}

export { VideoOnDemand }
