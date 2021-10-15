import { Text, LoginLayout, CardContainer, SocialSigninButton, SigninForm } from "components";
import { Link } from '@chakra-ui/react';
import { Container } from './styles';
import { Flex } from '@chakra-ui/react';

const LoginPage = () => (
  <LoginLayout>
    <Container>
      <CardContainer paddingX={[30, 60]}>
        <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>Access FanHero now</Text>
        <Text fontSize={16} paddingTop={10} textAlign={'center'} color={'#A4A4A4'}>Please login into your account now</Text>
        <Flex gridGap={7} marginY={30} justifyContent={'center'}>
          <SocialSigninButton type={'facebook'}></SocialSigninButton>
          <SocialSigninButton type={'google'}></SocialSigninButton>
          <SocialSigninButton type={'apple'}></SocialSigninButton>
          <SocialSigninButton type={'linkedin'}></SocialSigninButton>
        </Flex>
        <Text fontSize={16} textAlign={'center'} color={'#A4A4A4'}>or</Text>
        <SigninForm></SigninForm>
        <Flex marginTop={10} marginBottom={5} justifyContent={'center'}>
          <Text color={'white'}>
            Doesn't have an account?
          </Text>
          <Link paddingLeft={2} to="/signup" textDecoration={'none'} color={'blue'}>Sign Up here</Link>
        </Flex>
      </CardContainer>
    </Container>
  </LoginLayout >
);

export { LoginPage }
