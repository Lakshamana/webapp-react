type IChildren = {
  id: string
  name: string
  route: string
}

export interface IMenuItem {
  id: string
  channel: string
  icon?: string
  name: string
  platformExclusive?: boolean
  route: string
  sort?: string
  status?: string
  children: IChildren[]
}