import React from "react";
import { Avatar } from "components/atoms";
import {
  HeaderMain,
  AvatarContainer,
  TextContainer,
  DotsContainer,
  Text,
} from "./style";
import { Props } from "./types";
import { Icon } from "@iconify/react";

const LivechatHeader = ({ title = "", onCloseChat = () => {} }: Props) => (
  <HeaderMain height={["81px"]} width={["100%"]} display="flex">
    <AvatarContainer flex={3} width={["100%"]}>
      <Avatar icon="bx:bx-user" colorIcon="#000" />
    </AvatarContainer>
    <TextContainer flex={10}>
      <Text fontSize={24} fontWeight={500} color="#fff">
        {title}
      </Text>
    </TextContainer>
    <DotsContainer flex={2}>
      <Icon
        width={36}
        icon="ci:close-big"
        style={{ cursor: "pointer", color: "#fff" }}
        onClick={() => onCloseChat()}
      />
    </DotsContainer>
  </HeaderMain>
);

export { LivechatHeader };
