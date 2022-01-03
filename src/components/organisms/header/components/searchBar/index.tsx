import { useMemo } from "react";
import { Icon } from "@iconify/react";
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
          gutter: 0,
        }}
        trigger={
          <CustomContainer
            px={[3]}
            flex={1}
            background={colorSchema.results}
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
              background={colorSchema.results}
              value={search}
              onChange={onSearch}
              color={colorSchema.primary}
              placeholderFontStyle="italic"
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
