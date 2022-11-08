import { gql } from '@apollo/client'

export const QUERY_VERIFY_ORGANIZATION_KIND = gql`
  query OrganizationKind($id: ID!) {
    organizationKind(id: $id) {
      id
      kind
    }
  }
`
export const QUERY_ORGANIZATION_ENTITLEMENTS = gql`
  query OrganizationEntitlements($id: ID!) {
    organization(id: $id) {
      id
      entitlements
      access
    }
  }
`

