export const MENU_TABS = [
  {
    id: 'home',
    label: 'header.tabs.home',
    url: '/c/:channel',
  },
  {
    id: 'live',
    label: 'header.tabs.live',
    url: '/c/:channel/live',
  },
  {
    id: 'feed',
    label: 'header.tabs.feed',
    url: '/c/:channel/feed',
  },
  {
    id: 'categories',
    label: 'header.tabs.categories',
    url: '/c/:channel/categories',
  },
  {
    id: 'mylist',
    label: 'header.tabs.my_list',
    url: '/c/:channel/mylist',
  }
]

export const SEARCH_VALUES = [
  {
    label: 'Channels',
    id: '0-data',
    children: [
      { text: 'Channel name 1', id: '1' },
      { text: 'Channel name 2', id: '2' },
    ],
  },
  {
    label: 'Content',
    id: '1-data',
    children: [
      { text: 'Content title 1 (Channel name)', id: '11' },
      { text: 'Content title 2 (Channel name)', id: '2' },
    ],
  },
]

export const initialState: any = {
  search: '',
  selected: '',
  openMenu: false,
  openSearch: false,
}
