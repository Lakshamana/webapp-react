import { useState, memo } from "react";
import { Container, ChannelSelector, Tab, Logo } from "components";

import { menuTabs } from "./settings";
import { Props, defaultProps } from "./types";

const HeaderComponent = (props: Props) => {
  const theme = { black: "#000" };
  const background = theme.black;

  const [selected, setSelected] = useState();

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
        <ChannelSelector />
      </Container>
      <Container>
        {menuTabs.map((tab: any) => (
          <Tab
            mx={2}
            key={tab.id}
            link={tab.link}
            selected={selected === tab.label}
            onSelect={() => setSelected(tab.label)}
          >
            {tab.label}
          </Tab>
        ))}
      </Container>
      <Container mx={2}>
        <div style={{ background: "white", width: "150px" }}>SEARCH</div>
      </Container>
    </Container>
  );
};

HeaderComponent.defaultProps = defaultProps;

const Header = memo(HeaderComponent);

export { Header };
