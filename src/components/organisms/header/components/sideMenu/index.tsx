import { Link } from 'react-router-dom'
import { Container, Text } from 'components'
import { SideUserInfo } from '..'

import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer } from './styles'
import { colors } from 'styles'

const SideMenu = ({ open, data, user, colorMode, children }: PropsSideMenu) => (
  <SideContainer display="block" {...{ open }}>
    <ScrollContainer
      flexDirection="column"
      display={open ? 'flex' : 'none'}
      my={3}
    >
      <SideUserInfo {...{ user }} />
      {children}
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
    </ScrollContainer>
  </SideContainer>
)

export { SideMenu }
