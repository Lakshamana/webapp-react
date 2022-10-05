import { Flex } from "@chakra-ui/react";
import { Container } from "components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "services/stores";
import { sizes } from "styles";
import { Navbar, SubscriptionCard } from "./components";

export const SubscriptionManagement = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [active, setactive] = useState(true)
  return (
    <Container
      width={1}
      mt={3}
      mx={[sizes.paddingSm, sizes.paddingMd, sizes.paddingLg]}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Navbar {...{ colorMode }} text={t('page.account.back')} />
      <Flex
        gridGap='29px'
        w='100%'
        justifyContent='center'
        flexWrap='wrap'
      >
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
      </Flex>
    </Container>
  )
}