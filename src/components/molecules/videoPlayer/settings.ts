export const getDefaultConfigs = (src, muxConfig = {}, title = '', subtitle = '') => (
  {
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
)