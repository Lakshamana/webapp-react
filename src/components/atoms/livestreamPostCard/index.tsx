import { Icon } from "@iconify/react"
import { useThemeStore } from 'services/stores/theme';
import { Text } from "components"
import { LivePostProps, defaultProps } from "./types"
import { colors } from 'styles'
import { PostContent, ExclusiveBlocked, GeolockedBlocked, Live } from "./style"

const LivestreamPostCard = ({ ...props }: LivePostProps) => {
  const { colorMode } = useThemeStore();

	return (
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
			{props.isLive ? (
				<Live>
					<Text
						kind='headline'
						children={"Live"}
						textAlign={"center"}
						fontSize={12}
						color={`${colors.white}`}></Text>
				</Live>
			) : (
				""
			)}
		</PostContent>
	)
}

LivestreamPostCard.defaultProps = defaultProps

export { LivestreamPostCard }
