import {
  ActionNotAllowed,
  CheckoutFlow,
  EmptyHeader,
  GeolockedContent,
  Header,
  InternalFooter,
  PrivateContent
} from 'components'
import { runOneSignal } from 'config/pushNotification'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { NotAuthorized, PaywallPlatform } from 'modules'
import { useEffect } from 'react'
import { useAuthStore } from 'services/stores'
import { ChildContainer, LayoutContainer, LayoutMain } from './style'
import { defaultProps, Props } from './types'

const MainLayout = ({ children, emptyHeader, ...props }: Props) => {
  const {
    isActionNotAllowedOpen,
    closeActionNotAllowed,
    isPrivate,
    isOnPaywall,
    isGeolocked,
    isExclusive,
    entitlements,
    errorOnPrivateRequestAccess,
    isLoadingPasswordCheck,
    contentType,
    clearAllStatus,
    requestContentAccess,
  } = useAccessVerifications()

  const { isAnonymousAccess } = useAuthStore()

  const exclusiveContent = isExclusive && isAnonymousAccess

  const isContentAvailable =
    !isPrivate && !isOnPaywall && !exclusiveContent && !isGeolocked

  useEffect(() => {
    runOneSignal()
  }, [])

  return (
    <LayoutContainer flexDirection="column">
      {emptyHeader ? <EmptyHeader /> : <Header />}
      <LayoutMain id="scroll-master">
        <ChildContainer pb={30} justifyContent={'center'} {...props}>
          {isOnPaywall && isAnonymousAccess && (
            <PaywallPlatform type={contentType} />
          )}
          {isOnPaywall && !isAnonymousAccess && (
            <CheckoutFlow products={entitlements} accessGranted={clearAllStatus} />
          )}
          {exclusiveContent && <NotAuthorized />}
          {isPrivate && (
            <PrivateContent
              type={contentType}
              error={errorOnPrivateRequestAccess}
              isLoadingRequest={isLoadingPasswordCheck}
              requestAccess={requestContentAccess}
            />
          )}
          {isGeolocked && <GeolockedContent />}
          {isContentAvailable && children}
        </ChildContainer>
        <InternalFooter />
        <ActionNotAllowed
          isOpen={isActionNotAllowedOpen}
          onClose={closeActionNotAllowed}
        />
      </LayoutMain>
    </LayoutContainer>
  )
}

MainLayout.defaultProps = defaultProps

export { MainLayout }
