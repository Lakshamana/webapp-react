export interface MediaPlayerReport {
    contentId: string
    contentTitle: string
    channelId: string
    duration: number
    mediaSessionId: string
    typename: string
    userId: string
    watch: number
    collectionId: string
  }
  
  export interface PostCategoriesReport {
    contentId: string
    contentTitle: string
    channelId: string
    mediaSessionId: string
    typename: string
    userId: string
    categoryId: string
    categoryName: string
    parentCategoryId: string
  }
  
  export interface PostReactionReport {
    contentId?: string
    contentTitle?: string
    channelId?: string
    mediaSessionId?: string
    typename?: string
    userId?: string
    collectionId?: string
    reaction?: string
  }
  
  export interface PostCommentReport {
    contentId: string
    contentTitle: string
    channelId: string
    mediaSessionId: string
    typename: string
    userId: string
    collectionId: string
    comment: number
  }
  
  export interface AuthReport {
    email: string
    kind: string
  }