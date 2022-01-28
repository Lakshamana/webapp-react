import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container } from 'components'
import {
  BillboardScroller,
  CollectionScroller,
  LivestreamScroller,
  OnDemandScroller,
} from 'components/molecules'
import billboardData from './billboard.json'
import liveStreamsData from './livestreams.json'
import collectionsData from './collections.json'
import onDemandData from './onDemand.json'

const LiveEvent = () => {
  const { t } = useTranslation()
  return (
    <Container flexDirection={'column'} display={'flex'}>
      <BillboardScroller
        items={billboardData}
        customButtons={true}
      ></BillboardScroller>
      <Flex gridGap={10} flexDirection={'column'}>
        <LivestreamScroller
          items={liveStreamsData}
          sectionTitle={t('page.live.live')}
          hasMoreLink={true}
        ></LivestreamScroller>
        <OnDemandScroller
          items={onDemandData}
          sectionTitle={t('page.live.upcoming')}
          hasMoreLink={true}
      ></OnDemandScroller>
        <CollectionScroller
          items={collectionsData}
          sectionTitle={t('page.live.past')}
          hasMoreLink={true}
        ></CollectionScroller>
      </Flex>
    </Container>
  )

}
export { LiveEvent }