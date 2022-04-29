export interface Props {
  dataChat?: Array<Chat>
  title?: string
  onPressEnter?: any
  onChangeChat?: any
  onCloseChat?: any
  entityId: Maybe<string>
}

interface Chat {
  iconUrl?: string
  date?: string
  username?: string
  message?: string
  isOwnUser?: boolean
}
