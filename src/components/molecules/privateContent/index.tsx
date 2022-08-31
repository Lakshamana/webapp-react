import { Box } from '@chakra-ui/react'
import { AlertComponent, Input, Modal, Text } from 'components'
import { Kinds } from 'generated/graphql'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { useAuthStore, useChannelsStore, useThemeStore } from 'services/stores'
import { colors } from 'styles'
import { Props } from './types'

const PrivateContent = ({
  requestAccess,
  isLoadingRequest,
  error,
  type,
}: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [password, setPassword] = useState<string>('')
  const { clearActiveChannel, activeChannelKind } = useChannelsStore()
  const { isAnonymousAccess } = useAuthStore()

  const getTitleByType = () => {
    let title = {
      channel: t('page.channels.private_channel'),
      default: t('page.post.private_content.title'),
    }
    return title[type || 'default']
  }

  const clearChannelAndRedirect = () => {
    clearActiveChannel()
    window.location.href = '/'
  }

  if (
    activeChannelKind === Kinds.Private &&
    isAnonymousAccess
  ) {
    clearActiveChannel()
    window.location.href = '/login'
    return null
  }

  return (
    <Modal
      isCentered
      closeButton={false}
      isOpen={true}
      onClose={() =>
        type === 'channel' ? clearChannelAndRedirect() : history.go(-1)
      }
      onConfirm={() => requestAccess(password)}
      loading={isLoadingRequest}
      isActionDisabled={!password}
      closeOnOverlayClick={false}
      actionLabel={t('page.post.private_content.access')}
    >
      <Box textAlign="center">
        {!!error && (
          <AlertComponent
            type={'error'}
            description={error}
            closeable={false}
          />
        )}
        <Text
          mt={error && 3}
          color={colors.generalText[colorMode]}
          fontSize={'1.5rem'}
          textAlign={'center'}
          fontWeight={500}
        >
          {getTitleByType()}
        </Text>
        <Text
          pt={3}
          pb={4}
          color={colors.secondaryText[colorMode]}
          fontSize={'1rem'}
        >
          {t('page.post.private_content.subtitle')}
        </Text>

        <Input
          type="password"
          onEnterPress={() => {
            if (password) requestAccess(password)
          }}
          onChange={(value) => setPassword(value.target.value)}
          placeholder={t('signin.label.password')}
        />
      </Box>
    </Modal>
  )
}

export { PrivateContent }

