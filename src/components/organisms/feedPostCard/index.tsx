import { Icon } from "@iconify/react";
import { Menu, MenuButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Text, ReactionBar, Participants } from "components";
import { SetMediaType } from "./components";
import { useThemeStore } from "services/stores/theme"
import { Props, defaultProps } from "./types";
import { abbreviateNumber } from "./utils";
import { colors } from "styles";
import {
	FeedContent,
	CardContent,
	CardHeader,
	Date,
	CardDescription,
	CardReactions,
	CardFooter,
	CountMessage,
} from "./style";

const FeedPostCard = ({ ...props }: Props) => {
	const { t } = useTranslation()
	const { colorMode } = useThemeStore()

	return (
		<FeedContent>
			<CardContent>
				{props.type === 'Poll' ? '' : <SetMediaType {...props} />}
				<CardHeader>
					<Text kind='headline' fontSize={22} fontWeight={"Bold"} color={colors.generalText[colorMode]}>
						{props.postTitle}
					</Text>
					<Date fontSize='12px' fontWeight={"Bold"} marginRight={3}>
						{props.date}
					</Date>
					<Menu>
						<MenuButton>
							<Icon
								icon="mdi:dots-horizontal"
								color={`${colors.grey['700']}`}
							/>
						</MenuButton>
					</Menu>
				</CardHeader>
				<CardDescription fontSize={15}>{props.postDescription}</CardDescription>
				{props.type === "Poll" ? <SetMediaType {...props} /> : ""}
				<CardReactions>
					<ReactionBar totalReactions={15} reactionsTitle='Reactions' />
				</CardReactions>
				<CardFooter>
					<Participants
						totalParticipants={4}
						participants={[
							{
								id: 1,
								img: "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg"
							}
						]}
					/>
					<CountMessage marginLeft={"auto"} fontSize={15}>
						{abbreviateNumber(props.countMessages)} {t("common.messages")}
					</CountMessage>
				</CardFooter>
			</CardContent>
		</FeedContent>
	)
}

FeedPostCard.defaultProps = defaultProps;

export { FeedPostCard };
