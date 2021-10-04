import { Box, Flex, Spacer } from "@chakra-ui/react"
import { pxToRem } from "styles/metrics";
import { theme } from "styles/theme"
import { Vote } from "components/atoms";
import { Comment, PostDetails } from "components/molecules";

const ComponentsUsage = () => {
  const post = {
    title: 'Signs You Have Internal Resistance.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
  }

  return (
    <Box color={theme.colors.textLight}>
      <Box background={theme.colors.cardBackground} w={pxToRem(144)} mb={pxToRem(24)}>
        PX_TO_REM SAMPLE
      </Box>

      <Flex w="fit-content" mb={4}>
        <Vote type="upvote" votes={"1.3K"} />
        <Spacer w={3} />
        <Vote type="downvote" votes={"29"} />
      </Flex>

      <PostDetails
        title={post.title}
        description={post.description}
      />

      <Box mt={6}>
        <Comment
          userName="User name"
          createdAt="2 min ago"
          comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
        />
      </Box>
    </Box>
  )
}

export { ComponentsUsage }
