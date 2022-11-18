import { Box, Flex, Text } from '@chakra-ui/react'
import { formatCurrency } from 'components/organisms/checkoutFlow/utils'
import { useTranslation } from 'react-i18next'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import { ColorMode } from 'types/common'
import { SelectedProductAndPriceInfo } from '../../../selectedProductAndPriceInfo'

type Props = {
  colorMode: ColorMode
}
const OrderDetails = ({ colorMode }: Props) => {
  const { t } = useTranslation()
  const { selectedPrice } = useCheckoutStore()

  return (
    <Flex direction={'column'} width="100%">
      <Text mb={4} color={colors.generalText[colorMode]} fontSize="1.3rem">
        Order Details
      </Text>
      <SelectedProductAndPriceInfo {...{ colorMode }} />
      {/* <Box
        mt={5}
        px={8}
        pt={4}
        pb={2}
        borderRadius={8}
        display="flex"
        w="100%"
        flexDir="column"
        background={colors.cardBg[colorMode]}
      >
        <Input placeholder='Promo code'></Input>
      </Box> */}
      <Box
        my={5}
        px={8}
        py={4}
        borderRadius={8}
        display="flex"
        w="100%"
        flexDir="column"
        background={colors.cardBg[colorMode]}
        gridGap={4}
      >
        <Flex justifyContent={'space-between'}>
          <Text color={colors.generalText[colorMode]} fontSize="1.1rem" pb={1}>
            Subtotal
          </Text>
          <Text color={colors.generalText[colorMode]} fontSize="1.1rem" pb={1}>
          {formatCurrency(
              selectedPrice?.unitPrice || 0,
              selectedPrice?.currency.isoCode
            )}
          </Text>
        </Flex>
        <Flex justifyContent={'space-between'}>
          <Text color={colors.generalText[colorMode]} fontSize="1.1rem" pb={1}>
            Total
          </Text>
          <Text
            fontSize={'1.2rem'}
            fontWeight="bolder"
            color={colors.generalText[colorMode]}
          >
            {formatCurrency(
              selectedPrice?.unitPrice || 0,
              selectedPrice?.currency.isoCode
            )}
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}

export { OrderDetails }
