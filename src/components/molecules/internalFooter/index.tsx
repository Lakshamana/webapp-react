import { Link } from "@chakra-ui/react";
import { Logo, Text } from "components/atoms";
import { useTranslation } from "react-i18next";
import { useThemeStore } from 'services/stores/theme';
import { BoxFooter, FooterItems, TextFooter } from "./style";

const InternalFooter = () => {
  const { t } = useTranslation();
  const { colorMode } = useThemeStore();
  return (
    <BoxFooter px={4} display={"flex"} alignItems={"center"}>
      <FooterItems width={1} py={20}>
        <TextFooter>
          <Link to="" fontSize={[16]}>
            {t("common.terms")}
          </Link>
          <Text mx={1} fontSize={[16]}>
            &
          </Text>
          <Link to="" fontSize={[16]}>
            {t("common.privacy")}
          </Link>
        </TextFooter>
        <Logo
          alignItems={"center"}
          justifyContent={"flex-end"}
          mb={[4, 4, 0, 0]}
          width={161}
          height={44}
          {...{ colorMode }}
        />
      </FooterItems>
    </BoxFooter>
  );
};

export { InternalFooter };
