import { useState } from 'react';
import { MUTATION_CREATE_ACCOUNT, MUTATION_CREATE_ACCOUNT_GDPR } from 'services/graphql';
import { RegistrationForm, GDPRForm, ConfirmEmailForm, AdditionalInformationForm } from "./components";
import { useMutation } from '@apollo/client';

export type SignUpSteps = 'Register' | 'LGPD' | 'ConfirmEmail' | 'Custom'

const SignupForm = () => {

    const [activeStep, setActiveStep] = useState<SignUpSteps>('ConfirmEmail');

    const [accountID, setAccountID] = useState('');

    const [createAccount] = useMutation(MUTATION_CREATE_ACCOUNT, {
        onCompleted: async (result) => {
            if (!result?.createAccount) {
                alert('Failed to create account, check your data!')
                return
            }
            setAccountID(result.createAccount._id)
            setActiveStep('LGPD')
        },
        onError: (error) => {
            // TO-DO ERROR COMPONENT
            alert('Failed to register, check your data!')
        }
    });

    const [createAccountGDPR] = useMutation(MUTATION_CREATE_ACCOUNT_GDPR, {
        onCompleted: async (result) => {
            if (!result?.createAccount) {
                alert('Failed to create account, check your data!')
                return
            }
            setActiveStep('ConfirmEmail')
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

    const handleGDPRSubmit = () => {
        createAccountGDPR({
            variables: {
                createAccountGdprLgpd: {
                    accepted: true,
                    account: accountID
                }
            }
        })
    }

    const renderStep = () => {
        switch (activeStep) {
            case 'Register':
                return <RegistrationForm handleFormSubmit={handleRegistrationSubmit}></RegistrationForm>;
            case 'LGPD':
                return <GDPRForm handleFormSubmit={handleGDPRSubmit}></GDPRForm>;
            case 'Custom':
                return <AdditionalInformationForm name={'Bianca'} email={'teste'} fullname={'Bianca Silva'}></AdditionalInformationForm>;
            case 'ConfirmEmail':
                return <ConfirmEmailForm></ConfirmEmailForm>;
            default:
                return <RegistrationForm handleFormSubmit={handleRegistrationSubmit}></RegistrationForm>;
        }
    }

    return renderStep();

}

export { SignupForm }
