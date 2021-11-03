import React from "react"
import { Link } from "@chakra-ui/react" 
import { useTranslation } from "react-i18next"
import { CardsScroller } from "components"
import { CollectionList } from "./collectionItems"
import { Text } from "components"
import { CollectionScrollerProps } from "./types"
import { Header, ContentScroller } from "./style"

const CollectionScroller = ({
	items,
	sectionTitle,
	sectionUrl,
	hasMoreLink
}: CollectionScrollerProps) => {

	const { t } = useTranslation()

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
						{t("common.more")}
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
