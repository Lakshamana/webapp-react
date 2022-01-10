import { Center, Button } from "@chakra-ui/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Comment } from "components/molecules";
import { useThemeStore } from "services/stores/theme";

export default {
  title: "WEBAPP/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => {
  const { colorMode, toggleColorMode } = useThemeStore()
  return (
    <Center 
      width="600px" 
      bgColor={colorMode !== 'dark' ? 'white' : 'black'} 
      flexDir="column"
      padding="20px"
    >
      <Comment
        userName={args.userName}
        createdAt={args.createdAt}
        comment={args.comment}
        answers={args.answers}
      />
    </Center>
  )
}

export const Component = Template.bind({});
Component.args = {
  userName: "User name",
  createdAt: "2 min ago",
  comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  answers: [
    {
        userName: "User name",
        createdAt: "2 min ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
    {
        userName: "User name",
        createdAt: "2 min ago",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    }
  ]
};