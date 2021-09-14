export interface Props {
  date: string;
  username: string;
  message: string;
  isOwnUser?: boolean;
}

export const defaultProps = {
  isOwnUser: false,
  username: "",
  message: "",
  date: "",
};
