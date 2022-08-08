import { Avatar, Text } from 'components'
import { ReactElement } from 'react'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import {
  BoxChatMain, BoxContainer,
  ContainerCustom, MainContainer
} from './style'

import { defaultProps, Props } from './types'

const BoxChat = ({
  isOwnUser,
  username,
  message,
  date,
  avatarUrl,
}: Props): ReactElement => {
  const { colorMode } = useThemeStore()
  return (
    <BoxChatMain justifyContent={isOwnUser ? 'flex-end' : 'flex-start'}>
      <ContainerCustom
        display={'flex'}
        flexDirection={isOwnUser ? 'row-reverse' : 'row'}
        isOwnUser={isOwnUser}
        alignItems="end"
      >
        {!isOwnUser && <Avatar size="sm" src={avatarUrl} name={username} />}
        <MainContainer isOwnUser={isOwnUser}>
          <Text
            fontSize="0.7rem"
            mb={1}
            mr={1}
            textAlign="right"
            color={colors.secondaryText[colorMode]}
          >
            {date}
          </Text>
          <BoxContainer isOwnUser={isOwnUser}>
            {!isOwnUser && (
              <Text
                fontSize="0.9rem"
                color={colors.generalText[colorMode]}
                fontWeight="bold"
              >
                {username}
              </Text>
            )}
            <Text fontSize="0.85rem" color={colors.generalText[colorMode]}>
              {message}
            </Text>
          </BoxContainer>
        </MainContainer>
      </ContainerCustom>
    </BoxChatMain>
  )
}

BoxChat.defaultProps = defaultProps

export { BoxChat }
