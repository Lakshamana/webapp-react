import { Icon } from "@iconify/react"
import { FeedPostCardProps } from "../../types"
import { abbreviateNumber } from "utils/helperFunctions"
import {
	VideoContent,
	VideoItemPlay,
	ExclusiveBlocked,
	GeolockedBlocked,
	CountView,
	MediaLength
} from "./style"

const VideoPost = ({ ...props }: FeedPostCardProps) => (
	<VideoContent {...props}>
		<VideoItemPlay>
			<Icon width={38} icon='mdi:play' />
		</VideoItemPlay>
		{props.displayViews && props.views &&
			(<>
				<CountView padding={2}>
					<Icon width={18} icon='mdi:play' />
					{abbreviateNumber(props.views)}
				</CountView>
				<MediaLength padding={2}>
					{props.mediaLength}
				</MediaLength>
			</>)}
		{props.isExclusive && <ExclusiveBlocked />}
		{props.isGeolocked && <GeolockedBlocked />}
	</VideoContent>
)

export { VideoPost }
