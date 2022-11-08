import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Text
} from '@chakra-ui/react'

import { formatCurrency } from '../../utils'

import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { colors } from 'styles'
import { BankCardForm, BoletoForm, PixForm } from './components'
import { CardSelectPlan } from './styles'

import { ReactComponent as Boleto } from 'assets/icons/payment/boleto.svg'
import { ReactComponent as CreditCards } from 'assets/icons/payment/credit-card.svg'
import { ReactComponent as Pix } from 'assets/icons/payment/pix.svg'

import { PaymentProps } from '../../types'

const Payment = ({
  selectedPrice,
  colorMode,
  qrCode,
  boletoUrl,
  setCurrentStep,
  sendConfirmOrderPayload,
  paymentType,
  isLoadingOrder,
}: PaymentProps) => {
  const { t } = useTranslation()

  return (
    <>
      {/* <CardSelectPlan gridGap={4}>
        <Flex w="100%" flexDir="column">
          <Text
            color={colors.generalText[colorMode]}
            fontWeight="400"
            fontSize="1.3rem"
          >
            Have a promo code?
          </Text>
          <Text color={colors.secondaryText[colorMode]} fontSize={'1rem'}>
            Apply promo code to get discount
          </Text>
        </Flex>
        <Flex gridGap="12px" w="100%">
          <Input placeholder="Promocode" />
          <Button width={'30%'} label="apply" />
        </Flex>
      </CardSelectPlan> */}
      <CardSelectPlan gridGap={4}>
        <Flex w="100%" justifyContent={'space-between'} alignItems="center">
          <Text color={colors.generalText[colorMode]} fontSize={'1.2rem'}>
            {selectedPrice?.billingTypes.name}
          </Text>

          <Text
            color={colors.generalText[colorMode]}
            fontSize={'1.2rem'}
            fontWeight="bolder"
          >
            {formatCurrency(
              selectedPrice?.unitPrice || '',
              selectedPrice?.currency.isoCode
            )}
            {selectedPrice?.billingPeriods &&
              ` / ${selectedPrice?.billingPeriods.name}`}
          </Text>
        </Flex>
        <Flex w="100%" justifyContent={'end'}>
          <Button
            width={'auto'}
            size="sm"
            variant={'link'}
            label={t('page.checkout.actions.choose_other_price')}
            onClick={() => setCurrentStep(1)}
          />
        </Flex>
        {/* <Divider color={colors.inputBg[colorMode]} /> */}
        {/* <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Text color={colors.generalText[colorMode]} fontSize="1.05rem">
            Coupon discount:
          </Text>
          <Text color={colors.secondaryText[colorMode]} fontSize="1.05rem">
            -$5,99
          </Text>
        </Flex>
        <Divider color={colors.inputBg[colorMode]} /> */}
        {/* <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Text color={colors.generalText[colorMode]} fontSize="1.05rem">
            Total:
          </Text>
          <Text color={colors.generalText[colorMode]} fontSize="1.5rem">
            $12,99
          </Text>
        </Flex> */}
      </CardSelectPlan>

      {/* parte que eu n sei pra q serve */}
      {/* <CardSelectPlan gridGap="24px">
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="700"
                fontSize="16px"
              >
                Split payment cards and payment methods?
              </Text>
              <Switch defaultChecked />
            </Flex>
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="400"
                fontSize="14px"
              >
                Discount:
              </Text>
              <Text
                color="#ED0039"
                fontWeight="400"
                fontSize="16px"
                textDecoration="line-through"
              >
                $10.00
              </Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="400"
                fontSize="14px"
              >
                Paymanents:
              </Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontWeight="400"
                fontSize="16px"
              >
                $10.00
              </Text>
            </Flex>
            <Flex w="100%" justifyContent="space-between" alignItems="center">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="400"
                fontSize="14px"
              >
                Balance:
              </Text>
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="400"
                fontSize="28px"
              >
                $40.00
              </Text>
            </Flex>
          </CardSelectPlan> */}

      <CardSelectPlan gridGap={3}>
        <Flex w="100%">
          <Text color={colors.generalText[colorMode]} fontSize={["1.1rem", "1.2rem"]}>
            {t('page.plan.selectOption.choosePaymentMethod')}
          </Text>
        </Flex>

        {/* TODO: Adicionar credit card do signup depois de concluido  */}
        <Accordion
          allowToggle
          w="100%"
          bg={colors.bodyBg[colorMode]}
          borderRadius="8px"
          mt={2}
          color={colors.generalText[colorMode]}
        >
          <AccordionItem>
            <AccordionButton py={5} _focus={{ boxShadow: 'none' }}>
              <Flex w="100%" flexDir="column" alignItems="flex-start">
                <Text
                  textTransform={'uppercase'}
                  textAlign='left'
                  fontWeight="bold"
                  fontSize="1rem"
                >
                  {t('page.plan.selectOption.bankCard')}
                </Text>
                <Text
                  fontSize={'0.95rem'}
                  textAlign="left"
                  color={colors.secondaryText[colorMode]}
                >
                  {t('page.plan.selectOption.bankCardDesc')}
                </Text>
              </Flex>
              <CreditCards height="26px" />
              <AccordionIcon ml={1} />
            </AccordionButton>
            <AccordionPanel pb={4} w="100%">
              {selectedPrice && (
                <BankCardForm
                  product={selectedPrice.productsId}
                  productPrice={selectedPrice.id}
                  {...{ sendConfirmOrderPayload, isLoadingOrder, paymentType }}
                />
              )}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        {paymentType === 'Bexs' && (
          <Accordion
            allowToggle
            w="100%"
            bg={colors.bodyBg[colorMode]}
            borderRadius="8px"
            color={colors.generalText[colorMode]}
          >
            <AccordionItem>
              <AccordionButton py={4} _focus={{ boxShadow: 'none' }}>
                <Flex w="100%" flexDir="column" alignItems="flex-start">
                  <Text
                    textTransform={'uppercase'}
                    fontWeight="bold"
                    fontSize="1rem"
                  >
                    {t('page.plan.selectOption.pix')}
                  </Text>
                  <Text
                    fontSize={'0.95rem'}
                    textAlign="start"
                    color={colors.secondaryText[colorMode]}
                  >
                    {t('page.plan.selectOption.pixDesc')}
                  </Text>
                </Flex>
                <Pix height="26px" />
                <AccordionIcon ml={1} />
              </AccordionButton>
              <AccordionPanel pb={4} w="100%">
                {selectedPrice && (
                  <PixForm
                    product={selectedPrice?.productsId}
                    productPrice={selectedPrice?.id}
                    {...{ sendConfirmOrderPayload, qrCode, isLoadingOrder }}
                  />
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}

        {paymentType === 'Bexs' && (
          <Accordion
            allowToggle
            w="100%"
            bg={colors.bodyBg[colorMode]}
            borderRadius="8px"
            color={colors.generalText[colorMode]}
          >
            <AccordionItem>
              <AccordionButton py={4} _focus={{ boxShadow: 'none' }}>
                <Flex w="100%" flexDir="column" alignItems="flex-start">
                  <Text
                    textTransform={'uppercase'}
                    fontWeight="bold"
                    fontSize="1rem"
                  >
                     {t('page.checkout.bank_slip.title')}
                  </Text>
                  <Text
                    fontSize={'0.95rem'}
                    textAlign="start"
                    color={colors.secondaryText[colorMode]}
                  >
                     {t('page.checkout.bank_slip.description')}
                  </Text>
                </Flex>
                <Boleto color="white" height="26px" />
                <AccordionIcon ml="29px" mr="10px" />
              </AccordionButton>
              <AccordionPanel pb={4} w="100%">
                <Text
                  color={colors.white}
                  fontWeight="500"
                  fontSize="14px"
                  w="100%"
                  textAlign="center"
                >
                  {selectedPrice && (
                    <BoletoForm
                      product={selectedPrice?.productsId}
                      productPrice={selectedPrice?.id}
                      {...{ sendConfirmOrderPayload, boletoUrl, isLoadingOrder }}
                    />
                  )}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        )}
      </CardSelectPlan>
    </>
  )
}

export { Payment }
