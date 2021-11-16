import { Center, Button } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VideoPlaylist } from "components/molecules";
import { useThemeStore } from "services/stores/theme";

export default {
  title: "WEBAPP/Video Playlist",
  component: VideoPlaylist,
} as ComponentMeta<typeof VideoPlaylist>;

const Template: ComponentStory<typeof VideoPlaylist> = (args) => {
  const { colorMode, toggleColorMode } = useThemeStore()
  return (
    <Center 
      width="600px" 
      bgColor={colorMode !== 'dark' ? 'white' : 'black'} 
      flexDir="column"
    >
      <Center my="20px">
        <Button onClick={toggleColorMode}>
          Toggle colorMode
        </Button>
      </Center>
      <VideoPlaylist {...args} />
    </Center>
  )
}

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
