import { Link } from 'react-router-dom'
import { useTabsStore } from 'services/stores'
import { Container, Text } from 'components'
import { PropsSideMenu } from '../../types'
import { SideContainer, ScrollContainer, Circle } from './styles'
import { colors } from 'styles'

const SideMenu = ({ open, colorMode, children }: PropsSideMenu) => {
  const { activeTab, setActiveTab, tabsList } = useTabsStore()
  return (
    <SideContainer display="block" {...{ open }}>
      {children}
      <ScrollContainer
        flexDirection="column"
        display={open ? 'flex' : 'none'}
        my={3}
        px={'20px'}
      >
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
      </ScrollContainer>
    </SideContainer>
  )
}

export { SideMenu }
