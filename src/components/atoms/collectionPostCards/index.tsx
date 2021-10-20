import { Icon } from "@iconify/react-with-api"
import { CollectionPostProps, defaultProps } from "./types"
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"

const CollectionPostCard = ({ ...props }: CollectionPostProps) => {
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

CollectionPostCard.defaultProps = defaultProps

export { CollectionPostCard }
