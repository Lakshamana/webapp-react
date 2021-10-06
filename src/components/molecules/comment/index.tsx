import { CommentType, defaultProps } from './types';
import { Box, Flex, Spacer } from "@chakra-ui/react"
import { Vote, Text } from "components/atoms";
import { pxToRem } from "styles/metrics";
import { theme } from "styles/theme"

const Comment = ({
  userName,
  comment,
  createdAt
}: CommentType) => (
  <Box>
    <Flex alignItems="baseline">
      <Text
        color={theme.colors.textLight}
        kind="title"
        fontSize={pxToRem(28)}
        fontWeight={600}
      >
        { userName }
      </Text>
      <Text
        color={theme.colors.textMedium}
        kind="title"
        ml={3}
        fontSize={pxToRem(14)}
      >
        { createdAt }
      </Text>
    </Flex>
    <Text
      color={theme.colors.textLight}
      mt={2}
      fontSize={pxToRem(16)}
    >
      { comment }
    </Text>
    <Flex w="fit-content" mt={6} ml={1} color={theme.colors.whiteTransparent[200]}>
      <Vote type="upvote" votes={"1.3K"} />
      <Spacer w={6} />
      <Vote type="downvote" votes={"29"} />
    </Flex>
  </Box>
)

Comment.defaultProps = defaultProps

export { Comment }
