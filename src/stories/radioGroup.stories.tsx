import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RadioGroup } from "components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WEBAPP/RadioGroup",
  component: RadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  size: "sm",
  name: "option",
  title: "Options",
  defaultValue: "option1",
  radios: [
    {
      id: "1",
      value: "option1",
      children: "Option 1",
      spacing: { pr: 3 },
      font: { color: "black" },
    },
    {
      id: "2",
      value: "option2",
      children: "Option 2",
      spacing: { pr: 3 },
      font: { color: "black" },
    },
  ],
};
