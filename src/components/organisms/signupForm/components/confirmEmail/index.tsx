import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { ConfirmEmailProps } from './types'
import { Button, Text } from 'components'
import { colors, sizes } from 'styles'
import { ReactComponent as EmailSVG } from 'assets/icons/email.svg'

const ConfirmEmailForm = ({ onClose }: ConfirmEmailProps) => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={4}>
      <EmailSVG></EmailSVG>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signup.confirm_email.title')}
      </Text>
      <Text
        fontSize={16}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.confirm_email.description')}
      </Text>
      <Button
        width={[sizes.loginButtonWidth]}
        variant={'ghost'}
        label={t('common.close')}
        onClick={onClose}
      ></Button>
    </Flex>
  )
}

export { ConfirmEmailForm }
