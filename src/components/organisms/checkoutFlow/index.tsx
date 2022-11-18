import { useLazyQuery, useMutation } from '@apollo/client'
import { Flex, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {
  MUTATION_CONFIRM_ORDER,
  MUTATION_ONE_TIME_PAYMENT,
  QUERY_GET_ORDER_RESULT
} from 'services/graphql'
import { useCommonStore, useThemeStore } from 'services/stores'
import { useCheckoutStore } from 'services/stores/checkout'
import { BillingType, ProductPrice } from 'types/products'
import { getMaxmindLocation } from 'utils/location'
import {
  Payment,
  PaymentFailed,
  PaymentSuccess,
  PersonalInformation,
  SelectProduct,
  Tabs
} from './components'
import { CheckoutFlowProps, Steps } from './types'

const CheckoutFlow = ({ products, accessGranted }: CheckoutFlowProps) => {
  const { colorMode } = useThemeStore()
  const {
    currentStep,
    setCurrentStep,
    selectedProduct,
    setSelectedPrice,
    selectedPrice,
    setSelectedProduct,
    setQrCode,
    setBarCode,
    paymentType,
    setPaymentType,
  } = useCheckoutStore()
  const [billingType, setBillingType] = useState<BillingType>()
  const [orderId, setOrderId] = useState<string>()
  const [isLoadingOrder, setIsLoadingOrder] = useState<boolean>(false)

  const { setPageTitle } = useCommonStore()

  const toast = useToast()

  const handleSelectPrice = (productPrice: ProductPrice) => {
    setSelectedPrice(productPrice)
    const product = products?.find(
      (item) => item.id === productPrice.productsId
    )
    if (product) setSelectedProduct(product)
    setBillingType(productPrice.billingTypes?.name)
    setCurrentStep(Steps.PERSONAL_INFORMATION)
  }

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
        if (qrCode) setQrCode(qrCode)
        if (boletoUrl) setBarCode(boletoUrl)
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

  const handleConfirmOrder = (payload) => {
    if (selectedPrice?.billingTypes.name === 'One time') {
      const oneTimePaymentExtraValues = {
        description: selectedProduct?.description,
        statementDescriptor: selectedProduct?.statementDescriptor,
        currencyId: selectedPrice.currencyId,
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

  const renderStep = () => {
    switch (currentStep) {
      case Steps.SELECT_PRODUCT:
        return (
          <SelectProduct
            {...{ products, handleSelectPrice, colorMode, isLoadingOrder }}
          />
        )
      case Steps.PERSONAL_INFORMATION:
        return <PersonalInformation />
      case Steps.PAYMENT:
        return (
          <Payment
            {...{
              colorMode,
              isLoadingOrder,
              paymentType,
            }}
            sendConfirmOrderPayload={handleConfirmOrder}
          />
        )
    }
  }

  if (currentStep === Steps.SUCCESS) return <PaymentSuccess />

  if (currentStep === Steps.FAILED) return <PaymentFailed />

  return (
    <Flex
      my={8}
      gridGap={4}
      flexDirection="column"
      alignItems="center"
      width={'100%'}
    >
      <Tabs {...{ colorMode }} />
      {renderStep()}
    </Flex>
  )
}

export { CheckoutFlow }
