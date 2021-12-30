import { gql } from '@apollo/client'

export const QUERY_ORGANIZATION = gql`
  query Organization($id: ID!) {
    organization(id: $id) {
      id
    }
  }
`

export const QUERY_ORGANIZATION_PUBLIC_SETTINGS = gql`
  query OrganizationPublicSettings($id: ID!) {
    organizationPublicSettings(id: $id) {
      id
      kind
      status
      customization
      settings {
        bucket
        aws
      }
      avatarCdnBaseUrl
      audioCdnBaseUrl
      imageCdnBaseUrl
    }
  }
`
