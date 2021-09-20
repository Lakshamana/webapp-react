import { useState } from "react";
import { ChevronDown } from "react-feather";
import { Text, Container, Popover } from "components";
import { Props, defaultProps } from "./types";
import { CustomContainer, ChannelIcon, IconContainer } from "./styles";

const ChannelSelector = ({
  onSelect,
  channels,
  selected,
  ...props
}: Props): any => {
  const [open, setOpen] = useState(false);
  return (
    <CustomContainer {...props} mx={2} px={2}>
      <Popover
        props={{
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        trigger={
          <button>
            <Container alignItems="center">
              <Container flexDirection="column" mr={2}>
                <Text lineHeight={1} fontSize={14} color="white">
                  Select
                </Text>
                <Text lineHeight={1} fontSize={14} color="white">
                  channel:
                </Text>
              </Container>
              {selected ? (
                <Container alignItems="center">
                  <ChannelIcon height={48} width={48} src={selected} />
                  <IconContainer {...{ open }}>
                    <ChevronDown color="white" />
                  </IconContainer>
                </Container>
              ) : (
                <></>
              )}
            </Container>
          </button>
        }
      >
        <Container>
          <Text>Hola</Text>
        </Container>
      </Popover>
    </CustomContainer>
  );
};

ChannelSelector.defaultProps = defaultProps;

export { ChannelSelector };
