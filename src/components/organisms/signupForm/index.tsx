import { useState } from 'react'
import {
  MUTATION_CREATE_ACCOUNT,
  MUTATION_CREATE_ACCOUNT_GDPR,
} from 'services/graphql'
import {
  RegistrationForm,
  GDPRForm,
  ConfirmEmailForm,
  AdditionalInformationForm,
} from './components'
import { useMutation } from '@apollo/client'
import { CreateAccountInput } from 'generated/graphql'
import { SignUpSteps } from './types'

const SignupForm = () => {
  const [activeStep, setActiveStep] = useState<SignUpSteps>('Register')

  const [createAccountData, setCreateAccountData] =
    useState<CreateAccountInput>()

  const [createAccount] = useMutation(MUTATION_CREATE_ACCOUNT, {
    onCompleted: async (result) => {
      createAccountGDPR({
        variables: {
          createAccountGdprLgpd: {
            accepted: true,
            account: result.createAccount.id,
          },
        },
      })
    },
    onError: (error) => {
      // TO-DO ERROR COMPONENT
      alert('Failed to register, check your data!')
    },
  })

  const [createAccountGDPR] = useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
    onCompleted: async (result) => {
      if (!result?.createAccount) {
        alert('Failed to create account, check your data!')
        return
      }
      setActiveStep('ConfirmEmail')
    },
    onError: (error) => {
      // TO-DO ERROR COMPONENT
      alert('Failed to register, check your data!')
    },
  })

  const handleRegistrationSubmit = (FormData) => {
    setCreateAccountData({ ...FormData })
    setActiveStep('LGPD')
  }

  const handleGDPRSubmit = () => {
    createAccount({
      variables: { ...createAccountData },
    })
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Register':
        return (
          <RegistrationForm
            handleFormSubmit={handleRegistrationSubmit}
          ></RegistrationForm>
        )
      case 'LGPD':
        return <GDPRForm handleFormSubmit={handleGDPRSubmit}></GDPRForm>
      case 'Custom':
        return (
          <AdditionalInformationForm
            name={'Bianca'}
            email={'teste'}
            fullname={'Bianca Silva'}
          ></AdditionalInformationForm>
        )
      case 'ConfirmEmail':
        return <ConfirmEmailForm></ConfirmEmailForm>
      default:
        return (
          <RegistrationForm
            handleFormSubmit={handleRegistrationSubmit}
          ></RegistrationForm>
        )
    }
  }

  return renderStep()
}

export { SignupForm }
