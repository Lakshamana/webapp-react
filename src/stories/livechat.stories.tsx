import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Livechat } from "components/molecules";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WEBAPP/Livechat",
  component: Livechat,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Livechat>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Livechat> = (args) => (
  <Livechat {...args} />
);

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  dataChat: Array.from({ length: 8 }).map((e) => ({
    iconUrl: "",
    date: "01/01/2001",
    username: "Yuri Mustifaga",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    isOwnUser: false,
  })),
  title: "Livechat",
};
