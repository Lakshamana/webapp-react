import { Spinner, Center } from '@chakra-ui/react'
import { colors } from 'styles'

const LoadingItem = () => (
  <Center width={120} height={100}>
    <Spinner size={'xl'} color={colors.brand.primary['dark']} />
  </Center>
)

export { LoadingItem }
