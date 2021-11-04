import { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleButton } from 'components';

export default {
  title: 'WEBAPP/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
  const [checked, setChecked] = useState(false)
  return <ToggleButton {...args} checked={checked} onChange={() => setChecked(!checked)} />;
}

export const Component = Template.bind({});
Component.args = {
};