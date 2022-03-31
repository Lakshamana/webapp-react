import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Flex, Box } from '@chakra-ui/layout'
import { useThumbor, ThumborInstanceTypes } from 'services/hooks'
import { QUERY_CATEGORY } from 'services/graphql'
import {
  Container,
  HeroBanner,
  Skeleton,
  CategoriesGrid,
  Button,
  PostsGrid,
} from 'components'
import { HeroBannerProps } from 'types/common'
import { sizes, colors } from 'styles'

const CategoryPage = () => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const { generateImage } = useThumbor()
  const [categoryHero, setCategoryHero] = useState<HeroBannerProps>()

  const { data: categoryData, loading: loadingCategory } = useQuery(
    QUERY_CATEGORY,
    {
      variables: {
        id,
      },
    }
  )

  //TODO: API has to return width and height
  const getImageUrl = (path: string) =>
    generateImage(ThumborInstanceTypes.IMAGE, path)

  useEffect(() => {
    const desktopImage = getImageUrl(
      categoryData?.category?.customization?.desktop?.imgPath
    )
    const mobileImage = getImageUrl(
      categoryData?.category?.customization?.mobile?.imgPath
    )
    setCategoryHero({
      desktopImage,
      mobileImage,
      title: categoryData?.category?.name,
      description: categoryData?.category?.description,
    })
    // eslint-disable-next-line
  }, [categoryData])

  const hasResults =
    !!categoryData?.category?.children?.length || !!categoryData?.posts?.length

  const isEmpty = !loadingCategory && !hasResults

  return (
    <Container flexDirection={'column'} width={'100%'}>
      <HeroBanner {...categoryHero}>
        <Flex gridGap={2}>
          <Button
            backgroundColor={`${colors.grey['800']}`}
            variant={'unstyled'}
            iconName={!!categoryData?.category?.pinnedAt ? 'check' : 'plus'}
            color={`${colors.white}`}
            label={t('page.collection.my_list')}
            width={'100%'}
            height={'100%'}
          />
        </Flex>
      </HeroBanner>
      <Flex pb={2} gridGap={10} flexDirection={'column'}>
        {loadingCategory && (
          <Box p={sizes.paddingSm} width="100%">
            <Skeleton kind="cards" numberOfCards={4} />
          </Box>
        )}
        {!!categoryData?.category?.children?.length && (
          <CategoriesGrid sectionTitle={t("page.category.categories")} items={categoryData?.category?.children} />
        )}
        {!!categoryData?.posts?.length && (
          <PostsGrid sectionTitle={t("page.category.videos")} items={categoryData?.posts}></PostsGrid>
        )}
        {/* TODO: Built a empty state component */}
        {isEmpty && (
          <Flex w={'100vw'} py={20} justifyContent="center" color="white">
            Page empty! We need to create an empty state component.
          </Flex>
        )}
      </Flex>
    </Container>
  )
}

export { CategoryPage }
