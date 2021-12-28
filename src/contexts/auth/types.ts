export interface AuthTypes {
  signed: boolean
  user: object | null
  signOut: () => Promise<void>
  updateUser: () => Promise<void>
}
