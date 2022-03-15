import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container, Skeleton } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import collectionsData from './collections.json'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { QUERY_FEATURED_CATEGORIES_SCROLLER } from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useChannelsStore } from 'services/stores'
import { sizes } from 'styles'

const CollectionsPage = () => {
  const { t } = useTranslation()
  const { activeChannel } = useChannelsStore()
  const [ billboardItems, setBillboardItems ] = useState([])

  const { generateImage } = useThumbor()

  const getImageUrl = (obj) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, obj?.imgPath, {
      size: {
        height: obj?.height || undefined,
        width: obj?.width || undefined,
      },
    })
    return image
  }

  const {
    data: featuredCategoriesData,
    refetch: refetchFeaturedCategories,
    loading: loadingFeaturedCategories,
  } = useQuery(QUERY_FEATURED_CATEGORIES_SCROLLER, {
    variables: {},
    skip: !activeChannel,
  })

  useEffect(() => {
    if (activeChannel) {
      refetchFeaturedCategories()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel])

  useEffect(() => {
    setBillboardItems([])
    const reduced = featuredCategoriesData?.categories?.reduce((memo, curr) => {
      const cover = getImageUrl(curr?.cover)
      const banner = getImageUrl(curr?.banner)

      memo.push({
        ...curr,
        title: curr.name,
        cover,
        banner,
      })
      return memo
    }, [])

    setBillboardItems(reduced && reduced.length ? reduced : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredCategoriesData])

  const isLoading = loadingFeaturedCategories

  return (
    <>
      {isLoading ? (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      ) : (
        <Container flexDirection={'column'} width={'100%'}>
          <BillboardScroller
            items={billboardItems}
            customButtons={false}
          ></BillboardScroller>
          <Flex pb={10} gridGap={10} flexDirection={'column'}>
            <CategoriesScroller
              items={collectionsData}
              sectionTitle={t('page.collection.action')}
              hasMoreLink={true}
            ></CategoriesScroller>
            <CategoriesScroller
              items={collectionsData}
              sectionTitle={t('page.collection.drama')}
              hasMoreLink={true}
            ></CategoriesScroller>
            <CategoriesScroller
              items={collectionsData}
              sectionTitle={t('page.collection.family')}
              hasMoreLink={true}
            ></CategoriesScroller>
          </Flex>
        </Container>
      )}
    </>
  )
}

export { CollectionsPage }
