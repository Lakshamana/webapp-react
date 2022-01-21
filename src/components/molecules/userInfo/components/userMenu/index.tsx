import { PropsUserMenu } from './types'
import { colors } from 'styles'
import { Text, Avatar, Container } from 'components'
import { TextContainer } from './styles'

const UserMenu = ({ colorMode, account }: PropsUserMenu) => (
  <>
    <TextContainer maxWidth={['150px']}>
      <Text ellipsis color={colors.secondaryText[colorMode]}>
        {account?.username || account?.display_name}
      </Text>
    </TextContainer>
    <Container>
      <Avatar width={'45px'} height={'45px'} src={''} />
    </Container>
  </>
)

export { UserMenu }
