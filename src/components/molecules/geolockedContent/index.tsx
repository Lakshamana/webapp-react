import { Modal } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

const GeolockedContent = () => {
  const { t } = useTranslation()
  const history = useHistory()

  return (
    <Modal
      isCentered
      title={t('page.post.geolocked_content.title')}
      subtitle={t('page.post.geolocked_content.subtitle')}
      closeButton
      isOpen
      onClose={() => history.go(-1)}
      onConfirm={() => history.go(-1)}
      closeOnOverlayClick={false}
      cancelButton={false}
      actionLabel={t('common.back_to_home')}
    />
  )
}

export { GeolockedContent }
