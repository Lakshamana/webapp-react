import { useLazyQuery } from '@apollo/client'
import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import { organizationData } from 'config/organization'
import { InspireProduct } from 'generated/graphql'
import { useQueryParams } from 'hooks/useQueryParams'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QUERY_PRODUCT } from 'services/graphql'
import { useAuthStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { CheckoutLogin, CheckoutPayment, CheckoutSignup } from './components'
import { Steps } from './types'

const SimplifiedCheckout = () => {
  const query = useQueryParams()
  const { t, i18n } = useTranslation()
  const { colorMode } = useThemeStore()

  const { account } = useAuthStore()
  const [productId, setProductId] = useState<string>()
  const [product, setProduct] = useState<InspireProduct>()
  const [currentStep, setCurrentStep] = useState<Steps>()

  const [getProduct, { loading: loadingProduct }] = useLazyQuery(
    QUERY_PRODUCT,
    {
      variables: {
        id: productId,
      },
      onCompleted: (result) => {
        setProduct(result.product)
        setCurrentStep(account ? Steps.PAYMENT : Steps.LOGIN)
      },
    }
  )

  //TODO: Convert this on a util func
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

  useEffect(() => {
    setProductId(query.get('productId') || '')
    getProduct()
    //eslint-disable-next-line
  }, [])

  const renderSteps = () => {
    switch (currentStep) {
      case Steps.LOGIN:
        return <CheckoutLogin {...{ colorMode, setCurrentStep }} />
      case Steps.REGISTER:
        return <CheckoutSignup {...{ colorMode, setCurrentStep }} />
      case Steps.PAYMENT:
        return <CheckoutPayment {...{ product, colorMode, pageHeader }} />
    }
  }

  const isPaymentStep = currentStep === Steps.PAYMENT

  const pageHeader = () => {
    switch (currentStep) {
      case Steps.LOGIN:
      case Steps.REGISTER:
        return {
          title: t('page.checkout.login.title'),
          description: t('page.checkout.login.subtitle'),
        }
      case Steps.PAYMENT:
        return {
          title: t('page.checkout.payment.title', {
            user: account?.username,
            org: organizationData.name,
          }),
          description: t('page.checkout.payment.description', {
            product: product?.name,
          }),
        }
    }
  }

  return (
    <Flex flexDirection="column" alignItems="center" my={10} px={5} w={'100%'}>
      <Text
        fontSize={{ssm: '1.5rem', sm: '1.7rem', md: '2rem'}}
        textAlign="center"
        color={colors.generalText[colorMode]}
      >
        {pageHeader()?.title}
      </Text>
      <Text
        fontSize={{ ssm: '1rem', sm: '1.1rem' }}
        mt={1}
        textAlign="center"
        color={colors.secondaryText[colorMode]}
      >
        {pageHeader()?.description}
      </Text>
      {isPaymentStep ? (
        renderSteps()
      ) : (
        <Flex
          mt={10}
          width={{ base: '100%', ssm: '100%', sm: '80%', md: '100%' }}
          maxW={'1024'}
          borderRadius="6px"
          justifyContent="center"
          flexDir={['column', 'column', 'column', 'column', 'row']}
          backgroundColor={colors.cardBg[colorMode]}
        >
          <Flex
            minH={'600px'}
            w="100%"
            flexDirection="column"
            justifyContent="flex-end"
            padding={8}
            borderRadius="6px"
            background={`linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(${product?.imageUrl})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            color="#fff"
          >
            <Text fontSize="1.8rem">{product?.name}</Text>
            <Text fontSize="1.2rem">{product?.description}</Text>

            <Divider my={3} color={colors.inputBg[colorMode]} />

            <Flex alignItems="center" flexDir={'column'} gridGap={1}>
              {product?.productPrices?.map((price) => {
                return (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    width={'100%'}
                    key={price.id}
                  >
                    <Text fontSize="0.9rem" textTransform={'uppercase'}>
                      {price.billingTypes?.name}
                    </Text>
                    <Flex>
                      <Text fontSize="1.3rem">
                        {formatCurrency(
                          price?.unitPrice || '',
                          price.currency?.isoCode || ''
                        )}
                      </Text>
                      <Text fontSize={'0.8rem'} ml={1} pt={1}>
                        {price?.billingPeriods &&
                          ` / ${price.billingPeriods.name}`}
                      </Text>
                    </Flex>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>
          <Box mt={{ ssm: 10, sm: 0 }} justifyContent={'center'} w="100%">
            {renderSteps()}
          </Box>
        </Flex>
      )}
    </Flex>
  )
}

export { SimplifiedCheckout }
