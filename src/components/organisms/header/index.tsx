import { useState, memo } from "react";
import { Container, Logo } from "components";
import { Tabs, UserInfo, ChannelSelector, Search } from "./atoms";

import { CHANNELS } from "./settings";
import { Props, Channel, defaultProps } from "./types";

const HeaderComponent = (props: Props) => {
  const theme = { black: "#000" };
  const background = theme.black;

  const [selected, setSelected] = useState();
  const [search, setSearch] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [channel, setChannel] = useState();
  const [channels, setChannels] = useState<Array<Channel>>(CHANNELS);

  const handleChannelSearch = (value: any) =>
    setChannels(CHANNELS.filter((channel) => channel.name.includes(value)));

  const handleChannelSelect = (value: any) => setChannel(value);

  const handleSearch = (evt: any) => setSearch(evt.target.value);

  const handleCloseSearch = () => {
    setSearch("");
    setOpenSearch(false);
  };

  return (
    <Container
      height={[70, 70, 70, 100]}
      width={1}
      alignItems="center"
      justifyContent="space-between"
      backgroundColor={background}
      {...props}
    >
      <Container alignItems="center">
        <Logo mx={4} />
        <ChannelSelector
          onSelect={handleChannelSelect}
          onSearch={handleChannelSearch}
          selected={channel}
          {...{ channels }}
        />
        <Tabs {...{ selected, setSelected }} />
      </Container>
      <Container alignItems="center">
        <Search
          open={openSearch}
          onOpen={() => setOpenSearch(!openSearch)}
          onClose={handleCloseSearch}
          onSearch={handleSearch}
          {...{ search }}
        />
        <UserInfo
          user={{
            name: "Jorge Hidalgo",
            id: "11-user",
            avatar:
              "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
          }}
        />
      </Container>
    </Container>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
