import { useLazyQuery } from '@apollo/client'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Category, Kinds, PaginatedCategoriesOutput } from 'generated/graphql'
import {
  QUERY_CATEGORIES,
  QUERY_CATEGORIES_CARDS,
  QUERY_PUBLIC_CATEGORIES,
  QUERY_PUBLIC_CATEGORIES_CARDS
} from 'services/graphql'
import {
  useAuthStore,
  useChannelsStore,
  useCommonStore,
  useThemeStore
} from 'services/stores'

import { Container, EmptyState, Skeleton } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { colors, sizes } from 'styles'
import {
  categoriesWithChildrenFilter,
  categoriesWithoutChildrenFilter,
  featuredCategoriesFilter
} from './utils'

const CategoriesPage = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { activeChannel } = useChannelsStore()
  const { colorMode } = useThemeStore()
  const [categoriesBillboardItems, setCategoriesBillboardItems] =
    useState<any>()
  const [featuredCategories, setFeaturedCategories] =
    useState<PaginatedCategoriesOutput>()
  const [categoriesWithoutChildren, setCategoriesWithoutChildren] =
    useState<PaginatedCategoriesOutput>()
  const [categoriesWithChildren, setCategoriesWithChildren] =
    useState<PaginatedCategoriesOutput>()
  const { isAnonymousAccess } = useAuthStore()

  const isAnonymousAllowed =
    isAnonymousAccess && activeChannel?.kind === Kinds.Public

  const { generateImage } = useThumbor()

  const [getFeaturedCategories] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_CATEGORIES : QUERY_CATEGORIES,
    {
      onCompleted: (result) => {
        const categories = isAnonymousAllowed
          ? result.publicCategories
          : result.categories

        if (categories.rows) formatBillboardItems(categories.rows)

        setFeaturedCategories((previous) => ({
          ...categories,
          rows: [...(previous?.rows || []), ...categories.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [
    getCategoriesWithoutChildren,
    { loading: loadingCategoriesWithoutChildren },
  ] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_CATEGORIES_CARDS : QUERY_CATEGORIES_CARDS,
    {
      onCompleted: (result) => {
        const categories = isAnonymousAllowed
          ? result.publicCategories
          : result.categories
        setCategoriesWithoutChildren((previous) => ({
          ...categories,
          rows: [...(previous?.rows || []), ...categories.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const [
    getCategoriesWithChildren,
    { loading: loadingCategoriesWithChildren },
  ] = useLazyQuery(
    isAnonymousAllowed ? QUERY_PUBLIC_CATEGORIES_CARDS : QUERY_CATEGORIES_CARDS,
    {
      onCompleted: (result) => {
        const categories = isAnonymousAllowed
          ? result.publicCategories
          : result.categories

        if (categoriesWithChildren && !categoriesWithChildren?.hasNextPage) return

        setCategoriesWithChildren((previous) => ({
          ...categories,
          rows: [...(previous?.rows || []), ...categories.rows],
        }))
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path, {
      size: { width: 1080, height: 0 },
    })

  const formatBillboardItems = async (items: Category[]) => {
    const billboardItems = await items?.map((item) => {
      const cover = getImageUrl(item?.customization?.mobile?.imgPath || '')
      const banner = getImageUrl(item?.customization?.desktop?.imgPath || '')
      return {
        id: item.id,
        title: item.name,
        description: item.description,
        cover,
        banner,
        isPinned: !!item.pinnedStatus?.pinned,
        slug: item.slug,
      }
    })

    setCategoriesBillboardItems((previous) =>
      previous ? [...previous, ...billboardItems] : billboardItems
    )
  }

  const loadMoreCategoriesWithoutChildren = () => {
    if (categoriesWithoutChildren?.hasNextPage) {
      getCategoriesWithoutChildren({
        variables: {
          ...categoriesWithoutChildrenFilter(
            categoriesWithoutChildren.page + 1
          ),
        },
      })
    }
  }

  const loadMoreCategoriesWithChildren = () => {
    if (categoriesWithChildren?.hasNextPage) {
      getCategoriesWithChildren({
        variables: {
          ...categoriesWithChildrenFilter(categoriesWithChildren.page + 1),
        },
      })
    }
  }

  const loadMoreFeaturedCategories = () => {
    if (featuredCategories?.hasNextPage) {
      getFeaturedCategories({
        variables: {
          ...featuredCategoriesFilter(featuredCategories.page + 1),
        },
      })
    }
  }

  useEffect(() => {
    setPageTitle(t('header.tabs.categories'))
    getCategoriesWithoutChildren({
      variables: categoriesWithoutChildrenFilter(1),
    })
    getCategoriesWithChildren({
      variables: categoriesWithChildrenFilter(1),
    })
    getFeaturedCategories({
      variables: featuredCategoriesFilter(1),
    })
    //eslint-disable-next-line
  }, [])

  const isLoading =
    loadingCategoriesWithoutChildren || loadingCategoriesWithChildren

  const hasResults =
    categoriesWithChildren?.rows?.length ||
    categoriesWithoutChildren?.rows?.length

  const isEmpty = !isLoading && !hasResults

  return (
    <Container flexDirection={'column'} width={'100%'}>
      {!!categoriesBillboardItems?.length && (
        <BillboardScroller
          items={categoriesBillboardItems}
          customButtons={false}
          reachEnd={() =>
            featuredCategories?.hasNextPage && loadMoreFeaturedCategories()
          }
        />
      )}

      <Flex pb={10} gridGap={5} flexDirection={'column'}>
        {!!categoriesWithoutChildren?.rows?.length && (
          <CategoriesScroller
            items={categoriesWithoutChildren?.rows}
            sectionTitle={t('page.categories.more_categories')}
            loadMoreItems={loadMoreCategoriesWithoutChildren}
          />
        )}
        {!!categoriesWithChildren?.rows?.length && (
          <InfiniteScroll
            style={{ overflowX: 'hidden' }}
            dataLength={categoriesWithChildren.rows.length}
            next={() =>
              categoriesWithChildren.hasNextPage &&
              loadMoreCategoriesWithChildren()
            }
            hasMore={categoriesWithChildren.hasNextPage}
            scrollableTarget="scroll-master"
            loader={
              <Box pt={5} textAlign={'center'}>
                <Spinner color={colors.brand.primary[colorMode]} />
              </Box>
            }
          >
            <Flex gridGap={5} flexDirection={'column'}>
              {categoriesWithChildren?.rows.map((category: Category) => (
                <CategoriesScroller
                  key={`w-children-${category.id}`}
                  items={category.children as Category[]}
                  sectionTitle={category?.name}
                  sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
                />
              ))}
            </Flex>
          </InfiniteScroll>
        )}

        {isLoading && !hasResults && (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton kind="cards" />
          </Box>
        )}
      </Flex>
      {isEmpty && <EmptyState />}
    </Container>
  )
}

export { CategoriesPage }
