import { gql } from '@apollo/client'

export const QUERY_BILLBOARD = gql`
  query billboard($target: BillboardTarget!) {
    billboard(target: $target) {
      actions {
        bgColor
        borderColor
        icon
        label
        route
        textColor
      }
      banner {
        height
        id
        imgPath
        status
        type
        width
      }
      cover {
        height
        id
        imgPath
        status
        type
        width
      }
      title
      target
      sort
      id
      description
      delay
    }
  }
`
