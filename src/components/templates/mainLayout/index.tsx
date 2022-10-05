import {
  ActionNotAllowed,
  EmptyHeader,
  GeolockedContent,
  Header,
  InternalFooter,
  PlanSelectFlow,
  PrivateContent
} from 'components'
import { useAccessVerifications } from 'contexts/accessVerifications'
import { NotAuthorized, PaywallPlatform } from 'modules'
import { useEffect } from 'react'
import { useAuthStore } from 'services/stores'
import { initializeOneSignal, OneSignal } from 'utils/pushNotifications'
import { ChildContainer, LayoutContainer } from './style'
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
    requestContentAccess,
  } = useAccessVerifications()

  const { isAnonymousAccess } = useAuthStore()

  const isContentaAvailable = !isPrivate && !isOnPaywall

  useEffect(() => {
    if (!OneSignal) initializeOneSignal()
  }, [])

  return (
    <LayoutContainer flexDirection="column">
      {emptyHeader ? <EmptyHeader /> : <Header />}
      <ChildContainer pb={30} justifyContent={'center'} {...props}>
        {isOnPaywall && isAnonymousAccess && (
          <PaywallPlatform type={contentType} />
        )}
        {isOnPaywall && !isAnonymousAccess && (
          <PlanSelectFlow entitlement={entitlements} />
        )}
        {isExclusive && isAnonymousAccess && <NotAuthorized />}
        {isPrivate && (
          <PrivateContent
            type={contentType}
            error={errorOnPrivateRequestAccess}
            isLoadingRequest={isLoadingPasswordCheck}
            requestAccess={requestContentAccess}
          />
        )}
        {isGeolocked && <GeolockedContent />}
        {isContentaAvailable && children}
      </ChildContainer>
      <InternalFooter />
      <ActionNotAllowed
        isOpen={isActionNotAllowedOpen}
        onClose={closeActionNotAllowed}
      />
    </LayoutContainer>
  )
}

MainLayout.defaultProps = defaultProps

export { MainLayout }
