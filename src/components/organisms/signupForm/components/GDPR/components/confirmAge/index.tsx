import { useState } from 'react'
import { Confirm } from './confirm'
import { Reconfirm } from './reconfirm'
import { ConfirmEmail } from './confirm_email'
import { ConfirmAgeProps } from './types'
import { ConfirmAgeSteps } from './types'

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
          ></Confirm>
        )
      case 'Reconfirm':
        return (
          <Reconfirm
            handleFormSubmit={() => setActiveStep('ConfirmEmail')}
            onCancel={onCancel}
            gdprAge={gdprAge}
          ></Reconfirm>
        )
      case 'ConfirmEmail':
        return (
          <ConfirmEmail
            userEmail={userEmail}
            handleFormSubmit={handleFormSubmit}
            onCancel={onCancel}
            gdprAge={gdprAge}
          ></ConfirmEmail>
        )
    }
  }

  return renderStep()
}

export { ConfirmAgeForm }
