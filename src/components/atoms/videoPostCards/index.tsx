import { VideoPostProps, defaultProps } from './types'
import {
  CardWrapper,
  PostContent,
  ExclusiveBlocked,
  GeolockedBlocked,
} from './style'

import { Icon } from '@iconify/react'
import { HoverInfoCard } from '../hoverInfoCard'

const VideoPostCard = ({ ...props }: VideoPostProps) => {
  return (
    <CardWrapper>
      <PostContent className="postContent" {...props}>
        {props.isExclusive ? (
          <ExclusiveBlocked>
            <Icon width={20} icon={`mdi:lock`} color={'white'}></Icon>
          </ExclusiveBlocked>
        ) : '' || props.isGeolocked ? (
          <GeolockedBlocked>
            <Icon width={24} icon={`mdi:earth`} color={'white'}></Icon>
          </GeolockedBlocked>
        ) : (
          ''
        )}
      </PostContent>

      <HoverInfoCard {...props} />
    </CardWrapper>
  )
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }
