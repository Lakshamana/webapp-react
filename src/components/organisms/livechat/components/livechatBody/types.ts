export interface Props {
  messages?: Array<Item>;
}

interface Item {
  id?: string;
  isOwnUser?: boolean;
  username?: string;
  userId?: string;
  dateAdded?: Date;
  text?: string;
  avatarPath?: string;
}