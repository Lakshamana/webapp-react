import React from "react"
import { CardsScroller } from "components"
import { CollectionList } from "./collectionItems"
import { CollectionScrollerProps } from "./types"
import { Header, ContentScroller } from "./style"
import { Text } from "components"
import { Link } from "@chakra-ui/react"

const CollectionScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: CollectionScrollerProps) => {
	return (
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
			<CardsScroller type='collection'>
				<CollectionList items={items} />
			</CardsScroller>
		</ContentScroller>
	)
}

export { CollectionScroller }
