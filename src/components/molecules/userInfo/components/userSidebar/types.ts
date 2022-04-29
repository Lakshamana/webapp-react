export type User = {
  username?: string | null;
  display_name?: string | null;
  id?: string;
  avatar?: string;
};

export interface PropsUserSidebar {
  account?: User | undefined | null;
  toggleColorMode: any;
}