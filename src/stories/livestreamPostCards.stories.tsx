import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LivestreamPostCard } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/LivestreamPostCard',
  component: LivestreamPostCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof LivestreamPostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LivestreamPostCard> = (args) => <LivestreamPostCard {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  id: '5451321230',
  postTitle: 'Test',
  postUrl:'',
  coverImage: 'https://multiversomais.com/wp-content/uploads/2021/07/hbo-max-preco-data-brasil_se2f.h720.png',
  mediaLength: 45,
  views: 30,
  isExclusive: false,
  isGeolocked: false,
};