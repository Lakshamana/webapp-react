import { gql } from '@apollo/client'

export const QUERY_ENV_CONFIG = gql`
  query EnvConfig($origin: String!) {
    envConfig(origin: $origin) {
      result
    }
  }
`
