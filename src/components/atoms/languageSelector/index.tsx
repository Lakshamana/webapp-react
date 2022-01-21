import { useTranslation } from 'react-i18next'
import { Icon } from '@iconify/react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

import { LanguageSelectProps } from './types'

import { MenuButtonSpan } from './style'

import { useThemeStore } from 'services/stores/theme'
import { saveData } from 'services/storage'

import { APP_LOCALE } from 'config/constants'
import { colors } from 'styles'
import { Container } from '../container'

import { ReactComponent as BrazilIcon } from 'assets/icons/flags/brazil.svg'
import { ReactComponent as USAIcon } from 'assets/icons/flags/usa.svg'

const LanguageSelector = ({ ...props }: LanguageSelectProps) => {
  const { i18n } = useTranslation()
  const { colorMode } = useThemeStore()

  function handleChangeLanguage(language: LanguageSelectProps) {
    i18n.changeLanguage(language.locale)
    saveData(APP_LOCALE, language.locale)
  }

  const languageOptions: LanguageSelectProps[] = [
    { flagIcon: <BrazilIcon width={24} />, locale: 'pt-BR', label: 'PT' },
    { flagIcon: <USAIcon width={24} />, locale: 'en-US', label: 'EN' },
  ]

  const selectedLanguage: LanguageSelectProps = languageOptions.filter(
    (item) => {
      return item.locale === i18n.language
    }
  )[0]

  return (
    <Container {...props}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton borderRadius={36}>
              <MenuButtonSpan>
                <Icon
                  width={25}
                  height={25}
                  icon="mdi:web"
                  color={
                    isOpen
                      ? colors.brand.primary[colorMode]
                      : colors.generalText[colorMode]
                  }
                />
              </MenuButtonSpan>
            </MenuButton>
            <MenuList
              minWidth={'auto'}
              bgColor={colors.inputBg[colorMode]}
              border={'none'}
              color={'white'}
              padding={0}
            >
              {languageOptions.map((item, idx) => {
                return (
                  <MenuItem
                    _focus={{ bg: 'transparent' }}
                    paddingRight={8}
                    icon={item.flagIcon}
                    key={idx}
                    minH="48px"
                    fontWeight={500}
                    onClick={() => handleChangeLanguage(item)}
                    isDisabled={selectedLanguage?.locale === item?.locale}
                  >
                    <span>{item.label}</span>
                  </MenuItem>
                )
              })}
            </MenuList>
          </>
        )}
      </Menu>
    </Container>
  )
}

export { LanguageSelector }
