import React from "react";
import { Container, Text } from "components/atoms";

import {
  VideoRelatedMain,
  ImageContainer,
  Image,
  InfoContainer,
  Icon,
} from "./style";
import { Props } from "./types";
import { Switch } from "@chakra-ui/react";

const VideoRelated = ({
  options = [],
  onAutoplay = () => {},
  onSelect = () => {},
  initialAutoplayValue = false,
}: Props) => {
  return (
    <Container display="flex" flexDirection="column" pl={24} pt={16}>
      <Container display="flex" flexDirection="column" pl={16}>
        <Text
          fontSize={22}
          fontWeight="bold"
          fontFamily="Helvetica Neue"
          mb="8px"
        >
          Videos related
        </Text>
        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          mb="16px"
        >
          <Switch
            onChange={(ev) => onAutoplay(ev)}
            defaultChecked={initialAutoplayValue}
          />
          <Text fontSize={16} fontWeight="normal" ml={[24]}>
            Autoplay next video
          </Text>
        </Container>
      </Container>

      {options.map((el, i) => (
        <VideoRelatedMain
          height={[160]}
          width={[550]}
          flexDirection={["row"]}
          key={`videoRelated_key_${i}`}
          onClick={() => onSelect(el)}
        >
          <ImageContainer>
            <Image backgroundUrl={el.urlImage}>
              <Icon icon="codicon:play-circle" />
            </Image>
          </ImageContainer>
          <InfoContainer justifyContent="center" alignItems="center" p={[16]}>
            <Text fontWeight="bold" fontSize={20}>
              {el.title}
            </Text>
            <Text fontWeight="200" fontSize={14}>
              {el.description}
            </Text>
          </InfoContainer>
        </VideoRelatedMain>
      ))}
    </Container>
  );
};

export { VideoRelated };
