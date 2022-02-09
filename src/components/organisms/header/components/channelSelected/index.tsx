import { Icon } from '@iconify/react'
import { Container } from 'components'
import { PropsChannelSelected } from '../../types'
import { colors } from 'styles'
import { ChannelIcon, IconContainer } from './styles'

const ChannelSelected = ({
  selected,
  open,
  colorMode,
}: PropsChannelSelected) => {
  return (
    <Container alignItems="center">
      {selected ? (
        <Container alignItems="center">
          <ChannelIcon height={48} width={48} src={selected.url} />
        </Container>
      ) : (
        <></>
      )}
      <IconContainer {...{ open }}>
        <Icon
          width={24}
          height={24}
          icon="mdi:chevron-down"
          color={colors.secondaryText[colorMode]}
        />
      </IconContainer>
    </Container>
  )
}

export { ChannelSelected }
