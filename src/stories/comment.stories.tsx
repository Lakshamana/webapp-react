import { Center } from '@chakra-ui/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CommentCard } from 'components/molecules'
import { useThemeStore } from 'services/stores/theme'

export default {
  title: 'WEBAPP/Comment',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => {
  const { colorMode, toggleColorMode } = useThemeStore()
  return (
    <Center
      width="600px"
      bgColor={colorMode !== 'dark' ? 'white' : 'black'}
      flexDir="column"
      padding="20px"
    >
      <CommentCard
        {...args}
      />
    </Center>
  )
}

export const Component = Template.bind({})
Component.args = {}
