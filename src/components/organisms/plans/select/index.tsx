import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { Props } from './types'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const SelectPlan = ({ plans, selectPlan, nextStep }: Props) => {
  const { colorMode } = useThemeStore()
  return (
    <Flex flexDirection="column" mt="44px">
      <Text
        fontSize="28px"
        fontWeight="500"
        color={colors.generalText[colorMode]}
      >
        Select Your Plan
      </Text>
      <Flex gridGap="24px" mt="16px">
        {plans && plans.map((plan) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="8px"
            overflow="hidden"
            w="340px"
            background={colors.cardBg[colorMode]}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          >
            <Box
              h="184px"
              w="100%"
              // TODO: add imagem 
              backgroundImage={`url(https://picsum.photos/340/184)`}
              backgroundSize="100%"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
            <Box p="20px">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="600"
                fontSize="18px"
              >{plan.name}</Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontWeight="400"
                fontSize="12px"
                maxW="256px"
                w="100%"
                mt="6px"
                // TODO: add description
              >Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.</Text>
              <Flex
                mt="15px"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  h="36px"
                  w="156px"
                  bg="#0660F9"
                  color="white"
                  fontSize="12px"
                  textTransform="uppercase"
                  fontWeight="400"
                  onClick={()=>{
                    selectPlan(plan);
                    nextStep()
                  }}
                >Select</Button>
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="18px"
                >{plan.startingPrice}</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
