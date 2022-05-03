import { gql } from '@apollo/client'

export const MUTATION_LIVE_EVENT_PASSWORD_CHECK = gql`
  mutation LiveEventPasswordCheck($id: String!, $payload: LiveEventPasswordCheckInput!) {
    liveEventPasswordCheck(id: $id, payload: $payload) {
      correct
    }
  }
`
