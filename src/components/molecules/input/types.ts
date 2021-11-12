export interface Props {
  name?: string;
  onChange?: Function;
  value?: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  rightIcon?: "check" | "send" | string;
  onEnterPress?: Function | undefined;
}
