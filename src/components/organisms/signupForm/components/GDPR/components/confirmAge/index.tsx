import { useState } from 'react'
import { Confirm } from './confirm'
import { Reconfirm } from './reconfirm'
import { ConfirmAgeProps } from './types'
import { ConfirmAgeSteps } from './types'

const ConfirmAgeForm = ({ handleFormSubmit, onCancel, gdprAge }: ConfirmAgeProps) => {
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
            handleFormSubmit={handleFormSubmit}
            onCancel={onCancel}
            gdprAge={gdprAge}
          ></Reconfirm>
        )
    }
  }

  return renderStep()
}

export { ConfirmAgeForm }
