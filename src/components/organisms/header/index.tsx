import { useState, memo } from "react";
import { Container, Logo } from "components";
import { Tabs, UserInfo, ChannelSelector } from "./atoms";

import { CHANNELS } from "./settings";
import { Props, Channel, defaultProps } from "./types";

const HeaderComponent = (props: Props) => {
  const theme = { black: "#000" };
  const background = theme.black;

  const [selected, setSelected] = useState();
  const [channels, setChannels] = useState<Array<Channel>>(CHANNELS);

  const handleChannelSearch = (value: any) =>
    setChannels(CHANNELS.filter((channel) => channel.name.includes(value)));

  const handleChannelSelect = (value: any) => setSelected(value);

  return (
    <Container
      height={[70, 70, 70, 100]}
      width={1}
      alignItems="center"
      backgroundColor={background}
      {...props}
    >
      <Logo mx={3} />
      <Container mx={2}>
        <ChannelSelector
          onSelect={handleChannelSelect}
          onSearch={handleChannelSearch}
          {...{ channels, selected }}
        />
      </Container>
      <Container>
        <Tabs {...{ selected, setSelected }} />
      </Container>
      <Container mx={2}>
        <div style={{ background: "white", width: "150px" }}>SEARCH</div>
      </Container>
      <UserInfo
        user={{
          name: "Jorge Hidalgo",
          id: "11-user",
          avatar:
            "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
        }}
      />
    </Container>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
