import { VoteProps, defaultProps } from "./types";
import { Flex } from "@chakra-ui/react";
import { Text } from "components/atoms";
import { Icon } from "@iconify/react";

const Vote = ({ type, votes }: VoteProps) => (
  <Flex alignItems="center">
    {(type === "upvote" || !type) && (
      <Icon width={18} height={18} icon="mdi:thumb-up-outline" />
    )}
    {type === "downvote" && (
      <Icon width={18} height={18} icon="mdi:thumb-down-outline" />
    )}
    <Text ml={2} mt={1} fontSize={14} fontWeight={"bold"}>
      {votes}
    </Text>
  </Flex>
);

Vote.defaultProps = defaultProps;

export { Vote };
