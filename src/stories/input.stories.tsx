import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'WEBAPP/Input',
    component: Input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {};