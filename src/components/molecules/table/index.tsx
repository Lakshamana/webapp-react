import { memo } from "react";
import { Text, Container, TableFooter } from "components";
import { Table as TableComponent } from "@chakra-ui/react";

import { colors } from "styles";
import { TableProps, HeaderType, defaultProps } from "./types";
import { Tr, Th, Td, Tbody, Thead } from "./styles";

const SimpleTable = ({
  columns,
  data,
  spacing,
  defaultMessage = "",
  count,
  onChangePage,
  limit = 10,
  currentPage,
  hasSelectionLimit,
  ...props
}: TableProps) => (
  <Container flexDirection="column">
    <TableComponent {...props}>
      <Thead>
        <Tr>
          {columns.map((column: HeaderType) => (
            <Th key={column.id} {...{ ...column, ...spacing }}>
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      {data?.length ? (
        <Tbody>
          {data.map((row: any) => (
            <Tr key={row.id}>
              {columns.map((column: HeaderType) => (
                <Td {...spacing}>
                  {column.render ? column.render(row) : row[column.id]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      ) : (
        <Container width={1} backgroundColor={colors.grey["850"]} {...spacing}>
          <Text color={colors.white}>{defaultMessage}</Text>
        </Container>
      )}
    </TableComponent>

    <TableFooter
      my={4}
      {...{ count, onChangePage, limit, currentPage, hasSelectionLimit }}
    />
  </Container>
);

SimpleTable.defaultProps = defaultProps;

const Table = memo(SimpleTable);

export { Table };
