export interface SignupProps {
    username: string;
    password: string;
}

export type SignUpSteps = 'Register' | 'GDPR' | 'ConfirmEmail' | 'Custom'