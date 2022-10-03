export interface ChannelProps {
  id?: string
  name?: string
  image?: string
  url?: string
  description?: string
  isGeolocked?: boolean
  isExclusive?: boolean
  onClick?: any
  thumbnail?: string
}

export type ChannelStorageData = {
  id: string
  name: string
  slug: string
  kind: string
  access: string
}
