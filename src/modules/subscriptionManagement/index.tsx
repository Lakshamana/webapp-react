import { useQuery } from '@apollo/client';
import { Flex, Text } from "@chakra-ui/react";
import { Container } from "components";
import { useTranslation } from "react-i18next";
import { ACTIVE_SUBSCRIPTION } from 'services/graphql';
import { useThemeStore } from "services/stores";
import { colors, sizes } from "styles";
import { Navbar, SubscriptionCard } from "./components";

export const SubscriptionManagement = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { data, loading } = useQuery(ACTIVE_SUBSCRIPTION)
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
        {/* <pre>{JSON.stringify(data?.activeSubscriptons, null, 2)}</pre> */}
        {
            data?.activeSubscriptons?.map((item) => (
            <SubscriptionCard
              checked={item.status === 'ACTIVE'}
              label={item.subscription.subscriptionItems[0].name}
              subtitle=''
              description={item.subscription.subscriptionItems[0].description}
              price={`${item.invoices[0].currencySymbol} ${item.amount}`}
            />
          ))
        }
      </Flex>
    </Container>
  )
}