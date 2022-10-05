import { AccessVerificationsProvider } from 'contexts/accessVerifications'
import { useAuth } from 'contexts/auth'
import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useChannelsStore } from 'services/stores'
import { getChannelName } from 'utils/helperFunctions'
import { ClientRoutes } from './routes'

const Router = () => {
  const { activeChannel } = useChannelsStore()
  const { updateActiveChannel } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!activeChannel) {
      const channelUrl = location.pathname
      const channelSlug = getChannelName(channelUrl)
      updateActiveChannel(channelSlug)
    }
    //eslint-disable-next-line
  }, [activeChannel])

  return (
    <AccessVerificationsProvider>
      <ClientRoutes />
    </AccessVerificationsProvider>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export { AppRouter }
