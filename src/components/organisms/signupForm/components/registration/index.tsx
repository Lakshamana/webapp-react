import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Input, Checkbox, Button, Container, Text, SocialSigninButton } from "components";

const RegistrationForm = () => {
    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={2}>
            <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>Dont't have an account yet?</Text>
            <Text fontSize={16} paddingTop={10} textAlign={'center'} color={'#A4A4A4'}>Provide your email address and choose a password to create your account and enjoy access to exclusive content.</Text>
            <Flex gridGap={7} marginY={5} justifyContent={'center'}>
                <SocialSigninButton type={'facebook'}></SocialSigninButton>
                <SocialSigninButton type={'google'}></SocialSigninButton>
                <SocialSigninButton type={'apple'}></SocialSigninButton>
            </Flex>
            <Text fontSize={16} marginBottom={4} textAlign={'center'} color={'#A4A4A4'}>or</Text>
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Email'}
                onEnterPress={() => alert("enter")}
            />
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Confirm Email'}
                onEnterPress={() => alert("enter")}
            />
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Password'}
                onEnterPress={() => alert("enter")}
            />
            <Container width={1} justifyContent={'left'}>
                <Checkbox paddingTop={2} label={'I accept all Terms and Conditions.'}></Checkbox>
            </Container>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={'Sign Up'} onClick={() => console.log('teste')}></Button>
            <Flex marginTop={10} marginBottom={5} justifyContent={'center'}>
                <Text color={'white'} paddingRight={1}>
                    Doesn't have an account?
                </Text>
                <Link to="login">Log In here</Link>
            </Flex>
        </Flex>
    );
}

export { RegistrationForm }
