import { ReactElement } from 'react';
import { Logo, Text } from 'components/atoms'
import { BoxFooter, FooterItems, TextFooter } from "./style";
import { Link } from '@chakra-ui/react';

const ExternalFooter = (): ReactElement => (
    <BoxFooter>
        <FooterItems>
            <TextFooter>
                <Link to="">Terms and Conditions</Link>
                <Text mx={1}>&</Text>
                <Link to="">Privacy and Policy</Link>
            </TextFooter>
            <Logo justifyContent={'right'} mb={[4, 0]} width={161} height={44} />
        </FooterItems>
    </BoxFooter>
)

export { ExternalFooter };
