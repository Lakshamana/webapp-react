import { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { Props } from './types'

const ClientRoute = ({
  component: Component,
  path,
  isAccesible,
  redirectTo,
  template: Template,
  ...rest
}: Props) => {


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
          <Redirect to={redirectTo || ''} />
        )
      }
    />
  )
}

export { ClientRoute }
