import { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container, Text } from 'components'
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
  })

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
  })

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
  })

  // TO-DO: Implement infinite loading on Cards Scroller
  const {
    data: featuredCategoriesData,
    refetch: refetchFeaturedCategories,
    loading: loadingFeaturedCategories,
  } = useQuery(QUERY_FEATURED_CATEGORIES_SCROLLER, {
    variables: {},
  })

  const isEmpty =
    !livestreamsData &&
    !loadingLivestreams &&
    !featuredPostsData &&
    !loadingFeaturedPosts &&
    !featuredCategoriesData &&
    !loadingFeaturedCategories

  useEffect(() => {
    refetchBillboard()
    refetchLivestreams()
    refetchFeaturedPosts()
    refetchFeaturedCategories()
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

  return (
    // TO-DO: Show scrollers based on remote config file
    // TO-DO: Show categories on Home based on remote config file
    <Container flexDirection={'column'} display={'flex'}>
      {billboardItems && !!billboardItems?.length && !loadingBillboard && (
        <BillboardScroller items={billboardItems} customButtons={true} />
      )}

      <Flex
        gridGap={5}
        flexDirection={'column'}
        mt={billboardItems ? 0 : 7}
        w={'100vw'}
      >
        {!!livestreamsData?.livestreams?.length && (
          <LivestreamScroller
            items={livestreamsData.livestreams}
            sectionTitle={t('page.home.live')}
            hasMoreLink={true}
          />
        )}
        {!!featuredPostsData?.posts?.length && (
          <VideosScroller
            items={featuredPostsData.posts}
            sectionTitle={t('page.home.featured_posts')}
            hasMoreLink={true}
          />
        )}
        {!!featuredCategoriesData?.categories?.length && (
          <CategoriesScroller
            items={featuredCategoriesData.categories}
            sectionTitle={t('page.home.featured_categories')}
            hasMoreLink={true}
          />
        )}
        {/* TO-DO: Build Empty State component */}
        <Flex alignItems="center" justifyContent="center">
          {isEmpty && (
            <Text color={'white'} fontSize={'32px'}>
              Home is empty
            </Text>
          )}
        </Flex>
      </Flex>
    </Container>
  )
}

export { HomePage }
