import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardContainer } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'WEBAPP/CardContainer',
    component: CardContainer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    //   argTypes: {
    //     backgroundColor: { control: 'color' },
    //   },
} as ComponentMeta<typeof CardContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CardContainer> = (args) => <CardContainer {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {};