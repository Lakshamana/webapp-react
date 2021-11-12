import { VoteProps, defaultProps } from "./types";
import { Flex } from "@chakra-ui/react";
import { Text } from "components/atoms";
import { Icon } from "@iconify/react-with-api";

const Vote = ({ type, votes }: VoteProps) => (
  <Flex alignItems="center">
    {(type === "upvote" || !type) && (
      <Icon width={20} height={20} icon="mdi:thumb-up-outline" />
    )}
    {type === "downvote" && (
      <Icon width={20} height={20} icon="mdi:thumb-down-outline" />
    )}
    <Text ml={2} mt={1}>
      {votes}
    </Text>
  </Flex>
);

Vote.defaultProps = defaultProps;

export { Vote };
