import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { FeedPostCardProps } from '../../types'
import { BlockedContent, ImageContent } from './style'

const TextPost = ({ ...props }: FeedPostCardProps) => {
  const isPostBlocked = props.isExclusive || props.isGeolocked

  if (!props.coverImage) return <></>
  
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

export { TextPost }
