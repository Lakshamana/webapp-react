import { useEffect } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { Props } from './types'
import { getChannelNameInPath } from 'utils'
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
      const channelName = getChannelNameInPath(channelUrl)
      if (channelName) {
        updateActiveChannel(channelName)
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
