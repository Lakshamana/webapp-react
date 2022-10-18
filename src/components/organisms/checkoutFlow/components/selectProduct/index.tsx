import { Box, Flex, Text } from '@chakra-ui/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import { SelectProductProps } from '../../types'

const SelectProduct = ({
  products,
  colorMode,
  setSelectedProduct,
}: SelectProductProps) => {
  const { t } = useTranslation()

  return (
    <Flex flexDirection="column" mt="44px" mx={'2rem'}>
      <Text
        fontSize="1.5rem"
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
        {products?.map((product, key) => (
          <Box
            key={`product-${key}`}
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
              backgroundImage={`url(${product.imageUrl})`}
              backgroundSize="100%"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
            <Box p="20px">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="600"
                fontSize="1.3rem"
              >
                {product.name}
              </Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontSize={'1rem'}
                w="100%"
                mt="6px"
              >
                {product.description}
              </Text>
              <Box mt={5}>
                <Button
                  w="100%"
                  fontWeight={'bold'}
                  size="md"
                  onClick={() => setSelectedProduct(product)}
                >
                  {t('page.plan.selectPlan.select')}
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}

export { SelectProduct }
