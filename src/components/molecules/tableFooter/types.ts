import { SpaceProps } from "styled-system";
export interface TableFooterProps extends SpaceProps {
  count: number;
  onChangePage: any;
  currentPage: number;
  limit: number;
  hasSelectionLimit?: boolean;
}

export const defaultProps = {
  hasSelectionLimit: false,
};
