import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VideoPostCard } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/VideoPostCard',
  component: VideoPostCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof VideoPostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoPostCard> = (args) => <VideoPostCard {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  id: '5451321230',
  title: 'Test',
  url:'',
  thumbnail: 'https://www.sagrado.edu/wp-content/uploads/bb-plugin/cache/radio-visual-panorama.jpg',
  mediaLength: 45,
  countViews: 30,
  isExclusive: false,
  isGeolocked: false,
};