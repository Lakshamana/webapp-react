import { Flex } from '@chakra-ui/react'
import { Button, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors, sizes } from 'styles'
import { ConfirmAgeProps } from './types'

const Confirm = ({
  handleFormSubmit,
  handleAgeDecline,
  gdprAge,
}: ConfirmAgeProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
      <Text
        fontSize={24}
        marginBottom={30}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signup.confirm_age.title', { age: gdprAge })}
      </Text>
      <Button
        width={[sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        variant="solid"
        label={t('common.yes')}
        onClick={handleFormSubmit}
      />
      <Button
        width={[sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        variant="ghost"
        label={t('common.no')}
        onClick={() => handleAgeDecline()}
      />
    </Flex>
  )
}

export { Confirm }
