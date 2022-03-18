import { gql } from '@apollo/client'

export const QUERY_FEED_POSTS = gql`
  query posts($limit: Int, $orderBy: [PostTypeSortDirective], $skip: Int) {
    posts(limit: $limit, orderBy: $orderBy, skip: $skip) {
      ... on PostCommon {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
      }
      ... on TextPost {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        description
      }
      ... on AudioPost {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        audioArtist
        audioTitle
        description
        thumbnail {
          imgPath
        }
        media {
          duration
        }
      }
      ... on PhotoPost {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        description
        media {
          imgPath
        }
      }
      ... on VideoPost {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        description
        counts {
          countViews
        }
        thumbnail {
          imgPath
        }
        media {
          duration
        }
      }
      ... on OnDemandPost {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        description
      }
      ... on Poll {
        title
        type
        publishedAt
        counts {
          countComments
          countLikes
          countReactions
        }
        description
        myVote
        choices {
          choice
          id
          voteCount
        }
      }
    }
  }
`
