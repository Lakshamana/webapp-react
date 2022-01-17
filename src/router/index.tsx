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
import { useAuthStore } from 'services/stores'
import { useEffect, useState } from 'react'

const Router = () => {
  const { kind } = useAuth()

  const { account } = useAuthStore()

  const [currentPermissions, setCurrentPermissions] =
    useState(defaultPermission)

  useEffect(() => {
    const permission = () => {
      switch (kind) {
        case 'public':
          setCurrentPermissions(
            account
              ? publicPermissionAuthenticated
              : publicPermissionUnauthenticated
          )
          break
        case 'exclusive':
          setCurrentPermissions(
            account
              ? exclusivePermissionAuthenticated
              : exclusivePermissionUnauthenticated
          )
          break
        default:
          setCurrentPermissions(defaultPermission)
      }
    }
    permission()
  }, [kind, account])

  return (
    <>
      <ClientRoutes isAccesible={currentPermissions} />
    </>
  )
}

const AppRouter = () => (
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)

export { AppRouter }
