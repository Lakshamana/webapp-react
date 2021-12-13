import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import { useThemeStore } from 'services/stores/theme'
import { sizes, colors } from 'styles'
import { Props, defaultProps } from './types'
import { MainContent } from './style'

const ModalComponent = ({
  children,
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  actionLabel,
  cancelLabel,
  closeButton,
  cancelButton,
  actionButton,
  ...props
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  return (
    <MainContent>
      <Modal isOpen={isOpen} onClose={onClose} {...props}>
        <ModalOverlay />
        <ModalContent paddingTop={3} backgroundColor={colors.cardBg[colorMode]}>
          {children ? (
            { children }
          ) : (
            <>
              <ModalHeader
                textColor={colors.generalText[colorMode]}
                fontSize={'32px'}
                textAlign={'center'}
                paddingBottom={1}
              >
                {title}
              </ModalHeader>
              {closeButton && <ModalCloseButton textColor={colors.generalText[colorMode]} />}
              <ModalBody paddingBottom={4} textColor={colors.secondaryText[colorMode]} size={'16px'} textAlign={'center'}>
                {subtitle}
              </ModalBody>

              <ModalFooter display={'flex'} flexDirection={'column'}>
                {actionButton && <Button
                  width={[1, sizes.loginButtonWidth]}
                  label={actionLabel || t('common.confirm')}
                  onClick={onConfirm}
                />}
                {cancelButton && <Button
                  width={[1, sizes.loginButtonWidth]}
                  marginTop={2}
                  type={'outlined'}
                  label={cancelLabel || t('common.cancel')}
                  onClick={onClose}
                />}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </MainContent>
  )
}

ModalComponent.defaultProps = defaultProps

export { ModalComponent as Modal }
