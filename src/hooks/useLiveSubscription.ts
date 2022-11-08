import { useSubscription } from '@apollo/client'
import { Status } from 'generated/graphql'
import { useState } from 'react'
import { SUBSCRIBE_TO_LIVE_EVENT } from 'services/graphql'

export const useLiveSubscription = (id: string) => {
  const [subscriptionLiveStatus, setSubscriptionLiveStatus] =
    useState<Maybe<Status>>(null)

  const { error } = useSubscription(SUBSCRIBE_TO_LIVE_EVENT, {
    variables: { id },
    onSubscriptionData: (result) => {
      setSubscriptionLiveStatus(
        result.subscriptionData.data.subscribeToLiveEvent.status
      )
    },
  })

  return { subscriptionLiveStatus }
}
