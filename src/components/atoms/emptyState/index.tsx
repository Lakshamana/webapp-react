import { Flex } from '@chakra-ui/layout'
import { Text, Button } from 'components'
import { Icon } from '@iconify/react'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
const EmptyState = () => {
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const history = useHistory()
  return (
    <Flex
      py={10}
      w={'100%'}
      direction="column"
      alignItems="center"
      justifyContent="center"
      color={colors.generalText[colorMode]}
    >
      <Icon width="70" icon="mdi:movie-off"></Icon>
      <Text pt={2} fontSize="1.5rem" fontWeight="bold">
        Sem conteúdo no momento
      </Text>
      <Text pt={2} color={colors.secondaryText[colorMode]}>
        Tente novamente mais tarde
      </Text>
      <Button
        mt={2}
        variant="link"
        label={t('common.back_to_home')}
        onClick={() => history.push('home')}
      ></Button>
    </Flex>
  )
}

export { EmptyState }
