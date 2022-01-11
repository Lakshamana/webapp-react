import { useState } from 'react'
import { useHistory } from 'react-router'
import { useQuery, useMutation } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import {
  MUTATION_CREATE_ACCOUNT,
  MUTATION_CREATE_ACCOUNT_GDPR,
  MUTATION_VERIFY_MAIL,
  MUTATION_SOCIAL_SIGNIN,
  QUERY_CUSTOM_FIELDS,
} from 'services/graphql'
import { useAuth } from 'contexts/auth'
import {
  RegistrationForm,
  GDPRForm,
  ConfirmEmailForm,
  CustomFieldsForm,
} from './components'
import { saveData } from 'services/storage'
import { SocialSignIn } from 'services/firebase'
import { AUTH_TOKEN } from 'config/constants'
import { AlertComponent } from 'components'
import { SignUpSteps } from './types'
import { CreateAccountInput } from 'generated/graphql'

const SignupForm = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { updateAccount } = useAuth()

  const [activeStep, setActiveStep] = useState<SignUpSteps>('Register')
  const [emailExistsError, setemailExistsError] = useState('')
  const [socialSignUpError, setSocialSignUpError] = useState('')
  const [createAccountError, setCreateAccountError] = useState('')
  const [accountID, setAccountID] = useState('')

  const [createAccountData, setCreateAccountData] =
    useState<CreateAccountInput>({ email: '', password: '' })

  const { data: customFieldsData, loading: customFieldsLoading } =
    useQuery(QUERY_CUSTOM_FIELDS)

  const [verifyMail, { loading: verifyMailLoading }] = useMutation(
    MUTATION_VERIFY_MAIL,
    {
      onCompleted: async (result) => {
        if (result.verifyMail.exist)
          setemailExistsError(t('signup.error.email_exists'))
      },
      onError: (error) => {
        if (error.message !== 'exception:ACCOUNT_NOT_FOUND') {
          setemailExistsError(`${error.message}`)
          return
        }

        if (
          !customFieldsData?.customFields?.length 
          || !customFieldsData?.customFields[0]?.fields?.length
        ) {
          setActiveStep('GDPR')
          return
        }

        setActiveStep('Custom')
      },
    }
  )

  const [socialSignIn, { loading: SocialLoading }] = useMutation(
    MUTATION_SOCIAL_SIGNIN,
    {
      onCompleted: async (result) => {
        if (!result?.socialSignIn) {
          setSocialSignUpError(t('common.error.generic_api_error'))
          return
        }

        await saveData(AUTH_TOKEN, result.socialSignIn.token.accessToken)
        await updateAccount(result.socialSignIn.account)
        setAccountID(result.socialSignIn.account.id)

        if (!result?.socialSignIn.account.status.gdpr) {
          setActiveStep('GDPR')
        } else {
          history.push('/home')
        }
      },
      onError: (error) => setSocialSignUpError(`${error}`),
    }
  )

  const [createAccount, { loading: createAccountLoading }] = useMutation(
    MUTATION_CREATE_ACCOUNT,
    {
      onCompleted: async (result) => {
        if (result.createAccount) {
          createAccountGDPR({
            variables: {
              payload: {
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
        payload: {
          email: FormData.email,
        },
      },
    })

    setCreateAccountData({ ...FormData })
  }

  const handleCustomFieldsSubmit = (FormData) => {
    setActiveStep('GDPR')

    setCreateAccountData({
      ...createAccountData,
      custom_fields: { ...FormData },
    })
  }

  const handleGDPRSubmit = () => {
    if (accountID) {
      createAccountGDPR({
        variables: {
          payload: {
            accepted: true,
            account: accountID,
          },
        },
      })
    } else {
      createAccount({
        variables: { createAccount: { ...createAccountData } },
      })
    }
  }

  const handleSocialSignUp = (kind) => {
    SocialSignIn(kind)
      .then((input) => {
        socialSignIn({
          variables: {
            input,
          },
        })
      })
      .catch((error) => {
        setSocialSignUpError(`${error}`)
      })
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Register':
        return (
          <RegistrationForm
            handleFormSubmit={handleRegistrationSubmit}
            handleSocialSignUp={handleSocialSignUp}
            error={emailExistsError}
            isLoading={verifyMailLoading || SocialLoading}
            dispatchError={() => {
              setemailExistsError('')
            }}
          ></RegistrationForm>
        )
      case 'Custom':
        return (
          customFieldsData?.customFields[0]?.fields && (
            <CustomFieldsForm
              fields={customFieldsData?.customFields[0]?.fields || []}
              handleFormSubmit={handleCustomFieldsSubmit}
              isLoading={customFieldsLoading}
            ></CustomFieldsForm>
          )
        )
      case 'GDPR':
        return (
          <GDPRForm
            handleFormSubmit={handleGDPRSubmit}
            onCancel={() => history.push('/login')}
            isLoading={createAccountGDPRLoading || createAccountLoading}
          ></GDPRForm>
        )
      case 'ConfirmEmail':
        return (
          <ConfirmEmailForm
            onClose={() => history.push('/login')}
          ></ConfirmEmailForm>
        )
    }
  }

  return (
    <>
      {!!createAccountError && (
        <AlertComponent
          marginY={20}
          type={'error'}
          description={createAccountError || socialSignUpError}
          onClose={() => {
            setCreateAccountError('')
            setSocialSignUpError('')
          }}
        ></AlertComponent>
      )}
      {renderStep()}
    </>
  )
}

export { SignupForm }
