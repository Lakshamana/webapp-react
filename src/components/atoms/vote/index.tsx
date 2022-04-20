import { Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Text } from "components/atoms";
import { colors } from 'styles'
import { VoteProps, defaultProps } from "./types";
import { useThemeStore } from 'services/stores'

const Vote = ({ type, votes }: VoteProps) => {
  const { colorMode } = useThemeStore()

  return (
    <Flex alignItems="center" _hover={{ color: colors.brand.primary[colorMode] }}>
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
  )
}

Vote.defaultProps = defaultProps;

export { Vote };
