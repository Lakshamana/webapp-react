import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VideoPlaylist } from "components/molecules";

export default {
  title: "WEBAPP/Video Playlist",
  component: VideoPlaylist,
} as ComponentMeta<typeof VideoPlaylist>;

const Template: ComponentStory<typeof VideoPlaylist> = (args) => (
  <VideoPlaylist {...args} />
);

export const Component = Template.bind({});
Component.args = {
  videos: [
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
  ],
  autoplay: true,
  title: "Videos related",
};
