import { Flex } from '@chakra-ui/react'
import { Button, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { colors, sizes } from 'styles'
import { ConfirmAgeProps } from './types'

const Reconfirm = ({
  handleFormSubmit,
  gdprAge,
  onCancel,
}: ConfirmAgeProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signup.reconfirm_age.title')}
      </Text>
      <Text
        fontSize={16}
        marginBottom={30}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.reconfirm_age.subtitle')}
      </Text>
      <Button
        width={[sizes.loginButtonWidth]}
        type={'submit'}
        label={t('common.update')}
        onClick={handleFormSubmit}
      ></Button>
      <Button
        width={[sizes.loginButtonWidth]}
        variant="ghost"
        label={t('signup.reconfirm_age.under_age', { age: gdprAge })}
        onClick={onCancel}
      ></Button>
    </Flex>
  )
}

export { Reconfirm }
