import { Link } from "react-router-dom";
import { Power } from "react-feather";
import { Container, Text } from "components";
import { SideUserInfo } from "..";

import { PropsSideMenu } from "../../types";
import { SideContainer, ScrollContainer, ExitContainer } from "./styles";
import { colors } from "styles";

const SideMenu = ({ open, data, user }: PropsSideMenu) => (
  <SideContainer
    backgroundColor={colors.black}
    display={["block", "block", "block", "none"]}
    {...{ open }}
  >
    <ScrollContainer
      flexDirection="column"
      display={open ? "flex" : "none"}
      my={3}
    >
      <SideUserInfo {...{ user }} />
      {data?.map((item: any) => (
        <Link to={item.url} key={`Path-${item.id}`}>
          <Container width={1} pl={3} py={3}>
            <Text style={{ textTransform: "uppercase" }} color={colors.white}>
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
          <Power color={colors.grey["700"]} width={20} height={20} />
          <Text color={colors.grey["700"]} ml={2}>
            Sair
          </Text>
        </ExitContainer>
      </Container>
    </ScrollContainer>
  </SideContainer>
);

export { SideMenu };
