import { Link as RouterLink } from 'react-router-dom'
import { LinkStyled } from './styles'
import { LinkProps } from './types'

const Link = ({ ...props }: LinkProps) => {
  return (
    <LinkStyled
      href={props.externalLink}
      {...props}
      isExternal={props.externalLink}
    >
      {props.toRoute ? (
        <RouterLink to={props.toRoute}>
          {props.label || props.children}
        </RouterLink>
      ) : (
        <>{props.label || props.children}</>
      )}
    </LinkStyled>
  )
}

export { Link }
