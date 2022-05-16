import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { ClientRoutes } from './routes'
import { getChannelName } from 'utils/helperFunctions'
import { useChannelsStore } from 'services/stores'
import { useAuth } from 'contexts/auth'
import { getData } from 'services/storage'
import { CHANNEL_INFO } from 'config/constants'

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
        if (storedChannel?.slug === channelSlug) {
          setActiveChannel(storedChannel)
        } else {
          updateActiveChannel(channelSlug)
        }
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
