import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilterButton } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/FilterButton',
  component: FilterButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof FilterButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FilterButton> = (args) => <FilterButton {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  label: 'Filter by',
  options: [
    { label: 'Most recent', value: 'recent' },
    { label: 'Most liked', value: 'liked' }
  ]
};