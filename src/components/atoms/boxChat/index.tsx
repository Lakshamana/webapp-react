import { ReactElement } from "react";
import { Avatar } from "../avatar";
import {
  AvatarContainer,
  BoxChatMain,
  MainContainer,
  BoxContainer,
  DateContainer,
  DateText,
  NameUserText,
  MessageText,
  ContainerCustom,
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
      <ContainerCustom display={'flex'} flexDirection={isOwnUser ? "row-reverse" : "row"} isOwnUser={isOwnUser}>
        <AvatarContainer>
          <Avatar src={avatarUrl} bg="#e1e1e1" color="#000" />
        </AvatarContainer>
        <MainContainer isOwnUser={isOwnUser}>
          <DateContainer>
            <DateText>{date}</DateText>
            <BoxContainer isOwnUser={isOwnUser} minHeight={[86]}>
              <NameUserText color={isOwnUser ? "#fff" : "#444"}>
                {username}
              </NameUserText>
              <MessageText color={isOwnUser ? "#fff" : "#444"}>
                {message}
              </MessageText>
            </BoxContainer>
          </DateContainer>
        </MainContainer>
      </ContainerCustom>
    </BoxChatMain>
  );
};

BoxChat.defaultProps = defaultProps;

export { BoxChat };
