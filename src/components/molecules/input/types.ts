export interface Props {
  onChange?: Function;
  value?: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  sendIcon?: boolean;
  onEnterPress?: Function | undefined;
}
