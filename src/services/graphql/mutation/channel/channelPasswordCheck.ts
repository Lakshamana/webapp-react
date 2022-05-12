import { gql } from '@apollo/client'

export const MUTATION_CHANNEL_PASSWORD_CHECK = gql`
  mutation ChannelPasswordCheck($channelId: ID!, $password: String!) {
    channelPasswordCheck(channelId: $channelId, password: $password) {
      correct
    }
  }
`
