import { Icon } from "@iconify/react"
import { Divider, Flex } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { Text } from "components"
import { abbreviateNumber } from "utils/helperFunctions"
import { FeedPostCardProps } from "../../types"
import { colors } from "styles"
import {
	PollContent,
	PollStatus,
	PollItem,
	PollItemText,
	ProgressBar
} from "./style"

const PollPost = ({ ...props }: FeedPostCardProps) => {
	const { t } = useTranslation()
	return (
		<PollContent paddingX={3} paddingY={2}>
			{props.itensQuestions && props.itensQuestions.map(question => (
				<PollItem {...props} padding={2} marginBottom={2} key={question.id}>
					<ProgressBar {...question} />
					<PollItemText>
						<Text kind='headline' color={colors.white}>{question.item}</Text>
					</PollItemText>
					<Flex
						width={"15%"}
						justifyContent={"flex-end"}
						alignItems={"center"}
						color={colors.white}
						gridGap={1}>
						{question.winner ? (
							<Icon width={14} icon='mdi:check' color={colors.blue["300"]} />
						) : (
							""
						)}
						{question.percentage}
					</Flex>
				</PollItem>
			))}
			<PollStatus {...props}>
				{
					props?.voteCount &&
					<Flex
						fontSize={14}
						color={colors.grey["700"]}
						alignItems={"center"}
						gridGap={1}>
						<Icon width={14} icon='mdi:check' />
						{abbreviateNumber(props.voteCount)} {t("common.votes")}
					</Flex>
				}
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
