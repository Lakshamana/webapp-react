import { ComponentStory, ComponentMeta } from "@storybook/react";

import { VideoRelated } from "components/molecules";
import { dataVideoRelated } from "modules/livechat/mock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WEBAPP/Video Related",
  component: VideoRelated,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof VideoRelated>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VideoRelated> = (args) => (
  <VideoRelated {...args} />
);

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  options: dataVideoRelated,
};
