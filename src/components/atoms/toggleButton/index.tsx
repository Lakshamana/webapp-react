import Switch from 'react-switch'
import { ToggleButtonProps } from "./types";

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return (
    <Switch
      onColor="rgba(255, 255, 255, 0.38)"
      onHandleColor="#0660F9"
      handleDiameter={20}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      height={10}
      width={28}
      className="react-switch"
      {...props}
    />
  )
}

export { ToggleButton };
