import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { Flex, Center, Text } from '@chakra-ui/layout'
import { Button } from 'components'
import { colors } from 'styles'

const NotFound = () => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  return (
    <Flex
      p={10}
      w={'100%'}
      direction="column"
      alignItems="center"
      justifyContent="center"
      color={colors.generalText[colorMode]}
    >
      <Text fontSize={{ base: '3rem', md: '4rem' }} fontWeight="bold">
        404
      </Text>
      <Text
        fontSize={{ base: '1.2rem', md: '1.5rem' }}
        fontWeight="bold"
        textAlign="center"
      >
        {t('common.content_not_exists')}
      </Text>
      <Text
        textAlign="center"
        pt={2}
        color={colors.secondaryText[colorMode]}
        fontSize={{ base: '1rem', md: '1.2rem' }}
      >
        {t('common.content_not_exists_description')}
      </Text>
      <Center>
        <Button
          mt={2}
          variant="link"
          label={t('common.back_to_home')}
          onClick={() => history.push('/')}
        />
      </Center>
    </Flex>
  )
}

export { NotFound }
