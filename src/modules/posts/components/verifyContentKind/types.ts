export type Props = {
  contentSlug: string
  contentType: ContentType
  accessGranted: () => void
}

type ContentType = 'post' | 'live'
