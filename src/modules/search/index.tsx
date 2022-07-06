import { useLazyQuery } from '@apollo/client'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Container, EmptyState, Skeleton } from 'components'
import { SearchResult } from 'generated/graphql'
import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { QUERY_SEARCH } from 'services/graphql/queries/search'
import { ThumborInstanceTypes, ThumborParams, useThumbor } from 'services/hooks'
import { useChannelsStore } from 'services/stores'
import { sizes } from 'styles'
import { SearchCardProps } from 'types/search'
import { isEntityBlocked } from 'utils/accessVerifications'
import { SearchCard } from './components'

const SearchPage = () => {
  const { search } = useLocation()
  const [stringToSearch, setStringToSearch] = useState('')
  const [searchResults, setSearchResults] = useState<SearchCardProps[]>()

  const { activeChannel } = useChannelsStore()
  const { generateImage } = useThumbor()

  // TODO: Implement pagination like in feed
  const [doSearch, { loading }] = useLazyQuery(QUERY_SEARCH, {
    variables: {
      filters: {
        query: stringToSearch,
      },
    },
    onCompleted: (result) => {
      filterSearchItems(result?.search?.rows)
    },
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

  const searchType = (type: any) => {
    const Type = {
      SearchCategory: 'category',
      SearchLiveEvent: 'live',
      SearchPost: 'post',
    }
    return Type[type]
  }

  const getImageUrl = (item) => {
    const imageOptions: ThumborParams = {
      size: {
        height: 400,
      },
    }

    if (isEntityBlocked(item)) {
      imageOptions.blur = 20
    }

    const thumbnailPath =
      item.media?.__typename === 'MediaVideo' ? item.media?.thumbnailPath : ''

    const image = generateImage(
      ThumborInstanceTypes.IMAGE,
      item.thumbnail?.imgPath || thumbnailPath || '',
      imageOptions,
      item.thumbnail?.imgPath ? null : item.media?.baseUrl
    )

    return image
  }

  const getUrl = (item: SearchResult) => {
    return `/c/${activeChannel?.slug}/${searchType(item.__typename)}/${
      item.slug
    }`
  }

  const filterSearchItems = (results: SearchResult[]) => {
    const filteredResults = results.map((item) => {
      const thumbnail = getImageUrl(item)
      return {
        id: item.id || '',
        description: item.description,
        isExclusive: isEntityBlocked(item),
        url: getUrl(item),
        thumbnail: thumbnail,
      }
    }, [])
    setSearchResults(filteredResults)
  }

  if (loading)
    return (
      <Box p={sizes.paddingSm} width="100%">
        <Skeleton kind="cards" numberOfCards={3} />
      </Box>
    )
  // TODO:  Build a empty state for empty search
  if (!searchResults?.length) return <EmptyState />

  return (
    <Container
      flexDirection={'column'}
      py={32}
      px={[2, 32, 32, 64]}
      width={'100%'}
    >
      <SimpleGrid width={'100%'} columns={[1, 2, 2, 3, 3, 4, 5]} spacing={3}>
        {searchResults?.map((item) => {
          return <SearchCard key={item.id} {...item} />
        })}
      </SimpleGrid>
    </Container>
  )
}

export { SearchPage }
