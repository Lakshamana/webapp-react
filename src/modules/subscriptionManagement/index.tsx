import { Container } from "components";
import { Navbar } from "modules/account/components";
import { useTranslation } from "react-i18next";
import { useThemeStore } from "services/stores";
import { sizes } from "styles";

export const SubscriptionManagement = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  return (
    <Container
      width={1}
      mt={3}
      mx={[sizes.paddingSm, sizes.paddingMd, sizes.paddingLg]}
      flexWrap="wrap"
      justifyContent="space-between"
    >
      <Navbar {...{ colorMode }} text={t('page.account.back')} />
    </Container>
  )
}