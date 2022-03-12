import { useQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { QUERY_PINNED_CATEGORIES, QUERY_PINNED_POSTS } from 'services/graphql'
import { Container, Skeleton } from 'components'
import { PostsGrid, CategoriesGrid } from './components'

const MyListPage = () => {
  const { t } = useTranslation()

  // TO-DO: Implement infinite loading on Cards Grid
  const { data: pinnedCategoriesData, loading: loadingPinnedCategories } =
    useQuery(QUERY_PINNED_CATEGORIES, {
      variables: {},
    })

  // TO-DO: Implement infinite loading on Cards Grid
  const { data: pinnedPostsData, loading: loadingPinnedPosts } = useQuery(
    QUERY_PINNED_POSTS,
    {
      variables: {},
    }
  )
  const isLoading = loadingPinnedCategories || loadingPinnedPosts

  const hasResults =
    pinnedCategoriesData?.pinnedCategories?.length ||
    pinnedPostsData?.pinnedPosts?.length

  const isEmpty = !isLoading && !hasResults

  const renderCategoriesGrid = () => {
    return (
      <CategoriesGrid
        sectionTitle={t('page.my_list.pinned_categories')}
        items={pinnedCategoriesData?.pinnedCategories}
      ></CategoriesGrid>
    )
  }

  const renderPostsGrid = () => {
    return (
      <PostsGrid
        sectionTitle={t('page.my_list.pinned_videos')}
        items={pinnedPostsData?.pinnedPosts}
      ></PostsGrid>
    )
  }

  return (
    <Container flexDirection={'column'} width={'100vw'} defaultPadding my={15}>
      {isLoading && <Skeleton kind="cards" numberOfCards={4} />}
      {pinnedCategoriesData?.pinnedCategories?.length ? (
        renderCategoriesGrid()
      ) : (
        <></>
      )}
      {pinnedPostsData?.pinnedPosts?.length ? renderPostsGrid() : <></>}
      {/* TO-DO: built a empty state component */}
      {isEmpty && (
        <Flex w={'100vw'} justifyContent="center" color="white">
          Page empty! We need to create an empty state component.
        </Flex>
      )}
    </Container>
  )
}

export { MyListPage }
