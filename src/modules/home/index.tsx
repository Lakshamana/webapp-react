import { MainLayout, Container } from "components";
import { BillboardScroller, CollectionScroller, LivestreamScroller, OnDemandScroller } from "components/molecules"
import { Flex } from '@chakra-ui/layout'
import billboardData from "./billboard.json"
import liveStreamsData from "./livestreams.json"
import collectionsData from "./collections.json"
import onDemandData from "./onDemand.json"

const HomePage = () => (
  <MainLayout backgroundColor='#0F0F0F'>
    <Container flexDirection={"column"} display={"flex"}>
      <BillboardScroller items={billboardData} customButtons={true}></BillboardScroller>
      <Flex pb={10} pl={65} gridGap={10} flexDirection={"column"}>
        <LivestreamScroller items={liveStreamsData} sectionTitle={'Live'} hasMoreLink={true}></LivestreamScroller>
        <OnDemandScroller items={onDemandData} sectionTitle={'Most Recents'} hasMoreLink={true}></OnDemandScroller>
        <CollectionScroller items={collectionsData} sectionTitle={'Popular'} hasMoreLink={true}></CollectionScroller>
      </Flex>
    </Container>
  </MainLayout>
)

export { HomePage }
