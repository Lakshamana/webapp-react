import { Icon } from '@iconify/react'
import { Container, InputInline, Popover } from 'components'
import { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useChannelsStore } from 'services/stores'

import { colors, sizes } from 'styles'
import { PropsSearchBar } from '../../types'
import { CustomContainer, SearchContainer, Section } from './styles'

const SearchBar = ({ open, onClose, onOpen, colorMode }: PropsSearchBar) => {
  const triggerRef = useRef<any>()
  const history = useHistory()
  const [search, setSearch] = useState<string>('')
  const { activeChannel } = useChannelsStore()

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        open &&
        triggerRef?.current &&
        !triggerRef?.current.contains(event.target)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
    // eslint-disable-next-line
  }, [open])

  const handleSearch = (evt) => {
    setSearch(evt.target.value)
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search)
        history.push({
          pathname: `/c/${activeChannel?.slug}/search`,
          search: `?s=${search}`,
        })
    }, 800)

    return () => clearTimeout(delayDebounceFn)
    //eslint-disable-next-line
  }, [search])

  return (
    <Section display="flex" alignItems="center" flex={1}>
      <Popover
        background={colors.search.result[colorMode]}
        isOpen={open}
        onOpen={onOpen}
        isLazy={true}
        matchWidth={true}
        gutter={0}
        popoverTrigger={
          <CustomContainer
            px={[3]}
            flex={1}
            background={colors.search.result[colorMode]}
            height={[
              sizes.headerMobileHeight,
              sizes.headerMobileHeight,
              sizes.headerDesktopHeight,
            ]}
            ref={triggerRef}
            {...{ open }}
          >
            <Container mr={2}>
              <Icon
                width={20}
                height={20}
                icon="bx:bx-search"
                color={colors.generalText[colorMode]}
              />
            </Container>

            <InputInline
              height="inherit"
              placeholder="Search"
              background={colors.search.result[colorMode]}
              value={search}
              onChange={handleSearch}
              color={colors.generalText[colorMode]}
            />
            <Container ml={2} onClick={onClose}>
              <Icon
                width={20}
                height={20}
                icon="bi:x"
                color={colors.generalText[colorMode]}
              />
            </Container>
          </CustomContainer>
        }
      >
        <div></div>
      </Popover>
      <SearchContainer onClick={onOpen} px={0} {...{ open }}>
        <Icon
          width={28}
          height={28}
          icon="mdi:magnify"
          color={colors.generalText[colorMode]}
        />
      </SearchContainer>
    </Section>
  )
}

export { SearchBar }
