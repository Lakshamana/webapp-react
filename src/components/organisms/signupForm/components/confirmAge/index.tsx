import { useHistory } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Button, Text } from "components";

const ConfirmAgeForm = () => {
    const history = useHistory();

    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={1}>
            <Text fontSize={24} marginBottom={30} textAlign={'center'} fontWeight={'bolder'} color={'white'}>Confirm you are over 13 to continue</Text>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={'Continue'} onClick={() => history.push('/dashboard')}></Button>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'cancel'} label={'Back'} onClick={() => history.push('/dashboard')}></Button>
        </Flex>
    );
}

export { ConfirmAgeForm }
