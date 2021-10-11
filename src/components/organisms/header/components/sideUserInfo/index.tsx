import { Settings } from "react-feather";
import { Container, Text } from "components";

import { PropsSideUserInfo } from "../../types";
import { CircleImage } from "../userInfo/styles";
import { UserContainer, SettingsContainer } from "./styles";
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
      <Settings color={colors.blue["300"]} height={20} width={20} />
    </SettingsContainer>
  </UserContainer>
);

export { SideUserInfo };
