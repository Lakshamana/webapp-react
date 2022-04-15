import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AspectRatio, Image, Box } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import {
  Wrapper,
  InfoBox,
  Title,
  Subtitle,
  BlockedContent,
  PlayIcon,
} from './style'
import { VideoPostCardProps } from 'types/posts'
import { stripHTML } from 'utils/helperFunctions'
import { colors } from 'styles'

const PlaylistPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const [hover, setHover] = useState(false)

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  const isContentBlocked = props.isExclusive || props.isGeolocked

  return (
    <Wrapper
      p={1}
      my={1}
      onClick={selectPost}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <Box position="relative">
        {isContentBlocked && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
        {hover && !isContentBlocked ? (
          <PlayIcon>
            <Icon
              width={40}
              color={colors.white}
              icon={`mdi:play-circle`}
            ></Icon>
          </PlayIcon>
        ) : (
          <></>
        )}
        <AspectRatio
          position="relative"
          w={['0px', '0px', '140px', '180px', '180px']}
          ratio={16 / 9}
        >
          <Image
            borderRadius="3px"
            src={props.thumbnail}
            alt={props.title}
            objectFit="cover"
          ></Image>
        </AspectRatio>
      </Box>

      <InfoBox>
        <Title>{stripHTML(props.title || '')}</Title>
        {props?.description?.length ? (
          <Subtitle>{stripHTML(props?.description)}</Subtitle>
        ) : (
          ''
        )}
      </InfoBox>
    </Wrapper>
  )
}

export { PlaylistPostCard }
