import { Channel } from "./types";

export const MENUTABS = [
  { id: "home", label: "home", url: "/" },
  { id: "live", label: "live", url: "/" },
  { id: "feed", label: "feed", url: "/" },
  { id: "collections", label: "collections", url: "/" },
  { id: "list", label: "my list", url: "/" },
  { id: "settings", label: "settings", url: "/" },
  { id: "tools", label: "tools", url: "/" },
  { id: "example 1", label: "example", url: "/" },
];

export const CHANNELS: Array<Channel> = [
  {
    id: "channel1",
    name: "Channel name 1",
    url: "https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",
  },
  {
    id: "channel2",
    name: "Channel name 2",
    url: "https://www.logodesign.net/logo/abstract-cuboid-building-4519ld.png",
  },
];

export const DEFAULT_USER = {
  name: "Jorge Hidalgo",
  id: "11-user",
  avatar:
    "https://pixinvent.com/materialize-material-design-admin-template/app-assets/images/user/12.jpg",
};

export const SEARCH_VALUES = [
  {
    label: "Channels",
    id: "0-data",
    children: [
      { text: "Channel name 1", id: "1" },
      { text: "Channel name 2", id: "2" },
    ],
  },
  {
    label: "Content",
    id: "1-data",
    children: [
      { text: "Content title 1 (Channel name)", id: "11" },
      { text: "Content title 2 (Channel name)", id: "2" },
    ],
  },
];

export const initialState: any = {
  search: "",
  selected: "",
  openMenu: false,
  openSearch: false,
  channel: CHANNELS[0],
};
