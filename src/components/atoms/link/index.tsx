import { Link as RouterLink } from 'react-router-dom'
import { LinkStyled } from './styles'
import { Props } from './types'
import { useThemeStore } from 'services/stores/theme'
import { colors } from 'styles'

const Link = ({ to, label, isExternal, defaultColor, ...props }: Props) => {
  const { colorMode } = useThemeStore()

  const renderRouterLink = () => {
    return (
      <div
        style={{
          color: defaultColor
            ? colors.generalText[colorMode]
            : colors.brand.accent[colorMode],
        }}
      >
        <RouterLink to={to}>{label}</RouterLink>
      </div>
    )
  }

  const renderExternalink = () => {
    return (
      <LinkStyled
        {...props}
        href={to}
        isExternal={isExternal}
        color={
          defaultColor
            ? colors.generalText[colorMode]
            : colors.brand.accent[colorMode]
        }
      >
        {label}
      </LinkStyled>
    )
  }
  return isExternal ? renderExternalink() : renderRouterLink()
}

export { Link }
