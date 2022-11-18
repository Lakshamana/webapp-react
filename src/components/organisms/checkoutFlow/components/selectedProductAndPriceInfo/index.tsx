import { Box, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useCheckoutStore } from 'services/stores/checkout'
import { breakpoints, colors } from 'styles'
import { ColorMode } from 'types/common'
import { formatCurrency } from '../../utils'

type Props = {
  colorMode: ColorMode
}

const SelectedProductAndPriceInfo = ({ colorMode }: Props) => {
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { selectedProduct, selectedPrice } = useCheckoutStore()

  return (
    <Box
      display="flex"
      flexDirection={isDesktop ? 'row' : 'column'}
      background={colors.cardBg[colorMode]}
      borderRadius="8px"
      height={isDesktop ? '150px' : 'auto'}
      overflow={'hidden'}
    >
      <Box
        width={isDesktop ? '35%' : '100%'}
        backgroundColor={colors.headerBg[colorMode]}
      >
        <Image
          borderTopRadius={'6px'}
          alt={selectedProduct?.name}
          objectFit="cover"
          src={selectedProduct?.imageUrl}
          fallback={
            <Box
              display={'flex'}
              alignItems="center"
              justifyContent={'center'}
              height="100%"
            >
              <Icon
                icon="mdi:image-outline"
                fontSize={'5rem'}
                color={colors.secondaryText[colorMode]}
              />
            </Box>
          }
          lazy={true}
        />
      </Box>
      <Box
        py={4}
        px={6}
        display="flex"
        flexDirection={'column'}
        justifyContent="space-between"
      >
        <Text color={colors.generalText[colorMode]} fontSize="1.5rem">
          {selectedProduct?.name}
        </Text>
        <Text
          noOfLines={2}
          color={colors.secondaryText[colorMode]}
          fontSize="1rem"
        >
          {selectedProduct?.description}
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
          {selectedPrice?.billingPeriods &&
            ` / ${selectedPrice.billingPeriods.name}`}
        </Text>
      </Box>
    </Box>
  )
}

export { SelectedProductAndPriceInfo }
