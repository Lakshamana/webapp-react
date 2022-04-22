import { Icon } from "@iconify/react"
import { FeedPostCardProps } from "../../types"
import { abbreviateNumber } from "utils/helperFunctions"
import {
	VideoContent,
	BlockedContent,
	CountView,
	MediaLength
} from "./style"
import { colors } from 'styles'

const VideoPost = ({ ...props }: FeedPostCardProps) => (
	<VideoContent {...props}>
		{(props.isExclusive || props.isGeolocked) &&
			<BlockedContent>
				<Icon
					width={20}
					color={colors.white}
					icon={`mdi:${props.isExclusive ? 'lock' : 'earth'}`}
				/>
			</BlockedContent>
		}
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
	</VideoContent>
)

export { VideoPost }
