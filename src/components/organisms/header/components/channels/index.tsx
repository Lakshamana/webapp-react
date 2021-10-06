import { Check } from "react-feather";
import { Container, Text } from "components";
import { PropsChannels } from "../../types";

import { ChannelIcon, ChannelItem, ChannelList } from "./styles";

const Channels = ({ channels, selected, onSelect }: PropsChannels) => (
  <Container flexDirection="column" width={1}>
    <ChannelList>
      {channels?.map((channel: any) => (
        <ChannelItem key={channel.id} py={2} onClick={() => onSelect(channel)}>
          <Container alignItems="center">
            <Container width="30px" justifyContent="center">
              {selected?.id === channel.id ? (
                <Check color="white" width={15} height={15} />
              ) : (
                <></>
              )}
            </Container>
            <ChannelIcon ml={2} height={36} width={36} src={channel.url} />
            <Text ml={2} color="white">
              {channel.name}
            </Text>
          </Container>
        </ChannelItem>
      ))}
    </ChannelList>
  </Container>
);

export { Channels };
