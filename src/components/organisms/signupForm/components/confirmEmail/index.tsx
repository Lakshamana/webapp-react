import { useHistory } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { Button, Text } from 'components'
import { colors, sizes } from 'styles'
import { useThemeStore } from 'services/stores/theme'
import { useTranslation } from 'react-i18next'
import { ReactComponent as EmailSVG } from 'assets/icons/email.svg'

const ConfirmEmailForm = () => {
  const history = useHistory()
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
        onClick={() => history.push('/login')}
      ></Button>
    </Flex>
  )
}

export { ConfirmEmailForm }
