import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AlertComponent } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Alert',
  component: AlertComponent,
  viewMode: 'docs'
} as ComponentMeta<typeof AlertComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertComponent> = (args) => (
  <AlertComponent {...args} />
)

export const Component = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  type: 'error',
  closeable: true,
}
