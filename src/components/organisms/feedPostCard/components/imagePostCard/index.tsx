import { FeedPostCardProps } from '../../types'
import { ExclusiveBlocked, GeolockedBlocked, ImageContent } from './style'

const ImagePost = ({ ...props }: FeedPostCardProps) => {
  return (
    <ImageContent {...props}>
      {props.isExclusive && <ExclusiveBlocked />}
      {props.isGeolocked && <GeolockedBlocked />}
    </ImageContent>
  )
}

export { ImagePost }
