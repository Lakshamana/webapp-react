import { useMutation } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MUTATION_ACTIVATE_ACCOUNT } from 'services/graphql'
import { Spinner, Box } from '@chakra-ui/react'
import { Text, AlertCard } from 'components'
import { colors } from 'styles'
import { useThemeStore } from 'services/stores'
import { useTranslation } from 'react-i18next'

const ActivateAccount = () => {
  const { search } = useLocation()
  const [code, setCode] = useState<string>()
  const [accountId, setAccountId] = useState<string>()
  const [isActivated, setIsActivated] = useState<boolean>(false)
  const { colorMode } = useThemeStore()
  const { t } = useTranslation()

  const useQuery = () =>
    React.useMemo(() => new URLSearchParams(search), [search])

  const query = useQuery()

  const [activateAccount, { loading }] = useMutation(
    MUTATION_ACTIVATE_ACCOUNT,
    {
      variables: {
        payload: {
          activationCode: code,
          id: accountId,
        },
      },
      onCompleted: (result) => {
        if (result.activateAccount.activated) setIsActivated(true)
      },
    }
  )

  useEffect(() => {
    const code = query.get('code')
    const accountID = query.get('accountId')
    code && setCode(code)
    accountID && setAccountId(accountID)
    //eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (accountId && code) activateAccount()
    //eslint-disable-next-line
  }, [accountId])

  return (
    <Box
      alignItems="center"
      paddingX={20}
      justifyContent="center"
      textAlign="center"
    >
      {loading && (
        <Box>
          <Spinner size={'xl'} color={colors.brand.primary['dark']}></Spinner>
          <Text fontSize={'22px'} mt={2} color={colors.generalText[colorMode]}>
            {t('activateAccount.activating')}
          </Text>
        </Box>
      )}
      {isActivated && (
        <AlertCard
          type={'success'}
          title={t('activateAccount.success')}
          description={''}
          actionLabel={t('activateAccount.loginLink')}
          toRoute={'login'}
        />
      )}
    </Box>
  )
}
export { ActivateAccount }
