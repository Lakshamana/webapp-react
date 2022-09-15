import { Badge, Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Status } from 'generated/graphql'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/livestreams'
import { stripHTML, stripHTMLExceptLineBreaks } from 'utils/helperFunctions'
import { BlockedContent, CardWrapper, PostContent } from './style'

const PostCard = (props: ComponentPostCardProps) => {
  const { colorMode } = useThemeStore()
  const isLive = props.status === Status.Live

  return (
    <CardWrapper
      onMouseLeave={props.actionHover(false)}
      onMouseEnter={props.actionHover(true)}
    >
      <PostContent onClick={props.onClickCard} {...props}>
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
      {props.hover && (
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

export { PostCard }
