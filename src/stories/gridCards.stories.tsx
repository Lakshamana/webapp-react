import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GridCards } from 'components/molecules';
import { VideoPostCard, CategoryPostCard } from 'components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/GridCards',
  component: GridCards,
  subcomponents: { VideoPostCard, CategoryPostCard }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
} as ComponentMeta<typeof GridCards>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof GridCards> = (args) => <GridCards {...args} />;

export const OneItem  = (args: any) => (
  <GridCards {...args}>
    <CategoryPostCard id='154541' thumbnail='https://multiversomais.com/wp-content/uploads/2021/07/hbo-max-preco-data-brasil_se2f.h720.png' />
    <CategoryPostCard id='154541' thumbnail='https://multiversomais.com/wp-content/uploads/2021/07/hbo-max-preco-data-brasil_se2f.h720.png' />
    <CategoryPostCard id='154541' thumbnail='https://multiversomais.com/wp-content/uploads/2021/07/hbo-max-preco-data-brasil_se2f.h720.png' />
    <CategoryPostCard id='154541' thumbnail='https://multiversomais.com/wp-content/uploads/2021/07/hbo-max-preco-data-brasil_se2f.h720.png' />
  </GridCards>
);
