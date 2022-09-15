import { useState } from 'react'
import {
  ConfirmAgeForm,
  ConfirmCitizenshipForm,
  OurPolitics
} from './components'
import { GDPRProps } from './types'

export type GDPRSteps = 'Citizenship' | 'ConfirmAge' | 'OurPolitics'

const GDPRForm = ({
  handleFormSubmit,
  isLoading,
  onCancel,
  userEmail,
}: GDPRProps) => {
  const [activeStep, setActiveStep] = useState<GDPRSteps>('Citizenship')
  const [age, setAge] = useState('')

  const handleCitizenFormSubmit = (status: boolean) => {
    setAge(status ? '16' : '13')
    setActiveStep('ConfirmAge')
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Citizenship':
        return (
          <ConfirmCitizenshipForm
            handleFormSubmit={handleCitizenFormSubmit}
          ></ConfirmCitizenshipForm>
        )
      case 'ConfirmAge':
        return (
          <ConfirmAgeForm
            gdprAge={age}
            userEmail={userEmail}
            onCancel={onCancel}
            handleFormSubmit={() => setActiveStep('OurPolitics')}
          ></ConfirmAgeForm>
        )
      case 'OurPolitics':
        return (
          <OurPolitics
            handleFormSubmit={handleFormSubmit}
            onCancel={onCancel}
            isLoading={isLoading}
          ></OurPolitics>
        )
    }
  }

  return renderStep()
}

export { GDPRForm }
