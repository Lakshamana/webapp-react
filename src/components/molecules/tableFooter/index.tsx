import { memo, useEffect, useMemo } from "react";
import { Container, Button } from "components";
import { Icon } from "@iconify/react";

import { getPages } from "./utils";
import { TableFooterProps, defaultProps } from "./types";
import { colors } from "styles";
import { WrapperPagination } from "./styles";

const SimpleTableFooter = ({
  count,
  onChangePage,
  currentPage,
  limit,
  hasSelectionLimit,
  ...props
}: TableFooterProps) => {
  const countPages: any = useMemo(
    () => Math.round(count / limit + 0.4),
    [count, limit]
  );

  const pages = useMemo(
    () => getPages({ currentPage, countPages }),
    [countPages, currentPage]
  );

  const onChange = (nextPage: number) => {
    const skip = (nextPage - 1) * limit + 1;
    onChangePage(nextPage, skip - 1);
  };

  useEffect(() => {
    const start = currentPage * limit - limit + 1;
    if (start > count) {
      onChangePage(1, 0);
    }
  }, [count]);

  if (!count) return <></>;

  return (
    <Container {...props}>
      <WrapperPagination my={[2, 2, 0]}>
        <Button
          mx={1}
          type="children"
          onClick={() => currentPage !== 1 && onChange(currentPage - 1)}
        >
          <Icon width={20} icon="mdi:chevron-left" color={colors.white} />
        </Button>
        {pages[0] > 1 && (
          <>
            <Button onClick={() => onChange(1)} label="1" />
            <Button label="..." />
          </>
        )}
        <WrapperPagination>
          {pages.map((item, index) => (
            <Button
              mx={1}
              onClick={() => item !== currentPage && onChange(item)}
              key={`page_${item}_${index}`}
              label={`${item}`}
            />
          ))}
        </WrapperPagination>
        {pages[pages.length - 1] < countPages && (
          <>
            <Button label="..." />
            <Button
              mx={1}
              onClick={() => onChange(countPages)}
              label={countPages}
            />
          </>
        )}
        <Button
          mx={1}
          type="children"
          onClick={() =>
            currentPage !== countPages &&
            countPages > 1 &&
            onChange(currentPage + 1)
          }
        >
          <Icon width={20} icon="mdi:chevron-right" color={colors.white} />
        </Button>
      </WrapperPagination>
    </Container>
  );
};

SimpleTableFooter.defaultProps = defaultProps;

const TableFooter = memo(SimpleTableFooter);

export { TableFooter };
