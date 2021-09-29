import { VoteProps, defaultProps } from './types';
import { Flex } from "@chakra-ui/react"
import { Text } from "components/atoms"
import * as Icon from "react-feather";

const Vote = ({ type, votes }: VoteProps) => (
  <Flex alignItems="center">
    { (type === "upvote" || !type) && (
      <Icon.ThumbsUp />
    )}
    { (type === "downvote") && (
      <Icon.ThumbsDown />
    )}
    <Text ml={2} mt={1}>
      { votes }
    </Text>
  </Flex>
)

Vote.defaultProps = defaultProps

export { Vote }
