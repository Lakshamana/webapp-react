import { useState } from "react";
import { Power, Settings, User, Sun, Moon } from "react-feather";
import { useTranslation } from "react-i18next"
import { Container, Text, Popover } from "components";
import { PopoverOption } from "..";
import { PropsUserInfo } from "../../types";
import { UserContainer, CircleImage, OptionsList } from "./styles";
import { useThemeStore } from "services/stores/theme";

const UserInfo = ({ user }: PropsUserInfo) => {
  const [open, setOpen] = useState(false);
  const { colorMode, toggleColorMode } = useThemeStore()

	const { t } = useTranslation()

  return (
    <Container display={["none", "none", "none", "flex"]}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background="backgroundLayout"
        trigger={
          <button>
            <UserContainer px={1}>
              <Container mx={2} maxWidth={["150px"]}>
                <Text ellipsis color="white">
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
              text={t("common.edit_profile")}
              onClick={() => {}}
              icon={<User color="white" width={18} height={18} />}
            />
            <PopoverOption
              text={`${colorMode === 'dark' ? t("common.disable") : t("common.enable")} ${t("common.dark_mode")}`}
              onClick={toggleColorMode}
              icon={
                colorMode === 'dark'
                  ? <Sun color="white" width={18} height={18} /> 
                  : <Moon color="white" width={18} height={18} />
              }
            />
            <PopoverOption
              text={t("common.settings")}
              onClick={() => {}}
              icon={<Settings color="white" width={18} height={18} />}
            />
            <PopoverOption
              onClick={() => {}}
              text={t("common.sign_out")}
              icon={<Power color="white" width={18} height={18} />}
            />
          </OptionsList>
        </Container>
      </Popover>
    </Container>
  );
};

export { UserInfo };
