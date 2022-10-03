import { gql } from '@apollo/client'

export const QUERY_VERIFY_ORGANIZATION_KIND = gql`
  query GetOrganizationKind($id: ID!) {
    organization(id: $id) {
      id
      access
      kind
    }
  }
`
export const QUERY_ORGANIZATION_ENTITLEMENTS = gql`
  query GetOrganizationEntitlements($id: ID!) {
    organization(id: $id) {
      id
      entitlements
    }
  }
`
