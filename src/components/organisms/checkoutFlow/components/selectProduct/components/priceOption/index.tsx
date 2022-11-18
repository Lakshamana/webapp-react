import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { ProductPrice } from 'types/products'

import { formatCurrency } from 'components/organisms/checkoutFlow/utils'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'
import tinyColor from 'tinycolor2'
import { ColorMode } from 'types/common'
import { ButtonSelectOption } from './style'

interface Props {
  productPrice: ProductPrice
  colorMode: ColorMode
}

const PriceOption = ({ productPrice, colorMode }: Props) => {
  const { selectedPrice, setSelectedPrice } = useCheckoutStore()
  const isSelected = productPrice.id === selectedPrice?.id

  return (
    <ButtonSelectOption
      onClick={() => setSelectedPrice(productPrice)}
      backgroundColor={
        isSelected ? colors.brand.primary[colorMode] : colors.inputBg[colorMode]
      }
    >
      <Box
        color={
          isSelected &&
          colors.generalText[
            tinyColor(colors.brand.primary[colorMode]).isLight()
              ? 'light'
              : 'dark'
          ]
        }
      >
        <Text fontSize={'1rem'}>{productPrice.billingTypes.name}</Text>
        <Flex alignItems={'center'}>
          <Text fontSize={'1.2rem'}>
            {formatCurrency(
              productPrice.unitPrice,
              productPrice.currency.isoCode
            )}
          </Text>
          <Text ml={1} fontSize={'1rem'}>
            {productPrice?.billingPeriods &&
              `/ ${productPrice.billingPeriods.name}`}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Icon
          icon={
            isSelected
              ? 'mdi:checkbox-marked-circle-outline'
              : 'mdi:cart-outline'
          }
          color={
            isSelected &&
            colors.generalText[
              tinyColor(colors.brand.primary[colorMode]).isLight()
                ? 'light'
                : 'dark'
            ]
          }
          fontSize={'1.4rem'}
        />
      </Box>
    </ButtonSelectOption>
  )
}

export { PriceOption }
