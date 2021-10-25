import { MAX_PAGES } from "./settings";

export const getPages = ({ currentPage, countPages }: any) => {
  if (!countPages || !currentPage) return [];

  const pages = Array.from(Array(countPages).keys()).map((item) => item + 1);

  if (countPages <= MAX_PAGES) return pages;

  if (currentPage === countPages)
    return pages.slice(currentPage - MAX_PAGES).splice(0, MAX_PAGES);

  if (currentPage === 1) return pages.slice(0).splice(0, MAX_PAGES);

  return pages
    .slice(currentPage > 3 ? currentPage - 3 : 0)
    .splice(0, MAX_PAGES);
};
