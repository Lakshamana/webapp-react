import { SwitchStyled } from './style'
import { ToggleButtonProps } from "./types";

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return (
    <SwitchStyled size="md" {...props} />
  )
}

export { ToggleButton };
