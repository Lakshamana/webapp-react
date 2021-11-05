import { LoginLayout, CardContainer, SignupForm } from "components";
import { Container } from './style';
import { sizes } from 'styles'

const SignupPage = () => (
    <LoginLayout>
        <Container>
            <CardContainer paddingX={[30, 60]} paddingY={[10, 40]} width={[1, sizes.loginCardWidth]} >
                <SignupForm></SignupForm>
            </CardContainer>
        </Container>
    </LoginLayout >
);

export { SignupPage }
