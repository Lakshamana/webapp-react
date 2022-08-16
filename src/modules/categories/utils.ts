import { MAX_CARDS_SCROLLER_RESULTS } from 'config/constants'

const sortBy = 'sort.asc'
const pageSize = MAX_CARDS_SCROLLER_RESULTS

export const featuredCategoriesFilter = (page: number) => {
  return {
    filter: {
      featured: true,
      sortBy,
      pageSize: 2,
      page,
    },
  }
}

export const categoriesWithoutChildrenFilter = (page: number) => {
  return {
    filter: {
      sortBy,
      isParent: false,
      isChild: false,
      pageSize,
      page,
    },
  }
}

export const categoriesWithChildrenFilter = (page: number) => {
  return {
    filter: {
      sortBy,
      isParent: true,
      pageSize,
      page,
    },
  }
}
