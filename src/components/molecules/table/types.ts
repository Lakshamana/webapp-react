export type HeaderType = {
  label: string;
  id: string;
  minWidth?: string;
  width?: string;
  render?: any;
};

export interface TableProps {
  columns: Array<HeaderType>;
  data: Array<any>;
  variant?: string;
  spacing?: any;
  defaultMessage?: string;
  count: number;
  limit?: number;
  hasSelectionLimit?: boolean;
  onChangePage: any;
  currentPage: number;
}

export const defaultProps = {
  variant: "default",
  hasSelectionLimit: false,
  spacing: {
    p: 3,
  },
};
