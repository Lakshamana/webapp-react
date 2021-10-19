import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ChannelCards } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/ChannelCard',
  component: ChannelCards,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof ChannelCards>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChannelCards> = (args) => <ChannelCards {...args} />;

export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Card.args = {
    id: '1',
    name: 'Pumaman',
    image: 'https://d2ui6twqy19jn9.cloudfront.net/filters:format(webp):no_upscale():quality(90)/com.fanhero.5c926da8e117d200047d500e/photo/60f7103da4779e002a7ca549/original',
    url: '',
    text: 'test',
    isGeolocked: false,
    isExclusive: false
};