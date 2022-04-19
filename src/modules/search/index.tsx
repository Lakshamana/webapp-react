import { Divider } from '@chakra-ui/react'
import { Container } from 'components'
import { colors } from 'styles'

const SearchPage = () => {
  return (
    <Container
      flexDirection={'column'}
      py={32}
      px={[2, 32, 32, 64]}
      width={'100%'}
    >
      <Divider
        orientation="horizontal"
        height={2}
        width={'100%'}
        mt={4}
        mb={6}
        color={colors.grey['800']}
      />
    </Container>
  )
}

export { SearchPage }
