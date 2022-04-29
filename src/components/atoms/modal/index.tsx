import {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Box,
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
  defaultActions,
  isActionDisabled,
  loading,
  ...props
}: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  return (
    <MainContent>
      <Modal isOpen={isOpen} onClose={onClose} {...props}>
        <ModalOverlay />
        <ModalContent marginX={3} paddingTop={3} backgroundColor={colors.cardBg[colorMode]}>
          {children ? (
            <Box px={6} py={4}>
              {children}
            </Box>
          ) : (
            <>
              <ModalHeader
                textColor={colors.generalText[colorMode]}
                fontSize={'1.5rem'}
                textAlign={'center'}
                fontWeight={500}
                paddingBottom={subtitle ? 1 : 0}
                paddingTop={closeButton ? 8 : 5}
              >
                {title}
              </ModalHeader>
              {closeButton && (
                <ModalCloseButton
                  autoFocus={false}
                  _focus={{ boxShadow: 'none' }}
                  textColor={colors.generalText[colorMode]}
                />
              )}

              <ModalBody
                paddingBottom={4}
                textColor={colors.secondaryText[colorMode]}
                fontSize={'1rem'}
                textAlign={'center'}
              >
                {subtitle}
              </ModalBody>
            </>
          )}
          {defaultActions && (
            <ModalFooter display={'flex'} flexDirection={'column'} paddingY={4}>
              {actionButton && (
                <Button
                  width={[sizes.loginButtonWidth]}
                  label={actionLabel || t('common.confirm')}
                  onClick={onConfirm}
                  isLoading={loading}
                  isDisabled={isActionDisabled}
                />
              )}
              {cancelButton && (
                <Button
                  width={[sizes.loginButtonWidth]}
                  marginTop={2}
                  variant={'ghost'}
                  label={cancelLabel || t('common.cancel')}
                  onClick={onClose}
                />
              )}
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </MainContent>
  )
}

ModalComponent.defaultProps = defaultProps

export { ModalComponent as Modal }
