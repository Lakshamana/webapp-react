import { useHistory } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useDisclosure } from '@chakra-ui/hooks'
import { useAuthStore } from 'services/stores'
import { Container, Popover } from 'components'
import { PopoverOption, UserMenu, NotLogged, UserSidebar, ModalLogout } from './components'
import { PropsUserInfo } from './types'
import { UserContainer, OptionsList } from './styles'
import { colors } from 'styles'

const UserInfo = ({
  display,
  delimited = true,
  colorMode,
  toggleColorMode,
  closeSideMenu
}: PropsUserInfo) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { account, user } = useAuthStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  if (!account) {
    return <NotLogged {...{ display, colorMode }} />
  }

  if (display === 'sidebar') {
    return <UserSidebar {...{ account, toggleColorMode }} />
  }

  return (
    <>
      <ModalLogout
        isOpen={isOpen}
        onClose={onClose}
      />
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
              <UserContainer
                onClick={closeSideMenu}
                {...{ delimited }}>
                <UserMenu {...{ colorMode, account, avatar_url: user?.avatar_url }} />
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
      </Container>
    </>
  )
}

export { UserInfo }
