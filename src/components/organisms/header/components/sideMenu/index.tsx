import { Link } from 'react-router-dom'
import { useTabsStore } from 'services/stores'
import { Box } from '@chakra-ui/layout'
import { Container, Text } from 'components'
import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer, Circle } from './styles'
import { colors } from 'styles'

const SideMenu = ({ open, colorMode, children, data }: PropsSideMenu) => {
  const { activeTab, setActiveTab, tabsList } = useTabsStore()

  return (
    <SideContainer display="block" {...{ open }}>
      {children}
      <ScrollContainer flexDirection="column" my={3} px={'20px'}>
        <Box>
          {tabsList?.map((item: any) => {
            const isSelected = activeTab?.id === item.id
            return (
              <Link
                to={item.url}
                key={`Path-${item.id}`}
                onClick={() => setActiveTab(item)}
              >
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
        </Box>
        <Box>
          {data?.map((menu: any) => (
            <Link to={menu.url} key={`menu-${menu.id}`} onClick={() => {}}>
              <Container
                width={1}
                py={3}
                alignItems={'center'}
                justifyContent={'left'}
              >
                <Text
                  style={{
                    textTransform: 'uppercase',
                  }}
                  color={colors.generalText[colorMode]}
                >
                  {menu.name}
                </Text>
              </Container>
            </Link>
          ))}
        </Box>
      </ScrollContainer>
    </SideContainer>
  )
}

export { SideMenu }
