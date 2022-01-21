
import { useTranslation } from 'react-i18next'
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure
} from '@chakra-ui/react'
import { Text } from './style'
import { Props } from './types'
import { useThemeStore } from 'services/stores'
import { Button } from 'components'
import { colors } from 'styles'

const CookieConsent = ({ domain, onAccept, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  return (
    <>
      {children(onOpen)}
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            display={'flex'}
            bgColor={colorMode === 'dark' ? 'black' : 'white'}
            color={colorMode === 'dark' ? 'white' : undefined}
          >
            <Flex flexDir={'row'} flexWrap="wrap">
              <Text>
                <>
                  <b>{t('cookieConsent.notice')}</b> 
                  &nbsp;
                  {domain}
                  &nbsp;
                  {t('cookieConsent.description_1')}
                  &nbsp;
                  <a 
                    style={{ color: colors.brand.primary['dark'] }}
                    href="https://fanhero.com/privacy/" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    {t('cookieConsent.link')}
                  </a>
                  &nbsp;
                  {t('cookieConsent.description_2')}
                </>
              </Text>
            </Flex>
            <Center flex={1}>
              <Button
                width="fit-content"
                label={t('cookieConsent.accept')}
                onClick={() => onAccept && onAccept()}
              ></Button>
            </Center>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export { CookieConsent }
