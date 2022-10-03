export type Props = {
  requestAccess: (password: string) => void
  isLoadingRequest: boolean
  error: string
  type?: ContentType
}

type ContentType = 'post' | 'liveEvent' | 'category' | 'channel' | 'organization'
