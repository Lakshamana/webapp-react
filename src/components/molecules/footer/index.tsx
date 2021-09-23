import React, { ReactElement } from 'react';
import { Text } from 'components/atoms';
import { Logo } from 'components/atoms'
import { BoxFooter, FooterItems, TextFooter } from "./style";
import { Props, defaultProps } from "./types";


const Footer = ({ text }: Props): ReactElement => {
    return (
        <BoxFooter>
            <FooterItems>
                <Logo width={161} height={44} />
                <TextFooter>
                    <Text>{text}</Text>
                </TextFooter>
            </FooterItems>
        </BoxFooter>
    )
}

Footer.defaultProps = defaultProps

export { Footer };
