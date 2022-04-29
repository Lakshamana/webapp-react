import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Select } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  //   argTypes: {
  //     backgroundColor: { control: 'color' },
  //   },
} as ComponentMeta<typeof Select>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Component = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  spacing: { my: 2 },
  font: { fontSize: 14 },
  options: [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
  ],
}
