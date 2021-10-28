import { Text, LoginLayout, CardContainer, SignupForm } from "components";
import { Container } from './style';
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignupPage = () => (
    <LoginLayout>
        <Container>
            <CardContainer paddingX={[40, 80]} paddingY={[20, 10]} maxWidth={550}>
                <SignupForm></SignupForm>
            </CardContainer>
        </Container>
    </LoginLayout >
);

export { SignupPage }
