export type AlertType = 'warning' | 'error' | 'success' | 'info'

export type AlertObjectType = {
  message: string
  type: AlertType
}
