import { AspectRatio, Box, Image, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { GeneralPostCardProps } from 'types/posts'
import { formattedSeconds, stripHTML } from 'utils/helperFunctions'
import { BlockedContent, InfoBox, PlayIcon, Title, Wrapper } from './style'

const PlaylistPostCard = ({ ...props }: GeneralPostCardProps) => {
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
          <PlayIcon>
            <Icon width={40} color={colors.white} icon={`mdi:play-circle`} />
          </PlayIcon>
        )}
        {isContentBlocked && (
          <BlockedContent>
            <Icon
              width={18}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {hover && !isContentBlocked && !props.isActive ? (
          <PlayIcon>
            <Icon width={40} color={colors.white} icon={`mdi:play-circle`} />
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
          />
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
