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
import { convertToValidColor } from 'utils'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useQuery } from '@apollo/client'
import { QUERY_BILLBOARD } from 'services/graphql/query/billboard'
import { useChannelsStore } from 'services/stores'

import liveStreamsData from './livestreams.json'
import collectionsData from './collections.json'
import onDemandData from './onDemand.json'

const HomePage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])

  const {
    data: billboardData,
    refetch,
    loading,
  } = useQuery(QUERY_BILLBOARD, {
    variables: { target: 'HOME' },
  })

  useEffect(() => {
    refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel])

  const getUrl = (obj) =>
    generateImage(ThumborInstanceTypes.IMAGE, obj.banner.imgPath, {
      size: {
        height: obj.banner.height || undefined,
        width: obj.banner.width || undefined,
      },
    })

  useEffect(() => {
    const reduced = billboardData?.billboard?.reduce((memo, curr) => {
      const cover = getUrl(curr)
      const banner = getUrl(curr)

      memo.push({
        ...curr,
        actions: curr.actions.map((action) => ({
          ...action,
          bgColor: convertToValidColor(action.bgColor),
          borderColor: convertToValidColor(action.borderColor),
          textColor: convertToValidColor(action.textColor),
        })),
        cover,
        banner,
      })
      return memo
    }, [])

    setBillboardItems(reduced && reduced.length ? reduced : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [billboardData])

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {billboardItems && !loading && (
        <BillboardScroller items={billboardItems} customButtons={true} />
      )}
      <Flex gridGap={5} flexDirection={'column'} mt={billboardItems ? 0 : 7}>
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
