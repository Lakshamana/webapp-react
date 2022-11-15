import { useApolloClient } from '@apollo/client'
import { Status } from 'generated/graphql'
import { useEffect, useState } from 'react'
import { SUBSCRIBE_TO_LIVE_EVENT } from 'services/graphql'

export const useLiveSubscription = (id: string) => {
  const [subscriptionLiveStatus, setSubscriptionLiveStatus] =
    useState<Maybe<Status>>(null)

  const client = useApolloClient()

  const { REACT_APP_WSS_ENDPOINT } = process.env

  const subscribeToLive = () =>
    client
      .subscribe({
        query: SUBSCRIBE_TO_LIVE_EVENT,
        variables: { id },
      })
      .subscribe({
        next(data) {
          setSubscriptionLiveStatus(data.data.subscribeToLiveEvent.status)
        },
      })

  useEffect(() => {
    if (REACT_APP_WSS_ENDPOINT) {
      let unsub = subscribeToLive()
      return () => unsub.unsubscribe()
    }
    //eslint-disable-next-line
  }, [])

  return { subscriptionLiveStatus }
}
