import React, { ReactElement } from 'react';
import { Logo, LanguageSelector } from 'components'
import { BoxHeader, HeaderItems } from "./style";

const ExternalHeader = (): ReactElement => (
    <BoxHeader>
        <HeaderItems>
            <Logo marginRight={4}></Logo>
            <LanguageSelector></LanguageSelector>
        </HeaderItems>
    </BoxHeader>
)

export { ExternalHeader };
