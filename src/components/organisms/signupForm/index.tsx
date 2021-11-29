import { useState } from 'react'
import {
  MUTATION_CREATE_ACCOUNT,
  MUTATION_CREATE_ACCOUNT_GDPR,
  MUTATION_VERIFY_MAIL,
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
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState<SignUpSteps>('Register')
  const [emailExistsError, setemailExistsError] = useState('')

  const [createAccountData, setCreateAccountData] =
    useState<CreateAccountInput>()

  const [verifyMail] = useMutation(MUTATION_VERIFY_MAIL, {
    onCompleted: async (result) => {
      if (!result.verifyMail.exist) setActiveStep('LGPD')
      else setemailExistsError(t('signup.error.email_exists'))
    },
    onError: (error) => {
      if (error.message === 'exception:ACCOUNT_NOT_FOUND')
        setemailExistsError(`${t('signup.error.email_exists')}`)
      else setemailExistsError(`${error.message}`)
    },
  })

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
    verifyMail({
      variables: {
        verifyMailInput: {
          email: FormData.createAccount.email,
        },
      },
    })

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
            error={emailExistsError}
            dispatchError={() => {
              setemailExistsError('')
            }}
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
