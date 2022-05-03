import { useState } from 'react'
import { useHistory } from 'react-router'
import { useThemeStore } from 'services/stores'
import { Icon } from '@iconify/react'
import { Flex, Box, Text } from '@chakra-ui/react'
import { LivestreamPostCardProps } from 'types/livestreams'
import { PostContent, BlockedContent, CardWrapper } from './style'
import { colors } from 'styles'
import { Status } from 'generated/graphql'
import { Badge } from '@chakra-ui/react'
import { stripHTML } from 'utils/helperFunctions'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)

  const isLive = props.status === Status.Live

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <CardWrapper
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <PostContent onClick={selectPost} {...props}>
        {(props.isExclusive || props.isGeolocked) && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {isLive && (
          <Badge
            position="absolute"
            top="0"
            right="0"
            m={2}
            fontWeight='700'
            color={colors.generalText[colorMode]}
            background={colors.brand.live_badges.live}
          >
            Live
          </Badge>
        )}
      </PostContent>
      {hover && (
        <Box
          position="absolute"
          padding="0.6rem"
          borderBottomLeftRadius="4px"
          borderBottomRightRadius="4px"
          w={'100%'}
          background={colors.footerBg[colorMode]}
        >
          <Flex direction="column">
            <Text
              fontSize="0.85rem"
              fontWeight="bolder"
              color={colors.generalText[colorMode]}
            >
              {props.title}
            </Text>
            {props.description && (
              <Text
                mt={1}
                fontSize="0.7rem"
                noOfLines={2}
                lineHeight={'0.9rem'}
                color={colors.secondaryText[colorMode]}
              >
                {stripHTML(props.description)}
              </Text>
            )}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { LivestreamPostCard }
