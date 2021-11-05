import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CollectionPostCard } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/CollectionPostCard',
  component: CollectionPostCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof CollectionPostCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CollectionPostCard> = (args) => <CollectionPostCard {...args} />;

export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  id: '65487451',
  collectionUrl: '',
  coverImage: 'https://www.elhombre.com.br/wp-content/uploads/2021/06/Breaking-Bad-traducao-8-600x337.jpg',
  collectionTitle: 'Test',
  isNew:'',
  newTag: '',
  isExclusive: false,
  isGeolocked: false
};