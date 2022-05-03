import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import {
  MUTATION_SIGNIN,
  MUTATION_SOCIAL_SIGNIN,
  MUTATION_CREATE_ACCOUNT_GDPR,
} from 'services/graphql'
import { useCommonStore } from 'services/stores'
import { authWithCustomToken, SocialSignIn } from 'services/firebase'
import { SocialType } from 'types/common'
import { saveData } from 'services/storage'
import {
  GDPRForm,
  ConfirmEmailForm,
} from 'components/organisms/signupForm/components'
import { Card, SigninForm } from 'components'
import { Container } from './styles'
import { sizes } from 'styles'
import { useAuth } from 'contexts/auth'
import { AUTH_TOKEN, FIREBASE_TOKEN } from 'config/constants'
import { SignInSteps } from './types'

const LoginPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { updateAccount } = useAuth()

  const [error, setError] = useState('')
  const [activeStep, setActiveStep] = useState<SignInSteps>('Login')
  const { setPageTitle } = useCommonStore()
  const [account, setAccount] = useState('')

  //eslint-disable-next-line
  useEffect(() => setPageTitle(t('signin.actions.login')), [])

  const errorMessage = (type: string) => {
    const Error = {
      'exception:PASSWORD_MISMATCH': t('signin.error.wrong_credentials'),
      'exception:ACCOUNT_NOT_FOUND': t('signin.error.wrong_credentials'),
      'exception:TOO_MANY_ATTEMPTS_TRY_LATER': t(
        'signin.error.too_many_attempts'
      ),
      default: t('common.error.generic_api_error'),
    }
    return Error[type] || Error.default
  }

  const signInProcess = async ({ accessToken, firebaseToken, account }) => {
    await saveData(AUTH_TOKEN, accessToken)
    await saveData(FIREBASE_TOKEN, firebaseToken)
    await authWithCustomToken()
    await updateAccount(account)
  }

  const [signIn, { loading }] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async ({ signIn }) => {
      await signInProcess({
        accessToken: signIn.token.accessToken,
        firebaseToken: signIn.token.firebaseToken,
        account: signIn.account
      })
      history.push('/channels')
    },
    onError: ({ message }) => setError(errorMessage(message))
  })

  const [socialSignIn, { loading: SocialLoading }] = useMutation(
    MUTATION_SOCIAL_SIGNIN,
    {
      onCompleted: async (result) => {
        await signInProcess({
          accessToken: result.socialSignIn.token.accessToken,
          firebaseToken: result.socialSignIn.token.firebaseToken,
          account: result.socialSignIn.account
        })
        if (!result?.socialSignIn.account.status.gdpr) {
          setActiveStep('LGPD')
          setAccount(result.socialSignIn.account.id)
        } else {
          history.push('/channels')
        }
      },
      onError: ({ message }) => setError(errorMessage(message)),
    }
  )

  const [createAccountGDPR, { loading: createAccountGDPRLoading }] =
    useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
      onCompleted: async (result) => {
        if (result.createAccountGdprLgpd) setActiveStep('ConfirmEmail')
      },
      onError: ({ message }) => setError(errorMessage(message))
    })

  const handleGDPRSubmit = () => {
    createAccountGDPR({
      variables: {
        payload: {
          accepted: true,
          account: account,
        },
      },
    })
  }

  const handleFormSubmit = (FormData) => signIn({ variables: { ...FormData } })

  const handleSocialSignIn = (kind: SocialType) => {
    SocialSignIn(kind)
      .then((input) => socialSignIn({
        variables: {
          input,
        }
      }))
      .catch((error) => setError(`${error}`))
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Login':
        return (
          <SigninForm
            handleFormSubmit={handleFormSubmit}
            handleSocialSubmit={handleSocialSignIn}
            dispatchError={() => setError('')}
            isLoading={loading || SocialLoading}
            error={error}
          />
        )
      case 'LGPD':
        return (
          <GDPRForm
            handleFormSubmit={handleGDPRSubmit}
            onCancel={() => setActiveStep('Login')}
            isLoading={createAccountGDPRLoading}
          />
        )
      case 'ConfirmEmail':
        return (
          <ConfirmEmailForm
            onClose={() => setActiveStep('Login')}
          />
        )
    }
  }

  return (
    <Container width={1} paddingY={[0, 40]}>
      <Card
        paddingX={[30, 60]}
        paddingY={[40, 40]}
        width={[1, sizes.loginCardWidth]}
      >
        {renderStep()}
      </Card>
    </Container>
  )
}

export { LoginPage }
