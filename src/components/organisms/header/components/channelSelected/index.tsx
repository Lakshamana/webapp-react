import { ChevronDown } from "react-feather";
import { Container, Text } from "components";
import { PropsChannelSelected } from "../../types";
import { ChannelIcon, IconContainer } from "./styles";
import { colors } from "styles";

const ChannelSelected = ({ selected, open }: PropsChannelSelected) => (
  <Container alignItems="center">
    <Container alignItems="center" flexDirection="column" mr={2}>
      <Text lineHeight={1} fontSize={14} color={colors.white}>
        Select
      </Text>
      <Text lineHeight={1} fontSize={14} color={colors.white}>
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
      <ChevronDown color={colors.white} />
    </IconContainer>
  </Container>
);

export { ChannelSelected };
