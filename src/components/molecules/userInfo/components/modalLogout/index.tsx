import { useTranslation } from 'react-i18next'
import { useBoolean } from '@chakra-ui/hooks'
import { useAuth } from 'contexts/auth'
import { Modal } from 'components'
import { PropsModalLogout } from './types'

const ModalLogout = ({
  isOpen,
  onClose
}: PropsModalLogout) => {
  const { t } = useTranslation()
  const { signOut } = useAuth()
  const [signoutLoading, setSignoutLoading] = useBoolean()

  const handleLogout = () => {
    signOut()
    setSignoutLoading.on()
  }

  return (
    <Modal
      isCentered
      title={t('common.sign_out')}
      subtitle={t('common.confirm_signout')}
      closeButton={false}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={handleLogout}
      loading={signoutLoading}
    />
  )
}

export { ModalLogout }
