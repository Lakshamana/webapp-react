import { useMutation } from '@apollo/client'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { MUTATION_ADD_PENDING_ORDER } from 'services/graphql'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { Props } from './types'

export const SelectPlan = ({ plans, selectPlan, nextStep }: Props) => {
  const { colorMode } = useThemeStore()
  const { t, i18n } = useTranslation()
  const formatCurrency = (value: string | number, symbol: string = 'USD') => {
    if (typeof value === 'string') {
      value = parseFloat(value)
    }
    return Intl.NumberFormat(i18n.language, {
      style: 'currency',
      currency: symbol,
      minimumFractionDigits: 2,
    }).format(value)
  }

  const [orderData, { loading }] = useMutation(MUTATION_ADD_PENDING_ORDER)

  const handleAction = (plan) => async () => {
    const getOrderData = await orderData({
      variables: { product: plan.id },
    })
    const updatePlan = {
      ...plan,
      orderId: getOrderData.data.addPendingOrder.id,
      product: getOrderData.data.addPendingOrder.product,
      account: getOrderData.data.addPendingOrder.account,
    }
    selectPlan(updatePlan)
    nextStep()
  }

  return (
    <Flex flexDirection="column" mt="44px" mx={'2rem'}>
      <Text
        fontSize="28px"
        fontWeight="500"
        color={colors.generalText[colorMode]}
      >
        {t('page.plan.selectPlan.title')}
      </Text>
      <Flex
        gridGap="24px"
        mt="16px"
        flexDirection={{ base: 'column', md: 'row' }}
        wrap={'wrap'}
        placeContent={'center'}
      >
        {plans &&
          plans.map((plan, key) => (
            <Box
              key={`plan-${key}`}
              maxW="sm"
              borderWidth="1px"
              borderRadius="8px"
              overflow="hidden"
              w="340px"
              background={colors.cardBg[colorMode]}
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              <Box
                h="184px"
                w="100%"
                backgroundImage={`url(${plan.imageUrl})`}
                backgroundSize="100%"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
              />
              <Box p="20px">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="600"
                  fontSize="18px"
                >
                  {plan.name}
                </Text>
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="400"
                  fontSize="12px"
                  maxW="256px"
                  w="100%"
                  mt="6px"
                >
                  {plan.description}
                </Text>
                <Flex
                  mt="15px"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button
                    h="36px"
                    w="156px"
                    bg="#0660F9"
                    color="white"
                    fontSize="12px"
                    textTransform="uppercase"
                    fontWeight="400"
                    disabled={loading}
                    onClick={handleAction(plan)}
                  >
                    {t(
                      loading
                        ? 'page.plan.selectPlan.loading'
                        : 'page.plan.selectPlan.select'
                    )}
                  </Button>
                  <Text
                    color={colors.generalText[colorMode]}
                    fontWeight="400"
                    fontSize="18px"
                  >
                    {formatCurrency(
                      plan.productPrices[0].unitPrice,
                      plan.productPrices[0].currency.isoCode
                    )}
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
      </Flex>
    </Flex>
  )
}
