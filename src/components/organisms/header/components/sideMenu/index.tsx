import { Link } from 'react-router-dom'
import { Container, Text } from 'components'

import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer, Circle } from './styles'
import { colors } from 'styles'

const SideMenu = ({
  open,
  data,
  selected,
  colorMode,
  children,
}: PropsSideMenu) => (
  <SideContainer display="block" {...{ open }}>
    {children}
    <ScrollContainer
      flexDirection="column"
      display={open ? 'flex' : 'none'}
      my={3}
      px={'20px'}
    >
      {data?.map((item: any) => {
        const isSelected = selected === item.id
        return (
          <Link to={item.url} key={`Path-${item.id}`}>
            <Container
              width={1}
              py={3}
              alignItems={'center'}
              justifyContent={'left'}
            >
              {isSelected && <Circle />}
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: isSelected ? 'bold' : 'normal',
                }}
                color={
                  isSelected
                    ? colors.generalText[colorMode]
                    : colors.secondaryText[colorMode]
                }
              >
                {item.label}
              </Text>
            </Container>
          </Link>
        )
      })}
    </ScrollContainer>
  </SideContainer>
)

export { SideMenu }
