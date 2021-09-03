import React from "react";
import { Container, Text } from "components";

import { Props } from "./types";

import { Icon, Reaction } from "./styles";

const ReactionBar = ({
  reactions = [],
  totalReactions,
  reactionsTitle
}: Props) => (
  <Container alignItems="center">
    <Container>
      <Container>
        {reactions.map(reaction => (
          <Reaction p={1} mr={1} minWidth={50} height={25}>
            <Text kind="regular">{reaction.value}</Text>
            <Text kind="regular" ml={2}>
              {reaction.count}
            </Text>
          </Reaction>
        ))}
      </Container>
      <Container>
        <Reaction onClick={() => {}}>
          <Icon src="plus-icon" />
          <Icon src="add-icon" />
        </Reaction>
      </Container>
    </Container>
    <Container ml={2}>
      <Text kind="regular">{`${totalReactions} ${reactionsTitle}`}</Text>
    </Container>
  </Container>
);

export { ReactionBar };
