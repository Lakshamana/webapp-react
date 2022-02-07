import { Icon } from "@iconify/react"
import { useThemeStore } from 'services/stores/theme';
import { CollectionPostProps, defaultProps } from "./types"
import { CardWrapper, PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"
import { colors } from 'styles'
import { HoverInfoCard } from "../hoverInfoCard";

const CollectionPostCard = ({ ...props }: CollectionPostProps) => {
  const { colorMode } = useThemeStore();
	return (
		<CardWrapper>
			<PostContent {...props}>
				{props.isExclusive ? (
					<ExclusiveBlocked>
						<Icon width={20} icon={`mdi:lock`} color={colors.generalText[colorMode]}></Icon>
					</ExclusiveBlocked>
				) : "" || props.isGeolocked ? (
					<GeolockedBlocked>
						<Icon width={24} icon={`mdi:earth`} color={colors.generalText[colorMode]}></Icon>
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
