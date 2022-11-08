import { gql } from '@apollo/client'

export const SUBSCRIBE_TO_LIVE_EVENT = gql`
  subscription SubscribeToLiveEvent($id: String!) {
    subscribeToLiveEvent(id: $id) {
      id
      status
    }
  }
`
