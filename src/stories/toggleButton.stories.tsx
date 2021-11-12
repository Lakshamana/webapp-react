import { useState } from 'react'
import { Center, Button } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToggleButton } from 'components';
import { useThemeStore } from "services/stores/theme";

export default {
  title: 'WEBAPP/ToggleButton',
  component: ToggleButton,
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => {
  const [checked, setChecked] = useState(false)
  const { colorMode, toggleColorMode } = useThemeStore()
  return (
    <Center 
      width="600px" 
      bgColor={colorMode !== 'dark' ? 'white' : 'black'} 
      flexDir="column"
    >
      <Center my="20px">
        <Button onClick={toggleColorMode}>
          Toggle colorMode
        </Button>
      </Center>
      <ToggleButton {...args} checked={checked} onChange={() => setChecked(!checked)} />
    </Center>
  )
}

export const Component = Template.bind({});
Component.args = {
};