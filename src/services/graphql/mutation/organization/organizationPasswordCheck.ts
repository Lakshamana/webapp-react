import { gql } from '@apollo/client'

export const MUTATION_ORGANIZATION_PASSWORD_CHECK = gql`
  mutation OrganizationPasswordCheck($organizationId: ID!, $password: String!) {
    organizationPasswordCheck(organizationId: $organizationId, password: $password) {
      correct
    }
  }
`
