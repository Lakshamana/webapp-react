import { Container, Text, Avatar } from "components";
import { colors } from "styles";

import { PropsUserSidebar } from "./types";
import { UserContainer, CircleImage } from "./styles";

const UserSidebar = ({ account }: PropsUserSidebar) => (
  <UserContainer
    py={2}
    display="flex"
    width={273}
    justifyContent="center"
    alignItems="center"
  >
    <Container alignItems="center">
      <Container ml={2}>
        {
          account?.avatar
            ? <CircleImage width={50} height={50} src={account?.avatar || ''} />
            : <Avatar width={'45px'} height={'45px'} src={''} />
        }
      </Container>
      <Container px={2}>
        <Text ellipsis color={colors.white}>
          {account?.username || account?.display_name}
        </Text>
      </Container>
    </Container>
  </UserContainer>
)

export { UserSidebar };
