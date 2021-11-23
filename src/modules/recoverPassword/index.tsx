import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMutation } from '@apollo/client';
import { LoginLayout, AlertCard } from "components";
import { Container } from './styles';
import { RequestPasswordResetForm, UpdatePasswordForm } from "./components";
import { ResetPasswordSteps } from './types';

import { MUTATION_RESET_PASSWORD, MUTATION_UPDATE_PASSWORD } from 'services/graphql/mutation';

const RecoverPasswordPage = () => {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState<ResetPasswordSteps>('Request');

    const [userEmail, setUserEmail] = useState<string>('');
    const [requestPasswordError, setrequestPasswordError] = useState<string>('');
    const [updatePasswordError, setupdatePasswordError] = useState<string>('');

    const [resetPassword] = useMutation(MUTATION_RESET_PASSWORD, {
        onCompleted: async (result) => {
            if (result.resetPassword.sent) setActiveStep('Update')
            else setrequestPasswordError(t('common.error.generic_api_error'))
        },
        onError: (error) => setrequestPasswordError(`${error}`)

    });

    const [updatePassword] = useMutation(MUTATION_UPDATE_PASSWORD, {
        onCompleted: async (result) => {
            if (result.updatePassword.success) setActiveStep('Success');
        },
        onError: (error) => setupdatePasswordError(`${error}`)
    });

    const handleRequestResetSubmit = (FormData) => {
        setUserEmail(FormData.forgotPassword.email)
        resetPassword({
            variables: { ...FormData }
        })
    }

    const handleUpdatePasswordSubmit = (FormData) => {
        FormData.updatePassword['email'] = userEmail
        updatePassword({
            variables: { ...FormData }
        })
    }

    const renderStep = () => {
        switch (activeStep) {
            case 'Request':
                return <RequestPasswordResetForm handleFormSubmit={handleRequestResetSubmit} error={requestPasswordError} dispatchError={() => { setrequestPasswordError('') }}></RequestPasswordResetForm>;
            case 'Update':
                return <UpdatePasswordForm handleFormSubmit={handleUpdatePasswordSubmit} error={updatePasswordError} dispatchError={() => { setupdatePasswordError('') }}></UpdatePasswordForm>;
            case 'Success':
                return <AlertCard type={'success'} title={t('recoverPassword.success.title')} description={t('recoverPassword.success.description')} actionLabel={t('common.access_your_account')} toRoute={'login'}></AlertCard>;
            case 'Error':
                return <AlertCard type={'error'} title={t('recoverPassword.error.title')} description={t('recoverPassword.error.description')} actionLabel={t('common.retry')} toRoute={'recoverPassword'}></AlertCard>;
            default:
                return <RequestPasswordResetForm handleFormSubmit={handleRequestResetSubmit} error={requestPasswordError} dispatchError={() => { setrequestPasswordError('') }}></RequestPasswordResetForm>;
        }
    }


    return (
        <LoginLayout>
            <Container width={1} paddingY={[0, 40]}>
                {renderStep()}
            </Container>
        </LoginLayout>
    )
}

export { RecoverPasswordPage }