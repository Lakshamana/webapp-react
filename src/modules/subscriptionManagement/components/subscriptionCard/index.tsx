import { Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useThemeStore } from "services/stores"
import { colors } from "styles"

export const SubscriptionCard = () => {
  const { label, subtitle, price } = {
    label: 'ABS Monthly Plan',
    subtitle: 'Flameng - Campeonato Carioca',
    price: '$12,99/mo'
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
          <Flex>
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