import { Box } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VideoPlayer } from 'components';

export default {
  title: 'WEBAPP/VideoPlayer',
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => 
  <Box width={800} height={600}>
    <VideoPlayer {...args} />
  </Box>;

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

const overlays = [
  {
    start: 1,
    end: 15,
    content: 'AAAAAAAAA',
    align: 'center'
  }
]

export const Component = Template.bind({});
Component.args = {
  src: "https://d2px8cfctghvms.cloudfront.net/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/cmaf/5ed95110e04f4c0004b37ed3_5ed964dce04f4c000415fecf_6116d80199bea6002c59561a.m3u8",
  vttSrc: "https://s3.amazonaws.com/ondemand-prod.destination/5ed95110e04f4c0004b37ed3/ba77504d-2687-40f4-b75f-fdadaf1828a5/thumbnails/80p.vtt",
  title: "Video Title",
  subtitle: "Video Subtitle",
  overlays,
  muxConfig,
};