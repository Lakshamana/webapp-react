import { useQuery } from '@apollo/client'
import { Box, Flex } from '@chakra-ui/react'
import {
  CategoriesGrid, Container, EmptyState, PostsGrid, Skeleton
} from 'components'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { QUERY_TAG } from 'services/graphql'
import { sizes } from 'styles'

const TagPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()

  const { data, loading } = useQuery(QUERY_TAG, {
    variables: {
      slug
    },
  })

  const isEmpty =
    !data?.tag?.relatedCategories?.length && !data?.tag?.relatedPosts?.rows?.length

  if (loading)
    return (
      <Box p={sizes.paddingSm} width="100%">
        <Skeleton kind="cards" numberOfCards={4} />
      </Box>
    )

  if (isEmpty) return <EmptyState />

  return (
    <Container flexDirection={'column'} width={'100%'}my={15}>
      <Flex pb={2} gridGap={10} flexDirection={'column'} width={'100%'}>
        {!!data?.tag?.relatedCategories?.length && (
          <CategoriesGrid
            sectionTitle={t('page.category.categories')}
            items={data?.tag?.relatedCategories}
          />
        )}
        {!!data?.tag?.relatedPosts?.rows?.length && (
          <PostsGrid
            sectionTitle={t('page.category.videos')}
            items={data?.tag?.relatedPosts?.rows}
          ></PostsGrid>
        )}
      </Flex>
    </Container>
  )
}

export { TagPage }
