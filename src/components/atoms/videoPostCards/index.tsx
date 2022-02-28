import { VideoPostCardProps } from 'types/posts'
import { useHistory } from 'react-router'
import { CardWrapper, PostContent, BlockedContent } from './style'

import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { HoverInfoCard } from '../hoverInfoCard'

const VideoPostCard = ({ ...props }: VideoPostCardProps) => {
  const history = useHistory()

  const selectPost = () => {
    history.push(`${props.url}`)
  }

  return (
    <CardWrapper onClick={selectPost}>
      <PostContent className="postContent" {...props}>
        {(props.isExclusive || props.isGeolocked) && (
          <BlockedContent>
            <Icon
              width={20}
              color={colors.white}
              icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
            ></Icon>
          </BlockedContent>
        )}
      </PostContent>
      {/* <HoverInfoCard postTitle={props.title} views={props.countViews}  /> */}
    </CardWrapper>
  )
}

export { VideoPostCard }
