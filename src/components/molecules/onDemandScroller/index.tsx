import React from "react"
import { Link } from "@chakra-ui/react"
import { CardsScroller } from "components"
import { OndemandList } from "./ondemandItems"
import { Text } from "components"
import { VideoScrollerProps } from "./types"
import { Header, ContentScroller } from "./styles"

const OnDemandScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: VideoScrollerProps) => {
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
				<CardsScroller type='ondemand'>
					<OndemandList items={items} />
				</CardsScroller>
			</ContentScroller>
		</>
	)
}

export { OnDemandScroller }
