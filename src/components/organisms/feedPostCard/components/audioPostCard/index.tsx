import { abbreviateNumber } from 'utils/helperFunctions'
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
import { colors } from "styles"

const AudioPost = ({ ...props }: FeedPostCardProps) => (
	<AudioContent {...props}>
		<PlayContent {...props}>
			<VideoItemPlay>
				<Icon width={38} icon='mdi:play'></Icon>
			</VideoItemPlay>
		</PlayContent>
		<DetailsContent {...props}>
			<Details padding={2}>
				<Text kind='title' fontSize={24} fontWeight={"Bold"} color={colors.white}>
					{props.audioTitle}
				</Text>
				<Text kind='headline' color={colors.white}>{props.audioArtist}</Text>
			</Details>
			{props.displayViews ? (
				<>
					<MediaLength padding={2}>{props.mediaLength}</MediaLength>
					<CountView padding={2}>
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
