import { useState } from 'react';
import { MUTATION_CREATE_ACCOUNT } from 'services/graphql';
import { RegistrationForm, ConfirmAgeForm, ConfirmEmailForm, AdditionalInformationForm } from "./components";
import { useMutation } from '@apollo/client';

export type SignUpSteps = 'Register' | 'ConfirmAge' | 'ConfirmEmail' | 'Custom'

const SignupForm = () => {

    const [activeStep, setActiveStep] = useState<SignUpSteps>('Register');

    const [createAccount] = useMutation(MUTATION_CREATE_ACCOUNT, {
        onCompleted: async (result) => {
            if (!result?.createAccount) {
                alert('Failed to create account, check your data!')
                return
            }
            setActiveStep('ConfirmAge')
        },
        onError: (error) => {
            // TO-DO ERROR COMPONENT
            alert('Failed to register, check your data!')
        }
    });

    const handleRegistrationSubmit = (FormData) => {
        createAccount({
            variables: { ...FormData }
        })
    }

    const handleConfirmAgeSubmit = () => {
        setActiveStep('Custom')
    }

    const renderStep = () => {
        switch (activeStep) {
            case 'Register':
                return <RegistrationForm handleFormSubmit={handleRegistrationSubmit}></RegistrationForm>;
            case 'ConfirmAge':
                return <ConfirmAgeForm handleFormSubmit={handleConfirmAgeSubmit}></ConfirmAgeForm>;
            case 'ConfirmEmail':
                return <ConfirmEmailForm></ConfirmEmailForm>;
            case 'Custom':
                return <AdditionalInformationForm name={'Bianca'} email={'teste'} fullname={'Bianca Silva'}></AdditionalInformationForm>;
            default:
                return <RegistrationForm handleFormSubmit={handleRegistrationSubmit}></RegistrationForm>;
        }
    }

    return renderStep();

}

export { SignupForm }
