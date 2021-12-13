import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AlertCard } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/AlertCard',
  component: AlertCard,
  viewMode: 'docs'
} as ComponentMeta<typeof AlertCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertCard> = (args) => (
  <AlertCard {...args} />
)

export const Error = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'error',
  actionLabel: 'Lorem ipsum'
}

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'success',
  actionLabel: 'Lorem ipsum'
}
