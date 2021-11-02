import { Flex } from "@chakra-ui/layout"
import { Container, MainLayout } from "components"
import { BillboardScroller, CollectionScroller } from "components/molecules"
import billboardData from "./billboard.json"
import collectionsData from "./collections.json"

const CollectionsPage = () => (
	<MainLayout backgroundColor='#0F0F0F'>
		<Container flexDirection={"column"} width={"100%"}>
			<BillboardScroller items={billboardData} customButtons={false}></BillboardScroller>
			<Flex pb={10} pl={65} gridGap={10} flexDirection={"column"}>
				<CollectionScroller
					items={collectionsData}
					sectionTitle={"Action"}
					hasMoreLink={true}></CollectionScroller>
				<CollectionScroller
					items={collectionsData}
					sectionTitle={"Drama"}
					hasMoreLink={true}></CollectionScroller>
				<CollectionScroller
					items={collectionsData}
					sectionTitle={"Family"}
					hasMoreLink={true}></CollectionScroller>
			</Flex>
		</Container>
	</MainLayout>
)

export { CollectionsPage }
