import { Flex, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { Container, Skeleton } from 'components'
import { BillboardScroller, CategoriesScroller } from 'components/molecules'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { QUERY_CATEGORIES } from 'services/graphql'
import { ThumborInstanceTypes, useThumbor } from 'services/hooks/useThumbor'
import { useChannelsStore } from 'services/stores'
import { sizes } from 'styles'
import { Category } from 'generated/graphql'

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

  const getImageUrl = (obj) => {
    const image = generateImage(ThumborInstanceTypes.IMAGE, obj?.imgPath, {
      size: {
        height: obj?.height || undefined,
        width: obj?.width || undefined,
      },
    })
    return image
  }

  useEffect(() => {
    setCategoriesBillboardItems([])
    const reduced = featuredCategoriesData?.categories?.reduce(
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

    setCategoriesBillboardItems(reduced && reduced.length ? reduced : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredCategoriesData])

  useEffect(() => {
    if (categoriesData?.categories.length) {
      const categoriesWithChildren =
        categoriesData?.categories.filter(
          (category) => category.children && !!category.children.length
        ) || []

      const noChildren =
        categoriesData?.categories.filter(
          (category) => category.children && !category.children.length
        ) || []

      setCategoriesWithChildren(categoriesWithChildren)
      setCategoriesWithouChildren(noChildren)
    }
  }, [categoriesData])

  const isLoading = loadingFeaturedCategories || loadingCategories

  return (
    <>
      {isLoading ? (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      ) : (
        <Container flexDirection={'column'} width={'100%'}>
          <BillboardScroller
            items={categoriesBillboardItems}
            customButtons={false}
          ></BillboardScroller>
          <Flex pb={10} gridGap={10} flexDirection={'column'}>
            {categoriesWithoutChildren?.length ? (
              <CategoriesScroller
                items={categoriesWithoutChildren}
                sectionTitle={t('page.collection.more_categories')}
                hasMoreLink={true}
              ></CategoriesScroller>
            ) : (
              <></>
            )}
            {categoriesWithChildren?.map((category: Category) => {
              const childrenArr = category.children
              return (
                <CategoriesScroller
                  items={childrenArr as Category[]}
                  sectionTitle={category?.name || ''}
                  hasMoreLink={true}
                  sectionUrl={`/c/${activeChannel}/category/${category.id}`}
                ></CategoriesScroller>
              )
            })}
          </Flex>
        </Container>
      )}
    </>
  )
}

export { CategoriesPage }
