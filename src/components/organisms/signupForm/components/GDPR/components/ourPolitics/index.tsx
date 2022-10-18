import { Flex } from '@chakra-ui/react'
import { Button, Checkbox, Container, Link, Text } from 'components'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useCustomizationStore } from 'services/stores'
import { useThemeStore } from 'services/stores/theme'
import { colors, sizes } from 'styles'
import { ConfirmAgeProps } from './types'

const OurPolitics = ({
  handleFormSubmit,
  isLoading,
  onCancel,
}: ConfirmAgeProps) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { organizationConfig } = useCustomizationStore()

  const [terms, setTerms] = useState(false)

  const renderCheckboxLabel = () => (
    <>
      {t('signup.our_politics.agree')}
      <Link
        paddingX={1}
        to={organizationConfig?.TERMS_URL!}
        label={t('common.terms')}
        isExternal
      />
      {t('common.and')}
      <Link
        paddingX={1}
        to={organizationConfig?.PRIVACY_URL!}
        label={t('common.privacy')}
        isExternal
      />
    </>
  )

  return (
    <Flex alignItems={'center'} flexDirection={'column'} gridGap={5}>
      <Text
        fontSize={24}
        textAlign={'center'}
        fontWeight={'bolder'}
        color={colors.generalText[colorMode]}
      >
        {t('signup.our_politics.title')}
      </Text>
      <Text
        fontSize={16}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.our_politics.description')}
      </Text>
      <Text
        fontSize={16}
        textAlign={'center'}
        color={colors.secondaryText[colorMode]}
      >
        {t('signup.our_politics.confirm_you_read')}
      </Text>
      <Container width={1} mb={10} justifyContent={'left'}>
        <Checkbox
          onChange={(e) => setTerms(e.target.checked)}
          name={'createAccount.terms_of_service'}
          paddingTop={2}
          label={renderCheckboxLabel()}
        />
      </Container>
      <Flex
        width={1}
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Button
          width={[sizes.loginButtonWidth]}
          isDisabled={!terms}
          label={t('signup.actions.register')}
          onClick={() => handleFormSubmit()}
          isLoading={isLoading}
          mb={3}
        ></Button>
        <Button
          width={[sizes.loginButtonWidth]}
          variant="ghost"
          label={t('signup.actions.cancel')}
          onClick={onCancel}
        ></Button>
      </Flex>
    </Flex>
  )
}

export { OurPolitics }
