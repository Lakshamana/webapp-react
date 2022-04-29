import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Grid } from '@chakra-ui/layout'
import { Button } from 'components'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'WEBAPP/Button',
  component: Button,
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Grid gridGap={4} templateColumns="repeat(4, 1fr)">
      <Button label="Solid" variant="solid"></Button>
      <Button iconName={'email'} label="icon" variant="solid"></Button>
      <Button label="Disable" disabled></Button>
      <Button variant="solid" isLoading></Button>

      <Button label="outline" variant="outline"></Button>
      <Button iconName={'home'} label="icon" variant="outline"></Button>
      <Button label="Disable" variant="outline" disabled></Button>
      <Button variant="outline" isLoading></Button>

      <Button label="ghost" variant="ghost"></Button>
      <Button iconName={'home'} label="icon" variant="ghost"></Button>
      <Button label="Disable" variant="ghost" disabled></Button>
      <Button variant="ghost" isLoading></Button>

      <Button label="link" variant="link"></Button>
      <Button iconName={'arrow'} label="icon" variant="link"></Button>
      <Button label="Disable" variant="link" disabled></Button>
      <Button variant="link" isLoading></Button>

      <Button
        label="Custom"
        backgroundColor={'white'}
        borderColor="green"
        color={'green'}
        variant="unstyled"
      ></Button>
      <Button
        iconName={'arrow'}
        label="Icon"
        variant="unstyled"
        backgroundColor={'white'}
        borderColor="green"
        color={'green'}
      ></Button>
      <Button
        label="Disable"
        variant="unstyled"
        disabled
        backgroundColor={'white'}
        borderColor="green"
        color={'green'}
      ></Button>
      <Button
        variant="unstyled"
        isLoading
        backgroundColor={'white'}
        borderColor="green"
        color={'green'}
      ></Button>
    </Grid>
  </div>
)

export const Component = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  label: 'Click on me',
  variant: 'outline',
}
