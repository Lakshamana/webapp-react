import { MainLayout, Container } from "components";
import { BillboardScroller, CollectionScroller, LivestreamScroller, OnDemandScroller } from "components/molecules"
import { Flex } from '@chakra-ui/layout'
import billboardData from "./billboard.json"
import liveStreamsData from "./livestreams.json"
import collectionsData from "./collections.json"
import onDemandData from "./onDemand.json"

const HomePage = () => (
  <MainLayout>
    <Container flexDirection={"column"} display={"flex"}>
      <BillboardScroller items={billboardData}></BillboardScroller>
      <Flex pb={10} gridGap={10} flexDirection={"column"}>
        <LivestreamScroller items={liveStreamsData} sectionTitle={'Ao vivo'}></LivestreamScroller>
        <OnDemandScroller items={onDemandData} sectionTitle={'Destaques'}></OnDemandScroller>
        <CollectionScroller items={collectionsData} sectionTitle={'Categorias'}></CollectionScroller>
      </Flex>
    </Container>
  </MainLayout>
)

export { HomePage }
