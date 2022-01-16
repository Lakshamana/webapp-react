import { useState } from 'react'
import { Container, Popover } from 'components'
import { Channels, ChannelSearch, ChannelSelected } from '..'

import { PropsChannelSelector } from '../../types'
import { defaultProps } from './types'
import { CustomContainer } from './styles'

const ChannelSelector = ({
  display,
  onSelect,
  onSearch,
  channels,
  selected,
  colorMode,
  ...props
}: PropsChannelSelector) => {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
    onSearch(e.target.value)
  }

  const handleSelect = (channel: any) => {
    onSelect(channel)
    setOpen(false)
  }

  return (
    <CustomContainer
      {...props}
      display={display === 'menu'
        ? ['none', 'none', 'none', 'flex']
        : ['flex', 'flex', 'flex', 'none']
      }
      height={[50]}
    >
      <Popover
        display={display}
        isOpen={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        popoverTrigger={
          <button>
            <ChannelSelected {...{ selected, open, colorMode, display }} />
          </button>
        }
      >
        <Container flexDirection="column">
          <ChannelSearch {...{ search, colorMode }} onChange={handleSearch} />
          <Channels
            onSelect={handleSelect}
            {...{ channels, selected, colorMode }}
          />
        </Container>
      </Popover>
    </CustomContainer>
  )
}

ChannelSelector.defaultProps = defaultProps

export { ChannelSelector }
