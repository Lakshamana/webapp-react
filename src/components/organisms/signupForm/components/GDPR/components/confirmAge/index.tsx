import { useHistory } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Button, Text } from "components";
import { ConfirmAgeProps } from './types';
import { sizes } from 'styles';

const ConfirmAgeForm = ({ handleFormSubmit, gdprAge }: ConfirmAgeProps) => {
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
            <Text fontSize={24} marginBottom={30} textAlign={'center'} fontWeight={'bolder'} color={'white'}>{t('signup.confirm_age.title', { age: gdprAge})}</Text>
            <Button width={[1, sizes.loginButtonWidth]} paddingLeft={105} paddingRight={105} type={'submit'} label={t('common.yes')} onClick={handleFormSubmit}></Button>
            <Button width={[1, sizes.loginButtonWidth]} paddingLeft={105} paddingRight={105} type={'cancel'} label={t('common.no')} onClick={() => history.push('/login')}></Button>
        </Flex>
    );
}

export { ConfirmAgeForm }
