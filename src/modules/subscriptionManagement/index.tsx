import { Flex, Text } from "@chakra-ui/react";
import { Container } from "components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "services/stores";
import { colors, sizes } from "styles";
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
      <Text
        fontWeight='500'
        fontSize='20px'
        lineHeight='24px'
        color={colors.generalText[colorMode]}
        m='24px'
      >Plans</Text>
      <Flex
        gridGap='29px'
        w='100%'
        justifyContent='flex-start'
        flexWrap='wrap'
      >
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
        <SubscriptionCard checked={active} onChange={(e) => setactive(e.target.checked)}/>
      </Flex>
    </Container>
  )
}