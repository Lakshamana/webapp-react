import { SortDirection } from "generated/graphql"

export interface IProps {
  totalComments: number
  filterBy: SortDirection
  handleFilterChange: any
}
