import { useHistory } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useDisclosure, useBoolean } from '@chakra-ui/hooks'
import { useAuth } from 'contexts/auth'
import { useAuthStore } from 'services/stores'
import { Container, Popover, Modal } from 'components'
import { PopoverOption, UserMenu, NotLogged, UserSidebar } from './components'
import { PropsUserInfo } from './types'
import { UserContainer, OptionsList } from './styles'
import { colors } from 'styles'

const UserInfo = ({
  display,
  delimited = true,
  colorMode,
  toggleColorMode,
}: PropsUserInfo) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { signOut } = useAuth()
  const { account, user } = useAuthStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [signoutLoading, setSignoutLoading] = useBoolean()

  const avatar_url = user?.avatar_url

  if (!account) {
    return <NotLogged {...{ display, colorMode }} />
  }

  if (display === 'sidebar') {
    return <UserSidebar {...{ account }} />
  }

  return (
    <Container
      display={
        display === 'menu'
          ? ['none', 'none', 'none', 'flex']
          : ['flex', 'flex', 'flex', 'none']
      }
      alignItems={'center'}
      alignSelf={'center'}
    >
      <Popover
        hasArrow
        isLazy
        placement={'bottom-end'}
        display="sidebar"
        popoverTrigger={
          <button>
            <UserContainer {...{ delimited }}>
              <UserMenu {...{ colorMode, account, avatar_url }} />
            </UserContainer>
          </button>
        }
      >
        <Container flexDirection="column">
          <OptionsList>
            <PopoverOption
              color={colors.generalText[colorMode]}
              text={t('header.userPopover.settings')}
              onClick={() => history.push('/account')}
              icon={
                <Icon
                  width={18}
                  height={18}
                  color={colors.generalText[colorMode]}
                  icon="mdi:cog-outline"
                />
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              text={
                colorMode === 'dark'
                  ? t('header.userPopover.deactivate_dark')
                  : t('header.userPopover.activate_dark')
              }
              onClick={toggleColorMode}
              icon={
                <Icon
                  width={18}
                  height={18}
                  icon={
                    colorMode === 'dark'
                      ? 'mdi:white-balance-sunny'
                      : 'mdi:moon-waning-crescent'
                  }
                  color={colors.generalText[colorMode]}
                />
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              onClick={onOpen}
              text={t('header.userPopover.exit')}
              icon={
                <Icon
                  width={18}
                  height={18}
                  icon="mdi:power"
                  color={colors.generalText[colorMode]}
                />
              }
            />
          </OptionsList>
        </Container>
      </Popover>
      <Modal
        isCentered
        title={t('common.sign_out')}
        subtitle={t('common.confirm_signout')}
        closeButton={false}
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={() => {
          signOut()
          setSignoutLoading.on()
        }}
        loading={signoutLoading}
      ></Modal>
    </Container>
  )
}

export { UserInfo }
