import { Icon } from "@iconify/react-with-api"
import { Divider, Flex } from "@chakra-ui/react"
import { colors } from "styles"
import { Text } from "components"
import { abbreviateNumber } from "../../utils"
import { Props } from "../../types"
import {
	PollContent,
	PollStatus,
	PollItem,
	PollItemText,
	ProgressBar
} from "./style"

const PollPost = ({ ...props }: Props) => (
	<PollContent paddingX={3} paddingY={2}>
		<PollItem {...props} padding={2} marginBottom={2}>
			<ProgressBar {...props} />
			<PollItemText>
				<Text kind='headline'>{props.itemQuestion}</Text>
			</PollItemText>
			<Flex
				width={"15%"}
				justifyContent={"flex-end"}
				alignItems={"center"}
				gridGap={1}>
				{props.winning ? (
					<Icon width={14} icon='mdi:check' color={`${colors.blue["300"]}`} />
				) : (
					""
				)}
				{props.percentage}
			</Flex>
		</PollItem>
		<PollStatus {...props}>
			<Flex
				fontSize={14}
				color={`${colors.grey["700"]}`}
				alignItems={"center"}
				gridGap={1}>
				<Icon width={14} icon='mdi:check' />
				{abbreviateNumber(props.voteCount)} votes
			</Flex>
			<Divider
				orientation='vertical'
				height={4}
				ml={2}
				mr={2}
				color={`${colors.grey["700"]}`}
			/>
			<Flex
				fontSize={14}
				color={`${colors.grey["700"]}`}
				alignItems={"center"}
				gridGap={1}>
				<Icon width={14} icon='mdi:clock-time-four-outline' />
				{props.timeRemaining}
			</Flex>
		</PollStatus>
	</PollContent>
)
export { PollPost }
