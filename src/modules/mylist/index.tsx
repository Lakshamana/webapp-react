import { useQuery } from '@apollo/client'
import { Divider } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { QUERY_PINNED_CATEGORIES, QUERY_PINNED_POSTS } from 'services/graphql'
import { Container } from 'components'
import { colors } from 'styles'
import { PostsGrid, CategoriesGrid } from './components'

const MyListPage = () => {
  const { t } = useTranslation()

  // TO-DO: Implement infinite loading on Cards Scroller
  const { data: pinnedCategoriesData, loading: loadingPinnedCategories } =
    useQuery(QUERY_PINNED_CATEGORIES, {
      variables: {},
    })

  const { data: pinnedPostsData, loading: loadingPinnedPosts } = useQuery(
    QUERY_PINNED_POSTS,
    {
      variables: {},
    }
  )

  return (
    <Container flexDirection={'column'} width={'100vw'} defaultPadding my={15}>
      {pinnedCategoriesData?.pinnedCategories?.length &&
        !loadingPinnedCategories && (
          <CategoriesGrid
            sectionTitle={t('page.my_list.pinned_categories')}
            items={pinnedCategoriesData.pinnedCategories}
          ></CategoriesGrid>
        )}
      <Divider orientation="horizontal" my={5} color={colors.grey['700']} />
      {pinnedPostsData?.pinnedPosts?.length && !loadingPinnedPosts && (
        <PostsGrid
          sectionTitle={t('page.my_list.pinned_videos')}
          items={pinnedPostsData.pinnedPosts}
        ></PostsGrid>
      )}
    </Container>
  )
}

export { MyListPage }
