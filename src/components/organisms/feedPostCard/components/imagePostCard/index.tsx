import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { FeedPostCardProps } from '../../types'
import { BlockedContent, ImageContent } from './style'

const ImagePost = ({ ...props }: FeedPostCardProps) => {
  const isPostBlocked = props.isExclusive || props.isGeolocked
  return (
    <ImageContent {...props}>
      {isPostBlocked && (
        <BlockedContent>
          <Icon
            width={20}
            color={colors.white}
            icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
          />
        </BlockedContent>
      )}
    </ImageContent>
  )
}

export { ImagePost }
