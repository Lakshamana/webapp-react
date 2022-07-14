import { useState } from 'react'
import { Confirm } from './confirm'
import { ConfirmEmail } from './confirm_email'
import { Reconfirm } from './reconfirm'
import { ConfirmAgeProps, ConfirmAgeSteps } from './types'

const ConfirmAgeForm = ({
  handleFormSubmit,
  onCancel,
  userEmail,
  gdprAge,
}: ConfirmAgeProps) => {
  const [activeStep, setActiveStep] = useState<ConfirmAgeSteps>('Confirm')

  const renderStep = () => {
    switch (activeStep) {
      case 'Confirm':
        return (
          <Confirm
            handleFormSubmit={handleFormSubmit}
            handleAgeDecline={() => setActiveStep('Reconfirm')}
            gdprAge={gdprAge}
          />
        )
      case 'Reconfirm':
        return (
          <Reconfirm
            handleFormSubmit={() => setActiveStep('ConfirmEmail')}
            onCancel={onCancel}
            gdprAge={gdprAge}
          />
        )
      case 'ConfirmEmail':
        return (
          <ConfirmEmail
            userEmail={userEmail}
            handleFormSubmit={handleFormSubmit}
            onCancel={onCancel}
            gdprAge={gdprAge}
          />
        )
    }
  }

  return renderStep()
}

export { ConfirmAgeForm }
