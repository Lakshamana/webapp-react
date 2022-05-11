import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const SelectPlan = () => {
  const { colorMode } = useThemeStore()
  const plans = [
    {
      imageUrl:
        'https://bitcoinist.com/wp-content/uploads/2021/09/dogecoi.jpeg',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Platinum - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 199,
    },
    {
      imageUrl:
        'https://usethebitcoin.com/wp-content/uploads/2019/08/How-to-sell-Ethereum-728x454.jpg',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Gold - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 165,
    },
    {
      imageUrl:
        'https://timnews.com.br/system/images/photos/14737039/original/open-uri20211021-19-1xss92r?1634827953',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Silver - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 85,
    },
  ]
  return (
    <Flex flexDirection="column" mt="44px">
      <Text
        fontSize="28px"
        fontWeight="500"
        color={colors.generalText[colorMode]}
      >
        Title - Lorem ipsum
      </Text>
      <Flex gridGap="24px" mt="16px">
        {plans.map((plan) => (
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="8px"
            overflow="hidden"
            w="340px"
            background={colors.cardBg[colorMode]}
          >
            <Box
              h="184px"
              w="100%"
              backgroundImage={`url(${plan.imageUrl})`}
              backgroundSize="100%"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
            />
            <Box p="20px">
              <Text
                color={colors.generalText[colorMode]}
                fontWeight="600"
                fontSize="18px"
              >{plan.title}</Text>
              <Text
                color={colors.secondaryText[colorMode]}
                fontWeight="400"
                fontSize="12px"
                maxW="256px"
                w="100%"
                mt="6px"
              >{plan.subtitle}</Text>
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
                >Select</Button>
                <Text
                  color={colors.generalText[colorMode]}
                  fontWeight="400"
                  fontSize="18px"
                >${plan.value}</Text>
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  )
}
