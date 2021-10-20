import { Icon } from "@iconify/react-with-api"
import { LivePostProps, defaultProps } from "./types"
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"

const LivestreamPostCard = ({ ...props }: LivePostProps) => {
	return (
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
	)
}

LivestreamPostCard.defaultProps = defaultProps

export { LivestreamPostCard }
