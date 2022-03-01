import { ImagePost, VideoPost, AudioPost, PollPost } from '../../components'
import { FeedPostCardProps } from "../../types"

const SetMediaType = ({ ...props }: FeedPostCardProps) => {
	const GetMediaType = () => {
		switch (props.type) {
			case "Blog":
				return <></>
			case "Image":
				return (
					<ImagePost {...props} />
				)
			case "Video":
				return (
					<VideoPost {...props}/>
				)
			case "Audio":
				return (
					<AudioPost {...props}/>
				)
			case "Poll":
				return (
					<PollPost {...props}/>
				)
			default:
				return <></>
		}
	}
	return GetMediaType()
}

export { SetMediaType }
