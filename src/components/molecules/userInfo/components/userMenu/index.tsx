import { Center, Divider, Text } from '@chakra-ui/react'
import { Avatar, Container } from 'components'
import { colors } from 'styles'
import { TextContainer } from './styles'
import { PropsUserMenu } from './types'

const UserMenu = ({ colorMode, account, avatar_url }: PropsUserMenu) => (
  <>
    <TextContainer maxWidth={['150px']} pr={2}>
      <Center pr={4} height="30px">
        <Divider orientation="vertical" color={colors.grey['700']} />
      </Center>
      <Text isTruncated maxW={'20ch'} fontSize={'1.1rem'} color={colors.generalText[colorMode]} maxWidth='20ch'>
        {account?.display_name || account?.username}
      </Text>
    </TextContainer>
    <Container>
      <Avatar name={account?.username || ''} width={'34px'} height={'34px'} src={avatar_url || ''} />
    </Container>
  </>
)

export { UserMenu }
