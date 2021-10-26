import { MainLayout, Container } from "components";
import { BillboardScroller, CollectionScroller, LivestreamScroller, OnDemandScroller } from "components/molecules"
import billboardData from "./billboard.json"
import liveStreamsData from "./livestreams.json"
import collectionsData from "./collections.json"
import onDemandData from "./onDemand.json"

const HomePage = () => (
  <MainLayout>
    <Container flexDirection="column">
      <BillboardScroller items={billboardData}></BillboardScroller>
      <LivestreamScroller items={liveStreamsData} sectionTitle={'Ao vivo'}></LivestreamScroller>
      <OnDemandScroller items={onDemandData} sectionTitle={'Destaques'}></OnDemandScroller>
      <CollectionScroller items={collectionsData} sectionTitle={'Categorias'}></CollectionScroller>
    </Container>
  </MainLayout>
)

export { HomePage }
