import { ImagePost, VideoPost, AudioPost, PollPost } from '../../components'
import { FeedPostCardProps } from '../../types'

const SetMediaType = ({ ...props }: FeedPostCardProps) => {
  const GetMediaType = () => {
    switch (props.type) {
      case 'IMAGE':
        return <ImagePost {...props} />
      case 'VIDEO':
        return <VideoPost {...props} />
      case 'ON_DEMAND':
        return <VideoPost {...props} />
      case 'AUDIO':
        return <AudioPost {...props} />
      case 'POLL':
        return <PollPost {...props} />
      default:
        return <></>
    }
  }
  return GetMediaType()
}

export { SetMediaType }
