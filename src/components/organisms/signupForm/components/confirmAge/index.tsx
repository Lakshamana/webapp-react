import { useHistory } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next'
import { Button, Text } from "components";
import { ConfirmAgeProps } from './types';

const ConfirmAgeForm = ({ handleFormSubmit }: ConfirmAgeProps) => {
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={1}>
            <Text fontSize={24} marginBottom={30} textAlign={'center'} fontWeight={'bolder'} color={'white'}>{t('signup.confirm_age.title')}</Text>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={t('signup.actions.confirm')} onClick={handleFormSubmit}></Button>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'cancel'} label={t('signup.actions.back')} onClick={() => history.push('/login')}></Button>
        </Flex>
    );
}

export { ConfirmAgeForm }
