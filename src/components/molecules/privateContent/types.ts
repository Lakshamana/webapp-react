export type Props = {
  requestAccess: (password: string) => void
  isLoadingRequest: boolean
  error: string
  type?: ContentType
}

type ContentType = 'channel' | 'post' | 'organization' | 'live' | 'room'
