export interface Props {
  messages?: Message[]
  enabled?: boolean
}

interface Message {
  id?: string
  isOwnUser?: boolean
  username?: string
  userId?: string
  dateAdded?: Date
  text?: string
  avatarPath?: string
}
