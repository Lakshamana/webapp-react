import { ReactElement } from 'react'
import {
  BoxChatMain,
  MainContainer,
  BoxContainer,
  NameUserText,
  MessageText,
  ContainerCustom,
  DateText
} from './style'
import { Avatar } from 'components'

import { Props, defaultProps } from './types'

const BoxChat = ({
  isOwnUser,
  username,
  message,
  date,
  avatarUrl,
}: Props): ReactElement => {
  return (
    <BoxChatMain justifyContent={isOwnUser ? 'flex-end' : 'flex-start'}>
      <ContainerCustom
        display={'flex'}
        flexDirection={isOwnUser ? 'row-reverse' : 'row'}
        isOwnUser={isOwnUser}
      >
        <Avatar mt={'18px'} size="sm" src={avatarUrl} name={username} />
        <MainContainer isOwnUser={isOwnUser}>
          <DateText mb={2}>
            {/* {formatDistance(new Date(date), new Date(), {
              addSuffix: true,
            })} */}
          </DateText>
          <BoxContainer isOwnUser={isOwnUser}>
            <NameUserText isOwnUser={isOwnUser}>{username}</NameUserText>
            <MessageText isOwnUser={isOwnUser}>{message}</MessageText>
          </BoxContainer>
        </MainContainer>
      </ContainerCustom>
    </BoxChatMain>
  )
}

BoxChat.defaultProps = defaultProps

export { BoxChat }
