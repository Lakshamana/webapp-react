import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { Divider, Box } from '@chakra-ui/layout'
import { useTranslation } from 'react-i18next'
import { QUERY_CATEGORIES, QUERY_POSTS } from 'services/graphql'
import { Category, Post } from 'generated/graphql'
import { useCommonStore } from 'services/stores'
import {
  Container,
  EmptyState,
  Skeleton,
  PostsGrid,
  CategoriesGrid,
} from 'components'
import { sizes } from 'styles'
import { getData } from 'services/storage'
import { ACCOUNT_INFO } from 'config/constants'

const MyListPage = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const [categories, setCategories] = useState<Category[]>()
  const [posts, setPosts] = useState<Post[]>()

  const AccountInfo = getData(ACCOUNT_INFO)

  const { data: pinnedCategoriesData, loading: loadingPinnedCategories } =
    useQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          pinned: true,
          account: AccountInfo?.id
        },
      },
      onCompleted: (result) => {
        setCategories(result?.categories?.rows)
      },
      fetchPolicy: 'network-only'
    })

  // TODO: Implement infinite loading on Cards Grid
  const { data: pinnedPostsData, loading: loadingPinnedPosts } = useQuery(
    QUERY_POSTS,
    {
      variables: {
        filter: {
          pinned: true,
          account: AccountInfo?.id
        },
      },
      onCompleted: (result) => {
        setPosts(result?.posts?.rows)
      },
      fetchPolicy: 'network-only'
    }
  )
  const isLoading = loadingPinnedCategories || loadingPinnedPosts

  const hasResults = categories?.length || posts?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.my_list'))
    //eslint-disable-next-line
  }, [])

  const unpinPost = (id: string) => {
    const pinnedPosts = posts?.filter((item) => item.id !== id)
    setPosts(pinnedPosts)
  }

  const unpinCategory = (id: string) => {
    const pinnedCategories = categories?.filter((item) => item.id !== id)
    setCategories(pinnedCategories)
  }

  const renderCategoriesGrid = () => (
    <CategoriesGrid
      sectionTitle={t('page.my_list.pinned_categories')}
      items={categories}
      sendUnpinEvent={(id) => unpinCategory(id)}
    ></CategoriesGrid>
  )

  const renderPostsGrid = () => (
    <PostsGrid
      sectionTitle={t('page.my_list.pinned_videos')}
      items={posts}
      sendUnpinEvent={(id) => unpinPost(id)}
    ></PostsGrid>
  )

  return (
    <Container flexDirection={'column'} width={'100vw'} my={15}>
      {isLoading && (
        <Box p={sizes.paddingSm} width="100%">
          <Skeleton kind="cards" numberOfCards={4} />
        </Box>
      )}
      {!isLoading && (
        <>
          {!!categories?.length && renderCategoriesGrid()}
          {!!categories?.length && (
            <Divider py={3} my={3} color="transparent" />
          )}
          {!!posts?.length && renderPostsGrid()}
        </>
      )}
      {isEmpty && <EmptyState />}
    </Container>
  )
}

export { MyListPage }
