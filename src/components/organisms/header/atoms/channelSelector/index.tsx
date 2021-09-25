import { useState } from "react";
import { Container, Popover } from "components";
import { Channels, Search, SelectedChannel } from "./atoms";

import { Props, defaultProps } from "./types";
import { CustomContainer } from "./styles";

const ChannelSelector = ({
  onSelect,
  onSearch,
  channels,
  selected,
  ...props
}: Props): any => {
  const theme = { black: "#222222" };
  const background = theme.black;

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
    <CustomContainer {...props} mx={2} px={2} height={[50]}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background={background}
        trigger={
          <button>
            <SelectedChannel {...{ selected, open }} />
          </button>
        }
      >
        <Container flexDirection="column">
          <Search {...{ search }} onChange={handleSearch} />
          <Channels onSelect={handleSelect} {...{ channels, selected }} />
        </Container>
      </Popover>
    </CustomContainer>
  );
};

ChannelSelector.defaultProps = defaultProps;

export { ChannelSelector };
