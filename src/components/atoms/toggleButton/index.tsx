import { SwitchStyled } from './style'
import { ToggleButtonProps } from "./types";

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return (
    <SwitchStyled size="md" isChecked={!!props.checked} {...props} />
  )
}

export { ToggleButton };
