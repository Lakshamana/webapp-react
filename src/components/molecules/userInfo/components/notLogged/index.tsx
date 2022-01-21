import { useHistory } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import { Container, Text, Button } from 'components'
import { colors } from 'styles'
import { TextContainer, OptionsContainer } from './styles'
import { PropsNotLogged } from './types'

const NotLogged = ({ display, colorMode }: PropsNotLogged) => {
  const history = useHistory()
  return (
    <Container alignSelf={'center'}>
      {
        display === 'menu' &&
        <Container display={['none', 'none', 'flex']}>
          <TextContainer maxWidth={['150px']}>
            <Text ellipsis color={colors.secondaryText[colorMode]}>
              <Link href='/login'>
                Login
              </Link>
            </Text>
          </TextContainer>
        </Container>
      }
      {
        display === 'sidebar' &&
        <Container display={['flex', 'flex', 'none']}>
          <OptionsContainer>
            <Button
              label='Sign Up'
              width={254}
              onClick={() => history.push('/signup')}
            />
            <Button
              variant={'outline'}
              mt={2}
              label='Log In'
              width={254}
              onClick={() => history.push('/login')}
            />
          </OptionsContainer>
        </Container>
      }
    </Container>
  )
}

export { NotLogged }