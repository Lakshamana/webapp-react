export interface Props {
  onChange?: Function;
  value?: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  rightIcon?: "check" | "send" | string;
  onEnterPress?: Function | undefined;
}
