import React from "react";
import { Text } from "components/atoms";

import { VideoRelatedMain, ImageContainer, InfoContainer } from "./style";
import { Props } from "./types";

const VideoRelated = ({
  title = "",
  description = "",
  urlImage = "",
}: Props) => {
  return (
    <VideoRelatedMain height={[136]} width={[450]} flexDirection={["row"]}>
      <ImageContainer></ImageContainer>
      <InfoContainer justifyContent="center" alignItems="center">
        <Text fontWeight="bold" fontSize={20}>
          {title}
        </Text>
        <Text fontWeight="200" fontSize={14}>
          {description}
        </Text>
      </InfoContainer>
    </VideoRelatedMain>
  );
};

export { VideoRelated };
