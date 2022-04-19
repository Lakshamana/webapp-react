import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Modal, Text, Input } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores'
import { useHistory } from 'react-router'
import { colors } from 'styles'

const PrivateContent = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const { colorMode } = useThemeStore()
  const [password, setPassword] = useState<string>('')
  return (
    <Modal
      isCentered
      closeButton={false}
      isOpen={true}
      onClose={() => history.go(-1)}
      //TODO: Implement action to send password to API to granted post access
      onConfirm={() => {}}
      loading={false}
      closeOnOverlayClick={false}
    >
      <Box textAlign="center">
        <Text
          color={colors.generalText[colorMode]}
          fontSize={'1.5rem'}
          textAlign={'center'}
          fontWeight={500}
        >
          {t('page.post.private_content.title')}
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
          onChange={(value) => setPassword(value)}
          placeholder={t('signin.label.password')}
        ></Input>
      </Box>
    </Modal>
  )
}

export { PrivateContent }
