import { ChevronDown } from "react-feather";
import { Container, Text } from "components";
import { PropsSelectedChannel } from "../../types";
import { ChannelIcon, IconContainer } from "../../styles";

const SelectedChannel = ({ selected, open }: PropsSelectedChannel) => (
  <Container alignItems="center">
    <Container alignItems="center" flexDirection="column" mr={2}>
      <Text lineHeight={1} fontSize={14} color="white">
        Select
      </Text>
      <Text lineHeight={1} fontSize={14} color="white">
        channel:
      </Text>
    </Container>
    {selected ? (
      <Container alignItems="center">
        <ChannelIcon height={48} width={48} src={selected.url} />
      </Container>
    ) : (
      <></>
    )}
    <IconContainer {...{ open }}>
      <ChevronDown color="white" />
    </IconContainer>
  </Container>
);

export { SelectedChannel };
