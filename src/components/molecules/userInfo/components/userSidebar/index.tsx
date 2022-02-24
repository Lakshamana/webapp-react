import { Container, Text, Avatar } from 'components'

import { PropsUserSidebar } from './types'
import { UserContainer } from './styles'

const UserSidebar = ({ account }: PropsUserSidebar) => (
  <UserContainer
    py={'15px'}
    m={2}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Container ml={2}>
      <Avatar width={'45px'} height={'45px'} src={account?.avatar} />
    </Container>
    <Container px={2} mt={2} fontSize={'1.1rem'} fontWeight={'bolder'}>
      <Text ellipsis>{account?.username || account?.display_name}</Text>
    </Container>
  </UserContainer>
)

export { UserSidebar }
