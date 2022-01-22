import { SwitchStyled } from './style'
import { ToggleButtonProps } from './types'

const ToggleButton = ({ ...props }: ToggleButtonProps) => {
  return <SwitchStyled isChecked={!!props.checked} {...props} />
}

ToggleButton.defaultProps = {
  size: 'md',
}

export { ToggleButton }
