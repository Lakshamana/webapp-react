import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container, Skeleton } from 'components'
import {
  BillboardScroller,
  CategoriesScroller,
  LivestreamScroller,
  VideosScroller,
} from 'components/molecules'
import { convertToValidColor } from 'utils'

import {
  PostType,
  PostFilter,
  PostTypeSortEnum,
  SortDirection,
  LivestreamStatus,
  LivestreamFilter,
  LivestreamTypeSortEnum,
} from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useQuery } from '@apollo/client'
import {
  QUERY_BILLBOARD,
  QUERY_FEATURED_CATEGORIES_SCROLLER,
  QUERY_POSTS_SCROLLER,
  QUERY_LIVESTREAMS_SCROLLER,
} from 'services/graphql/query'
import { useChannelsStore } from 'services/stores'
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
  } = useQuery(QUERY_BILLBOARD, {
    variables: { target: 'HOME' },
    skip: !activeChannel,
  })

  // TO-DO: Implement infinite loading on Cards Scroller
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
    skip: !activeChannel,
  })

  // TO-DO: Implement infinite loading on Cards Scroller
  const {
    data: featuredPostsData,
    refetch: refetchFeaturedPosts,
    loading: loadingFeaturedPosts,
  } = useQuery(QUERY_POSTS_SCROLLER, {
    variables: {
      filter: {
        featuredAtExists: true,
        typeIn: [PostType.Video, PostType.OnDemand],
      } as PostFilter,
      // TO-DO: Implement infinite loading on Cards Scroller
      // limit: MAX_CARDS_SCROLLER_RESULTS,
      orderBy: [
        {
          name: PostTypeSortEnum.PublishedAt,
          direction: SortDirection.Desc,
        },
      ],
    },
    skip: !activeChannel,
  })

  // TO-DO: Implement infinite loading on Cards Scroller
  const {
    data: featuredCategoriesData,
    refetch: refetchFeaturedCategories,
    loading: loadingFeaturedCategories,
  } = useQuery(QUERY_FEATURED_CATEGORIES_SCROLLER, {
    variables: {},
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeChannel])

  const getImageUrl = (obj) => {
    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      obj.banner.imgPath,
      {
        size: {
          height: obj.banner.height || undefined,
          width: obj.banner.width || undefined,
        },
      }
    )
    return image
  }

  useEffect(() => {
    setBillboardItems([])
    const reduced = billboardData?.billboard?.reduce((memo, curr) => {
      const cover = getImageUrl(curr)
      const banner = getImageUrl(curr)

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

  const renderBillboard = () => {
    return <BillboardScroller items={billboardItems} customButtons={true} />
  }

  const renderLivestreamsScroller = () => {
    return (
      <LivestreamScroller
        items={livestreamsData?.livestreams}
        sectionTitle={t('page.home.live')}
        hasMoreLink={true}
      />
    )
  }

  const renderFeaturedPostsScroller = () => {
    return (
      <VideosScroller
        items={featuredPostsData?.posts}
        sectionTitle={t('page.home.featured_posts')}
        hasMoreLink={true}
      />
    )
  }

  const renderFeaturedCategoriesScroller = () => {
    return (
      <CategoriesScroller
        items={featuredCategoriesData?.categories}
        sectionTitle={t('page.home.featured_categories')}
        hasMoreLink={true}
      />
    )
  }

  return (
    <>
      {isLoading ? (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      ) : (
        <Container flexDirection={'column'} display={'flex'}>
          {billboardItems?.length ? renderBillboard() : ''}
          <Flex
            gridGap={5}
            flexDirection={'column'}
            mt={billboardItems ? 0 : 7}
            w={'100vw'}
          >
            {livestreamsData?.livestreams?.length ? renderLivestreamsScroller() : ''}
            {featuredPostsData?.posts?.length ? renderFeaturedPostsScroller() : ''}
            {featuredCategoriesData?.categories?.length ? renderFeaturedCategoriesScroller() : ''}

            {/* TO-DO: built a empty state component */}
            {isEmpty && (
              <Flex w={'100vw'} justifyContent="center" color="white">
                Page empty! We need to create an empty state component.
              </Flex>
            )}
          </Flex>
        </Container>
      )}
    </>
  )
}

export { HomePage }
