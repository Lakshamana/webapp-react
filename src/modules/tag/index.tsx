import { useQuery } from '@apollo/client'
import { Flex, Box } from '@chakra-ui/react'
import { useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import {
  Container,
  Skeleton,
  CategoriesGrid,
  PostsGrid,
  EmptyState,
} from 'components'
import { QUERY_TAG } from 'services/graphql'
import { sizes } from 'styles'

const TagPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const { data, loading } = useQuery(QUERY_TAG, {
    variables: {
      id: id,
    },
  })

  const isEmpty =
    !data?.tag?.relatedCategories?.length && !data?.tag?.relatedPosts?.length

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
        {!!data?.tag?.relatedPosts?.length && (
          <PostsGrid
            sectionTitle={t('page.category.videos')}
            items={data?.tag?.relatedPosts}
          ></PostsGrid>
        )}
      </Flex>
    </Container>
  )
}

export { TagPage }
