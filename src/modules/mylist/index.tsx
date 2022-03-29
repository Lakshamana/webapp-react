import { useQuery } from '@apollo/client'
import { Flex } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { QUERY_CATEGORIES, QUERY_POSTS } from 'services/graphql'
import { Container, Skeleton } from 'components'
import { PostsGrid, CategoriesGrid } from 'components'
import { useCommonStore } from 'services/stores'
import { useEffect } from 'react'

const MyListPage = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()

  //TODO: Waiting for API to list pinned posts and categories

  const { data: pinnedCategoriesData, loading: loadingPinnedCategories } =
    useQuery(QUERY_CATEGORIES, {
      variables: {},
    })

  // TODO: Implement infinite loading on Cards Grid
  const { data: pinnedPostsData, loading: loadingPinnedPosts } = useQuery(
    QUERY_POSTS,
    {
      variables: {},
    }
  )
  const isLoading = loadingPinnedCategories || loadingPinnedPosts

  const hasResults =
    pinnedCategoriesData?.pinnedCategories?.length ||
    pinnedPostsData?.pinnedPosts?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.my_list'))
    //eslint-disable-next-line
  }, [])

  const renderCategoriesGrid = () => (
    <CategoriesGrid
      sectionTitle={t('page.my_list.pinned_categories')}
      items={pinnedCategoriesData?.pinnedCategories}
    ></CategoriesGrid>
  )

  const renderPostsGrid = () => (
    <PostsGrid
      sectionTitle={t('page.my_list.pinned_videos')}
      items={pinnedPostsData?.pinnedPosts}
    ></PostsGrid>
  )

  return (
    <Container flexDirection={'column'} width={'100vw'} defaultPadding my={15}>
      {isLoading && <Skeleton kind="cards" numberOfCards={4} />}
      {!!pinnedCategoriesData?.pinnedCategories?.length &&
        renderCategoriesGrid()}
      {!!pinnedPostsData?.pinnedPosts?.length && renderPostsGrid()}
      {/* TODO: built a empty state component */}
      {isEmpty && (
        <Flex w={'100vw'} justifyContent="center" color="white">
          Page empty! We need to create an empty state component.
        </Flex>
      )}
    </Container>
  )
}

export { MyListPage }
