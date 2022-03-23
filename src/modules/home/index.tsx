import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import {
  PostType,
  SortDirection,
  LivestreamStatus,
  LivestreamFilter,
  LivestreamTypeSortEnum,
} from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES,
  QUERY_POSTS,
  QUERY_LIVESTREAMS_SCROLLER,
} from 'services/graphql'

import { Container, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  LivestreamScroller,
  VideosScroller,
} from 'components/molecules'

import { DEFAULT_POLLING_INTERVAL } from 'config/constants'
import { convertToValidColor } from 'utils'
import { sizes } from 'styles'

const HomePage = () => {
  const { t } = useTranslation()
  const { generateImage } = useThumbor()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])

  const {
    data: billboardData,
    refetch: refetchBillboard,
    loading: loadingBillboard,
  } = useQuery(QUERY_BILLBOARDS, {
    variables: {
      filter: {
        target: 'home',
      },
    },
    skip: !activeChannel,
  })

  // TODO: Implement infinite loading on Cards Scroller and API calls
  const {
    data: livestreamsData,
    refetch: refetchLivestreams,
    loading: loadingLivestreams,
  } = useQuery(QUERY_LIVESTREAMS_SCROLLER, {
    variables: {
      filter: {
        statusIn: [
          LivestreamStatus.Active,
          LivestreamStatus.Preparing,
          LivestreamStatus.Scheduled,
        ],
      } as LivestreamFilter,
      orderBy: [
        {
          name: LivestreamTypeSortEnum.StartedAt,
          direction: SortDirection.Asc,
        },
      ],
    },
    pollInterval: DEFAULT_POLLING_INTERVAL,
    skip: !activeChannel,
  })

  const {
    data: featuredPostsData,
    refetch: refetchFeaturedPosts,
    loading: loadingFeaturedPosts,
  } = useQuery(QUERY_POSTS, {
    variables: {
      filters: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
      },
      sort: {
        field: 'publishedAt',
        direction: SortDirection.Desc,
      },
    },
    skip: !activeChannel,
  })

  const {
    data: featuredCategoriesData,
    refetch: refetchFeaturedCategories,
    loading: loadingFeaturedCategories,
  } = useQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {
        featuredAt: {
          eq: null,
        },
      },
      pagination: {},
    },
    skip: !activeChannel,
  })

  const isLoading =
    loadingBillboard ||
    loadingLivestreams ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts

  const hasResults =
    billboardData?.billboard?.length ||
    livestreamsData?.livestreams?.length ||
    featuredPostsData?.posts?.length ||
    featuredCategoriesData?.categories?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    if (activeChannel) {
      refetchBillboard()
      refetchLivestreams()
      refetchFeaturedPosts()
      refetchFeaturedCategories()
    }
    // eslint-disable-next-line
  }, [activeChannel])

  const getImageUrl = (path: string) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, path)
    return image
  }

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.reduce((memo, curr) => {
      const cover = getImageUrl(curr.customization?.mobile?.imgPath)
      const banner = getImageUrl(curr.customization?.desktop?.imgPath)

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

    setBillboardItems(billboardItems)

    // eslint-disable-next-line
  }, [billboardData])

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderLivestreamsScroller = () => (
    <LivestreamScroller
      items={livestreamsData?.livestreams}
      sectionTitle={t('page.home.live')}
      hasMoreLink={true}
    />
  )

  const renderFeaturedPostsScroller = () => (
    <VideosScroller
      items={featuredPostsData?.posts}
      sectionTitle={t('page.home.featured_posts')}
      hasMoreLink={true}
    />
  )

  const renderFeaturedCategoriesScroller = () => (
    <CategoriesScroller
      items={featuredCategoriesData?.categories}
      sectionTitle={t('page.home.featured_categories')}
      hasMoreLink={true}
    />
  )

  return (
    <Container flexDirection={'column'} display={'flex'}>
      {!!billboardItems?.length && renderBillboard()}
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Flex
          gridGap={5}
          flexDirection={'column'}
          mt={billboardItems ? 0 : 7}
          w={'100vw'}
        >
          {!!livestreamsData?.livestreams?.length &&
            renderLivestreamsScroller()}
          {!!featuredPostsData?.posts?.length && renderFeaturedPostsScroller()}
          {!!featuredCategoriesData?.categories?.length &&
            renderFeaturedCategoriesScroller()}

          {/* TODO: Built a empty state component */}
          {isEmpty && (
            <Flex w={'100vw'} justifyContent="center" color="white">
              Page empty! We need to create an empty state component.
            </Flex>
          )}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
