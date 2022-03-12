import { Flex, Text } from '@chakra-ui/react'
import { Button, Input } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { colors } from 'styles'

export const Password = () => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      w="100%"
      mt="29px"
      p={['1em', '1em', '1em', '1em', '0']}
    >
      <Text
        fontSize="32px"
        fontWeight="700"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.password.title')}
      </Text>
      <Text
        maxW="425px"
        w="100%"
        textAlign="center"
        mt="16px"
        fontSize="16px"
        color={colors.generalText[colorMode]}
      >
        {t('page.checkout.password.subtitle')}
      </Text>
      <Flex
        mt="40px"
        boxShadow={[
          'none',
          'none',
          'none',
          'none',
          '0px 4px 4px rgba(0, 0, 0, 0.25)',
        ]}
        borderRadius="8px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={['2em', '2em', '2em', '2em', '43px 56px 35px 56px']}
        bg={colors.cardBg[colorMode]}
        maxW="556px"
        w="100%"
        gridGap={['1em', '1em', '1em', '1em', '42px']}
      >
        <Input
          name="payload.password"
          type={'password'}
          placeholder={t('page.checkout.password.password_input')}
        />
        <Button
          height="56px"
          width="236px"
          label={t('page.checkout.password.saveandcontinue')}
        ></Button>
      </Flex>
    </Flex>
  )
}
