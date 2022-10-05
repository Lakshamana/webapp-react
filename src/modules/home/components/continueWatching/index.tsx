import axios from 'axios'
import { ContinueWatchingScroller } from 'components'
import { GET_IP_API, MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'
import { useEffect, useState } from 'react'
import { useAuthStore, useChannelsStore } from 'services/stores'
import { Props } from './types'

const ContinueWatchingScrollerComponent = ({ item, getCarouselLabel }: Props) => {
  const { activeChannel } = useChannelsStore()
  const { isAnonymousAccess, user, account } = useAuthStore()
  const [listData, setListData] = useState<any>()
  const [isCWatchingLoading, setIsCWatchingLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!isAnonymousAccess && user?.id && activeChannel?.id) {
      setListData(undefined)
      continueWatchingList()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, activeChannel])

  const continueWatchingList = async (lastVideoId?: String) => {
    setIsCWatchingLoading(true)
    try {
      const myIp = await axios.get(GET_IP_API)
      const headers = { 'x-forwarded-for': myIp.data.ip }
      const params = {
        channelId: activeChannel?.id,
        limit: MAX_CARDS_SCROLLER_RESULTS,
        userId: user?.id
      }
      if (lastVideoId) params['lastVideoId'] = lastVideoId
      if (account?.is_admin) params['isAdmin'] = account?.is_admin
      const URL = `https://${process.env.REACT_APP_API_ENDPOINT}/posts/continue-watching`
      const { data } = await axios.post(URL, params, { headers })
      if (data?.statusCode === 200) {
        const { rows, ...allRest } = data.body.data
        setListData((previous) => ({
          ...listData,
          ...allRest,
          rows: [...(previous?.rows || []), ...rows],
        }))
      }
    } catch (error) {
    } finally {
      setIsCWatchingLoading(false)
    }
  }

  const loadMoreContinueWatchingPosts = () => {
    if (listData?.hasNextPage) {
      continueWatchingList(listData?.lastVideoId)
    }
  }

  const isAllowed = !isAnonymousAccess && user?.id && activeChannel?.id
  if (!isAllowed) return <></>

  return (
    <ContinueWatchingScroller
      key={`${item.LABEL[0].VALUE}`}
      items={listData?.rows}
      sectionTitle={getCarouselLabel(item)}
      sectionUrl={''}
      loadMoreItems={loadMoreContinueWatchingPosts}
      isLoading={isCWatchingLoading}
    />
  )
}

export { ContinueWatchingScrollerComponent }
