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
import { useEffect } from 'react'
import { initializeOneSignal } from 'utils/pushNotifications'
import { ChildContainer, LayoutContainer } from './style'
import { defaultProps, Props } from './types'

import { useHistory } from 'react-router-dom'
import { useChannelsStore } from 'services/stores'

const MainLayout = ({ children, emptyHeader, ...props }: Props) => {
  const history = useHistory()
  const {
    isActionNotAllowedOpen,
    closeActionNotAllowed,
    isPrivate,
    isOnPaywall,
    isGeolocked,
    entitlements,
    errorOnPrivateRequestAccess,
    isLoadingPasswordCheck,
    contentType,
    clearAllStatus,
    requestContentAccess,
  } = useAccessVerifications()
  const { clearActiveChannel } = useChannelsStore()

  useEffect(() => {
    initializeOneSignal()
  }, [])

  const isContentAvailable = !isOnPaywall && !isGeolocked && !isPrivate

  return (
    <LayoutContainer flexDirection="column">
      {emptyHeader ? <EmptyHeader /> : <Header />}
      <ChildContainer pb={30} justifyContent={'center'} {...props}>
        {isOnPaywall && (
          <PlanSelectFlow
            cancel={() => {
              clearActiveChannel()
              history.push('/channels')
              clearAllStatus()
            }}
            entitlement={entitlements}
          />
        )}
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
    </LayoutContainer>
  )
}

MainLayout.defaultProps = defaultProps

export { MainLayout }
