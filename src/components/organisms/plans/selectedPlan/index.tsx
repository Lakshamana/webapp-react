import {
  Button,
  Divider,
  Flex,
  Switch,
  Text,
} from "@chakra-ui/react"
import { Icon } from "@iconify/react"
import { Input } from "components/molecules"
import {
  ButtonSelectOption,
  CardSelectPlan,
} from "./style"
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const SelectedPlan = () => {
  const { colorMode } = useThemeStore()
  const plan = {
    imageUrl:
      'https://bitcoinist.com/wp-content/uploads/2021/09/dogecoi.jpeg',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Platinum - Subscription Title',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
    value: 199,
  }
  return (
    <Flex mt="42px" p="1em" gridGap="4px" flexDirection="column">
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
          backgroundImage={`url(${plan.imageUrl})`}
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
            >{plan.title}</Text>
            <Text
              color={colors.secondaryText[colorMode]}
              fontWeight="400"
              fontSize="12px"
            >{plan.subtitle}</Text>
          </Flex>
          <Flex
            h="100%"
            justifyContent="center"
            alignItems="center"
            pl="30px"
          >
            <Icon
              icon="ic:baseline-expand-more"
              fontSize="30px"
              color={colors.generalText[colorMode]}
            />
          </Flex>
        </Flex>
      </Flex>

      <CardSelectPlan gridGap="24px">
        <Text
          color={colors.secondaryText[colorMode]}
          fontWeight="400"
          fontSize="18px"
        >Select option:</Text>
        <ButtonSelectOption>
          <Text>A vista</Text>
          <Text>$180.00</Text>
        </ButtonSelectOption>
        <ButtonSelectOption gridGap="24px">
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
        <ButtonSelectOption>
          <Text>Plano Mensal</Text>
          <Text>$16.00/Mês</Text>
        </ButtonSelectOption>
      </CardSelectPlan>

      <CardSelectPlan gridGap="24px">
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

      </CardSelectPlan>
    </Flex>
  )
}