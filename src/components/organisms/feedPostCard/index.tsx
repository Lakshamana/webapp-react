import { MoreHorizontal } from "react-feather"
import { Menu, MenuButton } from "@chakra-ui/react"
import { Text, ReactionBar, Participants } from "components"
import { SetMediaType } from "./components/mediaTypePostCard"
import { Props, defaultProps } from "./types"
import { abbreviateNumber } from "./utils"
import { colors } from "styles"
import {
	FeedContent,
	CardContent,
	CardHeader,
	Date,
	CardDescription,
	CardReactions,
	CardFooter,
	CountMessage
} from "./style"

const FeedPostCard = ({ ...props }: Props) => {
	return (
		<FeedContent>
			<CardContent>
				<SetMediaType mediaType={props.type} />
				<CardHeader>
					<Text kind='headline' fontSize={22} fontWeight={"Bold"}>
						{props.postTitle}
					</Text>
					<Date fontSize='12px' fontWeight={"Bold"} marginRight={3}>
						{props.Date}
					</Date>
					<Menu>
						<MenuButton>
							<MoreHorizontal width={16} color={`${colors.grey["700"]}`} />
						</MenuButton>
					</Menu>
				</CardHeader>
				<CardDescription fontSize={15}>{props.postDescription}</CardDescription>
				<CardReactions>
					<ReactionBar totalReactions={15} />
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
						{abbreviateNumber(props.CountMessages)} messages
					</CountMessage>
				</CardFooter>
			</CardContent>
		</FeedContent>
	)
}

FeedPostCard.defaultProps = defaultProps

export { FeedPostCard }
