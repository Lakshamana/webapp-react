import { useMemo } from "react";
import { Icon } from "@iconify/react-with-api";
import { useEffect, useRef } from "react";
import { Container, Popover, InputInline } from "components";
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
  colorMode,
}: PropsSearchBar) => {
  const triggerRef = useRef<any>();
  const colorSchema = useMemo(
    () =>
      colorMode === "light"
        ? {
            primary: "#000",
            background: "white",
            results: colors.background,
            section: colors.backgroundLayout,
          }
        : {
            primary: "#fff",
            results: colors.background,
            section: colors.backgroundLayout,
            background: colors.backgroundLayout,
          },
    [colorMode]
  );

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
        background={colorSchema.results}
        props={{
          isOpen: open,
          onOpen,
          isLazy: true,
          matchWidth: true,
        }}
        trigger={
          <CustomContainer
            px={[3]}
            flex={1}
            background={colorSchema.section}
            height={["70px", "70px", "70px", "100px"]}
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
              background="transparent"
              value={search}
              onChange={onSearch}
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
          <SearchPopover {...{ data }} />
        </Container>
      </Popover>
      <SearchContainer px={[0, 0, 0, 3]} onClick={onOpen} {...{ open }}>
        <Icon
          width={20}
          height={20}
          icon="bx:bx-search"
          color={colorSchema.primary}
        />
      </SearchContainer>
    </Section>
  );
};

export { SearchBar };
