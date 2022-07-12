import { CHANNEL_INFO } from 'config/constants'
import { useAuth } from 'contexts/auth'
import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { getData } from 'services/storage'
import { useChannelsStore } from 'services/stores'
import { getChannelName } from 'utils/helperFunctions'
import { ClientRoutes } from './routes'

const Router = () => {
  const { activeChannel, setActiveChannel } = useChannelsStore()
  const { updateActiveChannel } = useAuth()
  const location = useLocation()
  const storedChannel = getData(CHANNEL_INFO)

  useEffect(() => {
    if (!activeChannel) {
      const channelUrl = location.pathname
      const channelSlug = getChannelName(channelUrl)
      if (channelSlug) {
        storedChannel?.slug === channelSlug
          ? setActiveChannel(storedChannel)
          : updateActiveChannel(channelSlug)
      }

      if (storedChannel && !channelSlug) {
        setActiveChannel(storedChannel)
      }
    }
    //eslint-disable-next-line
  }, [activeChannel])

  return <ClientRoutes />
}

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export { AppRouter }
