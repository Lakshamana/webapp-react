import { useLazyQuery } from '@apollo/client'
import { Box, Spacer, Text } from '@chakra-ui/react'
import {
  CategoriesGrid,
  Container,
  EmptyState,
  LiveEventsGrid,
  PostsGrid,
  Skeleton
} from 'components'
import { Category, LiveEvent, Post, PostType } from 'generated/graphql'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { QUERY_SEARCH } from 'services/graphql/queries/search'
import { useThemeStore } from 'services/stores'
import { colors, sizes } from 'styles'

const SearchPage = () => {
  const { search } = useLocation()
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [stringToSearch, setStringToSearch] = useState('')
  const [posts, setPosts] = useState<Post[]>()
  const [categories, setCategories] = useState<Category[]>()
  const [liveEvents, setLiveEvents] = useState<LiveEvent[]>()

  const [doSearch, { data, loading }] = useLazyQuery(QUERY_SEARCH, {
    variables: {
      filters: {
        query: stringToSearch,
        pageSize: 1000
      },
    },
    onCompleted: (result) => {
      setPosts(
        result?.search?.rows
          .filter((item) => item.__typename === 'SearchPost')
          .filter((post) => post.type === PostType.Video || post.type === PostType.OnDemand)
      )
      setCategories(
        result?.search?.rows.filter(
          (item) => item.__typename === 'SearchCategory'
        )
      )
      setLiveEvents(
        result?.search?.rows.filter(
          (item) => item.__typename === 'SearchLiveEvent'
        )
      )
    },
    fetchPolicy: 'cache-and-network' 
  })

  const useQuery = () =>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo(() => new URLSearchParams(search), [search])

  const query = useQuery()

  useEffect(() => {
    const searchFor = query.get('s')
    searchFor && setStringToSearch(searchFor)
    //eslint-disable-next-line
  }, [query])

  useEffect(() => {
    doSearch()
    //eslint-disable-next-line
  }, [stringToSearch])

  if (loading)
    return (
      <Box p={sizes.paddingSm} width="100%">
        <Skeleton kind="cards" numberOfCards={3} />
      </Box>
    )

  // TODO:  Build a empty state for empty search
  if (!data?.search?.rows?.length) return <EmptyState />

  return (
    <Container flexDirection={'column'} py={4} width={'100%'}>
      <Box width={'100%'} textAlign={'right'}>
        <Text
          paddingX={{ base: sizes.paddingSm, md: sizes.paddingMd }}
          fontSize={{sm: '14px', md: '18px'}}
          color={colors.generalText[colorMode]}
        >
          {t('page.search.results_for', {
            string: stringToSearch,
            count: data?.search?.total,
          })}
        </Text>
      </Box>

      {!!liveEvents?.length && (
        <>
          <Spacer pt={6} />
          <LiveEventsGrid
            sectionTitle={t('page.search.live_events_section')}
            items={liveEvents}
          />
        </>
      )}
      <Spacer pt={6} />
      {!!posts?.length && (
        <>
          <Spacer pt={6} />
          <PostsGrid
            sectionTitle={t('page.search.videos_section')}
            items={posts}
          />
        </>
      )}
      <Spacer pt={6} />
      {!!categories?.length && (
        <>
          <Spacer pt={6} />
          <CategoriesGrid
            sectionTitle={t('page.search.categories_section')}
            items={categories}
          />
        </>
      )}
    </Container>
  )
}

export { SearchPage }
