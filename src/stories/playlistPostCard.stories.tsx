import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Center, Button } from '@chakra-ui/react'

import { PlaylistPostCard } from 'components';
import { useThemeStore } from 'services/stores/theme';

export default {
  title: 'WEBAPP/PlaylistPostCard',
  component: PlaylistPostCard,
} as ComponentMeta<typeof PlaylistPostCard>;

const Template: ComponentStory<typeof PlaylistPostCard> = (args) => {
  const { colorMode, toggleColorMode } = useThemeStore();

  return (
    <Flex flex={1} flexDir="column" width="550px">
      <Center mb="20px">
        <Button onClick={toggleColorMode}>
          Toggle colorMode
        </Button>
      </Center>
      <Center bgColor={colorMode !== 'dark' ? 'white' : 'black'}>
        <PlaylistPostCard {...args} />
      </Center>
    </Flex>
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
  ]
};