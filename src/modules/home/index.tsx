import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container } from 'components'
import {
  BillboardScroller,
  CollectionScroller,
  LivestreamScroller,
  OnDemandScroller,
} from 'components/molecules'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useLazyQuery } from '@apollo/client'
import { QUERY_BILLBOARD } from 'services/graphql/query/billboard'
import { useChannelStore } from 'services/stores'

import liveStreamsData from './livestreams.json'
import collectionsData from './collections.json'
import onDemandData from './onDemand.json'

const HomePage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()

  const { channel } = useChannelStore()
  const [billboardData, setBillboardData] = useState([])

  const [loadBillboard, { data: dataBillboard }] = useLazyQuery(
    QUERY_BILLBOARD, 
    { variables: { target: "HOME" } }
  )

  useEffect(() => {
    if (!channel) return

    loadBillboard({
      context: { headers: { channel: channel?.id } }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel])

  useEffect(() => {
    loadBillboard({
      context: { headers: { channel: '5c9277169a57aca84e2cdced' } }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUrl = (obj) =>
    generateImage(
      ThumborInstanceTypes.IMAGE,
      obj.banner.imgPath,
      {
        size: {
          height: obj.banner.height || undefined,
          width: obj.banner.width || undefined
        },
      }
    )

  useEffect(() => {
    const reduced = dataBillboard?.billboard?.reduce(
      (memo, curr) => {
        const cover = getUrl(curr)
        const banner = getUrl(curr)
        memo.push({ ...curr, cover, banner })
        return memo
      }, []
    )

    setBillboardData(reduced)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataBillboard])

  return (
    <Container flexDirection={'column'} display={'flex'}>
      <BillboardScroller
        items={billboardData}
        customButtons={true}
      />
      <Flex gridGap={10} flexDirection={'column'}>
        <LivestreamScroller
          items={liveStreamsData}
          sectionTitle={t('page.home.live')}
          hasMoreLink={true}
        />
        <OnDemandScroller
          items={onDemandData}
          sectionTitle={t('page.home.most_recent')}
          hasMoreLink={true}
        />
        <CollectionScroller
          items={collectionsData}
          sectionTitle={t('page.home.popular')}
          hasMoreLink={true}
        />
      </Flex>
    </Container>
  )
}

export { HomePage }
