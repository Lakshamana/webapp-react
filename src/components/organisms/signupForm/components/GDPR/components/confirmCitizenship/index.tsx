import { Link } from 'components'
import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { useFlags } from 'config/firebase/FlagsProvider'
import { Button, Text } from 'components'
import { ConfirmAgeProps } from './types'
import { colors, sizes } from 'styles'


const ConfirmCitizenshipForm = ({ handleFormSubmit }: ConfirmAgeProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { ORGANIZATION } = useFlags()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={3}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signup.GDPR.citizen')}
      </Text>
      <Link
        label={t('common.what_is_this')}
        to={ORGANIZATION.GDPR_URL}
        isExternal
      ></Link>
      <Button
        width={[1, sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        marginTop={30}
        type={'submit'}
        label={t('common.yes')}
        onClick={() => handleFormSubmit(true)}
      ></Button>
      <Button
        width={[1, sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        type={'cancel'}
        label={t('common.no')}
        onClick={() => handleFormSubmit(false)}
      ></Button>
    </Flex>
  )
}

export { ConfirmCitizenshipForm }
