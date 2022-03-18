export interface Props {
  messages?: Array<Item>;
}

interface Item {
  isOwnUser?: boolean;
  username?: string;
  createdAt?: string;
  message?: string;
  userAvatar?: string;
}