import { useState } from "react";
import { Container, Popover } from "components";
import { Channels, ChannelSearch, ChannelSelected } from "..";

import { PropsChannelSelector } from "../../types";
import { defaultProps } from "./types";
import { CustomContainer } from "./styles";
import { colors } from "styles";

const ChannelSelector = ({
  onSelect,
  onSearch,
  channels,
  selected,
  ...props
}: PropsChannelSelector) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleSelect = (channel: any) => {
    onSelect(channel);
    setOpen(false);
  };

  return (
    <CustomContainer {...props} mx={2} px={3} height={[50]}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background={colors.backgroundLayout}
        trigger={
          <button>
            <ChannelSelected {...{ selected, open }} />
          </button>
        }
      >
        <Container flexDirection="column">
          <ChannelSearch {...{ search }} onChange={handleSearch} />
          <Channels onSelect={handleSelect} {...{ channels, selected }} />
        </Container>
      </Popover>
    </CustomContainer>
  );
};

ChannelSelector.defaultProps = defaultProps;

export { ChannelSelector };
