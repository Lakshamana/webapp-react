import React from "react"
import { Link } from "@chakra-ui/react"
import { CardsScroller } from "components"
import { Text } from "components"
import { LivestreamList } from "./livestreamItems"
import { LiveScrollerProps } from "./types"
import { Header, ContentScroller } from "./style"

const LivestreamScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: LiveScrollerProps) => {
	return (
		<>
			<ContentScroller>
				<Header>
					<Text
						color={"#FFFFFF"}
						fontSize={"28px"}
						fontWeight={500}
						marginRight={"18px"}
						lineHeight={"34px"}>
						{sectionTitle || ""}
					</Text>
					{hasMoreLink ? (
						<Link
							color={"#0460FF"}
							fontSize={"20px"}
							fontWeight={400}
							textDecoration={"underline"}
							to={sectionUrl}>
							more
						</Link>
					) : (
						""
					)}
				</Header>
				<CardsScroller type='livestream'>
					<LivestreamList items={items} />
				</CardsScroller>
			</ContentScroller>
		</>
	)
}

export { LivestreamScroller }
