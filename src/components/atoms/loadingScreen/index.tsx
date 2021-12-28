import { Spinner, Flex } from '@chakra-ui/react'
import { colors } from 'styles'

const LoadingScreen = () => (
  <Flex
    width="100vw"
    height={'100vh'}
    alignItems={'center'}
    justifyContent={'center'}
    backgroundColor={colors.bodyBg['dark']}
  >
    <Spinner size={'xl'} color={colors.brand.primary['dark']}></Spinner>
  </Flex>
)

export { LoadingScreen }
