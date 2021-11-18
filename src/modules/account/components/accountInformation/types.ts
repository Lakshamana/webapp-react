export type Information = {
  label: string
  id: string
  value: any
  format?: any
  onClick?: any
}

export interface AccountInformationProps {
  data: Array<Information>
}
