import React, { ReactElement } from 'react';
import { Text } from '../../atoms/text/index';
import { BoxFooter, FooterItems, LogoFooter, TextFooter } from "./style";
import { Props, defaultProps } from "./types";


const Footer = ({ image, text }: Props): ReactElement => {
    return (
        <BoxFooter>
            <FooterItems>
                <LogoFooter mb={2} mt={2} width='200px' height='59px' src={image ? image : ''} />
                <TextFooter>
                    <Text fontSize={1}>{text}</Text>
                </TextFooter>
            </FooterItems>
        </BoxFooter>
    )
}

Footer.defaultProps = defaultProps

export { Footer };
