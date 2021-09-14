import React, { ReactElement } from "react";
import {
  MainContainer,
  BoxContainer,
  DateContainer,
  DateText,
  NameUserText,
  MessageText,
} from "./style";

import { Props, defaultProps } from "./types";

const BoxChat = ({
  isOwnUser,
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
        <NameUserText color={isOwnUser ? "#fff" : "#444"}>
          {username}
        </NameUserText>
        <MessageText color={isOwnUser ? "#fff" : "#444"}>{message}</MessageText>
      </BoxContainer>
    </MainContainer>
  );
};

BoxChat.defaultProps = defaultProps;

export { BoxChat };
