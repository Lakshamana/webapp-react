import { useHistory } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import { Button, Input } from "components";

const SigninForm = () => {
    const history = useHistory();

    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={2}>
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Username'}
                onEnterPress={() => alert("enter")}
            />
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Password'}
                secretIcon
                onEnterPress={() => alert("enter")}
            />
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={'Login'} onClick={() => history.push('/dashboard')}></Button>
            {/* TO-DO: All text links has ACCENT color as default. */}
            <Link marginTop={2} color={'blue'}>Forgot password?</Link>
        </Flex>
    );
}

export { SigninForm }
