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

export const Error = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {
  description:
    'Ops! Something is wrong here!',
  type: 'error',
  closeable: true
}

export const Warning = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
  description:
    'Warning! Consider yourself warned.',
  type: 'warning',
  closeable: true
}

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  description:
    'Hey, this is a info. Consider yourself informed.',
  type: 'info',
  closeable: true
}

export const Success = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  description:
    'Do you believe it is really working?',
  type: 'success',
  closeable: true
}
