import { Container, Text } from "components";
import { PropsUserInfo } from "../../types";
import { UserContainer, CircleImage } from "./styles";

const UserInfo = ({ user }: PropsUserInfo) => (
  <UserContainer px={1}>
    <Container mx={2} maxWidth={["150px"]}>
      <Text ellipsis color="white">
        {user?.name || ""}
      </Text>
    </Container>
    <Container mx={2}>
      <CircleImage width={50} height={50} src={user?.avatar} />
    </Container>
  </UserContainer>
);

export { UserInfo };
