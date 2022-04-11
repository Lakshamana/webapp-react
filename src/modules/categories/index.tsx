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
  const [categoriesWithoutChildren, setCategoriesWithouChildren] =
    useState<Category[]>()
  const [categoriesWithChildren, setCategoriesWithChildren] =
    useState<Category[]>()

  const { generateImage } = useThumbor()

  const { data: featuredCategoriesData, loading: loadingFeaturedCategories } =
    useQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          featured: true,
        },
      },
      skip: !activeChannel,
    })

  const { data: categoriesData, loading: loadingCategories } = useQuery(
    QUERY_CATEGORIES,
    {
      variables: {
        filter: {},
      },
      skip: !activeChannel,
    }
  )

  //TODO: API has to return width and height
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
          isPinned: !!curr.pinnedAt,
        })
        return memo
      },
      []
    )
    setCategoriesBillboardItems(billboardItems)
    // eslint-disable-next-line
  }, [featuredCategoriesData])

  useEffect(() => {
    if (categoriesData?.categories.rows.length) {
      const categoriesWithChildren = categoriesData?.categories.rows.filter(
        (category: Category) => category.children?.length
      )

      const noChildren = categoriesData?.categories.rows.filter(
        (category: Category) => !category.children?.length && !category.parentId
      )

      setCategoriesWithChildren(categoriesWithChildren)

      setCategoriesWithouChildren(noChildren)
    }
  }, [categoriesData])

  useEffect(() => {
    setPageTitle(t('header.tabs.categories'))
    //eslint-disable-next-line
  }, [])

  const isLoading = loadingFeaturedCategories || loadingCategories

  const hasResults =
    categoriesWithChildren?.length || categoriesWithoutChildren?.length

  const isEmpty = !isLoading && !hasResults

  return (
    <>
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Container flexDirection={'column'} width={'100%'}>
          {!!categoriesBillboardItems?.length && (
            <BillboardScroller
              items={categoriesBillboardItems}
              customButtons={false}
            />
          )}
          <Flex pb={10} gridGap={10} flexDirection={'column'}>
            {!!categoriesWithoutChildren?.length && (
              <CategoriesScroller
                items={categoriesWithoutChildren}
                sectionTitle={t('page.categories.more_categories')}
                hasMoreLink={true}
              />
            )}
            {!!categoriesWithChildren?.length &&
              categoriesWithChildren?.map((category: Category) => (
                <CategoriesScroller
                  key={category.id}
                  items={category.children as Category[]}
                  sectionTitle={category?.name}
                  hasMoreLink={true}
                  sectionUrl={`/c/${activeChannel}/category/${category.id}`}
                />
              ))}
          </Flex>
          {isEmpty && <EmptyState />}
        </Container>
      )}
    </>
  )
}

export { CategoriesPage }
