import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { Button, Link, Text } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { useThemeStore } from 'services/stores/theme'
import { colors, sizes } from 'styles'

const ActionNotAllowed = ({ isOpen, onClose }) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const history = useHistory()
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        marginX={3}
        paddingTop={3}
        backgroundColor={colors.cardBg[colorMode]}
      >
        <ModalHeader
          textColor={colors.generalText[colorMode]}
          fontSize={'1.5rem'}
          mt={2}
          textAlign={'center'}
          fontWeight={500}
        >
          {t('signup.registration.free_registration')}
        </ModalHeader>

        <ModalCloseButton
          autoFocus={false}
          _focus={{ boxShadow: 'none' }}
          textColor={colors.generalText[colorMode]}
        />

        <ModalBody
          paddingBottom={4}
          textColor={colors.secondaryText[colorMode]}
          fontSize={'1rem'}
          textAlign={'center'}
        >
          {t('common.create_a_new_account')}
        </ModalBody>

        <ModalFooter display={'flex'} flexDirection={'column'} pt={3} mb={4}>
          <Button
            width={[sizes.loginButtonWidth]}
            label={t('signup.registration.free_registration')}
            onClick={() => history.push('/signup')}
          />
          <Flex mb={2} mt={5} justifyContent={'center'} pt={3}>
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { ActionNotAllowed }
