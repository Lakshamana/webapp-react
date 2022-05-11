import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { Flex, Center } from '@chakra-ui/layout'
import { Icon } from '@iconify/react'
import { useThemeStore, useChannelsStore } from 'services/stores'
import { Text, Button } from 'components'
import { colors } from 'styles'

const EmptyState = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const history = useHistory()
  const { activeChannel } = useChannelsStore()

  return (
    <Flex
      p={10}
      w={'100%'}
      direction="column"
      alignItems="center"
      justifyContent="center"
      color={colors.generalText[colorMode]}
    >
      <Icon width="70" icon="mdi:movie-off" />
      <Text pt={2} fontSize="1.5rem" fontWeight="bold">
        {t('common.empty_content')}
      </Text>
      <Text textAlign='center' pt={2} color={colors.secondaryText[colorMode]}>
        {t('common.try_again_later')}
      </Text>
      <Center>
        <Button
          mt={2}
          variant="link"
          label={t('common.back_to_home')}
          onClick={() => history.push(`/c/${activeChannel?.slug}`)}
        />
      </Center>
    </Flex>
  )
}

export { EmptyState }
