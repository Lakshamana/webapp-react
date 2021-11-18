import { LanguageSelectProps } from "./types";
import { ReactComponent as BrazilIcon } from "assets/icons/flags/brazil.svg";
import { ReactComponent as USAIcon } from "assets/icons/flags/usa.svg";
import { Icon } from "@iconify/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { MenuButtonSpan } from "./style";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: LanguageSelectProps) {
    i18n.changeLanguage(language.locale);
  }

  const languageOptions: LanguageSelectProps[] = [
    { flagIcon: <BrazilIcon width={24} />, locale: "pt-BR", label: "PT" },
    { flagIcon: <USAIcon width={24} />, locale: "en-US", label: "EN" },
  ];

  const selectedLanguage: LanguageSelectProps = languageOptions.filter(
    (item) => {
      return item.locale === i18n.language;
    }
  )[0];

  return (
    <Menu>
      <MenuButton padding={2} borderRadius={36} border={"1px solid #666666"}>
        <MenuButtonSpan>
          {selectedLanguage.flagIcon}
          {selectedLanguage.label}
          <Icon width={18} height={18} icon="mdi:chevron-down" />
        </MenuButtonSpan>
      </MenuButton>
      <MenuList
        minWidth={"auto"}
        bgColor={"#444444"}
        border={"none"}
        color={"white"}
        padding={0}
      >
        {languageOptions.map((item, idx) => {
          return (
            <MenuItem
              _focus={{ bg: "transparent" }}
              paddingRight={8}
              icon={item.flagIcon}
              key={idx}
              minH="48px"
              fontWeight={500}
              onClick={() => handleChangeLanguage(item)}
            >
              <span>{item.label}</span>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export { LanguageSelector };
