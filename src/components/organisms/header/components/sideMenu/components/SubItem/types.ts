export type ISubItem = {
  id: string
  name: string
  route: string
}

export interface IProps {
  id: string
  children: ISubItem[]
  route: string
  name: string
  redirectTo: any
}