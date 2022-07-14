import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'

import { useChannelsStore, useCommonStore } from 'services/stores'
import { QUERY_CATEGORIES } from 'services/graphql'
import { Category } from 'generated/graphql'

import { Container, Skeleton, EmptyState } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { sizes } from 'styles'

const CategoriesPage = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const { activeChannel } = useChannelsStore()
  const [categoriesBillboardItems, setCategoriesBillboardItems] = useState([])

  const { generateImage } = useThumbor()

  const { data: featuredCategoriesData } =
    useQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          featured: true,
          sortBy: 'sort.asc',
        },
      },
      fetchPolicy: 'cache-and-network',
    })

  const { data: categoriesWithoutChildren, loading: loadingCategoriesWithoutChildren } = useQuery(
    QUERY_CATEGORIES,
    {
      variables: {
        filter: {
          sortBy: 'sort.asc',
          isParent: false,
          isChild: false
        },
      },
      fetchPolicy: 'cache-and-network'
    }
  )

  const { data: categoriesWithChildren, loading: loadingCategoriesWithChildren } = useQuery(
    QUERY_CATEGORIES,
    {
      variables: {
        filter: {
          sortBy: 'sort.asc',
          isParent: true
        },
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

  useEffect(() => {
    setCategoriesBillboardItems([])
    const billboardItems = featuredCategoriesData?.categories?.rows?.reduce(
      (memo, curr) => {
        const cover = getImageUrl(curr?.customization?.mobile?.imgPath)
        const banner = getImageUrl(curr?.customization?.desktop?.imgPath)

        memo.push({
          ...curr,
          title: curr.name,
          cover,
          banner,
          isPinned: !!curr.pinnedStatus?.pinned,
        })
        return memo
      },
      []
    )
    setCategoriesBillboardItems(billboardItems)
    // eslint-disable-next-line
  }, [featuredCategoriesData])

  useEffect(() => {
    setPageTitle(t('header.tabs.categories'))
    //eslint-disable-next-line
  }, [])

  const isLoading = loadingCategoriesWithChildren || loadingCategoriesWithoutChildren

  const hasResults =
    categoriesWithChildren?.categories?.rows?.length || categoriesWithoutChildren?.categories?.rows?.length

  const isEmpty = !isLoading && !hasResults

  const renderCategoriesWithoutChildren = () => (
    <CategoriesScroller
      items={categoriesWithoutChildren?.categories?.rows}
      sectionTitle={t('page.categories.more_categories')}
      hasMoreLink={false}
    />
  )

  const renderCategoriesWithChildren = () => {
    return categoriesWithChildren?.categories.rows.map((category: Category) => (
      <CategoriesScroller
        key={category.id}
        items={category.children as Category[]}
        sectionTitle={category?.name}
        hasMoreLink={true}
        sectionUrl={`/c/${activeChannel?.slug}/category/${category.slug}`}
      />
    ))
  }

  return (
    <Container flexDirection={'column'} width={'100%'}>
      {!!categoriesBillboardItems?.length && (
        <BillboardScroller
          items={categoriesBillboardItems}
          customButtons={false}
        />
      )}
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Flex pb={10} gridGap={10} flexDirection={'column'}>
          {!!categoriesWithoutChildren?.categories?.rows?.length &&
            renderCategoriesWithoutChildren()}
          {!!categoriesWithChildren?.categories?.rows?.length && renderCategoriesWithChildren()}
        </Flex>
      )}
      ){isEmpty && <EmptyState />}
    </Container>
  )
}

export { CategoriesPage }
