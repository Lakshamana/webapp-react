import { Divider, Center } from '@chakra-ui/layout'
import { Text, Avatar, Container } from 'components'
import { colors } from 'styles'
import { TextContainer } from './styles'
import { PropsUserMenu } from './types'

const UserMenu = ({ colorMode, account, avatar_url }: PropsUserMenu) => (
  <>
    <TextContainer maxWidth={['150px']} pr={2}>
      <Center pr={4} height="30px">
        <Divider orientation="vertical" color={colors.grey['700']} />
      </Center>
      <Text ellipsis color={colors.secondaryText[colorMode]}>
        {account?.username || account?.display_name}
      </Text>
    </TextContainer>
    <Container>
      <Avatar name={account?.username || ''} width={'40px'} height={'40px'} src={avatar_url || ''} />
    </Container>
  </>
)

export { UserMenu }
