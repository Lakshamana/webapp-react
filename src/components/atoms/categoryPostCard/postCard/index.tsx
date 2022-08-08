import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { ComponentPostCardProps } from 'types/categories'
import { DetailCard } from '../detailCard'
import { BlockedContent, CardWrapper, PostContent } from './style'

const PostCard = ({ categoryUnpinned, ...props }: ComponentPostCardProps) => (
  <CardWrapper
    onMouseLeave={props.actionHover(false)}
    onMouseEnter={props.actionHover(true)}
    {...props}
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
    </PostContent>
    {
      props.hover &&
      !props.mobileBehavior &&
      <DetailCard categoryUnpinned={categoryUnpinned} {...props} />
    }
  </CardWrapper>
)

export { PostCard }
