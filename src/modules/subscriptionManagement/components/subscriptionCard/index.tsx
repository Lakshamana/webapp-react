import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useThemeStore } from "services/stores"
import { colors } from "styles"

export const SubscriptionCard = () => {
  const {
    label,
    subtitle,
    price,
    detail,
  } = {
    label: 'ABS Monthly Plan',
    subtitle: 'Flameng - Campeonato Carioca',
    price: '$12,99/mo',
    detail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  }
  const { colorMode } = useThemeStore()
  const [openDetail, setopenDetail] = useState(false)
  return (
    <Flex
      bg={colors.cardBg[colorMode]}
      color={colors.generalText[colorMode]}
      borderRadius='4px'
      w="558px"
      h="100%"
      p="25px"
      pt='33px'
      flexDir='column'
    >
      <Flex
        w='100%'
        gridGap='8px'
        justifyContent={[
          'flex-start',
          'flex-start',
          'flex-start',
          'space-between',
        ]}
        flexDir={[
          'column',
          'column',
          'column',
          'row'
        ]}
      >
        <Flex flexDir='column' gridGap='4px'>
          <Text fontWeight='400' fontSize='20px' lineHeight='24px'>{label}</Text>
          <Text fontWeight='400' fontSize='14px' lineHeight='17px'>{subtitle}</Text>
        </Flex>
        <Text fontWeight='400' fontSize='20px' lineHeight='24px'>{price}</Text>
      </Flex>
      <Flex mt='33px'>
        <Button
          variant='unstyled'
          fontSize='14px'
          fontWeight='600'
          color='#0660f9'
          _focus={{
            outline: 'none'
          }}
          disabled={openDetail}
          onClick={() => setopenDetail(!openDetail)}
        >PLAN DETAIL</Button>
      </Flex>
      {
        openDetail && (
          <Flex flexDir='column' gridGap="28px" mt="40px">
            <Flex flexDir='column' gridGap="28px">
              <Text fontWeight='400' fontSize='20px' lineHeight='24px'>Plan detail</Text>
              <Text>{detail}</Text>
              <Text fontWeight='400' fontSize='14px' lineHeight='17px'>{subtitle}</Text>
            </Flex>
            <Flex w='100%' justifyContent='center'>
              <Button
                variant='unstyled'
                fontSize='14px'
                fontWeight='600'
                // color='#0660f9'
                _focus={{
                  outline: 'none'
                }}
                onClick={() => setopenDetail(!openDetail)}
              >CLOSE</Button>
            </Flex> 
          </Flex>
        )
      }
    </Flex>
  )
}