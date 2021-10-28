import { useHistory } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Input, Button, Text } from "components";
import { ReactComponent as EmailImg } from "assets/icons/email.svg"

const ConfirmEmailForm = () => {
    const history = useHistory();

    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={1}>
            <EmailImg></EmailImg>
            <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>Email verification</Text>
            <Text fontSize={16} padding={10} marginBottom={10} textAlign={'center'} color={'#A4A4A4'}>We sent you a one time password. Please enter code sent to your email address.</Text>
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Enter code'} 
                onEnterPress={() => alert("enter")}
            />
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={'Continue'} onClick={() => history.push('/dashboard')}></Button>
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={10} type={'cancel'} label={'Resend Code'} onClick={() => history.push('/dashboard')}></Button>
        </Flex>
    );
}

export { ConfirmEmailForm }
