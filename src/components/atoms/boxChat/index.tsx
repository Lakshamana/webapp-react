import React, { ReactElement } from 'react'
import {
  MainContainer,
  BoxContainer,
  DateContainer,
  DateText,
  NameUserText,
  MessageText,
} from './style'

import { Props } from './types'

const BoxChar = ({
  isOwnUser = false,
  username,
  message,
  date,
}: Props): ReactElement => {
  return (
    <MainContainer>
      <DateContainer>
        <DateText>{date}</DateText>
      </DateContainer>
      <BoxContainer isOwnUser={isOwnUser} minHeight={[86]}>
        <NameUserText color={isOwnUser ? '#fff' : '#444'}>
          {username}
        </NameUserText>
        <MessageText color={isOwnUser ? '#fff' : '#444'}>{message}</MessageText>
      </BoxContainer>
    </MainContainer>
  )
}

export default BoxChar
