import { Icon } from "@iconify/react"
import { useThemeStore } from 'services/stores/theme';
import { VideoPostProps, defaultProps } from "./types"
import { PostContent, ExclusiveBlocked, GeolockedBlocked } from "./style"
import { colors } from 'styles'

const VideoPostCard = ({ ...props }: VideoPostProps) => {
  const { colorMode } = useThemeStore();

	return (
		<>
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
		</>
	)
}

VideoPostCard.defaultProps = defaultProps

export { VideoPostCard }
