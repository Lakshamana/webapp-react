import { ReactElement } from "react";
import {
  AvatarContainer,
  AvatarCustom,
  BoxChatMain,
  MainContainer,
  BoxContainer,
  DateContainer,
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
          <AvatarCustom src={avatarUrl} bg="#e1e1e1" color="#000" />
        </AvatarContainer>
        <MainContainer isOwnUser={isOwnUser}>
          <DateContainer>
            <NameUserText isOwnUser={isOwnUser}>{username}</NameUserText>
            <BoxContainer isOwnUser={isOwnUser} minHeight={[86]}>
              <MessageText isOwnUser={isOwnUser}>
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
