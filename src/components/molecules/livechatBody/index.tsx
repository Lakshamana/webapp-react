import React from "react";
import { MainChatBody } from "./style";
import { Props } from "./types";

import { BoxChat } from "components/atoms";

const LivechatBody = ({ options = [] }: Props) => {
  return (
    <MainChatBody>
      {options.map((e) => (
        <BoxChat
          isOwnUser={e.isOwnUser}
          username={e.username}
          date={e.date}
          message={e.message}
          avatarUrl={e.iconUrl}
        />
      ))}
    </MainChatBody>
  );
};

export { LivechatBody };
