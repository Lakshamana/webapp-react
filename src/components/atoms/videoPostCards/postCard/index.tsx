import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/posts'
import { DetailCard } from '../detailCard'
import { BlockedContent, CardWrapper, PlayContent, PostContent } from './style'

const PostCard = (props: ComponentPostCardProps) => {
  const isPostBlocked = props.isExclusive || props.isGeolocked

  return (
    <CardWrapper
      onMouseLeave={props.actionHover(false)}
      onMouseEnter={props.actionHover(true)}
    >
      <PostContent onClick={props.defineAction} className="postContent" {...props}>
        {isPostBlocked && (
          <BlockedContent>
            <Icon
              width={25}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            />
          </BlockedContent>
        )}
        {!isPostBlocked && props.hover && (
          <PlayContent>
            <Icon
              width={50}
              color={colors.white}
              icon={`mdi:play-circle-outline`}
            />
          </PlayContent>
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
