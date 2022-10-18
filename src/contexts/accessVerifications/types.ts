import { Product } from 'types/products'

export interface AccessVerificationsTypes {
  contentType: 'channel' | 'organization'
  showActionNotAllowedAlert: () => void
  isActionNotAllowedOpen: boolean
  errorOnPrivateRequestAccess: string
  closeActionNotAllowed: () => void
  isOnPaywall: boolean
  isPrivate: boolean
  isGeolocked: boolean
  isExclusive: boolean
  entitlements: Product[]
  setContentAccessGranted: (status: boolean) => void
  accessGranted: boolean
  isLoadingEntitlements: boolean
  isLoadingPasswordCheck: boolean
  getEntitlements: () => void
  requestContentAccess: (password: string) => void
  clearAllStatus: () => void
}
