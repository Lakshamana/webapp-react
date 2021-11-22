import { Icon } from "@iconify/react"
import { Props } from "../../types"
import { abbreviateNumber } from "../../utils"
import {
	VideoContent,
	VideoItemPlay,
	ExclusiveBlocked,
	GeolockedBlocked,
	CountView,
	MediaLength
} from "./style"

const VideoPost = ({ ...props }: Props) => (
	<VideoContent {...props}>
		<VideoItemPlay>
			<Icon width={38} icon='mdi:play'></Icon>
		</VideoItemPlay>
		{props.displayViews ? (
			<>
				<CountView padding={2}>
					<Icon width={18} icon='mdi:play'></Icon>
					{abbreviateNumber(props.views)}
				</CountView>
				<MediaLength padding={2}>{props.mediaLength}</MediaLength>
			</>
		) : (
			""
		)}
		{props.isExclusive ? (
			<ExclusiveBlocked />
		) : "" || props.isGeolocked ? (
			<GeolockedBlocked />
		) : (
			""
		)}
	</VideoContent>
)

export { VideoPost }
