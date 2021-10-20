import { ImagePost } from "../imagePostCard"
import { MediaTypeProps } from "../../types"

const SetMediaType = ({ ...props }: MediaTypeProps) => {
	const GetMediaType = () => {
		switch (props.mediaType) {
			case "Image":
				return (
					<ImagePost coverImage='https://static2-sevilla.abc.es/Media/201308/12/breaking-bad-meta--644x362.jpg' />
				)
			case "Blog":
				return <></>
			default:
				return <></>
		}
	}
	return GetMediaType()
}

export { SetMediaType }
