import { Divider, Flex, Link as ChakraLink, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useThemeStore } from "services/stores"
import { colors } from "styles"

export const BillingInformation = ({
  label = 'ABS Monthly Plan',
  subtitle = 'Flameng - Campeonato Carioca',
  price = '$12,99/mo',
}) => {
  const { colorMode } = useThemeStore()
  return (
    <Flex
      flexDir='column'
      color={colors.generalText[colorMode]}
      m='1em 0'
      gridGap='24px'
    >
      <Flex alignItems='center' justify='space-between'>
        <Text fontWeight='700' fontSize='18px'>Your Subscription</Text>
        <Link to="/subscription-management">
          <ChakraLink color='#2984F5' >
            Manage Your Subscription
          </ChakraLink>
        </Link>
      </Flex>
      <Flex
        w='100%'
        gridGap='8px'
        justifyContent='space-between'
      >
        <Flex flexDir='column' gridGap='4px'>
          <Text fontWeight='400' fontSize='20px' lineHeight='24px'>{label}</Text>
          <Text fontWeight='400' fontSize='14px' lineHeight='17px'>{subtitle}</Text>
        </Flex>
        <Text fontWeight='400' fontSize='20px' lineHeight='24px'>{price}</Text>
      </Flex>
      <Divider />
      <Flex alignItems='center' justify='space-between'>
        <Text fontWeight='500' fontSize='16px'>Next Billing Date</Text>
        <Text fontWeight='400' fontSize='14px'>$12,99 on 08/12/21</Text>
      </Flex>
      <Divider />
      <Flex alignItems='center' justify='space-between'>
        <Text fontWeight='500' fontSize='16px'>Last Billing Date</Text>
        <Text fontWeight='400' fontSize='14px'>$12,99 on 08/12/21</Text>
      </Flex>
    </Flex>
  )
}