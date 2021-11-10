import { LoginLayout, CardContainer, SignupForm } from "components";
import { Container } from './style';
import { sizes } from 'styles'

const SignupPage = () => (
    <LoginLayout>
        <Container width={1} paddingY={[0, 40]}>
            <CardContainer paddingX={[30, 60]} paddingY={[40, 40]} width={[1, sizes.loginCardWidth]} >
                <SignupForm></SignupForm>
            </CardContainer>
        </Container>
    </LoginLayout >
);

export { SignupPage }
