import React, { ReactElement } from "react";
import { Avatar } from "../avatar";
import {
  BoxChatMain,
  AvatarContainer,
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
  avatarUrl = "bx:bx-user",
}: Props): ReactElement => {
  return (
    <BoxChatMain justifyContent={isOwnUser ? "flex-end" : "flex-start"}>
      <AvatarContainer>
        <Avatar icon={avatarUrl} backgroundAvatar="#e1e1e1" colorIcon="#000" />
      </AvatarContainer>
      <MainContainer width={["80%", "60%", "40%"]}>
        <DateContainer>
          <DateText>{date}</DateText>
        </DateContainer>
        <BoxContainer isOwnUser={isOwnUser} minHeight={[86]}>
          <NameUserText color={isOwnUser ? "#fff" : "#444"}>
            {username}
          </NameUserText>
          <MessageText color={isOwnUser ? "#fff" : "#444"}>
            {message}
          </MessageText>
        </BoxContainer>
      </MainContainer>
    </BoxChatMain>
  );
};

BoxChat.defaultProps = defaultProps;

export { BoxChat };
