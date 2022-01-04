import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import {
  MUTATION_SIGNIN,
  MUTATION_SOCIAL_SIGNIN,
  MUTATION_CREATE_ACCOUNT_GDPR,
} from 'services/graphql'
import { Social, SocialSignIn } from 'services/firebase'
import { saveData } from 'services/storage'
import {
  GDPRForm,
  ConfirmEmailForm,
} from 'components/organisms/signupForm/components'
import { LoginLayout, Card, SigninForm } from 'components'
import { Container } from './styles'
import { sizes } from 'styles'
import { useAuth } from 'contexts/auth'
import { AUTH_TOKEN } from 'config/constants'
import { SignInSteps } from './types'

const LoginPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { updateAccount } = useAuth()

  const [error, setError] = useState('')
  const [activeStep, setActiveStep] = useState<SignInSteps>('Login')
  const [account, setAccount] = useState('')

  const [signIn, { loading }] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async (result) => {
      if (!result?.signIn) {
        setError(t('common.error.generic_api_error'))
        return
      }

      await saveData(AUTH_TOKEN, result.signIn.token.accessToken)
      await updateAccount(result.signIn.account)

      history.push('/home')
    },
    onError: (error) => setError(`${error}`),
  })

  const [socialSignIn, { loading: SocialLoading }] = useMutation(
    MUTATION_SOCIAL_SIGNIN,
    {
      onCompleted: async (result) => {
        if (!result?.socialSignIn) {
          setError(t('common.error.generic_api_error'))
          return
        }

        await saveData(AUTH_TOKEN, result.socialSignIn.token.accessToken)
        await updateAccount(result.socialSignIn.account)

        if (!result?.socialSignIn.account.status.gdpr) {
          setActiveStep('LGPD')
          setAccount(result.socialSignIn.account.id)
        } else {
          history.push('/home')
        }
      },
      onError: (error) => setError(`${error}`),
    }
  )

  const [createAccountGDPR, { loading: createAccountGDPRLoading }] =
    useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
      onCompleted: async (result) => {
        if (result.createAccountGdprLgpd) setActiveStep('ConfirmEmail')
      },
      onError: (error) => {},
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

  const handleFormSubmit = (FormData) => {
    signIn({
      variables: { ...FormData },
    })
  }

  const handleSocialSignIn = (kind: Social) => {
    SocialSignIn(kind)
      .then((input) => {
        socialSignIn({
          variables: {
            input,
          },
        })
      })
      .catch((error) => {
        setError(`${error}`)
      })
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Login':
        return (
          <SigninForm
            handleFormSubmit={handleFormSubmit}
            handleSocialSubmit={handleSocialSignIn}
            dispatchError={() => {
              setError('')
            }}
            isLoading={loading || SocialLoading}
            error={error}
          ></SigninForm>
        )
      case 'LGPD':
        return (
          <GDPRForm
            handleFormSubmit={handleGDPRSubmit}
            onCancel={() => setActiveStep('Login')}
            isLoading={createAccountGDPRLoading}
          ></GDPRForm>
        )
      case 'ConfirmEmail':
        return (
          <ConfirmEmailForm
            onClose={() => setActiveStep('Login')}
          ></ConfirmEmailForm>
        )
    }
  }

  return (
    <LoginLayout>
      <Container width={1} paddingY={[0, 40]}>
        <Card
          paddingX={[30, 60]}
          paddingY={[40, 40]}
          width={[1, sizes.loginCardWidth]}
        >
          {renderStep()}
        </Card>
      </Container>
    </LoginLayout>
  )
}

export { LoginPage }
