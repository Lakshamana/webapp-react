import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  // Button,
  // Divider,
  Flex,
  // Switch,
  Text,
} from "@chakra-ui/react"
import { Icon } from "@iconify/react"
// import { Input } from "components/molecules"
import {
  ButtonSelectOption,
  CardSelectPlan,
  // InputCustomCreditCard,
} from "./style"
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { Props } from "./types"
import { useState } from "react"
import { ReactComponent as CreditCards } from 'assets/icons/payment/credit-card.svg'
import { CardInfoSpreedly } from "components"
import { useTranslation } from "react-i18next"
// import { ReactComponent as ApplePay } from 'assets/icons/payment/apple-pay.svg'
// import { ReactComponent as GooglePay } from 'assets/icons/payment/google-pay.svg'
// import { ReactComponent as Cryptocurrencies } from 'assets/icons/payment/cryptocurrencies.svg'
// import { ReactComponent as Paypall } from 'assets/icons/payment/paypall.svg'
// import { ReactComponent as Pix } from 'assets/icons/payment/pix.svg'
// import { ReactComponent as Boleto } from 'assets/icons/payment/boleto.svg'

export const SelectOption = ({
  plan,
}: Props) => {
  const { colorMode } = useThemeStore()
  const [selectedOptionState, setselectedOptionState] = useState(false)
  const [selectedOption, setselectedOption] = useState({})
  const { t } = useTranslation()
  return (
    <Flex mt="42px" p="1em" gridGap="4px" flexDirection="column">
      {/* <Text color={colors.secondaryText[colorMode]}>
        <pre>{JSON.stringify(selectedOption, null, 2) }</pre>
      </Text> */}
      <Flex
        maxW="556px"
        w="100%"
        minH="287px"
        height="fit-content"
        borderRadius="8px"
        background={colors.cardBg[colorMode]}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        flexDirection="column"
      >
        <Flex
          w="100%"
          minH="184px"
          h="100%"
          // backgroundImage={`url(${plan.imageUrl})`}
          backgroundImage={`url(https://picsum.photos/340/184)`}
          backgroundSize="100%"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="8px 8px 0 0"
        />
        <Flex w="100%" h="100%" p="20px 25px" alignItems="center">
          <Flex
            flexDirection="column"
            borderRight={`1px solid ${colors.secondaryText[colorMode]}`}
            paddingRight="1em"
          >
            <Text
              color={colors.generalText[colorMode]}
              fontWeight="600"
              fontSize="18px"
            >{plan.name}</Text>
            <Text
              color={colors.secondaryText[colorMode]}
              fontWeight="400"
              fontSize="12px"
            >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.</Text>
          </Flex>
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="center"
            pl="30px"
            onClick={()=>setselectedOptionState(!selectedOptionState)}
          >
            <Icon
              icon={selectedOptionState ? "ic:baseline-expand-more" : "ic:baseline-expand-less"}
              fontSize="30px"
              color={colors.generalText[colorMode]}
            />
          </Flex>
        </Flex>
      </Flex>

      {
        !selectedOptionState && (
          <CardSelectPlan gridGap="24px">
            <Text
              color={colors.secondaryText[colorMode]}
              fontWeight="400"
              fontSize="18px"
            >{t('page.plan.selectOption.title')}</Text>
            {
              plan.productPrices.map((option, key) => (
                <ButtonSelectOption onClick={()=>{
                  setselectedOptionState(true)
                  setselectedOption(option)
                }}
                key={key}
                >
                  <Text>{option.billingTypes.name}</Text>
                  <Text>{option.price}{ option?.billingPeriods && ` / ${option.billingPeriods.name}` }</Text>
                </ButtonSelectOption>
              ))
            }
            {/* <ButtonSelectOption onClick={()=>setselectedOptionState(true)}>
              <Text>A vista</Text>
              <Text>$180.00</Text>
            </ButtonSelectOption>
            <ButtonSelectOption gridGap="24px" onClick={()=>setselectedOptionState(true)}>
              <Flex
                justifyContent="space-between"
                w="100%"
              >
                <Text>Parcelado</Text>
                <Text>2x $12.00</Text>
              </Flex>
              <Divider orientation='vertical' />
              <Text>$34.00</Text>
            </ButtonSelectOption>
            <ButtonSelectOption onClick={()=>setselectedOptionState(true)}>
              <Text>Plano Mensal</Text>
              <Text>$16.00/Mês</Text>
            </ButtonSelectOption> */}
          </CardSelectPlan>
        )
      }

      {
        selectedOptionState && (
          <>
            {/* <CardSelectPlan gridGap="24px">
              <Flex w="100%" flexDir="column">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="16px"
                >Have a promo code?</Text>
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Apply promo code to get discount</Text>
              </Flex>
              <Flex gridGap="12px" w="100%">
                <Input value="3A21698"/>
                <Button
                  w="134px"
                  h="56px"
                  textTransform="uppercase"
                  color="#fff"
                  bg="#0660F9"
                  fontWeight="700"
                  fontSize="16px"
                >apply</Button>
              </Flex>
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Sub total:</Text>
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="400"
                  fontSize="16px"
                >$18,99</Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Coupon discount:</Text>
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="400"
                  fontSize="16px"
                >-$5,99</Text>
              </Flex>

              <Divider color={colors.generalText[colorMode]}/>

              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="700"
                  fontSize="14px"
                >Total:</Text>
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="28px"
                >$12,99</Text>
              </Flex>

            </CardSelectPlan> */}

            {/* <CardSelectPlan gridGap="24px">
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="700"
                  fontSize="16px"
                >Split payment cards and payment methods?</Text>
                <Switch
                  defaultChecked
                />
              </Flex>
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Discount:</Text>
                <Text
                  color="#ED0039"
                  fontWeight="400"
                  fontSize="16px"
                  textDecoration="line-through"
                >$10.00</Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Paymanents:</Text>
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="400"
                  fontSize="16px"
                >$10.00</Text>
              </Flex>
              <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="14px"
                >Balance:</Text>
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="28px"
                >$40.00</Text>
              </Flex>

            </CardSelectPlan> */}

            <CardSelectPlan gridGap="16px">
              <Flex w="100%">
                <Text
                  color={colors.secondaryText[colorMode]}
                  fontWeight="700"
                  fontSize="20px"
                >{t('page.plan.selectOption.choosePaymentMethod')}</Text>
              </Flex>
              {/* TODO: Adicionar credit card do signup depois de concluido */}
              <Accordion allowToggle w="100%" bg={colors.bodyBg[colorMode]} borderRadius="8px" color={colors.generalText[colorMode]}>
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        fontWeight="600"
                        fontSize="14px"
                      >{t('page.plan.selectOption.bankCard')}</Text>
                      <Text
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Pay with Visa, Mastercard, Maestro and Amex</Text>
                    </Flex>
                    <CreditCards height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <CardInfoSpreedly
                      product={selectedOption['productsId']}
                      productPrice={selectedOption['billingTypes'].id}
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              {/* <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Apple Pay</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Lorem ipsum dolor sit amet, consectetur </Text>
                    </Flex>
                    <ApplePay height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Google Pay</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Lorem ipsum dolor sit amet, consectetur </Text>
                    </Flex>
                    <GooglePay height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Cryptocurrencies</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Lorem ipsum dolor sit amet, consectetur </Text>
                    </Flex>
                    <Cryptocurrencies height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Paypal</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Simple, more secure way to pay </Text>
                    </Flex>
                    <Paypall height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Pix</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Fast, your payment approved on time </Text>
                    </Flex>
                    <Pix height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%" bg={colors.white} borderRadius="8px">
                <AccordionItem>
                  <AccordionButton h="80px">
                    <Flex w="100%" flexDir="column" alignItems="flex-start">
                      <Text
                        color={colors.black}
                        fontWeight="600"
                        fontSize="14px"
                      >Boleto</Text>
                      <Text
                        color={colors.black}
                        fontWeight="300"
                        fontSize="14px"
                        w="277px"
                        textAlign="start"
                      >Será aprovado em 1 ou 2 dias úteis </Text>
                    </Flex>
                    <Boleto height="26px"/>
                    <AccordionIcon ml="29px" mr="10px"/>
                  </AccordionButton>
                  <AccordionPanel pb={4} w="100%">
                    <Text
                      color={colors.black}
                      fontWeight="500"
                      fontSize="14px"
                      w="100%"
                      textAlign="center"
                    >Coming Soon!</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> */}

            </CardSelectPlan>
          </>
        )
      }

    </Flex>
  )
}