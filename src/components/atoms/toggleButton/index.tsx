import { SwitchStyled } from './style'
import { ToggleButtonProps } from "./types";

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return (
    <SwitchStyled size="lg" {...props} />
  )
}

export { ToggleButton };
