import { useThemeStore } from 'services/stores/theme';
import { VideoPostProps, defaultProps } from "./types"
import { 
	CardWrapper, 
	PostContent, 
	ExclusiveBlocked, 
	GeolockedBlocked 
} from "./style"
import { colors } from 'styles'

import { Icon } from "@iconify/react";
import { HoverInfoCard } from '../hoverInfoCard';

const VideoPostCard = ({ ...props }: VideoPostProps) => {
  const { colorMode } = useThemeStore();

	return (
		<CardWrapper>
			<PostContent className="postContent" {...props}>
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

			<HoverInfoCard {...props} />
		</CardWrapper>
	)
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }
