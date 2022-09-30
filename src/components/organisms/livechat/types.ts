export interface Props {
  onChangeChat?: () => void
  onCloseChat?: () => void
  entityId: Maybe<string>
  isCommentsEnabled?: boolean
  isReactionsEnabled?: boolean
  sendReaction: (reaction: string) => void
}
