import { SearchResults, ContentResults } from "./types";

export const handleContentSearch = (
  data: Array<SearchResults>,
  value: string
) => {
  const response: Array<SearchResults> = [];
  if (data.length && value) {
    data.forEach((content) => {
      if (content?.children?.length) {
        const results = content.children.filter((item: ContentResults) =>
          item.text.includes(value)
        );
        if (results.length) {
          response.push({ ...content, children: results });
        }
      }
    });
  }
  return response;
};

export const reducer = (state: any, { type, value }: any) => {
  const actions = ["search", "selected", "openMenu", "openSearch", "channel"];
  if (actions.includes(type)) {
    return { ...state, [type]: value };
  }
  return state;
};

export const getSelectedTab = (location: string) => {
  const routes = {
    "/home": "home",
    "/live": "live",
    "/feed": "feed",
    "/collections": "collections",
    "/mylist": "mylist",
  };
  if (location && routes[location]) return routes[location];

  return "";
};
