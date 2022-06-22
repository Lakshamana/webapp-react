export const getDefaultConfigs = (
  src,
  muxConfig = {},
  userId,
  videoId,
  categoryId,
  title,
  subtitle,
  post_type,
) => ({
  autoplay: true,
  controls: true,
  muted: true,
  responsive: true,
  fill: true,
  fluid: false,
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
        env_key: 'f79842543033c226c5d396a7d',
        viewer_user_id: userId || '',
        video_id: videoId || '',
        video_title: title || '',
        video_series: categoryId || '',
        player_name: 'Clappr-ContentVideo',
        player_init_time: Date.now(),
        video_stream_type: post_type || '',
        ...muxConfig,
      },
    },
    chromecast: {
      appId: '10AE2759',
      metadata: {
        title: title || 'Title',
        subtitle: subtitle || 'Subtitle',
      },
    },
  },
  sources: [
    {
      src,
      type: 'application/x-mpegURL',
    },
  ],
})
