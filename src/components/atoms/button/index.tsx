import { Icon } from '@iconify/react'
import { ButtonStyled } from './style'
import { Props, defaultProps } from './types'

const Button = ({ label, children, iconName, size, borderColor, ...props }: Props) => {
  return (
    <ButtonStyled
      {...props}
      {...(iconName ? { leftIcon: <Icon width={18} icon={`mdi:${iconName}`} /> } : {})}
      {...(size ? { size } : { height: '56px' })}
      {...(borderColor ? { border: `1px solid ${borderColor}`} : {})}
    >
      {label}
      {children}
    </ButtonStyled>
  )
}
Button.defaultProps = defaultProps

export { Button }
