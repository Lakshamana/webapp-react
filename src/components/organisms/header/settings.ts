import i18n from 'config/i18n'

export const MENU_TABS = [
  {
    id: 'home',
    label: i18n.t('header.tabs.home'),
    url: '/c/:channel',
  },
  {
    id: 'live',
    label: i18n.t('header.tabs.live'),
    url: '/c/:channel/livestreams',
  },
  {
    id: 'feed',
    label: i18n.t('header.tabs.feed'),
    url: '/c/:channel/feed',
  },
  {
    id: 'collections',
    label: i18n.t('header.tabs.collections'),
    url: '/c/:channel/collections',
  },
  {
    id: 'mylist',
    label: i18n.t('header.tabs.my_list'),
    url: '/c/:channel/mylist',
  },
  {
    id: 'tags',
    label: i18n.t('header.tabs.tags'),
    url: '/c/:channel/tags',
  },
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
