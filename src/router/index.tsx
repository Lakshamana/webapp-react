import { BrowserRouter } from 'react-router-dom'

import { ClientRoutes } from './routes'
import {
  publicPermissionUnauthenticated,
  publicPermissionAuthenticated,
  exclusivePermissionUnauthenticated,
  exclusivePermissionAuthenticated,
  defaultPermission,
} from './permission'
import { useAuth } from 'contexts/auth'
import { useEffect, useState } from 'react'
import { getData } from 'services/storage'
import { AUTH_TOKEN } from 'config/constants'

const Router = () => {
  const { kind } = useAuth()

  const accessToken = getData(AUTH_TOKEN)

  const [currentPermissions, setCurrentPermissions] =
    useState(defaultPermission)

  useEffect(() => {
    const permission = () => {
      switch (kind) {
        case 'public':
          setCurrentPermissions(
            accessToken
              ? publicPermissionAuthenticated
              : publicPermissionUnauthenticated
          )
          break
        case 'exclusive':
          setCurrentPermissions(
            accessToken
              ? exclusivePermissionAuthenticated
              : exclusivePermissionUnauthenticated
          )
          break
        default:
          setCurrentPermissions(defaultPermission)
      }
    }
    permission()
  }, [kind, accessToken])

  return <ClientRoutes isAccesible={currentPermissions} />
}

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export { AppRouter }
