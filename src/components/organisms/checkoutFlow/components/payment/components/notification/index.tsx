import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { ModalType, Props } from './types'

export const ModalNotification = ({
  isOpen,
  onClose,
  modalType,
}: Props) => {
  const { t } = useTranslation();
  const history = useHistory()
  return (
    <Modal
      onClose={()=>{
        onClose()
        if(modalType === ModalType.success) {
          history.go(0)
        }
      }}
      isOpen={isOpen}
      isCentered
      motionPreset="slideInBottom"
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent borderRadius="8px" m="1em" w="100%" maxW="496px">
        { modalType === ModalType.success && (
          <>
            <ModalHeader
              bg="#33DA80"
              color="#fff"
              display="flex"
              justifyContent="center"
              borderRadius="8px 8px 0px 0px"
              flexDirection="column"
              alignItems="center"
              gridGap="16px"
              py="46px"
            >
              <Icon icon="bx:check-circle" height="40px" />
              <Text fontSize="28px" fontWeight="500">
                {t('page.checkout.modal.success.title')}
              </Text>
            </ModalHeader>
            <ModalBody
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gridGap="40px"
              pt="28px"
              pb="28px"
            >
              <Text
                fontSize="20px"
                textAlign="center"
                W="100%"
                maxW="307px"
                color="#666666"
              >
                {t('page.checkout.modal.success.subtitle')}
              </Text>
              <Text
                cursor="pointer"
                fontWeight="700"
                color="#4C26F0"
                fontSize="16px"
                textTransform="uppercase"
                onClick={()=>{
                  onClose()
                  history.go(0)
                }}
              >
                {t('page.checkout.modal.success.close')}
              </Text>
            </ModalBody>
          </>
        )}
        { modalType === ModalType.failure && (
          <>
            <ModalHeader
              bg="#FF0000"
              color="#fff"
              display="flex"
              justifyContent="center"
              borderRadius="8px 8px 0px 0px"
              flexDirection="column"
              alignItems="center"
              gridGap="16px"
              py="46px"
            >
              <Icon icon="bx:x-circle" height="40px" />
              <Text fontSize="28px" fontWeight="700">
              {t('page.checkout.modal.failure.title')}
              </Text>
            </ModalHeader>
            <ModalBody
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gridGap="40px"
              pt="28px"
              pb="28px"
            >
              <Text
                fontSize="20px"
                textAlign="center"
                W="100%"
                maxW="307px"
                color="#666666"
              >
                {t('page.checkout.modal.failure.subtitle')}
              </Text>
              <Text
                cursor="pointer"
                fontWeight="700"
                color="#4C26F0"
                fontSize="16px"
                textTransform="uppercase"
                onClick={onClose}
              >
                {t('page.checkout.modal.failure.close')}
              </Text>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export { ModalType }
