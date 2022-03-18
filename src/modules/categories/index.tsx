import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'

import { useChannelsStore } from 'services/stores'
import { QUERY_CATEGORIES } from 'services/graphql'
import { Category } from 'generated/graphql'

import { Container, Skeleton } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks'
import { sizes } from 'styles'

const CategoriesPage = () => {
  const { t } = useTranslation()
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
          featuredAt: {
            eq: null,
          },
        },
      },
      skip: !activeChannel,
    })

  const { data: categoriesData, loading: loadingCategories } = useQuery(
    QUERY_CATEGORIES,
    {
      variables: {},
      skip: !activeChannel,
    }
  )

  const getImageUrl = (obj) =>
    generateImage(ThumborInstanceTypes.IMAGE, obj?.imgPath, {
      size: {
        height: obj?.height || undefined,
        width: obj?.width || undefined,
      },
    })

  useEffect(() => {
    setCategoriesBillboardItems([])
    const billboardItems = featuredCategoriesData?.categories?.reduce(
      (memo, curr: Category) => {
        const cover = getImageUrl(curr?.cover)
        const banner = getImageUrl(curr?.banner)
        const image = getImageUrl(curr?.image)

        memo.push({
          ...curr,
          title: curr.name,
          cover,
          banner,
          image,
        })
        return memo
      },
      []
    )
    setCategoriesBillboardItems(
      !!billboardItems?.length ? billboardItems : null
    )
    // eslint-disable-next-line
  }, [featuredCategoriesData])

  useEffect(() => {
    if (categoriesData?.categories.length) {
      const categoriesWithChildren = categoriesData?.categories.filter(
        (category) => category.children && !!category.children.length
      )

      const noChildren = categoriesData?.categories.filter(
        (category) => category.children && !category.children.length
      )

      setCategoriesWithChildren(categoriesWithChildren)
      setCategoriesWithouChildren(noChildren)
    }
  }, [categoriesData])

  const isLoading = loadingFeaturedCategories || loadingCategories

  return (
    <>
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <Container flexDirection={'column'} width={'100%'}>
          <BillboardScroller
            items={categoriesBillboardItems}
            customButtons={false}
          />
          <Flex pb={10} gridGap={10} flexDirection={'column'}>
            {!!categoriesWithoutChildren?.length && (
              <CategoriesScroller
                items={categoriesWithoutChildren}
                sectionTitle={t('page.collection.more_categories')}
                hasMoreLink={true}
              />
            )}
            {!!categoriesWithChildren?.length &&
              categoriesWithChildren?.map((category: Category) => (
                <CategoriesScroller
                  key={category.id}
                  items={category.children as Category[]}
                  sectionTitle={category?.name || ''}
                  hasMoreLink={true}
                  sectionUrl={`/c/${activeChannel}/category/${category.id}`}
                />
              ))}
          </Flex>
        </Container>
      )}
    </>
  )
}

export { CategoriesPage }
