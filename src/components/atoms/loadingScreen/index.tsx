import { Spinner, Flex } from '@chakra-ui/react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

const LoadingScreen = () => {
  const { colorMode } = useThemeStore()
  return (
    <Flex
      width="100vw"
      height={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
      backgroundColor={colors.bodyBg['dark']}
    >
      <Spinner
        speed="0.65s"
        thickness={'3px'}
        size={'xl'}
        color={colors.secondaryText[colorMode]}
      ></Spinner>
    </Flex>
  )
}

export { LoadingScreen }
