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
import { AlertComponent } from 'components'
import { useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { CreateAccountInput } from 'generated/graphql'
import { SignUpSteps } from './types'

const SignupForm = () => {
  const { t } = useTranslation()
  const [activeStep, setActiveStep] = useState<SignUpSteps>('Register')
  const [emailExistsError, setemailExistsError] = useState('')
  const [createAccountError, setCreateAccountError] = useState('')

  const [createAccountData, setCreateAccountData] =
    useState<CreateAccountInput>()

  const [verifyMail, { loading: verifyMailLoading }] = useMutation(
    MUTATION_VERIFY_MAIL,
    {
      onCompleted: async (result) => {
        if (result.verifyMail.exist)
          setemailExistsError(t('signup.error.email_exists'))
      },
      onError: (error) => {
        if (error.message === 'exception:ACCOUNT_NOT_FOUND')
          setActiveStep('LGPD')
        else setemailExistsError(`${error.message}`)
      },
    }
  )

  const [createAccount, { loading: createAccountLoading }] = useMutation(
    MUTATION_CREATE_ACCOUNT,
    {
      onCompleted: async (result) => {
        if (result.createAccount) {
          createAccountGDPR({
            variables: {
              createAccountGdprLgpd: {
                accepted: true,
                account: result.createAccount.id,
              },
            },
          })
        }
      },
      onError: (error) => {
        setCreateAccountError(`${error.message}`)
      },
    }
  )

  const [createAccountGDPR, { loading: createAccountGDPRLoading }] =
    useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
      onCompleted: async (result) => {
        if (result.createAccountGdprLgpd) setActiveStep('ConfirmEmail')
      },
      onError: (error) => {
        setCreateAccountError(`${error.message}`)
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
            isLoading={verifyMailLoading}
            dispatchError={() => {
              setemailExistsError('')
            }}
          ></RegistrationForm>
        )
      case 'LGPD':
        return (
          <GDPRForm
            handleFormSubmit={handleGDPRSubmit}
            isLoading={createAccountGDPRLoading || createAccountLoading}
          ></GDPRForm>
        )
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
    }
  }

  return (
    <>
      {!!createAccountError && (
        <AlertComponent
          marginY={20}
          type={'error'}
          description={createAccountError}
          onClose={() => {
            setCreateAccountError('')
          }}
        ></AlertComponent>
      )}
      {renderStep()}
    </>
  )
}

export { SignupForm }
