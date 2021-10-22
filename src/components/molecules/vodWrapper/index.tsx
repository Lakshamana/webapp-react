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

const VODWrapper = () => {
  const playerRef = useRef(null);

  const videoJsOptions = { // lookup the options in the docs for more options
    autoplay: true,
    controls: true,
    muted: true,
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
        // debug: true,
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
      chromecast: {
        addButtonToControlBar: false,
        appId: "10AE2759",
        metadata: {
          title: "Title",
          subtitle: "Subtitle"
        }
      },
    },
    sources: [{
      src: 'https://d2px8cfctghvms.cloudfront.net/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/cmaf/5ed95110e04f4c0004b37ed3_5ed964dce04f4c000415fecf_6116d80199bea6002c59561a.m3u8',
      type: 'application/x-mpegURL'
    }]
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // you can handle player events here
    player?.on('waiting', () => {
      console.log('player is waiting');
    });

    player?.on('dispose', () => {
      console.log('player will dispose');

      player.registerPlugin('qualityLevel', videoJsContribQualityLevels)
      player.registerPlugin('hlsQualitySelector', videoJsHlsQualitySelector)
      player.registerPlugin('overlay', overlay)

      player.registerPlugin('vttThumbnails', videoJsVttThumbnails)

      console.log('--- REGISTER PLUGINS!')
    });

    player?.on('ready', () => {
      console.log('--- PLAYER READY!')
      
      player.chromecast();

      player.overlay({
        overlays: [{
          start: 1,
          end: 15,
          content: 'AAAAAAAAA',
          align: 'center'
        }]
      })

      player.vttThumbnails({
        src: 'https://s3.amazonaws.com/ondemand-prod.destination/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/thumbnails/80p.vtt',
        showTimestamp: true,
      })

      console.log('PLAYER', player.activePlugins_)
    })
  };

  return (
    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
  );
}

export { VODWrapper }