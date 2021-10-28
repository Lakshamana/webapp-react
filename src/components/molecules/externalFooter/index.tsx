import { Link } from '@chakra-ui/react';
import { Logo, Text } from 'components/atoms'
import { BoxFooter, FooterItems, TextFooter } from "./style";

const ExternalFooter = () => (
    <BoxFooter px={4} display={'flex'} alignItems={'center'}>
        <FooterItems width={1} py={20}>
            <TextFooter>
                <Link to="" fontSize={[16]}>Terms and Conditions</Link>
                <Text mx={1} fontSize={[16]}>&</Text>
                <Link to="" fontSize={[16]}>Privacy and Policy</Link>
            </TextFooter>
            <Logo alignItems={'center'} justifyContent={'right'} mb={[4, 4, 0, 0]} width={161} height={44} />
        </FooterItems>
    </BoxFooter>
)

export { ExternalFooter };
