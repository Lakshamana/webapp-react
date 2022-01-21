import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'contexts/auth'
import { Container, Popover, Modal } from 'components'
import { PopoverOption, UserMenu, NotLogged, UserSidebar } from './components'
import { useAuthStore } from 'services/stores'
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
  const [openModal, setOpenModal] = useState(false)

  const avatar_url = user?.avatar_url

  if (!account) {
    return <NotLogged {...{ display, colorMode }} />
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
              {display === 'menu' && account && (
                <UserMenu {...{ colorMode, account, avatar_url }} />
              )}
              {display === 'sidebar' && <UserSidebar {...{ account }} />}
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
              onClick={() => setOpenModal(true)}
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
        title={t('common.sign_out')}
        subtitle={t('common.confirm_signout')}
        closeButton={false}
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onConfirm={signOut}
      ></Modal>
    </Container>
  )
}

export { UserInfo }
