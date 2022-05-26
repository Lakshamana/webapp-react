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

export type AccountActivated = {
  __typename?: 'AccountActivated';
  activated: Scalars['Boolean'];
  activationCode: Scalars['String'];
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
  id: Scalars['ID'];
  pinned: Scalars['Boolean'];
  pinnedAt?: Maybe<Scalars['DateTime']>;
};

export type AccountPinnedChannel = {
  __typename?: 'AccountPinnedChannel';
  account: Scalars['String'];
  channel: PinnedChannelOutput;
  id: Scalars['ID'];
  pinned: Scalars['Boolean'];
  pinned_at: Scalars['DateTime'];
};

export type AccountPinnedPost = {
  __typename?: 'AccountPinnedPost';
  account: Scalars['String'];
  id: Scalars['ID'];
  pinned: Scalars['Boolean'];
  pinnedAt?: Maybe<Scalars['DateTime']>;
  post: Scalars['String'];
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

export type AccountStatus = {
  __typename?: 'AccountStatus';
  active?: Maybe<Scalars['Boolean']>;
  block_perm?: Maybe<Scalars['Boolean']>;
  block_temp?: Maybe<Scalars['DateTime']>;
  gdpr?: Maybe<Scalars['Boolean']>;
  pending_activation?: Maybe<Scalars['Boolean']>;
};

export enum Actions {
  Create = 'CREATE',
  Delete = 'DELETE',
  Read = 'READ',
  Update = 'UPDATE'
}

export type ActivateAccount = {
  activationCode: Scalars['String'];
  id: Scalars['ID'];
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

export type AddOrder = {
  amount: Scalars['Float'];
  customFields: AddOrderCustomFields;
  invoice: Scalars['String'];
  payment: Scalars['String'];
  product: Scalars['String'];
  subscription: Scalars['String'];
};

export type AddOrderCustomFields = {
  fullName: Scalars['String'];
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
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['JSON']>;
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
};

export type BanAccountTemporary = {
  banUntil: Scalars['DateTime'];
};

export type Billboard = {
  __typename?: 'Billboard';
  actions?: Maybe<Array<BillboardActionsOutput>>;
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  customization: BillboardCustomizationOutput;
  delay?: Maybe<Scalars['Int']>;
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  organization: Scalars['ID'];
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<BillboardTarget>;
  title?: Maybe<Scalars['String']>;
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
  desktop: Scalars['ID'];
  mobile: Scalars['ID'];
};

export type BillboardCustomizationOutput = {
  __typename?: 'BillboardCustomizationOutput';
  desktop?: Maybe<MediaCustomizationOutput>;
  mobile?: Maybe<MediaCustomizationOutput>;
};

export enum BillboardTarget {
  Home = 'HOME',
  Live = 'LIVE'
}

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
  isChild?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  kind: Kinds;
  name: Scalars['String'];
  organization: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  pinnedStatus?: Maybe<AccountPinnedCategory>;
  slug?: Maybe<Scalars['String']>;
  sort: Scalars['Int'];
  status?: Maybe<Status>;
  tags: Array<TagOutput>;
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
  account?: Maybe<Scalars['ID']>;
  featured?: Maybe<Scalars['Boolean']>;
  isChild?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  parent?: Maybe<Scalars['ID']>;
  pinned?: Maybe<Scalars['Boolean']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type CategoryInput = {
  access?: Maybe<Scalars['String']>;
  customization?: Maybe<CategoryCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['JSONObject']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  isChild?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CategoryPasswordCheck = {
  __typename?: 'CategoryPasswordCheck';
  correct: Scalars['Boolean'];
};

export type CategoryPasswordCheckInput = {
  password: Scalars['String'];
};

export type CategorySlugExists = {
  __typename?: 'CategorySlugExists';
  exists: Scalars['Boolean'];
};

export type CategorySortingOutput = {
  __typename?: 'CategorySortingOutput';
  ok: Scalars['Boolean'];
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
  account?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Float']>;
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  pinned?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Float']>;
  status__contains?: Maybe<Scalars['String']>;
  status__exact?: Maybe<Scalars['String']>;
};

export type ChannelPasswordCheck = {
  __typename?: 'ChannelPasswordCheck';
  correct: Scalars['Boolean'];
};

export type ChildrenCategoryFilter = {
  featured?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
};

export type Comment = {
  __typename?: 'Comment';
  account: Scalars['String'];
  author: CommentAuthor;
  commentVoteStats: CommentVoteStats;
  content: Scalars['String'];
  countComments: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  myVote: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
};

export type CommentAuthor = {
  __typename?: 'CommentAuthor';
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  tenant?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type CommentFilter = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  parent?: Maybe<Scalars['String']>;
  post?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['DateTime']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type CommentVote = {
  __typename?: 'CommentVote';
  account: Scalars['String'];
  countDownvotes: Scalars['Float'];
  countUpvotes: Scalars['Float'];
  direction: CommentVoteDirectionEnum;
  id: Scalars['String'];
};

export enum CommentVoteDirectionEnum {
  Downvote = 'DOWNVOTE',
  Novote = 'NOVOTE',
  Upvote = 'UPVOTE'
}

export type CommentVoteStats = {
  __typename?: 'CommentVoteStats';
  countDownvotes: Scalars['Int'];
  countUpvotes: Scalars['Int'];
};

export type ConfirmOrder = {
  /** the user card brand */
  cardBrand: Scalars['String'];
  /** the country id from country code from inspire api */
  country?: Maybe<Scalars['String']>;
  /** the user card expiration date */
  expirationDate: Scalars['String'];
  /** the last 4 values of user card */
  lastDigits: Scalars['String'];
  /** the token used on payment gateway */
  paymentGatewayToken: Scalars['String'];
  /** the product id of inspire product */
  product: Scalars['String'];
  /** the product price id of inspire product */
  productPrice: Scalars['String'];
};

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

export type CreateAccountPinnedPost = {
  pinned?: Maybe<Scalars['Boolean']>;
  post: Scalars['String'];
};

export type CreateAccountPinnnedCategory = {
  category: Scalars['String'];
  pinned?: Maybe<Scalars['Boolean']>;
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
  access?: Maybe<PostAccess>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail: Scalars['ID'];
  title: Scalars['String'];
};

export type CreateBillboardInput = {
  actions?: Maybe<Array<BillboardActionInput>>;
  customization: BillboardCustomizationInput;
  delay?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<BillboardTarget>;
  title?: Maybe<Scalars['String']>;
};

export type CreateChannelInput = {
  customization?: Maybe<ChannelCustomizationInput>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  kind: Kinds;
  menu?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
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

export type CreateEnvConfigInput = {
  apiEndpoint: Scalars['String'];
  firebaseApiKey: Scalars['String'];
  firebaseAppId: Scalars['String'];
  firebaseAuthApiKey: Scalars['String'];
  firebaseAuthDomain: Scalars['String'];
  firebaseBucket: Scalars['String'];
  firebaseDatabaseUrl: Scalars['String'];
  firebaseDomain: Scalars['String'];
  firebaseMeasurementId: Scalars['String'];
  firebaseProject: Scalars['String'];
  firebaseSender: Scalars['String'];
  remoteConfigSecret: Scalars['String'];
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
  mp4VodUrl?: Maybe<Scalars['String']>;
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

export type CreateNestedPermissionsInput = {
  actions?: Maybe<Array<Actions>>;
  subjectId: Scalars['ID'];
};

export type CreateOrganizationInput = {
  kind: Kinds;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
};

export type CreatePermissionInput = {
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['ID'];
};

export type CreatePhotoPost = {
  access?: Maybe<PostAccess>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title: Scalars['String'];
};

export type CreatePlaylistInput = {
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type CreateRoleInput = {
  default?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<CreateNestedPermissionsInput>;
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
  access?: Maybe<PostAccess>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
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
  access?: Maybe<PostAccess>;
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['ID']>;
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

export type EncryptedEnvConfig = {
  __typename?: 'EncryptedEnvConfig';
  result: Scalars['String'];
};

export type EngagedUser = {
  __typename?: 'EngagedUser';
  displayName?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  organization: Scalars['String'];
  tenant: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type EnvConfig = {
  __typename?: 'EnvConfig';
  apiEndpoint: Scalars['String'];
  firebaseApiKey: Scalars['String'];
  firebaseAppId: Scalars['String'];
  firebaseAuthApiKey: Scalars['String'];
  firebaseAuthDomain: Scalars['String'];
  firebaseBucket: Scalars['String'];
  firebaseDatabaseUrl: Scalars['String'];
  firebaseDomain: Scalars['String'];
  firebaseMeasurementId: Scalars['String'];
  firebaseProject: Scalars['String'];
  firebaseSender: Scalars['String'];
  id: Scalars['ID'];
  organization: Scalars['ID'];
  remoteConfigSecret: Scalars['String'];
};

export type FilterFindAll = {
  account?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['String']>;
  expireIn?: Maybe<FilterRange>;
  expired?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
};

export type FilterFindAllOrders = {
  limit?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};

export type FilterPinnedCategories = {
  account?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
};

export type FilterPinnedPosts = {
  account?: Maybe<Scalars['String']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  post?: Maybe<Scalars['String']>;
};

export type FilterPlaylistsInput = {
  channel?: Maybe<Scalars['ID']>;
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
  isAvatar?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
};

export type FindAllQueryParamsDto = {
  email__exact?: Maybe<Scalars['String']>;
  first_name__contains?: Maybe<Scalars['String']>;
  first_name__exact?: Maybe<Scalars['String']>;
  is_admin?: Maybe<Scalars['Boolean']>;
  last_name__contains?: Maybe<Scalars['String']>;
  last_name__exact?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<StatusFilter>;
  tenant_id?: Maybe<Scalars['String']>;
  username__contains?: Maybe<Scalars['String']>;
  username__exact?: Maybe<Scalars['String']>;
};

export type FindAllRolesRequestDto = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type FindAllSubjectsQueryParamsDto = {
  entity__contains?: Maybe<Scalars['String']>;
  entity__exact?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
};

export type FindBillboardsInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  target?: Maybe<BillboardTarget>;
};

export type FindManyTagsInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  search?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
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
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['JSON']>;
  menu?: Maybe<Menu>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
};

export type GroupDto = {
  __typename?: 'GroupDto';
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
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

export type HasAccessInput = {
  /** the product id */
  product: Scalars['String'];
};

export type HasAccessOutput = {
  __typename?: 'HasAccessOutput';
  have: Scalars['Boolean'];
};

export enum Kinds {
  Exclusive = 'EXCLUSIVE',
  Paywall = 'PAYWALL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type LiveEvent = {
  __typename?: 'LiveEvent';
  access?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  channel: Scalars['ID'];
  commentsEnabled?: Maybe<Scalars['Boolean']>;
  config?: Maybe<LiveEventConfigOutput>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  encodingProfile?: Maybe<Scalars['String']>;
  entitlements: Array<Scalars['JSONObject']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  hlsPlaybackUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted?: Maybe<Scalars['Boolean']>;
  kind: Kinds;
  organization: Scalars['ID'];
  orientation?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  presenceEnabled?: Maybe<Scalars['Boolean']>;
  pushNotification?: Maybe<PushNotificationOutput>;
  reactionsEnabled?: Maybe<Scalars['Boolean']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  streamName?: Maybe<Scalars['String']>;
  tags: Array<TagOutput>;
  thumbnail?: Maybe<MediaPhoto>;
  title: Scalars['String'];
  type: LiveEventType;
};

export type LiveEventConfig = {
  drm?: Maybe<Scalars['Boolean']>;
  dvr?: Maybe<Scalars['Boolean']>;
  introVideo?: Maybe<Scalars['String']>;
  loop?: Maybe<Scalars['Boolean']>;
  primarySource?: Maybe<Scalars['String']>;
  redundancy?: Maybe<Scalars['Boolean']>;
  secondarySource?: Maybe<Scalars['String']>;
  streamInput?: Maybe<Scalars['String']>;
  streamProfile?: Maybe<Scalars['String']>;
};

export type LiveEventConfigOutput = {
  __typename?: 'LiveEventConfigOutput';
  drm?: Maybe<Scalars['Boolean']>;
  dvr?: Maybe<Scalars['Boolean']>;
  introVideo?: Maybe<Scalars['String']>;
  loop?: Maybe<Scalars['Boolean']>;
  primarySource?: Maybe<Scalars['String']>;
  redundancy?: Maybe<Scalars['Boolean']>;
  secondarySource?: Maybe<Scalars['String']>;
  streamInput?: Maybe<Scalars['String']>;
  streamProfile?: Maybe<Scalars['String']>;
};

export type LiveEventFilter = {
  account?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<Array<Status>>;
  type?: Maybe<LiveEventType>;
};

export type LiveEventGoLiveOutput = {
  __typename?: 'LiveEventGoLiveOutput';
  live?: Maybe<Scalars['Boolean']>;
  liveAt?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
};

export type LiveEventInput = {
  access?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  commentsEnabled?: Maybe<Scalars['Boolean']>;
  config?: Maybe<LiveEventConfig>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSONObject']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  kind?: Maybe<Kinds>;
  orientation?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  presenceEnabled?: Maybe<Scalars['Boolean']>;
  pushNotification?: Maybe<PushNotification>;
  reactionsEnabled?: Maybe<Scalars['Boolean']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: LiveEventType;
};

export type LiveEventPasswordCheck = {
  __typename?: 'LiveEventPasswordCheck';
  correct: Scalars['Boolean'];
};

export type LiveEventPasswordCheckInput = {
  password: Scalars['String'];
};

export type LiveEventSlugExists = {
  __typename?: 'LiveEventSlugExists';
  exists: Scalars['Boolean'];
};

export type LiveEventStopLiveOutput = {
  __typename?: 'LiveEventStopLiveOutput';
  live?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Status>;
};

export enum LiveEventType {
  Mp4File = 'MP4_FILE',
  RtmpPull = 'RTMP_PULL',
  RtmpPush = 'RTMP_PUSH',
  RtpPush = 'RTP_PUSH'
}

export type Me = {
  __typename?: 'Me';
  account: Account;
  createdAt: Scalars['DateTime'];
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
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  filename: Scalars['String'];
  height?: Maybe<Scalars['String']>;
  hlsPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAvatar: Scalars['Boolean'];
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
  isAvatar: Scalars['Boolean'];
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
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
  isAvatar: Scalars['Boolean'];
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
  isAvatar: Scalars['Boolean'];
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
  children: Array<Menu>;
  deleted?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isChild?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  parameters?: Maybe<Parameters>;
  parent?: Maybe<Menu>;
  platformExclusive?: Maybe<PlatformExclusive>;
  route?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type MenuFilter = {
  isChild?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['ID']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type MenuSortingOutput = {
  __typename?: 'MenuSortingOutput';
  ok: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateAccount: AccountActivated;
  activeAccount: Account;
  addComment: Comment;
  addOrder: Order;
  addReaction: Array<ReactionsAggregate>;
  addReport: Report;
  addVote: AddedCommentVote;
  atomicCreateMenu: Menu;
  atomicDeleteMenu: Menu;
  atomicUpdateCategorySorting: CategorySortingOutput;
  atomicUpdateMenuSorting: MenuSortingOutput;
  avatarUpload: ResponseUploadCreation;
  banAccountPerm: Account;
  banAccountTemp: Account;
  bindChannelAndOrganization: Account;
  categoryPasswordCheck: CategoryPasswordCheck;
  channelPasswordCheck: ChannelPasswordCheck;
  confirmOrder: Order;
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
  createEnvConfig: EnvConfig;
  createGroup: GroupDto;
  createLiveEvent: LiveEvent;
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
  deleteAccountPinnedPost: AccountPinnedPost;
  deleteBillboard: Billboard;
  deleteCategory: Category;
  deleteComment: Comment;
  deleteCustomField: ResponseCustomFieldsOutput;
  deleteEmbed: Embed;
  deleteEnvConfig: EnvConfig;
  deleteLiveEvent: LiveEvent;
  deleteMedia: MediaUnion;
  deleteMenu: Menu;
  deleteMyAccount: Account;
  deleteOrder: Order;
  deletePost: Post;
  deleteUpload: ResponseUploadOutput;
  forgetAccount: Account;
  goLive: LiveEventGoLiveOutput;
  hasProductAccess: HasAccessOutput;
  liveEventPasswordCheck: LiveEventPasswordCheck;
  oneTimePayment: Order;
  organizationPasswordCheck: OrganizationPasswordCheck;
  pinCategory: AccountPinnedCategory;
  pinChannel: AccountPinnedChannel;
  pinPost: AccountPinnedPost;
  postPasswordCheck: PostPasswordCheck;
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
  resendActivateAccount: AccountActivated;
  resetPassword: EmailSent;
  sendEmail: ResponseEmailSendedDto;
  signIn: SingIn;
  signInTenantUser: SingIn;
  signOut: Scalars['VoidScalar'];
  socialSignIn: SingIn;
  startMediaUpload: ResponseMediaUploadOutput;
  stopLive: LiveEventStopLiveOutput;
  unbanAccountPerm: Account;
  unbanAccountTemp: Account;
  unpinCategory: AccountPinnedCategory;
  unpinChannel: AccountPinnedChannel;
  unpinPost: AccountPinnedPost;
  updateAccount: Account;
  updateAccountGdprLgpd: AccountGdprLgpd;
  updateAccountPinnedCategory: AccountPinnedCategory;
  updateAccountPinnedPost: AccountPinnedPost;
  updateAccountSession: AccountSession;
  updateAudioPost: Post;
  updateBillboard: Billboard;
  updateCategory: Category;
  updateChannel: Channel;
  updateComment: Comment;
  updateCustomField: ResponseCustomFieldsOutput;
  updateEmailTemplate: EmailTemplate;
  updateEmbed: Embed;
  updateEnvConfig: EnvConfig;
  updateGroup: GroupDto;
  updateIsAdminAccount: Account;
  updateLiveEvent: LiveEvent;
  updateMediaAudio: MediaAudio;
  updateMediaPhoto: MediaPhoto;
  updateMediaVideo: MediaVideo;
  updateMenu: Menu;
  updateMyAccount: Account;
  updateMyProfile: Profile;
  updateOrder: Order;
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


export type MutationActivateAccountArgs = {
  payload: ActivateAccount;
};


export type MutationActiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationAddCommentArgs = {
  payload: AddComment;
};


export type MutationAddOrderArgs = {
  payload: AddOrder;
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


export type MutationAtomicCreateMenuArgs = {
  payload: CreateMenu;
};


export type MutationAtomicDeleteMenuArgs = {
  id: Scalars['String'];
};


export type MutationAtomicUpdateCategorySortingArgs = {
  payload: UpdateCategoriesSorting;
};


export type MutationAtomicUpdateMenuSortingArgs = {
  payload: UpdateMenusSorting;
};


export type MutationAvatarUploadArgs = {
  payload: CreateUploadInput;
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


export type MutationCategoryPasswordCheckArgs = {
  id: Scalars['String'];
  payload: CategoryPasswordCheckInput;
};


export type MutationChannelPasswordCheckArgs = {
  channelId: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationConfirmOrderArgs = {
  payload: ConfirmOrder;
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


export type MutationCreateEnvConfigArgs = {
  payload: CreateEnvConfigInput;
};


export type MutationCreateGroupArgs = {
  payload: CreateGroupDto;
};


export type MutationCreateLiveEventArgs = {
  payload: LiveEventInput;
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


export type MutationDeleteAccountPinnedPostArgs = {
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


export type MutationDeleteEnvConfigArgs = {
  envConfigId: Scalars['ID'];
};


export type MutationDeleteLiveEventArgs = {
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


export type MutationDeleteOrderArgs = {
  id: Scalars['String'];
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


export type MutationGoLiveArgs = {
  id: Scalars['String'];
};


export type MutationHasProductAccessArgs = {
  payload: HasAccessInput;
};


export type MutationLiveEventPasswordCheckArgs = {
  id: Scalars['String'];
  payload: LiveEventPasswordCheckInput;
};


export type MutationOneTimePaymentArgs = {
  payload: OneTimePayment;
};


export type MutationOrganizationPasswordCheckArgs = {
  organizationId: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationPinCategoryArgs = {
  payload: CreateAccountPinnnedCategory;
};


export type MutationPinPostArgs = {
  payload: CreateAccountPinnedPost;
};


export type MutationPostPasswordCheckArgs = {
  id: Scalars['String'];
  payload: PostPasswordCheckInput;
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


export type MutationResendActivateAccountArgs = {
  payload: ResendActivateAccount;
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


export type MutationStopLiveArgs = {
  id: Scalars['String'];
};


export type MutationUnbanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationUnbanAccountTempArgs = {
  account: Scalars['String'];
};


export type MutationUnpinCategoryArgs = {
  categoryId: Scalars['String'];
};


export type MutationUnpinPostArgs = {
  postId: Scalars['String'];
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


export type MutationUpdateAccountPinnedPostArgs = {
  id: Scalars['String'];
  input: UpdateAccountPinnedPost;
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


export type MutationUpdateEnvConfigArgs = {
  envConfigId: Scalars['ID'];
  payload: UpdateEnvConfigInput;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID'];
  payload: UpdateGroupDto;
};


export type MutationUpdateIsAdminAccountArgs = {
  payload: UpdateAccountIsAdminInput;
};


export type MutationUpdateLiveEventArgs = {
  id: Scalars['String'];
  payload: UpdateLiveEventInput;
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


export type MutationUpdateOrderArgs = {
  id: Scalars['String'];
  payload?: Maybe<UpdateOrder>;
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

export type OneTimePayment = {
  currencyId: Scalars['String'];
  customerCard: OneTimePaymentCustomerCard;
  customerGrossAmount: Scalars['Float'];
  saveCardToCustomer?: Maybe<Scalars['Boolean']>;
};

export type OneTimePaymentCustomerCard = {
  cardBrand: Scalars['String'];
  expiredDate: Scalars['String'];
  isDefault?: Maybe<Scalars['Boolean']>;
  lastDigits: Scalars['String'];
  paymentGatewayToken: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  account?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  invoice?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  subscription?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum OrderStatus {
  Active = 'Active',
  Failed = 'Failed',
  Pending = 'Pending'
}

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
  kind?: Maybe<Kinds>;
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

export type OrganizationPasswordCheck = {
  __typename?: 'OrganizationPasswordCheck';
  correct: Scalars['Boolean'];
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
  kind?: Maybe<Kinds>;
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
  createdAt: Scalars['DateTime'];
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

export type PaginatedAccountsOutput = {
  __typename?: 'PaginatedAccountsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Account>;
  total: Scalars['Float'];
};

export type PaginatedBillboardsOutput = {
  __typename?: 'PaginatedBillboardsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Billboard>;
  total: Scalars['Float'];
};

export type PaginatedCategoriesOutput = {
  __typename?: 'PaginatedCategoriesOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Category>;
  total: Scalars['Float'];
};

export type PaginatedCommentsOutput = {
  __typename?: 'PaginatedCommentsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Comment>;
  total: Scalars['Float'];
};

export type PaginatedLiveEventsOutput = {
  __typename?: 'PaginatedLiveEventsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<LiveEvent>;
  total: Scalars['Float'];
};

export type PaginatedMediaUnion = {
  __typename?: 'PaginatedMediaUnion';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<MediaUnion>;
  total: Scalars['Float'];
};

export type PaginatedMenusOutput = {
  __typename?: 'PaginatedMenusOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Menu>;
  total: Scalars['Float'];
};

export type PaginatedPostsOutput = {
  __typename?: 'PaginatedPostsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Post>;
  total: Scalars['Float'];
};

export type PaginatedRolesOutput = {
  __typename?: 'PaginatedRolesOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<RolesDto>;
  total: Scalars['Float'];
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
  createdAt: Scalars['DateTime'];
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

export type PinnedChannelOutput = {
  __typename?: 'PinnedChannelOutput';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSON']>;
  geofence?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
};

export enum PlatformExclusive {
  Mobile = 'Mobile',
  Web = 'Web'
}

export type PlaylistOutput = {
  __typename?: 'PlaylistOutput';
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  posts: Array<Post>;
  slug: Scalars['String'];
  title: Scalars['String'];
};

export type PlaylistsOutput = {
  __typename?: 'PlaylistsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<PlaylistOutput>;
  total: Scalars['Float'];
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
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  devices: Scalars['JSONObject'];
  embed: Scalars['ID'];
  engagedUsers: Array<EngagedUser>;
  entitlements: Array<Scalars['JSONObject']>;
  excerpt: Scalars['JSONObject'];
  featured: Scalars['Boolean'];
  folder: Scalars['ID'];
  geofence: Scalars['JSONObject'];
  id: Scalars['ID'];
  inFeed: Scalars['Boolean'];
  kind: Scalars['String'];
  media?: Maybe<MediaUnion>;
  myReactions: Array<PostReactions>;
  password?: Maybe<Scalars['String']>;
  pinnedStatus?: Maybe<AccountPinnedPost>;
  playlists?: Maybe<Array<PlaylistOutput>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotificationOutput>;
  reactions: Array<PostReactions>;
  schedule: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  tags: Array<TagOutput>;
  teaser: Scalars['ID'];
  thumbnail?: Maybe<MediaPhoto>;
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
  account?: Maybe<Scalars['ID']>;
  categories?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Array<Kinds>>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  pinned?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  typeIn?: Maybe<Array<PostType>>;
};

export type PostPasswordCheck = {
  __typename?: 'PostPasswordCheck';
  correct: Scalars['Boolean'];
};

export type PostPasswordCheckInput = {
  password: Scalars['String'];
};

export type PostReactions = {
  __typename?: 'PostReactions';
  count: Scalars['Int'];
  name: Scalars['String'];
};

export type PostSlugExists = {
  __typename?: 'PostSlugExists';
  exists: Scalars['Boolean'];
};

export enum PostStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
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
  avatar?: Maybe<ProfileAvatar>;
  birthday?: Maybe<Scalars['DateTime']>;
  cpf?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  created_at?: Maybe<Scalars['DateTime']>;
  custom_fields?: Maybe<Scalars['JSONObject']>;
  gender?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type ProfileAvatar = {
  __typename?: 'ProfileAvatar';
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  imgPath?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
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

export type PushNotificationOutput = {
  __typename?: 'PushNotificationOutput';
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
  accountPinnedPost: AccountPinnedPost;
  accountPinnedPosts: Array<AccountPinnedPost>;
  accountSession: AccountSession;
  accountSessions: Array<AccountSession>;
  accounts: PaginatedAccountsOutput;
  accountsCount: ResponseAccountsCount;
  accountsGdprLgpd: Array<AccountGdprLgpd>;
  billboard: Billboard;
  billboards: PaginatedBillboardsOutput;
  categories: PaginatedCategoriesOutput;
  category: Category;
  channel: Channel;
  channels: Array<Channel>;
  checkCategorySlug: CategorySlugExists;
  checkChannel: ResponseAvailabilityOutput;
  checkLiveEventSlug: LiveEventSlugExists;
  checkOrg: ResponseAvailabilityOutput;
  checkPostSlug: PostSlugExists;
  comments: PaginatedCommentsOutput;
  countAccountPinnedCategory: Scalars['Float'];
  countAccountPinnedPost: Scalars['Float'];
  countOrders: Scalars['Int'];
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
  envConfig: EncryptedEnvConfig;
  group: GroupDto;
  groups: Array<GroupDto>;
  liveEvent: LiveEvent;
  liveEvents: PaginatedLiveEventsOutput;
  me: Me;
  media: MediaUnion;
  mediaCount: Scalars['Int'];
  medias: PaginatedMediaUnion;
  menu: Menu;
  menus: PaginatedMenusOutput;
  order: Order;
  orders: Array<Order>;
  organization: Organization;
  organizationPublicSettings: OrganizationPublic;
  organizations: Array<Organization>;
  permission: PermissionDto;
  permissions: Array<PermissionDto>;
  playlist: PlaylistOutput;
  playlists: PlaylistsOutput;
  post: Post;
  posts: PaginatedPostsOutput;
  profile: Profile;
  profiles: Array<Profile>;
  role: RolesDto;
  roles: PaginatedRolesOutput;
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


export type QueryAccountPinnedPostArgs = {
  id: Scalars['String'];
};


export type QueryAccountPinnedPostsArgs = {
  filter?: Maybe<FilterPinnedPosts>;
  pagination: PaginationArgs;
};


export type QueryAccountSessionArgs = {
  id: Scalars['String'];
};


export type QueryAccountsArgs = {
  filter?: Maybe<FindAllQueryParamsDto>;
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
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelsArgs = {
  filter?: Maybe<ChannelFindAllFilter>;
};


export type QueryCheckCategorySlugArgs = {
  slug: Scalars['String'];
};


export type QueryCheckChannelArgs = {
  name: Scalars['String'];
  organizationId: Scalars['String'];
};


export type QueryCheckLiveEventSlugArgs = {
  slug: Scalars['String'];
};


export type QueryCheckOrgArgs = {
  name: Scalars['String'];
};


export type QueryCheckPostSlugArgs = {
  slug: Scalars['String'];
};


export type QueryCommentsArgs = {
  filter?: Maybe<CommentFilter>;
};


export type QueryCountOrdersArgs = {
  filter?: Maybe<FilterFindAllOrders>;
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


export type QueryEnvConfigArgs = {
  origin: Scalars['String'];
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


export type QueryLiveEventArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryLiveEventsArgs = {
  filter?: Maybe<LiveEventFilter>;
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


export type QueryMenusArgs = {
  filter?: Maybe<MenuFilter>;
};


export type QueryOrderArgs = {
  id: Scalars['String'];
};


export type QueryOrdersArgs = {
  filter?: Maybe<FilterFindAllOrders>;
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
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
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
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
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
  createdAt: Scalars['DateTime'];
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

export type ResendActivateAccount = {
  id: Scalars['ID'];
};

export type ResponseAccountsCount = {
  __typename?: 'ResponseAccountsCount';
  count: Scalars['Float'];
  createdAt: Scalars['DateTime'];
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
  createdAt: Scalars['DateTime'];
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
  createdAt: Scalars['DateTime'];
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
  uploadId: Scalars['String'];
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
  createdAt: Scalars['DateTime'];
  default: Scalars['Boolean'];
  description: Scalars['String'];
  /** Id */
  id: Scalars['String'];
  membersAggregate: RolesMembersOutput;
  name: Scalars['String'];
  permissions: Array<PermissionDto>;
  public?: Maybe<Scalars['Boolean']>;
};

export type RolesMembersOutput = {
  __typename?: 'RolesMembersOutput';
  members: Array<Account>;
  total: Scalars['Int'];
};

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
  Draft = 'DRAFT',
  Error = 'ERROR',
  Finished = 'FINISHED',
  Live = 'LIVE',
  Published = 'PUBLISHED',
  Ready = 'READY',
  Scheduled = 'SCHEDULED',
  Stopping = 'STOPPING',
  Trash = 'TRASH'
}

export type StatusFilter = {
  active?: Maybe<Scalars['Boolean']>;
  block_perm?: Maybe<Scalars['Boolean']>;
  block_temp?: Maybe<Scalars['DateTime']>;
  gdpr?: Maybe<Scalars['Boolean']>;
  pending_activation?: Maybe<Scalars['Boolean']>;
};

export type SubjectDto = {
  __typename?: 'SubjectDto';
  createdAt: Scalars['DateTime'];
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
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  relatedCategories: Array<Category>;
  relatedPosts: Array<Post>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TagsOutput = {
  __typename?: 'TagsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<TagOutput>;
  total: Scalars['Float'];
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

export type UpdateAccountPinnedPost = {
  pinned?: Maybe<Scalars['Boolean']>;
};

export type UpdateAccountSessionInput = {
  expires_in: Scalars['Int'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type UpdateAudioPost = {
  access?: Maybe<PostAccess>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateBillboardInput = {
  actions?: Maybe<Array<BillboardActionInput>>;
  customization?: Maybe<BillboardCustomizationInput>;
  delay?: Maybe<Scalars['Int']>;
  deleted?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<BillboardTarget>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCategoriesSorting = {
  changes: Array<UpdateCategorySortingItem>;
};

export type UpdateCategoryInput = {
  access?: Maybe<Scalars['String']>;
  customization?: Maybe<CategoryCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['JSONObject']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  isChild?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type UpdateCategorySortingItem = {
  categoryId: Scalars['ID'];
  children?: Maybe<Array<UpdateCategorySortingItem>>;
  sort: Scalars['Int'];
};

export type UpdateChannelInput = {
  customization?: Maybe<ChannelCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  kind?: Maybe<Kinds>;
  menu?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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

export type UpdateEnvConfigInput = {
  apiEndpoint?: Maybe<Scalars['String']>;
  firebaseApiKey?: Maybe<Scalars['String']>;
  firebaseAppId?: Maybe<Scalars['String']>;
  firebaseAuthApiKey?: Maybe<Scalars['String']>;
  firebaseAuthDomain?: Maybe<Scalars['String']>;
  firebaseBucket?: Maybe<Scalars['String']>;
  firebaseDatabaseUrl?: Maybe<Scalars['String']>;
  firebaseDomain?: Maybe<Scalars['String']>;
  firebaseMeasurementId?: Maybe<Scalars['String']>;
  firebaseProject?: Maybe<Scalars['String']>;
  firebaseSender?: Maybe<Scalars['String']>;
  remoteConfigSecret?: Maybe<Scalars['String']>;
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

export type UpdateLiveEventInput = {
  access?: Maybe<Scalars['String']>;
  backupPublishEndpoint?: Maybe<Scalars['String']>;
  backupStreamName?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  commentsEnabled?: Maybe<Scalars['Boolean']>;
  config?: Maybe<LiveEventConfig>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSONObject']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  kind?: Maybe<Kinds>;
  orientation?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  presenceEnabled?: Maybe<Scalars['Boolean']>;
  primaryPublishEndpoint?: Maybe<Scalars['String']>;
  primaryStreamName?: Maybe<Scalars['String']>;
  reactionsEnabled?: Maybe<Scalars['Boolean']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
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
  isChild?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  route?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type UpdateMenuSortingItem = {
  children?: Maybe<Array<UpdateMenuSortingItem>>;
  menuId: Scalars['ID'];
  sort: Scalars['Int'];
};

export type UpdateMenusSorting = {
  changes: Array<UpdateMenuSortingItem>;
};

export type UpdateOrder = {
  amount?: Maybe<Scalars['Float']>;
  customFields?: Maybe<UpdateOrderCustomFields>;
  invoice?: Maybe<Scalars['String']>;
  payment?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  subscription?: Maybe<Scalars['String']>;
};

export type UpdateOrderCustomFields = {
  fullName?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
  kind?: Maybe<Kinds>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePlaylistInput = {
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
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
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
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
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['ID']>;
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
  mp4VodUrl: Scalars['String'];
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

export type ActivateAccountMutationVariables = Exact<{
  payload: ActivateAccount;
}>;


export type ActivateAccountMutation = { __typename?: 'Mutation', activateAccount: { __typename?: 'AccountActivated', activated: boolean } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshSignIn', refreshToken: { __typename?: 'RefreshToken', accessToken: string, firebaseToken: string } } };

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

export type CategoryPasswordCheckMutationVariables = Exact<{
  id: Scalars['String'];
  payload: CategoryPasswordCheckInput;
}>;


export type CategoryPasswordCheckMutation = { __typename?: 'Mutation', categoryPasswordCheck: { __typename?: 'CategoryPasswordCheck', correct: boolean } };

export type PinCategoryMutationVariables = Exact<{
  payload: CreateAccountPinnnedCategory;
}>;


export type PinCategoryMutation = { __typename?: 'Mutation', pinCategory: { __typename?: 'AccountPinnedCategory', pinned: boolean } };

export type UnpinCategoryMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnpinCategoryMutation = { __typename?: 'Mutation', unpinCategory: { __typename?: 'AccountPinnedCategory', pinned: boolean } };

export type ChannelPasswordCheckMutationVariables = Exact<{
  channelId: Scalars['ID'];
  password: Scalars['String'];
}>;


export type ChannelPasswordCheckMutation = { __typename?: 'Mutation', channelPasswordCheck: { __typename?: 'ChannelPasswordCheck', correct: boolean } };

export type LiveEventPasswordCheckMutationVariables = Exact<{
  id: Scalars['String'];
  payload: LiveEventPasswordCheckInput;
}>;


export type LiveEventPasswordCheckMutation = { __typename?: 'Mutation', liveEventPasswordCheck: { __typename?: 'LiveEventPasswordCheck', correct: boolean } };

export type AddCommentMutationVariables = Exact<{
  payload: AddComment;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', countComments: number, parent?: Maybe<string>, id: string, description: string, createdAt: any, content: string, account: string, myVote: string, author: { __typename?: 'CommentAuthor', displayName?: Maybe<string>, username?: Maybe<string> }, commentVoteStats: { __typename?: 'CommentVoteStats', countUpvotes: number, countDownvotes: number } } };

export type AddReactionMutationVariables = Exact<{
  input: AddReaction;
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction: Array<{ __typename?: 'ReactionsAggregate', name: string, count: number }> };

export type AddReportMutationVariables = Exact<{
  payload: AddReport;
}>;


export type AddReportMutation = { __typename?: 'Mutation', addReport: { __typename?: 'Report', status: string } };

export type DeleteCommentMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: { __typename?: 'Comment', id: string, description: string } };

export type PinPostMutationVariables = Exact<{
  payload: CreateAccountPinnedPost;
}>;


export type PinPostMutation = { __typename?: 'Mutation', pinPost: { __typename?: 'AccountPinnedPost', pinned: boolean } };

export type PostPasswordCheckMutationVariables = Exact<{
  id: Scalars['String'];
  payload: PostPasswordCheckInput;
}>;


export type PostPasswordCheckMutation = { __typename?: 'Mutation', postPasswordCheck: { __typename?: 'PostPasswordCheck', correct: boolean } };

export type RemoveReactionMutationVariables = Exact<{
  input: RemoveReaction;
}>;


export type RemoveReactionMutation = { __typename?: 'Mutation', removeReaction: Array<{ __typename?: 'ReactionsAggregate', name: string, count: number }> };

export type UnpinPostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnpinPostMutation = { __typename?: 'Mutation', unpinPost: { __typename?: 'AccountPinnedPost', pinned: boolean } };

export type UpdateCommentMutationVariables = Exact<{
  id: Scalars['String'];
  payload: UpdateComment;
}>;


export type UpdateCommentMutation = { __typename?: 'Mutation', updateComment: { __typename?: 'Comment', id: string, description: string } };

export type AddVoteMutationVariables = Exact<{
  input: AddCommentVote;
}>;


export type AddVoteMutation = { __typename?: 'Mutation', addVote: { __typename?: 'AddedCommentVote', comment: { __typename?: 'Comment', commentVoteStats: { __typename?: 'CommentVoteStats', countDownvotes: number, countUpvotes: number } }, commentVote: { __typename?: 'CommentVote', direction: CommentVoteDirectionEnum, countUpvotes: number, countDownvotes: number } } };

export type AccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AccountQuery = { __typename?: 'Query', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> } };

export type CustomFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomFieldsQuery = { __typename?: 'Query', customFields: Array<{ __typename?: 'ResponseCustomFieldsOutput', fields: Array<{ __typename?: 'ResponseFieldOutput', id: string, name: string, required: boolean, type: CustomFieldTypesEnum }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> }, profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, birthday?: Maybe<any>, custom_fields?: Maybe<any>, locale?: Maybe<string>, phone?: Maybe<string>, avatar?: Maybe<{ __typename?: 'ProfileAvatar', imgPath?: Maybe<string> }> } } };

export type ProfileQueryVariables = Exact<{
  account: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, birthday?: Maybe<any>, phone?: Maybe<string>, avatar?: Maybe<{ __typename?: 'ProfileAvatar', imgPath?: Maybe<string> }> } };

export type GetBillboardsQueryVariables = Exact<{
  filter?: Maybe<FindBillboardsInput>;
}>;


export type GetBillboardsQuery = { __typename?: 'Query', billboards: { __typename?: 'PaginatedBillboardsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Billboard', id: string, title?: Maybe<string>, description?: Maybe<string>, delay?: Maybe<number>, sort?: Maybe<number>, actions?: Maybe<Array<{ __typename?: 'BillboardActionsOutput', bgColor?: Maybe<string>, borderColor?: Maybe<string>, icon?: Maybe<string>, label?: Maybe<string>, route?: Maybe<string>, textColor?: Maybe<string> }>>, customization: { __typename?: 'BillboardCustomizationOutput', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> } }> } };

export type GetCategoriesQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', access?: Maybe<string>, parentId?: Maybe<string>, slug?: Maybe<string>, createdAt: any, kind: Kinds, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', parentId?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, kind: Kinds, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetCategoryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, access?: Maybe<string>, slug?: Maybe<string>, createdAt: any, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, slug?: Maybe<string>, id: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> } };

export type GetCategoryKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetCategoryKindQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, access?: Maybe<string>, kind: Kinds, name: string } };

export type ChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename: 'AvailableChannel', id: string, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', thumbnail?: Maybe<string>, icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }> }> } | { __typename: 'GeolockedChannel', id: string, name: string, thumbnail?: Maybe<any>, kind?: Maybe<Kinds>, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', thumbnail?: Maybe<string>, icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<string>, light?: Maybe<string> }> }> }> };

export type ChannelQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type ChannelQuery = { __typename?: 'Query', channel: { __typename: 'AvailableChannel', id: string, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string } | { __typename: 'GeolockedChannel', id: string, name: string, thumbnail?: Maybe<any>, slug?: Maybe<string>, kind?: Maybe<Kinds> } };

export type CommentsQueryVariables = Exact<{
  filter?: Maybe<CommentFilter>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'PaginatedCommentsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, total: number, isLastPage: boolean, page: number, pageCount: number, pageSize: number, rows: Array<{ __typename?: 'Comment', description: string, id: string, createdAt: any, countComments: number, parent?: Maybe<string>, account: string, myVote: string, author: { __typename?: 'CommentAuthor', id?: Maybe<string>, displayName?: Maybe<string>, username?: Maybe<string> }, commentVoteStats: { __typename?: 'CommentVoteStats', countDownvotes: number, countUpvotes: number } }> } };

export type GetLiveEventQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetLiveEventQuery = { __typename?: 'Query', liveEvent: { __typename?: 'LiveEvent', access?: Maybe<string>, createdAt: any, description?: Maybe<string>, id: string, kind: Kinds, scheduledStartAt?: Maybe<any>, commentsEnabled?: Maybe<boolean>, hlsPlaybackUrl?: Maybe<string>, presenceEnabled?: Maybe<boolean>, reactionsEnabled?: Maybe<boolean>, slug?: Maybe<string>, status?: Maybe<Status>, streamName?: Maybe<string>, title: string, type: LiveEventType } };

export type GetLiveEventKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetLiveEventKindQuery = { __typename?: 'Query', liveEvent: { __typename?: 'LiveEvent', id: string, title: string, access?: Maybe<string>, kind: Kinds } };

export type GetLiveEventsQueryVariables = Exact<{
  filter?: Maybe<LiveEventFilter>;
}>;


export type GetLiveEventsQuery = { __typename?: 'Query', liveEvents: { __typename?: 'PaginatedLiveEventsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename: 'LiveEvent', id: string, access?: Maybe<string>, createdAt: any, description?: Maybe<string>, kind: Kinds, scheduledStartAt?: Maybe<any>, slug?: Maybe<string>, status?: Maybe<Status>, title: string, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }> }> } };

export type MenusQueryVariables = Exact<{ [key: string]: never; }>;


export type MenusQuery = { __typename?: 'Query', menus: { __typename?: 'PaginatedMenusOutput', rows: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }>, children: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }> }> }> } };

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string } };

export type OrganizationPublicSettingsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationPublicSettingsQuery = { __typename?: 'Query', organizationPublicSettings: { __typename?: 'OrganizationPublic', id: string, name?: Maybe<string>, kind?: Maybe<Kinds>, status?: Maybe<string>, tenant_id?: Maybe<string>, customization?: Maybe<any>, avatarCdnBaseUrl?: Maybe<string>, audioCdnBaseUrl?: Maybe<string>, imageCdnBaseUrl?: Maybe<string> } };

export type GetPlaylistQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist: { __typename: 'PlaylistOutput', id: string, title: string, posts: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', duration?: Maybe<number>, mp3Path?: Maybe<string> } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetPostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, access: string, allowComments: boolean, countComments: number, countReactions: number, description: string, featured: boolean, geofence: any, kind: string, title: string, type: string, categories: Array<{ __typename?: 'Category', id: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, playlists?: Maybe<Array<{ __typename?: 'PlaylistOutput', id: string, slug: string, title: string }>>, engagedUsers: Array<{ __typename?: 'EngagedUser', username?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number>, mp3Path?: Maybe<string> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaVideo', id: string, baseUrl?: Maybe<string>, mp4Path?: Maybe<string>, duration?: Maybe<number>, aspectRatio?: Maybe<string>, createdAt: any, hlsPath?: Maybe<string> }>, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, reactions: Array<{ __typename?: 'PostReactions', name: string, count: number }> } };

export type GetPostKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPostKindQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title: string, access: string, kind: string, entitlements: Array<any> } };

export type GetPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, description: string, geofence: any, kind: string, slug?: Maybe<string>, status: string, title: string, type: string, publishedAt?: Maybe<any>, countComments: number, countReactions: number, inFeed: boolean, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number> }>, reactions: Array<{ __typename?: 'PostReactions', count: number, name: string }> }> } };

export type GetPostsCardsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsCardsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetTagQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type GetTagQuery = { __typename?: 'Query', tag: { __typename?: 'TagOutput', id: string, title: string, description?: Maybe<string>, slug: string, relatedCategories: Array<{ __typename?: 'Category', access?: Maybe<string>, slug?: Maybe<string>, id: string, description?: Maybe<string>, name: string, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }>, relatedPosts: Array<{ __typename?: 'Post', access: string, slug?: Maybe<string>, status: string, id: string, description: string, title: string, kind: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }> }> } };


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
export const ActivateAccountDocument = gql`
    mutation ActivateAccount($payload: ActivateAccount!) {
  activateAccount(payload: $payload) {
    activated
  }
}
    `;
export type ActivateAccountMutationFn = Apollo.MutationFunction<ActivateAccountMutation, ActivateAccountMutationVariables>;
export type ActivateAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ActivateAccountMutation, ActivateAccountMutationVariables>, 'mutation'>;

    export const ActivateAccountComponent = (props: ActivateAccountComponentProps) => (
      <ApolloReactComponents.Mutation<ActivateAccountMutation, ActivateAccountMutationVariables> mutation={ActivateAccountDocument} {...props} />
    );
    

/**
 * __useActivateAccountMutation__
 *
 * To run a mutation, you first call `useActivateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateAccountMutation, { data, loading, error }] = useActivateAccountMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useActivateAccountMutation(baseOptions?: Apollo.MutationHookOptions<ActivateAccountMutation, ActivateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ActivateAccountMutation, ActivateAccountMutationVariables>(ActivateAccountDocument, options);
      }
export type ActivateAccountMutationHookResult = ReturnType<typeof useActivateAccountMutation>;
export type ActivateAccountMutationResult = Apollo.MutationResult<ActivateAccountMutation>;
export type ActivateAccountMutationOptions = Apollo.BaseMutationOptions<ActivateAccountMutation, ActivateAccountMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    refreshToken {
      accessToken
      firebaseToken
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
export const CategoryPasswordCheckDocument = gql`
    mutation CategoryPasswordCheck($id: String!, $payload: CategoryPasswordCheckInput!) {
  categoryPasswordCheck(id: $id, payload: $payload) {
    correct
  }
}
    `;
export type CategoryPasswordCheckMutationFn = Apollo.MutationFunction<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables>;
export type CategoryPasswordCheckComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables>, 'mutation'>;

    export const CategoryPasswordCheckComponent = (props: CategoryPasswordCheckComponentProps) => (
      <ApolloReactComponents.Mutation<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables> mutation={CategoryPasswordCheckDocument} {...props} />
    );
    

/**
 * __useCategoryPasswordCheckMutation__
 *
 * To run a mutation, you first call `useCategoryPasswordCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCategoryPasswordCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [categoryPasswordCheckMutation, { data, loading, error }] = useCategoryPasswordCheckMutation({
 *   variables: {
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCategoryPasswordCheckMutation(baseOptions?: Apollo.MutationHookOptions<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables>(CategoryPasswordCheckDocument, options);
      }
export type CategoryPasswordCheckMutationHookResult = ReturnType<typeof useCategoryPasswordCheckMutation>;
export type CategoryPasswordCheckMutationResult = Apollo.MutationResult<CategoryPasswordCheckMutation>;
export type CategoryPasswordCheckMutationOptions = Apollo.BaseMutationOptions<CategoryPasswordCheckMutation, CategoryPasswordCheckMutationVariables>;
export const PinCategoryDocument = gql`
    mutation PinCategory($payload: CreateAccountPinnnedCategory!) {
  pinCategory(payload: $payload) {
    pinned
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
export const UnpinCategoryDocument = gql`
    mutation UnpinCategory($id: String!) {
  unpinCategory(categoryId: $id) {
    pinned
  }
}
    `;
export type UnpinCategoryMutationFn = Apollo.MutationFunction<UnpinCategoryMutation, UnpinCategoryMutationVariables>;
export type UnpinCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UnpinCategoryMutation, UnpinCategoryMutationVariables>, 'mutation'>;

    export const UnpinCategoryComponent = (props: UnpinCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<UnpinCategoryMutation, UnpinCategoryMutationVariables> mutation={UnpinCategoryDocument} {...props} />
    );
    

/**
 * __useUnpinCategoryMutation__
 *
 * To run a mutation, you first call `useUnpinCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpinCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpinCategoryMutation, { data, loading, error }] = useUnpinCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnpinCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UnpinCategoryMutation, UnpinCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnpinCategoryMutation, UnpinCategoryMutationVariables>(UnpinCategoryDocument, options);
      }
export type UnpinCategoryMutationHookResult = ReturnType<typeof useUnpinCategoryMutation>;
export type UnpinCategoryMutationResult = Apollo.MutationResult<UnpinCategoryMutation>;
export type UnpinCategoryMutationOptions = Apollo.BaseMutationOptions<UnpinCategoryMutation, UnpinCategoryMutationVariables>;
export const ChannelPasswordCheckDocument = gql`
    mutation ChannelPasswordCheck($channelId: ID!, $password: String!) {
  channelPasswordCheck(channelId: $channelId, password: $password) {
    correct
  }
}
    `;
export type ChannelPasswordCheckMutationFn = Apollo.MutationFunction<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables>;
export type ChannelPasswordCheckComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables>, 'mutation'>;

    export const ChannelPasswordCheckComponent = (props: ChannelPasswordCheckComponentProps) => (
      <ApolloReactComponents.Mutation<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables> mutation={ChannelPasswordCheckDocument} {...props} />
    );
    

/**
 * __useChannelPasswordCheckMutation__
 *
 * To run a mutation, you first call `useChannelPasswordCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChannelPasswordCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [channelPasswordCheckMutation, { data, loading, error }] = useChannelPasswordCheckMutation({
 *   variables: {
 *      channelId: // value for 'channelId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChannelPasswordCheckMutation(baseOptions?: Apollo.MutationHookOptions<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables>(ChannelPasswordCheckDocument, options);
      }
export type ChannelPasswordCheckMutationHookResult = ReturnType<typeof useChannelPasswordCheckMutation>;
export type ChannelPasswordCheckMutationResult = Apollo.MutationResult<ChannelPasswordCheckMutation>;
export type ChannelPasswordCheckMutationOptions = Apollo.BaseMutationOptions<ChannelPasswordCheckMutation, ChannelPasswordCheckMutationVariables>;
export const LiveEventPasswordCheckDocument = gql`
    mutation LiveEventPasswordCheck($id: String!, $payload: LiveEventPasswordCheckInput!) {
  liveEventPasswordCheck(id: $id, payload: $payload) {
    correct
  }
}
    `;
export type LiveEventPasswordCheckMutationFn = Apollo.MutationFunction<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables>;
export type LiveEventPasswordCheckComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables>, 'mutation'>;

    export const LiveEventPasswordCheckComponent = (props: LiveEventPasswordCheckComponentProps) => (
      <ApolloReactComponents.Mutation<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables> mutation={LiveEventPasswordCheckDocument} {...props} />
    );
    

/**
 * __useLiveEventPasswordCheckMutation__
 *
 * To run a mutation, you first call `useLiveEventPasswordCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLiveEventPasswordCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [liveEventPasswordCheckMutation, { data, loading, error }] = useLiveEventPasswordCheckMutation({
 *   variables: {
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useLiveEventPasswordCheckMutation(baseOptions?: Apollo.MutationHookOptions<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables>(LiveEventPasswordCheckDocument, options);
      }
export type LiveEventPasswordCheckMutationHookResult = ReturnType<typeof useLiveEventPasswordCheckMutation>;
export type LiveEventPasswordCheckMutationResult = Apollo.MutationResult<LiveEventPasswordCheckMutation>;
export type LiveEventPasswordCheckMutationOptions = Apollo.BaseMutationOptions<LiveEventPasswordCheckMutation, LiveEventPasswordCheckMutationVariables>;
export const AddCommentDocument = gql`
    mutation addComment($payload: AddComment!) {
  addComment(payload: $payload) {
    countComments
    author {
      displayName
      username
    }
    parent
    id
    description
    createdAt
    commentVoteStats {
      countUpvotes
      countDownvotes
    }
    content
    account
    myVote
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;
export type AddCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddCommentMutation, AddCommentMutationVariables>, 'mutation'>;

    export const AddCommentComponent = (props: AddCommentComponentProps) => (
      <ApolloReactComponents.Mutation<AddCommentMutation, AddCommentMutationVariables> mutation={AddCommentDocument} {...props} />
    );
    

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const AddReactionDocument = gql`
    mutation addReaction($input: AddReaction!) {
  addReaction(input: $input) {
    name
    count
  }
}
    `;
export type AddReactionMutationFn = Apollo.MutationFunction<AddReactionMutation, AddReactionMutationVariables>;
export type AddReactionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddReactionMutation, AddReactionMutationVariables>, 'mutation'>;

    export const AddReactionComponent = (props: AddReactionComponentProps) => (
      <ApolloReactComponents.Mutation<AddReactionMutation, AddReactionMutationVariables> mutation={AddReactionDocument} {...props} />
    );
    

/**
 * __useAddReactionMutation__
 *
 * To run a mutation, you first call `useAddReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReactionMutation, { data, loading, error }] = useAddReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddReactionMutation(baseOptions?: Apollo.MutationHookOptions<AddReactionMutation, AddReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReactionMutation, AddReactionMutationVariables>(AddReactionDocument, options);
      }
export type AddReactionMutationHookResult = ReturnType<typeof useAddReactionMutation>;
export type AddReactionMutationResult = Apollo.MutationResult<AddReactionMutation>;
export type AddReactionMutationOptions = Apollo.BaseMutationOptions<AddReactionMutation, AddReactionMutationVariables>;
export const AddReportDocument = gql`
    mutation AddReport($payload: AddReport!) {
  addReport(payload: $payload) {
    status
  }
}
    `;
export type AddReportMutationFn = Apollo.MutationFunction<AddReportMutation, AddReportMutationVariables>;
export type AddReportComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddReportMutation, AddReportMutationVariables>, 'mutation'>;

    export const AddReportComponent = (props: AddReportComponentProps) => (
      <ApolloReactComponents.Mutation<AddReportMutation, AddReportMutationVariables> mutation={AddReportDocument} {...props} />
    );
    

/**
 * __useAddReportMutation__
 *
 * To run a mutation, you first call `useAddReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReportMutation, { data, loading, error }] = useAddReportMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useAddReportMutation(baseOptions?: Apollo.MutationHookOptions<AddReportMutation, AddReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddReportMutation, AddReportMutationVariables>(AddReportDocument, options);
      }
export type AddReportMutationHookResult = ReturnType<typeof useAddReportMutation>;
export type AddReportMutationResult = Apollo.MutationResult<AddReportMutation>;
export type AddReportMutationOptions = Apollo.BaseMutationOptions<AddReportMutation, AddReportMutationVariables>;
export const DeleteCommentDocument = gql`
    mutation deleteComment($id: String!) {
  deleteComment(id: $id) {
    id
    description
  }
}
    `;
export type DeleteCommentMutationFn = Apollo.MutationFunction<DeleteCommentMutation, DeleteCommentMutationVariables>;
export type DeleteCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<DeleteCommentMutation, DeleteCommentMutationVariables>, 'mutation'>;

    export const DeleteCommentComponent = (props: DeleteCommentComponentProps) => (
      <ApolloReactComponents.Mutation<DeleteCommentMutation, DeleteCommentMutationVariables> mutation={DeleteCommentDocument} {...props} />
    );
    

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentMutation, DeleteCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentMutation, DeleteCommentMutationVariables>(DeleteCommentDocument, options);
      }
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const PinPostDocument = gql`
    mutation PinPost($payload: CreateAccountPinnedPost!) {
  pinPost(payload: $payload) {
    pinned
  }
}
    `;
export type PinPostMutationFn = Apollo.MutationFunction<PinPostMutation, PinPostMutationVariables>;
export type PinPostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PinPostMutation, PinPostMutationVariables>, 'mutation'>;

    export const PinPostComponent = (props: PinPostComponentProps) => (
      <ApolloReactComponents.Mutation<PinPostMutation, PinPostMutationVariables> mutation={PinPostDocument} {...props} />
    );
    

/**
 * __usePinPostMutation__
 *
 * To run a mutation, you first call `usePinPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePinPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pinPostMutation, { data, loading, error }] = usePinPostMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function usePinPostMutation(baseOptions?: Apollo.MutationHookOptions<PinPostMutation, PinPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PinPostMutation, PinPostMutationVariables>(PinPostDocument, options);
      }
export type PinPostMutationHookResult = ReturnType<typeof usePinPostMutation>;
export type PinPostMutationResult = Apollo.MutationResult<PinPostMutation>;
export type PinPostMutationOptions = Apollo.BaseMutationOptions<PinPostMutation, PinPostMutationVariables>;
export const PostPasswordCheckDocument = gql`
    mutation PostPasswordCheck($id: String!, $payload: PostPasswordCheckInput!) {
  postPasswordCheck(id: $id, payload: $payload) {
    correct
  }
}
    `;
export type PostPasswordCheckMutationFn = Apollo.MutationFunction<PostPasswordCheckMutation, PostPasswordCheckMutationVariables>;
export type PostPasswordCheckComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<PostPasswordCheckMutation, PostPasswordCheckMutationVariables>, 'mutation'>;

    export const PostPasswordCheckComponent = (props: PostPasswordCheckComponentProps) => (
      <ApolloReactComponents.Mutation<PostPasswordCheckMutation, PostPasswordCheckMutationVariables> mutation={PostPasswordCheckDocument} {...props} />
    );
    

/**
 * __usePostPasswordCheckMutation__
 *
 * To run a mutation, you first call `usePostPasswordCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostPasswordCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postPasswordCheckMutation, { data, loading, error }] = usePostPasswordCheckMutation({
 *   variables: {
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function usePostPasswordCheckMutation(baseOptions?: Apollo.MutationHookOptions<PostPasswordCheckMutation, PostPasswordCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostPasswordCheckMutation, PostPasswordCheckMutationVariables>(PostPasswordCheckDocument, options);
      }
export type PostPasswordCheckMutationHookResult = ReturnType<typeof usePostPasswordCheckMutation>;
export type PostPasswordCheckMutationResult = Apollo.MutationResult<PostPasswordCheckMutation>;
export type PostPasswordCheckMutationOptions = Apollo.BaseMutationOptions<PostPasswordCheckMutation, PostPasswordCheckMutationVariables>;
export const RemoveReactionDocument = gql`
    mutation RemoveReaction($input: RemoveReaction!) {
  removeReaction(input: $input) {
    name
    count
  }
}
    `;
export type RemoveReactionMutationFn = Apollo.MutationFunction<RemoveReactionMutation, RemoveReactionMutationVariables>;
export type RemoveReactionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveReactionMutation, RemoveReactionMutationVariables>, 'mutation'>;

    export const RemoveReactionComponent = (props: RemoveReactionComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveReactionMutation, RemoveReactionMutationVariables> mutation={RemoveReactionDocument} {...props} />
    );
    

/**
 * __useRemoveReactionMutation__
 *
 * To run a mutation, you first call `useRemoveReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeReactionMutation, { data, loading, error }] = useRemoveReactionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRemoveReactionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveReactionMutation, RemoveReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveReactionMutation, RemoveReactionMutationVariables>(RemoveReactionDocument, options);
      }
export type RemoveReactionMutationHookResult = ReturnType<typeof useRemoveReactionMutation>;
export type RemoveReactionMutationResult = Apollo.MutationResult<RemoveReactionMutation>;
export type RemoveReactionMutationOptions = Apollo.BaseMutationOptions<RemoveReactionMutation, RemoveReactionMutationVariables>;
export const UnpinPostDocument = gql`
    mutation UnpinPost($id: String!) {
  unpinPost(postId: $id) {
    pinned
  }
}
    `;
export type UnpinPostMutationFn = Apollo.MutationFunction<UnpinPostMutation, UnpinPostMutationVariables>;
export type UnpinPostComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UnpinPostMutation, UnpinPostMutationVariables>, 'mutation'>;

    export const UnpinPostComponent = (props: UnpinPostComponentProps) => (
      <ApolloReactComponents.Mutation<UnpinPostMutation, UnpinPostMutationVariables> mutation={UnpinPostDocument} {...props} />
    );
    

/**
 * __useUnpinPostMutation__
 *
 * To run a mutation, you first call `useUnpinPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnpinPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unpinPostMutation, { data, loading, error }] = useUnpinPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnpinPostMutation(baseOptions?: Apollo.MutationHookOptions<UnpinPostMutation, UnpinPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnpinPostMutation, UnpinPostMutationVariables>(UnpinPostDocument, options);
      }
export type UnpinPostMutationHookResult = ReturnType<typeof useUnpinPostMutation>;
export type UnpinPostMutationResult = Apollo.MutationResult<UnpinPostMutation>;
export type UnpinPostMutationOptions = Apollo.BaseMutationOptions<UnpinPostMutation, UnpinPostMutationVariables>;
export const UpdateCommentDocument = gql`
    mutation UpdateComment($id: String!, $payload: UpdateComment!) {
  updateComment(id: $id, payload: $payload) {
    id
    description
  }
}
    `;
export type UpdateCommentMutationFn = Apollo.MutationFunction<UpdateCommentMutation, UpdateCommentMutationVariables>;
export type UpdateCommentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateCommentMutation, UpdateCommentMutationVariables>, 'mutation'>;

    export const UpdateCommentComponent = (props: UpdateCommentComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateCommentMutation, UpdateCommentMutationVariables> mutation={UpdateCommentDocument} {...props} />
    );
    

/**
 * __useUpdateCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCommentMutation, { data, loading, error }] = useUpdateCommentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCommentMutation, UpdateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCommentMutation, UpdateCommentMutationVariables>(UpdateCommentDocument, options);
      }
export type UpdateCommentMutationHookResult = ReturnType<typeof useUpdateCommentMutation>;
export type UpdateCommentMutationResult = Apollo.MutationResult<UpdateCommentMutation>;
export type UpdateCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCommentMutation, UpdateCommentMutationVariables>;
export const AddVoteDocument = gql`
    mutation AddVote($input: AddCommentVote!) {
  addVote(input: $input) {
    comment {
      commentVoteStats {
        countDownvotes
        countUpvotes
      }
    }
    commentVote {
      direction
      countUpvotes
      countDownvotes
    }
  }
}
    `;
export type AddVoteMutationFn = Apollo.MutationFunction<AddVoteMutation, AddVoteMutationVariables>;
export type AddVoteComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddVoteMutation, AddVoteMutationVariables>, 'mutation'>;

    export const AddVoteComponent = (props: AddVoteComponentProps) => (
      <ApolloReactComponents.Mutation<AddVoteMutation, AddVoteMutationVariables> mutation={AddVoteDocument} {...props} />
    );
    

/**
 * __useAddVoteMutation__
 *
 * To run a mutation, you first call `useAddVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVoteMutation, { data, loading, error }] = useAddVoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddVoteMutation(baseOptions?: Apollo.MutationHookOptions<AddVoteMutation, AddVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddVoteMutation, AddVoteMutationVariables>(AddVoteDocument, options);
      }
export type AddVoteMutationHookResult = ReturnType<typeof useAddVoteMutation>;
export type AddVoteMutationResult = Apollo.MutationResult<AddVoteMutation>;
export type AddVoteMutationOptions = Apollo.BaseMutationOptions<AddVoteMutation, AddVoteMutationVariables>;
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
      avatar {
        imgPath
      }
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
    avatar {
      imgPath
    }
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
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
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
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
      access
      pinnedStatus {
        pinned
      }
      parentId
      slug
      createdAt
      kind
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
        parentId
        slug
        description
        featuredAt
        pinnedStatus {
          pinned
        }
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
          __typename
        }
        geoFence
        id
        kind
        name
        description
      }
      description
      featuredAt
      geoFence
      id
      name
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
    query GetCategory($slug: String) {
  category(slug: $slug) {
    id
    access
    slug
    createdAt
    pinnedStatus {
      pinned
    }
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
      pinnedStatus {
        pinned
      }
      name
      slug
      id
      description
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
  }
}
    `;
export type GetCategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoryQuery, GetCategoryQueryVariables>, 'query'>;

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
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryQuery, GetCategoryQueryVariables>) {
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
export const GetCategoryKindDocument = gql`
    query GetCategoryKind($slug: String) {
  category(slug: $slug) {
    id
    access
    kind
    name
  }
}
    `;
export type GetCategoryKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoryKindQuery, GetCategoryKindQueryVariables>, 'query'>;

    export const GetCategoryKindComponent = (props: GetCategoryKindComponentProps) => (
      <ApolloReactComponents.Query<GetCategoryKindQuery, GetCategoryKindQueryVariables> query={GetCategoryKindDocument} {...props} />
    );
    

/**
 * __useGetCategoryKindQuery__
 *
 * To run a query within a React component, call `useGetCategoryKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetCategoryKindQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoryKindQuery, GetCategoryKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryKindQuery, GetCategoryKindQueryVariables>(GetCategoryKindDocument, options);
      }
export function useGetCategoryKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryKindQuery, GetCategoryKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryKindQuery, GetCategoryKindQueryVariables>(GetCategoryKindDocument, options);
        }
export type GetCategoryKindQueryHookResult = ReturnType<typeof useGetCategoryKindQuery>;
export type GetCategoryKindLazyQueryHookResult = ReturnType<typeof useGetCategoryKindLazyQuery>;
export type GetCategoryKindQueryResult = Apollo.QueryResult<GetCategoryKindQuery, GetCategoryKindQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($filter: ChannelFindAllFilter!) {
  channels(filter: $filter) {
    ... on AvailableChannel {
      id
      kind
      description
      geofence
      slug
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
export const ChannelDocument = gql`
    query Channel($slug: String) {
  channel(slug: $slug) {
    ... on AvailableChannel {
      id
      kind
      description
      geofence
      slug
      name
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      thumbnail
      slug
      kind
      __typename
    }
  }
}
    `;
export type ChannelComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChannelQuery, ChannelQueryVariables>, 'query'>;

    export const ChannelComponent = (props: ChannelComponentProps) => (
      <ApolloReactComponents.Query<ChannelQuery, ChannelQueryVariables> query={ChannelDocument} {...props} />
    );
    

/**
 * __useChannelQuery__
 *
 * To run a query within a React component, call `useChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChannelQuery(baseOptions?: Apollo.QueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
      }
export function useChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelQuery, ChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelQuery, ChannelQueryVariables>(ChannelDocument, options);
        }
export type ChannelQueryHookResult = ReturnType<typeof useChannelQuery>;
export type ChannelLazyQueryHookResult = ReturnType<typeof useChannelLazyQuery>;
export type ChannelQueryResult = Apollo.QueryResult<ChannelQuery, ChannelQueryVariables>;
export const CommentsDocument = gql`
    query Comments($filter: CommentFilter) {
  comments(filter: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    total
    rows {
      author {
        id
        displayName
        username
      }
      description
      id
      commentVoteStats {
        countDownvotes
        countUpvotes
      }
      createdAt
      countComments
      parent
      account
      myVote
    }
    isLastPage
    page
    pageCount
    pageSize
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
export const GetLiveEventDocument = gql`
    query GetLiveEvent($slug: String) {
  liveEvent(slug: $slug) {
    access
    createdAt
    description
    id
    kind
    scheduledStartAt
    commentsEnabled
    hlsPlaybackUrl
    presenceEnabled
    reactionsEnabled
    slug
    status
    streamName
    title
    type
  }
}
    `;
export type GetLiveEventComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLiveEventQuery, GetLiveEventQueryVariables>, 'query'>;

    export const GetLiveEventComponent = (props: GetLiveEventComponentProps) => (
      <ApolloReactComponents.Query<GetLiveEventQuery, GetLiveEventQueryVariables> query={GetLiveEventDocument} {...props} />
    );
    

/**
 * __useGetLiveEventQuery__
 *
 * To run a query within a React component, call `useGetLiveEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveEventQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLiveEventQuery(baseOptions?: Apollo.QueryHookOptions<GetLiveEventQuery, GetLiveEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLiveEventQuery, GetLiveEventQueryVariables>(GetLiveEventDocument, options);
      }
export function useGetLiveEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLiveEventQuery, GetLiveEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLiveEventQuery, GetLiveEventQueryVariables>(GetLiveEventDocument, options);
        }
export type GetLiveEventQueryHookResult = ReturnType<typeof useGetLiveEventQuery>;
export type GetLiveEventLazyQueryHookResult = ReturnType<typeof useGetLiveEventLazyQuery>;
export type GetLiveEventQueryResult = Apollo.QueryResult<GetLiveEventQuery, GetLiveEventQueryVariables>;
export const GetLiveEventKindDocument = gql`
    query GetLiveEventKind($slug: String) {
  liveEvent(slug: $slug) {
    id
    title
    access
    kind
  }
}
    `;
export type GetLiveEventKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>, 'query'>;

    export const GetLiveEventKindComponent = (props: GetLiveEventKindComponentProps) => (
      <ApolloReactComponents.Query<GetLiveEventKindQuery, GetLiveEventKindQueryVariables> query={GetLiveEventKindDocument} {...props} />
    );
    

/**
 * __useGetLiveEventKindQuery__
 *
 * To run a query within a React component, call `useGetLiveEventKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveEventKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveEventKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLiveEventKindQuery(baseOptions?: Apollo.QueryHookOptions<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>(GetLiveEventKindDocument, options);
      }
export function useGetLiveEventKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>(GetLiveEventKindDocument, options);
        }
export type GetLiveEventKindQueryHookResult = ReturnType<typeof useGetLiveEventKindQuery>;
export type GetLiveEventKindLazyQueryHookResult = ReturnType<typeof useGetLiveEventKindLazyQuery>;
export type GetLiveEventKindQueryResult = Apollo.QueryResult<GetLiveEventKindQuery, GetLiveEventKindQueryVariables>;
export const GetLiveEventsDocument = gql`
    query GetLiveEvents($filter: LiveEventFilter) {
  liveEvents(filter: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageCount
    pageNumberIsGood
    pageSize
    rows {
      id
      access
      createdAt
      description
      kind
      scheduledStartAt
      slug
      status
      thumbnail {
        imgPath
      }
      title
      __typename
    }
  }
}
    `;
export type GetLiveEventsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetLiveEventsQuery, GetLiveEventsQueryVariables>, 'query'>;

    export const GetLiveEventsComponent = (props: GetLiveEventsComponentProps) => (
      <ApolloReactComponents.Query<GetLiveEventsQuery, GetLiveEventsQueryVariables> query={GetLiveEventsDocument} {...props} />
    );
    

/**
 * __useGetLiveEventsQuery__
 *
 * To run a query within a React component, call `useGetLiveEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetLiveEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetLiveEventsQuery, GetLiveEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLiveEventsQuery, GetLiveEventsQueryVariables>(GetLiveEventsDocument, options);
      }
export function useGetLiveEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLiveEventsQuery, GetLiveEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLiveEventsQuery, GetLiveEventsQueryVariables>(GetLiveEventsDocument, options);
        }
export type GetLiveEventsQueryHookResult = ReturnType<typeof useGetLiveEventsQuery>;
export type GetLiveEventsLazyQueryHookResult = ReturnType<typeof useGetLiveEventsLazyQuery>;
export type GetLiveEventsQueryResult = Apollo.QueryResult<GetLiveEventsQuery, GetLiveEventsQueryVariables>;
export const MenusDocument = gql`
    query Menus {
  menus {
    rows {
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
export const GetPlaylistDocument = gql`
    query GetPlaylist($id: ID!) {
  playlist(id: $id) {
    id
    title
    posts {
      id
      access
      title
      description
      kind
      slug
      pinnedStatus {
        pinned
      }
      thumbnail {
        imgPath
      }
      media {
        ... on MediaVideo {
          id
          duration
          thumbnailPath
          baseUrl
        }
        ... on MediaAudio {
          duration
          mp3Path
        }
      }
      type
    }
    __typename
  }
}
    `;
export type GetPlaylistComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPlaylistQuery, GetPlaylistQueryVariables>, 'query'> & ({ variables: GetPlaylistQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPlaylistComponent = (props: GetPlaylistComponentProps) => (
      <ApolloReactComponents.Query<GetPlaylistQuery, GetPlaylistQueryVariables> query={GetPlaylistDocument} {...props} />
    );
    

/**
 * __useGetPlaylistQuery__
 *
 * To run a query within a React component, call `useGetPlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPlaylistQuery(baseOptions: Apollo.QueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
      }
export function useGetPlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlaylistQuery, GetPlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlaylistQuery, GetPlaylistQueryVariables>(GetPlaylistDocument, options);
        }
export type GetPlaylistQueryHookResult = ReturnType<typeof useGetPlaylistQuery>;
export type GetPlaylistLazyQueryHookResult = ReturnType<typeof useGetPlaylistLazyQuery>;
export type GetPlaylistQueryResult = Apollo.QueryResult<GetPlaylistQuery, GetPlaylistQueryVariables>;
export const GetPostDocument = gql`
    query GetPost($slug: String) {
  post(slug: $slug) {
    id
    access
    allowComments
    countComments
    countReactions
    description
    categories {
      id
    }
    pinnedStatus {
      pinned
    }
    featured
    geofence
    kind
    playlists {
      id
      slug
      title
    }
    engagedUsers {
      username
    }
    media {
      ... on MediaVideo {
        id
        baseUrl
        mp4Path
        duration
        aspectRatio
        createdAt
        hlsPath
      }
      ... on MediaAudio {
        id
        duration
        mp3Path
      }
      ... on MediaPhoto {
        id
        imgPath
      }
    }
    myReactions {
      name
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
export type GetPostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostQuery, GetPostQueryVariables>, 'query'>;

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
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
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
export const GetPostKindDocument = gql`
    query GetPostKind($slug: String) {
  post(slug: $slug) {
    id
    title
    access
    kind
    entitlements
  }
}
    `;
export type GetPostKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostKindQuery, GetPostKindQueryVariables>, 'query'>;

    export const GetPostKindComponent = (props: GetPostKindComponentProps) => (
      <ApolloReactComponents.Query<GetPostKindQuery, GetPostKindQueryVariables> query={GetPostKindDocument} {...props} />
    );
    

/**
 * __useGetPostKindQuery__
 *
 * To run a query within a React component, call `useGetPostKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetPostKindQuery(baseOptions?: Apollo.QueryHookOptions<GetPostKindQuery, GetPostKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostKindQuery, GetPostKindQueryVariables>(GetPostKindDocument, options);
      }
export function useGetPostKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostKindQuery, GetPostKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostKindQuery, GetPostKindQueryVariables>(GetPostKindDocument, options);
        }
export type GetPostKindQueryHookResult = ReturnType<typeof useGetPostKindQuery>;
export type GetPostKindLazyQueryHookResult = ReturnType<typeof useGetPostKindLazyQuery>;
export type GetPostKindQueryResult = Apollo.QueryResult<GetPostKindQuery, GetPostKindQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($filter: PostFilter) {
  posts(filters: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageCount
    total
    rows {
      id
      myReactions {
        name
      }
      access
      description
      geofence
      kind
      slug
      status
      pinnedStatus {
        pinned
      }
      thumbnail {
        imgPath
      }
      media {
        ... on MediaVideo {
          id
          duration
        }
      }
      title
      type
      publishedAt
      countComments
      reactions {
        count
        name
      }
      countReactions
      inFeed
    }
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
export const GetPostsCardsDocument = gql`
    query GetPostsCards($filter: PostFilter) {
  posts(filters: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageCount
    total
    rows {
      id
      access
      title
      description
      kind
      slug
      pinnedStatus {
        pinned
      }
      thumbnail {
        imgPath
      }
      media {
        ... on MediaVideo {
          id
          duration
          thumbnailPath
          baseUrl
        }
      }
      type
    }
  }
}
    `;
export type GetPostsCardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPostsCardsQuery, GetPostsCardsQueryVariables>, 'query'>;

    export const GetPostsCardsComponent = (props: GetPostsCardsComponentProps) => (
      <ApolloReactComponents.Query<GetPostsCardsQuery, GetPostsCardsQueryVariables> query={GetPostsCardsDocument} {...props} />
    );
    

/**
 * __useGetPostsCardsQuery__
 *
 * To run a query within a React component, call `useGetPostsCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsCardsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPostsCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsCardsQuery, GetPostsCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsCardsQuery, GetPostsCardsQueryVariables>(GetPostsCardsDocument, options);
      }
export function useGetPostsCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsCardsQuery, GetPostsCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsCardsQuery, GetPostsCardsQueryVariables>(GetPostsCardsDocument, options);
        }
export type GetPostsCardsQueryHookResult = ReturnType<typeof useGetPostsCardsQuery>;
export type GetPostsCardsLazyQueryHookResult = ReturnType<typeof useGetPostsCardsLazyQuery>;
export type GetPostsCardsQueryResult = Apollo.QueryResult<GetPostsCardsQuery, GetPostsCardsQueryVariables>;
export const GetTagDocument = gql`
    query GetTag($id: ID, $slug: String) {
  tag(id: $id, slug: $slug) {
    id
    title
    description
    relatedCategories {
      access
      slug
      pinnedStatus {
        pinned
      }
      id
      description
      name
      kind
      customization {
        thumbnail {
          imgPath
        }
      }
    }
    relatedPosts {
      access
      slug
      status
      pinnedStatus {
        pinned
      }
      id
      description
      title
      kind
      thumbnail {
        imgPath
      }
    }
    slug
  }
}
    `;
export type GetTagComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetTagQuery, GetTagQueryVariables>, 'query'>;

    export const GetTagComponent = (props: GetTagComponentProps) => (
      <ApolloReactComponents.Query<GetTagQuery, GetTagQueryVariables> query={GetTagDocument} {...props} />
    );
    

/**
 * __useGetTagQuery__
 *
 * To run a query within a React component, call `useGetTagQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetTagQuery(baseOptions?: Apollo.QueryHookOptions<GetTagQuery, GetTagQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, options);
      }
export function useGetTagLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagQuery, GetTagQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagQuery, GetTagQueryVariables>(GetTagDocument, options);
        }
export type GetTagQueryHookResult = ReturnType<typeof useGetTagQuery>;
export type GetTagLazyQueryHookResult = ReturnType<typeof useGetTagLazyQuery>;
export type GetTagQueryResult = Apollo.QueryResult<GetTagQuery, GetTagQueryVariables>;