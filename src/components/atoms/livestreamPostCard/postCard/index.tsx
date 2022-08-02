import { Badge } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { Status } from 'generated/graphql'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/livestreams'
import { DetailCard } from '../detailCard'
import { BlockedContent, CardWrapper, PostContent } from './style'

const PostCard = (props: ComponentPostCardProps) => {
  const { colorMode } = useThemeStore()
  const isLive = props.status === Status.Live

  return (
    <CardWrapper
      onMouseLeave={props.actionHover(false)}
      onMouseEnter={props.actionHover(true)}
    >
      <PostContent onClick={props.defineAction} {...props}>
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
      {
        props.hover &&
        !props.mobileBehavior &&
        <DetailCard {...props} />
      }
    </CardWrapper>
  )
}

export { PostCard }
