import { useHistory } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Input, Button, Text } from "components";
import { CustomFormProps } from "./types";

const AdditionalInformationForm = ({ ...props }: CustomFormProps) => {
    const history = useHistory();

    return (
        <Flex alignItems={'center'} marginY={30} flexDirection={'column'} gridGap={2}>
            <Text fontSize={24} textAlign={'center'} fontWeight={'bolder'} color={'white'}>Additional Information</Text>
            <Text fontSize={16} paddingTop={10} textAlign={'center'} color={'#A4A4A4'}>{`${props.fullname} we need a little more information about you`}</Text>
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'Address'}
                onEnterPress={() => alert("enter")}
            />
            <Input
                onChange={() => { }}
                error={false}
                placeholder={'City'}
                onEnterPress={() => alert("enter")}
            />
            <Button width={1} paddingLeft={105} paddingRight={105} marginTop={20} type={'submit'} label={'Next'} onClick={() => history.push('/dashboard')}></Button>
        </Flex>
    );
}

export { AdditionalInformationForm }
