import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  VoidScalar: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  firebaseToken: Scalars['String'];
};

export type Account = {
  __typename?: 'Account';
  /** createdAt */
  createdAt: Scalars['String'];
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  is_admin?: Maybe<Scalars['Boolean']>;
  is_super_user?: Maybe<Scalars['Boolean']>;
  is_tenant_user?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  /** Account organizations */
  organizations?: Maybe<Array<OrganizationPublicOutput>>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<Profile>;
  /** Account roles */
  roles?: Maybe<Array<RolesDto>>;
  status?: Maybe<AccountStatus>;
  tenant_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type AccountGdprLgpd = {
  __typename?: 'AccountGdprLgpd';
  accepted: Scalars['Boolean'];
  accepted_at: Scalars['DateTime'];
  account: Account;
  id: Scalars['ID'];
  ip: Scalars['String'];
};

export type AccountPinnedCategory = {
  __typename?: 'AccountPinnedCategory';
  account: Scalars['String'];
  category: Scalars['String'];
  id: Scalars['String'];
  pinned: Scalars['Boolean'];
  pinnedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountSession = {
  __typename?: 'AccountSession';
  _id: Scalars['ID'];
  account: Scalars['String'];
  created_at: Scalars['DateTime'];
  expires_in: Scalars['Float'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type AccountSortBy = {
  direction?: Maybe<SortDirection>;
  field: AccountSortFields;
};

export enum AccountSortFields {
  Email = 'email'
}

export type AccountStatus = {
  __typename?: 'AccountStatus';
  active?: Maybe<Scalars['Boolean']>;
  block_perm?: Maybe<Scalars['Boolean']>;
  block_temp?: Maybe<Scalars['DateTime']>;
  gdpr?: Maybe<Scalars['Boolean']>;
  pending_activation?: Maybe<Scalars['Boolean']>;
};

export type AddComment = {
  content: Scalars['String'];
  description: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
};

export type AddCommentVote = {
  comment: Scalars['String'];
  direction: CommentVoteDirectionEnum;
};

export type AddReaction = {
  post: Scalars['String'];
  reaction: Reaction;
};

export type AddReport = {
  description?: Maybe<Scalars['String']>;
  idReported: Scalars['String'];
  reason: Scalars['String'];
  type: ReportType;
};

export type AddedCommentVote = {
  __typename?: 'AddedCommentVote';
  comment: Comment;
  commentVote: CommentVote;
};

export type AudioInput = {
  duration: Scalars['Int'];
  filename: Scalars['String'];
  mp3Path: Scalars['String'];
  status?: Maybe<MediaStatusEnum>;
};

export type AvailableChannel = {
  __typename?: 'AvailableChannel';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<ChannelCustomizationOutput>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSON']>;
  geofence?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['JSON']>;
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
};

export type BanAccountTemporary = {
  banUntil: Scalars['DateTime'];
};

export type Billboard = {
  __typename?: 'Billboard';
  actions: Array<BillboardActionsOutput>;
  channel: Scalars['ID'];
  customization: BillboardCustomizationOutput;
  delay: Scalars['Int'];
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  organization: Scalars['ID'];
  sort: Scalars['Int'];
  target: Scalars['String'];
  title: Scalars['String'];
};

export type BillboardActionInput = {
  bgColor: Scalars['String'];
  borderColor: Scalars['String'];
  icon: Scalars['String'];
  label: Scalars['String'];
  route: Scalars['String'];
  textColor: Scalars['String'];
};

export type BillboardActionsOutput = {
  __typename?: 'BillboardActionsOutput';
  bgColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  route?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type BillboardCustomizationInput = {
  desktop: MediaCustomizationInput;
  mobile: MediaCustomizationInput;
};

export type BillboardCustomizationOutput = {
  __typename?: 'BillboardCustomizationOutput';
  desktop: MediaCustomizationOutput;
  mobile: MediaCustomizationOutput;
};

export type Category = {
  __typename?: 'Category';
  access?: Maybe<Scalars['String']>;
  channel: Scalars['ID'];
  children: Array<Category>;
  createdAt: Scalars['DateTime'];
  customization?: Maybe<CategoryCustomization>;
  description?: Maybe<Scalars['String']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  sort: Scalars['Int'];
  status?: Maybe<Status>;
  tag?: Maybe<Scalars['ID']>;
};


export type CategoryChildrenArgs = {
  filter?: Maybe<ChildrenCategoryFilter>;
};

export type CategoryCustomization = {
  __typename?: 'CategoryCustomization';
  desktop?: Maybe<MediaCustomizationOutput>;
  mobile?: Maybe<MediaCustomizationOutput>;
  thumbnail?: Maybe<MediaCustomizationOutput>;
};

export type CategoryCustomizationInput = {
  desktop?: Maybe<Scalars['ID']>;
  mobile?: Maybe<Scalars['ID']>;
  thumbnail?: Maybe<Scalars['ID']>;
};

export type CategoryFilter = {
  featured?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  parent?: Maybe<Scalars['ID']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type CategoryInput = {
  access?: Maybe<Scalars['String']>;
  customization?: Maybe<CategoryCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['JSONObject']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Scalars['JSONObject']>;
  isParent?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parent?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tag?: Maybe<Scalars['String']>;
};

export type Channel = AvailableChannel | GeolockedChannel;

export type ChannelCustomizationInput = {
  icon?: Maybe<ChannelCustomizationLightDarkInput>;
  logo?: Maybe<ChannelCustomizationLightDarkInput>;
  thumbnail?: Maybe<Scalars['ID']>;
};

export type ChannelCustomizationLightDarkInput = {
  dark?: Maybe<Scalars['ID']>;
  light?: Maybe<Scalars['ID']>;
};

export type ChannelCustomizationLightDarkOutput = {
  __typename?: 'ChannelCustomizationLightDarkOutput';
  dark?: Maybe<Scalars['ID']>;
  light?: Maybe<Scalars['ID']>;
};

export type ChannelCustomizationOutput = {
  __typename?: 'ChannelCustomizationOutput';
  icon?: Maybe<ChannelCustomizationLightDarkOutput>;
  logo?: Maybe<ChannelCustomizationLightDarkOutput>;
  thumbnail?: Maybe<Scalars['ID']>;
};

export type ChannelFindAllFilter = {
  limit?: Maybe<Scalars['Float']>;
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  status__contains?: Maybe<Scalars['String']>;
  status__exact?: Maybe<Scalars['String']>;
};

export enum ChannelKind {
  Closed = 'Closed',
  Exclusive = 'Exclusive',
  Paywall = 'Paywall',
  Public = 'Public'
}

export type ChildrenCategoryFilter = {
  featured?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
};

export type Comment = {
  __typename?: 'Comment';
  account: Scalars['String'];
  author?: Maybe<CommentAuthor>;
  content: Scalars['String'];
  countComments: Scalars['Float'];
  countUpVotes: Scalars['Float'];
  description: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Scalars['String']>;
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  parent?: Maybe<Scalars['String']>;
  post?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['DateTime']>;
};

export type CommentVote = {
  __typename?: 'CommentVote';
  account: Scalars['String'];
  countUpVotes: Scalars['Float'];
  direction: CommentVoteDirectionEnum;
  id: Scalars['String'];
};

export enum CommentVoteDirectionEnum {
  Downvote = 'DOWNVOTE',
  Novote = 'NOVOTE',
  Upvote = 'UPVOTE'
}

export type CreateAccountGdprLgpdInput = {
  accepted: Scalars['Boolean'];
  account: Scalars['String'];
};

export type CreateAccountInput = {
  custom_fields?: Maybe<Scalars['JSONObject']>;
  display_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type CreateAccountPinnnedCategory = {
  category: Scalars['String'];
  pinned: Scalars['Boolean'];
};

export type CreateAccountSessionInput = {
  account: Scalars['ID'];
  auth_provider?: Maybe<Scalars['String']>;
  expires_in?: Maybe<Scalars['Int']>;
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type CreateAccountSocialSignInDto = {
  accessToken: Scalars['String'];
  authProvider: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type CreateAudioPost = {
  access: PostAccess;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  entitlements: Array<Scalars['String']>;
  featuredAt: Scalars['DateTime'];
  geofence: GeofenceInput;
  inFeed: Scalars['Boolean'];
  kind?: Maybe<ChannelKind>;
  mediaId: Scalars['ID'];
  pushNotification: PushNotification;
  status: Scalars['String'];
  thumbnailId: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateBillboardInput = {
  actions?: Maybe<Array<BillboardActionInput>>;
  customization?: Maybe<BillboardCustomizationInput>;
  delay?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
  target: Scalars['String'];
  title: Scalars['String'];
};

export type CreateChannelInput = {
  customization?: Maybe<ChannelCustomizationInput>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  menu?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type CreateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type CreateEmailTemplateDto = {
  name: Scalars['String'];
  template: Scalars['String'];
  type: Scalars['String'];
};

export type CreateGroupDto = {
  default?: Maybe<Scalars['Boolean']>;
  /** Group description */
  description?: Maybe<Scalars['String']>;
  /** Group name */
  name: Scalars['String'];
  public?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Scalars['ID']>>;
};

export type CreateMediaInput = {
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  filename: Scalars['String'];
  height?: Maybe<Scalars['Float']>;
  hlsPath?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  thumbnailPath?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Float']>;
};

export type CreateMenu = {
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  route: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
};

export type CreateOrganizationInput = {
  kind: Scalars['String'];
  name: Scalars['String'];
};

export type CreatePermissionInput = {
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['ID'];
};

export type CreatePhotoPost = {
  access: PostAccess;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  entitlements: Array<Scalars['String']>;
  featuredAt: Scalars['DateTime'];
  geofence: GeofenceInput;
  inFeed: Scalars['Boolean'];
  kind?: Maybe<ChannelKind>;
  mediaId: Scalars['ID'];
  pushNotification: PushNotification;
  status: Scalars['String'];
  title: Scalars['String'];
};

export type CreatePlaylistInput = {
  /** Array of content ids */
  contents?: Maybe<Array<Scalars['ID']>>;
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type CreateRoleInput = {
  default?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Scalars['ID']>;
  public?: Maybe<Scalars['Boolean']>;
};

export type CreateSubjectInput = {
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
};

export type CreateTagInput = {
  description?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateTextPost = {
  access: PostAccess;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  entitlements: Array<Scalars['String']>;
  featuredAt: Scalars['DateTime'];
  geofence: GeofenceInput;
  inFeed: Scalars['Boolean'];
  kind?: Maybe<ChannelKind>;
  mediaId: Scalars['ID'];
  pushNotification: PushNotification;
  status: Scalars['String'];
  title: Scalars['String'];
};

export type CreateUploadInput = {
  bucket?: Maybe<Scalars['String']>;
  expireIn?: Maybe<Scalars['Float']>;
  expired?: Maybe<Scalars['Boolean']>;
  filename: Scalars['String'];
  status?: Maybe<UploadStatusEnum>;
  url?: Maybe<Scalars['String']>;
};

export type CreateVideoPost = {
  access: PostAccess;
  categories: Array<Scalars['String']>;
  description: Scalars['String'];
  entitlements: Array<Scalars['String']>;
  featuredAt: Scalars['DateTime'];
  geofence: GeofenceInput;
  inFeed: Scalars['Boolean'];
  kind?: Maybe<ChannelKind>;
  mediaId: Scalars['ID'];
  pushNotification: PushNotification;
  status: Scalars['String'];
  thumbnailId: Scalars['ID'];
  title: Scalars['String'];
};

export type CustomFieldInput = {
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: CustomFieldTypesEnum;
};

export enum CustomFieldTypesEnum {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  String = 'STRING'
}

export type EmailResponseEnvelopeDto = {
  __typename?: 'EmailResponseEnvelopeDTO';
  /** message sender */
  from: Scalars['String'];
  /** email what message will be delivered */
  to: Scalars['String'];
};

export type EmailSent = {
  __typename?: 'EmailSent';
  sent: Scalars['Boolean'];
};

export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  _id: Scalars['ID'];
  channel?: Maybe<Scalars['ID']>;
  deleted_at?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  template: Scalars['String'];
  type: Scalars['String'];
};

export type Embed = {
  __typename?: 'Embed';
  channel: Scalars['ID'];
  code: Scalars['String'];
  customization: Scalars['JSONObject'];
  id: Scalars['ID'];
  uploadedAt: Scalars['DateTime'];
};

export type EmbedFilterInput = {
  customization?: Maybe<SearchFilterOperator>;
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};

export type EmbedInput = {
  code: Scalars['String'];
  customization: Scalars['JSONObject'];
};

export type EngagedUser = {
  __typename?: 'EngagedUser';
  displayName: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  organization: Scalars['String'];
  tenant: Scalars['String'];
  username: Scalars['String'];
};

export type FilterFindAll = {
  account?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  expireIn?: Maybe<FilterRange>;
  expired?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
};

export type FilterPinnedCategories = {
  account?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
};

export type FilterPlaylistsInput = {
  channel?: Maybe<Scalars['ID']>;
  contents?: Maybe<Array<Scalars['ID']>>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  posts?: Maybe<Array<Scalars['ID']>>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type FindAllGroupsRequestDto = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
};

export type FindAllMediasInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type FindAllQueryParamsDto = {
  email__exact?: Maybe<Scalars['String']>;
  first_name__contains?: Maybe<Scalars['String']>;
  first_name__exact?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  last_name__contains?: Maybe<Scalars['String']>;
  last_name__exact?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  username__contains?: Maybe<Scalars['String']>;
  username__exact?: Maybe<Scalars['String']>;
};

export type FindAllRolesRequestDto = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
};

export type FindAllSubjectsQueryParamsDto = {
  entity__contains?: Maybe<Scalars['String']>;
  entity__exact?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
};

export type FindBillboardsInput = {
  target?: Maybe<Scalars['String']>;
};

export type FindManyTagsInput = {
  channel?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
};

export enum FindPostCommentSortFields {
  CreatedAt = 'createdAt'
}

export type FindPostCommentsSort = {
  direction?: Maybe<SortDirection>;
  field: FindPostCommentSortFields;
};

export type ForgetAccountInput = {
  currentPassword: Scalars['String'];
};

export type ForgotPassword = {
  email: Scalars['String'];
};

export enum GeoFenceType {
  Blacklist = 'BLACKLIST',
  Whitelist = 'WHITELIST'
}

export type GeofenceInput = {
  countryCodes: Array<Scalars['String']>;
  type: GeoFenceType;
};

export type GeolockedChannel = {
  __typename?: 'GeolockedChannel';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<ChannelCustomizationOutput>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSON']>;
  geofence?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  kind?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['JSON']>;
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
};

export type GroupDto = {
  __typename?: 'GroupDto';
  channel?: Maybe<Scalars['ID']>;
  default: Scalars['Boolean'];
  /** Group description */
  description: Scalars['String'];
  /** Id */
  id: Scalars['String'];
  /** Group name */
  name: Scalars['String'];
  public: Scalars['Boolean'];
  /** Group roles */
  roles: Array<RolesDto>;
};

export type GroupsSortBy = {
  direction?: Maybe<SortDirection>;
  field: GroupsSortFields;
};

export enum GroupsSortFields {
  Name = 'name'
}

export type Me = {
  __typename?: 'Me';
  account: Account;
  /** Id */
  id: Scalars['String'];
  organization: OrganizationPublicOutput;
  profile: Profile;
};

export type Media = {
  __typename?: 'Media';
  account: Scalars['ID'];
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  filename: Scalars['String'];
  height?: Maybe<Scalars['String']>;
  hlsPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<Scalars['String']>;
  status: MediaStatusEnum;
  thumbnailPath?: Maybe<Array<Scalars['String']>>;
  type: MediaTypeEnum;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['String']>;
};

export type MediaAudio = {
  __typename?: 'MediaAudio';
  account?: Maybe<Scalars['ID']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
};

export type MediaCustomizationInput = {
  imgPath: Scalars['String'];
};

export type MediaCustomizationOutput = {
  __typename?: 'MediaCustomizationOutput';
  imgPath?: Maybe<Scalars['String']>;
};

export enum MediaOrientation {
  Landscape = 'Landscape',
  Portrait = 'Portrait'
}

export type MediaPhoto = {
  __typename?: 'MediaPhoto';
  account?: Maybe<Scalars['ID']>;
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  imgPath?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Int']>;
};

export enum MediaStatusEnum {
  AudioComplete = 'AudioComplete',
  Complete = 'Complete',
  ImageComplete = 'ImageComplete',
  Ingest = 'Ingest',
  Processing = 'Processing',
  Ready = 'Ready',
  Transcoding = 'Transcoding',
  Uploaded = 'Uploaded',
  Uploading = 'Uploading'
}

export enum MediaTypeEnum {
  Audio = 'Audio',
  Image = 'Image',
  Video = 'Video'
}

export type MediaUnion = MediaAudio | MediaPhoto | MediaVideo;

export type MediaVideo = {
  __typename?: 'MediaVideo';
  account?: Maybe<Scalars['ID']>;
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  hlsPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  thumbnailPath?: Maybe<Scalars['String']>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['String']>;
};

export type Menu = {
  __typename?: 'Menu';
  channel?: Maybe<Scalars['String']>;
  children?: Maybe<Menu>;
  deleted?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  parameters?: Maybe<Parameters>;
  parent?: Maybe<Menu>;
  platformExclusive?: Maybe<PlatformExclusive>;
  route?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activeAccount: Account;
  addComment: Comment;
  addReaction: Array<ReactionsAggregate>;
  addReport: Report;
  addVote: AddedCommentVote;
  banAccountPerm: Account;
  banAccountTemp: Account;
  bindChannelAndOrganization: Account;
  createAccount: Account;
  createAccountGdprLgpd: AccountGdprLgpd;
  createAccountSession: AccountSession;
  createAudioMedia: MediaAudio;
  createAudioPost: Post;
  createBillboard: Billboard;
  createCategory: Category;
  createChannel: AvailableChannel;
  createCustomField: ResponseCustomFieldsOutput;
  createEmailTemplate: EmailTemplate;
  createEmbed: Embed;
  createGroup: GroupDto;
  createMedia: Media;
  createMenu: Menu;
  createOrganization: Organization;
  createPermission: PermissionDto;
  createPhotoMedia: MediaPhoto;
  createPhotoPost: Post;
  createPlaylist: PlaylistOutput;
  createPublicUpload: ResponseUploadCreation;
  createRole: RolesDto;
  createSubject: SubjectDto;
  createTag: TagOutput;
  createTenantAccount: Account;
  createTextPost: Post;
  createUpload: ResponseUploadCreation;
  createVideoMedia: MediaVideo;
  createVideoPost: Post;
  deactiveAccount: Account;
  deleteAccountPinnedCategory: AccountPinnedCategory;
  deleteBillboard: Billboard;
  deleteCategory: Category;
  deleteComment: Comment;
  deleteCustomField: ResponseCustomFieldsOutput;
  deleteEmbed: Embed;
  deleteMedia: MediaUnion;
  deleteMenu: Menu;
  deleteMyAccount: Account;
  deletePost: Post;
  deleteUpload: ResponseUploadOutput;
  forgetAccount: Account;
  pinCategory: AccountPinnedCategory;
  publishRemoteConfig: PublishRemoteConfig;
  refreshToken: RefreshSignIn;
  removeAccount: Account;
  removeAccountGdprLgpd: AccountGdprLgpd;
  removeAccountSession: AccountSession;
  removeChannel: Channel;
  removeEmailTemplate: EmailTemplate;
  removeGroup: GroupDto;
  removeOrganization: Organization;
  removePermission: PermissionDto;
  removePlaylist: PlaylistOutput;
  removeProfile: Profile;
  removeReaction: Array<ReactionsAggregate>;
  removeRole: RolesDto;
  removeSubject: SubjectDto;
  removeTag: TagOutput;
  resetPassword: EmailSent;
  sendEmail: ResponseEmailSendedDto;
  signIn: SingIn;
  signInTenantUser: SingIn;
  signOut: Scalars['VoidScalar'];
  socialSignIn: SingIn;
  startMediaUpload: ResponseMediaUploadOutput;
  unbanAccountPerm: Account;
  unbanAccountTemp: Account;
  unpinAccountPinnedCategory: AccountPinnedCategory;
  updateAccount: Account;
  updateAccountGdprLgpd: AccountGdprLgpd;
  updateAccountPinnedCategory: AccountPinnedCategory;
  updateAccountSession: AccountSession;
  updateAudioPost: Post;
  updateBillboard: Billboard;
  updateCategory: Category;
  updateChannel: Channel;
  updateComment: Comment;
  updateCustomField: ResponseCustomFieldsOutput;
  updateEmailTemplate: EmailTemplate;
  updateEmbed: Embed;
  updateGroup: GroupDto;
  updateIsAdminAccount: Account;
  updateMediaAudio: MediaAudio;
  updateMediaPhoto: MediaPhoto;
  updateMediaVideo: MediaVideo;
  updateMenu: Menu;
  updateMyAccount: Account;
  updateMyProfile: Profile;
  updateOrganization: Organization;
  updatePassword: PasswordChanged;
  updatePasswordOnly: PasswordOnlyChanged;
  updatePermission: PermissionDto;
  updatePhotoPost: Post;
  updatePlaylist: PlaylistOutput;
  updateProfile: Profile;
  updateRole: RolesDto;
  updateSubject: SubjectDto;
  updateTag: TagOutput;
  updateTextPost: Post;
  updateUpload: ResponseUploadOutput;
  updateVideoPost: Post;
  verifyMail: VerifyMail;
};


export type MutationActiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationAddCommentArgs = {
  payload: AddComment;
};


export type MutationAddReactionArgs = {
  input: AddReaction;
};


export type MutationAddReportArgs = {
  payload: AddReport;
};


export type MutationAddVoteArgs = {
  input: AddCommentVote;
};


export type MutationBanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationBanAccountTempArgs = {
  account: Scalars['String'];
  input: BanAccountTemporary;
};


export type MutationBindChannelAndOrganizationArgs = {
  accountId: Scalars['ID'];
  channelId: Scalars['ID'];
  organizationId: Scalars['ID'];
};


export type MutationCreateAccountArgs = {
  createAccountInput: CreateAccountInput;
};


export type MutationCreateAccountGdprLgpdArgs = {
  payload: CreateAccountGdprLgpdInput;
};


export type MutationCreateAccountSessionArgs = {
  input: CreateAccountSessionInput;
};


export type MutationCreateAudioMediaArgs = {
  payload: AudioInput;
};


export type MutationCreateAudioPostArgs = {
  payload: CreateAudioPost;
};


export type MutationCreateBillboardArgs = {
  payload: CreateBillboardInput;
};


export type MutationCreateCategoryArgs = {
  payload: CategoryInput;
};


export type MutationCreateChannelArgs = {
  payload: CreateChannelInput;
};


export type MutationCreateCustomFieldArgs = {
  payload: CreateCustomFieldInput;
};


export type MutationCreateEmailTemplateArgs = {
  payload: CreateEmailTemplateDto;
};


export type MutationCreateEmbedArgs = {
  payload: EmbedInput;
};


export type MutationCreateGroupArgs = {
  payload: CreateGroupDto;
};


export type MutationCreateMediaArgs = {
  payload: CreateMediaInput;
};


export type MutationCreateMenuArgs = {
  payload: CreateMenu;
};


export type MutationCreateOrganizationArgs = {
  payload: CreateOrganizationInput;
};


export type MutationCreatePermissionArgs = {
  payload: CreatePermissionInput;
};


export type MutationCreatePhotoMediaArgs = {
  payload: PhotoInput;
};


export type MutationCreatePhotoPostArgs = {
  payload: CreatePhotoPost;
};


export type MutationCreatePlaylistArgs = {
  payload: CreatePlaylistInput;
};


export type MutationCreatePublicUploadArgs = {
  payload: CreateUploadInput;
};


export type MutationCreateRoleArgs = {
  payload: CreateRoleInput;
};


export type MutationCreateSubjectArgs = {
  payload: CreateSubjectInput;
};


export type MutationCreateTagArgs = {
  payload: CreateTagInput;
};


export type MutationCreateTenantAccountArgs = {
  createAccountInput: CreateAccountInput;
};


export type MutationCreateTextPostArgs = {
  payload: CreateTextPost;
};


export type MutationCreateUploadArgs = {
  payload: CreateUploadInput;
};


export type MutationCreateVideoMediaArgs = {
  payload: VideoInput;
};


export type MutationCreateVideoPostArgs = {
  payload: CreateVideoPost;
};


export type MutationDeactiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationDeleteAccountPinnedCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteBillboardArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCustomFieldArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteEmbedArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMyAccountArgs = {
  input: ForgetAccountInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUploadArgs = {
  id: Scalars['String'];
};


export type MutationForgetAccountArgs = {
  id: Scalars['ID'];
  input: ForgetAccountInput;
};


export type MutationPinCategoryArgs = {
  payload: CreateAccountPinnnedCategory;
};


export type MutationPublishRemoteConfigArgs = {
  payload: RemoteConfig;
};


export type MutationRemoveAccountArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveAccountGdprLgpdArgs = {
  account: Scalars['ID'];
};


export type MutationRemoveAccountSessionArgs = {
  id: Scalars['String'];
};


export type MutationRemoveChannelArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationRemovePlaylistArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProfileArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveReactionArgs = {
  input: RemoveReaction;
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveSubjectArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  payload: ForgotPassword;
};


export type MutationSendEmailArgs = {
  payload: SendEmailDto;
};


export type MutationSignInArgs = {
  payload: SignInInput;
};


export type MutationSignInTenantUserArgs = {
  payload: SignInInput;
};


export type MutationSignOutArgs = {
  payload: RefreshTokenInput;
};


export type MutationSocialSignInArgs = {
  input: CreateAccountSocialSignInDto;
};


export type MutationStartMediaUploadArgs = {
  payload: StartMediaUploadInput;
};


export type MutationUnbanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationUnbanAccountTempArgs = {
  account: Scalars['String'];
};


export type MutationUnpinAccountPinnedCategoryArgs = {
  id: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  id: Scalars['ID'];
  payload: UpdateAccountInput;
};


export type MutationUpdateAccountGdprLgpdArgs = {
  account: Scalars['ID'];
  payload: UpdateAccountGdprLgpdInput;
};


export type MutationUpdateAccountPinnedCategoryArgs = {
  id: Scalars['String'];
  input: UpdateAccountPinnedCategory;
};


export type MutationUpdateAccountSessionArgs = {
  id: Scalars['String'];
  updateAccountSessionInput: UpdateAccountSessionInput;
};


export type MutationUpdateAudioPostArgs = {
  id: Scalars['String'];
  payload: UpdateAudioPost;
};


export type MutationUpdateBillboardArgs = {
  id: Scalars['ID'];
  payload: UpdateBillboardInput;
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['String'];
  payload: UpdateCategoryInput;
};


export type MutationUpdateChannelArgs = {
  id: Scalars['ID'];
  payload: UpdateChannelInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['String'];
  payload: UpdateComment;
};


export type MutationUpdateCustomFieldArgs = {
  id: Scalars['ID'];
  payload: UpdateCustomFieldInput;
};


export type MutationUpdateEmailTemplateArgs = {
  id: Scalars['ID'];
  payload: UpdateEmailTemplateDto;
};


export type MutationUpdateEmbedArgs = {
  id: Scalars['String'];
  payload: UpdateEmbed;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID'];
  payload: UpdateGroupDto;
};


export type MutationUpdateIsAdminAccountArgs = {
  payload: UpdateAccountIsAdminInput;
};


export type MutationUpdateMediaAudioArgs = {
  id: Scalars['String'];
  payload: UpdateMediaAudio;
};


export type MutationUpdateMediaPhotoArgs = {
  id: Scalars['String'];
  payload: UpdateMediaPhoto;
};


export type MutationUpdateMediaVideoArgs = {
  id: Scalars['String'];
  payload: UpdateMediaVideo;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ID'];
  payload?: Maybe<UpdateMenu>;
};


export type MutationUpdateMyAccountArgs = {
  payload: UpdateAccountInput;
};


export type MutationUpdateMyProfileArgs = {
  payload: UpdateProfileInput;
};


export type MutationUpdateOrganizationArgs = {
  id: Scalars['ID'];
  payload: UpdateOrganizationInput;
};


export type MutationUpdatePasswordArgs = {
  payload: UpdatePassword;
};


export type MutationUpdatePasswordOnlyArgs = {
  payload: UpdatePasswordOnlyInput;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  payload: UpdatePermissionInput;
};


export type MutationUpdatePhotoPostArgs = {
  id: Scalars['String'];
  payload: UpdatePhotoPost;
};


export type MutationUpdatePlaylistArgs = {
  id: Scalars['ID'];
  payload: UpdatePlaylistInput;
};


export type MutationUpdateProfileArgs = {
  account: Scalars['ID'];
  payload: UpdateProfileInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  payload: UpdateRoleInput;
};


export type MutationUpdateSubjectArgs = {
  id: Scalars['ID'];
  payload: UpdateSubjectInput;
};


export type MutationUpdateTagArgs = {
  id: Scalars['ID'];
  payload: UpdateTagInput;
};


export type MutationUpdateTextPostArgs = {
  id: Scalars['String'];
  payload: UpdateTextPost;
};


export type MutationUpdateUploadArgs = {
  id: Scalars['String'];
  payload: UpdateUploadInput;
};


export type MutationUpdateVideoPostArgs = {
  id: Scalars['String'];
  payload: UpdateVideoPost;
};


export type MutationVerifyMailArgs = {
  payload: VerifyEmailDto;
};

export type Organization = {
  __typename?: 'Organization';
  audioCdnBaseUrl?: Maybe<Scalars['String']>;
  avatarCdnBaseUrl?: Maybe<Scalars['String']>;
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  email_settings?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  imageCdnBaseUrl?: Maybe<Scalars['String']>;
  itunes_id?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onesignal_id?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  settings?: Maybe<OrganizationSettings>;
  status?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  web_url?: Maybe<Array<Scalars['String']>>;
};

export type OrganizationFindAllFilter = {
  limit?: Maybe<Scalars['Float']>;
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  sort?: Maybe<OrganizationSortArs>;
  status?: Maybe<Scalars['String']>;
  web_url__exact?: Maybe<Scalars['String']>;
};

export type OrganizationPublic = {
  __typename?: 'OrganizationPublic';
  audioCdnBaseUrl?: Maybe<Scalars['String']>;
  avatarCdnBaseUrl?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  imageCdnBaseUrl?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  settings?: Maybe<OrganizationPublicSettings>;
  status?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  web_url?: Maybe<Array<Scalars['String']>>;
};

export type OrganizationPublicCustomization = {
  __typename?: 'OrganizationPublicCustomization';
  configuration?: Maybe<Scalars['String']>;
  favIcon?: Maybe<Scalars['String']>;
  loginImage?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type OrganizationPublicOutput = {
  __typename?: 'OrganizationPublicOutput';
  audioCdnBaseUrl?: Maybe<Scalars['String']>;
  avatarCdnBaseUrl?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<OrganizationPublicCustomization>;
  /** Id */
  id: Scalars['String'];
  identifier?: Maybe<Scalars['String']>;
  imageCdnBaseUrl?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  settings?: Maybe<OrganizationPublicSettings>;
  status?: Maybe<Scalars['String']>;
  web_url?: Maybe<Scalars['String']>;
};

export type OrganizationPublicSettings = {
  __typename?: 'OrganizationPublicSettings';
  bucket?: Maybe<Scalars['String']>;
};

export type OrganizationSettings = {
  __typename?: 'OrganizationSettings';
  apple?: Maybe<Scalars['JSON']>;
  aws?: Maybe<Scalars['JSON']>;
  bex?: Maybe<Scalars['JSON']>;
  bucket?: Maybe<Scalars['String']>;
  defaultGeofence?: Maybe<Scalars['JSON']>;
  facebook?: Maybe<Scalars['JSON']>;
  firebase?: Maybe<Scalars['JSON']>;
  language?: Maybe<Scalars['String']>;
  sessionsLimit?: Maybe<Scalars['JSON']>;
  spreedly?: Maybe<Scalars['JSON']>;
  stripe?: Maybe<Scalars['JSON']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  zoho?: Maybe<Scalars['JSON']>;
};

export type OrganizationSortArs = {
  direction?: Maybe<SortDirection>;
  field?: Maybe<OrganizationSortFields>;
};

export enum OrganizationSortFields {
  Name = 'name'
}

export type PaginatedCategoriesOutput = {
  __typename?: 'PaginatedCategoriesOutput';
  count: Scalars['Float'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Category>;
};

export type PaginationArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sortby?: Maybe<Scalars['String']>;
};

export type Parameters = {
  __typename?: 'Parameters';
  id: Scalars['ID'];
  missing?: Maybe<Scalars['String']>;
};

export type PasswordChanged = {
  __typename?: 'PasswordChanged';
  success: Scalars['Boolean'];
};

export type PasswordOnlyChanged = {
  __typename?: 'PasswordOnlyChanged';
  success: Scalars['Boolean'];
};

export type PermissionDto = {
  __typename?: 'PermissionDto';
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  /** Id */
  id: Scalars['String'];
  name: Scalars['String'];
  subject: SubjectDto;
};

export type PermissionsSortBy = {
  direction?: Maybe<SortDirection>;
  field: PermissionsSortFields;
};

export enum PermissionsSortFields {
  Name = 'name'
}

export type PhotoInput = {
  filename: Scalars['String'];
  height: Scalars['Int'];
  imgPath: Scalars['String'];
  status?: Maybe<MediaStatusEnum>;
  width: Scalars['Int'];
};

export enum PlatformExclusive {
  Mobile = 'Mobile',
  Web = 'Web'
}

export type PlaylistOutput = {
  __typename?: 'PlaylistOutput';
  channel: Scalars['ID'];
  contents: Array<Scalars['ID']>;
  id: Scalars['ID'];
  posts: Array<Scalars['ID']>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type PlaylistsOutput = {
  __typename?: 'PlaylistsOutput';
  count: Scalars['Float'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<PlaylistOutput>;
};

export type Post = {
  __typename?: 'Post';
  access: Scalars['String'];
  account: Scalars['ID'];
  allowComments: Scalars['Boolean'];
  categories: Array<Category>;
  channel: Scalars['ID'];
  countComments: Scalars['Int'];
  countReactions: Scalars['Int'];
  countUniqueCommenters: Scalars['Int'];
  description: Scalars['String'];
  devices: Scalars['JSONObject'];
  embed: Scalars['ID'];
  engagedUsers: Array<EngagedUser>;
  entitlements: Scalars['JSONObject'];
  excerpt: Scalars['JSONObject'];
  featured: Scalars['Boolean'];
  folder: Scalars['ID'];
  geofence: Scalars['JSONObject'];
  id: Scalars['ID'];
  inFeed: Scalars['Boolean'];
  kind: Scalars['String'];
  media?: Maybe<MediaUnion>;
  playlists?: Maybe<Array<PlaylistOutput>>;
  publishedAt: Scalars['DateTime'];
  pushNotification: Scalars['Boolean'];
  reactions: Array<PostReactions>;
  schedule: Scalars['DateTime'];
  slug: Scalars['String'];
  status: Scalars['String'];
  tags: Array<Scalars['ID']>;
  teaser: Scalars['ID'];
  thumbnail: MediaPhoto;
  title: Scalars['String'];
  type: Scalars['String'];
};

export enum PostAccess {
  Exclusive = 'EXCLUSIVE',
  Granted = 'GRANTED',
  Public = 'PUBLIC',
  Subscriber = 'SUBSCRIBER'
}

export type PostFilter = {
  category?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Float']>;
  publishedAt?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Float']>;
  sort?: Maybe<PostSort>;
  type?: Maybe<PostType>;
  typeIn?: Maybe<Array<PostType>>;
  typeNot?: Maybe<PostType>;
  typeNotIn?: Maybe<Array<PostType>>;
};

export type PostReactions = {
  __typename?: 'PostReactions';
  count: Scalars['Int'];
  name: Scalars['String'];
};

export type PostSort = {
  direction?: Maybe<SortDirection>;
  field?: Maybe<PostSortEnum>;
};

export enum PostSortEnum {
  Access = 'access',
  Account = 'account',
  AllowComments = 'allowComments',
  AudioArtist = 'audioArtist',
  AudioTitle = 'audioTitle',
  Categories = 'categories',
  Channel = 'channel',
  CreatedAt = 'createdAt',
  Description = 'description',
  Embed = 'embed',
  Entitlements = 'entitlements',
  Excerpt = 'excerpt',
  Featured = 'featured',
  FeaturedAt = 'featuredAt',
  Folder = 'folder',
  InFeed = 'inFeed',
  Kind = 'kind',
  Media = 'media',
  Playlists = 'playlists',
  PublishedAt = 'publishedAt',
  PushNotification = 'pushNotification',
  Schedule = 'schedule',
  Slug = 'slug',
  Status = 'status',
  Tags = 'tags',
  Teaser = 'teaser',
  Title = 'title',
  Type = 'type'
}

export enum PostType {
  Audio = 'AUDIO',
  OnDemand = 'ON_DEMAND',
  Photo = 'PHOTO',
  Poll = 'POLL',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type Profile = {
  __typename?: 'Profile';
  account: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  avatar_dynamic_url?: Maybe<Scalars['String']>;
  avatar_path?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  cpf?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  custom_fields?: Maybe<Scalars['JSONObject']>;
  gender?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type PublishRemoteConfig = {
  __typename?: 'PublishRemoteConfig';
  configuration?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PushNotification = {
  content?: Maybe<Scalars['String']>;
  ignore?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountGdprLgpd: AccountGdprLgpd;
  accountPinnedCategories: Array<AccountPinnedCategory>;
  accountPinnedCategory: AccountPinnedCategory;
  accountSession: AccountSession;
  accountSessions: Array<AccountSession>;
  accounts: Array<Account>;
  accountsCount: ResponseAccountsCount;
  accountsGdprLgpd: Array<AccountGdprLgpd>;
  billboard: Billboard;
  billboards: Array<Billboard>;
  categories: PaginatedCategoriesOutput;
  category: Category;
  channel: Channel;
  channels: Array<Channel>;
  checkChannel: ResponseAvailabilityOutput;
  checkOrg: ResponseAvailabilityOutput;
  comments: Array<Comment>;
  countAccountPinnedCategory: Scalars['Float'];
  countPermissions: Scalars['Int'];
  countRoles: Scalars['Float'];
  countSubjects: Scalars['Int'];
  customField: ResponseCustomFieldsOutput;
  customFields: Array<ResponseCustomFieldsOutput>;
  emailTemplate: EmailTemplate;
  emailTemplates: Array<EmailTemplate>;
  embed: Embed;
  embeds: Array<Embed>;
  embedsCount: Scalars['Float'];
  group: GroupDto;
  groups: Array<GroupDto>;
  me: Me;
  media: MediaUnion;
  mediaCount: Scalars['Int'];
  medias: Array<MediaUnion>;
  menu: Menu;
  menus: Array<Menu>;
  organization: Organization;
  organizationPublicSettings: OrganizationPublic;
  organizations: Array<Organization>;
  permission: PermissionDto;
  permissions: Array<PermissionDto>;
  playlist: PlaylistOutput;
  playlists: PlaylistsOutput;
  post: Post;
  posts: Array<Post>;
  profile: Profile;
  profiles: Array<Profile>;
  role: RolesDto;
  roles: Array<RolesDto>;
  subject: SubjectDto;
  subjects: Array<SubjectDto>;
  tag: TagOutput;
  tags: TagsOutput;
  upload: ResponseUploadOutput;
  uploads: Array<ResponseUploadOutput>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountGdprLgpdArgs = {
  account: Scalars['ID'];
};


export type QueryAccountPinnedCategoriesArgs = {
  filter?: Maybe<FilterPinnedCategories>;
  pagination: PaginationArgs;
};


export type QueryAccountPinnedCategoryArgs = {
  id: Scalars['String'];
};


export type QueryAccountSessionArgs = {
  id: Scalars['String'];
};


export type QueryAccountsArgs = {
  filter?: Maybe<FindAllQueryParamsDto>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<AccountSortBy>;
};


export type QueryBillboardArgs = {
  id: Scalars['ID'];
};


export type QueryBillboardsArgs = {
  filter?: Maybe<FindBillboardsInput>;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type QueryCategoryArgs = {
  id: Scalars['String'];
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  filter?: Maybe<ChannelFindAllFilter>;
};


export type QueryCheckChannelArgs = {
  name: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryCheckOrgArgs = {
  name: Scalars['String'];
};


export type QueryCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
  sort?: Maybe<Array<FindPostCommentsSort>>;
};


export type QueryCustomFieldArgs = {
  id: Scalars['ID'];
};


export type QueryEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryEmbedArgs = {
  id: Scalars['String'];
};


export type QueryEmbedsArgs = {
  filter?: Maybe<EmbedFilterInput>;
};


export type QueryEmbedsCountArgs = {
  filter?: Maybe<EmbedFilterInput>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  filter?: Maybe<FindAllGroupsRequestDto>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GroupsSortBy>;
};


export type QueryMediaArgs = {
  id: Scalars['String'];
};


export type QueryMediasArgs = {
  filter?: Maybe<FindAllMediasInput>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationPublicSettingsArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  filter?: Maybe<OrganizationFindAllFilter>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort: PermissionsSortBy;
};


export type QueryPlaylistArgs = {
  id: Scalars['ID'];
};


export type QueryPlaylistsArgs = {
  filter?: Maybe<FilterPlaylistsInput>;
};


export type QueryPostArgs = {
  id: Scalars['ID'];
};


export type QueryPostsArgs = {
  filters?: Maybe<PostFilter>;
};


export type QueryProfileArgs = {
  account: Scalars['ID'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: Maybe<FindAllRolesRequestDto>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort: RolesSortBy;
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectsArgs = {
  filter?: Maybe<FindAllSubjectsQueryParamsDto>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  sort: SubjectsSortBy;
};


export type QueryTagArgs = {
  id: Scalars['ID'];
};


export type QueryTagsArgs = {
  filter?: Maybe<FindManyTagsInput>;
};


export type QueryUploadArgs = {
  id: Scalars['String'];
};


export type QueryUploadsArgs = {
  filter: FilterFindAll;
};

export enum Reaction {
  AngryFace = 'ANGRY_FACE',
  ClappingHands = 'CLAPPING_HANDS',
  CryingFace = 'CRYING_FACE',
  FlexedBicep = 'FLEXED_BICEP',
  LaughingFace = 'LAUGHING_FACE',
  OneHundred = 'ONE_HUNDRED',
  RedHeart = 'RED_HEART',
  SignOfTheHorns = 'SIGN_OF_THE_HORNS',
  SmilingFace = 'SMILING_FACE',
  SmilingFaceWithSunglasses = 'SMILING_FACE_WITH_SUNGLASSES',
  ThinkingFace = 'THINKING_FACE',
  ThumbsUp = 'THUMBS_UP'
}

export type ReactionsAggregate = {
  __typename?: 'ReactionsAggregate';
  count: Scalars['Float'];
  name: Scalars['String'];
};

export type RefreshSignIn = {
  __typename?: 'RefreshSignIn';
  account: Account;
  refreshToken: RefreshToken;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  accessToken: Scalars['String'];
  firebaseToken: Scalars['String'];
  /** Id */
  id?: Maybe<Scalars['String']>;
};

export type RefreshTokenInput = {
  accessToken: Scalars['String'];
};

export type RemoteConfig = {
  configuration: Scalars['String'];
};

export type RemoveReaction = {
  post: Scalars['String'];
  reaction: Reaction;
};

export type Report = {
  __typename?: 'Report';
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idReported: Scalars['String'];
  reason: Scalars['String'];
  status: Scalars['String'];
  type: Scalars['String'];
};

export enum ReportType {
  Comment = 'COMMENT',
  Post = 'POST',
  User = 'USER'
}

export type ResponseAccountsCount = {
  __typename?: 'ResponseAccountsCount';
  count: Scalars['Float'];
  /** Id */
  id: Scalars['String'];
};

export type ResponseAvailabilityOutput = {
  __typename?: 'ResponseAvailabilityOutput';
  id: Scalars['ID'];
  isAvailable: Scalars['Boolean'];
};

export type ResponseCustomFieldsOutput = {
  __typename?: 'ResponseCustomFieldsOutput';
  fields: Array<ResponseFieldOutput>;
  /** Id */
  id: Scalars['String'];
  organization: Scalars['ID'];
};

export type ResponseEmailSendedDto = {
  __typename?: 'ResponseEmailSendedDTO';
  /** emails accepted this message */
  accepted: Array<Scalars['String']>;
  /** delivery message information */
  envelope: EmailResponseEnvelopeDto;
  /** time to envelope the message */
  envelopeTime: Scalars['Float'];
  /** the server message id */
  messageId: Scalars['String'];
  /** message size */
  messageSize: Scalars['Float'];
  /** time to send the message */
  messageTime: Scalars['Float'];
  /** email has declined the message */
  rejected: Array<Scalars['String']>;
  /** the SMTP server response when send the message */
  response: Scalars['String'];
};

export type ResponseFieldOutput = {
  __typename?: 'ResponseFieldOutput';
  /** Id */
  id: Scalars['String'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: CustomFieldTypesEnum;
};

export type ResponseMediaUploadOutput = {
  __typename?: 'ResponseMediaUploadOutput';
  bucket: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  media: Media;
};

export type ResponseUploadCreation = {
  __typename?: 'ResponseUploadCreation';
  media: Media;
  upload: ResponseUploadOutput;
};

export type ResponseUploadOutput = {
  __typename?: 'ResponseUploadOutput';
  bucket: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expireIn: Scalars['Float'];
  expired: Scalars['Boolean'];
  filename: Scalars['String'];
  id: Scalars['ID'];
  isExpiredCalc: Scalars['Boolean'];
  status: UploadStatusEnum;
  url: Scalars['String'];
};

export type RolesDto = {
  __typename?: 'RolesDto';
  default: Scalars['Boolean'];
  description: Scalars['String'];
  /** Id */
  id: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<PermissionDto>;
  public: Scalars['Boolean'];
};

export type RolesSortBy = {
  direction?: Maybe<SortDirection>;
  field: RolesSortFields;
};

export enum RolesSortFields {
  Name = 'name'
}

export type SearchFilterOperator = {
  search: Scalars['String'];
};

export type SendEmailDto = {
  context?: Maybe<Scalars['JSON']>;
  from: Scalars['String'];
  subject: Scalars['String'];
  to: Scalars['String'];
  type: Scalars['ID'];
};

export type SignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SingIn = {
  __typename?: 'SingIn';
  account: Account;
  token: AccessToken;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StartMediaUploadInput = {
  filename: Scalars['String'];
};

export enum Status {
  Draft = 'Draft',
  Published = 'Published',
  Trash = 'Trash'
}

export type SubjectDto = {
  __typename?: 'SubjectDto';
  entity?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Scalars['String']>>;
  /** Id */
  id: Scalars['String'];
};

export type SubjectsSortBy = {
  direction?: Maybe<SortDirection>;
  field: SubjectsSortFields;
};

export enum SubjectsSortFields {
  Entity = 'entity'
}

export type TagOutput = {
  __typename?: 'TagOutput';
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TagsOutput = {
  __typename?: 'TagsOutput';
  count: Scalars['Float'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<TagOutput>;
};

export type UpdateAccountGdprLgpdInput = {
  accepted: Scalars['Boolean'];
};

export type UpdateAccountInput = {
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateAccountIsAdminInput = {
  accountId: Scalars['String'];
  is_admin: Scalars['Boolean'];
};

export type UpdateAccountPinnedCategory = {
  pinned?: Maybe<Scalars['Boolean']>;
};

export type UpdateAccountSessionInput = {
  expires_in: Scalars['Int'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type UpdateAudioPost = {
  access?: Maybe<PostAccess>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ChannelKind>;
  mediaId?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  status?: Maybe<Scalars['String']>;
  thumbnailId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateBillboardInput = {
  actions?: Maybe<Array<BillboardActionInput>>;
  customization?: Maybe<BillboardCustomizationInput>;
  delay?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  access?: Maybe<Scalars['String']>;
  customization?: Maybe<CategoryCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['JSONObject']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Scalars['JSONObject']>;
  isParent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tag?: Maybe<Scalars['String']>;
};

export type UpdateChannelInput = {
  customization?: Maybe<ChannelCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  menu?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateComment = {
  description?: Maybe<Scalars['String']>;
};

export type UpdateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type UpdateEmailTemplateDto = {
  name: Scalars['String'];
  template: Scalars['String'];
};

export type UpdateEmbed = {
  code?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSONObject']>;
};

export type UpdateGroupDto = {
  default?: Maybe<Scalars['Boolean']>;
  /** Group description */
  description?: Maybe<Scalars['String']>;
  /** Group name */
  name?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  roles?: Maybe<Array<Scalars['ID']>>;
};

export type UpdateMediaAudio = {
  baseUrl?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  upload?: Maybe<Scalars['String']>;
};

export type UpdateMediaPhoto = {
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  imgPath?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  upload?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type UpdateMediaVideo = {
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  hlsPath?: Maybe<Scalars['String']>;
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  thumbnailPath?: Maybe<Array<Scalars['String']>>;
  upload?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type UpdateMenu = {
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  route?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type UpdateOrganizationInput = {
  kind?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdatePassword = {
  email: Scalars['String'];
  oobCode: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePasswordOnlyInput = {
  currectPassword: Scalars['String'];
  newPassword: Scalars['String'];
  newPasswordConfirmation: Scalars['String'];
};

export type UpdatePermissionInput = {
  actions?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdatePhotoPost = {
  access?: Maybe<PostAccess>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ChannelKind>;
  mediaId?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePlaylistInput = {
  /** Array of content ids */
  contents?: Maybe<Array<Scalars['ID']>>;
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  address?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  custom_fields?: Maybe<Scalars['JSONObject']>;
  gender?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type UpdateRoleInput = {
  default?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Scalars['ID']>>;
  public?: Maybe<Scalars['Boolean']>;
};

export type UpdateSubjectInput = {
  entity?: Maybe<Scalars['String']>;
  fields: Array<Scalars['String']>;
};

export type UpdateTagInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateTextPost = {
  access?: Maybe<PostAccess>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ChannelKind>;
  mediaId?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateUploadInput = {
  bucket?: Maybe<Scalars['String']>;
  expireIn?: Maybe<Scalars['Float']>;
  expired?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  status?: Maybe<UploadStatusEnum>;
  url?: Maybe<Scalars['String']>;
};

export type UpdateVideoPost = {
  access?: Maybe<PostAccess>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<ChannelKind>;
  mediaId?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  status?: Maybe<Scalars['String']>;
  thumbnailId?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export enum UploadStatusEnum {
  Active = 'Active',
  Deleted = 'Deleted'
}

export type VerifyEmailDto = {
  email: Scalars['String'];
};

export type VerifyMail = {
  __typename?: 'VerifyMail';
  exist: Scalars['Boolean'];
};

export type VideoInput = {
  duration: Scalars['Int'];
  filename: Scalars['String'];
  height: Scalars['Int'];
  mp4Path: Scalars['String'];
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  width: Scalars['Int'];
};

export type FilterRange = {
  end?: Maybe<Scalars['Int']>;
  start: Scalars['Int'];
};

export type CreateAccountMutationVariables = Exact<{
  createAccount: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, tenant_id?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename?: 'AccountStatus', active?: Maybe<boolean>, block_perm?: Maybe<boolean>, block_temp?: Maybe<any>, pending_activation?: Maybe<boolean> }> } };

export type CreateAccountGdprLgpdMutationVariables = Exact<{
  payload: CreateAccountGdprLgpdInput;
}>;


export type CreateAccountGdprLgpdMutation = { __typename?: 'Mutation', createAccountGdprLgpd: { __typename: 'AccountGdprLgpd', id: string, accepted: boolean, accepted_at: any, account: { __typename?: 'Account', id: string } } };

export type ForgetAcountMutationVariables = Exact<{
  id: Scalars['ID'];
  input: ForgetAccountInput;
}>;


export type ForgetAcountMutation = { __typename?: 'Mutation', forgetAccount: { __typename?: 'Account', email?: Maybe<string> } };

export type UpdateMyAccountMutationVariables = Exact<{
  payload: UpdateAccountInput;
}>;


export type UpdateMyAccountMutation = { __typename?: 'Mutation', updateMyAccount: { __typename?: 'Account', display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> } };

export type UpdatePasswordMutationVariables = Exact<{
  payload: UpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'PasswordChanged', success: boolean } };

export type UpdatePasswordOnlyMutationVariables = Exact<{
  payload: UpdatePasswordOnlyInput;
}>;


export type UpdatePasswordOnlyMutation = { __typename?: 'Mutation', updatePasswordOnly: { __typename?: 'PasswordOnlyChanged', success: boolean } };

export type UpdateMyProfileMutationVariables = Exact<{
  payload: UpdateProfileInput;
}>;


export type UpdateMyProfileMutation = { __typename?: 'Mutation', updateMyProfile: { __typename?: 'Profile', address?: Maybe<string>, birthday?: Maybe<any>, custom_fields?: Maybe<any>, gender?: Maybe<string>, phone?: Maybe<string>, locale?: Maybe<string> } };

export type RefreshFirebaseTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshFirebaseTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshSignIn', refreshToken: { __typename?: 'RefreshToken', firebaseToken: string } } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshSignIn', refreshToken: { __typename?: 'RefreshToken', accessToken: string } } };

export type ResetPasswordMutationVariables = Exact<{
  payload: ForgotPassword;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'EmailSent', sent: boolean } };

export type SigninMutationVariables = Exact<{
  payload: SignInInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SingIn', token: { __typename?: 'AccessToken', accessToken: string, firebaseToken: string }, account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, username?: Maybe<string> } } };

export type SignOutMutationVariables = Exact<{
  payload: RefreshTokenInput;
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: any };

export type SocialSignInMutationVariables = Exact<{
  input: CreateAccountSocialSignInDto;
}>;


export type SocialSignInMutation = { __typename?: 'Mutation', socialSignIn: { __typename?: 'SingIn', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename?: 'AccountStatus', gdpr?: Maybe<boolean> }> }, token: { __typename?: 'AccessToken', accessToken: string, firebaseToken: string } } };

export type VerifyMailMutationVariables = Exact<{
  payload: VerifyEmailDto;
}>;


export type VerifyMailMutation = { __typename?: 'Mutation', verifyMail: { __typename?: 'VerifyMail', exist: boolean } };

export type PinCategoryMutationVariables = Exact<{
  payload: CreateAccountPinnnedCategory;
}>;


export type PinCategoryMutation = { __typename?: 'Mutation', pinCategory: { __typename?: 'AccountPinnedCategory', id: string, pinnedAt?: Maybe<any> } };

export type AccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AccountQuery = { __typename?: 'Query', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> } };

export type CustomFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomFieldsQuery = { __typename?: 'Query', customFields: Array<{ __typename?: 'ResponseCustomFieldsOutput', fields: Array<{ __typename?: 'ResponseFieldOutput', id: string, name: string, required: boolean, type: CustomFieldTypesEnum }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> }, profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, avatar_url?: Maybe<string>, birthday?: Maybe<any>, custom_fields?: Maybe<any>, locale?: Maybe<string>, phone?: Maybe<string> } } };

export type ProfileQueryVariables = Exact<{
  account: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, avatar_url?: Maybe<string>, birthday?: Maybe<any>, phone?: Maybe<string> } };

export type GetBillboardsQueryVariables = Exact<{
  filter?: Maybe<FindBillboardsInput>;
}>;


export type GetBillboardsQuery = { __typename?: 'Query', billboards: Array<{ __typename?: 'Billboard', id: string, title: string, description: string, delay: number, sort: number, actions: Array<{ __typename?: 'BillboardActionsOutput', bgColor?: Maybe<string>, borderColor?: Maybe<string>, icon?: Maybe<string>, label?: Maybe<string>, route?: Maybe<string>, textColor?: Maybe<string> }>, customization: { __typename?: 'BillboardCustomizationOutput', desktop: { __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }, mobile: { __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> } } }> };

export type GetCategoriesQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'PaginatedCategoriesOutput', count: number, hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', access?: Maybe<string>, createdAt: any, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, tag?: Maybe<string>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, tag?: Maybe<string> }> }> } };

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', access?: Maybe<string>, createdAt: any, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, tag?: Maybe<string>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, tag?: Maybe<string>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> } };

export type ChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename: 'AvailableChannel', id: string, kind?: Maybe<string>, description: string, geofence?: Maybe<any>, name: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', thumbnail?: Maybe<string>, icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }> }> } | { __typename: 'GeolockedChannel', id: string, name: string, thumbnail?: Maybe<any>, kind?: Maybe<string>, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', thumbnail?: Maybe<string>, icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }> }> }> };

export type CommentsQueryVariables = Exact<{
  filter?: Maybe<CommentFilter>;
  limit?: Maybe<Scalars['Float']>;
  sort?: Maybe<Array<FindPostCommentsSort> | FindPostCommentsSort>;
  skip?: Maybe<Scalars['Float']>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, countComments: number, description: string, countUpVotes: number, parent?: Maybe<string>, author?: Maybe<{ __typename?: 'CommentAuthor', displayName?: Maybe<string>, username?: Maybe<string> }> }> };

export type MediaQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type MediaQuery = { __typename?: 'Query', media: { __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto', imgPath?: Maybe<string> } | { __typename?: 'MediaVideo', thumbnailPath?: Maybe<string> } };

export type MenusQueryVariables = Exact<{ [key: string]: never; }>;


export type MenusQuery = { __typename?: 'Query', menus: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }>, children?: Maybe<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }> }> }> };

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string } };

export type OrganizationPublicSettingsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationPublicSettingsQuery = { __typename?: 'Query', organizationPublicSettings: { __typename?: 'OrganizationPublic', id: string, name?: Maybe<string>, kind?: Maybe<string>, status?: Maybe<string>, tenant_id?: Maybe<string>, customization?: Maybe<any>, avatarCdnBaseUrl?: Maybe<string>, audioCdnBaseUrl?: Maybe<string>, imageCdnBaseUrl?: Maybe<string> } };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, access: string, allowComments: boolean, countComments: number, countReactions: number, description: string, featured: boolean, geofence: any, kind: string, title: string, type: string, engagedUsers: Array<{ __typename?: 'EngagedUser', username: string }>, categories: Array<{ __typename?: 'Category', id: string }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaVideo', baseUrl?: Maybe<string>, mp4Path?: Maybe<string>, duration?: Maybe<number>, aspectRatio?: Maybe<string>, createdAt: any, hlsPath?: Maybe<string> }>, reactions: Array<{ __typename?: 'PostReactions', name: string, count: number }> } };

export type GetPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', access: string, description: string, geofence: any, kind: string, id: string, slug: string, status: string, tags: Array<string>, title: string, type: string, publishedAt: any, thumbnail: { __typename?: 'MediaPhoto', imgPath?: Maybe<string> } }> };


export const CreateAccountDocument = gql`
    mutation CreateAccount($createAccount: CreateAccountInput!) {
  createAccount(createAccountInput: $createAccount) {
    id
    display_name
    email
    first_name
    last_name
    status {
      active
      block_perm
      block_temp
      pending_activation
    }
    tenant_id
    username
    __typename
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;
export type CreateAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAccountMutation, CreateAccountMutationVariables>, 'mutation'>;

    export const CreateAccountComponent = (props: CreateAccountComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAccountMutation, CreateAccountMutationVariables> mutation={CreateAccountDocument} {...props} />
    );
    

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      createAccount: // value for 'createAccount'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const CreateAccountGdprLgpdDocument = gql`
    mutation CreateAccountGdprLgpd($payload: CreateAccountGdprLgpdInput!) {
  createAccountGdprLgpd(payload: $payload) {
    id
    accepted
    accepted_at
    account {
      id
    }
    __typename
  }
}
    `;
export type CreateAccountGdprLgpdMutationFn = Apollo.MutationFunction<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables>;
export type CreateAccountGdprLgpdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables>, 'mutation'>;

    export const CreateAccountGdprLgpdComponent = (props: CreateAccountGdprLgpdComponentProps) => (
      <ApolloReactComponents.Mutation<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables> mutation={CreateAccountGdprLgpdDocument} {...props} />
    );
    

/**
 * __useCreateAccountGdprLgpdMutation__
 *
 * To run a mutation, you first call `useCreateAccountGdprLgpdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountGdprLgpdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountGdprLgpdMutation, { data, loading, error }] = useCreateAccountGdprLgpdMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateAccountGdprLgpdMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables>(CreateAccountGdprLgpdDocument, options);
      }
export type CreateAccountGdprLgpdMutationHookResult = ReturnType<typeof useCreateAccountGdprLgpdMutation>;
export type CreateAccountGdprLgpdMutationResult = Apollo.MutationResult<CreateAccountGdprLgpdMutation>;
export type CreateAccountGdprLgpdMutationOptions = Apollo.BaseMutationOptions<CreateAccountGdprLgpdMutation, CreateAccountGdprLgpdMutationVariables>;
export const ForgetAcountDocument = gql`
    mutation ForgetAcount($id: ID!, $input: ForgetAccountInput!) {
  forgetAccount(id: $id, input: $input) {
    email
  }
}
    `;
export type ForgetAcountMutationFn = Apollo.MutationFunction<ForgetAcountMutation, ForgetAcountMutationVariables>;
export type ForgetAcountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgetAcountMutation, ForgetAcountMutationVariables>, 'mutation'>;

    export const ForgetAcountComponent = (props: ForgetAcountComponentProps) => (
      <ApolloReactComponents.Mutation<ForgetAcountMutation, ForgetAcountMutationVariables> mutation={ForgetAcountDocument} {...props} />
    );
    

/**
 * __useForgetAcountMutation__
 *
 * To run a mutation, you first call `useForgetAcountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetAcountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetAcountMutation, { data, loading, error }] = useForgetAcountMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgetAcountMutation(baseOptions?: Apollo.MutationHookOptions<ForgetAcountMutation, ForgetAcountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgetAcountMutation, ForgetAcountMutationVariables>(ForgetAcountDocument, options);
      }
export type ForgetAcountMutationHookResult = ReturnType<typeof useForgetAcountMutation>;
export type ForgetAcountMutationResult = Apollo.MutationResult<ForgetAcountMutation>;
export type ForgetAcountMutationOptions = Apollo.BaseMutationOptions<ForgetAcountMutation, ForgetAcountMutationVariables>;
export const UpdateMyAccountDocument = gql`
    mutation UpdateMyAccount($payload: UpdateAccountInput!) {
  updateMyAccount(payload: $payload) {
    display_name
    email
    first_name
    last_name
    username
  }
}
    `;
export type UpdateMyAccountMutationFn = Apollo.MutationFunction<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>;
export type UpdateMyAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>, 'mutation'>;

    export const UpdateMyAccountComponent = (props: UpdateMyAccountComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMyAccountMutation, UpdateMyAccountMutationVariables> mutation={UpdateMyAccountDocument} {...props} />
    );
    

/**
 * __useUpdateMyAccountMutation__
 *
 * To run a mutation, you first call `useUpdateMyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyAccountMutation, { data, loading, error }] = useUpdateMyAccountMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateMyAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>(UpdateMyAccountDocument, options);
      }
export type UpdateMyAccountMutationHookResult = ReturnType<typeof useUpdateMyAccountMutation>;
export type UpdateMyAccountMutationResult = Apollo.MutationResult<UpdateMyAccountMutation>;
export type UpdateMyAccountMutationOptions = Apollo.BaseMutationOptions<UpdateMyAccountMutation, UpdateMyAccountMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($payload: UpdatePassword!) {
  updatePassword(payload: $payload) {
    success
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export type UpdatePasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>, 'mutation'>;

    export const UpdatePasswordComponent = (props: UpdatePasswordComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePasswordMutation, UpdatePasswordMutationVariables> mutation={UpdatePasswordDocument} {...props} />
    );
    

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdatePasswordOnlyDocument = gql`
    mutation UpdatePasswordOnly($payload: UpdatePasswordOnlyInput!) {
  updatePasswordOnly(payload: $payload) {
    success
  }
}
    `;
export type UpdatePasswordOnlyMutationFn = Apollo.MutationFunction<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables>;
export type UpdatePasswordOnlyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables>, 'mutation'>;

    export const UpdatePasswordOnlyComponent = (props: UpdatePasswordOnlyComponentProps) => (
      <ApolloReactComponents.Mutation<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables> mutation={UpdatePasswordOnlyDocument} {...props} />
    );
    

/**
 * __useUpdatePasswordOnlyMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordOnlyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordOnlyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordOnlyMutation, { data, loading, error }] = useUpdatePasswordOnlyMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdatePasswordOnlyMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables>(UpdatePasswordOnlyDocument, options);
      }
export type UpdatePasswordOnlyMutationHookResult = ReturnType<typeof useUpdatePasswordOnlyMutation>;
export type UpdatePasswordOnlyMutationResult = Apollo.MutationResult<UpdatePasswordOnlyMutation>;
export type UpdatePasswordOnlyMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordOnlyMutation, UpdatePasswordOnlyMutationVariables>;
export const UpdateMyProfileDocument = gql`
    mutation UpdateMyProfile($payload: UpdateProfileInput!) {
  updateMyProfile(payload: $payload) {
    address
    birthday
    custom_fields
    gender
    phone
    locale
  }
}
    `;
export type UpdateMyProfileMutationFn = Apollo.MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
export type UpdateMyProfileComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>, 'mutation'>;

    export const UpdateMyProfileComponent = (props: UpdateMyProfileComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables> mutation={UpdateMyProfileDocument} {...props} />
    );
    

/**
 * __useUpdateMyProfileMutation__
 *
 * To run a mutation, you first call `useUpdateMyProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMyProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMyProfileMutation, { data, loading, error }] = useUpdateMyProfileMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateMyProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>(UpdateMyProfileDocument, options);
      }
export type UpdateMyProfileMutationHookResult = ReturnType<typeof useUpdateMyProfileMutation>;
export type UpdateMyProfileMutationResult = Apollo.MutationResult<UpdateMyProfileMutation>;
export type UpdateMyProfileMutationOptions = Apollo.BaseMutationOptions<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>;
export const RefreshFirebaseTokenDocument = gql`
    mutation RefreshFirebaseToken {
  refreshToken {
    refreshToken {
      firebaseToken
    }
  }
}
    `;
export type RefreshFirebaseTokenMutationFn = Apollo.MutationFunction<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables>;
export type RefreshFirebaseTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables>, 'mutation'>;

    export const RefreshFirebaseTokenComponent = (props: RefreshFirebaseTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables> mutation={RefreshFirebaseTokenDocument} {...props} />
    );
    

/**
 * __useRefreshFirebaseTokenMutation__
 *
 * To run a mutation, you first call `useRefreshFirebaseTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshFirebaseTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshFirebaseTokenMutation, { data, loading, error }] = useRefreshFirebaseTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshFirebaseTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables>(RefreshFirebaseTokenDocument, options);
      }
export type RefreshFirebaseTokenMutationHookResult = ReturnType<typeof useRefreshFirebaseTokenMutation>;
export type RefreshFirebaseTokenMutationResult = Apollo.MutationResult<RefreshFirebaseTokenMutation>;
export type RefreshFirebaseTokenMutationOptions = Apollo.BaseMutationOptions<RefreshFirebaseTokenMutation, RefreshFirebaseTokenMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    refreshToken {
      accessToken
    }
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;
export type RefreshTokenComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RefreshTokenMutation, RefreshTokenMutationVariables>, 'mutation'>;

    export const RefreshTokenComponent = (props: RefreshTokenComponentProps) => (
      <ApolloReactComponents.Mutation<RefreshTokenMutation, RefreshTokenMutationVariables> mutation={RefreshTokenDocument} {...props} />
    );
    

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($payload: ForgotPassword!) {
  resetPassword(payload: $payload) {
    sent
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;
export type ResetPasswordComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ResetPasswordMutation, ResetPasswordMutationVariables>, 'mutation'>;

    export const ResetPasswordComponent = (props: ResetPasswordComponentProps) => (
      <ApolloReactComponents.Mutation<ResetPasswordMutation, ResetPasswordMutationVariables> mutation={ResetPasswordDocument} {...props} />
    );
    

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SigninDocument = gql`
    mutation Signin($payload: SignInInput!) {
  signIn(payload: $payload) {
    token {
      accessToken
      firebaseToken
    }
    account {
      id
      display_name
      username
    }
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;
export type SigninComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SigninMutation, SigninMutationVariables>, 'mutation'>;

    export const SigninComponent = (props: SigninComponentProps) => (
      <ApolloReactComponents.Mutation<SigninMutation, SigninMutationVariables> mutation={SigninDocument} {...props} />
    );
    

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, options);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut($payload: RefreshTokenInput!) {
  signOut(payload: $payload)
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;
export type SignOutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SignOutMutation, SignOutMutationVariables>, 'mutation'>;

    export const SignOutComponent = (props: SignOutComponentProps) => (
      <ApolloReactComponents.Mutation<SignOutMutation, SignOutMutationVariables> mutation={SignOutDocument} {...props} />
    );
    

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const SocialSignInDocument = gql`
    mutation SocialSignIn($input: CreateAccountSocialSignInDto!) {
  socialSignIn(input: $input) {
    account {
      id
      display_name
      username
      status {
        gdpr
      }
    }
    token {
      accessToken
      firebaseToken
    }
  }
}
    `;
export type SocialSignInMutationFn = Apollo.MutationFunction<SocialSignInMutation, SocialSignInMutationVariables>;
export type SocialSignInComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<SocialSignInMutation, SocialSignInMutationVariables>, 'mutation'>;

    export const SocialSignInComponent = (props: SocialSignInComponentProps) => (
      <ApolloReactComponents.Mutation<SocialSignInMutation, SocialSignInMutationVariables> mutation={SocialSignInDocument} {...props} />
    );
    

/**
 * __useSocialSignInMutation__
 *
 * To run a mutation, you first call `useSocialSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSocialSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [socialSignInMutation, { data, loading, error }] = useSocialSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSocialSignInMutation(baseOptions?: Apollo.MutationHookOptions<SocialSignInMutation, SocialSignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SocialSignInMutation, SocialSignInMutationVariables>(SocialSignInDocument, options);
      }
export type SocialSignInMutationHookResult = ReturnType<typeof useSocialSignInMutation>;
export type SocialSignInMutationResult = Apollo.MutationResult<SocialSignInMutation>;
export type SocialSignInMutationOptions = Apollo.BaseMutationOptions<SocialSignInMutation, SocialSignInMutationVariables>;
export const VerifyMailDocument = gql`
    mutation VerifyMail($payload: VerifyEmailDTO!) {
  verifyMail(payload: $payload) {
    exist
  }
}
    `;
export type VerifyMailMutationFn = Apollo.MutationFunction<VerifyMailMutation, VerifyMailMutationVariables>;
export type VerifyMailComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VerifyMailMutation, VerifyMailMutationVariables>, 'mutation'>;

    export const VerifyMailComponent = (props: VerifyMailComponentProps) => (
      <ApolloReactComponents.Mutation<VerifyMailMutation, VerifyMailMutationVariables> mutation={VerifyMailDocument} {...props} />
    );
    

/**
 * __useVerifyMailMutation__
 *
 * To run a mutation, you first call `useVerifyMailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyMailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyMailMutation, { data, loading, error }] = useVerifyMailMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useVerifyMailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyMailMutation, VerifyMailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyMailMutation, VerifyMailMutationVariables>(VerifyMailDocument, options);
      }
export type VerifyMailMutationHookResult = ReturnType<typeof useVerifyMailMutation>;
export type VerifyMailMutationResult = Apollo.MutationResult<VerifyMailMutation>;
export type VerifyMailMutationOptions = Apollo.BaseMutationOptions<VerifyMailMutation, VerifyMailMutationVariables>;
export const PinCategoryDocument = gql`
    mutation PinCategory($payload: CreateAccountPinnnedCategory!) {
  pinCategory(payload: $payload) {
    id
    pinnedAt
  }
}
    `;
export type PinCategoryMutationFn = Apollo.MutationFunction<PinCategoryMutation, PinCategoryMutationVariables>;
export type PinCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PinCategoryMutation, PinCategoryMutationVariables>, 'mutation'>;

    export const PinCategoryComponent = (props: PinCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<PinCategoryMutation, PinCategoryMutationVariables> mutation={PinCategoryDocument} {...props} />
    );
    

/**
 * __usePinCategoryMutation__
 *
 * To run a mutation, you first call `usePinCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinCategoryMutation, { data, loading, error }] = usePinCategoryMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function usePinCategoryMutation(baseOptions?: Apollo.MutationHookOptions<PinCategoryMutation, PinCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PinCategoryMutation, PinCategoryMutationVariables>(PinCategoryDocument, options);
      }
export type PinCategoryMutationHookResult = ReturnType<typeof usePinCategoryMutation>;
export type PinCategoryMutationResult = Apollo.MutationResult<PinCategoryMutation>;
export type PinCategoryMutationOptions = Apollo.BaseMutationOptions<PinCategoryMutation, PinCategoryMutationVariables>;
export const AccountDocument = gql`
    query Account($id: ID!) {
  account(id: $id) {
    id
    display_name
    email
    first_name
    last_name
    username
  }
}
    `;
export type AccountComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AccountQuery, AccountQueryVariables>, 'query'> & ({ variables: AccountQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const AccountComponent = (props: AccountComponentProps) => (
      <ApolloReactComponents.Query<AccountQuery, AccountQueryVariables> query={AccountDocument} {...props} />
    );
    

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAccountQuery(baseOptions: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
      }
export function useAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountQuery, AccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(AccountDocument, options);
        }
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountQueryResult = Apollo.QueryResult<AccountQuery, AccountQueryVariables>;
export const CustomFieldsDocument = gql`
    query CustomFields {
  customFields {
    fields {
      id
      name
      required
      type
    }
  }
}
    `;
export type CustomFieldsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CustomFieldsQuery, CustomFieldsQueryVariables>, 'query'>;

    export const CustomFieldsComponent = (props: CustomFieldsComponentProps) => (
      <ApolloReactComponents.Query<CustomFieldsQuery, CustomFieldsQueryVariables> query={CustomFieldsDocument} {...props} />
    );
    

/**
 * __useCustomFieldsQuery__
 *
 * To run a query within a React component, call `useCustomFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCustomFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCustomFieldsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCustomFieldsQuery(baseOptions?: Apollo.QueryHookOptions<CustomFieldsQuery, CustomFieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CustomFieldsQuery, CustomFieldsQueryVariables>(CustomFieldsDocument, options);
      }
export function useCustomFieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CustomFieldsQuery, CustomFieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CustomFieldsQuery, CustomFieldsQueryVariables>(CustomFieldsDocument, options);
        }
export type CustomFieldsQueryHookResult = ReturnType<typeof useCustomFieldsQuery>;
export type CustomFieldsLazyQueryHookResult = ReturnType<typeof useCustomFieldsLazyQuery>;
export type CustomFieldsQueryResult = Apollo.QueryResult<CustomFieldsQuery, CustomFieldsQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    account {
      id
      display_name
      email
      first_name
      last_name
      username
    }
    profile {
      id
      address
      avatar_url
      birthday
      custom_fields
      locale
      phone
    }
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ProfileDocument = gql`
    query Profile($account: ID!) {
  profile(account: $account) {
    id
    address
    avatar_url
    birthday
    phone
  }
}
    `;
export type ProfileComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ProfileQuery, ProfileQueryVariables>, 'query'> & ({ variables: ProfileQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ProfileComponent = (props: ProfileComponentProps) => (
      <ApolloReactComponents.Query<ProfileQuery, ProfileQueryVariables> query={ProfileDocument} {...props} />
    );
    

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useProfileQuery(baseOptions: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;
export const GetBillboardsDocument = gql`
    query GetBillboards($filter: FindBillboardsInput) {
  billboards(filter: $filter) {
    id
    title
    description
    actions {
      bgColor
      borderColor
      icon
      label
      route
      textColor
    }
    customization {
      desktop {
        imgPath
      }
      mobile {
        imgPath
      }
    }
    delay
    sort
  }
}
    `;
export type GetBillboardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBillboardsQuery, GetBillboardsQueryVariables>, 'query'>;

    export const GetBillboardsComponent = (props: GetBillboardsComponentProps) => (
      <ApolloReactComponents.Query<GetBillboardsQuery, GetBillboardsQueryVariables> query={GetBillboardsDocument} {...props} />
    );
    

/**
 * __useGetBillboardsQuery__
 *
 * To run a query within a React component, call `useGetBillboardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBillboardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBillboardsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetBillboardsQuery(baseOptions?: Apollo.QueryHookOptions<GetBillboardsQuery, GetBillboardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBillboardsQuery, GetBillboardsQueryVariables>(GetBillboardsDocument, options);
      }
export function useGetBillboardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBillboardsQuery, GetBillboardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBillboardsQuery, GetBillboardsQueryVariables>(GetBillboardsDocument, options);
        }
export type GetBillboardsQueryHookResult = ReturnType<typeof useGetBillboardsQuery>;
export type GetBillboardsLazyQueryHookResult = ReturnType<typeof useGetBillboardsLazyQuery>;
export type GetBillboardsQueryResult = Apollo.QueryResult<GetBillboardsQuery, GetBillboardsQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories($filter: CategoryFilter) {
  categories(filter: $filter) {
    count
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
      access
      createdAt
      customization {
        desktop {
          imgPath
        }
        mobile {
          imgPath
        }
        thumbnail {
          imgPath
        }
      }
      children {
        description
        featuredAt
        geoFence
        id
        name
        description
        tag
      }
      description
      featuredAt
      geoFence
      id
      name
      tag
    }
  }
}
    `;
export type GetCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoriesQuery, GetCategoriesQueryVariables>, 'query'>;

    export const GetCategoriesComponent = (props: GetCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetCategoriesQuery, GetCategoriesQueryVariables> query={GetCategoriesDocument} {...props} />
    );
    

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = gql`
    query GetCategory($id: String!) {
  category(id: $id) {
    access
    createdAt
    customization {
      desktop {
        imgPath
      }
      mobile {
        imgPath
      }
      thumbnail {
        imgPath
      }
    }
    children {
      description
      featuredAt
      geoFence
      id
      name
      description
      tag
      customization {
        thumbnail {
          imgPath
        }
      }
    }
    description
    featuredAt
    geoFence
    id
    name
    tag
  }
}
    `;
export type GetCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoryQuery, GetCategoryQueryVariables>, 'query'> & ({ variables: GetCategoryQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetCategoryComponent = (props: GetCategoryComponentProps) => (
      <ApolloReactComponents.Query<GetCategoryQuery, GetCategoryQueryVariables> query={GetCategoryDocument} {...props} />
    );
    

/**
 * __useGetCategoryQuery__
 *
 * To run a query within a React component, call `useGetCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
      }
export function useGetCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryQuery, GetCategoryQueryVariables>(GetCategoryDocument, options);
        }
export type GetCategoryQueryHookResult = ReturnType<typeof useGetCategoryQuery>;
export type GetCategoryLazyQueryHookResult = ReturnType<typeof useGetCategoryLazyQuery>;
export type GetCategoryQueryResult = Apollo.QueryResult<GetCategoryQuery, GetCategoryQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($filter: ChannelFindAllFilter!) {
  channels(filter: $filter) {
    ... on AvailableChannel {
      id
      kind
      description
      geofence
      name
      customization {
        icon {
          dark
          light
        }
        logo {
          dark
          light
        }
        thumbnail
      }
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      thumbnail
      customization {
        icon {
          dark
          light
        }
        logo {
          dark
          light
        }
        thumbnail
      }
      kind
      __typename
    }
  }
}
    `;
export type ChannelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChannelsQuery, ChannelsQueryVariables>, 'query'> & ({ variables: ChannelsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ChannelsComponent = (props: ChannelsComponentProps) => (
      <ApolloReactComponents.Query<ChannelsQuery, ChannelsQueryVariables> query={ChannelsDocument} {...props} />
    );
    

/**
 * __useChannelsQuery__
 *
 * To run a query within a React component, call `useChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useChannelsQuery(baseOptions: Apollo.QueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
      }
export function useChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelsQuery, ChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelsQuery, ChannelsQueryVariables>(ChannelsDocument, options);
        }
export type ChannelsQueryHookResult = ReturnType<typeof useChannelsQuery>;
export type ChannelsLazyQueryHookResult = ReturnType<typeof useChannelsLazyQuery>;
export type ChannelsQueryResult = Apollo.QueryResult<ChannelsQuery, ChannelsQueryVariables>;
export const CommentsDocument = gql`
    query Comments($filter: CommentFilter, $limit: Float, $sort: [FindPostCommentsSort!], $skip: Float) {
  comments(filter: $filter, limit: $limit, skip: $skip, sort: $sort) {
    id
    author {
      displayName
      username
    }
    countComments
    description
    countUpVotes
    parent
  }
}
    `;
export type CommentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CommentsQuery, CommentsQueryVariables>, 'query'>;

    export const CommentsComponent = (props: CommentsComponentProps) => (
      <ApolloReactComponents.Query<CommentsQuery, CommentsQueryVariables> query={CommentsDocument} {...props} />
    );
    

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      sort: // value for 'sort'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export const MediaDocument = gql`
    query Media($id: String!) {
  media(id: $id) {
    ... on MediaPhoto {
      imgPath
    }
    ... on MediaVideo {
      thumbnailPath
    }
  }
}
    `;
export type MediaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MediaQuery, MediaQueryVariables>, 'query'> & ({ variables: MediaQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MediaComponent = (props: MediaComponentProps) => (
      <ApolloReactComponents.Query<MediaQuery, MediaQueryVariables> query={MediaDocument} {...props} />
    );
    

/**
 * __useMediaQuery__
 *
 * To run a query within a React component, call `useMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMediaQuery(baseOptions: Apollo.QueryHookOptions<MediaQuery, MediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MediaQuery, MediaQueryVariables>(MediaDocument, options);
      }
export function useMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MediaQuery, MediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MediaQuery, MediaQueryVariables>(MediaDocument, options);
        }
export type MediaQueryHookResult = ReturnType<typeof useMediaQuery>;
export type MediaLazyQueryHookResult = ReturnType<typeof useMediaLazyQuery>;
export type MediaQueryResult = Apollo.QueryResult<MediaQuery, MediaQueryVariables>;
export const MenusDocument = gql`
    query Menus {
  menus {
    id
    channel
    icon
    name
    platformExclusive
    route
    sort
    status
    parameters {
      id
      missing
    }
    children {
      id
      channel
      icon
      name
      platformExclusive
      route
      sort
      status
      parameters {
        id
        missing
      }
    }
  }
}
    `;
export type MenusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MenusQuery, MenusQueryVariables>, 'query'>;

    export const MenusComponent = (props: MenusComponentProps) => (
      <ApolloReactComponents.Query<MenusQuery, MenusQueryVariables> query={MenusDocument} {...props} />
    );
    

/**
 * __useMenusQuery__
 *
 * To run a query within a React component, call `useMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusQuery({
 *   variables: {
 *   },
 * });
 */
export function useMenusQuery(baseOptions?: Apollo.QueryHookOptions<MenusQuery, MenusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options);
      }
export function useMenusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenusQuery, MenusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenusQuery, MenusQueryVariables>(MenusDocument, options);
        }
export type MenusQueryHookResult = ReturnType<typeof useMenusQuery>;
export type MenusLazyQueryHookResult = ReturnType<typeof useMenusLazyQuery>;
export type MenusQueryResult = Apollo.QueryResult<MenusQuery, MenusQueryVariables>;
export const OrganizationDocument = gql`
    query Organization($id: ID!) {
  organization(id: $id) {
    id
  }
}
    `;
export type OrganizationComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationQuery, OrganizationQueryVariables>, 'query'> & ({ variables: OrganizationQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationComponent = (props: OrganizationComponentProps) => (
      <ApolloReactComponents.Query<OrganizationQuery, OrganizationQueryVariables> query={OrganizationDocument} {...props} />
    );
    

/**
 * __useOrganizationQuery__
 *
 * To run a query within a React component, call `useOrganizationQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationQuery(baseOptions: Apollo.QueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
      }
export function useOrganizationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationQuery, OrganizationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationQuery, OrganizationQueryVariables>(OrganizationDocument, options);
        }
export type OrganizationQueryHookResult = ReturnType<typeof useOrganizationQuery>;
export type OrganizationLazyQueryHookResult = ReturnType<typeof useOrganizationLazyQuery>;
export type OrganizationQueryResult = Apollo.QueryResult<OrganizationQuery, OrganizationQueryVariables>;
export const OrganizationPublicSettingsDocument = gql`
    query OrganizationPublicSettings($id: ID!) {
  organizationPublicSettings(id: $id) {
    id
    name
    kind
    status
    tenant_id
    customization
    avatarCdnBaseUrl
    audioCdnBaseUrl
    imageCdnBaseUrl
  }
}
    `;
export type OrganizationPublicSettingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>, 'query'> & ({ variables: OrganizationPublicSettingsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationPublicSettingsComponent = (props: OrganizationPublicSettingsComponentProps) => (
      <ApolloReactComponents.Query<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables> query={OrganizationPublicSettingsDocument} {...props} />
    );
    

/**
 * __useOrganizationPublicSettingsQuery__
 *
 * To run a query within a React component, call `useOrganizationPublicSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationPublicSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationPublicSettingsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationPublicSettingsQuery(baseOptions: Apollo.QueryHookOptions<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>(OrganizationPublicSettingsDocument, options);
      }
export function useOrganizationPublicSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>(OrganizationPublicSettingsDocument, options);
        }
export type OrganizationPublicSettingsQueryHookResult = ReturnType<typeof useOrganizationPublicSettingsQuery>;
export type OrganizationPublicSettingsLazyQueryHookResult = ReturnType<typeof useOrganizationPublicSettingsLazyQuery>;
export type OrganizationPublicSettingsQueryResult = Apollo.QueryResult<OrganizationPublicSettingsQuery, OrganizationPublicSettingsQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  post(id: $id) {
    id
    access
    allowComments
    countComments
    countReactions
    description
    engagedUsers {
      username
    }
    categories {
      id
    }
    featured
    geofence
    kind
    media {
      ... on MediaVideo {
        baseUrl
        mp4Path
        duration
        aspectRatio
        createdAt
        hlsPath
      }
    }
    reactions {
      name
      count
    }
    title
    type
  }
}
    `;
export type GetPostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostQuery, GetPostQueryVariables>, 'query'> & ({ variables: GetPostQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPostComponent = (props: GetPostComponentProps) => (
      <ApolloReactComponents.Query<GetPostQuery, GetPostQueryVariables> query={GetPostDocument} {...props} />
    );
    

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($filter: PostFilter) {
  posts(filters: $filter) {
    access
    description
    geofence
    kind
    id
    slug
    status
    tags
    thumbnail {
      imgPath
    }
    title
    type
    publishedAt
  }
}
    `;
export type GetPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostsQuery, GetPostsQueryVariables>, 'query'>;

    export const GetPostsComponent = (props: GetPostsComponentProps) => (
      <ApolloReactComponents.Query<GetPostsQuery, GetPostsQueryVariables> query={GetPostsDocument} {...props} />
    );
    

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;