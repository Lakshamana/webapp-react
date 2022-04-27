export interface Props {
  messages?: Message[];
  reactions?: Reaction[]; 
}

interface Message {
  id?: string;
  isOwnUser?: boolean;
  username?: string;
  userId?: string;
  dateAdded?: Date;
  text?: string;
  avatarPath?: string;
}

interface Reaction {
  id?: string;
  dateAdded?: Date
  name?: string
  userId?: string
}