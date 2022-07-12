import { Button, Container } from 'components'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router-dom'
import { PropsNotLogged } from './types'

const NotLogged = ({ display, colorMode }: PropsNotLogged) => {
  const { t } = useTranslation()
  const history = useHistory()

  const redirectTo = (route: string) => history.push(`/${route}`)

  return (
    <Container alignSelf={'center'}>
      {display === 'menu' && (
        <Container display={['none', 'none', 'flex']}>
          <Button
            size="md"
            mr={2}
            label={t('signup.actions.signup')}
            onClick={() => redirectTo('signup')}
          />
          <Button
            variant={'outline'}
            size="md"
            label={t('signin.actions.login')}
            onClick={() => redirectTo('login')}
          />
        </Container>
      )}
      {display === 'sidebar' && (
        <Container
          mt={4}
          mx={3}
          width="100%"
          display={['flex', 'flex', 'none']}
        >
          <Button
            label={t('signup.actions.signup')}
            mr={1}
            size={'md'}
            onClick={() => redirectTo('signup')}
          />
          <Button
            label={t('signin.actions.login')}
            variant={'outline'}
            ml={1}
            size={'md'}
            onClick={() => redirectTo('login')}
          />
        </Container>
      )}
    </Container>
  )
}

export { NotLogged }
