import { SortDirection } from "generated/graphql"

export interface IProps {
  totalComments: number
  loading: boolean
  filterBy: SortDirection
  handleFilterChange: any
}

export const defaultProps = {
  loading: true,
};
