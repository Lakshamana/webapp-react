import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDisclosure } from '@chakra-ui/hooks'
import { Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import { useThemeStore, useOrganizationStore } from 'services/stores'
import { Button, Modal, Input, Text, AlertComponent } from 'components'
import { SingleConfiguration } from '..'
import { sizes, colors } from 'styles'
import { Props } from './types'
import { ForgetAccountInput } from 'generated/graphql'

const ForgetAccount = ({ isLoading, forgetAccount, error, dispatchAlert }: Props) => {
  const { t } = useTranslation()
  const { colorMode } = useThemeStore()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { organization } = useOrganizationStore()
  const [forgetAccountInput, setForgetAccountInput] =
    useState<ForgetAccountInput>({ currentPassword: '' })
  const [fieldError, setFieldError] = useState('')

  const callForgetAccount = () => {
    if (!forgetAccountInput.currentPassword.length)
      setFieldError(
        t('common.error.field_required', {
          field_name: t('page.account.password'),
        })
      )
    else {
      setFieldError('')
      forgetAccount(forgetAccountInput)
    }
  }

  return (
    <>
      {error && (
        <Box my={2}>
          <AlertComponent
            type={'error'}
            description={error}
            onClose={dispatchAlert}
          ></AlertComponent>
        </Box>
      )}
      <SingleConfiguration
        text={t('page.account.delete_account')}
        children={
          <Button
            size="sm"
            width="auto"
            variant="link"
            onClick={onOpen}
            label={t('page.account.delete')}
          ></Button>
        }
        {...{ colorMode }}
      />
      <Modal
        size="lg"
        isCentered
        closeButton={false}
        isOpen={isOpen}
        onClose={onClose}
        defaultActions={false}
      >
        <Flex flexDirection="column" gridGap={2} alignItems={'center'}>
          <Text fontSize={'1.5rem'} color={colors.generalText[colorMode]}>
            {t('page.account.delete_account')}
          </Text>
          <Text
            pb={3}
            fontSize={'1rem'}
            textAlign="center"
            color={colors.secondaryText[colorMode]}
          >
            {t('page.account.delete_account_info', {
              organization: organization?.name,
            })}
          </Text>
          <Input
            type="password"
            onChange={(e) =>
              setForgetAccountInput({ currentPassword: e.target.value })
            }
            errorMessage={fieldError}
            error={!!fieldError}
            placeholder={t('page.account.password')}
          />
          <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            <Button
              variant={'unstyled'}
              backgroundColor="red"
              color="white"
              label={t('page.account.delete_my_account')}
              onClick={() => callForgetAccount()}
              isLoading={isLoading}
            />
            <Button
              width={sizes.loginButtonWidth}
              marginTop={2}
              variant={'ghost'}
              label={t('common.cancel')}
              onClick={() => {
                onClose()
                setForgetAccountInput({ currentPassword: '' })
              }}
            />
          </Box>
        </Flex>
      </Modal>
    </>
  )
}
export { ForgetAccount }
