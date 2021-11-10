import { Icon } from "@iconify/react-with-api"
import { Divider, Flex } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Text } from "components"
import { abbreviateNumber } from "../../utils"
import { Props } from "../../types"
import { colors } from "styles"
import {
	PollContent,
	PollStatus,
	PollItem,
	PollItemText,
	ProgressBar
} from "./style"

const PollPost = ({ ...props }: Props) => {
	const { t } = useTranslation()
	return (
		<PollContent paddingX={3} paddingY={2}>
			<PollItem {...props} padding={2} marginBottom={2}>
				<ProgressBar {...props} />
				<PollItemText>
					<Text kind='headline' color={colors.white}>{props.itemQuestion}</Text>
				</PollItemText>
				<Flex
					width={"15%"}
					justifyContent={"flex-end"}
					alignItems={"center"}
					color={colors.white}
					gridGap={1}>
					{props.winning ? (
						<Icon width={14} icon='mdi:check' color={colors.blue["300"]} />
					) : (
						""
					)}
					{props.percentage}
				</Flex>
			</PollItem>
			<PollStatus {...props}>
				<Flex
					fontSize={14}
					color={colors.grey["700"]}
					alignItems={"center"}
					gridGap={1}>
					<Icon width={14} icon='mdi:check' />
					{abbreviateNumber(props.voteCount)} {t("common.votes")}
				</Flex>
				<Divider
					orientation='vertical'
					height={4}
					ml={2}
					mr={2}
					color={colors.grey["700"]}
				/>
				<Flex
					fontSize={14}
					color={colors.grey["700"]}
					alignItems={"center"}
					gridGap={1}>
					<Icon width={14} icon='mdi:clock-time-four-outline' />
					{props.timeRemaining}
				</Flex>
			</PollStatus>
		</PollContent>
	)
}
export { PollPost }
