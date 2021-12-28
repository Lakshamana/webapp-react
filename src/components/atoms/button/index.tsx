import { Icon } from '@iconify/react'
import { ButtonStyled } from './style'
import { Props, defaultProps } from './types'

const Button = ({ label, children, iconName, size, ...props }: Props) => {
  return (
    <ButtonStyled
      {...props}
      {...(iconName ? { leftIcon: <Icon width={20} icon={`mdi:${iconName}`} /> } : {})}
      {...(size ? { size } : { height: '56px' })}
    >
      {label}
      {children}
    </ButtonStyled>
  )
}
Button.defaultProps = defaultProps

export { Button }
