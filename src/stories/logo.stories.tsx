import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  height: 38,
  width: 140 
};