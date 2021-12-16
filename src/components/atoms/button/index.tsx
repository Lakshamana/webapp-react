import { Icon } from '@iconify/react'
import { ButtonStyled } from './style'
import { Props } from './types'

const Button = ({
  label,
  fontSize,
  children,
  iconName,
  size,
  variant,
  isLoading,
  width,
  isDisabled,
  ...props
}: Props) => {
  return (
    <ButtonStyled
      {...(iconName ? { leftIcon: <Icon icon={`mdi:${iconName}`} /> } : {})}
      {...(width ? { width: width } : { width: '100%' })}
      {...props}
      {...(variant === 'unstyled' ? {border: `2px solid ${props.borderColor}`} : {})}
      {...(size ? { size: size } : { height: '56px' })}
      fontSize={'16px'}
      variant={variant || 'solid'}
      borderRadius={props.borderRadius || '6px'}
      textTransform={variant !== 'unstyled' ? 'uppercase' : ''}
      color={props.color || 'white'}
      isLoading={isLoading}
      isDisabled={isDisabled}
      className="ripple"
    >
      {label}
      {children}
    </ButtonStyled>
  )
}

export { Button }
