import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Alert',
  component: Link,
  viewMode: 'docs',
} as ComponentMeta<typeof Link>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Component = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  label: 'I am a link',
  externalLink: 'https://develop.fanhero.tv/',
  children: <></>,
}
