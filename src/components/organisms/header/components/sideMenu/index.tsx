import { Icon } from "@iconify/react-with-api";
import { Link } from "react-router-dom";
import { Container, Text } from "components";
import { SideUserInfo } from "..";

import { PropsSideMenu } from "../../types";
import { SideContainer, ScrollContainer, ExitContainer } from "./styles";
import { colors } from "styles";

const SideMenu = ({ open, data, user, colorMode }: PropsSideMenu) => (
  <SideContainer display="block" {...{ open }}>
    <ScrollContainer
      flexDirection="column"
      display={open ? "flex" : "none"}
      my={3}
    >
      <SideUserInfo {...{ user }} />
      {data?.map((item: any) => (
        <Link to={item.url} key={`Path-${item.id}`}>
          <Container width={1} pl={3} py={3}>
            <Text
              style={{ textTransform: "uppercase" }}
              color={colors.secondaryText[colorMode]}
            >
              {item.label}
            </Text>
          </Container>
        </Link>
      ))}
      <Container>
        <ExitContainer
          display="flex"
          align-items="center"
          width={1}
          pl={3}
          py={3}
        >
          <Icon
            width={20}
            height={20}
            icon="mdi:power"
            color={colors.secondaryText[colorMode]}
          />

          <Text color={colors.secondaryText[colorMode]} ml={2}>
            Sair
          </Text>
        </ExitContainer>
      </Container>
    </ScrollContainer>
  </SideContainer>
);

export { SideMenu };
