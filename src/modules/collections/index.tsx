import { Flex } from "@chakra-ui/layout"
import { useTranslation } from "react-i18next"
import { Container, MainLayout } from "components"
import { BillboardScroller, CollectionScroller } from "components/molecules"
import billboardData from "./billboard.json"
import collectionsData from "./collections.json"

const CollectionsPage = () => {
	const { t } = useTranslation()
	return (
		<MainLayout>
			<Container flexDirection={"column"} width={"100%"}>
				<BillboardScroller
					items={billboardData}
					customButtons={false}></BillboardScroller>
				<Flex pb={10} gridGap={10} flexDirection={"column"}>
					<CollectionScroller
						items={collectionsData}
						sectionTitle={t("page.collection.action")}
						hasMoreLink={true}></CollectionScroller>
					<CollectionScroller
						items={collectionsData}
						sectionTitle={t("page.collection.drama")}
						hasMoreLink={true}></CollectionScroller>
					<CollectionScroller
						items={collectionsData}
						sectionTitle={t("page.collection.family")}
						hasMoreLink={true}></CollectionScroller>
				</Flex>
			</Container>
		</MainLayout>
	)
}

export { CollectionsPage }
