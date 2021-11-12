import { useState, useMemo } from "react";
import { Icon } from "@iconify/react-with-api";
import { Container, Text, Popover } from "components";
import { PopoverOption } from "./components";

import { PropsUserInfo } from "./types";
import {
  UserContainer,
  CircleImage,
  OptionsList,
  TextContainer,
} from "./styles";
import { colors } from "styles";

const UserInfo = ({
  user,
  delimited = true,
  colorMode,
  toggleColorMode,
}: PropsUserInfo) => {
  const [open, setOpen] = useState(false);

  return (
    <Container display={["none", "none", "none", "flex"]}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background={colors.headerUserPopoverBg[colorMode]}
        trigger={
          <button>
            <UserContainer px={1} {...{ delimited }}>
              <TextContainer maxWidth={["150px"]}>
                <Text ellipsis color={colors.secondaryText[colorMode]}>
                  {user?.name || ""}
                </Text>
              </TextContainer>
              <Container>
                <CircleImage width={50} height={50} src={user?.avatar} />
              </Container>
            </UserContainer>
          </button>
        }
      >
        <Container flexDirection="column" width={1}>
          <OptionsList>
            <PopoverOption
              color={colors.generalText[colorMode]}
              text="Editar Perfil"
              onClick={() => {}}
              icon={
                <Icon
                  width={18}
                  height={18}
                  icon="mdi:account"
                  color={colors.generalText[colorMode]}
                />
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              text={`${
                colorMode === "dark" ? "Desativar" : "Ativar"
              } modo escuro`}
              onClick={toggleColorMode}
              icon={
                colorMode === "dark" ? (
                  <Icon
                    width={18}
                    height={18}
                    icon="mdi:white-balance-sunny"
                    color={colors.generalText[colorMode]}
                  />
                ) : (
                  <Icon
                    width={18}
                    height={18}
                    color={colors.generalText[colorMode]}
                    icon="mdi:moon-waning-crescent"
                  />
                )
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              text="Ajustes"
              onClick={() => {}}
              icon={
                <Icon
                  width={18}
                  height={18}
                  color={colors.generalText[colorMode]}
                  icon="mdi:cog-outline"
                />
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              onClick={() => {}}
              text="Sair"
              icon={
                <Icon
                  width={18}
                  height={18}
                  icon="mdi:power"
                  color={colors.generalText[colorMode]}
                />
              }
            />
          </OptionsList>
        </Container>
      </Popover>
    </Container>
  );
};

export { UserInfo };
