import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'


import { Container, Text, Popover } from 'components'
import { PopoverOption } from './components'

import { PropsUserInfo } from './types'
import {
  UserContainer,
  CircleImage,
  OptionsList,
  TextContainer,
} from './styles'
import { colors } from 'styles'

const UserInfo = ({
  user,
  delimited = true,
  colorMode,
  toggleColorMode,
}: PropsUserInfo) => {
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const { t } = useTranslation()

  return (
    <Container display={['none', 'none', 'none', 'flex']}>
      <Popover
        props={{
          isOpen: open,
          onOpen: () => setOpen(true),
          onClose: () => setOpen(false),
        }}
        background={colors.headerUserPopoverBg[colorMode]}
        trigger={
          <button>
            <UserContainer px={1} {...{ delimited }}>
              <TextContainer maxWidth={['150px']}>
                <Text ellipsis color={colors.secondaryText[colorMode]}>
                  {user?.name || ''}
                </Text>
              </TextContainer>
              <Container>
                <CircleImage width={50} height={50} src={user?.avatar} />
              </Container>
            </UserContainer>
          </button>
        }
      >
        <Container flexDirection="column" width={1}>
          <OptionsList>
            <PopoverOption
              color={colors.generalText[colorMode]}
              text={t('header.userPopover.edit_profile')}
              onClick={() => history.push('/account')}
              icon={
                <Icon
                  width={18}
                  height={18}
                  icon="mdi:account"
                  color={colors.generalText[colorMode]}
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
              text={t('header.userPopover.settings')}
              onClick={() => {}}
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
              onClick={() => {}}
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
