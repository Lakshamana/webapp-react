type SubItem = {
  id: string
  name: string
  route: string
}

export interface IProps {
  id: string
  children: SubItem[]
  route: string
  name: string
  redirectTo: any
}