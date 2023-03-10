import { useMutation } from '@apollo/client'
import { Card, SigninForm } from 'components'
import {
  ConfirmEmailForm,
  GDPRForm
} from 'components/organisms/signupForm/components'
import { AUTH_TOKEN, FIREBASE_TOKEN } from 'config/constants'
import { useAuth } from 'contexts/auth'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { authWithCustomToken, SocialSignIn } from 'services/firebase'
import {
  MUTATION_CREATE_ACCOUNT_GDPR,
  MUTATION_SIGNIN,
  MUTATION_SOCIAL_SIGNIN
} from 'services/graphql'

import { saveData } from 'services/storage'
import { useAuthStore, useCommonStore } from 'services/stores'
import { sizes } from 'styles'
import { SocialType } from 'types/common'
import { sendAuthReport } from 'utils/analytics'
import { Container } from './styles'
import { SignInSteps } from './types'

type Props = {
  isCheckoutLogin?: boolean
  userIsLogged: () => void
}

const LoginPage = ({ isCheckoutLogin, userIsLogged }: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const { updateAccount } = useAuth()

  const [error, setError] = useState('')
  const [activeStep, setActiveStep] = useState<SignInSteps>('Login')
  const { setPageTitle } = useCommonStore()
  const [account, setAccount] = useState('')
  const { setAnonymous } = useAuthStore()
  const [isSocialSignin, setIsSocialSignin] = useState<boolean>(false)

  //eslint-disable-next-line
  useEffect(() => setPageTitle(t('signin.actions.login')), [])

  const errorMessage = (type: string) => {
    const Error = {
      'exception:PASSWORD_MISMATCH': t('signin.error.wrong_credentials'),
      'exception:ACCOUNT_NOT_FOUND': t('signin.error.wrong_credentials'),
      'exception:TOO_MANY_ATTEMPTS_TRY_LATER': t(
        'signin.error.too_many_attempts'
      ),
      'exception:DEACTIVED_ACCOUNT': t('common.error.deactivated_account'),
      default: t('common.error.generic_api_error'),
    }
    return Error[type] || Error.default
  }

  const signInProcess = async ({ accessToken, firebaseToken, account }) => {
    setAnonymous(false)
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
        account: signIn.account,
      })
      isCheckoutLogin ? userIsLogged() : history.push('/channels')
    },
    onError: ({ message }) => setError(errorMessage(message)),
  })

  const [socialSignIn, { loading: SocialLoading }] = useMutation(
    MUTATION_SOCIAL_SIGNIN,
    {
      onCompleted: async (result) => {
        await signInProcess({
          accessToken: result.socialSignIn.token.accessToken,
          firebaseToken: result.socialSignIn.token.firebaseToken,
          account: result.socialSignIn.account,
        })
        if (!result?.socialSignIn.account.status.gdpr) {
          setActiveStep('LGPD')
          setAccount(result.socialSignIn.account.id)
          setIsSocialSignin(true)
        } else {
          isCheckoutLogin ? userIsLogged() : history.push('/channels')
        }
      },
      onError: ({ message }) => setError(errorMessage(message)),
    }
  )

  const [createAccountGDPR, { loading: createAccountGDPRLoading }] =
    useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
      onCompleted: async (result) => {
        if (result.createAccountGdprLgpd && !isSocialSignin)
          setActiveStep('ConfirmEmail')
        isSocialSignin && history.push('/channels')
      },
      onError: ({ message }) => setError(errorMessage(message)),
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
    const email = FormData.payload.email.toLowerCase()
    signIn({
      variables: {
        payload: {
          email,
          password: FormData.payload.password,
        },
      },
    })
    sendAuthReport({ email, kind: 'login' })
  }

  const handleSocialSignIn = (kind: SocialType) => {
    SocialSignIn(kind)
      .then((input) =>
        socialSignIn({
          variables: {
            input,
          },
        })
      )
      .catch((error) => setError(`${error}`))
  }

  const renderStep = () => {
    switch (activeStep) {
      case 'Login':
        return (
          <SigninForm
            handleSocialSubmit={handleSocialSignIn}
            dispatchError={() => setError('')}
            isLoading={loading || SocialLoading}
            {...{ error, isCheckoutLogin, handleFormSubmit }}
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
        return <ConfirmEmailForm onClose={() => setActiveStep('Login')} />
    }
  }

  return (
    <Container width={1} pt={isCheckoutLogin ? [0, 30] : [0, 40]} pb={isCheckoutLogin ? 20 : [0, 40]}>
      <Card
        removeShadow={isCheckoutLogin}
        paddingX={[30, 60]}
        paddingY={isCheckoutLogin ? [] : [40, 40]}
        width={[
          1,
          isCheckoutLogin ? sizes.checkoutLoginCardWidth : sizes.loginCardWidth,
        ]}
      >
        {renderStep()}
      </Card>
    </Container>
  )
}

export { LoginPage }
