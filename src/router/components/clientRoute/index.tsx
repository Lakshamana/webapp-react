import { useEffect } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { Props } from './types'
import { getChannelName } from 'utils'
import { useChannelsStore } from 'services/stores'
import { useAuth } from 'contexts/auth'
import { getData } from 'services/storage'
import { CHANNEL_INFO } from 'config/constants'

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  template: Template,
  ...rest
}: Props) => {
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
    }
    //eslint-disable-next-line
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
