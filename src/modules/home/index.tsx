import { useEffect, useState } from 'react'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'

import { PostType, Category, Billboard } from 'generated/graphql'

import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import {
  useChannelsStore,
  useCommonStore,
  useCustomizationStore,
} from 'services/stores'
import {
  QUERY_BILLBOARDS,
  QUERY_CATEGORIES,
  QUERY_POSTS
} from 'services/graphql'

import { HomeCarouselsTypes } from 'types/common'

import { CarouselFlags } from 'types/flags'

import { Container, EmptyState, Skeleton } from 'components/atoms'

import {
  BillboardScroller,
  CategoriesScroller,
  VideosScroller,
  TagsScroller,
} from 'components/molecules'
import { BillboardTarget } from 'types/common'

import { convertToValidColor } from 'utils/helperFunctions'
import { sizes } from 'styles'

const HomePage = () => {
  const { t, i18n } = useTranslation()
  const { generateImage } = useThumbor()
  const { setPageTitle } = useCommonStore()
  const { activeChannelConfig } = useCustomizationStore()

  const { activeChannel } = useChannelsStore()
  const [billboardItems, setBillboardItems] = useState([])
  const [isHomeDisplayingCategories, setIsHomeDisplayingCategories] =
    useState(true)
  const [categoriesWithChildren, setCategoriesWithChildren] =
    useState<Category[]>()

  const {
    data: billboardData,
    refetch: refetchBillboard,
    loading: loadingBillboard,
  } = useQuery(QUERY_BILLBOARDS, {
    variables: {
      filter: {
        target: BillboardTarget.Home,
      },
    },
    skip: !activeChannel,
  })

  const {
    data: featuredPostsData,
    refetch: refetchFeaturedPosts,
    loading: loadingFeaturedPosts,
  } = useQuery(QUERY_POSTS, {
    variables: {
      filter: {
        featured: true,
        typeIn: [PostType.Video, PostType.OnDemand],
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
        featured: true,
      },
    },
    skip: !activeChannel,
  })

  const {
    data: categoriesData,
    loading: loadingCategories,
    refetch: refetchCategories,
  } = useQuery(QUERY_CATEGORIES, {
    variables: {
      filter: {},
    },
    skip: !isHomeDisplayingCategories || !activeChannel,
  })

  const isLoading =
    loadingBillboard ||
    loadingFeaturedCategories ||
    loadingFeaturedPosts ||
    loadingCategories

  const hasResults =
    billboardData?.billboard?.length ||
    featuredPostsData?.posts?.rows?.length ||
    featuredCategoriesData?.categories?.rows?.length ||
    (isHomeDisplayingCategories && categoriesWithChildren?.length)

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.home'))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    setIsHomeDisplayingCategories(
      activeChannelConfig?.HOME_ITEMS.DISPLAY_ALL_CATEGORIES || false
    )
    //eslint-disable-next-line
  }, [activeChannelConfig])

  useEffect(() => {
    if (activeChannel) {
      refetchBillboard()
      refetchFeaturedPosts()
      refetchFeaturedCategories()
      if (isHomeDisplayingCategories) refetchCategories()
    }
    // eslint-disable-next-line
  }, [activeChannel])

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

  useEffect(() => {
    const billboardItems = billboardData?.billboards?.rows
      ?.reduce((memo, curr: Billboard) => {
        const cover = getImageUrl(curr.customization?.mobile?.imgPath || '')
        const banner = getImageUrl(curr.customization?.desktop?.imgPath || '')

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
      .sort((a, b) => a.sort - b.sort)

    setBillboardItems(billboardItems)

    // eslint-disable-next-line
  }, [billboardData])

  useEffect(() => {
    const categoriesWithChildren = categoriesData?.categories.rows.filter(
      (category: Category) => category.children?.length
    )
    setCategoriesWithChildren(categoriesWithChildren)
    // eslint-disable-next-line
  }, [categoriesData])

  const renderBillboard = () => (
    <BillboardScroller items={billboardItems} customButtons={true} />
  )

  const renderFeaturedPostsScroller = (item: CarouselFlags) =>
    !!featuredPostsData?.posts?.rows && (
      <VideosScroller
        key={`${item.LABEL[0].VALUE}`}
        items={featuredPostsData?.posts?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
      />
    )

  const renderFeaturedCategoriesScroller = (item: CarouselFlags) =>
    !!featuredCategoriesData?.categories?.rows && (
      <CategoriesScroller
        key="featured-categories"
        items={featuredCategoriesData?.categories?.rows}
        sectionTitle={getCarouselLabel(item)}
        hasMoreLink={true}
      />
    )

  const renderCategoriesWithChildren = () =>
    categoriesWithChildren?.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel}/category/${category.id}`}
      />
    ))

  const getCarouselLabel = (item: CarouselFlags) => {
    const label = item.LABEL.filter((item) =>
      i18n.language.includes(item.LOCALE)
    )
    return label[0].VALUE
  }

  const homeCarouselsFiltered = activeChannelConfig?.HOME_ITEMS.CAROUSELS.sort(
    (a, b) => a.ORDER - b.ORDER
  ).filter((item) => item.IS_ACTIVE)

  const renderCarouselsOrderedByRemoteConfig = (item: CarouselFlags) => {
    if (!item?.TAGS?.length) {
      switch (item.CONTENT_TYPE[0]) {
        case HomeCarouselsTypes.Livestreams:
          //TODO: Waiting for API
          return ''
        case HomeCarouselsTypes.Posts:
          return renderFeaturedPostsScroller(item)
        case HomeCarouselsTypes.Collections:
          return renderFeaturedCategoriesScroller(item)
        case HomeCarouselsTypes.ContinueWatching:
          //TODO: Waiting for API
          return ''
      }
    } else {
      const tagId = item.TAGS.slice(0, 1).shift()
      return (
        <TagsScroller
          key={`${item.LABEL[0].VALUE}`}
          tagID={tagId}
          hasMoreLink={true}
          content={item.CONTENT_TYPE}
          sectionTitle={getCarouselLabel(item)}
        />
      )
    }
  }

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
          {!!homeCarouselsFiltered?.length &&
            homeCarouselsFiltered.map((item: CarouselFlags) =>
              renderCarouselsOrderedByRemoteConfig(item)
            )}
          {!!categoriesWithChildren?.length && renderCategoriesWithChildren()}
          {isEmpty && <EmptyState />}
        </Flex>
      )}
    </Container>
  )
}

export { HomePage }
