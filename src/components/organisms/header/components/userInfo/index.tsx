import { useState } from "react";
import { Power, Settings, User, Sun, Moon } from "react-feather";
import { useColorMode } from "@chakra-ui/color-mode";
import { Container, Text, Popover } from "components";
import { PopoverOption } from "..";

import { PropsUserInfo } from "../../types";
import { UserContainer, CircleImage, OptionsList } from "./styles";
import { colors } from "styles";

const UserInfo = ({ user }: PropsUserInfo) => {
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container display={["none", "none", "none", "flex"]}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background={colors.backgroundLayout}
        trigger={
          <button>
            <UserContainer px={1}>
              <Container mx={2} maxWidth={["150px"]}>
                <Text ellipsis color={colors.white}>
                  {user?.name || ""}
                </Text>
              </Container>
              <Container ml={2}>
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
              icon={<User color={colors.white} width={18} height={18} />}
            />
            <PopoverOption
              text={`${colorMode === 'dark' ? 'Desativar' : 'Ativar'} modo escuro`}
              onClick={() => toggleColorMode()}
              icon={
                colorMode === 'dark'
                  ? <Sun color={colors.white} width={18} height={18} /> 
                  : <Moon color={colors.white} width={18} height={18} />
              }
            />
            <PopoverOption
              text="Ajustes"
              onClick={() => {}}
              icon={<Settings color={colors.white} width={18} height={18} />}
            />
            <PopoverOption
              onClick={() => {}}
              text="Sair"
              icon={<Power color={colors.white} width={18} height={18} />}
            />
          </OptionsList>
        </Container>
      </Popover>
    </Container>
  );
};

export { UserInfo };
