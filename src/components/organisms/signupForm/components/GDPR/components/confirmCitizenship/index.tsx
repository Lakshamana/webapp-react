import { Link } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Button, Text } from "components";
import { ConfirmAgeProps } from './types';
import { colors, sizes } from 'styles';
import { useThemeStore } from 'services/stores/theme';

const ConfirmCitizenshipForm = ({ handleFormSubmit }: ConfirmAgeProps) => {
    const { t } = useTranslation();
    const { colorMode } = useThemeStore();

    return (
        <Flex alignItems={'center'} flexDirection={'column'} gridGap={3}>
            <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={colors.generalText[colorMode]}>{t('signup.GDPR.citizen')}</Text>
            <Link style={{ color: colors.brand.accent[colorMode], textDecoration: 'underline', fontSize: '16px' }} to="">{t('common.what_is_this')}</Link>
            <Button width={[1, sizes.loginButtonWidth]} paddingLeft={105} paddingRight={105} marginTop={30} type={'submit'} label={t('common.yes')} onClick={() => handleFormSubmit(true)}></Button>
            <Button width={[1, sizes.loginButtonWidth]} paddingLeft={105} paddingRight={105} type={'cancel'} label={t('common.no')} onClick={() => handleFormSubmit(false)}></Button>
            <Flex justifyContent={'center'} mt={5}>
                <Text color={colors.generalText[colorMode]} paddingRight={1}>
                    {t('signup.registration.already_have_account')}
                </Text>
                <Link style={{ color: colors.brand.accent[colorMode] }} to="login">{t('signup.actions.signin_here')}</Link>
            </Flex>
        </Flex>
    );
}

export { ConfirmCitizenshipForm }
