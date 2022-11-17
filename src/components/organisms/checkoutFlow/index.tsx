import { useLazyQuery, useMutation } from '@apollo/client'
import { Flex, Text, useToast } from '@chakra-ui/react'
import { AlertCard } from 'components/atoms'
import { useEffect, useState } from 'react'
import {
  MUTATION_CONFIRM_ORDER,
  MUTATION_ONE_TIME_PAYMENT,
  QUERY_GET_ORDER_RESULT
} from 'services/graphql'
import { useCommonStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { BillingType, Product, ProductPrice } from 'types/products'
import { getMaxmindLocation } from 'utils/location'
import { Payment, SelectPrice, SelectProduct } from './components'
import { CheckoutFlowProps, PaymentType, Steps } from './types'

const CheckoutFlow = ({
  products,
  accessGranted,
  product,
  simplified,
}: CheckoutFlowProps) => {
  const { colorMode } = useThemeStore()
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.SELECT_PRODUCT)
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [selectedPrice, setSelectedPrice] = useState<ProductPrice>()
  const [billingType, setBillingType] = useState<BillingType>()
  const [orderId, setOrderId] = useState<string>()
  const [isLoadingOrder, setIsLoadingOrder] = useState<boolean>(false)
  const [qrCode, setQRCode] = useState<string>()
  const [boletoUrl, setBoletoURL] = useState<string>()
  const [paymentType, setPaymentType] = useState<PaymentType>('Bexs')
  const { setPageTitle } = useCommonStore()
  const toast = useToast()

  const verifyUserLocation = async () => {
    try {
      const {
        country: { iso_code },
      } = await getMaxmindLocation()
      if (iso_code !== 'BR') {
        setPaymentType('Stripe')
      }
    } catch (e) {
      console.error(e)
    }
  }

  const [getPendingOrder, { data: orderData, stopPolling }] = useLazyQuery(
    QUERY_GET_ORDER_RESULT,
    {
      variables: {
        id: orderId,
      },
      fetchPolicy: 'cache-and-network',
      pollInterval: 5000,
    }
  )

  const [confirmOrder] = useMutation(
    billingType === 'Recurring'
      ? MUTATION_CONFIRM_ORDER
      : MUTATION_ONE_TIME_PAYMENT,
    {
      onCompleted: (result) => {
        const orderResult =
          billingType === 'Recurring'
            ? result.confirmOrder
            : result.oneTimePayment
        const qrCode = orderResult?.subscription?.pixQrCodeText
        const boletoUrl = orderResult?.subscription?.boletoUrl
        if (qrCode) setQRCode(qrCode)
        if (boletoUrl) setBoletoURL(boletoUrl)
        setOrderId(orderResult?.id)
      },
      onError: (error) => {
        toast({
          title: `${error.message}`,
          status: 'error',
          isClosable: true,
          position: 'top',
          duration: 5000,
        })
        setIsLoadingOrder(false)
      },
    }
  )

  const handleSelectPrice = (price: ProductPrice) => {
    setSelectedPrice(price)
    setBillingType(price.billingTypes?.name)
    setCurrentStep(Steps.PAYMENT)
  }

  const handleConfirmOrder = (payload) => {
    if (selectedPrice?.billingTypes.name === 'One time') {
      const oneTimePaymentExtraValues = {
        description: selectedProduct?.description,
        statementDescriptor: selectedProduct?.statementDescriptor,
        currencyId: selectedPrice.currencyId,
        //TODO - VER COM O LEANDRO SE É ISSO MESMO
        customerGrossAmount: selectedPrice.unitPrice,
      }
      payload.variables.payload = {
        ...payload.variables.payload,
        ...oneTimePaymentExtraValues,
      }
    }
    setIsLoadingOrder(true)
    confirmOrder(payload)
  }

  useEffect(() => {
    verifyUserLocation()
    if (product) setSelectedProduct(product)
    setPageTitle('Checkout')
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (orderId) getPendingOrder()

    //eslint-disable-next-line
  }, [orderId])

  useEffect(() => {
    if (orderData?.order) {
      switch (orderData.order.status) {
        case 'ACTIVE':
          setIsLoadingOrder(false)
          setCurrentStep(Steps.SUCCESS)
          stopPolling && stopPolling()
          break
        case 'FAILED':
          setIsLoadingOrder(false)
          setCurrentStep(Steps.FAILED)
          stopPolling && stopPolling()
      }
    }
    //eslint-disable-next-line
  }, [orderData])

  useEffect(() => {
    if (selectedProduct) setCurrentStep(Steps.SELECT_PRICE)
  }, [selectedProduct])

  const renderStep = () => {
    switch (currentStep) {
      case Steps.SELECT_PRODUCT:
        return (
          <SelectProduct
            {...{ products, setSelectedProduct, colorMode, isLoadingOrder }}
          />
        )
      case Steps.SELECT_PRICE:
        return (
          <SelectPrice
            productPrices={selectedProduct?.productPrices}
            {...{ handleSelectPrice, colorMode }}
          />
        )
      case Steps.PAYMENT:
        return (
          <Payment
            {...{
              selectedPrice,
              colorMode,
              setCurrentStep,
              qrCode,
              isLoadingOrder,
              paymentType,
              boletoUrl,
            }}
            sendConfirmOrderPayload={handleConfirmOrder}
          />
        )
      case Steps.SUCCESS:
        return (
          <AlertCard
            type="success"
            description="Your payment has been successfully processed!"
            title="Payment Success"
            actionLabel={'Enjoy your content'}
            actionVariant="link"
            callToAction={accessGranted}
          />
        )
      case Steps.FAILED:
        return (
          <AlertCard
            type="error"
            description="Seu pagamento não pôde ser processado, por favor tente novamente."
            title="Payment Error"
            actionLabel={'Tentar novamente'}
            actionVariant="link"
            callToAction={() => setCurrentStep(Steps.PAYMENT)}
          />
        )
    }
  }

  const hasHeader = selectedProduct && !orderData?.order?.status && !simplified

  return (
    <Flex
      mt={simplified ? 4 : 10}
      p={simplified ? '' : '1em'}
      gridGap={4}
      flexDirection="column"
      w={'800px'}
      alignItems="center"
    >
      {hasHeader && (
        <Flex
          w="100%"
          minH="300px"
          height="fit-content"
          borderRadius="8px"
          background={colors.cardBg[colorMode]}
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          flexDirection="column"
        >
          <Flex
            flex="1"
            backgroundImage={`url(${selectedProduct?.imageUrl})`}
            backgroundSize="100%"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            borderRadius="8px 8px 0 0"
          />
          <Flex w="100%" h="100%" p="20px 25px" alignItems="center">
            <Flex flex="1" flexDirection="column">
              <Text color={colors.generalText[colorMode]} fontSize={'1.4rem'}>
                {selectedProduct?.name}
              </Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontSize={'1.05rem'}
              >
                {selectedProduct?.description}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      )}
      {renderStep()}
    </Flex>
  )
}

export { CheckoutFlow }
