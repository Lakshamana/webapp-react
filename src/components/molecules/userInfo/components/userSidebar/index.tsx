import { Container, Text, Avatar, Button } from 'components'
import { useThemeStore } from 'services/stores'

import { PropsUserSidebar } from './types'
import { UserContainer } from './styles'
import { Flex } from '@chakra-ui/react'

const UserSidebar = ({ account }: PropsUserSidebar) => {
  const { colorMode } = useThemeStore()
  return (
    <UserContainer
      py={'25px'}
      m={2}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container ml={2}>
        <Avatar width={'55px'} height={'55px'} src={account?.avatar} />
      </Container>
      <Container px={2} mt={2} fontSize={'1.1rem'} fontWeight={'bolder'}>
        <Text ellipsis>{account?.username || account?.display_name}</Text>
      </Container>
      <Flex gridGap={3} pt={5}>
        <Button
          iconName="cog-outline"
          variant="outline"
          label="Edit"
          size="sm"
        ></Button>
        <Button
          iconName={
            colorMode === 'dark'
              ? 'white-balance-sunny'
              : 'moon-waning-crescent'
          }
          variant="outline"
          label={colorMode === 'dark' ? 'light' : 'dark'}
          size="sm"
        ></Button>
        <Button
          iconName="power"
          variant="outline"
          label="Sair"
          size="sm"
        ></Button>
      </Flex>
    </UserContainer>
  )
}

export { UserSidebar }
