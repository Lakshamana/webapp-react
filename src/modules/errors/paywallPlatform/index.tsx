import { Center, Flex, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { Button, Link } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import {
  useChannelsStore,
  useOrganizationStore,
  useThemeStore
} from 'services/stores'
import { breakpoints, colors } from 'styles'

type Props = {
  type: 'organization' | 'channel' | 'post' | 'category' | 'liveEvent'
}

const PaywallPlatform = (props: Props) => {
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()
  const [isDesktop] = useMediaQuery(`(min-width: ${breakpoints.sm})`)
  const { organization } = useOrganizationStore()
  const { activeChannel } = useChannelsStore()

  const getTitle = () => {
    switch (props.type) {
      case 'organization':
        return t('common.organization_welcome', {
          organization: organization?.name,
        })
      case 'channel':
        return t('common.channel_welcome', { channel: activeChannel?.name })
    }
  }

  const getSubtitle = () => {
    switch (props.type) {
      case 'organization':
        return t('common.exclusive_organization', {
          organization: organization?.name,
        })
      case 'channel':
        return t('common.exclusive_channel', { channel: activeChannel?.name })
    }
  }

  return (
    <Flex
      py={10}
      mt={10}
      w={'80%'}
      direction="column"
      alignItems="center"
      justifyContent="center"
      color={colors.generalText[colorMode]}
    >
      <Text
        fontSize={{ base: '2rem', md: '2rem' }}
        fontWeight="bold"
        textAlign={'center'}
      >
        {getTitle()}
      </Text>
      <Text
        textAlign="center"
        pt={2}
        color={colors.secondaryText[colorMode]}
        fontSize={{ base: '1rem', md: '1.2rem' }}
      >
        {getSubtitle()}
      </Text>
      <Center mt={10}>
        <Button
          label={t('signup.registration.free_registration')}
          onClick={() => history.push('/signup')}
        />
      </Center>
      <Center>
        <Flex
          mb={2}
          mt={10}
          justifyContent={'center'}
          flexDirection={isDesktop ? 'row' : 'column'}
          textAlign="center"
          gridGap={isDesktop ? 0 : 2}
        >
          <Text color={colors.generalText[colorMode]} paddingRight={1}>
            {t('signup.registration.already_have_account')}
          </Text>
          <Link
            fontWeight={'bolder'}
            textTransform={'uppercase'}
            label={t('signup.actions.signin_here')}
            to={'/login'}
          />
        </Flex>
      </Center>
    </Flex>
  )
}

export { PaywallPlatform }
