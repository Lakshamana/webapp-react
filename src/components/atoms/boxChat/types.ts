export interface Props {
  date: string;
  username: string;
  message: string;
  isOwnUser?: boolean;
  avatarUrl?: string;
}

export const defaultProps = {
  isOwnUser: false,
  username: "",
  message: "",
  date: "",
};
