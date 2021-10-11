import { useEffect, useRef } from "react";
import { Container, Popover, InputInline } from "components";
import { Search as SearchIcon, X } from "react-feather";
import { SearchPopover } from "..";

import { PropsSearchBar } from "../../types";
import { SearchContainer, CustomContainer, Section } from "./styles";
import { colors } from "styles";

const SearchBar = ({
  data,
  open,
  onSearch,
  onClose,
  search,
  onOpen,
}: PropsSearchBar) => {
  const triggerRef = useRef<any>();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        open &&
        triggerRef?.current &&
        !triggerRef?.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <Section display="flex" alignItems="center" flex={1}>
      <Popover
        background={colors.backgroundLayout}
        props={{
          isOpen: open,
          onOpen,
          isLazy: true,
          matchWidth: true,
        }}
        trigger={
          <CustomContainer
            px={3}
            flex={1}
            background={colors.backgroundLayout}
            height={["70px", "70px", "70px", "100px"]}
            ref={triggerRef}
            {...{ open }}
          >
            <Container mr={2}>
              <SearchIcon color={colors.white} height={15} width={15} />
            </Container>

            <InputInline
              height="inherit"
              placeholder="Search"
              background="transparent"
              value={search}
              onChange={onSearch}
            />
            <Container ml={2} onClick={onClose}>
              <X color={colors.white} height={15} width={15} />
            </Container>
          </CustomContainer>
        }
      >
        <Container>
          <SearchPopover {...{ data }} />
        </Container>
      </Popover>
      <SearchContainer px={3} onClick={onOpen} {...{ open }}>
        <SearchIcon color={colors.white} height={20} width={20} />
      </SearchContainer>
    </Section>
  );
};

export { SearchBar };
