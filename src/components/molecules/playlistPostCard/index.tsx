import { Icon } from "@iconify/react";
import { useHistory } from 'react-router-dom';
import {
  List,
  Wrapper,
  VideoThumb,
  InfoBox,
  Title,
  Subtitle
} from './style'
import { PlaylistPostCardProps } from "./types";

const PlaylistPostCard = ({ videos }: PlaylistPostCardProps) => {
  const history = useHistory();

  return (
    <List>
      {videos && videos.map(({ id, title, subtitle, image_url }) => (
        <Wrapper onClick={() => history.push(`/video/${id}`)}>
          <VideoThumb image={image_url}>
            <Icon 
              icon="ant-design:play-circle-twotone"
              width="34px"
              color="white"
            />
          </VideoThumb>

          <InfoBox>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </InfoBox>
        </Wrapper>
      ))}
    </List>
  )
}

export { PlaylistPostCard };
