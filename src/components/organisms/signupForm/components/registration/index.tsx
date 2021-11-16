import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Input, Checkbox, Button, Container, Text, SocialSigninButton } from "components";
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './settings';
import { RegistrationProps } from "./types"
import { colors, sizes } from 'styles';
import { useThemeStore } from 'services/stores/theme';

const RegistrationForm = ({ handleFormSubmit }: RegistrationProps) => {
    const { t } = useTranslation();
    const { colorMode } = useThemeStore();

    const { values, handleSubmit, handleChange, errors, isValid, dirty } = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async () => {
            handleFormSubmit(
                {
                    createAccount: {
                        email: values.createAccount.email,
                        password: values.createAccount.password
                    }
                }
            )
        }
    });

    return (
        <Flex alignItems={'center'} flexDirection={'column'} gridGap={2}>
            <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={colors.generalText[colorMode]}>{t('signup.registration.title')}</Text>
            <Text fontSize={16} paddingTop={10} textAlign={'center'} color={colors.secondaryText[colorMode]}>{t('signup.registration.subtitle')}</Text>
            <Flex gridGap={7} marginY={5} justifyContent={'center'}>
                <SocialSigninButton type={'facebook'}></SocialSigninButton>
                <SocialSigninButton type={'google'}></SocialSigninButton>
            </Flex>
            <Text fontSize={16} marginBottom={3} textAlign={'center'} color={colors.secondaryText[colorMode]}>{t('common.or')}</Text>
            <Input
                name="createAccount.email"
                value={values.createAccount.email}
                onChange={handleChange}
                errorMessage={errors.createAccount?.email}
                error={!!errors.createAccount?.email}
                placeholder={t('signup.label.email')}
            />
            <Input
                name="createAccount.confirm_email"
                value={values.createAccount.confirm_email}
                onChange={handleChange}
                errorMessage={errors.createAccount?.confirm_email}
                error={!!errors.createAccount?.confirm_email}
                placeholder={t('signup.label.confirm_email')}
            />
            <Input
                name="createAccount.password"
                value={values.createAccount.password}
                onChange={handleChange}
                errorMessage={errors.createAccount?.password}
                error={!!errors.createAccount?.password}
                type={'password'}
                placeholder={t('signup.label.password')}
            />
            <Container width={1} justifyContent={'left'}>
                <Checkbox isChecked={values.createAccount.terms_of_service} onChange={handleChange} isInvalid={!!errors.createAccount?.terms_of_service} name={'createAccount.terms_of_service'} paddingTop={2} label={t('signup.actions.accept_terms')}></Checkbox>
            </Container>
            <Button width={[1, sizes.loginButtonWidth]} marginTop={20} type={dirty && isValid ? 'submit' : 'disabled'} label={'Sign Up'} onClick={handleSubmit}></Button>
            <Flex marginTop={10} justifyContent={'center'}>
                <Text color={colors.generalText[colorMode]} paddingRight={1}>
                    {t('signup.registration.already_have_account')}
                </Text>
                <Link style={{ color: colors.brand.accent[colorMode] }} to="login">{t('signup.actions.signin_here')}</Link>
            </Flex>
        </Flex>
    );
}

export { RegistrationForm }
