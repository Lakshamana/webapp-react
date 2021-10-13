import { useState } from "react";
import { LanguageSelectProps } from './types'
import { ReactComponent as BrazilIcon } from "assets/icons/flags/brazil.svg"
import { ReactComponent as USAIcon } from "assets/icons/flags/usa.svg"
import { ChevronDown } from 'react-feather';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react"
import { MenuButtonSpan } from './style'


const LanguageSelector = () => {

    const languageOptions: LanguageSelectProps[] = [
        { flagIcon: <BrazilIcon width={24} />, locale: 'PT', label: 'Portugues' },
        { flagIcon: <USAIcon width={24} />, locale: 'EN', label: 'English' }
    ]

    // TO-DO get default language from firebase config
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

    // TO-DO change i18n language
    const handleClick = (item: LanguageSelectProps) => {
        setSelectedLanguage(item)
    }

    return (
        <Menu>
            <MenuButton padding={2} borderRadius={36} borderColor={'#666666'} borderWidth={1}>
                <MenuButtonSpan>
                    {selectedLanguage.flagIcon}
                    {selectedLanguage.locale}
                    <ChevronDown width={18} />
                </MenuButtonSpan>
            </MenuButton>
            <MenuList minWidth={'auto'} bgColor={'#444444'} border={'none'} color={'white'} padding={0}>
                {languageOptions.map((item, idx) => {
                    return <MenuItem _focus={{ bg: "transparent" }} paddingRight={8} icon={item.flagIcon} key={idx} minH="48px" fontWeight={500} onClick={() => handleClick(item)}>
                        <span>{item.locale}</span>
                    </MenuItem>
                })}
            </MenuList>
        </Menu >
    );
}

export { LanguageSelector }