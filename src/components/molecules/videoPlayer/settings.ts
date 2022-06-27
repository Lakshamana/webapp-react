import { dependencies } from './../../../../package.json';
const { REACT_APP_MUX_KEY } = process.env


export const getDefaultConfigs = (
  src,
  muxConfig = {},
  userId,
  videoId,
  categoryId,
  title,
  subtitle,
  post_type,
  video_duration,
  video_stream_type,
  organization_id,
  channel_id,
  organization_url,
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
        env_key: REACT_APP_MUX_KEY,
        viewer_user_id: userId || '',
        video_id: videoId || '',
        video_title: title || '',
        video_series: categoryId || '',
        player_name: 'Video.js',
        player_init_time: Date.now(),
        video_stream_type: post_type, // de acordo com o isLiveStream no videoplayer 'onDemand or livestream'
        // Site Metadata
        experiment_name: '',
        page_type: 'watchpage',
        view_session_id: '', // ainda não tem
        // Player Metadata
        player_version: dependencies['video.js'],
        // Video Metadata
        video_duration: video_duration || null, //miliseconds
        video_content_type: video_stream_type,
        video_producer: organization_url,
        // CUSTOM Metadata
        custom_1: organization_id,
        custom_2: channel_id,
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
