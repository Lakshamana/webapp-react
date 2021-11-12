import { Container, Text, Popover } from "components";
import { Icon } from "@iconify/react-with-api";

import { Props } from "./types";

import { availableReactions } from "./settings";
import { Reaction } from "./styles";

const ReactionBar = ({
  reactions = [],
  totalReactions,
  reactionsTitle,
}: Props) => (
  <Container alignItems="center">
    <Container>
      <Container>
        {reactions.map((reaction) => (
          <Reaction
            key={`${reaction.value}-reaction`}
            p={1}
            mr={1}
            minWidth={50}
            minHeight={32}
          >
            <div>{reaction.value}</div>
            <Text kind="regular" ml={2}>
              {reaction.count}
            </Text>
          </Reaction>
        ))}
      </Container>
      <Container>
        <Reaction>
          <Popover
            trigger={
              <button>
                <Reaction p={1} mr={1} minWidth={50} minHeight={32}>
                  <Icon width={20} height={20} icon="mdi:plus" />
                  <Icon
                    width={20}
                    height={20}
                    icon="mdi:emoticon-happy-outline"
                  />
                </Reaction>
              </button>
            }
          >
            <Container flexWrap="wrap">
              {availableReactions.map((reaction) => (
                <Reaction key={`${reaction.value}-popover`} p={1} m={1}>
                  {reaction.value}
                </Reaction>
              ))}
            </Container>
          </Popover>
        </Reaction>
      </Container>
    </Container>
    <Container ml={2}>
      <Text
        kind="regular"
        fontWeight={500}
      >{`${totalReactions} ${reactionsTitle}`}</Text>
    </Container>
  </Container>
);

export { ReactionBar };
