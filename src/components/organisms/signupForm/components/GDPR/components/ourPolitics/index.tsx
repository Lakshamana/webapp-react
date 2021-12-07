import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Button, Text, Container, Checkbox, Link } from 'components'
import { ConfirmAgeProps } from './types'
import { useThemeStore } from 'services/stores/theme'
import { colors, sizes } from 'styles'

const OurPolitics = ({ handleFormSubmit }: ConfirmAgeProps) => {
  const history = useHistory()
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()

  const [terms, setTerms] = useState(false)

  const renderCheckboxLabel = () => {
    return (
      <>
        {t('signup.our_politics.agree')}
        <Link
          paddingX={1}
          externalLink={'https://fanhero.com/terms/en/'}
          label={t('common.terms')}
        />
        {t('common.and')}
        <Link
          paddingX={1}
          externalLink={'https://fanhero.com/privacy/en/'}
          label={t('common.privacy')}
        />
      </>
    )
  }

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
      <Container width={1} mb={20} justifyContent={'left'}>
        <Checkbox
          onChange={(e) => setTerms(e.target.checked)}
          name={'createAccount.terms_of_service'}
          paddingTop={2}
          label={renderCheckboxLabel()}
        ></Checkbox>
      </Container>
      <Button
        width={[1, sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        type={terms ? 'submit' : 'disabled'}
        label={t('signup.actions.register')}
        onClick={() => (terms ? handleFormSubmit : {})}
      ></Button>
      <Button
        width={[1, sizes.loginButtonWidth]}
        paddingLeft={105}
        paddingRight={105}
        type={'cancel'}
        label={t('signup.actions.cancel')}
        onClick={() => history.push('/login')}
      ></Button>
    </Flex>
  )
}

export { OurPolitics }
