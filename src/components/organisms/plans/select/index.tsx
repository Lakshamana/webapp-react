import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const SelectPlan = () => {
  const { colorMode } = useThemeStore()
  const plans = [
    {
      imageUrl:
        'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/35211_4DA8E347FB9842EB.jpg?w=876&h=484&crop=1',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Platinum - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 199,
    },
    {
      imageUrl:
        'https://www.show.news/__export/1629475032162/sites/debate/img/2021/08/20/lana.jpg_839202635.jpg',
      imageAlt: 'Rear view of modern home with pool',
      title: 'Gold - Subscription Title',
      subtitle:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ate incididunt ut labore et.',
      value: 165,
    },
    {
      imageUrl:
        'https://www.show.news/__export/1629475032162/sites/debate/img/2021/08/20/lana.jpg_839202635.jpg',
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
