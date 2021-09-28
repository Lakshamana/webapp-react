import { useState } from "react";
import { Power, Settings, User } from "react-feather";
import { Container, Text, Popover } from "components";
import { PopoverOption } from "./atoms";

import { PropsUserInfo } from "../../types";
import { UserContainer, CircleImage, OptionsList } from "./styles";

const UserInfo = ({ user }: PropsUserInfo) => {
  const theme = { black: "#222222" };
  const background = theme.black;

  const [open, setOpen] = useState(false);

  return (
    <Popover
      props={{
        isOpen: open,
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
      }}
      background={background}
      trigger={
        <button>
          <UserContainer px={1}>
            <Container mx={2} maxWidth={["150px"]}>
              <Text ellipsis color="#A4A4A4">
                {user?.name || ""}
              </Text>
            </Container>
            <Container mx={2}>
              <CircleImage width={50} height={50} src={user?.avatar} />
            </Container>
          </UserContainer>
        </button>
      }
    >
      <Container flexDirection="column" width={1}>
        <OptionsList>
          <PopoverOption
            text="Editar Perfil"
            onClick={() => {}}
            icon={<User color="white" width={18} height={18} />}
          />
          <PopoverOption
            text="Ajustes"
            onClick={() => {}}
            icon={<Settings color="white" width={18} height={18} />}
          />
          <PopoverOption
            onClick={() => {}}
            text="Sair"
            icon={<Power color="white" width={18} height={18} />}
          />
        </OptionsList>
      </Container>
    </Popover>
  );
};

export { UserInfo };
