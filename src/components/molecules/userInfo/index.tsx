import { useDisclosure } from '@chakra-ui/hooks'
import { Icon } from '@iconify/react'
import { Container, Popover } from 'components'
import { ThumborInstanceTypes, useThumbor } from 'hooks/useThumbor'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useAuthStore } from 'services/stores'
import { colors } from 'styles'
import {
  ModalLogout,
  NotLogged,
  PopoverOption,
  UserMenu,
  UserSidebar
} from './components'
import { OptionsList, UserContainer } from './styles'
import { PropsUserInfo } from './types'

const UserInfo = ({
  display,
  delimited = true,
  colorMode,
  toggleColorMode,
  closeSideMenu,
}: PropsUserInfo) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { generateImage } = useThumbor()
  const { account, user } = useAuthStore()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const getImageUrl = (imagePath: string) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, imagePath)
    return image
  }

  if (!account) {
    return <NotLogged {...{ display, colorMode }} />
  }

  if (display === 'sidebar') {
    return (
      <UserSidebar
        {...{
          account,
          avatarUrl: getImageUrl(user?.avatar?.imgPath ?? '') || '',
          toggleColorMode,
        }}
      />
    )
  }

  return (
    <>
      <ModalLogout isOpen={isOpen} onClose={onClose} />
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
              <UserContainer onClick={closeSideMenu} {...{ delimited }}>
                <UserMenu
                  {...{
                    colorMode,
                    account,
                    avatar_url: getImageUrl(user?.avatar?.imgPath ?? ''),
                  }}
                />
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
