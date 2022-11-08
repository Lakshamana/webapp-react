import { useLazyQuery } from '@apollo/client'
import { Box, Divider } from '@chakra-ui/layout'
import {
  CategoriesGrid,
  Container,
  EmptyState,
  PostsGrid,
  Skeleton
} from 'components'
import { Category, Post } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { QUERY_CATEGORIES, QUERY_POSTS_CARDS } from 'services/graphql'
import { useAuthStore, useCommonStore } from 'services/stores'
import { sizes } from 'styles'

const MyListPage = () => {
  const { t } = useTranslation()
  const { setPageTitle } = useCommonStore()
  const [categories, setCategories] = useState<Category[]>()
  const [posts, setPosts] = useState<Post[]>()
  const { account, isAnonymousAccess } = useAuthStore()
  const [isLoadingMyList, setIsLoadingMyList] = useState<boolean>(true)
  const history = useHistory()

  const [getPinnedCategories, { loading: loadingPinnedCategories }] =
    useLazyQuery(QUERY_CATEGORIES, {
      variables: {
        filter: {
          pinned: true,
          account: account?.id,
          sortBy: 'sort.desc',
        },
      },
      onCompleted: (result) => {
        setCategories(result?.categories?.rows)
      },
      fetchPolicy: 'cache-and-network',
    })

  const [getPinnedPosts, { loading: loadingPinnedPosts }] = useLazyQuery(
    QUERY_POSTS_CARDS,
    {
      variables: {
        filter: {
          pinned: true,
          account: account?.id,
        },
      },
      onCompleted: (result) => {
        setPosts(result?.posts?.rows)
      },
      fetchPolicy: 'cache-and-network',
    }
  )

  const isLoading =
    loadingPinnedCategories || loadingPinnedPosts || isLoadingMyList

  const hasResults = categories?.length || posts?.length

  const isEmpty = !isLoading && !hasResults

  useEffect(() => {
    setPageTitle(t('header.tabs.my_list'))

    if (isAnonymousAccess) history.push('/create-your-account')

    if (account) {
    getPinnedCategories()
    getPinnedPosts()
    setIsLoadingMyList(false)
    }

    //eslint-disable-next-line
  }, [account])

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
    />
  )

  const renderPostsGrid = () => (
    <PostsGrid
      sectionTitle={t('page.my_list.pinned_posts')}
      items={posts}
      sendUnpinEvent={(id) => unpinPost(id)}
    />
  )

  if (isLoading)
    return (
      <Box p={sizes.paddingSm} width="100%">
        <Skeleton kind="cards" numberOfCards={4} />
      </Box>
    )

  if (isEmpty) return <EmptyState />

  return (
    <Container flexDirection={'column'} width={'100vw'} my={30}>
      {!!categories?.length && renderCategoriesGrid()}
      {!!categories?.length && <Divider py={3} my={3} color="transparent" />}
      {!!posts?.length && renderPostsGrid()}
    </Container>
  )
}

export { MyListPage }
