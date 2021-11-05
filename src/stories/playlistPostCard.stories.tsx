import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Center } from '@chakra-ui/react'

import { PlaylistPostCard } from 'components';

export default {
  title: 'WEBAPP/PlaylistPostCard',
  component: PlaylistPostCard,
} as ComponentMeta<typeof PlaylistPostCard>;

const Template: ComponentStory<typeof PlaylistPostCard> = (args) => (
  <Flex flex={1}>
    <Center bgColor="#444444">
      <PlaylistPostCard {...args} />
    </Center>
  </Flex>
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
  ]
};