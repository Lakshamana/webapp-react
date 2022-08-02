import { useDisclosure } from '@chakra-ui/hooks'
import { Icon } from '@iconify/react'
import { Avatar, Button, Container, Text } from 'components'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'

import { Flex } from '@chakra-ui/react'
import { ModalLogout } from '../modalLogout'
import { UserContainer } from './styles'
import { PropsUserSidebar } from './types'

import { colors } from 'styles'

const UserSidebar = ({ account, avatarUrl, toggleColorMode }: PropsUserSidebar) => {
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useThemeStore()

  return (
    <>
      <ModalLogout isOpen={isOpen} onClose={onClose} />
      <UserContainer
        py={'25px'}
        m={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Container ml={2}>
          <Avatar
            width={'55px'}
            height={'55px'}
            name={account?.username || ''}
            src={avatarUrl || ''}
          />
        </Container>
        <Container px={2} mt={2} fontSize={'1.1rem'} fontWeight={'bolder'}>
          <Text ellipsis>{account?.username || account?.display_name}</Text>
        </Container>
        <Flex gridGap={3} pt={5}>
          <Button
            size="sm"
            onClick={() => history.push('/account')}
            variant="unstyled"
            color={colors.brand.indicator[colorMode]}
          >
            <Icon width={25} icon={'mdi:cog-outline'} />
          </Button>
          <Button size="sm" onClick={toggleColorMode} variant="unstyled" color={colors.brand.indicator[colorMode]}>
            <Icon
              width={25}
              icon={
                colorMode === 'dark'
                  ? 'mdi:white-balance-sunny'
                  : 'mdi:moon-waning-crescent'
              }
            />
          </Button>
          <Button size="sm" onClick={onOpen} variant="unstyled" color={colors.brand.indicator[colorMode]}>
            <Icon width={25} icon={'mdi:power'} />
          </Button>
        </Flex>
      </UserContainer>
    </>
  )
}

export { UserSidebar }
