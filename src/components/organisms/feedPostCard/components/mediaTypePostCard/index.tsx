import { ImagePost, VideoPost, AudioPost } from '../../components'
import { Props } from "../../types"

const SetMediaType = ({ ...props }: Props) => {
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
			default:
				return <></>
		}
	}
	return GetMediaType()
}

export { SetMediaType }
