import { useHistory, Link } from 'react-router-dom';
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
                onEnterPress={() => alert("enter")}
            />
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} marginBottom={10} type={'submit'} label={'Login'} onClick={() => history.push('/home')}></Button>
            {/* TO-DO: All text links has ACCENT color as default. */}
            <Link to="resetPassword">Forgot password?</Link>
        </Flex>
    );
}

export { SigninForm }
