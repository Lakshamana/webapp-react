import { Link } from 'react-router-dom'
import { Container, Text, Button } from 'components'
import { SideUserInfo } from '..'

import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer } from './styles'
import { colors } from 'styles'
import { useAuth } from 'contexts/auth'

const SideMenu = ({ open, data, user, colorMode }: PropsSideMenu) => {
  const { signOut } = useAuth()
  return (
    <SideContainer display="block" {...{ open }}>
      <ScrollContainer
        flexDirection="column"
        display={open ? 'flex' : 'none'}
        my={3}
      >
        <SideUserInfo {...{ user }} />
        {data?.map((item: any) => (
          <Link to={item.url} key={`Path-${item.id}`}>
            <Container width={1} pl={3} py={3}>
              <Text
                style={{ textTransform: 'uppercase' }}
                color={colors.secondaryText[colorMode]}
              >
                {item.label}
              </Text>
            </Container>
          </Link>
        ))}
        <Container display="flex" align-items="center" width={1}>
          <Button
            label={'Sair'}
            variant="ghost"
            iconName="power"
            onClick={signOut}
          ></Button>
        </Container>
      </ScrollContainer>
    </SideContainer>
  )
}

export { SideMenu }
