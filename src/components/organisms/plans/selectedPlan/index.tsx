import {
  Button,
  Divider,
  Flex,
  Switch,
  Text,
} from "@chakra-ui/react"
import { Icon } from "@iconify/react"
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
    <Flex mt="42px" p="1em">
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
    </Flex>
  )
}