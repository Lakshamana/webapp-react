import { Flex, Text } from '@chakra-ui/react'
import { Button } from 'components'
import QRCode from 'qrcode.react'
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { useCheckoutStore } from 'services/stores/checkout'
import { colors } from 'styles'

const PixQRCode = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const [copied, setCopied] = useState(false)
  const { qrCode } = useCheckoutStore()

  return (
    <Flex
      flex="1"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gridGap="1em"
      height={'100%'}
    >
      <Text
        color={colors.brand.primary[colorMode]}
        fontSize={'1.5rem'}
        textAlign="center"
        fontWeight={'bolder'}
      >
        {t('page.checkout.pix.scan_code')}
      </Text>
      <Text
        mb={5}
        color={colors.generalText[colorMode]}
        fontSize={'1.1rem'}
        textAlign="center"
      >
        1. {t('page.checkout.pix.pix_step_one')}
        <br />
        2. {t('page.checkout.pix.pix_step_two')}
        <br />
        3. {t('page.checkout.pix.pix_step_three')}
      </Text>
      <QRCode size={200} value={qrCode} />
      <Flex alignItems={'center'} mt={5}>
        <CopyToClipboard text={qrCode} onCopy={() => setCopied(true)}>
          <Button
            iconName={copied ? 'check' : 'content-copy'}
            width="auto"
            variant={copied ? 'outline' : 'solid'}
            label={copied ? 'COPIED' : 'COPY'}
          />
        </CopyToClipboard>
      </Flex>
    </Flex>
  )
}

export { PixQRCode }
