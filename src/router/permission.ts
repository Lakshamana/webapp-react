export const publicPermissionUnauthenticated = {
  dashboard: true,
  login: true,
  livechat: true,
  home: true,
  collections: true,
  mylist: true,
  tags: true,
  account: false,
  search: true,
  channels: true,
  feed: true,
  signup: true,
  recoverPassword: true,
  checkout: true,
};

export const publicPermissionAuthenticated = {
  dashboard: true,
  login: false,
  livechat: true,
  home: true,
  collections: true,
  mylist: true,
  tags: true,
  account: true,
  search: true,
  channels: true,
  feed: true,
  signup: true,
  recoverPassword: true,
  checkout: true,
};

export const exclusivePermissionUnauthenticated = {
  dashboard: false,
  login: true,
  livechat: false,
  home: false,
  collections: false,
  mylist: false,
  tags: false,
  account: false,
  search: false,
  channels: false,
  feed: false,
  signup: true,
  recoverPassword: true,
  checkout: true,
};

export const exclusivePermissionAuthenticated = {
  dashboard: true,
  login: false,
  livechat: true,
  home: true,
  collections: true,
  mylist: true,
  tags: true,
  account: true,
  search: true,
  channels: true,
  feed: true,
  signup: false,
  recoverPassword: false,
  checkout: true,
};

export const defaultPermission = {
  dashboard: true,
  login: true,
  livechat: true,
  home: true,
  collections: true,
  mylist: true,
  tags: true,
  account: true,
  search: true,
  channels: true,
  feed: true,
  signup: true,
  recoverPassword: true,
  checkout: true,
};
