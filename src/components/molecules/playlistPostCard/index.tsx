import { useHistory } from 'react-router-dom'
import { AspectRatio, Image } from '@chakra-ui/react'
import { Wrapper, InfoBox, Title, Subtitle } from './style'
import { VideoPostCardProps } from 'types/posts'

const PlaylistPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <Wrapper p={1} my={1} onClick={selectPost}>
      <AspectRatio w={['0px', '0px', '140px', '180px', '180px']} ratio={16 / 9}>
        <Image
          borderRadius="3px"
          src={props.thumbnail}
          alt={props.title}
          objectFit="cover"
        />
      </AspectRatio>
      <InfoBox>
        <Title>{props.title}</Title>
        {props?.description && <Subtitle>
          <span
           dangerouslySetInnerHTML={{
            __html: `${props?.description}`,
          }}
          ></span>
        </Subtitle>}
      </InfoBox>
    </Wrapper>
  )
}

export { PlaylistPostCard }
