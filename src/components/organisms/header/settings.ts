import { Channel } from "./types";
import i18n from "config/i18n";

export const MENUTABS = [
  {
    id: "home",
    label: i18n.t("header.tabs.home"),
    url: "/home",
    style: { mx: "25px" },
  },
  {
    id: "live",
    label: i18n.t("header.tabs.live"),
    url: "/",
    style: { mx: "25px" },
  },
  {
    id: "feed",
    label: i18n.t("header.tabs.feed"),
    url: "/feed",
    style: { mx: "25px" },
  },
  {
    id: "collections",
    label: i18n.t("header.tabs.collections"),
    url: "/collections",
    style: { mx: "25px" },
  },
  {
    id: "mylist",
    label: i18n.t("header.tabs.my_list"),
    url: "/mylist",
    style: { ml: "25px" },
  },
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
  name: "Bia Silva",
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
