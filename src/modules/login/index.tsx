import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { Box, Flex } from '@chakra-ui/react';
import { useMutation } from '@apollo/client';
import { MUTATION_SIGNIN } from "services/graphql"
import { Text, LoginLayout, CardContainer, SocialSigninButton, SigninForm } from "components";
import { Container } from './styles';
import { sizes } from 'styles'
import { AUTH_TOKEN } from 'config/constants';

const LoginPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [signIn] = useMutation(MUTATION_SIGNIN, {
    onCompleted: async (result) => {
      if (!result?.signIn) {
        alert('Failed to login, check your email or password!')
        return
      }
      await localStorage.setItem(AUTH_TOKEN, result.signIn.accessToken);
      history.push('/home')
    },
    onError: (error) => {
      // TO-DO ERROR COMPONENT
      alert('Failed to login, check your email or password!')
    }
  });

  const handleFormSubmit = (FormData) => {
    signIn({
      variables: { ...FormData }
    })
  }

  return (
    <LoginLayout>
      <Container>
        <CardContainer paddingX={[30, 60]} paddingY={[10, 40]} width={[1, sizes.loginCardWidth]}>
          <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>{t('signin.title')}</Text>
          <Text fontSize={16} paddingTop={10} textAlign={'center'} color={'#A4A4A4'}>{t('signin.subtitle')}</Text>
          <Flex gridGap={7} marginY={30} justifyContent={'center'}>
            <SocialSigninButton type={'facebook'}></SocialSigninButton>
            <SocialSigninButton type={'google'}></SocialSigninButton>
          </Flex>
          <Text fontSize={16} textAlign={'center'} color={'#A4A4A4'}>{t('common.or')}</Text>
          <SigninForm handleFormSubmit={handleFormSubmit}></SigninForm>
          {/* TO-DO FORGOT PASSWORD, CREATE ATOM FOR LINKS */}
          <Box textAlign={'center'}>
            <Link style={{ 'textTransform': 'uppercase', 'fontWeight': 'bold' }} to="resetPassword">{t('signin.actions.forgot_password')}</Link>
          </Box>
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
