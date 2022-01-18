import { Link } from 'react-router-dom'
import { Container, Text } from 'components'

import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer, Circle } from './styles'
import { colors } from 'styles'

const SideMenu = ({ open, data, selected, colorMode, children }: PropsSideMenu) => (
  <SideContainer display="block" {...{ open }}>
    <ScrollContainer
      flexDirection="column"
      display={open ? 'flex' : 'none'}
      my={3}
    >
      {children}
      {data?.map((item: any) => (
        <Link to={item.url} key={`Path-${item.id}`}>
          <Container width={1} pl={3} py={3} alignItems={'center'}>
            {selected === item.id && <Circle />}
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
