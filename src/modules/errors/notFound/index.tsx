import { Flex } from '@chakra-ui/layout'
import { Link } from 'components'

const NotFound = () => (
  <Flex alignItems="center" justifyContent="center" flexDirection="column">
    <h1>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </Flex>
)

export { NotFound }
