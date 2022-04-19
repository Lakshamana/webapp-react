type TypeOptions = 'REPORT' | 'EDIT' | 'DELETE'

interface IEditInput {
  id: string
  option: TypeOptions
}

export interface IProps {
  description: string
  editInput: Maybe<IEditInput>
  setEditInput: any
}