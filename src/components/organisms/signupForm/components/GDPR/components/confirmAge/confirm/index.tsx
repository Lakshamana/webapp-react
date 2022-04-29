import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'components'
import { ConfirmAgeProps } from './types'
import { sizes } from 'styles'

const Confirm = ({ handleFormSubmit, handleAgeDecline, gdprAge }: ConfirmAgeProps) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
      <Text
        fontSize={24}
        marginBottom={30}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={'white'}
      >
        {t('signup.confirm_age.title', { age: gdprAge })}
      </Text>
      <Button
        width={[sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        variant='solid'
        label={t('common.yes')}
        onClick={handleFormSubmit}
      ></Button>
      <Button
        width={[sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        variant='ghost'
        label={t('common.no')}
        onClick={() => handleAgeDecline()}
      ></Button>
    </Flex>
  )
}

export { Confirm }
