import { useMediaQuery } from '@chakra-ui/media-query'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { useThemeStore } from 'services/stores'

import { Badge } from '@chakra-ui/react'
import { Status } from 'generated/graphql'
import { breakpoints, colors } from 'styles'
import { LivestreamPostCardProps } from 'types/livestreams'
import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'
import { BlockedContent, CardWrapper, PostContent } from './style'

const LivestreamPostCard = ({ ...props }: LivestreamPostCardProps) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [hover, setHover] = useState(false)
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)

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
            fontWeight="700"
            color={colors.generalText[colorMode]}
            background={colors.brand.live_badges.live}
          >
            Live
          </Badge>
        )}
      </PostContent>
      {hover && isDesktop && (
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
              {stripHTML(props.title || '')}
            </Text>
            {props.description && (
              <Text
                mt={1}
                fontSize="0.7rem"
                noOfLines={2}
                lineHeight={'0.9rem'}
                color={colors.secondaryText[colorMode]}
              >
                <span
                dangerouslySetInnerHTML={{
                  __html: stripHTMLExceptLineBreaks(props.description),
                }}
              />
              </Text>
            )}
          </Flex>
        </Box>
      )}
    </CardWrapper>
  )
}

export { LivestreamPostCard }
