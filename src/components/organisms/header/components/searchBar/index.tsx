import { useMemo } from 'react'
import { Icon } from '@iconify/react'
import { useEffect, useRef } from 'react'
import { Container, Popover, InputInline } from 'components'
import { SearchPopover } from '..'

import { PropsSearchBar } from '../../types'
import { SearchContainer, CustomContainer, Section } from './styles'
import { colors, sizes } from 'styles'

const SearchBar = ({
  data,
  open,
  onSearch,
  onClose,
  search,
  onOpen,
  colorMode,
}: PropsSearchBar) => {
  const triggerRef = useRef<any>()
  const colorSchema = useMemo(
    () =>
      colorMode === 'light'
        ? {
            primary: colors.generalText.light,
            background: colors.search.result.light,
            results: colors.search.result.light,
            section: colors.search.section.light,
          }
        : {
            primary: colors.generalText.dark,
            background: colors.search.result.dark,
            results: colors.search.result.dark,
            section: colors.search.section.dark,
          },
    [colorMode]
  )

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

  return (
    <Section display="flex" alignItems="center" flex={1}>
      <Popover
        background={colorSchema.results}
        isOpen={open}
        onOpen={onOpen}
        isLazy={true}
        matchWidth={true}
        gutter={0}
        popoverTrigger={
          <CustomContainer
            px={[3]}
            flex={1}
            background={colorSchema.results}
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
                color={colorSchema.primary}
              />
            </Container>

            <InputInline
              height="inherit"
              placeholder="Search"
              background={colorSchema.results}
              value={search}
              onChange={onSearch}
              color={colorSchema.primary}
            />
            <Container ml={2} onClick={onClose}>
              <Icon
                width={20}
                height={20}
                icon="bi:x"
                color={colorSchema.primary}
              />
            </Container>
          </CustomContainer>
        }
      >
        <Container>
          <SearchPopover
            data={data}
            textColor={colorSchema.primary}
            section={colorSchema.section}
          />
        </Container>
      </Popover>
      <SearchContainer onClick={onOpen} px={0} {...{ open }}>
        <Icon
          width={28}
          height={28}
          icon="mdi:magnify"
          color={colorSchema.primary}
        />
      </SearchContainer>
    </Section>
  )
}

export { SearchBar }
