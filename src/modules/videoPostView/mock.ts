const muxConfig = {
  env_key:  'f79842543033c226c5d396a7d',
  viewer_user_id: 'viewer_user_id',
  video_id: 'video_id',
  video_title: 'title',
  video_series: 'series',
  player_name: 'Clappr-ContentVideo',
  player_init_time: Date.now(),
  video_stream_type: 'on-demand',
}

export const video = {
  title: 'Title lorem ipsum dolor sit amet consectetur elit sed do eiusmod tempor incididunt',
  subtitle: 'Ao saber que tem câncer, um professor passa a fabricar metanfetamina pelo futuro da família, mudando o destino de todos.',
  playerPros: {
    src: "https://d2px8cfctghvms.cloudfront.net/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/cmaf/5ed95110e04f4c0004b37ed3_5ed964dce04f4c000415fecf_6116d80199bea6002c59561a.m3u8",
    vttSrc: "https://s3.amazonaws.com/ondemand-prod.destination/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/thumbnails/80p.vtt",
    title: "Video Title",
    subtitle: "Video Subtitle",
    options: { autoplay: false },
    muxConfig: muxConfig,
  },
  totalReactions: 15,
  totalParticipants: 4,
  participants: [
    {
      id: 1,
      img: "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
    }
  ],
  totalComments: 999000,
  comments: [
    {
      userName: "User name",
      createdAt: "2 min ago",
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
      answers: [
        {
          userName: "User name",
          createdAt: "2 min ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        },
        {
          userName: "User name",
          createdAt: "2 min ago",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        }
      ]
    }
  ],
  relatedVideos: [
    {
      id: '421b47ffd946ca083b65cd668c6b17e6',
      image_url: 'https://via.placeholder.com/200x112', 
      title: 'Video title related to the video', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      id: '421b47ffd946ca083b65cd668c6b17e6',
      image_url: 'https://via.placeholder.com/200x112', 
      title: 'Video title related to the video', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    },
    {
      id: '421b47ffd946ca083b65cd668c6b17e6',
      image_url: 'https://via.placeholder.com/200x112', 
      title: 'Video title related to the video', 
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
    }
  ]
}