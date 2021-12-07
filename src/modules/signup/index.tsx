import { LoginLayout, CardContainer, SignupForm } from 'components'
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react'
import { Link, Text } from 'components'
import { Container } from './style'
import { sizes, colors } from 'styles'
import { useThemeStore } from 'services/stores/theme'

const SignupPage = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  return (
    <LoginLayout>
      <Container width={1} paddingY={[0, 40]}>
        <CardContainer
          paddingX={[30, 60]}
          paddingY={[40, 40]}
          width={[1, sizes.loginCardWidth]}
        >
          <SignupForm></SignupForm>
          <Flex marginTop={10} justifyContent={'center'}>
            <Text color={colors.generalText[colorMode]} paddingRight={1}>
              {t('signup.registration.already_have_account')}
            </Text>
            <Link
              label={t('signup.actions.signin_here')}
              toRoute="/login"
            ></Link>
          </Flex>
        </CardContainer>
      </Container>
    </LoginLayout>
  )
}

export { SignupPage }
