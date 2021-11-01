import { Text, LoginLayout, CardContainer, SocialSigninButton, SigninForm } from "components";
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { sizes } from 'styles'

const LoginPage = () => {
  const { t } = useTranslation()
  return (
    <LoginLayout>
      <Container py={[0, 10]}>
        <CardContainer paddingX={[30, 60]} width={[1, sizes.loginCardWidth]}>
          <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>{t('signin.title')}</Text>
          <Text fontSize={16} paddingTop={10} textAlign={'center'} color={'#A4A4A4'}>{t('signin.subtitle')}</Text>
          <Flex gridGap={7} marginY={30} justifyContent={'center'}>
            <SocialSigninButton type={'facebook'}></SocialSigninButton>
            <SocialSigninButton type={'google'}></SocialSigninButton>
            <SocialSigninButton type={'apple'}></SocialSigninButton>
            <SocialSigninButton type={'linkedin'}></SocialSigninButton>
          </Flex>
          <Text fontSize={16} textAlign={'center'} color={'#A4A4A4'}>or</Text>
          <SigninForm></SigninForm>
          <Flex marginTop={10} marginBottom={5} justifyContent={'center'}>
            <Text color={'white'} paddingRight={1}>
              {t('signin.label.dont_have_account')}
            </Text>
            <Link to="signup">{t('signin.actions.signup_here')}</Link>
          </Flex>
        </CardContainer>
      </Container>
    </LoginLayout >
  )
};

export { LoginPage }
