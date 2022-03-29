import { Icon } from '@iconify/react'
import { useHistory } from 'react-router-dom'
import { useDisclosure } from '@chakra-ui/hooks'
import { Container, Text, Avatar } from 'components'
import { useThemeStore } from 'services/stores'

import { ModalLogout } from '../modalLogout'
import { PropsUserSidebar } from './types'
import { UserContainer } from './styles'
import { Flex, Button } from '@chakra-ui/react'

const UserSidebar = ({
  account,
  toggleColorMode }: PropsUserSidebar) => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useThemeStore()

  return (
    <>
      <ModalLogout
        isOpen={isOpen}
        onClose={onClose}
      />
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
          <Text ellipsis>
            {account?.username || account?.display_name}
          </Text>
        </Container>
        <Flex gridGap={3} pt={5}>
          <Button
            onClick={() => history.push('/account')}
            variant="outline"
            size="sm"
          >
            <Icon width={18} icon={'mdi:cog-outline'} />
          </Button>
          <Button
            onClick={toggleColorMode}
            variant="outline"
            size="sm"
          >
            {
              colorMode === 'dark'
                ? <Icon width={18} icon={'mdi:white-balance-sunny'} />
                : <Icon width={18} icon={'mdi:moon-waning-crescent'} />
            }
          </Button>
          <Button
            onClick={onOpen}
            variant="outline"
            size="sm"
          >
            <Icon width={18} icon={'mdi:power'} />
          </Button>
        </Flex>
      </UserContainer>
    </>
  )
}

export { UserSidebar }
