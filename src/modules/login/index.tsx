import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box, Flex } from '@chakra-ui/react'
import { useMutation } from '@apollo/client'
import { MUTATION_SIGNIN } from 'services/graphql'
import {
  Text,
  LoginLayout,
  CardContainer,
  SocialSigninButton,
  SigninForm,
  AlertComponent,
  Link,
} from 'components'
import { Container } from './styles'
import { sizes, colors } from 'styles'
import { AUTH_TOKEN, USER_ACCOUNT } from 'config/constants'
import { useThemeStore } from 'services/stores/theme'

const LoginPage = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()

  const [error, setError] = useState('')

  const [signIn] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async (result) => {
      if (!result?.signIn) {
        setError(t('common.error.generic_api_error'))
        return
      }

      await localStorage.setItem(AUTH_TOKEN, result.signIn.token.accessToken)
      await localStorage.setItem(USER_ACCOUNT, result.signIn.account.id)

      history.push('/home')
    },
    onError: (error) => setError(`${error}`),
  })

  const handleFormSubmit = (FormData) => {
    signIn({
      variables: { ...FormData },
    })
  }

  return (
    <LoginLayout>
      <Container width={1} paddingY={[0, 40]}>
        <CardContainer
          paddingX={[30, 60]}
          paddingY={[40, 40]}
          width={[1, sizes.loginCardWidth]}
        >
          <Text
            fontSize={24}
            textAlign={'center'}
            fontWeight={'bolder'}
            color={colors.generalText[colorMode]}
          >
            {t('signin.title')}
          </Text>
          <Text
            fontSize={16}
            paddingTop={10}
            textAlign={'center'}
            color={colors.secondaryText[colorMode]}
          >
            {t('signin.subtitle')}
          </Text>
          <Flex gridGap={7} marginY={30} justifyContent={'center'}>
            <SocialSigninButton type={'facebook'}></SocialSigninButton>
            <SocialSigninButton type={'google'}></SocialSigninButton>
          </Flex>
          <Text
            fontSize={16}
            textAlign={'center'}
            marginBottom={error ? 15 : 0}
            color={colors.secondaryText[colorMode]}
          >
            {t('common.or')}
          </Text>
          <>
            {!!error && (
              <AlertComponent
                type={'error'}
                description={error}
                onClose={() => {
                  setError('')
                }}
              ></AlertComponent>
            )}
          </>
          <SigninForm handleFormSubmit={handleFormSubmit}></SigninForm>
          <Box textAlign={'center'}>
            <Link
              toRoute="/recoverPassword"
              defaultColor
              label={t('signin.actions.forgot_password')}
              textTransform={'uppercase'}
              fontWeight={'bolder'}
            />
          </Box>
          <Flex justifyContent={'center'} flexWrap={'wrap'} mt={10}>
            <Text color={colors.generalText[colorMode]} paddingRight={1}>
              {t('signin.label.dont_have_account')}
            </Text>
            <Link toRoute="/signup" label={t('signin.actions.signup_here')} />
          </Flex>
        </CardContainer>
      </Container>
    </LoginLayout>
  )
}

export { LoginPage }
