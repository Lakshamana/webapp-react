import { useHistory } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'contexts/auth'
import { Container, Text, Popover, Avatar } from 'components'
import { PopoverOption } from './components'
import { useAuthStore } from 'services/stores'

import { PropsUserInfo } from './types'
import { UserContainer, OptionsList, TextContainer } from './styles'
import { colors } from 'styles'
import { Link } from '@chakra-ui/react'

const UserInfo = ({
  delimited = true,
  colorMode,
  toggleColorMode,
}: PropsUserInfo) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { signOut } = useAuth()
  const { account } = useAuthStore()

  if (!account) {
    return (
      <Container>
        <TextContainer maxWidth={['150px']}>
          <Text ellipsis color={colors.secondaryText[colorMode]}>
            <Link href='/login'>
              Login
            </Link>
          </Text>
        </TextContainer>
      </Container>
    )
  }

  return (
    <Container display={['none', 'none', 'none', 'flex']} alignItems={'center'}>
      <TextContainer maxWidth={['150px']}>
        <Text ellipsis color={colors.secondaryText[colorMode]}>
          {account?.username || account?.display_name}
        </Text>
      </TextContainer>
      <Popover
        hasArrow
        isLazy
        placement={'bottom-end'}
        popoverTrigger={
          <button>
            <UserContainer {...{ delimited }}>
              <Container>
                <Avatar width={'45px'} height={'45px'} src={''} />
              </Container>
            </UserContainer>
          </button>
        }
      >
        <Container flexDirection="column" width={1}>
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
                colorMode === 'dark' ? (
                  <Icon
                    width={18}
                    height={18}
                    icon="mdi:white-balance-sunny"
                    color={colors.generalText[colorMode]}
                  />
                ) : (
                  <Icon
                    width={18}
                    height={18}
                    color={colors.generalText[colorMode]}
                    icon="mdi:moon-waning-crescent"
                  />
                )
              }
            />
            <PopoverOption
              color={colors.generalText[colorMode]}
              onClick={signOut}
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
  )
}

export { UserInfo }
