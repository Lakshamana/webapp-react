import { Icon } from "@iconify/react-with-api"
import { Text } from "components"
import { Props } from "../../types"
import { abbreviateNumber } from "../../utils"
import {
	AudioContent,
	VideoItemPlay,
	PlayContent,
	DetailsContent,
	Details,
	ExclusiveBlocked,
	GeolockedBlocked,
	CountView,
	MediaLength
} from "./style"

const AudioPost = ({ ...props }: Props) => (
	<AudioContent {...props}>
		<PlayContent {...props}>
			<VideoItemPlay>
				<Icon width={38} icon='mdi:play'></Icon>
			</VideoItemPlay>
		</PlayContent>
		<DetailsContent {...props}>
			<Details>
				<Text kind='title' fontSize={24} fontWeight={"Bold"}>
					{props.audioTitle}
				</Text>
				<Text kind='headline'>{props.audioArtist}</Text>
			</Details>
			{props.displayViews ? (
				<>
					<MediaLength>{props.mediaLength}</MediaLength>
					<CountView>
						<Icon width={16} icon='mdi:play'></Icon>
						{abbreviateNumber(props.views)}
					</CountView>
				</>
			) : (
				""
			)}
		</DetailsContent>
		{props.isExclusive ? (
			<ExclusiveBlocked />
		) : "" || props.isGeolocked ? (
			<GeolockedBlocked />
		) : (
			""
		)}
	</AudioContent>
)

export { AudioPost }
