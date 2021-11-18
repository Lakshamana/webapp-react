import { Text, LoginLayout, CardContainer, Input, Button } from "components";
import { useTranslation } from 'react-i18next'
import { Flex } from '@chakra-ui/react';
import { useFormik } from 'formik';
import { Container } from './styles';
import { sizes, colors } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { validationSchema, initialValues } from "./settings";

const RecoverPasswordPage = () => {
    const { t } = useTranslation();

    const { colorMode } = useThemeStore();

    const { values, handleSubmit, handleChange, errors, dirty, isValid } = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema,
        validateOnChange: true,
        validateOnBlur: false,
        onSubmit: async () => {
            console.log({ ...values }) 
        }
    });

    return (
        <LoginLayout>
            <Container width={1} paddingY={[0, 40]}>
                <CardContainer paddingX={[30, 60]} paddingY={[40, 40]} width={[1, sizes.loginCardWidth]}>
                    <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={colors.generalText[colorMode]}>{t('recoverPassword.title')}</Text>
                    <Text fontSize={16} paddingTop={10} textAlign={'center'} color={colors.secondaryText[colorMode]}>{t('recoverPassword.subtitle')}</Text>
                    <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={3}>
                        <Input
                            name="email"
                            onChange={handleChange}
                            type="text"
                            value={values.email}
                            placeholder={t('signin.label.email')}
                            errorMessage={errors.email}
                            error={!!errors.email}
                        />
                        {/* TO-DO LOADING (LOAD IS NOT DEFINED ON FIGMA) */}
                        <Button width={[1, sizes.loginButtonWidth]} mt={3} type={dirty && isValid ? 'submit' : 'disabled'} label={t('common.send')} onClick={handleSubmit}></Button>
                    </Flex >

                </CardContainer>
            </Container>
        </LoginLayout>
    )
}

export { RecoverPasswordPage }