import { useEffect } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { Props } from './types'
import { convertDashToCamel } from 'utils'
import { useChannelsStore } from 'services/stores'
import { useAuth } from 'contexts/auth'

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  template: Template,
  ...rest
}: Props) => {
  const { activeChannel } = useChannelsStore()
  const { updateActiveChannel } = useAuth()
  const location = useLocation()

  useEffect(() => {
    if (!activeChannel) {
      const channelUrl = location.pathname
      const hasChannelInRoute = channelUrl.indexOf('/c/')
      if (hasChannelInRoute !== -1) {
        const channelInRoute = channelUrl?.substring(
          channelUrl.indexOf('c/') + 2
        )
        const hasSlash = channelInRoute.indexOf('/')
        const channelName =
          hasSlash > -1
            ? channelInRoute.substring(0, channelInRoute.indexOf('/'))
            : channelInRoute

        updateActiveChannel(convertDashToCamel(channelName))
      }
    }
  }, [activeChannel])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <Route
      exact
      {...rest}
      render={() =>
        isAccesible ? (
          <Template>
            <Component />
          </Template>
        ) : (
          <Redirect to={redirectTo || ''} />
        )
      }
    />
  )
}

export { ClientRoute }
