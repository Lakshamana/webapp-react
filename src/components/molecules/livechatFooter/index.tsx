import React, { useState } from "react";
import { Avatar } from "components/atoms";
import {
  LivechatFooterMain,
  IconContainer,
  IconItem,
  InputContainer,
  AnimatedIcon,
  PopoverIcon,
  Reaction,
} from "./style";
import { Props } from "./types";
import { Input } from "components/molecules";
import { availableReactions } from "./settings";

const LivechatFooter = ({
  onPressIcon = () => {},
  value = "",
  onChange = () => {},
  onEnter = () => {},
}: Props) => {
  const [show, setShow] = useState(false);
  return (
    <LivechatFooterMain>
      <IconContainer flex={2} justifyContent="center">
        <AnimatedIcon
          width={32}
          icon="majesticons:emoji-happy-line"
          color="#fff"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setShow(!show);
            onPressIcon();
          }}
        />
        {show && (
          <PopoverIcon gridTemplateColumns="1fr 1fr 1fr">
            {availableReactions.map((reaction) => (
              <Reaction key={`${reaction.value}-popover`} p={1} m={1}>
                {reaction.value}
              </Reaction>
            ))}
          </PopoverIcon>
        )}
      </IconContainer>
      <InputContainer flex={8} justifyContent="center">
        <Input
          value={value}
          onChange={onChange}
          rightIcon="send"
          onEnterPress={() => onEnter()}
        />
      </InputContainer>
    </LivechatFooterMain>
  );
};

export { LivechatFooter };