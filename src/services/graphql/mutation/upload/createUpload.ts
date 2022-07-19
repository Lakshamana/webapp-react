import { gql } from '@apollo/client'

export const MUTATION_CREATE_UPLOAD = gql`
mutation CreateUpload($payload: CreateUploadInput!) {
  createUpload(payload: $payload) {
    upload {
      bucket
      createdAt
      expireIn
      expired
      filename
      id
      isExpiredCalc
      status
      url
    }
    media {
      account
      id
    }
  }
}
`
