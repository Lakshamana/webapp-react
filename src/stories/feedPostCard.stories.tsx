import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeedPostCard } from "components/organisms";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WEBAPP/FeedPostCard",
  component: FeedPostCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof FeedPostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeedPostCard> = (args) => (
  <FeedPostCard {...args} />
);

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  postTitle: 'Test title', 
  postDescription: 'Description',
  countMessages: 1500,
  date: '3 days ago', 
  coverImage: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/the-100.jpg',
  hasActivity: true,
  mediaLength: '03:15',
  views: 30,
  displayViews: true,
  audioTitle: 'Test title',
  audioArtist: 'Artist',
  voteCount: 20,
  timeRemaining: '2 days',
  itemQuestion: 'Question test',
  percentage: '60%',
  winning: true,
  voted: true
};
