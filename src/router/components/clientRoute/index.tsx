import { useAuth } from 'contexts/auth'
import { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Props } from './types'

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  template: Template,
  templateProps,
  ...rest
}: Props) => {
  const { signed } = useAuth()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  return (
    <Route
      exact
      {...rest}
      render={() =>
        isAccesible ? (
          <Template {...templateProps}>
            <Component />
          </Template>
        ) : (
          <Redirect to={signed ? '/channels' : '/login'} />
        )
      }
    />
  )
}

export { ClientRoute }
