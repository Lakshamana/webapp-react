import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import tinyColor from 'tinycolor2'

import { Button } from 'components/atoms'
import { useEffect, useState } from 'react'
import {
  BankCardForm,
  BankSlipBarCode,
  BillingInformationBexs,
  OrderDetails,
  PixQRCode
} from './components'
import { paymentTypes } from './utils'

import { useCheckoutStore } from 'services/stores/checkout'
import { ColorMode } from 'types/common'
import { PaymentMethods } from '../../types'
import { BillingInformationStripe } from './components/billingInformationStripe'

type Props = {
  colorMode: ColorMode
  sendConfirmOrderPayload: (payload) => void
  isLoadingOrder: boolean
}

const Payment = ({
  colorMode,
  sendConfirmOrderPayload,
  isLoadingOrder,
}: Props) => {
  const { t } = useTranslation()
  const [activePaymentType, setActivePaymentType] = useState<PaymentMethods>()
  const {
    selectedPrice,
    paymentType,
    personalInfo,
    billingInformationBexs,
    ccInformation,
    qrCode,
    barCode,
  } = useCheckoutStore()

  const handleConfirmOrderPayload = () => {
    switch (activePaymentType) {
      case PaymentMethods.PIX:
      case PaymentMethods.BOLETO:
        return sendConfirmOrderPayload({
          variables: {
            payload: {
              paymentMethodType: activePaymentType,
              productPrice: selectedPrice?.id,
              product: selectedPrice?.productsId,
              cardHolderName: personalInfo?.fullName,
              cpf: billingInformationBexs?.cpf,
              phone: personalInfo?.phoneNumber,
              billingAddress: {
                address1: billingInformationBexs?.address1,
                address2: billingInformationBexs?.address2,
                city: billingInformationBexs?.city,
                stateId: billingInformationBexs?.stateId,
                countryId: billingInformationBexs?.countryId,
                zipCode: billingInformationBexs?.zip,
                neighborhood: billingInformationBexs?.district,
                streetNumber: billingInformationBexs?.streetNumber,
              },
            },
          },
        })
      case PaymentMethods.CREDIT_CARD:
        return sendConfirmOrderPayload(ccInformation)
    }
  }

  const renderPaymentMethodForm = () => {
    switch (activePaymentType) {
      case PaymentMethods.CREDIT_CARD:
        return <BankCardForm {...{ sendConfirmOrderPayload }} />
    }
  }

  useEffect(() => {
    if (paymentType === 'Stripe')
      setActivePaymentType(PaymentMethods.CREDIT_CARD)
    //eslint-disable-next-line
  }, [])

  if (qrCode && activePaymentType === PaymentMethods.PIX) {
    return <PixQRCode />
  }

  if (barCode && activePaymentType === PaymentMethods.BOLETO) {
    return <BankSlipBarCode />
  }

  return (
    <Flex
      width="100%"
      px={{ sm: 2, md: 6, lg: 8 }}
      gridGap={4}
      mt={8}
      maxW={'1400px'}
      direction={{ ssm: 'column', sm: 'column', md: 'column', lg: 'row' }}
      alignItems={{
        ssm: 'center',
        sm: 'center',
        md: 'center',
        lg: 'flex-start',
      }}
    >
      <Flex
        direction="column"
        width={{ ssm: '100%', sm: '100%', md: '100%', lg: '50%' }}
        maxW={'700px'}
        paddingX={6}
      >
        {/* ADDITIONAL INFORMATION */}
        {paymentType === 'Bexs' && (
          <BillingInformationBexs {...{ colorMode }} />
        )}
        {paymentType === 'Stripe' && (
          <BillingInformationStripe {...{ colorMode }} />
        )}

        {/* PAYMENT METHOD */}
        <Text mb={4} color={colors.generalText[colorMode]} fontSize="1.3rem">
          Payment Method
        </Text>
        <Flex gridGap={4} pb={4} justifyContent="center">
          {paymentTypes(paymentType).map((item) => (
            <Box
              onClick={() => setActivePaymentType(item.type)}
              width={'100%'}
              maxW="180px"
              cursor="pointer"
              py={8}
              background={
                activePaymentType === item.type
                  ? colors.brand.primary[colorMode]
                  : colors.cardBg[colorMode]
              }
              borderRadius={6}
              display="flex"
              flexDir={'column'}
              alignItems="center"
              justifyContent={'center'}
              color={
                activePaymentType === item.type
                  ? colors.generalText[
                      tinyColor(colors.brand.primary[colorMode]).isLight()
                        ? 'light'
                        : 'dark'
                    ]
                  : colors.secondaryText[colorMode]
              }
            >
              <Icon icon={item.icon} fontSize={'2rem'} />
              <Text fontSize={'1.1rem'} mt={2}>
                {item.label}
              </Text>
            </Box>
          ))}
        </Flex>
        <Flex>{selectedPrice ? renderPaymentMethodForm() : null}</Flex>
      </Flex>

      {/* ORDER DETAILS */}
      <Flex
        width={{ ssm: '100%', sm: '100%', md: '100%', lg: '50%' }}
        maxW={'700px'}
        paddingX={6}
        direction="column"
      >
        <OrderDetails {...{ colorMode }} />
        <Button
          isLoading={isLoadingOrder}
          onClick={handleConfirmOrderPayload}
          my={2}
          width="100%"
          label={t('page.checkout.card_info.place_you_order')}
        />
        <Flex alignItems={'center'} gridGap={2} my={2} justifyContent="center">
          <Icon
            color={colors.secondaryText[colorMode]}
            width={'1rem'}
            icon={'mdi:shield-outline'}
          />
          <Text
            color={colors.secondaryText[colorMode]}
            fontWeight="thin"
            fontSize={'1rem'}
            textAlign="center"
          >
            Secure transaction
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export { Payment }
