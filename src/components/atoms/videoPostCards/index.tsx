import { Icon } from "@iconify/react-with-api"
import { VideoPostProps, defaultProps } from "./types"
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"

const VideoPostCard = ({ ...props }: VideoPostProps) => {
	return (
		<>
			<PostContent {...props}>
				{props.isExclusive ? (
					<ExclusiveBlocked>
						<Icon width={20} icon={`mdi:lock`}></Icon>
					</ExclusiveBlocked>
				) : "" || props.isGeolocked ? (
					<GeolockedBlocked>
						<Icon width={20} icon={`mdi:lock`}></Icon>
					</GeolockedBlocked>
				) : (
					""
				)}
			</PostContent>
		</>
	)
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }
