import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AspectRatio, Image, Box, Text, Badge } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Wrapper, InfoBox, Title, BlockedContent, PlayIcon } from './style'
import { VideoPostCardProps } from 'types/posts'
import { stripHTML, formattedSeconds } from 'utils/helperFunctions'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'

const PlaylistPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()
  const [hover, setHover] = useState(false)
  const { colorMode } = useThemeStore()

  const selectPost = () => {
    if (props.isActive) return
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
      style={{ background: props.isActive ? colors.inputBg[colorMode] : '' }}
    >
      <Box
        position="relative"
        display="flex"
        alignContent="center"
        justifyContent="center"
        alignItems="center"
      >
        {props.isActive && (
          <Badge
            background={colors.generalText[colorMode]}
            position="absolute"
            margin={1}
            left="0"
            zIndex="9"
            top="0"
          >
            <Icon width="20px" icon="mdi:play"></Icon>
          </Badge>
        )}
        {isContentBlocked && (
          <BlockedContent>
            <Icon
              width={18}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
        {hover && !isContentBlocked && !props.isActive ? (
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
          w={['0px', '0px', '140px', '160px', '160px']}
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
        {!!props?.description?.length && (
          <Text
            fontSize="0.85rem"
            noOfLines={2}
            lineHeight={'1.2rem'}
            color={
              props.isActive
                ? colors.generalText[colorMode]
                : colors.secondaryText[colorMode]
            }
          >
            {stripHTML(props.description)}
          </Text>
        )}
        <Text mt={1} fontSize="0.8rem" color={colors.secondaryText[colorMode]}>
          {formattedSeconds(props?.mediaLength || 0)}
        </Text>
      </InfoBox>
    </Wrapper>
  )
}

export { PlaylistPostCard }
