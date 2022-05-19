import { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Props } from './types'
import { useAuth } from 'contexts/auth'

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  template: Template,
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
          <Template>
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
