import { Icon } from "@iconify/react"
import { CollectionPostProps, defaultProps } from "./types"
import { CardWrapper, PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"
import { HoverInfoCard } from "../hoverInfoCard";

const CollectionPostCard = ({ ...props }: CollectionPostProps) => {
	return (
		<CardWrapper>
			<PostContent {...props}>
				{props.isExclusive ? (
					<ExclusiveBlocked>
						<Icon width={20} icon={`mdi:lock`} color={'white'}></Icon>
					</ExclusiveBlocked>
				) : "" || props.isGeolocked ? (
					<GeolockedBlocked>
						<Icon width={24} icon={`mdi:earth`} color={'white'}></Icon>
					</GeolockedBlocked>
				) : (
					""
				)}
			</PostContent>

			<HoverInfoCard postTitle={props.collectionTitle} />
		</CardWrapper>
	)
}

CollectionPostCard.defaultProps = defaultProps

export { CollectionPostCard }
