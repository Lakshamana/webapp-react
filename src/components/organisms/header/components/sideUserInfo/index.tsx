import { Icon } from "@iconify/react-with-api";
import { Container, Text } from "components";

import { PropsSideUserInfo } from "../../types";
import { UserContainer, CircleImage, SettingsContainer } from "./styles";
import { colors } from "styles";

const SideUserInfo = ({ user }: PropsSideUserInfo) => (
  <UserContainer
    py={2}
    mx={3}
    display="flex"
    justifyContent="space-between"
    alignItems="center"
  >
    <Container alignItems="center">
      <Container ml={2}>
        <CircleImage width={50} height={50} src={user?.avatar} />
      </Container>
      <Container mx={2} maxWidth={["150px"]}>
        <Text ellipsis color={colors.white}>
          {user?.name || ""}
        </Text>
      </Container>
    </Container>
    <SettingsContainer mr={2} display="flex" alignItems="center" p={2}>
      <Icon
        width={20}
        height={20}
        icon="mdi:power"
        color={colors.blue["300"]}
      />
    </SettingsContainer>
  </UserContainer>
);

export { SideUserInfo };
