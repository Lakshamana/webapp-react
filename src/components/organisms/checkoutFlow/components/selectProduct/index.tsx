import { AspectRatio, Box, Flex, Image, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors, sizes } from 'styles'
import { SelectProductProps } from '../../types'
import { PriceOption } from './components'

const SelectProduct = ({
  products,
  colorMode,
  handleSelectPrice,
}: SelectProductProps) => {
  const { t } = useTranslation()
  const { selectedPrice } = useCheckoutStore()

  return (
    <Flex
      w={'100%'}
      direction="column"
      gridGap={2}
      px={{ sm: sizes.paddingSm, md: sizes.paddingMd, lg: sizes.paddingLg }}
    >
      <Flex direction="row" gridGap={10} justifyContent="center" mt={6}>
        {products?.map((product) => (
          <Box
            width={'100%'}
            key={`product-${product.id}`}
            maxW="450px"
            backgroundColor={colors.cardBg[colorMode]}
            borderRadius={8}
            paddingBottom={6}
          >
            <Box pos="relative" backgroundColor={colors.headerBg[colorMode]}>
              <AspectRatio ratio={16 / 8}>
                <Image
                  borderTopRadius={'6px'}
                  objectPosition="center"
                  objectFit={'cover'}
                  boxSize={'auto'}
                  src={product.imageUrl}
                  fallback={
                    <Box>
                      <Icon
                        icon="mdi:image-outline"
                        fontSize={'5rem'}
                        color={colors.secondaryText[colorMode]}
                      />
                    </Box>
                  }
                  lazy={true}
                  htmlWidth="auto"
                />
              </AspectRatio>
            </Box>
            <Box padding={5}>
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="bolder"
                fontSize="1.3rem"
              >
                {product.name}
              </Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontSize={'1.1rem'}
                w="100%"
                mt={1}
              >
                {product.description}
              </Text>
            </Box>
            <Flex gridGap={2} direction="column" paddingX={5}>
              {product?.productPrices?.map((productPrice) => (
                <PriceOption
                  key={productPrice.id}
                  {...{
                    productPrice,
                    colorMode,
                  }}
                />
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
      <Box mt={10} display="flex" justifyContent="center">
        <Button
          onClick={() => selectedPrice && handleSelectPrice(selectedPrice)}
          disabled={!selectedPrice}
          variant={selectedPrice ? 'solid' : 'outline'}
          width={'450px'}
        >
          {t('page.plan.selectPlan.select')}
        </Button>
      </Box>
    </Flex>
  )
}

export { SelectProduct }
