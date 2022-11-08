import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export enum AccessKinds {
  Available = 'AVAILABLE',
  Geolocked = 'GEOLOCKED',
  Public = 'PUBLIC',
  Redacted = 'REDACTED'
}

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
  pinnedAt: Scalars['DateTime'];
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

export type AddOverrideOrder = {
  account?: Maybe<Scalars['String']>;
  accountEmail?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  product: Scalars['String'];
  productPrice: Scalars['String'];
  status: Scalars['String'];
};

export type AddPendingOrder = {
  product: Scalars['String'];
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
  access: AccessKinds;
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<ChannelCustomizationOutput>;
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['JSON']>>;
  geofence?: Maybe<Scalars['JSON']>;
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
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
  actions: Array<BillboardActionsOutput>;
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
  icon?: Maybe<Scalars['String']>;
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
  route?: Maybe<MediaRouteUnion>;
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

export type BillingAddressInput = {
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  countryId: Scalars['String'];
  neighborhood?: Maybe<Scalars['String']>;
  stateId?: Maybe<Scalars['String']>;
  streetNumber?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type BillingPeriodsOutput = {
  __typename?: 'BillingPeriodsOutput';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type BillingTypesOutput = {
  __typename?: 'BillingTypesOutput';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type CancelNotificationInput = {
  oneSignalId: Scalars['String'];
};

export type CancelNotificationOutput = {
  __typename?: 'CancelNotificationOutput';
  success: Scalars['Boolean'];
};

export type CancelSubscription = {
  pauseDuration?: Maybe<Scalars['String']>;
  subscriptionId: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  access?: Maybe<AccessKinds>;
  channel: Scalars['ID'];
  children: Array<Category>;
  createdAt: Scalars['DateTime'];
  customization?: Maybe<CategoryCustomization>;
  description?: Maybe<Scalars['String']>;
  entitlements: Array<Scalars['JSONObject']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  geofenceEntitlements?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isChild?: Maybe<Scalars['Boolean']>;
  isDeleted?: Maybe<Scalars['Boolean']>;
  isKindAuto: Scalars['Boolean'];
  isParent?: Maybe<Scalars['Boolean']>;
  kind: Kinds;
  name: Scalars['String'];
  organization: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  pinnedStatus?: Maybe<AccountPinnedCategory>;
  posts: PaginatedPostsOutput;
  slug?: Maybe<Scalars['String']>;
  sort: Scalars['Int'];
  status?: Maybe<Status>;
  tags: Array<TagOutput>;
};


export type CategoryChildrenArgs = {
  filter?: Maybe<ChildrenCategoryFilter>;
};


export type CategoryPostsArgs = {
  filters?: Maybe<PostFilter>;
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
  tags?: Maybe<Array<Scalars['ID']>>;
};

export type CategoryInput = {
  access?: Maybe<Scalars['String']>;
  customization?: Maybe<CategoryCustomizationInput>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  isChild?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  slug?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type CategoryKind = {
  __typename?: 'CategoryKind';
  access?: Maybe<Scalars['String']>;
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['JSONObject']>>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  geofenceEntitlements?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
  kind: Kinds;
  name: Scalars['String'];
  organization: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
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
  dark?: Maybe<CustomizationMediaOutput>;
  light?: Maybe<CustomizationMediaOutput>;
};

export type ChannelCustomizationOutput = {
  __typename?: 'ChannelCustomizationOutput';
  icon?: Maybe<ChannelCustomizationLightDarkOutput>;
  logo?: Maybe<ChannelCustomizationLightDarkOutput>;
  thumbnail?: Maybe<CustomizationMediaOutput>;
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

export type ChannelKind = {
  __typename?: 'ChannelKind';
  access?: Maybe<Scalars['String']>;
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<ChannelCustomizationOutput>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['JSON']>>;
  geofence?: Maybe<Scalars['JSON']>;
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['JSON']>;
};

export type ChannelPasswordCheck = {
  __typename?: 'ChannelPasswordCheck';
  correct: Scalars['Boolean'];
};

export enum ChannelStatus {
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type ChildrenCategoryFilter = {
  featured?: Maybe<Scalars['Boolean']>;
  isParent?: Maybe<Scalars['Boolean']>;
  sortBy?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  account: Scalars['String'];
  author?: Maybe<CommentAuthor>;
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
  billingAddress: BillingAddressInput;
  /** the user card brand */
  cardBrand?: Maybe<Scalars['String']>;
  /** the user name */
  cardHolderName?: Maybe<Scalars['String']>;
  /** the country id from country code from inspire api */
  country?: Maybe<Scalars['String']>;
  /** Customer CPF */
  cpf?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['String']>;
  customerGrossAmount?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  /** the user card expiration date */
  expirationDate?: Maybe<Scalars['String']>;
  /** the last 4 values of user card */
  lastDigits?: Maybe<Scalars['String']>;
  /** the token used on payment gateway */
  paymentGatewayToken?: Maybe<Scalars['String']>;
  paymentMethodType?: Maybe<PaymentMethods>;
  /** Customer Phone */
  phone: Scalars['String'];
  /** the product id of inspire product */
  product: Scalars['String'];
  /** the product price id of inspire product */
  productPrice: Scalars['String'];
  statementDescriptor?: Maybe<Scalars['String']>;
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
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  hiddenFromFeed?: Maybe<Scalars['Boolean']>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
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
  entitlements?: Maybe<Array<Scalars['ID']>>;
  geofence?: Maybe<Scalars['String']>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  kind?: Maybe<Kinds>;
  menu?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  status?: Maybe<ChannelStatus>;
  thumbnail?: Maybe<Scalars['ID']>;
};

export type CreateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type CreateEmailTemplateDto = {
  name: Scalars['String'];
  templates: Array<LocaleBody>;
  type: Scalars['String'];
};

export type CreateEnvConfigInput = {
  analyticsAPI?: Maybe<Scalars['String']>;
  apiEndpoint: Scalars['String'];
  facebookTag?: Maybe<Scalars['String']>;
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
  googleTag?: Maybe<Scalars['String']>;
  inspireAuthUrl?: Maybe<Scalars['String']>;
  inspirePassword?: Maybe<Scalars['String']>;
  inspirePaymentUrl?: Maybe<Scalars['String']>;
  inspireTenantId?: Maybe<Scalars['String']>;
  inspireUrl?: Maybe<Scalars['String']>;
  inspireUsername?: Maybe<Scalars['String']>;
  muxKey?: Maybe<Scalars['String']>;
  onesignalAppId?: Maybe<Scalars['String']>;
  onesignalSafariWebId?: Maybe<Scalars['String']>;
  remoteConfigSecret: Scalars['String'];
  s3SignedUrl?: Maybe<Scalars['String']>;
  uploadAwsKey?: Maybe<Scalars['String']>;
  videoAnalyticsPassword?: Maybe<Scalars['String']>;
  videoAnalyticsUrl?: Maybe<Scalars['String']>;
  videoAnalyticsUsername?: Maybe<Scalars['String']>;
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

export type CreateInspireProductInput = {
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  metadata: Array<InspireProductMetadataInput>;
  name: Scalars['String'];
  paymentMethodId?: Maybe<Scalars['String']>;
  priceDescription?: Maybe<Scalars['String']>;
  productPrices: Array<InspireProductPriceInput>;
  statementDescriptor?: Maybe<Scalars['String']>;
  unitLabel: Scalars['String'];
};

export type CreateMediaFromLiveInput = {
  endPoint: Scalars['String'];
  fileName: Scalars['String'];
  liveId: Scalars['String'];
  startPoint: Scalars['String'];
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
  locale?: Maybe<MediaLocale>;
  mp4Path?: Maybe<Scalars['String']>;
  mp4VodUrl?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  thumbnailPath?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  vttPath?: Maybe<Scalars['String']>;
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
  entitlements?: Maybe<Array<Scalars['String']>>;
  favicon?: Maybe<Scalars['String']>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  kind: Kinds;
  logo?: Maybe<Scalars['String']>;
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
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  hiddenFromFeed?: Maybe<Scalars['Boolean']>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreatePlaylistInput = {
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type CreateProductPriceInput = {
  billingPeriodId?: Maybe<Scalars['String']>;
  billingTypesId: Scalars['String'];
  currencyId: Scalars['String'];
  installments?: Maybe<Scalars['Float']>;
  internalDescription?: Maybe<Scalars['String']>;
  metadata?: Maybe<Array<InspireMetadataInput>>;
  priceTiers: Array<ProductPriceTierInput>;
  pricingModelId: Scalars['String'];
  productsId: Scalars['String'];
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypesId: Scalars['String'];
  unitPrice: Scalars['Float'];
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
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title: Scalars['String'];
};

export type CreateTextPost = {
  access?: Maybe<PostAccess>;
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  hiddenFromFeed?: Maybe<Scalars['Boolean']>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type CreateUploadInput = {
  bucket?: Maybe<Scalars['String']>;
  expireIn?: Maybe<Scalars['Float']>;
  expired?: Maybe<Scalars['Boolean']>;
  filename: Scalars['String'];
  isAvatar?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<MediaLocale>;
  mediaVideoId?: Maybe<Scalars['String']>;
  status?: Maybe<UploadStatusEnum>;
  url?: Maybe<Scalars['String']>;
};

export type CreateVideoPost = {
  access?: Maybe<PostAccess>;
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media: Scalars['ID'];
  password?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  subtitles?: Maybe<Array<Scalars['String']>>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type CurrencyOutput = {
  __typename?: 'CurrencyOutput';
  id: Scalars['String'];
  isDefault: Scalars['Boolean'];
  isoCode: Scalars['String'];
  name: Scalars['String'];
  symbol: Scalars['String'];
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

export type CustomPushNotificationInput = {
  /** Only one notification with the same id will be shown on the device. Use the same id to update an existing notification instead of showing a new one. Limit of 64 characters. */
  collapse_id?: Maybe<Scalars['String']>;
  /** A custom map of data that is passed back to your app. */
  data?: Maybe<Scalars['JSONObject']>;
  /** Possible values are: timezone (Deliver at a specific time-of-day in each users own timezone) last-active Same as Intelligent Delivery . (Deliver at the same time of day as each user last used your app). If send_after is used, this takes effect after the send_after time has elapsed. */
  delayed_option?: Maybe<DelayedOptionEnum>;
  /** Time for delivery using timezone (if the time is in the past for specific user, will be sent in next day) */
  delivery_time_of_day?: Maybe<Scalars['String']>;
  /** Media for icon */
  iconMediaId?: Maybe<Scalars['String']>;
  /** Media for image */
  imageMediaId?: Maybe<Scalars['String']>;
  /** The segment names you want to target. Users in these segments will receive a notification.  */
  included_segments?: Maybe<Array<Scalars['String']>>;
  /** Indicates whether to send to all devices registered under your app's Google Android platform. */
  isAndroid?: Maybe<Scalars['Boolean']>;
  /** Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform. */
  isChromeWeb?: Maybe<Scalars['Boolean']>;
  /** Indicates whether to send to all Edge browsers */
  isEdge?: Maybe<Scalars['Boolean']>;
  /** Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform. */
  isFirefox?: Maybe<Scalars['Boolean']>;
  /** Indicates whether to send to all devices registered under your app's Apple iOS platform. */
  isIos?: Maybe<Scalars['Boolean']>;
  /** Does not support iOS Safari. Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform.  */
  isSafari?: Maybe<Scalars['Boolean']>;
  languageMessages: Array<LanguageMessage>;
  /** An internal name to assist with your campaign organization. */
  name?: Maybe<Scalars['String']>;
  /** Delivery priority through the push server (example GCM/FCM). Pass 10 for high priority or any other integer for normal priority. */
  priority?: Maybe<Scalars['String']>;
  /** Schedule notification for future delivery. */
  send_after?: Maybe<Scalars['DateTime']>;
  /** Time To Live - In seconds. The notification will be expired if the device does not come back online within this time. The default is 259,200 seconds (3 days). */
  ttl?: Maybe<Scalars['String']>;
  /** The URL to open in the browser when a user clicks on the notification. */
  url?: Maybe<Scalars['String']>;
  /** Display multiple notifications at once with different topics. */
  web_push_topic?: Maybe<Scalars['String']>;
};

export type CustomizationMediaOutput = {
  __typename?: 'CustomizationMediaOutput';
  account?: Maybe<Scalars['ID']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  filename?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  isAvatar: Scalars['Boolean'];
  upload?: Maybe<Scalars['ID']>;
};

export type DefaultCreditCardPaymentMethod = {
  __typename?: 'DefaultCreditCardPaymentMethod';
  payment?: Maybe<Scalars['JSONObject']>;
};

export enum DelayedOptionEnum {
  LastActive = 'LAST_ACTIVE',
  Timezone = 'TIMEZONE'
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
  channel?: Maybe<Scalars['ID']>;
  deleted_at?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  organization: Scalars['ID'];
  template?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<EmailTemplateLocales>>;
  type: Scalars['String'];
};

export type EmailTemplateLocales = {
  __typename?: 'EmailTemplateLocales';
  body: Scalars['String'];
  locale: LocaleTypes;
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

export type EntitlementGeofenceInput = {
  countryCodes: Array<Scalars['String']>;
  products?: Maybe<Array<Scalars['String']>>;
};

export type EntitlementsGeofenceInput = {
  blacklist?: Maybe<EntitlementGeofenceInput>;
  whitelist?: Maybe<EntitlementGeofenceInput>;
};

export type EnvConfig = {
  __typename?: 'EnvConfig';
  analyticsAPI?: Maybe<Scalars['String']>;
  apiEndpoint: Scalars['String'];
  facebookTag?: Maybe<Scalars['String']>;
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
  googleTag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  inspireAuthUrl?: Maybe<Scalars['String']>;
  inspirePassword?: Maybe<Scalars['String']>;
  inspirePaymentUrl?: Maybe<Scalars['String']>;
  inspireTenantId?: Maybe<Scalars['String']>;
  inspireUrl?: Maybe<Scalars['String']>;
  inspireUsername?: Maybe<Scalars['String']>;
  muxKey?: Maybe<Scalars['String']>;
  onesignalAppId?: Maybe<Scalars['String']>;
  onesignalSafariWebId?: Maybe<Scalars['String']>;
  organization: Scalars['ID'];
  remoteConfigSecret: Scalars['String'];
  s3SignedUrl?: Maybe<Scalars['String']>;
  uploadAwsKey?: Maybe<Scalars['String']>;
  videoAnalyticsPassword?: Maybe<Scalars['String']>;
  videoAnalyticsUrl?: Maybe<Scalars['String']>;
  videoAnalyticsUsername?: Maybe<Scalars['String']>;
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

export type FindAllProductPricesParams = {
  currencyId?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Float']>;
  pagesize?: Maybe<Scalars['Float']>;
  productsId?: Maybe<Scalars['String']>;
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

export type FindReportsInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  type?: Maybe<ReportType>;
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
  products?: Maybe<Array<Scalars['String']>>;
  type: GeoFenceType;
};

export type GeolockedChannel = {
  __typename?: 'GeolockedChannel';
  access: AccessKinds;
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<ChannelCustomizationOutput>;
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['JSON']>>;
  geofence?: Maybe<Scalars['JSON']>;
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
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

export type InspireBillingPeriods = {
  __typename?: 'InspireBillingPeriods';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InspireBillingTypes = {
  __typename?: 'InspireBillingTypes';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InspireCurrency = {
  __typename?: 'InspireCurrency';
  isoCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type InspireMetadata = {
  __typename?: 'InspireMetadata';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type InspireMetadataInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type InspirePaymentLinkItem = {
  __typename?: 'InspirePaymentLinkItem';
  billingPeriods?: Maybe<InspireBillingPeriods>;
  billingTypes?: Maybe<InspireBillingTypes>;
  canAdjustQuantity?: Maybe<Scalars['Boolean']>;
  currency?: Maybe<InspireCurrency>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Float']>;
  internalDescription?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  paymentLinkId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  productPriceId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Float']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type InspireProduct = {
  __typename?: 'InspireProduct';
  createdDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl: Scalars['String'];
  isActive?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<InspireMetadata>>;
  name?: Maybe<Scalars['String']>;
  productPrices?: Maybe<Array<InspireProductPrices>>;
  setupFee: Scalars['Float'];
  statementDescriptor?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
  updatedDate?: Maybe<Scalars['DateTime']>;
};

export type InspireProductFiltered = {
  __typename?: 'InspireProductFiltered';
  amount: Scalars['Float'];
  createdDate: Scalars['DateTime'];
  id: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  productPrices: Array<InspireProductPrices>;
  setupFee: Scalars['Float'];
  startingPrice: Scalars['String'];
  updatedDate: Scalars['DateTime'];
};

export type InspireProductMetadataInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type InspireProductPriceInput = {
  billingPeriodId?: Maybe<Scalars['String']>;
  billingTypesId: Scalars['String'];
  currencyId: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  internalDescription?: Maybe<Scalars['String']>;
  priceTiers: Array<InspireProductPriceTierInput>;
  pricingModelId: Scalars['String'];
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypesId: Scalars['String'];
  unitPrice?: Maybe<Scalars['Float']>;
  unitPriceInstallment?: Maybe<Scalars['Float']>;
};

export type InspireProductPriceTier = {
  __typename?: 'InspireProductPriceTier';
  flatPrice?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  productPricesId?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
  upTo?: Maybe<Scalars['Float']>;
};

export type InspireProductPriceTierInput = {
  flatPrice: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  productPricesId: Scalars['String'];
  unitPrice: Scalars['Float'];
  upTo?: Maybe<Scalars['Float']>;
};

export type InspireProductPrices = {
  __typename?: 'InspireProductPrices';
  billingPeriodId?: Maybe<Scalars['String']>;
  billingPeriods?: Maybe<InspireBillingPeriods>;
  billingTypes?: Maybe<InspireBillingTypes>;
  billingTypesId?: Maybe<Scalars['String']>;
  createdDate?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<InspireCurrency>;
  currencyId?: Maybe<Scalars['String']>;
  customIntervalCount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Float']>;
  internalDescription?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isIncludingCountries?: Maybe<Scalars['Boolean']>;
  neverUsedSubscription?: Maybe<Scalars['Boolean']>;
  numberActiveSubscriptions?: Maybe<Scalars['Float']>;
  onlyProductPrice?: Maybe<Scalars['Boolean']>;
  packageUnits?: Maybe<Scalars['Float']>;
  paymentLinkItems?: Maybe<Array<InspirePaymentLinkItem>>;
  pricingModelId?: Maybe<Scalars['String']>;
  productPriceTiers?: Maybe<Array<InspireProductPriceTier>>;
  productsId?: Maybe<Scalars['String']>;
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypes?: Maybe<InspireRecurringUsageTypes>;
  recurringUsageTypesId?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
};

export type InspireRecurringUsageTypes = {
  __typename?: 'InspireRecurringUsageTypes';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type InviteTeamMemberInput = {
  accountId?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  roles: Array<Scalars['ID']>;
};

export enum Kinds {
  Auto = 'AUTO',
  Exclusive = 'EXCLUSIVE',
  Geolocked = 'GEOLOCKED',
  Paywall = 'PAYWALL',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type LanguageMessage = {
  header?: Maybe<Scalars['String']>;
  language: OneSignalLanguage;
  message: Scalars['String'];
  subtitle?: Maybe<Scalars['String']>;
};

export type ListNotificationInput = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
};

export type LiveEvent = {
  __typename?: 'LiveEvent';
  access?: Maybe<AccessKinds>;
  backupPublishEndpoint?: Maybe<Scalars['String']>;
  backupStreamName?: Maybe<Scalars['String']>;
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
  isKindAuto: Scalars['Boolean'];
  kind: Kinds;
  media?: Maybe<MediaVideo>;
  organization: Scalars['ID'];
  orientation?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  presenceEnabled?: Maybe<Scalars['Boolean']>;
  primaryPublishEndpoint?: Maybe<Scalars['String']>;
  primaryStreamName?: Maybe<Scalars['String']>;
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
  entitlements?: Maybe<Array<Scalars['String']>>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  kind?: Maybe<Kinds>;
  orientation?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  presenceEnabled?: Maybe<Scalars['Boolean']>;
  pushNotification?: Maybe<PushNotification>;
  reactionsEnabled?: Maybe<Scalars['Boolean']>;
  scheduledStartAt: Scalars['DateTime'];
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Status>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: LiveEventType;
};

export type LiveEventKind = {
  __typename?: 'LiveEventKind';
  access?: Maybe<Scalars['String']>;
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['JSONObject']>>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
  kind: Kinds;
  organization: Scalars['ID'];
  slug?: Maybe<Scalars['String']>;
  title: Scalars['String'];
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

export type LocaleBody = {
  body: Scalars['String'];
  locale: LocaleTypes;
};

export enum LocaleTypes {
  Af = 'AF',
  AfZa = 'AF_ZA',
  AmEt = 'AM_ET',
  Ar = 'AR',
  ArnCl = 'ARN_CL',
  ArAe = 'AR_AE',
  ArBh = 'AR_BH',
  ArDz = 'AR_DZ',
  ArEg = 'AR_EG',
  ArIq = 'AR_IQ',
  ArJo = 'AR_JO',
  ArKw = 'AR_KW',
  ArLb = 'AR_LB',
  ArLy = 'AR_LY',
  ArMa = 'AR_MA',
  ArOm = 'AR_OM',
  ArQa = 'AR_QA',
  ArSa = 'AR_SA',
  ArSy = 'AR_SY',
  ArTn = 'AR_TN',
  ArYe = 'AR_YE',
  AsIn = 'AS_IN',
  Az = 'AZ',
  AzCyrlAz = 'AZ_CYRL_AZ',
  AzLatnAz = 'AZ_LATN_AZ',
  BaRu = 'BA_RU',
  Be = 'BE',
  BeBy = 'BE_BY',
  Bg = 'BG',
  BgBg = 'BG_BG',
  BnBd = 'BN_BD',
  BnIn = 'BN_IN',
  BoCn = 'BO_CN',
  BrFr = 'BR_FR',
  BsCyrlBa = 'BS_CYRL_BA',
  BsLatnBa = 'BS_LATN_BA',
  Ca = 'CA',
  CaEs = 'CA_ES',
  CoFr = 'CO_FR',
  Cs = 'CS',
  CsCz = 'CS_CZ',
  CyGb = 'CY_GB',
  Da = 'DA',
  DaDk = 'DA_DK',
  De = 'DE',
  DeAt = 'DE_AT',
  DeCh = 'DE_CH',
  DeDe = 'DE_DE',
  DeLi = 'DE_LI',
  DeLu = 'DE_LU',
  DsbDe = 'DSB_DE',
  Dv = 'DV',
  DvMv = 'DV_MV',
  El = 'EL',
  ElGr = 'EL_GR',
  En = 'EN',
  En_029 = 'EN_029',
  EnAu = 'EN_AU',
  EnBz = 'EN_BZ',
  EnCa = 'EN_CA',
  EnGb = 'EN_GB',
  EnIe = 'EN_IE',
  EnIn = 'EN_IN',
  EnJm = 'EN_JM',
  EnMy = 'EN_MY',
  EnNz = 'EN_NZ',
  EnPh = 'EN_PH',
  EnSg = 'EN_SG',
  EnTt = 'EN_TT',
  EnUs = 'EN_US',
  EnZa = 'EN_ZA',
  EnZw = 'EN_ZW',
  Es = 'ES',
  EsAr = 'ES_AR',
  EsBo = 'ES_BO',
  EsCl = 'ES_CL',
  EsCo = 'ES_CO',
  EsCr = 'ES_CR',
  EsDo = 'ES_DO',
  EsEc = 'ES_EC',
  EsEs = 'ES_ES',
  EsGt = 'ES_GT',
  EsHn = 'ES_HN',
  EsMx = 'ES_MX',
  EsNi = 'ES_NI',
  EsPa = 'ES_PA',
  EsPe = 'ES_PE',
  EsPr = 'ES_PR',
  EsPy = 'ES_PY',
  EsSv = 'ES_SV',
  EsUs = 'ES_US',
  EsUy = 'ES_UY',
  EsVe = 'ES_VE',
  Et = 'ET',
  EtEe = 'ET_EE',
  Eu = 'EU',
  EuEs = 'EU_ES',
  Fa = 'FA',
  FaIr = 'FA_IR',
  Fi = 'FI',
  FilPh = 'FIL_PH',
  FiFi = 'FI_FI',
  Fo = 'FO',
  FoFo = 'FO_FO',
  Fr = 'FR',
  FrBe = 'FR_BE',
  FrCa = 'FR_CA',
  FrCh = 'FR_CH',
  FrFr = 'FR_FR',
  FrLu = 'FR_LU',
  FrMc = 'FR_MC',
  FyNl = 'FY_NL',
  GaIe = 'GA_IE',
  GdGb = 'GD_GB',
  Gl = 'GL',
  GlEs = 'GL_ES',
  GswFr = 'GSW_FR',
  Gu = 'GU',
  GuIn = 'GU_IN',
  HaLatnNg = 'HA_LATN_NG',
  He = 'HE',
  HeIl = 'HE_IL',
  Hi = 'HI',
  HiIn = 'HI_IN',
  Hr = 'HR',
  HrBa = 'HR_BA',
  HrHr = 'HR_HR',
  HsbDe = 'HSB_DE',
  Hu = 'HU',
  HuHu = 'HU_HU',
  Hy = 'HY',
  HyAm = 'HY_AM',
  Id = 'ID',
  IdId = 'ID_ID',
  IgNg = 'IG_NG',
  IiCn = 'II_CN',
  Is = 'IS',
  IsIs = 'IS_IS',
  It = 'IT',
  ItCh = 'IT_CH',
  ItIt = 'IT_IT',
  IuCansCa = 'IU_CANS_CA',
  IuLatnCa = 'IU_LATN_CA',
  Ja = 'JA',
  JaJp = 'JA_JP',
  Ka = 'KA',
  KaGe = 'KA_GE',
  Kk = 'KK',
  KkKz = 'KK_KZ',
  KlGl = 'KL_GL',
  KmKh = 'KM_KH',
  Kn = 'KN',
  KnIn = 'KN_IN',
  Ko = 'KO',
  Kok = 'KOK',
  KokIn = 'KOK_IN',
  KoKr = 'KO_KR',
  Ky = 'KY',
  KyKg = 'KY_KG',
  LbLu = 'LB_LU',
  LoLa = 'LO_LA',
  Lt = 'LT',
  LtLt = 'LT_LT',
  Lv = 'LV',
  LvLv = 'LV_LV',
  MiNz = 'MI_NZ',
  Mk = 'MK',
  MkMk = 'MK_MK',
  MlIn = 'ML_IN',
  Mn = 'MN',
  MnMn = 'MN_MN',
  MnMongCn = 'MN_MONG_CN',
  MohCa = 'MOH_CA',
  Mr = 'MR',
  MrIn = 'MR_IN',
  Ms = 'MS',
  MsBn = 'MS_BN',
  MsMy = 'MS_MY',
  MtMt = 'MT_MT',
  NbNo = 'NB_NO',
  NeNp = 'NE_NP',
  Nl = 'NL',
  NlBe = 'NL_BE',
  NlNl = 'NL_NL',
  NnNo = 'NN_NO',
  No = 'NO',
  NsoZa = 'NSO_ZA',
  OcFr = 'OC_FR',
  OrIn = 'OR_IN',
  Pa = 'PA',
  PaIn = 'PA_IN',
  Pl = 'PL',
  PlPl = 'PL_PL',
  PrsAf = 'PRS_AF',
  PsAf = 'PS_AF',
  Pt = 'PT',
  PtBr = 'PT_BR',
  PtPt = 'PT_PT',
  QutGt = 'QUT_GT',
  QuzBo = 'QUZ_BO',
  QuzEc = 'QUZ_EC',
  QuzPe = 'QUZ_PE',
  RmCh = 'RM_CH',
  Ro = 'RO',
  RoRo = 'RO_RO',
  Ru = 'RU',
  RuRu = 'RU_RU',
  RwRw = 'RW_RW',
  Sa = 'SA',
  SahRu = 'SAH_RU',
  SaIn = 'SA_IN',
  SeFi = 'SE_FI',
  SeNo = 'SE_NO',
  SeSe = 'SE_SE',
  SiLk = 'SI_LK',
  Sk = 'SK',
  SkSk = 'SK_SK',
  Sl = 'SL',
  SlSi = 'SL_SI',
  SmaNo = 'SMA_NO',
  SmaSe = 'SMA_SE',
  SmjNo = 'SMJ_NO',
  SmjSe = 'SMJ_SE',
  SmnFi = 'SMN_FI',
  SmsFi = 'SMS_FI',
  Sq = 'SQ',
  SqAl = 'SQ_AL',
  Sr = 'SR',
  SrCyrlBa = 'SR_CYRL_BA',
  SrCyrlCs = 'SR_CYRL_CS',
  SrCyrlMe = 'SR_CYRL_ME',
  SrCyrlRs = 'SR_CYRL_RS',
  SrLatnBa = 'SR_LATN_BA',
  SrLatnCs = 'SR_LATN_CS',
  SrLatnMe = 'SR_LATN_ME',
  SrLatnRs = 'SR_LATN_RS',
  Sv = 'SV',
  SvFi = 'SV_FI',
  SvSe = 'SV_SE',
  Sw = 'SW',
  SwKe = 'SW_KE',
  Syr = 'SYR',
  SyrSy = 'SYR_SY',
  Ta = 'TA',
  TaIn = 'TA_IN',
  Te = 'TE',
  TeIn = 'TE_IN',
  TgCyrlTj = 'TG_CYRL_TJ',
  Th = 'TH',
  ThTh = 'TH_TH',
  TkTm = 'TK_TM',
  TnZa = 'TN_ZA',
  Tr = 'TR',
  TrTr = 'TR_TR',
  Tt = 'TT',
  TtRu = 'TT_RU',
  TzmLatnDz = 'TZM_LATN_DZ',
  UgCn = 'UG_CN',
  Uk = 'UK',
  UkUa = 'UK_UA',
  Ur = 'UR',
  UrPk = 'UR_PK',
  Uz = 'UZ',
  UzCyrlUz = 'UZ_CYRL_UZ',
  UzLatnUz = 'UZ_LATN_UZ',
  Vi = 'VI',
  ViVn = 'VI_VN',
  WoSn = 'WO_SN',
  XhZa = 'XH_ZA',
  YoNg = 'YO_NG',
  ZhChs = 'ZH_CHS',
  ZhCht = 'ZH_CHT',
  ZhCn = 'ZH_CN',
  ZhHk = 'ZH_HK',
  ZhMo = 'ZH_MO',
  ZhSg = 'ZH_SG',
  ZhTw = 'ZH_TW',
  ZuZa = 'ZU_ZA'
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
  label?: Maybe<Scalars['String']>;
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
  label?: Maybe<Scalars['String']>;
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
};

export type MediaCustomizationOutput = {
  __typename?: 'MediaCustomizationOutput';
  id: Scalars['ID'];
  imgPath?: Maybe<Scalars['String']>;
};

export type MediaFromLiveResult = {
  __typename?: 'MediaFromLiveResult';
  channelId: Scalars['String'];
  liveId: Scalars['String'];
  orgId: Scalars['String'];
  status: Scalars['String'];
};

export enum MediaLocale {
  EnGb = 'EN_GB',
  EnUs = 'EN_US',
  EsEs = 'ES_ES',
  FrCa = 'FR_CA',
  FrFr = 'FR_FR',
  PtBr = 'PT_BR',
  PtPt = 'PT_PT'
}

export enum MediaOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
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
  label?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediaRouteContent = {
  __typename?: 'MediaRouteContent';
  content: Scalars['String'];
  contentWeb: Scalars['String'];
};

export type MediaRouteUnion = MediaAudio | MediaPhoto | MediaRouteContent | MediaVideo;

export enum MediaStatusEnum {
  AudioComplete = 'AudioComplete',
  Complete = 'Complete',
  ImageComplete = 'ImageComplete',
  Ingest = 'Ingest',
  Processing = 'Processing',
  Ready = 'Ready',
  SubtitleComplete = 'SubtitleComplete',
  Transcoding = 'Transcoding',
  Uploaded = 'Uploaded',
  Uploading = 'Uploading'
}

export type MediaSubtitle = {
  __typename?: 'MediaSubtitle';
  account?: Maybe<Scalars['ID']>;
  baseUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  createdAt: Scalars['DateTime'];
  filename?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAvatar: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  status?: Maybe<MediaStatusEnum>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  vttPath?: Maybe<Scalars['String']>;
};

export enum MediaTypeEnum {
  Audio = 'Audio',
  Image = 'Image',
  Livestream = 'Livestream',
  Subtitle = 'Subtitle',
  Video = 'Video'
}

export type MediaUnion = MediaAudio | MediaPhoto | MediaSubtitle | MediaVideo;

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
  height?: Maybe<Scalars['Int']>;
  hlsPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAvatar: Scalars['Boolean'];
  label?: Maybe<Scalars['String']>;
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  subtitles?: Maybe<Array<MediaSubtitle>>;
  thumbnailPath?: Maybe<Scalars['String']>;
  transcodePercentComplete?: Maybe<Scalars['Float']>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Int']>;
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
  addPendingOrder: Order;
  addReaction: Array<ReactionsAggregate>;
  addReport: Report;
  addView: Post;
  addVote: AddedCommentVote;
  atomicUpdateCategorySorting: CategorySortingOutput;
  atomicUpdateMenuSorting: MenuSortingOutput;
  avatarUpload: ResponseUploadCreation;
  banAccountPerm: Account;
  banAccountTemp: Account;
  bindChannelAndOrganization: Account;
  cancelNotification: CancelNotificationOutput;
  cancelSubscription: Order;
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
  createChannelRoles: Scalars['String'];
  createCustomField: ResponseCustomFieldsOutput;
  createEmailTemplate: EmailTemplate;
  createEmbed: Embed;
  createEnvConfig: EnvConfig;
  createGroup: GroupDto;
  createLiveEvent: LiveEvent;
  createMedia: Media;
  createMediaFromLive: MediaFromLiveResult;
  createMenu: Menu;
  createOrganization: Organization;
  createPermission: PermissionDto;
  createPhotoMedia: MediaPhoto;
  createPhotoPost: Post;
  createPlaylist: PlaylistOutput;
  createProduct: InspireProduct;
  createProductPrice: ProductPriceOutput;
  createPublicUpload: ResponseUploadCreation;
  createRole: RolesDto;
  createSubject: SubjectDto;
  createTag: TagOutput;
  createTenantAccount: Account;
  createTextPost: Post;
  createUpload: ResponseUploadCreation;
  createVideoMedia: MediaVideo;
  createVideoPost: Post;
  customPushNotification: PushNotificationResult;
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
  deleteProduct: Scalars['VoidScalar'];
  deleteProductPrice: Scalars['VoidScalar'];
  deleteUpload: ResponseUploadOutput;
  forgetAccount: Account;
  goLive: LiveEventGoLiveOutput;
  hasProductAccess: HasAccessOutput;
  inviteTeamMember: Account;
  liveEventPasswordCheck: LiveEventPasswordCheck;
  oneTimePayment: Order;
  organizationPasswordCheck: OrganizationPasswordCheck;
  overrideOrder: Order;
  pauseSubscription: Order;
  pinCategory: AccountPinnedCategory;
  pinChannel: AccountPinnedChannel;
  pinPost: AccountPinnedPost;
  populateTemplatesForOrganization: Scalars['String'];
  postPasswordCheck: PostPasswordCheck;
  publishRemoteConfig: PublishRemoteConfig;
  pushNotification: PushNotificationResult;
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
  restartSubscription: Order;
  searchUpdateChannel: SearchUpdateChannel;
  sendEmail: ResponseEmailSendedDto;
  signIn: SingIn;
  signInTenantUser: SingIn;
  signOut: Scalars['VoidScalar'];
  socialSignIn: SingIn;
  startMediaUpload: ResponseMediaUploadOutput;
  stopLive: LiveEventStopLiveOutput;
  unbanAccountPerm: Account;
  unbanAccountTemp: Account;
  uncancelSubscription: Order;
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
  updateCreditCardPaymentMethod: DefaultCreditCardPaymentMethod;
  updateCustomField: ResponseCustomFieldsOutput;
  updateEmailTemplate: EmailTemplate;
  updateEmbed: Embed;
  updateEnvConfig: EnvConfig;
  updateGroup: GroupDto;
  updateIsAdminAccount: Account;
  updateLiveEvent: LiveEvent;
  updateMediaAudio: MediaAudio;
  updateMediaPhoto: MediaPhoto;
  updateMediaSubtitle: MediaSubtitle;
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
  updateProduct: InspireProduct;
  updateProductPrice: ProductPriceOutput;
  updateProfile: Profile;
  updateReport: Report;
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


export type MutationAddPendingOrderArgs = {
  payload: AddPendingOrder;
};


export type MutationAddReactionArgs = {
  input: AddReaction;
};


export type MutationAddReportArgs = {
  payload: AddReport;
};


export type MutationAddViewArgs = {
  postId: Scalars['String'];
};


export type MutationAddVoteArgs = {
  input: AddCommentVote;
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


export type MutationCancelNotificationArgs = {
  payload: CancelNotificationInput;
};


export type MutationCancelSubscriptionArgs = {
  payload: CancelSubscription;
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


export type MutationCreateMediaFromLiveArgs = {
  payload: CreateMediaFromLiveInput;
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


export type MutationCreateProductArgs = {
  input: CreateInspireProductInput;
};


export type MutationCreateProductPriceArgs = {
  params: CreateProductPriceInput;
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


export type MutationCustomPushNotificationArgs = {
  payload: CustomPushNotificationInput;
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


export type MutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type MutationDeleteProductPriceArgs = {
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


export type MutationInviteTeamMemberArgs = {
  payload: InviteTeamMemberInput;
};


export type MutationLiveEventPasswordCheckArgs = {
  id: Scalars['String'];
  payload: LiveEventPasswordCheckInput;
};


export type MutationOneTimePaymentArgs = {
  payload: ConfirmOrder;
};


export type MutationOrganizationPasswordCheckArgs = {
  organizationId: Scalars['ID'];
  password: Scalars['String'];
};


export type MutationOverrideOrderArgs = {
  payload: AddOverrideOrder;
};


export type MutationPauseSubscriptionArgs = {
  payload: CancelSubscription;
};


export type MutationPinCategoryArgs = {
  payload: CreateAccountPinnnedCategory;
};


export type MutationPinPostArgs = {
  payload: CreateAccountPinnedPost;
};


export type MutationPopulateTemplatesForOrganizationArgs = {
  id: Scalars['ID'];
};


export type MutationPostPasswordCheckArgs = {
  id: Scalars['String'];
  payload: PostPasswordCheckInput;
};


export type MutationPublishRemoteConfigArgs = {
  payload: RemoteConfig;
};


export type MutationPushNotificationArgs = {
  payload: PushNotificationInput;
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


export type MutationRestartSubscriptionArgs = {
  payload: CancelSubscription;
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


export type MutationUncancelSubscriptionArgs = {
  payload: UncancelSubscription;
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


export type MutationUpdateCreditCardPaymentMethodArgs = {
  id: Scalars['String'];
  payload: UpdateCreditCardPaymentMethod;
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


export type MutationUpdateMediaSubtitleArgs = {
  id: Scalars['String'];
  payload: UpdateMediaSubtitlesInput;
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
  payload: UpdateMyAccountInput;
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


export type MutationUpdateProductArgs = {
  id: Scalars['String'];
  input: UpdateProductInput;
};


export type MutationUpdateProductPriceArgs = {
  id: Scalars['String'];
  input: UpdateProductPriceInput;
};


export type MutationUpdateProfileArgs = {
  account: Scalars['ID'];
  payload: UpdateProfileInput;
};


export type MutationUpdateReportArgs = {
  payload: UpdateReport;
  reportId: Scalars['ID'];
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

export type MyProducts = {
  __typename?: 'MyProducts';
  products: Array<InspireProduct>;
};

export type NotificationOutput = {
  __typename?: 'NotificationOutput';
  /** If notification is canceled */
  canceled: Scalars['Boolean'];
  /** Date indicating when message delivery was completed. */
  completedAt?: Maybe<Scalars['DateTime']>;
  /** Contents of the notification */
  contents: Scalars['JSONObject'];
  /** Number of devices that have clicked/tapped the notification. */
  converted: Scalars['Float'];
  /** Message with the organization language */
  defaultLangMessage: Scalars['String'];
  /** Title with the organization language */
  defaultLangTitle: Scalars['String'];
  /** Number of devices with an error. */
  errored: Scalars['Float'];
  /** Number of devices reported as unsubscribed. */
  failed: Scalars['Float'];
  /** Contents of the notification */
  headings: Scalars['JSONObject'];
  /** Segments that this notification was sent to */
  includedSegments: Array<Scalars['String']>;
  /** Indicates whether to send to all devices registered under your app's Google Android platform. */
  isAndroid: Scalars['Boolean'];
  /** Indicates whether to send to all Google Chrome, Chrome on Android, and Mozilla Firefox users registered under your Chrome & Firefox web push platform. */
  isChromeWeb: Scalars['Boolean'];
  /** Indicates whether to send to all devices registered under edge browser */
  isEdge: Scalars['Boolean'];
  /** Indicates whether to send to all Mozilla Firefox desktop users registered under your Firefox web push platform. */
  isFirefox: Scalars['Boolean'];
  /** Indicates whether to send to all devices registered under your app's Apple iOS platform */
  isIos: Scalars['Boolean'];
  /** Does not support iOS Safari. Indicates whether to send to all Apple's Safari desktop users registered under your Safari web push platform. */
  isSafari: Scalars['Boolean'];
  /** Name for the signal */
  name: Scalars['String'];
  /** One Signal ID */
  oneSignalId: Scalars['String'];
  /** Date indicating when the message was created. */
  queuedAt?: Maybe<Scalars['DateTime']>;
  /** Number of devices that confirmed receiving the notification */
  received?: Maybe<Scalars['Float']>;
  /** Number of messages that have not been sent out yet. */
  remaining: Scalars['Float'];
  /** Date when message delivery should begin. */
  sendAfter?: Maybe<Scalars['DateTime']>;
  status: OneSignalStatusEnum;
  /** Number of notifications delivered to the Google/Apple/Windows servers. */
  successful: Scalars['Float'];
  /** Optional URL for the notification */
  url?: Maybe<Scalars['String']>;
};

export enum OneSignalLanguage {
  Arabic = 'ARABIC',
  Azerbaijani = 'AZERBAIJANI',
  Bosnian = 'BOSNIAN',
  Bulgarian = 'BULGARIAN',
  Catalan = 'CATALAN',
  Chinese2 = 'CHINESE2',
  Chinese3 = 'CHINESE3',
  Croatian = 'CROATIAN',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Default = 'DEFAULT',
  Dutch = 'DUTCH',
  English = 'ENGLISH',
  Estonian = 'ESTONIAN',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  Georgian = 'GEORGIAN',
  German = 'GERMAN',
  Greek = 'GREEK',
  Hebrew = 'HEBREW',
  Hindi = 'HINDI',
  Hungarian = 'HUNGARIAN',
  Indonesian = 'INDONESIAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Latvian = 'LATVIAN',
  Lithuanian = 'LITHUANIAN',
  Malay = 'MALAY',
  Norwegian = 'NORWEGIAN',
  Persian = 'PERSIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Punjabi = 'PUNJABI',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  Serbian = 'SERBIAN',
  Slovak = 'SLOVAK',
  Spanish = 'SPANISH',
  Swedish = 'SWEDISH',
  Thai = 'THAI',
  Turkish = 'TURKISH',
  Ukrainian = 'UKRAINIAN',
  Vietnamese = 'Vietnamese'
}

export enum OneSignalStatusEnum {
  Canceled = 'Canceled',
  Schedule = 'Schedule',
  Sending = 'Sending',
  Sent = 'Sent'
}

export type Order = {
  __typename?: 'Order';
  account?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  customFields?: Maybe<Scalars['JSONObject']>;
  id: Scalars['String'];
  invoices?: Maybe<Array<Scalars['JSONObject']>>;
  payment?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  subscription?: Maybe<Scalars['JSONObject']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum OrderStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Unpaid = 'UNPAID'
}

export type Organization = {
  __typename?: 'Organization';
  access: AccessKinds;
  audioCdnBaseUrl?: Maybe<Scalars['String']>;
  avatarCdnBaseUrl?: Maybe<Scalars['String']>;
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  email_settings?: Maybe<Scalars['JSON']>;
  entitlements: Array<Scalars['JSON']>;
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
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

export type OrganizationKind = {
  __typename?: 'OrganizationKind';
  audioCdnBaseUrl?: Maybe<Scalars['String']>;
  avatarCdnBaseUrl?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  entitlements?: Maybe<Array<Scalars['JSON']>>;
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  imageCdnBaseUrl?: Maybe<Scalars['String']>;
  kind?: Maybe<Kinds>;
  name?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  web_url?: Maybe<Array<Scalars['String']>>;
};

export type OrganizationOneSignalOutput = {
  __typename?: 'OrganizationOneSignalOutput';
  id: Scalars['ID'];
  safari_web_id?: Maybe<Scalars['String']>;
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
  favicon?: Maybe<CustomizationMediaOutput>;
  firebase?: Maybe<Scalars['JSON']>;
  language?: Maybe<Scalars['String']>;
  logo?: Maybe<CustomizationMediaOutput>;
  onesignal: OrganizationOneSignalOutput;
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

export type PaginatedNotificationOutput = {
  __typename?: 'PaginatedNotificationOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<NotificationOutput>;
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

export type PaginatedReportsOutput = {
  __typename?: 'PaginatedReportsOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<Report>;
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

export type PaginatedSearchResultOutput = {
  __typename?: 'PaginatedSearchResultOutput';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  isFirstPage: Scalars['Boolean'];
  isLastPage: Scalars['Boolean'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
  pageNumberIsGood: Scalars['Boolean'];
  pageSize: Scalars['Float'];
  rows: Array<SearchResult>;
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

export enum PaymentMethods {
  Boleto = 'BOLETO',
  CreditCard = 'CREDIT_CARD',
  Pix = 'PIX'
}

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
  geofenceEntitlements?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: ChannelStatus;
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
  posts: PaginatedPostsOutput;
  slug: Scalars['String'];
  title: Scalars['String'];
};


export type PlaylistOutputPostsArgs = {
  postsFilters?: Maybe<PostFilter>;
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
  categories?: Maybe<Array<Category>>;
  channel: Scalars['ID'];
  countComments: Scalars['Int'];
  countReactions: Scalars['Int'];
  countUniqueCommenters: Scalars['Int'];
  countViewsTotal: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  devices: Scalars['JSONObject'];
  embed?: Maybe<Scalars['ID']>;
  engagedUsers: Array<EngagedUser>;
  entitlements: Array<Scalars['JSONObject']>;
  excerpt: Scalars['JSONObject'];
  featured: Scalars['Boolean'];
  folder: Scalars['ID'];
  geofence?: Maybe<Scalars['JSONObject']>;
  geofenceEntitlements?: Maybe<Scalars['JSONObject']>;
  hiddenFromFeed: Scalars['Boolean'];
  id: Scalars['ID'];
  inFeed: Scalars['Boolean'];
  isKindAuto: Scalars['Boolean'];
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
  tags?: Maybe<Array<TagOutput>>;
  teaser: Scalars['ID'];
  thumbnail?: Maybe<MediaPhoto>;
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Array<Kinds>>;
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  pinned?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['String']>;
  sortBy?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  typeIn?: Maybe<Array<PostType>>;
};

export type PostKind = {
  __typename?: 'PostKind';
  access: Scalars['String'];
  channel: Scalars['ID'];
  description: Scalars['String'];
  entitlements?: Maybe<Array<Scalars['JSONObject']>>;
  geofence?: Maybe<Scalars['JSONObject']>;
  geofenceEntitlements?: Maybe<Scalars['JSONObject']>;
  id: Scalars['ID'];
  isKindAuto: Scalars['Boolean'];
  kind: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<MediaPhoto>;
  title: Scalars['String'];
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

export type PriceTierOutput = {
  __typename?: 'PriceTierOutput';
  flatPrice: Scalars['String'];
  productPriceTiersId: Scalars['String'];
  productPricesId: Scalars['String'];
  unitPrice: Scalars['String'];
  upTo: Scalars['String'];
};

export type PricingModelOutput = {
  __typename?: 'PricingModelOutput';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ProductOutput = {
  __typename?: 'ProductOutput';
  createdDate: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  isActive: Scalars['Boolean'];
  metadata: Array<InspireMetadata>;
  name: Scalars['String'];
  statementDescriptor: Scalars['String'];
  unitLabel: Scalars['String'];
  updatedDate: Scalars['DateTime'];
};

export type ProductPriceOutput = {
  __typename?: 'ProductPriceOutput';
  billingPeriodId?: Maybe<Scalars['String']>;
  billingPeriods: BillingPeriodsOutput;
  billingTypes: BillingTypesOutput;
  billingTypesId: Scalars['String'];
  createdDate?: Maybe<Scalars['DateTime']>;
  currencies: CurrencyOutput;
  currencyId: Scalars['String'];
  customIntervalCount?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  installment?: Maybe<Scalars['Float']>;
  internalDescription?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
  isIncludingCountries: Scalars['Boolean'];
  metadata?: Maybe<Array<InspireMetadata>>;
  neverUsedSubscription: Scalars['Boolean'];
  numberActiveSubscriptions: Scalars['Float'];
  onlyProductPrice: Scalars['Boolean'];
  packageUnits?: Maybe<Scalars['Float']>;
  priceTiers: Array<PriceTierOutput>;
  pricingModelId: Scalars['String'];
  pricingModels: PricingModelOutput;
  products: ProductOutput;
  productsId: Scalars['String'];
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringMeteredUsages: RecurringMeteredUsagesOutput;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypes: RecurringUsageTypesOutput;
  recurringUsageTypesId: Scalars['String'];
  unitPrice: Scalars['Float'];
  unitPriceInstallment: Scalars['Float'];
  updatedDate?: Maybe<Scalars['DateTime']>;
};

export type ProductPriceTierInput = {
  flatPrice: Scalars['Float'];
  id?: Maybe<Scalars['String']>;
  productPricesId: Scalars['String'];
  unitPrice: Scalars['Float'];
  upTo?: Maybe<Scalars['Float']>;
};

export type ProductPricesOutput = {
  __typename?: 'ProductPricesOutput';
  billingPeriodId?: Maybe<Scalars['String']>;
  billingPeriods?: Maybe<PriceTierOutput>;
  billingTypes?: Maybe<BillingTypesOutput>;
  billingTypesId?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['String']>;
  customIntervalCount?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  internalDescription?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isIncludingCountries: Scalars['Boolean'];
  numberActiveSubscriptions?: Maybe<Scalars['Float']>;
  packageUnits?: Maybe<Scalars['String']>;
  paymentLinkItems?: Maybe<Array<Scalars['String']>>;
  price?: Maybe<Scalars['String']>;
  priceTiers?: Maybe<Array<PriceTierOutput>>;
  pricingModelId?: Maybe<Scalars['String']>;
  productsId: Scalars['String'];
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypes?: Maybe<RecurringUsageTypesOutput>;
  recurringUsageTypesId?: Maybe<Scalars['String']>;
  unitPrice: Scalars['String'];
  unitPriceInstallment?: Maybe<Scalars['String']>;
};

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

export type PublicChannelOutput = {
  __typename?: 'PublicChannelOutput';
  customization?: Maybe<ChannelCustomizationOutput>;
  id: Scalars['ID'];
  kind: Kinds;
  name: Scalars['String'];
  slug: Scalars['String'];
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

export type PushNotificationInput = {
  content: Scalars['String'];
};

export type PushNotificationOutput = {
  __typename?: 'PushNotificationOutput';
  content?: Maybe<Scalars['String']>;
  ignore?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type PushNotificationResult = {
  __typename?: 'PushNotificationResult';
  external_id?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  recipients: Scalars['String'];
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
  activeSubscriptons: Array<Order>;
  billboard: Billboard;
  billboards: PaginatedBillboardsOutput;
  categories: PaginatedCategoriesOutput;
  category: Category;
  categoryKind: CategoryKind;
  channel: Channel;
  channelKind: ChannelKind;
  channels: Array<Channel>;
  checkCategorySlug: CategorySlugExists;
  checkChannel: ResponseAvailabilityOutput;
  checkLiveEventSlug: LiveEventSlugExists;
  checkOrg: ResponseAvailabilityOutput;
  checkPostSlug: PostSlugExists;
  comment: Comment;
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
  getPublicChannel: PublicChannelOutput;
  group: GroupDto;
  groups: Array<GroupDto>;
  listNotifications: PaginatedNotificationOutput;
  liveEvent: LiveEvent;
  liveEventKind: LiveEventKind;
  liveEvents: PaginatedLiveEventsOutput;
  me: Me;
  media: MediaUnion;
  mediaCount: Scalars['Int'];
  medias: PaginatedMediaUnion;
  menu: Menu;
  menus: PaginatedMenusOutput;
  myProducts: MyProducts;
  order: Order;
  orders: Array<Order>;
  organization: Organization;
  organizationKind: OrganizationKind;
  organizationPublicSettings: OrganizationPublic;
  organizations: Array<Organization>;
  permission: PermissionDto;
  permissions: Array<PermissionDto>;
  playlist: PlaylistOutput;
  playlists: PlaylistsOutput;
  post: Post;
  postKind: PostKind;
  posts: PaginatedPostsOutput;
  product: InspireProduct;
  productPrice: ProductPriceOutput;
  productPrices: Array<ProductPricesOutput>;
  products: Array<InspireProductFiltered>;
  profile: Profile;
  profiles: Array<Profile>;
  publicCategories: PaginatedCategoriesOutput;
  publicChannels: Array<Channel>;
  publicLiveEvents: PaginatedLiveEventsOutput;
  publicMenus: PaginatedMenusOutput;
  publicPosts: PaginatedPostsOutput;
  publicTags: TagsOutput;
  report: Report;
  reports: PaginatedReportsOutput;
  role: RolesDto;
  roles: PaginatedRolesOutput;
  search: PaginatedSearchResultOutput;
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


export type QueryActiveSubscriptonsArgs = {
  filter?: Maybe<FilterFindAllOrders>;
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


export type QueryCategoryKindArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryChannelKindArgs = {
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


export type QueryCommentArgs = {
  commentId: Scalars['ID'];
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


export type QueryGetPublicChannelArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
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


export type QueryListNotificationsArgs = {
  payload?: Maybe<ListNotificationInput>;
};


export type QueryLiveEventArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryLiveEventKindArgs = {
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


export type QueryOrganizationKindArgs = {
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


export type QueryPostKindArgs = {
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  filters?: Maybe<PostFilter>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductPriceArgs = {
  id: Scalars['String'];
};


export type QueryProductPricesArgs = {
  params?: Maybe<FindAllProductPricesParams>;
};


export type QueryProfileArgs = {
  account: Scalars['ID'];
};


export type QueryProfilesArgs = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  sortBy?: Maybe<Scalars['String']>;
};


export type QueryPublicCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type QueryPublicChannelsArgs = {
  filter?: Maybe<ChannelFindAllFilter>;
};


export type QueryPublicLiveEventsArgs = {
  filter?: Maybe<LiveEventFilter>;
};


export type QueryPublicMenusArgs = {
  filter?: Maybe<MenuFilter>;
};


export type QueryPublicPostsArgs = {
  filters?: Maybe<PostFilter>;
};


export type QueryPublicTagsArgs = {
  filter?: Maybe<FindManyTagsInput>;
};


export type QueryReportArgs = {
  reportId: Scalars['ID'];
};


export type QueryReportsArgs = {
  filter?: Maybe<FindReportsInput>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  filter?: Maybe<FindAllRolesRequestDto>;
};


export type QuerySearchArgs = {
  filters?: Maybe<SearchFilter>;
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

export type RecurringMeteredUsagesOutput = {
  __typename?: 'RecurringMeteredUsagesOutput';
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  usage: Scalars['String'];
};

export type RecurringUsageTypesOutput = {
  __typename?: 'RecurringUsageTypesOutput';
  id: Scalars['String'];
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
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  idReported: Scalars['ID'];
  reason: Scalars['String'];
  reportedObject?: Maybe<ReportSubjectUnion>;
  status: ReportStatus;
  type: ReportType;
  updatedAt: Scalars['DateTime'];
};

export enum ReportStatus {
  Open = 'OPEN',
  Reviewed = 'REVIEWED',
  Reviewing = 'REVIEWING'
}

export type ReportSubjectUnion = Comment | Post | ReportedAccountOutput;

export enum ReportType {
  Comment = 'COMMENT',
  Post = 'POST',
  User = 'USER'
}

export type ReportedAccountOutput = {
  __typename?: 'ReportedAccountOutput';
  id: Scalars['ID'];
  username: Scalars['String'];
};

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
  /** createdAt */
  createdAt: Scalars['String'];
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

export type SearchCategory = {
  __typename?: 'SearchCategory';
  access?: Maybe<Scalars['String']>;
  channel?: Maybe<Scalars['ID']>;
  customization?: Maybe<CategoryCustomization>;
  description?: Maybe<Scalars['String']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Kinds>;
  name?: Maybe<Scalars['String']>;
  pinnedStatus?: Maybe<AccountPinnedCategory>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<SearchTag>>;
};

export type SearchCategoryHead = {
  __typename?: 'SearchCategoryHead';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SearchFilter = {
  page?: Maybe<Scalars['Float']>;
  pageSize?: Maybe<Scalars['Float']>;
  query?: Maybe<Scalars['String']>;
  types?: Maybe<Array<SearchResultEnum>>;
};

export type SearchFilterOperator = {
  search: Scalars['String'];
};

export type SearchLiveEvent = {
  __typename?: 'SearchLiveEvent';
  access?: Maybe<Scalars['String']>;
  category?: Maybe<SearchCategoryHead>;
  channel?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Kinds>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<SearchTag>>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SearchPost = {
  __typename?: 'SearchPost';
  access?: Maybe<Scalars['String']>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<SearchCategoryHead>>;
  channel?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<MediaUnion>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<SearchTag>>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SearchResult = SearchCategory | SearchLiveEvent | SearchPost;

export enum SearchResultEnum {
  Category = 'Category',
  LiveEvent = 'LiveEvent',
  Post = 'Post'
}

export type SearchTag = {
  __typename?: 'SearchTag';
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type SearchUpdateChannel = {
  __typename?: 'SearchUpdateChannel';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['String']>;
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
  locale?: Maybe<MediaLocale>;
  mediaVideoId?: Maybe<Scalars['String']>;
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
  relatedCategories: PaginatedCategoriesOutput;
  relatedPosts: PaginatedPostsOutput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type TagOutputRelatedCategoriesArgs = {
  filters?: Maybe<CategoryFilter>;
};


export type TagOutputRelatedPostsArgs = {
  filters?: Maybe<PostFilter>;
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

export type UncancelSubscription = {
  subscriptionId: Scalars['String'];
};

export type UpdateAccountGdprLgpdInput = {
  accepted: Scalars['Boolean'];
};

export type UpdateAccountInput = {
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
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
  featured?: Maybe<Scalars['Boolean']>;
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
  entitlements?: Maybe<Array<Scalars['String']>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geoFence?: Maybe<Scalars['JSONObject']>;
  isChild?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
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
  entitlements?: Maybe<Array<Scalars['ID']>>;
  geofence?: Maybe<Scalars['String']>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  kind?: Maybe<Kinds>;
  menu?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  status?: Maybe<ChannelStatus>;
  thumbnail?: Maybe<Scalars['ID']>;
};

export type UpdateComment = {
  description?: Maybe<Scalars['String']>;
};

export type UpdateCreditCardPaymentMethod = {
  billingAddress: BillingAddressInput;
  /** the user card brand */
  cardBrand?: Maybe<Scalars['String']>;
  /** the user name */
  cardHolderName?: Maybe<Scalars['String']>;
  /** the country id from country code from inspire api */
  country?: Maybe<Scalars['String']>;
  /** Customer CPF */
  cpf?: Maybe<Scalars['String']>;
  /** the user card expiration date */
  expirationDate?: Maybe<Scalars['String']>;
  /** the last 4 values of user card */
  lastDigits?: Maybe<Scalars['String']>;
  /** the token used on payment gateway */
  paymentGatewayToken?: Maybe<Scalars['String']>;
};

export type UpdateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type UpdateEmailTemplateDto = {
  name: Scalars['String'];
  templates: Array<LocaleBody>;
};

export type UpdateEmbed = {
  code?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSONObject']>;
};

export type UpdateEnvConfigInput = {
  analyticsAPI?: Maybe<Scalars['String']>;
  apiEndpoint?: Maybe<Scalars['String']>;
  facebookTag?: Maybe<Scalars['String']>;
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
  googleTag?: Maybe<Scalars['String']>;
  inspireAuthUrl?: Maybe<Scalars['String']>;
  inspirePassword?: Maybe<Scalars['String']>;
  inspirePaymentUrl?: Maybe<Scalars['String']>;
  inspireTenantId?: Maybe<Scalars['String']>;
  inspireUrl?: Maybe<Scalars['String']>;
  inspireUsername?: Maybe<Scalars['String']>;
  muxKey?: Maybe<Scalars['String']>;
  onesignalAppId?: Maybe<Scalars['String']>;
  onesignalSafariWebId?: Maybe<Scalars['String']>;
  remoteConfigSecret?: Maybe<Scalars['String']>;
  s3SignedUrl?: Maybe<Scalars['String']>;
  uploadAwsKey?: Maybe<Scalars['String']>;
  videoAnalyticsPassword?: Maybe<Scalars['String']>;
  videoAnalyticsUrl?: Maybe<Scalars['String']>;
  videoAnalyticsUsername?: Maybe<Scalars['String']>;
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
  entitlements?: Maybe<Array<Scalars['String']>>;
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

export type UpdateMediaSubtitlesInput = {
  aspectRatio?: Maybe<Scalars['String']>;
  baseUrl?: Maybe<Scalars['String']>;
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Float']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  hlsPath?: Maybe<Scalars['String']>;
  imgPath?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  locale?: Maybe<MediaLocale>;
  mp4Path?: Maybe<Scalars['String']>;
  mp4VodUrl?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<MediaStatusEnum>;
  thumbnailPath?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<MediaTypeEnum>;
  upload?: Maybe<Scalars['ID']>;
  vttPath?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
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
  subtitles?: Maybe<Array<Scalars['String']>>;
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

export type UpdateMyAccountInput = {
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
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
  entitlements?: Maybe<Array<Scalars['String']>>;
  favicon?: Maybe<Scalars['String']>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  kind?: Maybe<Kinds>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UpdatePassword = {
  email: Scalars['String'];
  oobCode: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePasswordOnlyInput = {
  currentPassword: Scalars['String'];
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
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePlaylistInput = {
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateProductInput = {
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<InspireProductMetadataInput>>;
  name?: Maybe<Scalars['String']>;
  productPrices?: Maybe<Array<InspireProductPriceInput>>;
  statementDescriptor?: Maybe<Scalars['String']>;
  unitLabel?: Maybe<Scalars['String']>;
};

export type UpdateProductPriceInput = {
  billingPeriodId?: Maybe<Scalars['String']>;
  billingTypesId?: Maybe<Scalars['String']>;
  currencyId?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Float']>;
  internalDescription?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Array<InspireMetadataInput>>;
  priceTiers?: Maybe<Array<ProductPriceTierInput>>;
  pricingModelId?: Maybe<Scalars['String']>;
  productsId?: Maybe<Scalars['String']>;
  recurringMeteredUsageId?: Maybe<Scalars['String']>;
  recurringTrialPeriodDays?: Maybe<Scalars['Float']>;
  recurringUsageTypesId?: Maybe<Scalars['String']>;
  unitPrice?: Maybe<Scalars['Float']>;
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

export type UpdateReport = {
  description?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  type?: Maybe<ReportType>;
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
  /** Array of post ids */
  posts?: Maybe<Array<Scalars['ID']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateTextPost = {
  access?: Maybe<PostAccess>;
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  tags?: Maybe<Array<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateUploadInput = {
  bucket?: Maybe<Scalars['String']>;
  expireIn?: Maybe<Scalars['Float']>;
  expired?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  isAvatar?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<MediaLocale>;
  mediaVideoId?: Maybe<Scalars['String']>;
  status?: Maybe<UploadStatusEnum>;
  url?: Maybe<Scalars['String']>;
};

export type UpdateVideoPost = {
  access?: Maybe<PostAccess>;
  allowComments?: Maybe<Scalars['Boolean']>;
  categories?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Scalars['String']>>;
  featured?: Maybe<Scalars['Boolean']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<GeofenceInput>;
  geofenceEntitlements?: Maybe<EntitlementsGeofenceInput>;
  inFeed?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Kinds>;
  media?: Maybe<Scalars['ID']>;
  password?: Maybe<Scalars['String']>;
  playlists?: Maybe<Array<Scalars['String']>>;
  pushNotification?: Maybe<PushNotification>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  subtitles?: Maybe<Array<Scalars['String']>>;
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

export type ForgetAccountMutationVariables = Exact<{
  forgetAccountId: Scalars['ID'];
  input: ForgetAccountInput;
}>;


export type ForgetAccountMutation = { __typename?: 'Mutation', forgetAccount: { __typename?: 'Account', email?: Maybe<string> } };

export type UpdateMyAccountMutationVariables = Exact<{
  payload: UpdateMyAccountInput;
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


export type UpdateMyProfileMutation = { __typename?: 'Mutation', updateMyProfile: { __typename?: 'Profile', address?: Maybe<string>, birthday?: Maybe<any>, custom_fields?: Maybe<any>, gender?: Maybe<string>, phone?: Maybe<string>, locale?: Maybe<string>, avatar?: Maybe<{ __typename?: 'ProfileAvatar', imgPath?: Maybe<string> }> } };

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

export type AddPendingOrderMutationVariables = Exact<{
  product: Scalars['String'];
}>;


export type AddPendingOrderMutation = { __typename?: 'Mutation', addPendingOrder: { __typename?: 'Order', id: string, status?: Maybe<OrderStatus>, account?: Maybe<string>, product?: Maybe<string> } };

export type ConfirmOrderMutationVariables = Exact<{
  payload: ConfirmOrder;
}>;


export type ConfirmOrderMutation = { __typename?: 'Mutation', confirmOrder: { __typename?: 'Order', id: string, status?: Maybe<OrderStatus>, subscription?: Maybe<any>, invoices?: Maybe<Array<any>> } };

export type OneTimePaymentMutationVariables = Exact<{
  payload: ConfirmOrder;
}>;


export type OneTimePaymentMutation = { __typename?: 'Mutation', oneTimePayment: { __typename?: 'Order', id: string, status?: Maybe<OrderStatus>, subscription?: Maybe<any>, invoices?: Maybe<Array<any>> } };

export type OrganizationPasswordCheckMutationVariables = Exact<{
  organizationId: Scalars['ID'];
  password: Scalars['String'];
}>;


export type OrganizationPasswordCheckMutation = { __typename?: 'Mutation', organizationPasswordCheck: { __typename?: 'OrganizationPasswordCheck', correct: boolean } };

export type AddCommentMutationVariables = Exact<{
  payload: AddComment;
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', countComments: number, parent?: Maybe<string>, id: string, description: string, createdAt: any, content: string, account: string, myVote: string, author?: Maybe<{ __typename?: 'CommentAuthor', displayName?: Maybe<string>, username?: Maybe<string> }>, commentVoteStats: { __typename?: 'CommentVoteStats', countUpvotes: number, countDownvotes: number } } };

export type AddReactionMutationVariables = Exact<{
  input: AddReaction;
}>;


export type AddReactionMutation = { __typename?: 'Mutation', addReaction: Array<{ __typename?: 'ReactionsAggregate', name: string, count: number }> };

export type AddReportMutationVariables = Exact<{
  payload: AddReport;
}>;


export type AddReportMutation = { __typename?: 'Mutation', addReport: { __typename?: 'Report', status: ReportStatus } };

export type AddViewMutationVariables = Exact<{
  postId: Scalars['String'];
}>;


export type AddViewMutation = { __typename?: 'Mutation', addView: { __typename?: 'Post', countViewsTotal: number } };

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

export type CreateUploadMutationVariables = Exact<{
  payload: CreateUploadInput;
}>;


export type CreateUploadMutation = { __typename?: 'Mutation', createUpload: { __typename?: 'ResponseUploadCreation', upload: { __typename?: 'ResponseUploadOutput', bucket: string, createdAt: any, expireIn: number, expired: boolean, filename: string, id: string, isExpiredCalc: boolean, status: UploadStatusEnum, url: string }, media: { __typename?: 'Media', account: string, id: string } } };

export type AccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AccountQuery = { __typename?: 'Query', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string> } };

export type CustomFieldsQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomFieldsQuery = { __typename?: 'Query', customFields: Array<{ __typename?: 'ResponseCustomFieldsOutput', id: string, fields: Array<{ __typename?: 'ResponseFieldOutput', name: string, required: boolean, type: CustomFieldTypesEnum }> }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'Me', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, username?: Maybe<string>, is_admin?: Maybe<boolean>, is_super_user?: Maybe<boolean>, is_tenant_user?: Maybe<boolean> }, profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, birthday?: Maybe<any>, custom_fields?: Maybe<any>, locale?: Maybe<string>, phone?: Maybe<string>, avatar?: Maybe<{ __typename?: 'ProfileAvatar', imgPath?: Maybe<string> }> } } };

export type ProfileQueryVariables = Exact<{
  account: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', id: string, address?: Maybe<string>, birthday?: Maybe<any>, phone?: Maybe<string>, avatar?: Maybe<{ __typename?: 'ProfileAvatar', imgPath?: Maybe<string> }> } };

export type GetBillboardsQueryVariables = Exact<{
  filter?: Maybe<FindBillboardsInput>;
}>;


export type GetBillboardsQuery = { __typename?: 'Query', billboards: { __typename?: 'PaginatedBillboardsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Billboard', id: string, title?: Maybe<string>, description?: Maybe<string>, delay?: Maybe<number>, sort?: Maybe<number>, actions: Array<{ __typename?: 'BillboardActionsOutput', bgColor?: Maybe<string>, borderColor?: Maybe<string>, icon?: Maybe<string>, label?: Maybe<string>, textColor?: Maybe<string>, route?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaRouteContent', content: string, contentWeb: string } | { __typename?: 'MediaVideo' }> }>, customization: { __typename?: 'BillboardCustomizationOutput', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> } }> } };

export type GetCategoriesQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', access?: Maybe<AccessKinds>, parentId?: Maybe<string>, slug?: Maybe<string>, createdAt: any, sort: number, kind: Kinds, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', parentId?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, featuredAt?: Maybe<any>, sort: number, geoFence?: Maybe<any>, id: string, kind: Kinds, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetPublicCategoriesQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetPublicCategoriesQuery = { __typename?: 'Query', publicCategories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', id: string, parentId?: Maybe<string>, slug?: Maybe<string>, sort: number, kind: Kinds, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', parentId?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, featuredAt?: Maybe<any>, sort: number, geoFence?: Maybe<any>, id: string, kind: Kinds, name: string, customization?: Maybe<{ __typename: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetCategoriesCardsQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetCategoriesCardsQuery = { __typename?: 'Query', categories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetPublicCategoriesCardsQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetPublicCategoriesCardsQuery = { __typename?: 'Query', publicCategories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', id: string, name: string, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', id: string, name: string, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type CategoryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
  postFilter?: Maybe<PostFilter>;
}>;


export type CategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, access?: Maybe<AccessKinds>, slug?: Maybe<string>, createdAt: any, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, status: string, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number>, mp3Path?: Maybe<string> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> }, children: Array<{ __typename?: 'Category', sort: number, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, slug?: Maybe<string>, id: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> } };

export type CategoryKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type CategoryKindQuery = { __typename?: 'Query', categoryKind: { __typename?: 'CategoryKind', id: string, access?: Maybe<string>, kind: Kinds, entitlements?: Maybe<Array<any>>, name: string } };

export type ChannelQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type ChannelQuery = { __typename?: 'Query', channel: { __typename: 'AvailableChannel', access: AccessKinds, id: string, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> }> } | { __typename: 'GeolockedChannel', id: string, name: string, slug?: Maybe<string>, kind?: Maybe<Kinds>, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> }> } };

export type PublicChannelQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PublicChannelQuery = { __typename?: 'Query', getPublicChannel: { __typename?: 'PublicChannelOutput', id: string, name: string, kind: Kinds, slug: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> }> } };

export type ChannelKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type ChannelKindQuery = { __typename?: 'Query', channelKind: { __typename?: 'ChannelKind', id: string, kind?: Maybe<Kinds>, slug?: Maybe<string>, geofence?: Maybe<any>, name: string } };

export type ChannelEntitlementsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type ChannelEntitlementsQuery = { __typename?: 'Query', channel: { __typename?: 'AvailableChannel', id: string, access: AccessKinds, entitlements?: Maybe<Array<any>> } | { __typename?: 'GeolockedChannel' } };

export type ChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename: 'AvailableChannel', id: string, access: AccessKinds, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, thumbnail?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> } | { __typename: 'GeolockedChannel', id: string, name: string, kind?: Maybe<Kinds>, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, thumbnail?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> }> };

export type PublicChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type PublicChannelsQuery = { __typename?: 'Query', publicChannels: Array<{ __typename: 'AvailableChannel', id: string, kind?: Maybe<Kinds>, access: AccessKinds, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, thumbnail?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> } | { __typename: 'GeolockedChannel', id: string, name: string, kind?: Maybe<Kinds>, customization?: Maybe<{ __typename?: 'ChannelCustomizationOutput', icon?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, logo?: Maybe<{ __typename?: 'ChannelCustomizationLightDarkOutput', dark?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }>, light?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }>, thumbnail?: Maybe<{ __typename?: 'CustomizationMediaOutput', imgPath?: Maybe<string> }> }> }> };

export type CommentsQueryVariables = Exact<{
  filter?: Maybe<CommentFilter>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'PaginatedCommentsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, total: number, isLastPage: boolean, page: number, pageCount: number, pageSize: number, rows: Array<{ __typename?: 'Comment', description: string, id: string, createdAt: any, countComments: number, parent?: Maybe<string>, account: string, myVote: string, author?: Maybe<{ __typename?: 'CommentAuthor', id?: Maybe<string>, displayName?: Maybe<string>, username?: Maybe<string> }>, commentVoteStats: { __typename?: 'CommentVoteStats', countDownvotes: number, countUpvotes: number } }> } };

export type EnvConfigQueryVariables = Exact<{
  origin: Scalars['String'];
}>;


export type EnvConfigQuery = { __typename?: 'Query', envConfig: { __typename?: 'EncryptedEnvConfig', result: string } };

export type LiveEventQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type LiveEventQuery = { __typename?: 'Query', liveEvent: { __typename?: 'LiveEvent', id: string, access?: Maybe<AccessKinds>, createdAt: any, description?: Maybe<string>, kind: Kinds, scheduledStartAt?: Maybe<any>, commentsEnabled?: Maybe<boolean>, hlsPlaybackUrl?: Maybe<string>, presenceEnabled?: Maybe<boolean>, reactionsEnabled?: Maybe<boolean>, slug?: Maybe<string>, status?: Maybe<Status>, streamName?: Maybe<string>, title: string, type: LiveEventType } };

export type LiveEventKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type LiveEventKindQuery = { __typename?: 'Query', liveEventKind: { __typename?: 'LiveEventKind', id: string, access?: Maybe<string>, kind: Kinds, entitlements?: Maybe<Array<any>>, slug?: Maybe<string>, title: string } };

export type GetLiveEventsQueryVariables = Exact<{
  filter?: Maybe<LiveEventFilter>;
}>;


export type GetLiveEventsQuery = { __typename?: 'Query', liveEvents: { __typename?: 'PaginatedLiveEventsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename: 'LiveEvent', id: string, access?: Maybe<AccessKinds>, createdAt: any, description?: Maybe<string>, kind: Kinds, scheduledStartAt?: Maybe<any>, slug?: Maybe<string>, status?: Maybe<Status>, title: string, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }> }> } };

export type GetPublicLiveEventsQueryVariables = Exact<{
  filter?: Maybe<LiveEventFilter>;
}>;


export type GetPublicLiveEventsQuery = { __typename?: 'Query', publicLiveEvents: { __typename?: 'PaginatedLiveEventsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename: 'LiveEvent', id: string, access?: Maybe<AccessKinds>, createdAt: any, description?: Maybe<string>, kind: Kinds, scheduledStartAt?: Maybe<any>, slug?: Maybe<string>, status?: Maybe<Status>, title: string, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }> }> } };

export type MenusQueryVariables = Exact<{
  filter?: Maybe<MenuFilter>;
}>;


export type MenusQuery = { __typename?: 'Query', menus: { __typename?: 'PaginatedMenusOutput', rows: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }>, children: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }> }> }> } };

export type PublicMenusQueryVariables = Exact<{
  filter?: Maybe<MenuFilter>;
}>;


export type PublicMenusQuery = { __typename?: 'Query', publicMenus: { __typename?: 'PaginatedMenusOutput', rows: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }>, children: Array<{ __typename?: 'Menu', id: string, channel?: Maybe<string>, icon?: Maybe<string>, name?: Maybe<string>, platformExclusive?: Maybe<PlatformExclusive>, route?: Maybe<string>, sort?: Maybe<number>, status?: Maybe<string>, parameters?: Maybe<{ __typename?: 'Parameters', id: string, missing?: Maybe<string> }> }> }> } };

export type GetOrderResultQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetOrderResultQuery = { __typename?: 'Query', order: { __typename?: 'Order', id: string, account?: Maybe<string>, status?: Maybe<OrderStatus> } };

export type OrganizationKindQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationKindQuery = { __typename?: 'Query', organizationKind: { __typename?: 'OrganizationKind', id: string, kind?: Maybe<Kinds> } };

export type OrganizationEntitlementsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationEntitlementsQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string, entitlements: Array<any>, access: AccessKinds } };

export type GetPlaylistQueryVariables = Exact<{
  id: Scalars['ID'];
  postsFilters: PostFilter;
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist: { __typename: 'PlaylistOutput', id: string, title: string, posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } } };

export type PostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, access: string, allowComments: boolean, countComments: number, countReactions: number, countViewsTotal: number, slug?: Maybe<string>, description: string, featured: boolean, geofence?: Maybe<any>, kind: string, title: string, type: string, categories?: Maybe<Array<{ __typename?: 'Category', id: string }>>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, playlists?: Maybe<Array<{ __typename?: 'PlaylistOutput', id: string, slug: string, title: string }>>, engagedUsers: Array<{ __typename?: 'EngagedUser', username?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number>, mp3Path?: Maybe<string> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, baseUrl?: Maybe<string>, mp4Path?: Maybe<string>, duration?: Maybe<number>, aspectRatio?: Maybe<string>, createdAt: any, hlsPath?: Maybe<string>, subtitles?: Maybe<Array<{ __typename?: 'MediaSubtitle', id: string, locale?: Maybe<string>, baseUrl?: Maybe<string>, vttPath?: Maybe<string>, label?: Maybe<string> }>> }>, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, reactions: Array<{ __typename?: 'PostReactions', name: string, count: number }> } };

export type PostKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PostKindQuery = { __typename?: 'Query', postKind: { __typename?: 'PostKind', id: string, access: string, kind: string, title: string, entitlements?: Maybe<Array<any>>, slug?: Maybe<string> } };

export type GetPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, countViewsTotal: number, status: string, title: string, type: string, publishedAt?: Maybe<any>, countComments: number, countReactions: number, inFeed: boolean, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }>, reactions: Array<{ __typename?: 'PostReactions', count: number, name: string }> }> } };

export type GetPubicPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPubicPostsQuery = { __typename?: 'Query', publicPosts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, countViewsTotal: number, access: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, status: string, title: string, type: string, publishedAt?: Maybe<any>, countComments: number, countReactions: number, inFeed: boolean, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }>, reactions: Array<{ __typename?: 'PostReactions', count: number, name: string }> }> } };

export type GetPostsCardsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsCardsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, countViewsTotal: number, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetPublicPostsCardsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPublicPostsCardsQuery = { __typename?: 'Query', publicPosts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, countViewsTotal: number, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'InspireProduct', description?: Maybe<string>, imageUrl: string, isActive?: Maybe<boolean>, name?: Maybe<string>, unitLabel?: Maybe<string>, metadata?: Maybe<Array<{ __typename?: 'InspireMetadata', key?: Maybe<string>, value?: Maybe<string> }>>, productPrices?: Maybe<Array<{ __typename?: 'InspireProductPrices', id?: Maybe<string>, internalDescription?: Maybe<string>, unitPrice?: Maybe<number>, billingTypes?: Maybe<{ __typename?: 'InspireBillingTypes', id?: Maybe<string>, name?: Maybe<string> }>, currency?: Maybe<{ __typename?: 'InspireCurrency', isoCode?: Maybe<string> }>, billingPeriods?: Maybe<{ __typename?: 'InspireBillingPeriods', id?: Maybe<string>, name?: Maybe<string> }>, recurringUsageTypes?: Maybe<{ __typename?: 'InspireRecurringUsageTypes', id?: Maybe<string>, name?: Maybe<string> }> }>> } };

export type SearchQueryVariables = Exact<{
  filters?: Maybe<SearchFilter>;
}>;


export type SearchQuery = { __typename?: 'Query', search: { __typename?: 'PaginatedSearchResultOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, pageNumberIsGood: boolean, pageSize: number, total: number, rows: Array<{ __typename?: 'SearchCategory', id?: Maybe<string>, name?: Maybe<string>, slug?: Maybe<string>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, tags?: Maybe<Array<{ __typename?: 'SearchTag', id?: Maybe<string>, title?: Maybe<string> }>> } | { __typename?: 'SearchLiveEvent', id?: Maybe<string>, slug?: Maybe<string>, title?: Maybe<string>, category?: Maybe<{ __typename?: 'SearchCategoryHead', id?: Maybe<string>, name?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, tags?: Maybe<Array<{ __typename?: 'SearchTag', id?: Maybe<string>, title?: Maybe<string> }>> } | { __typename?: 'SearchPost', id?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, title?: Maybe<string>, type?: Maybe<string>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string>, baseUrl?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', mp3Path?: Maybe<string>, filename?: Maybe<string> } | { __typename?: 'MediaPhoto', imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccessKinds: AccessKinds;
  AccessToken: ResolverTypeWrapper<AccessToken>;
  Account: ResolverTypeWrapper<Account>;
  AccountActivated: ResolverTypeWrapper<AccountActivated>;
  AccountGdprLgpd: ResolverTypeWrapper<AccountGdprLgpd>;
  AccountPinnedCategory: ResolverTypeWrapper<AccountPinnedCategory>;
  AccountPinnedChannel: ResolverTypeWrapper<AccountPinnedChannel>;
  AccountPinnedPost: ResolverTypeWrapper<AccountPinnedPost>;
  AccountSession: ResolverTypeWrapper<AccountSession>;
  AccountStatus: ResolverTypeWrapper<AccountStatus>;
  Actions: Actions;
  ActivateAccount: ActivateAccount;
  AddComment: AddComment;
  AddCommentVote: AddCommentVote;
  AddOrder: AddOrder;
  AddOrderCustomFields: AddOrderCustomFields;
  AddOverrideOrder: AddOverrideOrder;
  AddPendingOrder: AddPendingOrder;
  AddReaction: AddReaction;
  AddReport: AddReport;
  AddedCommentVote: ResolverTypeWrapper<AddedCommentVote>;
  AudioInput: AudioInput;
  AvailableChannel: ResolverTypeWrapper<AvailableChannel>;
  BanAccountTemporary: BanAccountTemporary;
  Billboard: ResolverTypeWrapper<Billboard>;
  BillboardActionInput: BillboardActionInput;
  BillboardActionsOutput: ResolverTypeWrapper<Omit<BillboardActionsOutput, 'route'> & { route?: Maybe<ResolversTypes['MediaRouteUnion']> }>;
  BillboardCustomizationInput: BillboardCustomizationInput;
  BillboardCustomizationOutput: ResolverTypeWrapper<BillboardCustomizationOutput>;
  BillboardTarget: BillboardTarget;
  BillingAddressInput: BillingAddressInput;
  BillingPeriodsOutput: ResolverTypeWrapper<BillingPeriodsOutput>;
  BillingTypesOutput: ResolverTypeWrapper<BillingTypesOutput>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CancelNotificationInput: CancelNotificationInput;
  CancelNotificationOutput: ResolverTypeWrapper<CancelNotificationOutput>;
  CancelSubscription: CancelSubscription;
  Category: ResolverTypeWrapper<Category>;
  CategoryCustomization: ResolverTypeWrapper<CategoryCustomization>;
  CategoryCustomizationInput: CategoryCustomizationInput;
  CategoryFilter: CategoryFilter;
  CategoryInput: CategoryInput;
  CategoryKind: ResolverTypeWrapper<CategoryKind>;
  CategoryPasswordCheck: ResolverTypeWrapper<CategoryPasswordCheck>;
  CategoryPasswordCheckInput: CategoryPasswordCheckInput;
  CategorySlugExists: ResolverTypeWrapper<CategorySlugExists>;
  CategorySortingOutput: ResolverTypeWrapper<CategorySortingOutput>;
  Channel: ResolversTypes['AvailableChannel'] | ResolversTypes['GeolockedChannel'];
  ChannelCustomizationInput: ChannelCustomizationInput;
  ChannelCustomizationLightDarkInput: ChannelCustomizationLightDarkInput;
  ChannelCustomizationLightDarkOutput: ResolverTypeWrapper<ChannelCustomizationLightDarkOutput>;
  ChannelCustomizationOutput: ResolverTypeWrapper<ChannelCustomizationOutput>;
  ChannelFindAllFilter: ChannelFindAllFilter;
  ChannelKind: ResolverTypeWrapper<ChannelKind>;
  ChannelPasswordCheck: ResolverTypeWrapper<ChannelPasswordCheck>;
  ChannelStatus: ChannelStatus;
  ChildrenCategoryFilter: ChildrenCategoryFilter;
  Comment: ResolverTypeWrapper<Comment>;
  CommentAuthor: ResolverTypeWrapper<CommentAuthor>;
  CommentFilter: CommentFilter;
  CommentVote: ResolverTypeWrapper<CommentVote>;
  CommentVoteDirectionEnum: CommentVoteDirectionEnum;
  CommentVoteStats: ResolverTypeWrapper<CommentVoteStats>;
  ConfirmOrder: ConfirmOrder;
  CreateAccountGdprLgpdInput: CreateAccountGdprLgpdInput;
  CreateAccountInput: CreateAccountInput;
  CreateAccountPinnedPost: CreateAccountPinnedPost;
  CreateAccountPinnnedCategory: CreateAccountPinnnedCategory;
  CreateAccountSessionInput: CreateAccountSessionInput;
  CreateAccountSocialSignInDto: CreateAccountSocialSignInDto;
  CreateAudioPost: CreateAudioPost;
  CreateBillboardInput: CreateBillboardInput;
  CreateChannelInput: CreateChannelInput;
  CreateCustomFieldInput: CreateCustomFieldInput;
  CreateEmailTemplateDTO: CreateEmailTemplateDto;
  CreateEnvConfigInput: CreateEnvConfigInput;
  CreateGroupDto: CreateGroupDto;
  CreateInspireProductInput: CreateInspireProductInput;
  CreateMediaFromLiveInput: CreateMediaFromLiveInput;
  CreateMediaInput: CreateMediaInput;
  CreateMenu: CreateMenu;
  CreateNestedPermissionsInput: CreateNestedPermissionsInput;
  CreateOrganizationInput: CreateOrganizationInput;
  CreatePermissionInput: CreatePermissionInput;
  CreatePhotoPost: CreatePhotoPost;
  CreatePlaylistInput: CreatePlaylistInput;
  CreateProductPriceInput: CreateProductPriceInput;
  CreateRoleInput: CreateRoleInput;
  CreateSubjectInput: CreateSubjectInput;
  CreateTagInput: CreateTagInput;
  CreateTextPost: CreateTextPost;
  CreateUploadInput: CreateUploadInput;
  CreateVideoPost: CreateVideoPost;
  CurrencyOutput: ResolverTypeWrapper<CurrencyOutput>;
  CustomFieldInput: CustomFieldInput;
  CustomFieldTypesEnum: CustomFieldTypesEnum;
  CustomPushNotificationInput: CustomPushNotificationInput;
  CustomizationMediaOutput: ResolverTypeWrapper<CustomizationMediaOutput>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DefaultCreditCardPaymentMethod: ResolverTypeWrapper<DefaultCreditCardPaymentMethod>;
  DelayedOptionEnum: DelayedOptionEnum;
  EmailResponseEnvelopeDTO: ResolverTypeWrapper<EmailResponseEnvelopeDto>;
  EmailSent: ResolverTypeWrapper<EmailSent>;
  EmailTemplate: ResolverTypeWrapper<EmailTemplate>;
  EmailTemplateLocales: ResolverTypeWrapper<EmailTemplateLocales>;
  Embed: ResolverTypeWrapper<Embed>;
  EmbedFilterInput: EmbedFilterInput;
  EmbedInput: EmbedInput;
  EncryptedEnvConfig: ResolverTypeWrapper<EncryptedEnvConfig>;
  EngagedUser: ResolverTypeWrapper<EngagedUser>;
  EntitlementGeofenceInput: EntitlementGeofenceInput;
  EntitlementsGeofenceInput: EntitlementsGeofenceInput;
  EnvConfig: ResolverTypeWrapper<EnvConfig>;
  FilterFindAll: FilterFindAll;
  FilterFindAllOrders: FilterFindAllOrders;
  FilterPinnedCategories: FilterPinnedCategories;
  FilterPinnedPosts: FilterPinnedPosts;
  FilterPlaylistsInput: FilterPlaylistsInput;
  FindAllGroupsRequestDto: FindAllGroupsRequestDto;
  FindAllMediasInput: FindAllMediasInput;
  FindAllProductPricesParams: FindAllProductPricesParams;
  FindAllQueryParamsDto: FindAllQueryParamsDto;
  FindAllRolesRequestDto: FindAllRolesRequestDto;
  FindAllSubjectsQueryParamsDto: FindAllSubjectsQueryParamsDto;
  FindBillboardsInput: FindBillboardsInput;
  FindManyTagsInput: FindManyTagsInput;
  FindReportsInput: FindReportsInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ForgetAccountInput: ForgetAccountInput;
  ForgotPassword: ForgotPassword;
  GeoFenceType: GeoFenceType;
  GeofenceInput: GeofenceInput;
  GeolockedChannel: ResolverTypeWrapper<GeolockedChannel>;
  GroupDto: ResolverTypeWrapper<GroupDto>;
  GroupsSortBy: GroupsSortBy;
  GroupsSortFields: GroupsSortFields;
  HasAccessInput: HasAccessInput;
  HasAccessOutput: ResolverTypeWrapper<HasAccessOutput>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  InspireBillingPeriods: ResolverTypeWrapper<InspireBillingPeriods>;
  InspireBillingTypes: ResolverTypeWrapper<InspireBillingTypes>;
  InspireCurrency: ResolverTypeWrapper<InspireCurrency>;
  InspireMetadata: ResolverTypeWrapper<InspireMetadata>;
  InspireMetadataInput: InspireMetadataInput;
  InspirePaymentLinkItem: ResolverTypeWrapper<InspirePaymentLinkItem>;
  InspireProduct: ResolverTypeWrapper<InspireProduct>;
  InspireProductFiltered: ResolverTypeWrapper<InspireProductFiltered>;
  InspireProductMetadataInput: InspireProductMetadataInput;
  InspireProductPriceInput: InspireProductPriceInput;
  InspireProductPriceTier: ResolverTypeWrapper<InspireProductPriceTier>;
  InspireProductPriceTierInput: InspireProductPriceTierInput;
  InspireProductPrices: ResolverTypeWrapper<InspireProductPrices>;
  InspireRecurringUsageTypes: ResolverTypeWrapper<InspireRecurringUsageTypes>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InviteTeamMemberInput: InviteTeamMemberInput;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Kinds: Kinds;
  LanguageMessage: LanguageMessage;
  ListNotificationInput: ListNotificationInput;
  LiveEvent: ResolverTypeWrapper<LiveEvent>;
  LiveEventConfig: LiveEventConfig;
  LiveEventConfigOutput: ResolverTypeWrapper<LiveEventConfigOutput>;
  LiveEventFilter: LiveEventFilter;
  LiveEventGoLiveOutput: ResolverTypeWrapper<LiveEventGoLiveOutput>;
  LiveEventInput: LiveEventInput;
  LiveEventKind: ResolverTypeWrapper<LiveEventKind>;
  LiveEventPasswordCheck: ResolverTypeWrapper<LiveEventPasswordCheck>;
  LiveEventPasswordCheckInput: LiveEventPasswordCheckInput;
  LiveEventSlugExists: ResolverTypeWrapper<LiveEventSlugExists>;
  LiveEventStopLiveOutput: ResolverTypeWrapper<LiveEventStopLiveOutput>;
  LiveEventType: LiveEventType;
  LocaleBody: LocaleBody;
  LocaleTypes: LocaleTypes;
  Me: ResolverTypeWrapper<Me>;
  Media: ResolverTypeWrapper<Media>;
  MediaAudio: ResolverTypeWrapper<MediaAudio>;
  MediaCustomizationOutput: ResolverTypeWrapper<MediaCustomizationOutput>;
  MediaFromLiveResult: ResolverTypeWrapper<MediaFromLiveResult>;
  MediaLocale: MediaLocale;
  MediaOrientation: MediaOrientation;
  MediaPhoto: ResolverTypeWrapper<MediaPhoto>;
  MediaRouteContent: ResolverTypeWrapper<MediaRouteContent>;
  MediaRouteUnion: ResolversTypes['MediaAudio'] | ResolversTypes['MediaPhoto'] | ResolversTypes['MediaRouteContent'] | ResolversTypes['MediaVideo'];
  MediaStatusEnum: MediaStatusEnum;
  MediaSubtitle: ResolverTypeWrapper<MediaSubtitle>;
  MediaTypeEnum: MediaTypeEnum;
  MediaUnion: ResolversTypes['MediaAudio'] | ResolversTypes['MediaPhoto'] | ResolversTypes['MediaSubtitle'] | ResolversTypes['MediaVideo'];
  MediaVideo: ResolverTypeWrapper<MediaVideo>;
  Menu: ResolverTypeWrapper<Menu>;
  MenuFilter: MenuFilter;
  MenuSortingOutput: ResolverTypeWrapper<MenuSortingOutput>;
  Mutation: ResolverTypeWrapper<{}>;
  MyProducts: ResolverTypeWrapper<MyProducts>;
  NotificationOutput: ResolverTypeWrapper<NotificationOutput>;
  OneSignalLanguage: OneSignalLanguage;
  OneSignalStatusEnum: OneSignalStatusEnum;
  Order: ResolverTypeWrapper<Order>;
  OrderStatus: OrderStatus;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationFindAllFilter: OrganizationFindAllFilter;
  OrganizationKind: ResolverTypeWrapper<OrganizationKind>;
  OrganizationOneSignalOutput: ResolverTypeWrapper<OrganizationOneSignalOutput>;
  OrganizationPasswordCheck: ResolverTypeWrapper<OrganizationPasswordCheck>;
  OrganizationPublic: ResolverTypeWrapper<OrganizationPublic>;
  OrganizationPublicCustomization: ResolverTypeWrapper<OrganizationPublicCustomization>;
  OrganizationPublicOutput: ResolverTypeWrapper<OrganizationPublicOutput>;
  OrganizationPublicSettings: ResolverTypeWrapper<OrganizationPublicSettings>;
  OrganizationSettings: ResolverTypeWrapper<OrganizationSettings>;
  OrganizationSortArs: OrganizationSortArs;
  OrganizationSortFields: OrganizationSortFields;
  PaginatedAccountsOutput: ResolverTypeWrapper<PaginatedAccountsOutput>;
  PaginatedBillboardsOutput: ResolverTypeWrapper<PaginatedBillboardsOutput>;
  PaginatedCategoriesOutput: ResolverTypeWrapper<PaginatedCategoriesOutput>;
  PaginatedCommentsOutput: ResolverTypeWrapper<PaginatedCommentsOutput>;
  PaginatedLiveEventsOutput: ResolverTypeWrapper<PaginatedLiveEventsOutput>;
  PaginatedMediaUnion: ResolverTypeWrapper<Omit<PaginatedMediaUnion, 'rows'> & { rows: Array<ResolversTypes['MediaUnion']> }>;
  PaginatedMenusOutput: ResolverTypeWrapper<PaginatedMenusOutput>;
  PaginatedNotificationOutput: ResolverTypeWrapper<PaginatedNotificationOutput>;
  PaginatedPostsOutput: ResolverTypeWrapper<PaginatedPostsOutput>;
  PaginatedReportsOutput: ResolverTypeWrapper<PaginatedReportsOutput>;
  PaginatedRolesOutput: ResolverTypeWrapper<PaginatedRolesOutput>;
  PaginatedSearchResultOutput: ResolverTypeWrapper<Omit<PaginatedSearchResultOutput, 'rows'> & { rows: Array<ResolversTypes['SearchResult']> }>;
  PaginationArgs: PaginationArgs;
  Parameters: ResolverTypeWrapper<Parameters>;
  PasswordChanged: ResolverTypeWrapper<PasswordChanged>;
  PasswordOnlyChanged: ResolverTypeWrapper<PasswordOnlyChanged>;
  PaymentMethods: PaymentMethods;
  PermissionDto: ResolverTypeWrapper<PermissionDto>;
  PermissionsSortBy: PermissionsSortBy;
  PermissionsSortFields: PermissionsSortFields;
  PhotoInput: PhotoInput;
  PinnedChannelOutput: ResolverTypeWrapper<PinnedChannelOutput>;
  PlatformExclusive: PlatformExclusive;
  PlaylistOutput: ResolverTypeWrapper<PlaylistOutput>;
  PlaylistsOutput: ResolverTypeWrapper<PlaylistsOutput>;
  Post: ResolverTypeWrapper<Omit<Post, 'media'> & { media?: Maybe<ResolversTypes['MediaUnion']> }>;
  PostAccess: PostAccess;
  PostFilter: PostFilter;
  PostKind: ResolverTypeWrapper<PostKind>;
  PostPasswordCheck: ResolverTypeWrapper<PostPasswordCheck>;
  PostPasswordCheckInput: PostPasswordCheckInput;
  PostReactions: ResolverTypeWrapper<PostReactions>;
  PostSlugExists: ResolverTypeWrapper<PostSlugExists>;
  PostStatus: PostStatus;
  PostType: PostType;
  PriceTierOutput: ResolverTypeWrapper<PriceTierOutput>;
  PricingModelOutput: ResolverTypeWrapper<PricingModelOutput>;
  ProductOutput: ResolverTypeWrapper<ProductOutput>;
  ProductPriceOutput: ResolverTypeWrapper<ProductPriceOutput>;
  ProductPriceTierInput: ProductPriceTierInput;
  ProductPricesOutput: ResolverTypeWrapper<ProductPricesOutput>;
  Profile: ResolverTypeWrapper<Profile>;
  ProfileAvatar: ResolverTypeWrapper<ProfileAvatar>;
  PublicChannelOutput: ResolverTypeWrapper<PublicChannelOutput>;
  PublishRemoteConfig: ResolverTypeWrapper<PublishRemoteConfig>;
  PushNotification: PushNotification;
  PushNotificationInput: PushNotificationInput;
  PushNotificationOutput: ResolverTypeWrapper<PushNotificationOutput>;
  PushNotificationResult: ResolverTypeWrapper<PushNotificationResult>;
  Query: ResolverTypeWrapper<{}>;
  Reaction: Reaction;
  ReactionsAggregate: ResolverTypeWrapper<ReactionsAggregate>;
  RecurringMeteredUsagesOutput: ResolverTypeWrapper<RecurringMeteredUsagesOutput>;
  RecurringUsageTypesOutput: ResolverTypeWrapper<RecurringUsageTypesOutput>;
  RefreshSignIn: ResolverTypeWrapper<RefreshSignIn>;
  RefreshToken: ResolverTypeWrapper<RefreshToken>;
  RefreshTokenInput: RefreshTokenInput;
  RemoteConfig: RemoteConfig;
  RemoveReaction: RemoveReaction;
  Report: ResolverTypeWrapper<Omit<Report, 'reportedObject'> & { reportedObject?: Maybe<ResolversTypes['ReportSubjectUnion']> }>;
  ReportStatus: ReportStatus;
  ReportSubjectUnion: ResolversTypes['Comment'] | ResolversTypes['Post'] | ResolversTypes['ReportedAccountOutput'];
  ReportType: ReportType;
  ReportedAccountOutput: ResolverTypeWrapper<ReportedAccountOutput>;
  ResendActivateAccount: ResendActivateAccount;
  ResponseAccountsCount: ResolverTypeWrapper<ResponseAccountsCount>;
  ResponseAvailabilityOutput: ResolverTypeWrapper<ResponseAvailabilityOutput>;
  ResponseCustomFieldsOutput: ResolverTypeWrapper<ResponseCustomFieldsOutput>;
  ResponseEmailSendedDTO: ResolverTypeWrapper<ResponseEmailSendedDto>;
  ResponseFieldOutput: ResolverTypeWrapper<ResponseFieldOutput>;
  ResponseMediaUploadOutput: ResolverTypeWrapper<ResponseMediaUploadOutput>;
  ResponseUploadCreation: ResolverTypeWrapper<ResponseUploadCreation>;
  ResponseUploadOutput: ResolverTypeWrapper<ResponseUploadOutput>;
  RolesDto: ResolverTypeWrapper<RolesDto>;
  RolesMembersOutput: ResolverTypeWrapper<RolesMembersOutput>;
  SearchCategory: ResolverTypeWrapper<SearchCategory>;
  SearchCategoryHead: ResolverTypeWrapper<SearchCategoryHead>;
  SearchFilter: SearchFilter;
  SearchFilterOperator: SearchFilterOperator;
  SearchLiveEvent: ResolverTypeWrapper<SearchLiveEvent>;
  SearchPost: ResolverTypeWrapper<Omit<SearchPost, 'media'> & { media?: Maybe<ResolversTypes['MediaUnion']> }>;
  SearchResult: ResolversTypes['SearchCategory'] | ResolversTypes['SearchLiveEvent'] | ResolversTypes['SearchPost'];
  SearchResultEnum: SearchResultEnum;
  SearchTag: ResolverTypeWrapper<SearchTag>;
  SearchUpdateChannel: ResolverTypeWrapper<SearchUpdateChannel>;
  SendEmailDTO: SendEmailDto;
  SignInInput: SignInInput;
  SingIn: ResolverTypeWrapper<SingIn>;
  SortDirection: SortDirection;
  StartMediaUploadInput: StartMediaUploadInput;
  Status: Status;
  StatusFilter: StatusFilter;
  String: ResolverTypeWrapper<Scalars['String']>;
  SubjectDto: ResolverTypeWrapper<SubjectDto>;
  SubjectsSortBy: SubjectsSortBy;
  SubjectsSortFields: SubjectsSortFields;
  TagOutput: ResolverTypeWrapper<TagOutput>;
  TagsOutput: ResolverTypeWrapper<TagsOutput>;
  UncancelSubscription: UncancelSubscription;
  UpdateAccountGdprLgpdInput: UpdateAccountGdprLgpdInput;
  UpdateAccountInput: UpdateAccountInput;
  UpdateAccountIsAdminInput: UpdateAccountIsAdminInput;
  UpdateAccountPinnedCategory: UpdateAccountPinnedCategory;
  UpdateAccountPinnedPost: UpdateAccountPinnedPost;
  UpdateAccountSessionInput: UpdateAccountSessionInput;
  UpdateAudioPost: UpdateAudioPost;
  UpdateBillboardInput: UpdateBillboardInput;
  UpdateCategoriesSorting: UpdateCategoriesSorting;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateCategorySortingItem: UpdateCategorySortingItem;
  UpdateChannelInput: UpdateChannelInput;
  UpdateComment: UpdateComment;
  UpdateCreditCardPaymentMethod: UpdateCreditCardPaymentMethod;
  UpdateCustomFieldInput: UpdateCustomFieldInput;
  UpdateEmailTemplateDTO: UpdateEmailTemplateDto;
  UpdateEmbed: UpdateEmbed;
  UpdateEnvConfigInput: UpdateEnvConfigInput;
  UpdateGroupDto: UpdateGroupDto;
  UpdateLiveEventInput: UpdateLiveEventInput;
  UpdateMediaAudio: UpdateMediaAudio;
  UpdateMediaPhoto: UpdateMediaPhoto;
  UpdateMediaSubtitlesInput: UpdateMediaSubtitlesInput;
  UpdateMediaVideo: UpdateMediaVideo;
  UpdateMenu: UpdateMenu;
  UpdateMenuSortingItem: UpdateMenuSortingItem;
  UpdateMenusSorting: UpdateMenusSorting;
  UpdateMyAccountInput: UpdateMyAccountInput;
  UpdateOrder: UpdateOrder;
  UpdateOrderCustomFields: UpdateOrderCustomFields;
  UpdateOrganizationInput: UpdateOrganizationInput;
  UpdatePassword: UpdatePassword;
  UpdatePasswordOnlyInput: UpdatePasswordOnlyInput;
  UpdatePermissionInput: UpdatePermissionInput;
  UpdatePhotoPost: UpdatePhotoPost;
  UpdatePlaylistInput: UpdatePlaylistInput;
  UpdateProductInput: UpdateProductInput;
  UpdateProductPriceInput: UpdateProductPriceInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateReport: UpdateReport;
  UpdateRoleInput: UpdateRoleInput;
  UpdateSubjectInput: UpdateSubjectInput;
  UpdateTagInput: UpdateTagInput;
  UpdateTextPost: UpdateTextPost;
  UpdateUploadInput: UpdateUploadInput;
  UpdateVideoPost: UpdateVideoPost;
  UploadStatusEnum: UploadStatusEnum;
  VerifyEmailDTO: VerifyEmailDto;
  VerifyMail: ResolverTypeWrapper<VerifyMail>;
  VideoInput: VideoInput;
  VoidScalar: ResolverTypeWrapper<Scalars['VoidScalar']>;
  filterRange: FilterRange;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccessToken: AccessToken;
  Account: Account;
  AccountActivated: AccountActivated;
  AccountGdprLgpd: AccountGdprLgpd;
  AccountPinnedCategory: AccountPinnedCategory;
  AccountPinnedChannel: AccountPinnedChannel;
  AccountPinnedPost: AccountPinnedPost;
  AccountSession: AccountSession;
  AccountStatus: AccountStatus;
  ActivateAccount: ActivateAccount;
  AddComment: AddComment;
  AddCommentVote: AddCommentVote;
  AddOrder: AddOrder;
  AddOrderCustomFields: AddOrderCustomFields;
  AddOverrideOrder: AddOverrideOrder;
  AddPendingOrder: AddPendingOrder;
  AddReaction: AddReaction;
  AddReport: AddReport;
  AddedCommentVote: AddedCommentVote;
  AudioInput: AudioInput;
  AvailableChannel: AvailableChannel;
  BanAccountTemporary: BanAccountTemporary;
  Billboard: Billboard;
  BillboardActionInput: BillboardActionInput;
  BillboardActionsOutput: Omit<BillboardActionsOutput, 'route'> & { route?: Maybe<ResolversParentTypes['MediaRouteUnion']> };
  BillboardCustomizationInput: BillboardCustomizationInput;
  BillboardCustomizationOutput: BillboardCustomizationOutput;
  BillingAddressInput: BillingAddressInput;
  BillingPeriodsOutput: BillingPeriodsOutput;
  BillingTypesOutput: BillingTypesOutput;
  Boolean: Scalars['Boolean'];
  CancelNotificationInput: CancelNotificationInput;
  CancelNotificationOutput: CancelNotificationOutput;
  CancelSubscription: CancelSubscription;
  Category: Category;
  CategoryCustomization: CategoryCustomization;
  CategoryCustomizationInput: CategoryCustomizationInput;
  CategoryFilter: CategoryFilter;
  CategoryInput: CategoryInput;
  CategoryKind: CategoryKind;
  CategoryPasswordCheck: CategoryPasswordCheck;
  CategoryPasswordCheckInput: CategoryPasswordCheckInput;
  CategorySlugExists: CategorySlugExists;
  CategorySortingOutput: CategorySortingOutput;
  Channel: ResolversParentTypes['AvailableChannel'] | ResolversParentTypes['GeolockedChannel'];
  ChannelCustomizationInput: ChannelCustomizationInput;
  ChannelCustomizationLightDarkInput: ChannelCustomizationLightDarkInput;
  ChannelCustomizationLightDarkOutput: ChannelCustomizationLightDarkOutput;
  ChannelCustomizationOutput: ChannelCustomizationOutput;
  ChannelFindAllFilter: ChannelFindAllFilter;
  ChannelKind: ChannelKind;
  ChannelPasswordCheck: ChannelPasswordCheck;
  ChildrenCategoryFilter: ChildrenCategoryFilter;
  Comment: Comment;
  CommentAuthor: CommentAuthor;
  CommentFilter: CommentFilter;
  CommentVote: CommentVote;
  CommentVoteStats: CommentVoteStats;
  ConfirmOrder: ConfirmOrder;
  CreateAccountGdprLgpdInput: CreateAccountGdprLgpdInput;
  CreateAccountInput: CreateAccountInput;
  CreateAccountPinnedPost: CreateAccountPinnedPost;
  CreateAccountPinnnedCategory: CreateAccountPinnnedCategory;
  CreateAccountSessionInput: CreateAccountSessionInput;
  CreateAccountSocialSignInDto: CreateAccountSocialSignInDto;
  CreateAudioPost: CreateAudioPost;
  CreateBillboardInput: CreateBillboardInput;
  CreateChannelInput: CreateChannelInput;
  CreateCustomFieldInput: CreateCustomFieldInput;
  CreateEmailTemplateDTO: CreateEmailTemplateDto;
  CreateEnvConfigInput: CreateEnvConfigInput;
  CreateGroupDto: CreateGroupDto;
  CreateInspireProductInput: CreateInspireProductInput;
  CreateMediaFromLiveInput: CreateMediaFromLiveInput;
  CreateMediaInput: CreateMediaInput;
  CreateMenu: CreateMenu;
  CreateNestedPermissionsInput: CreateNestedPermissionsInput;
  CreateOrganizationInput: CreateOrganizationInput;
  CreatePermissionInput: CreatePermissionInput;
  CreatePhotoPost: CreatePhotoPost;
  CreatePlaylistInput: CreatePlaylistInput;
  CreateProductPriceInput: CreateProductPriceInput;
  CreateRoleInput: CreateRoleInput;
  CreateSubjectInput: CreateSubjectInput;
  CreateTagInput: CreateTagInput;
  CreateTextPost: CreateTextPost;
  CreateUploadInput: CreateUploadInput;
  CreateVideoPost: CreateVideoPost;
  CurrencyOutput: CurrencyOutput;
  CustomFieldInput: CustomFieldInput;
  CustomPushNotificationInput: CustomPushNotificationInput;
  CustomizationMediaOutput: CustomizationMediaOutput;
  DateTime: Scalars['DateTime'];
  DefaultCreditCardPaymentMethod: DefaultCreditCardPaymentMethod;
  EmailResponseEnvelopeDTO: EmailResponseEnvelopeDto;
  EmailSent: EmailSent;
  EmailTemplate: EmailTemplate;
  EmailTemplateLocales: EmailTemplateLocales;
  Embed: Embed;
  EmbedFilterInput: EmbedFilterInput;
  EmbedInput: EmbedInput;
  EncryptedEnvConfig: EncryptedEnvConfig;
  EngagedUser: EngagedUser;
  EntitlementGeofenceInput: EntitlementGeofenceInput;
  EntitlementsGeofenceInput: EntitlementsGeofenceInput;
  EnvConfig: EnvConfig;
  FilterFindAll: FilterFindAll;
  FilterFindAllOrders: FilterFindAllOrders;
  FilterPinnedCategories: FilterPinnedCategories;
  FilterPinnedPosts: FilterPinnedPosts;
  FilterPlaylistsInput: FilterPlaylistsInput;
  FindAllGroupsRequestDto: FindAllGroupsRequestDto;
  FindAllMediasInput: FindAllMediasInput;
  FindAllProductPricesParams: FindAllProductPricesParams;
  FindAllQueryParamsDto: FindAllQueryParamsDto;
  FindAllRolesRequestDto: FindAllRolesRequestDto;
  FindAllSubjectsQueryParamsDto: FindAllSubjectsQueryParamsDto;
  FindBillboardsInput: FindBillboardsInput;
  FindManyTagsInput: FindManyTagsInput;
  FindReportsInput: FindReportsInput;
  Float: Scalars['Float'];
  ForgetAccountInput: ForgetAccountInput;
  ForgotPassword: ForgotPassword;
  GeofenceInput: GeofenceInput;
  GeolockedChannel: GeolockedChannel;
  GroupDto: GroupDto;
  GroupsSortBy: GroupsSortBy;
  HasAccessInput: HasAccessInput;
  HasAccessOutput: HasAccessOutput;
  ID: Scalars['ID'];
  InspireBillingPeriods: InspireBillingPeriods;
  InspireBillingTypes: InspireBillingTypes;
  InspireCurrency: InspireCurrency;
  InspireMetadata: InspireMetadata;
  InspireMetadataInput: InspireMetadataInput;
  InspirePaymentLinkItem: InspirePaymentLinkItem;
  InspireProduct: InspireProduct;
  InspireProductFiltered: InspireProductFiltered;
  InspireProductMetadataInput: InspireProductMetadataInput;
  InspireProductPriceInput: InspireProductPriceInput;
  InspireProductPriceTier: InspireProductPriceTier;
  InspireProductPriceTierInput: InspireProductPriceTierInput;
  InspireProductPrices: InspireProductPrices;
  InspireRecurringUsageTypes: InspireRecurringUsageTypes;
  Int: Scalars['Int'];
  InviteTeamMemberInput: InviteTeamMemberInput;
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  LanguageMessage: LanguageMessage;
  ListNotificationInput: ListNotificationInput;
  LiveEvent: LiveEvent;
  LiveEventConfig: LiveEventConfig;
  LiveEventConfigOutput: LiveEventConfigOutput;
  LiveEventFilter: LiveEventFilter;
  LiveEventGoLiveOutput: LiveEventGoLiveOutput;
  LiveEventInput: LiveEventInput;
  LiveEventKind: LiveEventKind;
  LiveEventPasswordCheck: LiveEventPasswordCheck;
  LiveEventPasswordCheckInput: LiveEventPasswordCheckInput;
  LiveEventSlugExists: LiveEventSlugExists;
  LiveEventStopLiveOutput: LiveEventStopLiveOutput;
  LocaleBody: LocaleBody;
  Me: Me;
  Media: Media;
  MediaAudio: MediaAudio;
  MediaCustomizationOutput: MediaCustomizationOutput;
  MediaFromLiveResult: MediaFromLiveResult;
  MediaPhoto: MediaPhoto;
  MediaRouteContent: MediaRouteContent;
  MediaRouteUnion: ResolversParentTypes['MediaAudio'] | ResolversParentTypes['MediaPhoto'] | ResolversParentTypes['MediaRouteContent'] | ResolversParentTypes['MediaVideo'];
  MediaSubtitle: MediaSubtitle;
  MediaUnion: ResolversParentTypes['MediaAudio'] | ResolversParentTypes['MediaPhoto'] | ResolversParentTypes['MediaSubtitle'] | ResolversParentTypes['MediaVideo'];
  MediaVideo: MediaVideo;
  Menu: Menu;
  MenuFilter: MenuFilter;
  MenuSortingOutput: MenuSortingOutput;
  Mutation: {};
  MyProducts: MyProducts;
  NotificationOutput: NotificationOutput;
  Order: Order;
  Organization: Organization;
  OrganizationFindAllFilter: OrganizationFindAllFilter;
  OrganizationKind: OrganizationKind;
  OrganizationOneSignalOutput: OrganizationOneSignalOutput;
  OrganizationPasswordCheck: OrganizationPasswordCheck;
  OrganizationPublic: OrganizationPublic;
  OrganizationPublicCustomization: OrganizationPublicCustomization;
  OrganizationPublicOutput: OrganizationPublicOutput;
  OrganizationPublicSettings: OrganizationPublicSettings;
  OrganizationSettings: OrganizationSettings;
  OrganizationSortArs: OrganizationSortArs;
  PaginatedAccountsOutput: PaginatedAccountsOutput;
  PaginatedBillboardsOutput: PaginatedBillboardsOutput;
  PaginatedCategoriesOutput: PaginatedCategoriesOutput;
  PaginatedCommentsOutput: PaginatedCommentsOutput;
  PaginatedLiveEventsOutput: PaginatedLiveEventsOutput;
  PaginatedMediaUnion: Omit<PaginatedMediaUnion, 'rows'> & { rows: Array<ResolversParentTypes['MediaUnion']> };
  PaginatedMenusOutput: PaginatedMenusOutput;
  PaginatedNotificationOutput: PaginatedNotificationOutput;
  PaginatedPostsOutput: PaginatedPostsOutput;
  PaginatedReportsOutput: PaginatedReportsOutput;
  PaginatedRolesOutput: PaginatedRolesOutput;
  PaginatedSearchResultOutput: Omit<PaginatedSearchResultOutput, 'rows'> & { rows: Array<ResolversParentTypes['SearchResult']> };
  PaginationArgs: PaginationArgs;
  Parameters: Parameters;
  PasswordChanged: PasswordChanged;
  PasswordOnlyChanged: PasswordOnlyChanged;
  PermissionDto: PermissionDto;
  PermissionsSortBy: PermissionsSortBy;
  PhotoInput: PhotoInput;
  PinnedChannelOutput: PinnedChannelOutput;
  PlaylistOutput: PlaylistOutput;
  PlaylistsOutput: PlaylistsOutput;
  Post: Omit<Post, 'media'> & { media?: Maybe<ResolversParentTypes['MediaUnion']> };
  PostFilter: PostFilter;
  PostKind: PostKind;
  PostPasswordCheck: PostPasswordCheck;
  PostPasswordCheckInput: PostPasswordCheckInput;
  PostReactions: PostReactions;
  PostSlugExists: PostSlugExists;
  PriceTierOutput: PriceTierOutput;
  PricingModelOutput: PricingModelOutput;
  ProductOutput: ProductOutput;
  ProductPriceOutput: ProductPriceOutput;
  ProductPriceTierInput: ProductPriceTierInput;
  ProductPricesOutput: ProductPricesOutput;
  Profile: Profile;
  ProfileAvatar: ProfileAvatar;
  PublicChannelOutput: PublicChannelOutput;
  PublishRemoteConfig: PublishRemoteConfig;
  PushNotification: PushNotification;
  PushNotificationInput: PushNotificationInput;
  PushNotificationOutput: PushNotificationOutput;
  PushNotificationResult: PushNotificationResult;
  Query: {};
  ReactionsAggregate: ReactionsAggregate;
  RecurringMeteredUsagesOutput: RecurringMeteredUsagesOutput;
  RecurringUsageTypesOutput: RecurringUsageTypesOutput;
  RefreshSignIn: RefreshSignIn;
  RefreshToken: RefreshToken;
  RefreshTokenInput: RefreshTokenInput;
  RemoteConfig: RemoteConfig;
  RemoveReaction: RemoveReaction;
  Report: Omit<Report, 'reportedObject'> & { reportedObject?: Maybe<ResolversParentTypes['ReportSubjectUnion']> };
  ReportSubjectUnion: ResolversParentTypes['Comment'] | ResolversParentTypes['Post'] | ResolversParentTypes['ReportedAccountOutput'];
  ReportedAccountOutput: ReportedAccountOutput;
  ResendActivateAccount: ResendActivateAccount;
  ResponseAccountsCount: ResponseAccountsCount;
  ResponseAvailabilityOutput: ResponseAvailabilityOutput;
  ResponseCustomFieldsOutput: ResponseCustomFieldsOutput;
  ResponseEmailSendedDTO: ResponseEmailSendedDto;
  ResponseFieldOutput: ResponseFieldOutput;
  ResponseMediaUploadOutput: ResponseMediaUploadOutput;
  ResponseUploadCreation: ResponseUploadCreation;
  ResponseUploadOutput: ResponseUploadOutput;
  RolesDto: RolesDto;
  RolesMembersOutput: RolesMembersOutput;
  SearchCategory: SearchCategory;
  SearchCategoryHead: SearchCategoryHead;
  SearchFilter: SearchFilter;
  SearchFilterOperator: SearchFilterOperator;
  SearchLiveEvent: SearchLiveEvent;
  SearchPost: Omit<SearchPost, 'media'> & { media?: Maybe<ResolversParentTypes['MediaUnion']> };
  SearchResult: ResolversParentTypes['SearchCategory'] | ResolversParentTypes['SearchLiveEvent'] | ResolversParentTypes['SearchPost'];
  SearchTag: SearchTag;
  SearchUpdateChannel: SearchUpdateChannel;
  SendEmailDTO: SendEmailDto;
  SignInInput: SignInInput;
  SingIn: SingIn;
  StartMediaUploadInput: StartMediaUploadInput;
  StatusFilter: StatusFilter;
  String: Scalars['String'];
  SubjectDto: SubjectDto;
  SubjectsSortBy: SubjectsSortBy;
  TagOutput: TagOutput;
  TagsOutput: TagsOutput;
  UncancelSubscription: UncancelSubscription;
  UpdateAccountGdprLgpdInput: UpdateAccountGdprLgpdInput;
  UpdateAccountInput: UpdateAccountInput;
  UpdateAccountIsAdminInput: UpdateAccountIsAdminInput;
  UpdateAccountPinnedCategory: UpdateAccountPinnedCategory;
  UpdateAccountPinnedPost: UpdateAccountPinnedPost;
  UpdateAccountSessionInput: UpdateAccountSessionInput;
  UpdateAudioPost: UpdateAudioPost;
  UpdateBillboardInput: UpdateBillboardInput;
  UpdateCategoriesSorting: UpdateCategoriesSorting;
  UpdateCategoryInput: UpdateCategoryInput;
  UpdateCategorySortingItem: UpdateCategorySortingItem;
  UpdateChannelInput: UpdateChannelInput;
  UpdateComment: UpdateComment;
  UpdateCreditCardPaymentMethod: UpdateCreditCardPaymentMethod;
  UpdateCustomFieldInput: UpdateCustomFieldInput;
  UpdateEmailTemplateDTO: UpdateEmailTemplateDto;
  UpdateEmbed: UpdateEmbed;
  UpdateEnvConfigInput: UpdateEnvConfigInput;
  UpdateGroupDto: UpdateGroupDto;
  UpdateLiveEventInput: UpdateLiveEventInput;
  UpdateMediaAudio: UpdateMediaAudio;
  UpdateMediaPhoto: UpdateMediaPhoto;
  UpdateMediaSubtitlesInput: UpdateMediaSubtitlesInput;
  UpdateMediaVideo: UpdateMediaVideo;
  UpdateMenu: UpdateMenu;
  UpdateMenuSortingItem: UpdateMenuSortingItem;
  UpdateMenusSorting: UpdateMenusSorting;
  UpdateMyAccountInput: UpdateMyAccountInput;
  UpdateOrder: UpdateOrder;
  UpdateOrderCustomFields: UpdateOrderCustomFields;
  UpdateOrganizationInput: UpdateOrganizationInput;
  UpdatePassword: UpdatePassword;
  UpdatePasswordOnlyInput: UpdatePasswordOnlyInput;
  UpdatePermissionInput: UpdatePermissionInput;
  UpdatePhotoPost: UpdatePhotoPost;
  UpdatePlaylistInput: UpdatePlaylistInput;
  UpdateProductInput: UpdateProductInput;
  UpdateProductPriceInput: UpdateProductPriceInput;
  UpdateProfileInput: UpdateProfileInput;
  UpdateReport: UpdateReport;
  UpdateRoleInput: UpdateRoleInput;
  UpdateSubjectInput: UpdateSubjectInput;
  UpdateTagInput: UpdateTagInput;
  UpdateTextPost: UpdateTextPost;
  UpdateUploadInput: UpdateUploadInput;
  UpdateVideoPost: UpdateVideoPost;
  VerifyEmailDTO: VerifyEmailDto;
  VerifyMail: VerifyMail;
  VideoInput: VideoInput;
  VoidScalar: Scalars['VoidScalar'];
  filterRange: FilterRange;
};

export type AccessTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessToken'] = ResolversParentTypes['AccessToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_admin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_super_user?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  is_tenant_user?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizations?: Resolver<Maybe<Array<ResolversTypes['OrganizationPublicOutput']>>, ParentType, ContextType>;
  profile?: Resolver<Maybe<ResolversTypes['Profile']>, ParentType, ContextType>;
  roles?: Resolver<Maybe<Array<ResolversTypes['RolesDto']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['AccountStatus']>, ParentType, ContextType>;
  tenant_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountActivatedResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountActivated'] = ResolversParentTypes['AccountActivated']> = {
  activated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  activationCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountGdprLgpdResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountGdprLgpd'] = ResolversParentTypes['AccountGdprLgpd']> = {
  accepted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  accepted_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ip?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPinnedCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPinnedCategory'] = ResolversParentTypes['AccountPinnedCategory']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pinnedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPinnedChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPinnedChannel'] = ResolversParentTypes['AccountPinnedChannel']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['PinnedChannelOutput'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pinnedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountPinnedPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountPinnedPost'] = ResolversParentTypes['AccountPinnedPost']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pinned?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pinnedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountSessionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountSession'] = ResolversParentTypes['AccountSession']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  expires_in?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountStatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountStatus'] = ResolversParentTypes['AccountStatus']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  block_perm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  block_temp?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  gdpr?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pending_activation?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddedCommentVoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddedCommentVote'] = ResolversParentTypes['AddedCommentVote']> = {
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType>;
  commentVote?: Resolver<ResolversTypes['CommentVote'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvailableChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvailableChannel'] = ResolversParentTypes['AvailableChannel']> = {
  access?: Resolver<ResolversTypes['AccessKinds'], ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['ChannelCustomizationOutput']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  menu?: Resolver<Maybe<ResolversTypes['Menu']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillboardResolvers<ContextType = any, ParentType extends ResolversParentTypes['Billboard'] = ResolversParentTypes['Billboard']> = {
  actions?: Resolver<Array<ResolversTypes['BillboardActionsOutput']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customization?: Resolver<ResolversTypes['BillboardCustomizationOutput'], ParentType, ContextType>;
  delay?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  target?: Resolver<Maybe<ResolversTypes['BillboardTarget']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillboardActionsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillboardActionsOutput'] = ResolversParentTypes['BillboardActionsOutput']> = {
  bgColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  borderColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['MediaRouteUnion']>, ParentType, ContextType>;
  textColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillboardCustomizationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillboardCustomizationOutput'] = ResolversParentTypes['BillboardCustomizationOutput']> = {
  desktop?: Resolver<Maybe<ResolversTypes['MediaCustomizationOutput']>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes['MediaCustomizationOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingPeriodsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingPeriodsOutput'] = ResolversParentTypes['BillingPeriodsOutput']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillingTypesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillingTypesOutput'] = ResolversParentTypes['BillingTypesOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CancelNotificationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CancelNotificationOutput'] = ResolversParentTypes['CancelNotificationOutput']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  access?: Resolver<Maybe<ResolversTypes['AccessKinds']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType, Partial<CategoryChildrenArgs>>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['CategoryCustomization']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entitlements?: Resolver<Array<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  featuredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  geoFence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isChild?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isParent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['Kinds'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinnedStatus?: Resolver<Maybe<ResolversTypes['AccountPinnedCategory']>, ParentType, ContextType>;
  posts?: Resolver<ResolversTypes['PaginatedPostsOutput'], ParentType, ContextType, Partial<CategoryPostsArgs>>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['TagOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryCustomizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryCustomization'] = ResolversParentTypes['CategoryCustomization']> = {
  desktop?: Resolver<Maybe<ResolversTypes['MediaCustomizationOutput']>, ParentType, ContextType>;
  mobile?: Resolver<Maybe<ResolversTypes['MediaCustomizationOutput']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaCustomizationOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryKindResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryKind'] = ResolversParentTypes['CategoryKind']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
  geoFence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['Kinds'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryPasswordCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategoryPasswordCheck'] = ResolversParentTypes['CategoryPasswordCheck']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategorySlugExistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategorySlugExists'] = ResolversParentTypes['CategorySlugExists']> = {
  exists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategorySortingOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CategorySortingOutput'] = ResolversParentTypes['CategorySortingOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = {
  __resolveType: TypeResolveFn<'AvailableChannel' | 'GeolockedChannel', ParentType, ContextType>;
};

export type ChannelCustomizationLightDarkOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelCustomizationLightDarkOutput'] = ResolversParentTypes['ChannelCustomizationLightDarkOutput']> = {
  dark?: Resolver<Maybe<ResolversTypes['CustomizationMediaOutput']>, ParentType, ContextType>;
  light?: Resolver<Maybe<ResolversTypes['CustomizationMediaOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelCustomizationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelCustomizationOutput'] = ResolversParentTypes['ChannelCustomizationOutput']> = {
  icon?: Resolver<Maybe<ResolversTypes['ChannelCustomizationLightDarkOutput']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['ChannelCustomizationLightDarkOutput']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['CustomizationMediaOutput']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelKindResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelKind'] = ResolversParentTypes['ChannelKind']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['ChannelCustomizationOutput']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChannelPasswordCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['ChannelPasswordCheck'] = ResolversParentTypes['ChannelPasswordCheck']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['CommentAuthor']>, ParentType, ContextType>;
  commentVoteStats?: Resolver<ResolversTypes['CommentVoteStats'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  myVote?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentAuthor'] = ResolversParentTypes['CommentAuthor']> = {
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentVoteResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentVote'] = ResolversParentTypes['CommentVote']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  countDownvotes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  countUpvotes?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  direction?: Resolver<ResolversTypes['CommentVoteDirectionEnum'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentVoteStatsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommentVoteStats'] = ResolversParentTypes['CommentVoteStats']> = {
  countDownvotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countUpvotes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrencyOutput'] = ResolversParentTypes['CurrencyOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isoCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CustomizationMediaOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomizationMediaOutput'] = ResolversParentTypes['CustomizationMediaOutput']> = {
  account?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imgPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DefaultCreditCardPaymentMethodResolvers<ContextType = any, ParentType extends ResolversParentTypes['DefaultCreditCardPaymentMethod'] = ResolversParentTypes['DefaultCreditCardPaymentMethod']> = {
  payment?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailResponseEnvelopeDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailResponseEnvelopeDTO'] = ResolversParentTypes['EmailResponseEnvelopeDTO']> = {
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailSentResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailSent'] = ResolversParentTypes['EmailSent']> = {
  sent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplate'] = ResolversParentTypes['EmailTemplate']> = {
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  deleted_at?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  template?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  templates?: Resolver<Maybe<Array<ResolversTypes['EmailTemplateLocales']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailTemplateLocalesResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailTemplateLocales'] = ResolversParentTypes['EmailTemplateLocales']> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<ResolversTypes['LocaleTypes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmbedResolvers<ContextType = any, ParentType extends ResolversParentTypes['Embed'] = ResolversParentTypes['Embed']> = {
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customization?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uploadedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EncryptedEnvConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['EncryptedEnvConfig'] = ResolversParentTypes['EncryptedEnvConfig']> = {
  result?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EngagedUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['EngagedUser'] = ResolversParentTypes['EngagedUser']> = {
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tenant?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EnvConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['EnvConfig'] = ResolversParentTypes['EnvConfig']> = {
  analyticsAPI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  apiEndpoint?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facebookTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firebaseApiKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseAppId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseAuthApiKey?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseAuthDomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseBucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseDatabaseUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseDomain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseMeasurementId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseProject?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firebaseSender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  googleTag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inspireAuthUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspirePassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspirePaymentUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspireTenantId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspireUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  inspireUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  muxKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onesignalAppId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onesignalSafariWebId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  remoteConfigSecret?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  s3SignedUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uploadAwsKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoAnalyticsPassword?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoAnalyticsUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videoAnalyticsUsername?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeolockedChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['GeolockedChannel'] = ResolversParentTypes['GeolockedChannel']> = {
  access?: Resolver<ResolversTypes['AccessKinds'], ParentType, ContextType>;
  banner?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['ChannelCustomizationOutput']>, ParentType, ContextType>;
  deleted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  menu?: Resolver<Maybe<ResolversTypes['Menu']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupDto'] = ResolversParentTypes['GroupDto']> = {
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  public?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['RolesDto']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HasAccessOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['HasAccessOutput'] = ResolversParentTypes['HasAccessOutput']> = {
  have?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireBillingPeriodsResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireBillingPeriods'] = ResolversParentTypes['InspireBillingPeriods']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireBillingTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireBillingTypes'] = ResolversParentTypes['InspireBillingTypes']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireCurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireCurrency'] = ResolversParentTypes['InspireCurrency']> = {
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireMetadata'] = ResolversParentTypes['InspireMetadata']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspirePaymentLinkItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspirePaymentLinkItem'] = ResolversParentTypes['InspirePaymentLinkItem']> = {
  billingPeriods?: Resolver<Maybe<ResolversTypes['InspireBillingPeriods']>, ParentType, ContextType>;
  billingTypes?: Resolver<Maybe<ResolversTypes['InspireBillingTypes']>, ParentType, ContextType>;
  canAdjustQuantity?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['InspireCurrency']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  internalDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentLinkId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productPriceId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireProduct'] = ResolversParentTypes['InspireProduct']> = {
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<Array<ResolversTypes['InspireMetadata']>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productPrices?: Resolver<Maybe<Array<ResolversTypes['InspireProductPrices']>>, ParentType, ContextType>;
  setupFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  statementDescriptor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitLabel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireProductFilteredResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireProductFiltered'] = ResolversParentTypes['InspireProductFiltered']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productPrices?: Resolver<Array<ResolversTypes['InspireProductPrices']>, ParentType, ContextType>;
  setupFee?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  startingPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireProductPriceTierResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireProductPriceTier'] = ResolversParentTypes['InspireProductPriceTier']> = {
  flatPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productPricesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  upTo?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireProductPricesResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireProductPrices'] = ResolversParentTypes['InspireProductPrices']> = {
  billingPeriodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingPeriods?: Resolver<Maybe<ResolversTypes['InspireBillingPeriods']>, ParentType, ContextType>;
  billingTypes?: Resolver<Maybe<ResolversTypes['InspireBillingTypes']>, ParentType, ContextType>;
  billingTypesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['InspireCurrency']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customIntervalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  installments?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  internalDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isIncludingCountries?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  neverUsedSubscription?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  numberActiveSubscriptions?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  onlyProductPrice?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  packageUnits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  paymentLinkItems?: Resolver<Maybe<Array<ResolversTypes['InspirePaymentLinkItem']>>, ParentType, ContextType>;
  pricingModelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productPriceTiers?: Resolver<Maybe<Array<ResolversTypes['InspireProductPriceTier']>>, ParentType, ContextType>;
  productsId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurringMeteredUsageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurringTrialPeriodDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurringUsageTypes?: Resolver<Maybe<ResolversTypes['InspireRecurringUsageTypes']>, ParentType, ContextType>;
  recurringUsageTypesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InspireRecurringUsageTypesResolvers<ContextType = any, ParentType extends ResolversParentTypes['InspireRecurringUsageTypes'] = ResolversParentTypes['InspireRecurringUsageTypes']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type LiveEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEvent'] = ResolversParentTypes['LiveEvent']> = {
  access?: Resolver<Maybe<ResolversTypes['AccessKinds']>, ParentType, ContextType>;
  backupPublishEndpoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  backupStreamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  commentsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['LiveEventConfigOutput']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  encodingProfile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entitlements?: Resolver<Array<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  geoFence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  hlsPlaybackUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isDeleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['Kinds'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaVideo']>, ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  orientation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  presenceEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  primaryPublishEndpoint?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  primaryStreamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pushNotification?: Resolver<Maybe<ResolversTypes['PushNotificationOutput']>, ParentType, ContextType>;
  reactionsEnabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  scheduledStartAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  streamName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['TagOutput']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaPhoto']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LiveEventType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventConfigOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventConfigOutput'] = ResolversParentTypes['LiveEventConfigOutput']> = {
  drm?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  dvr?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  introVideo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loop?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  primarySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redundancy?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secondarySource?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamInput?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streamProfile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventGoLiveOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventGoLiveOutput'] = ResolversParentTypes['LiveEventGoLiveOutput']> = {
  live?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  liveAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventKindResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventKind'] = ResolversParentTypes['LiveEventKind']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
  geoFence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['Kinds'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventPasswordCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventPasswordCheck'] = ResolversParentTypes['LiveEventPasswordCheck']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventSlugExistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventSlugExists'] = ResolversParentTypes['LiveEventSlugExists']> = {
  exists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LiveEventStopLiveOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['LiveEventStopLiveOutput'] = ResolversParentTypes['LiveEventStopLiveOutput']> = {
  live?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Me'] = ResolversParentTypes['Me']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['OrganizationPublicOutput'], ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaResolvers<ContextType = any, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = {
  account?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dashPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hlsPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mp4Path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orientation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MediaStatusEnum'], ParentType, ContextType>;
  thumbnailPath?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MediaTypeEnum'], ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaAudioResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaAudio'] = ResolversParentTypes['MediaAudio']> = {
  account?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mp3Path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatusEnum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaTypeEnum']>, ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaCustomizationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaCustomizationOutput'] = ResolversParentTypes['MediaCustomizationOutput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imgPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaFromLiveResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaFromLiveResult'] = ResolversParentTypes['MediaFromLiveResult']> = {
  channelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  liveId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orgId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaPhotoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaPhoto'] = ResolversParentTypes['MediaPhoto']> = {
  account?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imgPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orientation?: Resolver<Maybe<ResolversTypes['MediaOrientation']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatusEnum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaTypeEnum']>, ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaRouteContentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRouteContent'] = ResolversParentTypes['MediaRouteContent']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contentWeb?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaRouteUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaRouteUnion'] = ResolversParentTypes['MediaRouteUnion']> = {
  __resolveType: TypeResolveFn<'MediaAudio' | 'MediaPhoto' | 'MediaRouteContent' | 'MediaVideo', ParentType, ContextType>;
};

export type MediaSubtitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaSubtitle'] = ResolversParentTypes['MediaSubtitle']> = {
  account?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatusEnum']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaTypeEnum']>, ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  vttPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MediaUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaUnion'] = ResolversParentTypes['MediaUnion']> = {
  __resolveType: TypeResolveFn<'MediaAudio' | 'MediaPhoto' | 'MediaSubtitle' | 'MediaVideo', ParentType, ContextType>;
};

export type MediaVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['MediaVideo'] = ResolversParentTypes['MediaVideo']> = {
  account?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  aspectRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dashPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  filename?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  hlsPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAvatar?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mp4Path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orientation?: Resolver<Maybe<ResolversTypes['MediaOrientation']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['MediaStatusEnum']>, ParentType, ContextType>;
  subtitles?: Resolver<Maybe<Array<ResolversTypes['MediaSubtitle']>>, ParentType, ContextType>;
  thumbnailPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  transcodePercentComplete?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MediaTypeEnum']>, ParentType, ContextType>;
  upload?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuResolvers<ContextType = any, ParentType extends ResolversParentTypes['Menu'] = ResolversParentTypes['Menu']> = {
  channel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  children?: Resolver<Array<ResolversTypes['Menu']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isChild?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  parameters?: Resolver<Maybe<ResolversTypes['Parameters']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['Menu']>, ParentType, ContextType>;
  platformExclusive?: Resolver<Maybe<ResolversTypes['PlatformExclusive']>, ParentType, ContextType>;
  route?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sort?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MenuSortingOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['MenuSortingOutput'] = ResolversParentTypes['MenuSortingOutput']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  activateAccount?: Resolver<ResolversTypes['AccountActivated'], ParentType, ContextType, RequireFields<MutationActivateAccountArgs, 'payload'>>;
  activeAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationActiveAccountArgs, 'account'>>;
  addComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationAddCommentArgs, 'payload'>>;
  addOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationAddOrderArgs, 'payload'>>;
  addPendingOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationAddPendingOrderArgs, 'payload'>>;
  addReaction?: Resolver<Array<ResolversTypes['ReactionsAggregate']>, ParentType, ContextType, RequireFields<MutationAddReactionArgs, 'input'>>;
  addReport?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<MutationAddReportArgs, 'payload'>>;
  addView?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationAddViewArgs, 'postId'>>;
  addVote?: Resolver<ResolversTypes['AddedCommentVote'], ParentType, ContextType, RequireFields<MutationAddVoteArgs, 'input'>>;
  atomicUpdateCategorySorting?: Resolver<ResolversTypes['CategorySortingOutput'], ParentType, ContextType, RequireFields<MutationAtomicUpdateCategorySortingArgs, 'payload'>>;
  atomicUpdateMenuSorting?: Resolver<ResolversTypes['MenuSortingOutput'], ParentType, ContextType, RequireFields<MutationAtomicUpdateMenuSortingArgs, 'payload'>>;
  avatarUpload?: Resolver<ResolversTypes['ResponseUploadCreation'], ParentType, ContextType, RequireFields<MutationAvatarUploadArgs, 'payload'>>;
  banAccountPerm?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationBanAccountPermArgs, 'account'>>;
  banAccountTemp?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationBanAccountTempArgs, 'account' | 'input'>>;
  bindChannelAndOrganization?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationBindChannelAndOrganizationArgs, 'accountId' | 'channelId' | 'organizationId'>>;
  cancelNotification?: Resolver<ResolversTypes['CancelNotificationOutput'], ParentType, ContextType, RequireFields<MutationCancelNotificationArgs, 'payload'>>;
  cancelSubscription?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationCancelSubscriptionArgs, 'payload'>>;
  categoryPasswordCheck?: Resolver<ResolversTypes['CategoryPasswordCheck'], ParentType, ContextType, RequireFields<MutationCategoryPasswordCheckArgs, 'id' | 'payload'>>;
  channelPasswordCheck?: Resolver<ResolversTypes['ChannelPasswordCheck'], ParentType, ContextType, RequireFields<MutationChannelPasswordCheckArgs, 'channelId' | 'password'>>;
  confirmOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationConfirmOrderArgs, 'payload'>>;
  createAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationCreateAccountArgs, 'createAccountInput'>>;
  createAccountGdprLgpd?: Resolver<ResolversTypes['AccountGdprLgpd'], ParentType, ContextType, RequireFields<MutationCreateAccountGdprLgpdArgs, 'payload'>>;
  createAccountSession?: Resolver<ResolversTypes['AccountSession'], ParentType, ContextType, RequireFields<MutationCreateAccountSessionArgs, 'input'>>;
  createAudioMedia?: Resolver<ResolversTypes['MediaAudio'], ParentType, ContextType, RequireFields<MutationCreateAudioMediaArgs, 'payload'>>;
  createAudioPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreateAudioPostArgs, 'payload'>>;
  createBillboard?: Resolver<ResolversTypes['Billboard'], ParentType, ContextType, RequireFields<MutationCreateBillboardArgs, 'payload'>>;
  createCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'payload'>>;
  createChannel?: Resolver<ResolversTypes['AvailableChannel'], ParentType, ContextType, RequireFields<MutationCreateChannelArgs, 'payload'>>;
  createChannelRoles?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createCustomField?: Resolver<ResolversTypes['ResponseCustomFieldsOutput'], ParentType, ContextType, RequireFields<MutationCreateCustomFieldArgs, 'payload'>>;
  createEmailTemplate?: Resolver<ResolversTypes['EmailTemplate'], ParentType, ContextType, RequireFields<MutationCreateEmailTemplateArgs, 'payload'>>;
  createEmbed?: Resolver<ResolversTypes['Embed'], ParentType, ContextType, RequireFields<MutationCreateEmbedArgs, 'payload'>>;
  createEnvConfig?: Resolver<ResolversTypes['EnvConfig'], ParentType, ContextType, RequireFields<MutationCreateEnvConfigArgs, 'payload'>>;
  createGroup?: Resolver<ResolversTypes['GroupDto'], ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'payload'>>;
  createLiveEvent?: Resolver<ResolversTypes['LiveEvent'], ParentType, ContextType, RequireFields<MutationCreateLiveEventArgs, 'payload'>>;
  createMedia?: Resolver<ResolversTypes['Media'], ParentType, ContextType, RequireFields<MutationCreateMediaArgs, 'payload'>>;
  createMediaFromLive?: Resolver<ResolversTypes['MediaFromLiveResult'], ParentType, ContextType, RequireFields<MutationCreateMediaFromLiveArgs, 'payload'>>;
  createMenu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<MutationCreateMenuArgs, 'payload'>>;
  createOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'payload'>>;
  createPermission?: Resolver<ResolversTypes['PermissionDto'], ParentType, ContextType, RequireFields<MutationCreatePermissionArgs, 'payload'>>;
  createPhotoMedia?: Resolver<ResolversTypes['MediaPhoto'], ParentType, ContextType, RequireFields<MutationCreatePhotoMediaArgs, 'payload'>>;
  createPhotoPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreatePhotoPostArgs, 'payload'>>;
  createPlaylist?: Resolver<ResolversTypes['PlaylistOutput'], ParentType, ContextType, RequireFields<MutationCreatePlaylistArgs, 'payload'>>;
  createProduct?: Resolver<ResolversTypes['InspireProduct'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createProductPrice?: Resolver<ResolversTypes['ProductPriceOutput'], ParentType, ContextType, RequireFields<MutationCreateProductPriceArgs, 'params'>>;
  createPublicUpload?: Resolver<ResolversTypes['ResponseUploadCreation'], ParentType, ContextType, RequireFields<MutationCreatePublicUploadArgs, 'payload'>>;
  createRole?: Resolver<ResolversTypes['RolesDto'], ParentType, ContextType, RequireFields<MutationCreateRoleArgs, 'payload'>>;
  createSubject?: Resolver<ResolversTypes['SubjectDto'], ParentType, ContextType, RequireFields<MutationCreateSubjectArgs, 'payload'>>;
  createTag?: Resolver<ResolversTypes['TagOutput'], ParentType, ContextType, RequireFields<MutationCreateTagArgs, 'payload'>>;
  createTenantAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationCreateTenantAccountArgs, 'createAccountInput'>>;
  createTextPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreateTextPostArgs, 'payload'>>;
  createUpload?: Resolver<ResolversTypes['ResponseUploadCreation'], ParentType, ContextType, RequireFields<MutationCreateUploadArgs, 'payload'>>;
  createVideoMedia?: Resolver<ResolversTypes['MediaVideo'], ParentType, ContextType, RequireFields<MutationCreateVideoMediaArgs, 'payload'>>;
  createVideoPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationCreateVideoPostArgs, 'payload'>>;
  customPushNotification?: Resolver<ResolversTypes['PushNotificationResult'], ParentType, ContextType, RequireFields<MutationCustomPushNotificationArgs, 'payload'>>;
  deactiveAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationDeactiveAccountArgs, 'account'>>;
  deleteAccountPinnedCategory?: Resolver<ResolversTypes['AccountPinnedCategory'], ParentType, ContextType, RequireFields<MutationDeleteAccountPinnedCategoryArgs, 'id'>>;
  deleteAccountPinnedPost?: Resolver<ResolversTypes['AccountPinnedPost'], ParentType, ContextType, RequireFields<MutationDeleteAccountPinnedPostArgs, 'id'>>;
  deleteBillboard?: Resolver<ResolversTypes['Billboard'], ParentType, ContextType, RequireFields<MutationDeleteBillboardArgs, 'id'>>;
  deleteCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationDeleteCommentArgs, 'id'>>;
  deleteCustomField?: Resolver<ResolversTypes['ResponseCustomFieldsOutput'], ParentType, ContextType, RequireFields<MutationDeleteCustomFieldArgs, 'id'>>;
  deleteEmbed?: Resolver<ResolversTypes['Embed'], ParentType, ContextType, RequireFields<MutationDeleteEmbedArgs, 'id'>>;
  deleteEnvConfig?: Resolver<ResolversTypes['EnvConfig'], ParentType, ContextType, RequireFields<MutationDeleteEnvConfigArgs, 'envConfigId'>>;
  deleteLiveEvent?: Resolver<ResolversTypes['LiveEvent'], ParentType, ContextType, RequireFields<MutationDeleteLiveEventArgs, 'id'>>;
  deleteMedia?: Resolver<ResolversTypes['MediaUnion'], ParentType, ContextType, RequireFields<MutationDeleteMediaArgs, 'id'>>;
  deleteMenu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<MutationDeleteMenuArgs, 'id'>>;
  deleteMyAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationDeleteMyAccountArgs, 'input'>>;
  deleteOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'id'>>;
  deletePost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationDeletePostArgs, 'id'>>;
  deleteProduct?: Resolver<ResolversTypes['VoidScalar'], ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteProductPrice?: Resolver<ResolversTypes['VoidScalar'], ParentType, ContextType, RequireFields<MutationDeleteProductPriceArgs, 'id'>>;
  deleteUpload?: Resolver<ResolversTypes['ResponseUploadOutput'], ParentType, ContextType, RequireFields<MutationDeleteUploadArgs, 'id'>>;
  forgetAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationForgetAccountArgs, 'id' | 'input'>>;
  goLive?: Resolver<ResolversTypes['LiveEventGoLiveOutput'], ParentType, ContextType, RequireFields<MutationGoLiveArgs, 'id'>>;
  hasProductAccess?: Resolver<ResolversTypes['HasAccessOutput'], ParentType, ContextType, RequireFields<MutationHasProductAccessArgs, 'payload'>>;
  inviteTeamMember?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationInviteTeamMemberArgs, 'payload'>>;
  liveEventPasswordCheck?: Resolver<ResolversTypes['LiveEventPasswordCheck'], ParentType, ContextType, RequireFields<MutationLiveEventPasswordCheckArgs, 'id' | 'payload'>>;
  oneTimePayment?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationOneTimePaymentArgs, 'payload'>>;
  organizationPasswordCheck?: Resolver<ResolversTypes['OrganizationPasswordCheck'], ParentType, ContextType, RequireFields<MutationOrganizationPasswordCheckArgs, 'organizationId' | 'password'>>;
  overrideOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationOverrideOrderArgs, 'payload'>>;
  pauseSubscription?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationPauseSubscriptionArgs, 'payload'>>;
  pinCategory?: Resolver<ResolversTypes['AccountPinnedCategory'], ParentType, ContextType, RequireFields<MutationPinCategoryArgs, 'payload'>>;
  pinChannel?: Resolver<ResolversTypes['AccountPinnedChannel'], ParentType, ContextType>;
  pinPost?: Resolver<ResolversTypes['AccountPinnedPost'], ParentType, ContextType, RequireFields<MutationPinPostArgs, 'payload'>>;
  populateTemplatesForOrganization?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationPopulateTemplatesForOrganizationArgs, 'id'>>;
  postPasswordCheck?: Resolver<ResolversTypes['PostPasswordCheck'], ParentType, ContextType, RequireFields<MutationPostPasswordCheckArgs, 'id' | 'payload'>>;
  publishRemoteConfig?: Resolver<ResolversTypes['PublishRemoteConfig'], ParentType, ContextType, RequireFields<MutationPublishRemoteConfigArgs, 'payload'>>;
  pushNotification?: Resolver<ResolversTypes['PushNotificationResult'], ParentType, ContextType, RequireFields<MutationPushNotificationArgs, 'payload'>>;
  refreshToken?: Resolver<ResolversTypes['RefreshSignIn'], ParentType, ContextType>;
  removeAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationRemoveAccountArgs, 'id'>>;
  removeAccountGdprLgpd?: Resolver<ResolversTypes['AccountGdprLgpd'], ParentType, ContextType, RequireFields<MutationRemoveAccountGdprLgpdArgs, 'account'>>;
  removeAccountSession?: Resolver<ResolversTypes['AccountSession'], ParentType, ContextType, RequireFields<MutationRemoveAccountSessionArgs, 'id'>>;
  removeChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, RequireFields<MutationRemoveChannelArgs, 'id'>>;
  removeEmailTemplate?: Resolver<ResolversTypes['EmailTemplate'], ParentType, ContextType, RequireFields<MutationRemoveEmailTemplateArgs, 'id'>>;
  removeGroup?: Resolver<ResolversTypes['GroupDto'], ParentType, ContextType, RequireFields<MutationRemoveGroupArgs, 'id'>>;
  removeOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationRemoveOrganizationArgs, 'id'>>;
  removePermission?: Resolver<ResolversTypes['PermissionDto'], ParentType, ContextType, RequireFields<MutationRemovePermissionArgs, 'id'>>;
  removePlaylist?: Resolver<ResolversTypes['PlaylistOutput'], ParentType, ContextType, RequireFields<MutationRemovePlaylistArgs, 'id'>>;
  removeProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationRemoveProfileArgs, 'id'>>;
  removeReaction?: Resolver<Array<ResolversTypes['ReactionsAggregate']>, ParentType, ContextType, RequireFields<MutationRemoveReactionArgs, 'input'>>;
  removeRole?: Resolver<ResolversTypes['RolesDto'], ParentType, ContextType, RequireFields<MutationRemoveRoleArgs, 'id'>>;
  removeSubject?: Resolver<ResolversTypes['SubjectDto'], ParentType, ContextType, RequireFields<MutationRemoveSubjectArgs, 'id'>>;
  removeTag?: Resolver<ResolversTypes['TagOutput'], ParentType, ContextType, RequireFields<MutationRemoveTagArgs, 'id'>>;
  resendActivateAccount?: Resolver<ResolversTypes['AccountActivated'], ParentType, ContextType, RequireFields<MutationResendActivateAccountArgs, 'payload'>>;
  resetPassword?: Resolver<ResolversTypes['EmailSent'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'payload'>>;
  restartSubscription?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationRestartSubscriptionArgs, 'payload'>>;
  searchUpdateChannel?: Resolver<ResolversTypes['SearchUpdateChannel'], ParentType, ContextType>;
  sendEmail?: Resolver<ResolversTypes['ResponseEmailSendedDTO'], ParentType, ContextType, RequireFields<MutationSendEmailArgs, 'payload'>>;
  signIn?: Resolver<ResolversTypes['SingIn'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'payload'>>;
  signInTenantUser?: Resolver<ResolversTypes['SingIn'], ParentType, ContextType, RequireFields<MutationSignInTenantUserArgs, 'payload'>>;
  signOut?: Resolver<ResolversTypes['VoidScalar'], ParentType, ContextType, RequireFields<MutationSignOutArgs, 'payload'>>;
  socialSignIn?: Resolver<ResolversTypes['SingIn'], ParentType, ContextType, RequireFields<MutationSocialSignInArgs, 'input'>>;
  startMediaUpload?: Resolver<ResolversTypes['ResponseMediaUploadOutput'], ParentType, ContextType, RequireFields<MutationStartMediaUploadArgs, 'payload'>>;
  stopLive?: Resolver<ResolversTypes['LiveEventStopLiveOutput'], ParentType, ContextType, RequireFields<MutationStopLiveArgs, 'id'>>;
  unbanAccountPerm?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUnbanAccountPermArgs, 'account'>>;
  unbanAccountTemp?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUnbanAccountTempArgs, 'account'>>;
  uncancelSubscription?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUncancelSubscriptionArgs, 'payload'>>;
  unpinCategory?: Resolver<ResolversTypes['AccountPinnedCategory'], ParentType, ContextType, RequireFields<MutationUnpinCategoryArgs, 'categoryId'>>;
  unpinChannel?: Resolver<ResolversTypes['AccountPinnedChannel'], ParentType, ContextType>;
  unpinPost?: Resolver<ResolversTypes['AccountPinnedPost'], ParentType, ContextType, RequireFields<MutationUnpinPostArgs, 'postId'>>;
  updateAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateAccountArgs, 'id' | 'payload'>>;
  updateAccountGdprLgpd?: Resolver<ResolversTypes['AccountGdprLgpd'], ParentType, ContextType, RequireFields<MutationUpdateAccountGdprLgpdArgs, 'account' | 'payload'>>;
  updateAccountPinnedCategory?: Resolver<ResolversTypes['AccountPinnedCategory'], ParentType, ContextType, RequireFields<MutationUpdateAccountPinnedCategoryArgs, 'id' | 'input'>>;
  updateAccountPinnedPost?: Resolver<ResolversTypes['AccountPinnedPost'], ParentType, ContextType, RequireFields<MutationUpdateAccountPinnedPostArgs, 'id' | 'input'>>;
  updateAccountSession?: Resolver<ResolversTypes['AccountSession'], ParentType, ContextType, RequireFields<MutationUpdateAccountSessionArgs, 'id' | 'updateAccountSessionInput'>>;
  updateAudioPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdateAudioPostArgs, 'id' | 'payload'>>;
  updateBillboard?: Resolver<ResolversTypes['Billboard'], ParentType, ContextType, RequireFields<MutationUpdateBillboardArgs, 'id' | 'payload'>>;
  updateCategory?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'id' | 'payload'>>;
  updateChannel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, RequireFields<MutationUpdateChannelArgs, 'id' | 'payload'>>;
  updateComment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<MutationUpdateCommentArgs, 'id' | 'payload'>>;
  updateCreditCardPaymentMethod?: Resolver<ResolversTypes['DefaultCreditCardPaymentMethod'], ParentType, ContextType, RequireFields<MutationUpdateCreditCardPaymentMethodArgs, 'id' | 'payload'>>;
  updateCustomField?: Resolver<ResolversTypes['ResponseCustomFieldsOutput'], ParentType, ContextType, RequireFields<MutationUpdateCustomFieldArgs, 'id' | 'payload'>>;
  updateEmailTemplate?: Resolver<ResolversTypes['EmailTemplate'], ParentType, ContextType, RequireFields<MutationUpdateEmailTemplateArgs, 'id' | 'payload'>>;
  updateEmbed?: Resolver<ResolversTypes['Embed'], ParentType, ContextType, RequireFields<MutationUpdateEmbedArgs, 'id' | 'payload'>>;
  updateEnvConfig?: Resolver<ResolversTypes['EnvConfig'], ParentType, ContextType, RequireFields<MutationUpdateEnvConfigArgs, 'envConfigId' | 'payload'>>;
  updateGroup?: Resolver<ResolversTypes['GroupDto'], ParentType, ContextType, RequireFields<MutationUpdateGroupArgs, 'id' | 'payload'>>;
  updateIsAdminAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateIsAdminAccountArgs, 'payload'>>;
  updateLiveEvent?: Resolver<ResolversTypes['LiveEvent'], ParentType, ContextType, RequireFields<MutationUpdateLiveEventArgs, 'id' | 'payload'>>;
  updateMediaAudio?: Resolver<ResolversTypes['MediaAudio'], ParentType, ContextType, RequireFields<MutationUpdateMediaAudioArgs, 'id' | 'payload'>>;
  updateMediaPhoto?: Resolver<ResolversTypes['MediaPhoto'], ParentType, ContextType, RequireFields<MutationUpdateMediaPhotoArgs, 'id' | 'payload'>>;
  updateMediaSubtitle?: Resolver<ResolversTypes['MediaSubtitle'], ParentType, ContextType, RequireFields<MutationUpdateMediaSubtitleArgs, 'id' | 'payload'>>;
  updateMediaVideo?: Resolver<ResolversTypes['MediaVideo'], ParentType, ContextType, RequireFields<MutationUpdateMediaVideoArgs, 'id' | 'payload'>>;
  updateMenu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<MutationUpdateMenuArgs, 'id'>>;
  updateMyAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<MutationUpdateMyAccountArgs, 'payload'>>;
  updateMyProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationUpdateMyProfileArgs, 'payload'>>;
  updateOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id'>>;
  updateOrganization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'id' | 'payload'>>;
  updatePassword?: Resolver<ResolversTypes['PasswordChanged'], ParentType, ContextType, RequireFields<MutationUpdatePasswordArgs, 'payload'>>;
  updatePasswordOnly?: Resolver<ResolversTypes['PasswordOnlyChanged'], ParentType, ContextType, RequireFields<MutationUpdatePasswordOnlyArgs, 'payload'>>;
  updatePermission?: Resolver<ResolversTypes['PermissionDto'], ParentType, ContextType, RequireFields<MutationUpdatePermissionArgs, 'id' | 'payload'>>;
  updatePhotoPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdatePhotoPostArgs, 'id' | 'payload'>>;
  updatePlaylist?: Resolver<ResolversTypes['PlaylistOutput'], ParentType, ContextType, RequireFields<MutationUpdatePlaylistArgs, 'id' | 'payload'>>;
  updateProduct?: Resolver<ResolversTypes['InspireProduct'], ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id' | 'input'>>;
  updateProductPrice?: Resolver<ResolversTypes['ProductPriceOutput'], ParentType, ContextType, RequireFields<MutationUpdateProductPriceArgs, 'id' | 'input'>>;
  updateProfile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'account' | 'payload'>>;
  updateReport?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<MutationUpdateReportArgs, 'payload' | 'reportId'>>;
  updateRole?: Resolver<ResolversTypes['RolesDto'], ParentType, ContextType, RequireFields<MutationUpdateRoleArgs, 'id' | 'payload'>>;
  updateSubject?: Resolver<ResolversTypes['SubjectDto'], ParentType, ContextType, RequireFields<MutationUpdateSubjectArgs, 'id' | 'payload'>>;
  updateTag?: Resolver<ResolversTypes['TagOutput'], ParentType, ContextType, RequireFields<MutationUpdateTagArgs, 'id' | 'payload'>>;
  updateTextPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdateTextPostArgs, 'id' | 'payload'>>;
  updateUpload?: Resolver<ResolversTypes['ResponseUploadOutput'], ParentType, ContextType, RequireFields<MutationUpdateUploadArgs, 'id' | 'payload'>>;
  updateVideoPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationUpdateVideoPostArgs, 'id' | 'payload'>>;
  verifyMail?: Resolver<ResolversTypes['VerifyMail'], ParentType, ContextType, RequireFields<MutationVerifyMailArgs, 'payload'>>;
};

export type MyProductsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyProducts'] = ResolversParentTypes['MyProducts']> = {
  products?: Resolver<Array<ResolversTypes['InspireProduct']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NotificationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['NotificationOutput'] = ResolversParentTypes['NotificationOutput']> = {
  canceled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  completedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  contents?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
  converted?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  defaultLangMessage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  defaultLangTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  errored?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  failed?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  headings?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
  includedSegments?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  isAndroid?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isChromeWeb?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isEdge?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirefox?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isIos?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isSafari?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oneSignalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  queuedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  received?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  remaining?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  sendAfter?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OneSignalStatusEnum'], ParentType, ContextType>;
  successful?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  account?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  customFields?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invoices?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['OrderStatus']>, ParentType, ContextType>;
  subscription?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  access?: Resolver<ResolversTypes['AccessKinds'], ParentType, ContextType>;
  audioCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  bundle_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  email_settings?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  entitlements?: Resolver<Array<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  itunes_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  min_compat_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  onesignal_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['OrganizationSettings']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web_url?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationKindResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationKind'] = ResolversParentTypes['OrganizationKind']> = {
  audioCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSON']>>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  imageCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web_url?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationOneSignalOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationOneSignalOutput'] = ResolversParentTypes['OrganizationOneSignalOutput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  safari_web_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPasswordCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPasswordCheck'] = ResolversParentTypes['OrganizationPasswordCheck']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPublicResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPublic'] = ResolversParentTypes['OrganizationPublic']> = {
  audioCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  current_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  min_compat_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['OrganizationPublicSettings']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tenant_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web_url?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPublicCustomizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPublicCustomization'] = ResolversParentTypes['OrganizationPublicCustomization']> = {
  configuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favIcon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  loginImage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPublicOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPublicOutput'] = ResolversParentTypes['OrganizationPublicOutput']> = {
  audioCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatarCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  current_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['OrganizationPublicCustomization']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  identifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  imageCdnBaseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min_compat_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  portal_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  settings?: Resolver<Maybe<ResolversTypes['OrganizationPublicSettings']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationPublicSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationPublicSettings'] = ResolversParentTypes['OrganizationPublicSettings']> = {
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationSettingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationSettings'] = ResolversParentTypes['OrganizationSettings']> = {
  apple?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  aws?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  bex?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  bucket?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  defaultGeofence?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  favicon?: Resolver<Maybe<ResolversTypes['CustomizationMediaOutput']>, ParentType, ContextType>;
  firebase?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['CustomizationMediaOutput']>, ParentType, ContextType>;
  onesignal?: Resolver<ResolversTypes['OrganizationOneSignalOutput'], ParentType, ContextType>;
  sessionsLimit?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  spreedly?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  stripe?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  verifyEmail?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  zoho?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedAccountsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedAccountsOutput'] = ResolversParentTypes['PaginatedAccountsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedBillboardsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedBillboardsOutput'] = ResolversParentTypes['PaginatedBillboardsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Billboard']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedCategoriesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedCategoriesOutput'] = ResolversParentTypes['PaginatedCategoriesOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedCommentsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedCommentsOutput'] = ResolversParentTypes['PaginatedCommentsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedLiveEventsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedLiveEventsOutput'] = ResolversParentTypes['PaginatedLiveEventsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['LiveEvent']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedMediaUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedMediaUnion'] = ResolversParentTypes['PaginatedMediaUnion']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedMenusOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedMenusOutput'] = ResolversParentTypes['PaginatedMenusOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Menu']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedNotificationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedNotificationOutput'] = ResolversParentTypes['PaginatedNotificationOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['NotificationOutput']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedPostsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedPostsOutput'] = ResolversParentTypes['PaginatedPostsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedReportsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedReportsOutput'] = ResolversParentTypes['PaginatedReportsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['Report']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedRolesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedRolesOutput'] = ResolversParentTypes['PaginatedRolesOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['RolesDto']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedSearchResultOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedSearchResultOutput'] = ResolversParentTypes['PaginatedSearchResultOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['SearchResult']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ParametersResolvers<ContextType = any, ParentType extends ResolversParentTypes['Parameters'] = ResolversParentTypes['Parameters']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  missing?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordChangedResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordChanged'] = ResolversParentTypes['PasswordChanged']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PasswordOnlyChangedResolvers<ContextType = any, ParentType extends ResolversParentTypes['PasswordOnlyChanged'] = ResolversParentTypes['PasswordOnlyChanged']> = {
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PermissionDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PermissionDto'] = ResolversParentTypes['PermissionDto']> = {
  actions?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  subject?: Resolver<ResolversTypes['SubjectDto'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PinnedChannelOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PinnedChannelOutput'] = ResolversParentTypes['PinnedChannelOutput']> = {
  banner?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  logo?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ChannelStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistOutput'] = ResolversParentTypes['PlaylistOutput']> = {
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  posts?: Resolver<ResolversTypes['PaginatedPostsOutput'], ParentType, ContextType, Partial<PlaylistOutputPostsArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlaylistsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PlaylistsOutput'] = ResolversParentTypes['PlaylistsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['PlaylistOutput']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<ContextType = any, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = {
  access?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  account?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  allowComments?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<ResolversTypes['Category']>>, ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  countComments?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countReactions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countUniqueCommenters?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countViewsTotal?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  devices?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
  embed?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  engagedUsers?: Resolver<Array<ResolversTypes['EngagedUser']>, ParentType, ContextType>;
  entitlements?: Resolver<Array<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  excerpt?: Resolver<ResolversTypes['JSONObject'], ParentType, ContextType>;
  featured?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  folder?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  hiddenFromFeed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inFeed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  myReactions?: Resolver<Array<ResolversTypes['PostReactions']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinnedStatus?: Resolver<Maybe<ResolversTypes['AccountPinnedPost']>, ParentType, ContextType>;
  playlists?: Resolver<Maybe<Array<ResolversTypes['PlaylistOutput']>>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  pushNotification?: Resolver<Maybe<ResolversTypes['PushNotificationOutput']>, ParentType, ContextType>;
  reactions?: Resolver<Array<ResolversTypes['PostReactions']>, ParentType, ContextType>;
  schedule?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['TagOutput']>>, ParentType, ContextType>;
  teaser?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaPhoto']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostKindResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostKind'] = ResolversParentTypes['PostKind']> = {
  access?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  entitlements?: Resolver<Maybe<Array<ResolversTypes['JSONObject']>>, ParentType, ContextType>;
  geofence?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  geofenceEntitlements?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isKindAuto?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaPhoto']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostPasswordCheckResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostPasswordCheck'] = ResolversParentTypes['PostPasswordCheck']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostReactionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostReactions'] = ResolversParentTypes['PostReactions']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostSlugExistsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PostSlugExists'] = ResolversParentTypes['PostSlugExists']> = {
  exists?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceTierOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PriceTierOutput'] = ResolversParentTypes['PriceTierOutput']> = {
  flatPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productPriceTiersId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  productPricesId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  upTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PricingModelOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PricingModelOutput'] = ResolversParentTypes['PricingModelOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductOutput'] = ResolversParentTypes['ProductOutput']> = {
  createdDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata?: Resolver<Array<ResolversTypes['InspireMetadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  statementDescriptor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitLabel?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPriceOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPriceOutput'] = ResolversParentTypes['ProductPriceOutput']> = {
  billingPeriodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingPeriods?: Resolver<ResolversTypes['BillingPeriodsOutput'], ParentType, ContextType>;
  billingTypes?: Resolver<ResolversTypes['BillingTypesOutput'], ParentType, ContextType>;
  billingTypesId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  currencies?: Resolver<ResolversTypes['CurrencyOutput'], ParentType, ContextType>;
  currencyId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  customIntervalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  installment?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  internalDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isIncludingCountries?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<Array<ResolversTypes['InspireMetadata']>>, ParentType, ContextType>;
  neverUsedSubscription?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  numberActiveSubscriptions?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  onlyProductPrice?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  packageUnits?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  priceTiers?: Resolver<Array<ResolversTypes['PriceTierOutput']>, ParentType, ContextType>;
  pricingModelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pricingModels?: Resolver<ResolversTypes['PricingModelOutput'], ParentType, ContextType>;
  products?: Resolver<ResolversTypes['ProductOutput'], ParentType, ContextType>;
  productsId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurringMeteredUsageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurringMeteredUsages?: Resolver<ResolversTypes['RecurringMeteredUsagesOutput'], ParentType, ContextType>;
  recurringTrialPeriodDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurringUsageTypes?: Resolver<ResolversTypes['RecurringUsageTypesOutput'], ParentType, ContextType>;
  recurringUsageTypesId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  unitPriceInstallment?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductPricesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductPricesOutput'] = ResolversParentTypes['ProductPricesOutput']> = {
  billingPeriodId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  billingPeriods?: Resolver<Maybe<ResolversTypes['PriceTierOutput']>, ParentType, ContextType>;
  billingTypes?: Resolver<Maybe<ResolversTypes['BillingTypesOutput']>, ParentType, ContextType>;
  billingTypesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  customIntervalCount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  internalDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isIncludingCountries?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  numberActiveSubscriptions?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  packageUnits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentLinkItems?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  priceTiers?: Resolver<Maybe<Array<ResolversTypes['PriceTierOutput']>>, ParentType, ContextType>;
  pricingModelId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  productsId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recurringMeteredUsageId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  recurringTrialPeriodDays?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  recurringUsageTypes?: Resolver<Maybe<ResolversTypes['RecurringUsageTypesOutput']>, ParentType, ContextType>;
  recurringUsageTypesId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unitPrice?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unitPriceInstallment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  account?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['ProfileAvatar']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  cpf?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  custom_fields?: Resolver<Maybe<ResolversTypes['JSONObject']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locale?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileAvatarResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileAvatar'] = ResolversParentTypes['ProfileAvatar']> = {
  aspectRatio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  baseUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  imgPath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicChannelOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicChannelOutput'] = ResolversParentTypes['PublicChannelOutput']> = {
  customization?: Resolver<Maybe<ResolversTypes['ChannelCustomizationOutput']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['Kinds'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublishRemoteConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublishRemoteConfig'] = ResolversParentTypes['PublishRemoteConfig']> = {
  configuration?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PushNotificationOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['PushNotificationOutput'] = ResolversParentTypes['PushNotificationOutput']> = {
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ignore?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PushNotificationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['PushNotificationResult'] = ResolversParentTypes['PushNotificationResult']> = {
  external_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipients?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType, RequireFields<QueryAccountArgs, 'id'>>;
  accountGdprLgpd?: Resolver<ResolversTypes['AccountGdprLgpd'], ParentType, ContextType, RequireFields<QueryAccountGdprLgpdArgs, 'account'>>;
  accountPinnedCategories?: Resolver<Array<ResolversTypes['AccountPinnedCategory']>, ParentType, ContextType, RequireFields<QueryAccountPinnedCategoriesArgs, 'pagination'>>;
  accountPinnedCategory?: Resolver<ResolversTypes['AccountPinnedCategory'], ParentType, ContextType, RequireFields<QueryAccountPinnedCategoryArgs, 'id'>>;
  accountPinnedPost?: Resolver<ResolversTypes['AccountPinnedPost'], ParentType, ContextType, RequireFields<QueryAccountPinnedPostArgs, 'id'>>;
  accountPinnedPosts?: Resolver<Array<ResolversTypes['AccountPinnedPost']>, ParentType, ContextType, RequireFields<QueryAccountPinnedPostsArgs, 'pagination'>>;
  accountSession?: Resolver<ResolversTypes['AccountSession'], ParentType, ContextType, RequireFields<QueryAccountSessionArgs, 'id'>>;
  accountSessions?: Resolver<Array<ResolversTypes['AccountSession']>, ParentType, ContextType>;
  accounts?: Resolver<ResolversTypes['PaginatedAccountsOutput'], ParentType, ContextType, Partial<QueryAccountsArgs>>;
  accountsCount?: Resolver<ResolversTypes['ResponseAccountsCount'], ParentType, ContextType>;
  accountsGdprLgpd?: Resolver<Array<ResolversTypes['AccountGdprLgpd']>, ParentType, ContextType>;
  activeSubscriptons?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, Partial<QueryActiveSubscriptonsArgs>>;
  billboard?: Resolver<ResolversTypes['Billboard'], ParentType, ContextType, RequireFields<QueryBillboardArgs, 'id'>>;
  billboards?: Resolver<ResolversTypes['PaginatedBillboardsOutput'], ParentType, ContextType, Partial<QueryBillboardsArgs>>;
  categories?: Resolver<ResolversTypes['PaginatedCategoriesOutput'], ParentType, ContextType, Partial<QueryCategoriesArgs>>;
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType, Partial<QueryCategoryArgs>>;
  categoryKind?: Resolver<ResolversTypes['CategoryKind'], ParentType, ContextType, Partial<QueryCategoryKindArgs>>;
  channel?: Resolver<ResolversTypes['Channel'], ParentType, ContextType, Partial<QueryChannelArgs>>;
  channelKind?: Resolver<ResolversTypes['ChannelKind'], ParentType, ContextType, Partial<QueryChannelKindArgs>>;
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, Partial<QueryChannelsArgs>>;
  checkCategorySlug?: Resolver<ResolversTypes['CategorySlugExists'], ParentType, ContextType, RequireFields<QueryCheckCategorySlugArgs, 'slug'>>;
  checkChannel?: Resolver<ResolversTypes['ResponseAvailabilityOutput'], ParentType, ContextType, RequireFields<QueryCheckChannelArgs, 'name' | 'organizationId'>>;
  checkLiveEventSlug?: Resolver<ResolversTypes['LiveEventSlugExists'], ParentType, ContextType, RequireFields<QueryCheckLiveEventSlugArgs, 'slug'>>;
  checkOrg?: Resolver<ResolversTypes['ResponseAvailabilityOutput'], ParentType, ContextType, RequireFields<QueryCheckOrgArgs, 'name'>>;
  checkPostSlug?: Resolver<ResolversTypes['PostSlugExists'], ParentType, ContextType, RequireFields<QueryCheckPostSlugArgs, 'slug'>>;
  comment?: Resolver<ResolversTypes['Comment'], ParentType, ContextType, RequireFields<QueryCommentArgs, 'commentId'>>;
  comments?: Resolver<ResolversTypes['PaginatedCommentsOutput'], ParentType, ContextType, Partial<QueryCommentsArgs>>;
  countAccountPinnedCategory?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  countAccountPinnedPost?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  countOrders?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryCountOrdersArgs>>;
  countPermissions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  countRoles?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  countSubjects?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customField?: Resolver<ResolversTypes['ResponseCustomFieldsOutput'], ParentType, ContextType, RequireFields<QueryCustomFieldArgs, 'id'>>;
  customFields?: Resolver<Array<ResolversTypes['ResponseCustomFieldsOutput']>, ParentType, ContextType>;
  emailTemplate?: Resolver<ResolversTypes['EmailTemplate'], ParentType, ContextType, RequireFields<QueryEmailTemplateArgs, 'id'>>;
  emailTemplates?: Resolver<Array<ResolversTypes['EmailTemplate']>, ParentType, ContextType>;
  embed?: Resolver<ResolversTypes['Embed'], ParentType, ContextType, RequireFields<QueryEmbedArgs, 'id'>>;
  embeds?: Resolver<Array<ResolversTypes['Embed']>, ParentType, ContextType, Partial<QueryEmbedsArgs>>;
  embedsCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType, Partial<QueryEmbedsCountArgs>>;
  envConfig?: Resolver<ResolversTypes['EncryptedEnvConfig'], ParentType, ContextType, RequireFields<QueryEnvConfigArgs, 'origin'>>;
  getPublicChannel?: Resolver<ResolversTypes['PublicChannelOutput'], ParentType, ContextType, Partial<QueryGetPublicChannelArgs>>;
  group?: Resolver<ResolversTypes['GroupDto'], ParentType, ContextType, RequireFields<QueryGroupArgs, 'id'>>;
  groups?: Resolver<Array<ResolversTypes['GroupDto']>, ParentType, ContextType, RequireFields<QueryGroupsArgs, 'limit' | 'skip'>>;
  listNotifications?: Resolver<ResolversTypes['PaginatedNotificationOutput'], ParentType, ContextType, Partial<QueryListNotificationsArgs>>;
  liveEvent?: Resolver<ResolversTypes['LiveEvent'], ParentType, ContextType, Partial<QueryLiveEventArgs>>;
  liveEventKind?: Resolver<ResolversTypes['LiveEventKind'], ParentType, ContextType, Partial<QueryLiveEventKindArgs>>;
  liveEvents?: Resolver<ResolversTypes['PaginatedLiveEventsOutput'], ParentType, ContextType, Partial<QueryLiveEventsArgs>>;
  me?: Resolver<ResolversTypes['Me'], ParentType, ContextType>;
  media?: Resolver<ResolversTypes['MediaUnion'], ParentType, ContextType, RequireFields<QueryMediaArgs, 'id'>>;
  mediaCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  medias?: Resolver<ResolversTypes['PaginatedMediaUnion'], ParentType, ContextType, Partial<QueryMediasArgs>>;
  menu?: Resolver<ResolversTypes['Menu'], ParentType, ContextType, RequireFields<QueryMenuArgs, 'id'>>;
  menus?: Resolver<ResolversTypes['PaginatedMenusOutput'], ParentType, ContextType, Partial<QueryMenusArgs>>;
  myProducts?: Resolver<ResolversTypes['MyProducts'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, Partial<QueryOrdersArgs>>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
  organizationKind?: Resolver<ResolversTypes['OrganizationKind'], ParentType, ContextType, RequireFields<QueryOrganizationKindArgs, 'id'>>;
  organizationPublicSettings?: Resolver<ResolversTypes['OrganizationPublic'], ParentType, ContextType, RequireFields<QueryOrganizationPublicSettingsArgs, 'id'>>;
  organizations?: Resolver<Array<ResolversTypes['Organization']>, ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  permission?: Resolver<ResolversTypes['PermissionDto'], ParentType, ContextType, RequireFields<QueryPermissionArgs, 'id'>>;
  permissions?: Resolver<Array<ResolversTypes['PermissionDto']>, ParentType, ContextType, RequireFields<QueryPermissionsArgs, 'limit' | 'skip' | 'sort'>>;
  playlist?: Resolver<ResolversTypes['PlaylistOutput'], ParentType, ContextType, RequireFields<QueryPlaylistArgs, 'id'>>;
  playlists?: Resolver<ResolversTypes['PlaylistsOutput'], ParentType, ContextType, Partial<QueryPlaylistsArgs>>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, Partial<QueryPostArgs>>;
  postKind?: Resolver<ResolversTypes['PostKind'], ParentType, ContextType, Partial<QueryPostKindArgs>>;
  posts?: Resolver<ResolversTypes['PaginatedPostsOutput'], ParentType, ContextType, Partial<QueryPostsArgs>>;
  product?: Resolver<ResolversTypes['InspireProduct'], ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productPrice?: Resolver<ResolversTypes['ProductPriceOutput'], ParentType, ContextType, RequireFields<QueryProductPriceArgs, 'id'>>;
  productPrices?: Resolver<Array<ResolversTypes['ProductPricesOutput']>, ParentType, ContextType, Partial<QueryProductPricesArgs>>;
  products?: Resolver<Array<ResolversTypes['InspireProductFiltered']>, ParentType, ContextType>;
  profile?: Resolver<ResolversTypes['Profile'], ParentType, ContextType, RequireFields<QueryProfileArgs, 'account'>>;
  profiles?: Resolver<Array<ResolversTypes['Profile']>, ParentType, ContextType, RequireFields<QueryProfilesArgs, 'page' | 'pageSize' | 'sortBy'>>;
  publicCategories?: Resolver<ResolversTypes['PaginatedCategoriesOutput'], ParentType, ContextType, Partial<QueryPublicCategoriesArgs>>;
  publicChannels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType, Partial<QueryPublicChannelsArgs>>;
  publicLiveEvents?: Resolver<ResolversTypes['PaginatedLiveEventsOutput'], ParentType, ContextType, Partial<QueryPublicLiveEventsArgs>>;
  publicMenus?: Resolver<ResolversTypes['PaginatedMenusOutput'], ParentType, ContextType, Partial<QueryPublicMenusArgs>>;
  publicPosts?: Resolver<ResolversTypes['PaginatedPostsOutput'], ParentType, ContextType, Partial<QueryPublicPostsArgs>>;
  publicTags?: Resolver<ResolversTypes['TagsOutput'], ParentType, ContextType, Partial<QueryPublicTagsArgs>>;
  report?: Resolver<ResolversTypes['Report'], ParentType, ContextType, RequireFields<QueryReportArgs, 'reportId'>>;
  reports?: Resolver<ResolversTypes['PaginatedReportsOutput'], ParentType, ContextType, Partial<QueryReportsArgs>>;
  role?: Resolver<ResolversTypes['RolesDto'], ParentType, ContextType, RequireFields<QueryRoleArgs, 'id'>>;
  roles?: Resolver<ResolversTypes['PaginatedRolesOutput'], ParentType, ContextType, Partial<QueryRolesArgs>>;
  search?: Resolver<ResolversTypes['PaginatedSearchResultOutput'], ParentType, ContextType, Partial<QuerySearchArgs>>;
  subject?: Resolver<ResolversTypes['SubjectDto'], ParentType, ContextType, RequireFields<QuerySubjectArgs, 'id'>>;
  subjects?: Resolver<Array<ResolversTypes['SubjectDto']>, ParentType, ContextType, RequireFields<QuerySubjectsArgs, 'limit' | 'skip' | 'sort'>>;
  tag?: Resolver<ResolversTypes['TagOutput'], ParentType, ContextType, Partial<QueryTagArgs>>;
  tags?: Resolver<ResolversTypes['TagsOutput'], ParentType, ContextType, Partial<QueryTagsArgs>>;
  upload?: Resolver<ResolversTypes['ResponseUploadOutput'], ParentType, ContextType, RequireFields<QueryUploadArgs, 'id'>>;
  uploads?: Resolver<Array<ResolversTypes['ResponseUploadOutput']>, ParentType, ContextType, RequireFields<QueryUploadsArgs, 'filter'>>;
};

export type ReactionsAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReactionsAggregate'] = ResolversParentTypes['ReactionsAggregate']> = {
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecurringMeteredUsagesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecurringMeteredUsagesOutput'] = ResolversParentTypes['RecurringMeteredUsagesOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  usage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RecurringUsageTypesOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RecurringUsageTypesOutput'] = ResolversParentTypes['RecurringUsageTypesOutput']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshSignInResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshSignIn'] = ResolversParentTypes['RefreshSignIn']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['RefreshToken'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RefreshTokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['RefreshToken'] = ResolversParentTypes['RefreshToken']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  firebaseToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportResolvers<ContextType = any, ParentType extends ResolversParentTypes['Report'] = ResolversParentTypes['Report']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  idReported?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  reason?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reportedObject?: Resolver<Maybe<ResolversTypes['ReportSubjectUnion']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ReportStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ReportType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportSubjectUnionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportSubjectUnion'] = ResolversParentTypes['ReportSubjectUnion']> = {
  __resolveType: TypeResolveFn<'Comment' | 'Post' | 'ReportedAccountOutput', ParentType, ContextType>;
};

export type ReportedAccountOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportedAccountOutput'] = ResolversParentTypes['ReportedAccountOutput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseAccountsCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseAccountsCount'] = ResolversParentTypes['ResponseAccountsCount']> = {
  count?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseAvailabilityOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseAvailabilityOutput'] = ResolversParentTypes['ResponseAvailabilityOutput']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isAvailable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseCustomFieldsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseCustomFieldsOutput'] = ResolversParentTypes['ResponseCustomFieldsOutput']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fields?: Resolver<Array<ResolversTypes['ResponseFieldOutput']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseEmailSendedDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseEmailSendedDTO'] = ResolversParentTypes['ResponseEmailSendedDTO']> = {
  accepted?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  envelope?: Resolver<ResolversTypes['EmailResponseEnvelopeDTO'], ParentType, ContextType>;
  envelopeTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  messageId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  messageTime?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rejected?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  response?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseFieldOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseFieldOutput'] = ResolversParentTypes['ResponseFieldOutput']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  required?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['CustomFieldTypesEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseMediaUploadOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseMediaUploadOutput'] = ResolversParentTypes['ResponseMediaUploadOutput']> = {
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  media?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  uploadId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseUploadCreationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseUploadCreation'] = ResolversParentTypes['ResponseUploadCreation']> = {
  media?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  upload?: Resolver<ResolversTypes['ResponseUploadOutput'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseUploadOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseUploadOutput'] = ResolversParentTypes['ResponseUploadOutput']> = {
  bucket?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  expireIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  expired?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isExpiredCalc?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['UploadStatusEnum'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RolesDto'] = ResolversParentTypes['RolesDto']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  default?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  membersAggregate?: Resolver<ResolversTypes['RolesMembersOutput'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  permissions?: Resolver<Array<ResolversTypes['PermissionDto']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesMembersOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['RolesMembersOutput'] = ResolversParentTypes['RolesMembersOutput']> = {
  members?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchCategory'] = ResolversParentTypes['SearchCategory']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  customization?: Resolver<Maybe<ResolversTypes['CategoryCustomization']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  featuredAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pinnedStatus?: Resolver<Maybe<ResolversTypes['AccountPinnedCategory']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['SearchTag']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchCategoryHeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchCategoryHead'] = ResolversParentTypes['SearchCategoryHead']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchLiveEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchLiveEvent'] = ResolversParentTypes['SearchLiveEvent']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['SearchCategoryHead']>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  scheduledStartAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['SearchTag']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaPhoto']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchPost'] = ResolversParentTypes['SearchPost']> = {
  access?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  audioArtist?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  audioTitle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<ResolversTypes['SearchCategoryHead']>>, ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['Kinds']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['MediaUnion']>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tags?: Resolver<Maybe<Array<ResolversTypes['SearchTag']>>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['MediaPhoto']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResult'] = ResolversParentTypes['SearchResult']> = {
  __resolveType: TypeResolveFn<'SearchCategory' | 'SearchLiveEvent' | 'SearchPost', ParentType, ContextType>;
};

export type SearchTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchTag'] = ResolversParentTypes['SearchTag']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchUpdateChannelResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchUpdateChannel'] = ResolversParentTypes['SearchUpdateChannel']> = {
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SingInResolvers<ContextType = any, ParentType extends ResolversParentTypes['SingIn'] = ResolversParentTypes['SingIn']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['AccessToken'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubjectDtoResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubjectDto'] = ResolversParentTypes['SubjectDto']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  entity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fields?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagOutput'] = ResolversParentTypes['TagOutput']> = {
  channel?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  relatedCategories?: Resolver<ResolversTypes['PaginatedCategoriesOutput'], ParentType, ContextType, Partial<TagOutputRelatedCategoriesArgs>>;
  relatedPosts?: Resolver<ResolversTypes['PaginatedPostsOutput'], ParentType, ContextType, Partial<TagOutputRelatedPostsArgs>>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TagsOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagsOutput'] = ResolversParentTypes['TagsOutput']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isFirstPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isLastPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  pageNumberIsGood?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rows?: Resolver<Array<ResolversTypes['TagOutput']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerifyMailResolvers<ContextType = any, ParentType extends ResolversParentTypes['VerifyMail'] = ResolversParentTypes['VerifyMail']> = {
  exist?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['VoidScalar'], any> {
  name: 'VoidScalar';
}

export type Resolvers<ContextType = any> = {
  AccessToken?: AccessTokenResolvers<ContextType>;
  Account?: AccountResolvers<ContextType>;
  AccountActivated?: AccountActivatedResolvers<ContextType>;
  AccountGdprLgpd?: AccountGdprLgpdResolvers<ContextType>;
  AccountPinnedCategory?: AccountPinnedCategoryResolvers<ContextType>;
  AccountPinnedChannel?: AccountPinnedChannelResolvers<ContextType>;
  AccountPinnedPost?: AccountPinnedPostResolvers<ContextType>;
  AccountSession?: AccountSessionResolvers<ContextType>;
  AccountStatus?: AccountStatusResolvers<ContextType>;
  AddedCommentVote?: AddedCommentVoteResolvers<ContextType>;
  AvailableChannel?: AvailableChannelResolvers<ContextType>;
  Billboard?: BillboardResolvers<ContextType>;
  BillboardActionsOutput?: BillboardActionsOutputResolvers<ContextType>;
  BillboardCustomizationOutput?: BillboardCustomizationOutputResolvers<ContextType>;
  BillingPeriodsOutput?: BillingPeriodsOutputResolvers<ContextType>;
  BillingTypesOutput?: BillingTypesOutputResolvers<ContextType>;
  CancelNotificationOutput?: CancelNotificationOutputResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  CategoryCustomization?: CategoryCustomizationResolvers<ContextType>;
  CategoryKind?: CategoryKindResolvers<ContextType>;
  CategoryPasswordCheck?: CategoryPasswordCheckResolvers<ContextType>;
  CategorySlugExists?: CategorySlugExistsResolvers<ContextType>;
  CategorySortingOutput?: CategorySortingOutputResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  ChannelCustomizationLightDarkOutput?: ChannelCustomizationLightDarkOutputResolvers<ContextType>;
  ChannelCustomizationOutput?: ChannelCustomizationOutputResolvers<ContextType>;
  ChannelKind?: ChannelKindResolvers<ContextType>;
  ChannelPasswordCheck?: ChannelPasswordCheckResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  CommentAuthor?: CommentAuthorResolvers<ContextType>;
  CommentVote?: CommentVoteResolvers<ContextType>;
  CommentVoteStats?: CommentVoteStatsResolvers<ContextType>;
  CurrencyOutput?: CurrencyOutputResolvers<ContextType>;
  CustomizationMediaOutput?: CustomizationMediaOutputResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DefaultCreditCardPaymentMethod?: DefaultCreditCardPaymentMethodResolvers<ContextType>;
  EmailResponseEnvelopeDTO?: EmailResponseEnvelopeDtoResolvers<ContextType>;
  EmailSent?: EmailSentResolvers<ContextType>;
  EmailTemplate?: EmailTemplateResolvers<ContextType>;
  EmailTemplateLocales?: EmailTemplateLocalesResolvers<ContextType>;
  Embed?: EmbedResolvers<ContextType>;
  EncryptedEnvConfig?: EncryptedEnvConfigResolvers<ContextType>;
  EngagedUser?: EngagedUserResolvers<ContextType>;
  EnvConfig?: EnvConfigResolvers<ContextType>;
  GeolockedChannel?: GeolockedChannelResolvers<ContextType>;
  GroupDto?: GroupDtoResolvers<ContextType>;
  HasAccessOutput?: HasAccessOutputResolvers<ContextType>;
  InspireBillingPeriods?: InspireBillingPeriodsResolvers<ContextType>;
  InspireBillingTypes?: InspireBillingTypesResolvers<ContextType>;
  InspireCurrency?: InspireCurrencyResolvers<ContextType>;
  InspireMetadata?: InspireMetadataResolvers<ContextType>;
  InspirePaymentLinkItem?: InspirePaymentLinkItemResolvers<ContextType>;
  InspireProduct?: InspireProductResolvers<ContextType>;
  InspireProductFiltered?: InspireProductFilteredResolvers<ContextType>;
  InspireProductPriceTier?: InspireProductPriceTierResolvers<ContextType>;
  InspireProductPrices?: InspireProductPricesResolvers<ContextType>;
  InspireRecurringUsageTypes?: InspireRecurringUsageTypesResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  LiveEvent?: LiveEventResolvers<ContextType>;
  LiveEventConfigOutput?: LiveEventConfigOutputResolvers<ContextType>;
  LiveEventGoLiveOutput?: LiveEventGoLiveOutputResolvers<ContextType>;
  LiveEventKind?: LiveEventKindResolvers<ContextType>;
  LiveEventPasswordCheck?: LiveEventPasswordCheckResolvers<ContextType>;
  LiveEventSlugExists?: LiveEventSlugExistsResolvers<ContextType>;
  LiveEventStopLiveOutput?: LiveEventStopLiveOutputResolvers<ContextType>;
  Me?: MeResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  MediaAudio?: MediaAudioResolvers<ContextType>;
  MediaCustomizationOutput?: MediaCustomizationOutputResolvers<ContextType>;
  MediaFromLiveResult?: MediaFromLiveResultResolvers<ContextType>;
  MediaPhoto?: MediaPhotoResolvers<ContextType>;
  MediaRouteContent?: MediaRouteContentResolvers<ContextType>;
  MediaRouteUnion?: MediaRouteUnionResolvers<ContextType>;
  MediaSubtitle?: MediaSubtitleResolvers<ContextType>;
  MediaUnion?: MediaUnionResolvers<ContextType>;
  MediaVideo?: MediaVideoResolvers<ContextType>;
  Menu?: MenuResolvers<ContextType>;
  MenuSortingOutput?: MenuSortingOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MyProducts?: MyProductsResolvers<ContextType>;
  NotificationOutput?: NotificationOutputResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationKind?: OrganizationKindResolvers<ContextType>;
  OrganizationOneSignalOutput?: OrganizationOneSignalOutputResolvers<ContextType>;
  OrganizationPasswordCheck?: OrganizationPasswordCheckResolvers<ContextType>;
  OrganizationPublic?: OrganizationPublicResolvers<ContextType>;
  OrganizationPublicCustomization?: OrganizationPublicCustomizationResolvers<ContextType>;
  OrganizationPublicOutput?: OrganizationPublicOutputResolvers<ContextType>;
  OrganizationPublicSettings?: OrganizationPublicSettingsResolvers<ContextType>;
  OrganizationSettings?: OrganizationSettingsResolvers<ContextType>;
  PaginatedAccountsOutput?: PaginatedAccountsOutputResolvers<ContextType>;
  PaginatedBillboardsOutput?: PaginatedBillboardsOutputResolvers<ContextType>;
  PaginatedCategoriesOutput?: PaginatedCategoriesOutputResolvers<ContextType>;
  PaginatedCommentsOutput?: PaginatedCommentsOutputResolvers<ContextType>;
  PaginatedLiveEventsOutput?: PaginatedLiveEventsOutputResolvers<ContextType>;
  PaginatedMediaUnion?: PaginatedMediaUnionResolvers<ContextType>;
  PaginatedMenusOutput?: PaginatedMenusOutputResolvers<ContextType>;
  PaginatedNotificationOutput?: PaginatedNotificationOutputResolvers<ContextType>;
  PaginatedPostsOutput?: PaginatedPostsOutputResolvers<ContextType>;
  PaginatedReportsOutput?: PaginatedReportsOutputResolvers<ContextType>;
  PaginatedRolesOutput?: PaginatedRolesOutputResolvers<ContextType>;
  PaginatedSearchResultOutput?: PaginatedSearchResultOutputResolvers<ContextType>;
  Parameters?: ParametersResolvers<ContextType>;
  PasswordChanged?: PasswordChangedResolvers<ContextType>;
  PasswordOnlyChanged?: PasswordOnlyChangedResolvers<ContextType>;
  PermissionDto?: PermissionDtoResolvers<ContextType>;
  PinnedChannelOutput?: PinnedChannelOutputResolvers<ContextType>;
  PlaylistOutput?: PlaylistOutputResolvers<ContextType>;
  PlaylistsOutput?: PlaylistsOutputResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  PostKind?: PostKindResolvers<ContextType>;
  PostPasswordCheck?: PostPasswordCheckResolvers<ContextType>;
  PostReactions?: PostReactionsResolvers<ContextType>;
  PostSlugExists?: PostSlugExistsResolvers<ContextType>;
  PriceTierOutput?: PriceTierOutputResolvers<ContextType>;
  PricingModelOutput?: PricingModelOutputResolvers<ContextType>;
  ProductOutput?: ProductOutputResolvers<ContextType>;
  ProductPriceOutput?: ProductPriceOutputResolvers<ContextType>;
  ProductPricesOutput?: ProductPricesOutputResolvers<ContextType>;
  Profile?: ProfileResolvers<ContextType>;
  ProfileAvatar?: ProfileAvatarResolvers<ContextType>;
  PublicChannelOutput?: PublicChannelOutputResolvers<ContextType>;
  PublishRemoteConfig?: PublishRemoteConfigResolvers<ContextType>;
  PushNotificationOutput?: PushNotificationOutputResolvers<ContextType>;
  PushNotificationResult?: PushNotificationResultResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReactionsAggregate?: ReactionsAggregateResolvers<ContextType>;
  RecurringMeteredUsagesOutput?: RecurringMeteredUsagesOutputResolvers<ContextType>;
  RecurringUsageTypesOutput?: RecurringUsageTypesOutputResolvers<ContextType>;
  RefreshSignIn?: RefreshSignInResolvers<ContextType>;
  RefreshToken?: RefreshTokenResolvers<ContextType>;
  Report?: ReportResolvers<ContextType>;
  ReportSubjectUnion?: ReportSubjectUnionResolvers<ContextType>;
  ReportedAccountOutput?: ReportedAccountOutputResolvers<ContextType>;
  ResponseAccountsCount?: ResponseAccountsCountResolvers<ContextType>;
  ResponseAvailabilityOutput?: ResponseAvailabilityOutputResolvers<ContextType>;
  ResponseCustomFieldsOutput?: ResponseCustomFieldsOutputResolvers<ContextType>;
  ResponseEmailSendedDTO?: ResponseEmailSendedDtoResolvers<ContextType>;
  ResponseFieldOutput?: ResponseFieldOutputResolvers<ContextType>;
  ResponseMediaUploadOutput?: ResponseMediaUploadOutputResolvers<ContextType>;
  ResponseUploadCreation?: ResponseUploadCreationResolvers<ContextType>;
  ResponseUploadOutput?: ResponseUploadOutputResolvers<ContextType>;
  RolesDto?: RolesDtoResolvers<ContextType>;
  RolesMembersOutput?: RolesMembersOutputResolvers<ContextType>;
  SearchCategory?: SearchCategoryResolvers<ContextType>;
  SearchCategoryHead?: SearchCategoryHeadResolvers<ContextType>;
  SearchLiveEvent?: SearchLiveEventResolvers<ContextType>;
  SearchPost?: SearchPostResolvers<ContextType>;
  SearchResult?: SearchResultResolvers<ContextType>;
  SearchTag?: SearchTagResolvers<ContextType>;
  SearchUpdateChannel?: SearchUpdateChannelResolvers<ContextType>;
  SingIn?: SingInResolvers<ContextType>;
  SubjectDto?: SubjectDtoResolvers<ContextType>;
  TagOutput?: TagOutputResolvers<ContextType>;
  TagsOutput?: TagsOutputResolvers<ContextType>;
  VerifyMail?: VerifyMailResolvers<ContextType>;
  VoidScalar?: GraphQLScalarType;
};



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
export const ForgetAccountDocument = gql`
    mutation ForgetAccount($forgetAccountId: ID!, $input: ForgetAccountInput!) {
  forgetAccount(id: $forgetAccountId, input: $input) {
    email
  }
}
    `;
export type ForgetAccountMutationFn = Apollo.MutationFunction<ForgetAccountMutation, ForgetAccountMutationVariables>;
export type ForgetAccountComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ForgetAccountMutation, ForgetAccountMutationVariables>, 'mutation'>;

    export const ForgetAccountComponent = (props: ForgetAccountComponentProps) => (
      <ApolloReactComponents.Mutation<ForgetAccountMutation, ForgetAccountMutationVariables> mutation={ForgetAccountDocument} {...props} />
    );
    

/**
 * __useForgetAccountMutation__
 *
 * To run a mutation, you first call `useForgetAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgetAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgetAccountMutation, { data, loading, error }] = useForgetAccountMutation({
 *   variables: {
 *      forgetAccountId: // value for 'forgetAccountId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useForgetAccountMutation(baseOptions?: Apollo.MutationHookOptions<ForgetAccountMutation, ForgetAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgetAccountMutation, ForgetAccountMutationVariables>(ForgetAccountDocument, options);
      }
export type ForgetAccountMutationHookResult = ReturnType<typeof useForgetAccountMutation>;
export type ForgetAccountMutationResult = Apollo.MutationResult<ForgetAccountMutation>;
export type ForgetAccountMutationOptions = Apollo.BaseMutationOptions<ForgetAccountMutation, ForgetAccountMutationVariables>;
export const UpdateMyAccountDocument = gql`
    mutation UpdateMyAccount($payload: UpdateMyAccountInput!) {
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
    avatar {
      imgPath
    }
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
export const AddPendingOrderDocument = gql`
    mutation addPendingOrder($product: String!) {
  addPendingOrder(payload: {product: $product}) {
    id
    status
    account
    product
  }
}
    `;
export type AddPendingOrderMutationFn = Apollo.MutationFunction<AddPendingOrderMutation, AddPendingOrderMutationVariables>;
export type AddPendingOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddPendingOrderMutation, AddPendingOrderMutationVariables>, 'mutation'>;

    export const AddPendingOrderComponent = (props: AddPendingOrderComponentProps) => (
      <ApolloReactComponents.Mutation<AddPendingOrderMutation, AddPendingOrderMutationVariables> mutation={AddPendingOrderDocument} {...props} />
    );
    

/**
 * __useAddPendingOrderMutation__
 *
 * To run a mutation, you first call `useAddPendingOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPendingOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPendingOrderMutation, { data, loading, error }] = useAddPendingOrderMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useAddPendingOrderMutation(baseOptions?: Apollo.MutationHookOptions<AddPendingOrderMutation, AddPendingOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPendingOrderMutation, AddPendingOrderMutationVariables>(AddPendingOrderDocument, options);
      }
export type AddPendingOrderMutationHookResult = ReturnType<typeof useAddPendingOrderMutation>;
export type AddPendingOrderMutationResult = Apollo.MutationResult<AddPendingOrderMutation>;
export type AddPendingOrderMutationOptions = Apollo.BaseMutationOptions<AddPendingOrderMutation, AddPendingOrderMutationVariables>;
export const ConfirmOrderDocument = gql`
    mutation ConfirmOrder($payload: ConfirmOrder!) {
  confirmOrder(payload: $payload) {
    id
    status
    subscription
    invoices
  }
}
    `;
export type ConfirmOrderMutationFn = Apollo.MutationFunction<ConfirmOrderMutation, ConfirmOrderMutationVariables>;
export type ConfirmOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ConfirmOrderMutation, ConfirmOrderMutationVariables>, 'mutation'>;

    export const ConfirmOrderComponent = (props: ConfirmOrderComponentProps) => (
      <ApolloReactComponents.Mutation<ConfirmOrderMutation, ConfirmOrderMutationVariables> mutation={ConfirmOrderDocument} {...props} />
    );
    

/**
 * __useConfirmOrderMutation__
 *
 * To run a mutation, you first call `useConfirmOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmOrderMutation, { data, loading, error }] = useConfirmOrderMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useConfirmOrderMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmOrderMutation, ConfirmOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmOrderMutation, ConfirmOrderMutationVariables>(ConfirmOrderDocument, options);
      }
export type ConfirmOrderMutationHookResult = ReturnType<typeof useConfirmOrderMutation>;
export type ConfirmOrderMutationResult = Apollo.MutationResult<ConfirmOrderMutation>;
export type ConfirmOrderMutationOptions = Apollo.BaseMutationOptions<ConfirmOrderMutation, ConfirmOrderMutationVariables>;
export const OneTimePaymentDocument = gql`
    mutation OneTimePayment($payload: ConfirmOrder!) {
  oneTimePayment(payload: $payload) {
    id
    status
    subscription
    invoices
  }
}
    `;
export type OneTimePaymentMutationFn = Apollo.MutationFunction<OneTimePaymentMutation, OneTimePaymentMutationVariables>;
export type OneTimePaymentComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<OneTimePaymentMutation, OneTimePaymentMutationVariables>, 'mutation'>;

    export const OneTimePaymentComponent = (props: OneTimePaymentComponentProps) => (
      <ApolloReactComponents.Mutation<OneTimePaymentMutation, OneTimePaymentMutationVariables> mutation={OneTimePaymentDocument} {...props} />
    );
    

/**
 * __useOneTimePaymentMutation__
 *
 * To run a mutation, you first call `useOneTimePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOneTimePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oneTimePaymentMutation, { data, loading, error }] = useOneTimePaymentMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useOneTimePaymentMutation(baseOptions?: Apollo.MutationHookOptions<OneTimePaymentMutation, OneTimePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OneTimePaymentMutation, OneTimePaymentMutationVariables>(OneTimePaymentDocument, options);
      }
export type OneTimePaymentMutationHookResult = ReturnType<typeof useOneTimePaymentMutation>;
export type OneTimePaymentMutationResult = Apollo.MutationResult<OneTimePaymentMutation>;
export type OneTimePaymentMutationOptions = Apollo.BaseMutationOptions<OneTimePaymentMutation, OneTimePaymentMutationVariables>;
export const OrganizationPasswordCheckDocument = gql`
    mutation OrganizationPasswordCheck($organizationId: ID!, $password: String!) {
  organizationPasswordCheck(organizationId: $organizationId, password: $password) {
    correct
  }
}
    `;
export type OrganizationPasswordCheckMutationFn = Apollo.MutationFunction<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables>;
export type OrganizationPasswordCheckComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables>, 'mutation'>;

    export const OrganizationPasswordCheckComponent = (props: OrganizationPasswordCheckComponentProps) => (
      <ApolloReactComponents.Mutation<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables> mutation={OrganizationPasswordCheckDocument} {...props} />
    );
    

/**
 * __useOrganizationPasswordCheckMutation__
 *
 * To run a mutation, you first call `useOrganizationPasswordCheckMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrganizationPasswordCheckMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [organizationPasswordCheckMutation, { data, loading, error }] = useOrganizationPasswordCheckMutation({
 *   variables: {
 *      organizationId: // value for 'organizationId'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useOrganizationPasswordCheckMutation(baseOptions?: Apollo.MutationHookOptions<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables>(OrganizationPasswordCheckDocument, options);
      }
export type OrganizationPasswordCheckMutationHookResult = ReturnType<typeof useOrganizationPasswordCheckMutation>;
export type OrganizationPasswordCheckMutationResult = Apollo.MutationResult<OrganizationPasswordCheckMutation>;
export type OrganizationPasswordCheckMutationOptions = Apollo.BaseMutationOptions<OrganizationPasswordCheckMutation, OrganizationPasswordCheckMutationVariables>;
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
export const AddViewDocument = gql`
    mutation AddView($postId: String!) {
  addView(postId: $postId) {
    countViewsTotal
  }
}
    `;
export type AddViewMutationFn = Apollo.MutationFunction<AddViewMutation, AddViewMutationVariables>;
export type AddViewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddViewMutation, AddViewMutationVariables>, 'mutation'>;

    export const AddViewComponent = (props: AddViewComponentProps) => (
      <ApolloReactComponents.Mutation<AddViewMutation, AddViewMutationVariables> mutation={AddViewDocument} {...props} />
    );
    

/**
 * __useAddViewMutation__
 *
 * To run a mutation, you first call `useAddViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addViewMutation, { data, loading, error }] = useAddViewMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useAddViewMutation(baseOptions?: Apollo.MutationHookOptions<AddViewMutation, AddViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddViewMutation, AddViewMutationVariables>(AddViewDocument, options);
      }
export type AddViewMutationHookResult = ReturnType<typeof useAddViewMutation>;
export type AddViewMutationResult = Apollo.MutationResult<AddViewMutation>;
export type AddViewMutationOptions = Apollo.BaseMutationOptions<AddViewMutation, AddViewMutationVariables>;
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
export const CreateUploadDocument = gql`
    mutation CreateUpload($payload: CreateUploadInput!) {
  createUpload(payload: $payload) {
    upload {
      bucket
      createdAt
      expireIn
      expired
      filename
      id
      isExpiredCalc
      status
      url
    }
    media {
      account
      id
    }
  }
}
    `;
export type CreateUploadMutationFn = Apollo.MutationFunction<CreateUploadMutation, CreateUploadMutationVariables>;
export type CreateUploadComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUploadMutation, CreateUploadMutationVariables>, 'mutation'>;

    export const CreateUploadComponent = (props: CreateUploadComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUploadMutation, CreateUploadMutationVariables> mutation={CreateUploadDocument} {...props} />
    );
    

/**
 * __useCreateUploadMutation__
 *
 * To run a mutation, you first call `useCreateUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUploadMutation, { data, loading, error }] = useCreateUploadMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateUploadMutation(baseOptions?: Apollo.MutationHookOptions<CreateUploadMutation, CreateUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUploadMutation, CreateUploadMutationVariables>(CreateUploadDocument, options);
      }
export type CreateUploadMutationHookResult = ReturnType<typeof useCreateUploadMutation>;
export type CreateUploadMutationResult = Apollo.MutationResult<CreateUploadMutation>;
export type CreateUploadMutationOptions = Apollo.BaseMutationOptions<CreateUploadMutation, CreateUploadMutationVariables>;
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
    id
    fields {
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
      is_admin
      is_super_user
      is_tenant_user
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
        route {
          ... on MediaRouteContent {
            content
            contentWeb
          }
        }
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
      sort
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
      children(filter: {sortBy: "sort.asc"}) {
        parentId
        slug
        description
        featuredAt
        sort
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
export const GetPublicCategoriesDocument = gql`
    query GetPublicCategories($filter: CategoryFilter) {
  publicCategories(filter: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
      id
      parentId
      slug
      sort
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
      children(filter: {sortBy: "sort.asc"}) {
        parentId
        slug
        description
        featuredAt
        sort
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
export type GetPublicCategoriesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>, 'query'>;

    export const GetPublicCategoriesComponent = (props: GetPublicCategoriesComponentProps) => (
      <ApolloReactComponents.Query<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables> query={GetPublicCategoriesDocument} {...props} />
    );
    

/**
 * __useGetPublicCategoriesQuery__
 *
 * To run a query within a React component, call `useGetPublicCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicCategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPublicCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>(GetPublicCategoriesDocument, options);
      }
export function useGetPublicCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>(GetPublicCategoriesDocument, options);
        }
export type GetPublicCategoriesQueryHookResult = ReturnType<typeof useGetPublicCategoriesQuery>;
export type GetPublicCategoriesLazyQueryHookResult = ReturnType<typeof useGetPublicCategoriesLazyQuery>;
export type GetPublicCategoriesQueryResult = Apollo.QueryResult<GetPublicCategoriesQuery, GetPublicCategoriesQueryVariables>;
export const GetCategoriesCardsDocument = gql`
    query GetCategoriesCards($filter: CategoryFilter) {
  categories(filter: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
      id
      name
      access
      description
      pinnedStatus {
        pinned
      }
      slug
      kind
      customization {
        thumbnail {
          imgPath
        }
      }
      children(filter: {sortBy: "sort.asc"}) {
        id
        name
        access
        description
        pinnedStatus {
          pinned
        }
        slug
        kind
        customization {
          thumbnail {
            imgPath
          }
        }
      }
    }
  }
}
    `;
export type GetCategoriesCardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>, 'query'>;

    export const GetCategoriesCardsComponent = (props: GetCategoriesCardsComponentProps) => (
      <ApolloReactComponents.Query<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables> query={GetCategoriesCardsDocument} {...props} />
    );
    

/**
 * __useGetCategoriesCardsQuery__
 *
 * To run a query within a React component, call `useGetCategoriesCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesCardsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetCategoriesCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>(GetCategoriesCardsDocument, options);
      }
export function useGetCategoriesCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>(GetCategoriesCardsDocument, options);
        }
export type GetCategoriesCardsQueryHookResult = ReturnType<typeof useGetCategoriesCardsQuery>;
export type GetCategoriesCardsLazyQueryHookResult = ReturnType<typeof useGetCategoriesCardsLazyQuery>;
export type GetCategoriesCardsQueryResult = Apollo.QueryResult<GetCategoriesCardsQuery, GetCategoriesCardsQueryVariables>;
export const GetPublicCategoriesCardsDocument = gql`
    query GetPublicCategoriesCards($filter: CategoryFilter) {
  publicCategories(filter: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageNumberIsGood
    pageSize
    rows {
      id
      name
      description
      slug
      kind
      customization {
        thumbnail {
          imgPath
        }
      }
      children(filter: {sortBy: "sort.asc"}) {
        id
        name
        description
        slug
        kind
        customization {
          thumbnail {
            imgPath
          }
        }
      }
    }
  }
}
    `;
export type GetPublicCategoriesCardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>, 'query'>;

    export const GetPublicCategoriesCardsComponent = (props: GetPublicCategoriesCardsComponentProps) => (
      <ApolloReactComponents.Query<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables> query={GetPublicCategoriesCardsDocument} {...props} />
    );
    

/**
 * __useGetPublicCategoriesCardsQuery__
 *
 * To run a query within a React component, call `useGetPublicCategoriesCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicCategoriesCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicCategoriesCardsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPublicCategoriesCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>(GetPublicCategoriesCardsDocument, options);
      }
export function useGetPublicCategoriesCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>(GetPublicCategoriesCardsDocument, options);
        }
export type GetPublicCategoriesCardsQueryHookResult = ReturnType<typeof useGetPublicCategoriesCardsQuery>;
export type GetPublicCategoriesCardsLazyQueryHookResult = ReturnType<typeof useGetPublicCategoriesCardsLazyQuery>;
export type GetPublicCategoriesCardsQueryResult = Apollo.QueryResult<GetPublicCategoriesCardsQuery, GetPublicCategoriesCardsQueryVariables>;
export const CategoryDocument = gql`
    query Category($slug: String, $postFilter: PostFilter) {
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
    posts(filters: $postFilter) {
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
            thumbnailPath
            baseUrl
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
        type
      }
    }
    children(filter: {sortBy: "sort.asc"}) {
      sort
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
export type CategoryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryQuery, CategoryQueryVariables>, 'query'>;

    export const CategoryComponent = (props: CategoryComponentProps) => (
      <ApolloReactComponents.Query<CategoryQuery, CategoryQueryVariables> query={CategoryDocument} {...props} />
    );
    

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      postFilter: // value for 'postFilter'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const CategoryKindDocument = gql`
    query CategoryKind($slug: String) {
  categoryKind(slug: $slug) {
    id
    access
    kind
    entitlements
    name
  }
}
    `;
export type CategoryKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CategoryKindQuery, CategoryKindQueryVariables>, 'query'>;

    export const CategoryKindComponent = (props: CategoryKindComponentProps) => (
      <ApolloReactComponents.Query<CategoryKindQuery, CategoryKindQueryVariables> query={CategoryKindDocument} {...props} />
    );
    

/**
 * __useCategoryKindQuery__
 *
 * To run a query within a React component, call `useCategoryKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryKindQuery(baseOptions?: Apollo.QueryHookOptions<CategoryKindQuery, CategoryKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryKindQuery, CategoryKindQueryVariables>(CategoryKindDocument, options);
      }
export function useCategoryKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryKindQuery, CategoryKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryKindQuery, CategoryKindQueryVariables>(CategoryKindDocument, options);
        }
export type CategoryKindQueryHookResult = ReturnType<typeof useCategoryKindQuery>;
export type CategoryKindLazyQueryHookResult = ReturnType<typeof useCategoryKindLazyQuery>;
export type CategoryKindQueryResult = Apollo.QueryResult<CategoryKindQuery, CategoryKindQueryVariables>;
export const ChannelDocument = gql`
    query Channel($slug: String) {
  channel(slug: $slug) {
    ... on AvailableChannel {
      access
      id
      kind
      description
      geofence
      slug
      name
      __typename
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
      }
    }
    ... on GeolockedChannel {
      id
      name
      slug
      kind
      __typename
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
      }
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
export const PublicChannelDocument = gql`
    query PublicChannel($slug: String) {
  getPublicChannel(slug: $slug) {
    id
    name
    kind
    customization {
      icon {
        dark {
          imgPath
        }
        light {
          imgPath
        }
      }
      logo {
        dark {
          imgPath
        }
        light {
          imgPath
        }
      }
    }
    slug
  }
}
    `;
export type PublicChannelComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicChannelQuery, PublicChannelQueryVariables>, 'query'>;

    export const PublicChannelComponent = (props: PublicChannelComponentProps) => (
      <ApolloReactComponents.Query<PublicChannelQuery, PublicChannelQueryVariables> query={PublicChannelDocument} {...props} />
    );
    

/**
 * __usePublicChannelQuery__
 *
 * To run a query within a React component, call `usePublicChannelQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicChannelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicChannelQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePublicChannelQuery(baseOptions?: Apollo.QueryHookOptions<PublicChannelQuery, PublicChannelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicChannelQuery, PublicChannelQueryVariables>(PublicChannelDocument, options);
      }
export function usePublicChannelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicChannelQuery, PublicChannelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicChannelQuery, PublicChannelQueryVariables>(PublicChannelDocument, options);
        }
export type PublicChannelQueryHookResult = ReturnType<typeof usePublicChannelQuery>;
export type PublicChannelLazyQueryHookResult = ReturnType<typeof usePublicChannelLazyQuery>;
export type PublicChannelQueryResult = Apollo.QueryResult<PublicChannelQuery, PublicChannelQueryVariables>;
export const ChannelKindDocument = gql`
    query ChannelKind($slug: String) {
  channelKind(slug: $slug) {
    id
    kind
    slug
    geofence
    name
  }
}
    `;
export type ChannelKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChannelKindQuery, ChannelKindQueryVariables>, 'query'>;

    export const ChannelKindComponent = (props: ChannelKindComponentProps) => (
      <ApolloReactComponents.Query<ChannelKindQuery, ChannelKindQueryVariables> query={ChannelKindDocument} {...props} />
    );
    

/**
 * __useChannelKindQuery__
 *
 * To run a query within a React component, call `useChannelKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChannelKindQuery(baseOptions?: Apollo.QueryHookOptions<ChannelKindQuery, ChannelKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelKindQuery, ChannelKindQueryVariables>(ChannelKindDocument, options);
      }
export function useChannelKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelKindQuery, ChannelKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelKindQuery, ChannelKindQueryVariables>(ChannelKindDocument, options);
        }
export type ChannelKindQueryHookResult = ReturnType<typeof useChannelKindQuery>;
export type ChannelKindLazyQueryHookResult = ReturnType<typeof useChannelKindLazyQuery>;
export type ChannelKindQueryResult = Apollo.QueryResult<ChannelKindQuery, ChannelKindQueryVariables>;
export const ChannelEntitlementsDocument = gql`
    query ChannelEntitlements($id: ID, $slug: String) {
  channel(id: $id, slug: $slug) {
    ... on AvailableChannel {
      id
      access
      entitlements
    }
  }
}
    `;
export type ChannelEntitlementsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>, 'query'>;

    export const ChannelEntitlementsComponent = (props: ChannelEntitlementsComponentProps) => (
      <ApolloReactComponents.Query<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables> query={ChannelEntitlementsDocument} {...props} />
    );
    

/**
 * __useChannelEntitlementsQuery__
 *
 * To run a query within a React component, call `useChannelEntitlementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChannelEntitlementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChannelEntitlementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useChannelEntitlementsQuery(baseOptions?: Apollo.QueryHookOptions<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>(ChannelEntitlementsDocument, options);
      }
export function useChannelEntitlementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>(ChannelEntitlementsDocument, options);
        }
export type ChannelEntitlementsQueryHookResult = ReturnType<typeof useChannelEntitlementsQuery>;
export type ChannelEntitlementsLazyQueryHookResult = ReturnType<typeof useChannelEntitlementsLazyQuery>;
export type ChannelEntitlementsQueryResult = Apollo.QueryResult<ChannelEntitlementsQuery, ChannelEntitlementsQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($filter: ChannelFindAllFilter!) {
  channels(filter: $filter) {
    ... on AvailableChannel {
      id
      access
      kind
      description
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        thumbnail {
          imgPath
        }
      }
      geofence
      slug
      name
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      kind
      __typename
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        thumbnail {
          imgPath
        }
      }
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
export const PublicChannelsDocument = gql`
    query PublicChannels($filter: ChannelFindAllFilter!) {
  publicChannels(filter: $filter) {
    ... on AvailableChannel {
      id
      kind
      access
      description
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        thumbnail {
          imgPath
        }
      }
      geofence
      slug
      name
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      kind
      __typename
      customization {
        icon {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        logo {
          dark {
            imgPath
          }
          light {
            imgPath
          }
        }
        thumbnail {
          imgPath
        }
      }
    }
  }
}
    `;
export type PublicChannelsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicChannelsQuery, PublicChannelsQueryVariables>, 'query'> & ({ variables: PublicChannelsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const PublicChannelsComponent = (props: PublicChannelsComponentProps) => (
      <ApolloReactComponents.Query<PublicChannelsQuery, PublicChannelsQueryVariables> query={PublicChannelsDocument} {...props} />
    );
    

/**
 * __usePublicChannelsQuery__
 *
 * To run a query within a React component, call `usePublicChannelsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicChannelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicChannelsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePublicChannelsQuery(baseOptions: Apollo.QueryHookOptions<PublicChannelsQuery, PublicChannelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicChannelsQuery, PublicChannelsQueryVariables>(PublicChannelsDocument, options);
      }
export function usePublicChannelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicChannelsQuery, PublicChannelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicChannelsQuery, PublicChannelsQueryVariables>(PublicChannelsDocument, options);
        }
export type PublicChannelsQueryHookResult = ReturnType<typeof usePublicChannelsQuery>;
export type PublicChannelsLazyQueryHookResult = ReturnType<typeof usePublicChannelsLazyQuery>;
export type PublicChannelsQueryResult = Apollo.QueryResult<PublicChannelsQuery, PublicChannelsQueryVariables>;
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
export const EnvConfigDocument = gql`
    query EnvConfig($origin: String!) {
  envConfig(origin: $origin) {
    result
  }
}
    `;
export type EnvConfigComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EnvConfigQuery, EnvConfigQueryVariables>, 'query'> & ({ variables: EnvConfigQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const EnvConfigComponent = (props: EnvConfigComponentProps) => (
      <ApolloReactComponents.Query<EnvConfigQuery, EnvConfigQueryVariables> query={EnvConfigDocument} {...props} />
    );
    

/**
 * __useEnvConfigQuery__
 *
 * To run a query within a React component, call `useEnvConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useEnvConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEnvConfigQuery({
 *   variables: {
 *      origin: // value for 'origin'
 *   },
 * });
 */
export function useEnvConfigQuery(baseOptions: Apollo.QueryHookOptions<EnvConfigQuery, EnvConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EnvConfigQuery, EnvConfigQueryVariables>(EnvConfigDocument, options);
      }
export function useEnvConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EnvConfigQuery, EnvConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EnvConfigQuery, EnvConfigQueryVariables>(EnvConfigDocument, options);
        }
export type EnvConfigQueryHookResult = ReturnType<typeof useEnvConfigQuery>;
export type EnvConfigLazyQueryHookResult = ReturnType<typeof useEnvConfigLazyQuery>;
export type EnvConfigQueryResult = Apollo.QueryResult<EnvConfigQuery, EnvConfigQueryVariables>;
export const LiveEventDocument = gql`
    query LiveEvent($slug: String) {
  liveEvent(slug: $slug) {
    id
    access
    createdAt
    description
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
export type LiveEventComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LiveEventQuery, LiveEventQueryVariables>, 'query'>;

    export const LiveEventComponent = (props: LiveEventComponentProps) => (
      <ApolloReactComponents.Query<LiveEventQuery, LiveEventQueryVariables> query={LiveEventDocument} {...props} />
    );
    

/**
 * __useLiveEventQuery__
 *
 * To run a query within a React component, call `useLiveEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveEventQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLiveEventQuery(baseOptions?: Apollo.QueryHookOptions<LiveEventQuery, LiveEventQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LiveEventQuery, LiveEventQueryVariables>(LiveEventDocument, options);
      }
export function useLiveEventLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LiveEventQuery, LiveEventQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LiveEventQuery, LiveEventQueryVariables>(LiveEventDocument, options);
        }
export type LiveEventQueryHookResult = ReturnType<typeof useLiveEventQuery>;
export type LiveEventLazyQueryHookResult = ReturnType<typeof useLiveEventLazyQuery>;
export type LiveEventQueryResult = Apollo.QueryResult<LiveEventQuery, LiveEventQueryVariables>;
export const LiveEventKindDocument = gql`
    query LiveEventKind($slug: String) {
  liveEventKind(slug: $slug) {
    id
    access
    kind
    entitlements
    slug
    title
  }
}
    `;
export type LiveEventKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LiveEventKindQuery, LiveEventKindQueryVariables>, 'query'>;

    export const LiveEventKindComponent = (props: LiveEventKindComponentProps) => (
      <ApolloReactComponents.Query<LiveEventKindQuery, LiveEventKindQueryVariables> query={LiveEventKindDocument} {...props} />
    );
    

/**
 * __useLiveEventKindQuery__
 *
 * To run a query within a React component, call `useLiveEventKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiveEventKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiveEventKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useLiveEventKindQuery(baseOptions?: Apollo.QueryHookOptions<LiveEventKindQuery, LiveEventKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LiveEventKindQuery, LiveEventKindQueryVariables>(LiveEventKindDocument, options);
      }
export function useLiveEventKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LiveEventKindQuery, LiveEventKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LiveEventKindQuery, LiveEventKindQueryVariables>(LiveEventKindDocument, options);
        }
export type LiveEventKindQueryHookResult = ReturnType<typeof useLiveEventKindQuery>;
export type LiveEventKindLazyQueryHookResult = ReturnType<typeof useLiveEventKindLazyQuery>;
export type LiveEventKindQueryResult = Apollo.QueryResult<LiveEventKindQuery, LiveEventKindQueryVariables>;
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
export const GetPublicLiveEventsDocument = gql`
    query GetPublicLiveEvents($filter: LiveEventFilter) {
  publicLiveEvents(filter: $filter) {
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
export type GetPublicLiveEventsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>, 'query'>;

    export const GetPublicLiveEventsComponent = (props: GetPublicLiveEventsComponentProps) => (
      <ApolloReactComponents.Query<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables> query={GetPublicLiveEventsDocument} {...props} />
    );
    

/**
 * __useGetPublicLiveEventsQuery__
 *
 * To run a query within a React component, call `useGetPublicLiveEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicLiveEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicLiveEventsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPublicLiveEventsQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>(GetPublicLiveEventsDocument, options);
      }
export function useGetPublicLiveEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>(GetPublicLiveEventsDocument, options);
        }
export type GetPublicLiveEventsQueryHookResult = ReturnType<typeof useGetPublicLiveEventsQuery>;
export type GetPublicLiveEventsLazyQueryHookResult = ReturnType<typeof useGetPublicLiveEventsLazyQuery>;
export type GetPublicLiveEventsQueryResult = Apollo.QueryResult<GetPublicLiveEventsQuery, GetPublicLiveEventsQueryVariables>;
export const MenusDocument = gql`
    query Menus($filter: MenuFilter) {
  menus(filter: $filter) {
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
 *      filter: // value for 'filter'
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
export const PublicMenusDocument = gql`
    query PublicMenus($filter: MenuFilter) {
  publicMenus(filter: $filter) {
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
export type PublicMenusComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PublicMenusQuery, PublicMenusQueryVariables>, 'query'>;

    export const PublicMenusComponent = (props: PublicMenusComponentProps) => (
      <ApolloReactComponents.Query<PublicMenusQuery, PublicMenusQueryVariables> query={PublicMenusDocument} {...props} />
    );
    

/**
 * __usePublicMenusQuery__
 *
 * To run a query within a React component, call `usePublicMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicMenusQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function usePublicMenusQuery(baseOptions?: Apollo.QueryHookOptions<PublicMenusQuery, PublicMenusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PublicMenusQuery, PublicMenusQueryVariables>(PublicMenusDocument, options);
      }
export function usePublicMenusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublicMenusQuery, PublicMenusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PublicMenusQuery, PublicMenusQueryVariables>(PublicMenusDocument, options);
        }
export type PublicMenusQueryHookResult = ReturnType<typeof usePublicMenusQuery>;
export type PublicMenusLazyQueryHookResult = ReturnType<typeof usePublicMenusLazyQuery>;
export type PublicMenusQueryResult = Apollo.QueryResult<PublicMenusQuery, PublicMenusQueryVariables>;
export const GetOrderResultDocument = gql`
    query getOrderResult($id: String!) {
  order(id: $id) {
    id
    account
    status
  }
}
    `;
export type GetOrderResultComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrderResultQuery, GetOrderResultQueryVariables>, 'query'> & ({ variables: GetOrderResultQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrderResultComponent = (props: GetOrderResultComponentProps) => (
      <ApolloReactComponents.Query<GetOrderResultQuery, GetOrderResultQueryVariables> query={GetOrderResultDocument} {...props} />
    );
    

/**
 * __useGetOrderResultQuery__
 *
 * To run a query within a React component, call `useGetOrderResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrderResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrderResultQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrderResultQuery(baseOptions: Apollo.QueryHookOptions<GetOrderResultQuery, GetOrderResultQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrderResultQuery, GetOrderResultQueryVariables>(GetOrderResultDocument, options);
      }
export function useGetOrderResultLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrderResultQuery, GetOrderResultQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrderResultQuery, GetOrderResultQueryVariables>(GetOrderResultDocument, options);
        }
export type GetOrderResultQueryHookResult = ReturnType<typeof useGetOrderResultQuery>;
export type GetOrderResultLazyQueryHookResult = ReturnType<typeof useGetOrderResultLazyQuery>;
export type GetOrderResultQueryResult = Apollo.QueryResult<GetOrderResultQuery, GetOrderResultQueryVariables>;
export const OrganizationKindDocument = gql`
    query OrganizationKind($id: ID!) {
  organizationKind(id: $id) {
    id
    kind
  }
}
    `;
export type OrganizationKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationKindQuery, OrganizationKindQueryVariables>, 'query'> & ({ variables: OrganizationKindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationKindComponent = (props: OrganizationKindComponentProps) => (
      <ApolloReactComponents.Query<OrganizationKindQuery, OrganizationKindQueryVariables> query={OrganizationKindDocument} {...props} />
    );
    

/**
 * __useOrganizationKindQuery__
 *
 * To run a query within a React component, call `useOrganizationKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationKindQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationKindQuery(baseOptions: Apollo.QueryHookOptions<OrganizationKindQuery, OrganizationKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationKindQuery, OrganizationKindQueryVariables>(OrganizationKindDocument, options);
      }
export function useOrganizationKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationKindQuery, OrganizationKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationKindQuery, OrganizationKindQueryVariables>(OrganizationKindDocument, options);
        }
export type OrganizationKindQueryHookResult = ReturnType<typeof useOrganizationKindQuery>;
export type OrganizationKindLazyQueryHookResult = ReturnType<typeof useOrganizationKindLazyQuery>;
export type OrganizationKindQueryResult = Apollo.QueryResult<OrganizationKindQuery, OrganizationKindQueryVariables>;
export const OrganizationEntitlementsDocument = gql`
    query OrganizationEntitlements($id: ID!) {
  organization(id: $id) {
    id
    entitlements
    access
  }
}
    `;
export type OrganizationEntitlementsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>, 'query'> & ({ variables: OrganizationEntitlementsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const OrganizationEntitlementsComponent = (props: OrganizationEntitlementsComponentProps) => (
      <ApolloReactComponents.Query<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables> query={OrganizationEntitlementsDocument} {...props} />
    );
    

/**
 * __useOrganizationEntitlementsQuery__
 *
 * To run a query within a React component, call `useOrganizationEntitlementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationEntitlementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationEntitlementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrganizationEntitlementsQuery(baseOptions: Apollo.QueryHookOptions<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>(OrganizationEntitlementsDocument, options);
      }
export function useOrganizationEntitlementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>(OrganizationEntitlementsDocument, options);
        }
export type OrganizationEntitlementsQueryHookResult = ReturnType<typeof useOrganizationEntitlementsQuery>;
export type OrganizationEntitlementsLazyQueryHookResult = ReturnType<typeof useOrganizationEntitlementsLazyQuery>;
export type OrganizationEntitlementsQueryResult = Apollo.QueryResult<OrganizationEntitlementsQuery, OrganizationEntitlementsQueryVariables>;
export const GetPlaylistDocument = gql`
    query GetPlaylist($id: ID!, $postsFilters: PostFilter!) {
  playlist(id: $id) {
    id
    title
    posts(postsFilters: $postsFilters) {
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
 *      postsFilters: // value for 'postsFilters'
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
export const PostDocument = gql`
    query Post($slug: String) {
  post(slug: $slug) {
    id
    access
    allowComments
    countComments
    countReactions
    countViewsTotal
    slug
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
        subtitles {
          id
          locale
          baseUrl
          vttPath
          label
        }
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
export type PostComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostQuery, PostQueryVariables>, 'query'>;

    export const PostComponent = (props: PostComponentProps) => (
      <ApolloReactComponents.Query<PostQuery, PostQueryVariables> query={PostDocument} {...props} />
    );
    

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostQuery(baseOptions?: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export const PostKindDocument = gql`
    query PostKind($slug: String) {
  postKind(slug: $slug) {
    id
    access
    kind
    title
    entitlements
    slug
  }
}
    `;
export type PostKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PostKindQuery, PostKindQueryVariables>, 'query'>;

    export const PostKindComponent = (props: PostKindComponentProps) => (
      <ApolloReactComponents.Query<PostKindQuery, PostKindQueryVariables> query={PostKindDocument} {...props} />
    );
    

/**
 * __usePostKindQuery__
 *
 * To run a query within a React component, call `usePostKindQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePostKindQuery(baseOptions?: Apollo.QueryHookOptions<PostKindQuery, PostKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostKindQuery, PostKindQueryVariables>(PostKindDocument, options);
      }
export function usePostKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostKindQuery, PostKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostKindQuery, PostKindQueryVariables>(PostKindDocument, options);
        }
export type PostKindQueryHookResult = ReturnType<typeof usePostKindQuery>;
export type PostKindLazyQueryHookResult = ReturnType<typeof usePostKindLazyQuery>;
export type PostKindQueryResult = Apollo.QueryResult<PostKindQuery, PostKindQueryVariables>;
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
      countViewsTotal
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
          thumbnailPath
          baseUrl
        }
        ... on MediaAudio {
          id
          duration
        }
        ... on MediaPhoto {
          id
          imgPath
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
export const GetPubicPostsDocument = gql`
    query GetPubicPosts($filter: PostFilter) {
  publicPosts(filters: $filter) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageCount
    total
    rows {
      id
      countViewsTotal
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
          thumbnailPath
          baseUrl
        }
        ... on MediaAudio {
          id
          duration
        }
        ... on MediaPhoto {
          id
          imgPath
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
export type GetPubicPostsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPubicPostsQuery, GetPubicPostsQueryVariables>, 'query'>;

    export const GetPubicPostsComponent = (props: GetPubicPostsComponentProps) => (
      <ApolloReactComponents.Query<GetPubicPostsQuery, GetPubicPostsQueryVariables> query={GetPubicPostsDocument} {...props} />
    );
    

/**
 * __useGetPubicPostsQuery__
 *
 * To run a query within a React component, call `useGetPubicPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPubicPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPubicPostsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPubicPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPubicPostsQuery, GetPubicPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPubicPostsQuery, GetPubicPostsQueryVariables>(GetPubicPostsDocument, options);
      }
export function useGetPubicPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPubicPostsQuery, GetPubicPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPubicPostsQuery, GetPubicPostsQueryVariables>(GetPubicPostsDocument, options);
        }
export type GetPubicPostsQueryHookResult = ReturnType<typeof useGetPubicPostsQuery>;
export type GetPubicPostsLazyQueryHookResult = ReturnType<typeof useGetPubicPostsLazyQuery>;
export type GetPubicPostsQueryResult = Apollo.QueryResult<GetPubicPostsQuery, GetPubicPostsQueryVariables>;
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
      countViewsTotal
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
        ... on MediaPhoto {
          id
          imgPath
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
export const GetPublicPostsCardsDocument = gql`
    query GetPublicPostsCards($filter: PostFilter) {
  publicPosts(filters: $filter) {
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
      countViewsTotal
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
        ... on MediaPhoto {
          id
          imgPath
        }
      }
      type
    }
  }
}
    `;
export type GetPublicPostsCardsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>, 'query'>;

    export const GetPublicPostsCardsComponent = (props: GetPublicPostsCardsComponentProps) => (
      <ApolloReactComponents.Query<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables> query={GetPublicPostsCardsDocument} {...props} />
    );
    

/**
 * __useGetPublicPostsCardsQuery__
 *
 * To run a query within a React component, call `useGetPublicPostsCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPublicPostsCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPublicPostsCardsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetPublicPostsCardsQuery(baseOptions?: Apollo.QueryHookOptions<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>(GetPublicPostsCardsDocument, options);
      }
export function useGetPublicPostsCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>(GetPublicPostsCardsDocument, options);
        }
export type GetPublicPostsCardsQueryHookResult = ReturnType<typeof useGetPublicPostsCardsQuery>;
export type GetPublicPostsCardsLazyQueryHookResult = ReturnType<typeof useGetPublicPostsCardsLazyQuery>;
export type GetPublicPostsCardsQueryResult = Apollo.QueryResult<GetPublicPostsCardsQuery, GetPublicPostsCardsQueryVariables>;
export const GetProductDocument = gql`
    query GetProduct($id: String!) {
  product(id: $id) {
    description
    imageUrl
    isActive
    metadata {
      key
      value
    }
    name
    productPrices {
      id
      billingTypes {
        id
        name
      }
      currency {
        isoCode
      }
      billingPeriods {
        id
        name
      }
      recurringUsageTypes {
        id
        name
      }
      internalDescription
      unitPrice
    }
    unitLabel
  }
}
    `;
export type GetProductComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetProductQuery, GetProductQueryVariables>, 'query'> & ({ variables: GetProductQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetProductComponent = (props: GetProductComponentProps) => (
      <ApolloReactComponents.Query<GetProductQuery, GetProductQueryVariables> query={GetProductDocument} {...props} />
    );
    

/**
 * __useGetProductQuery__
 *
 * To run a query within a React component, call `useGetProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductQuery(baseOptions: Apollo.QueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
      }
export function useGetProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductQuery, GetProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductQuery, GetProductQueryVariables>(GetProductDocument, options);
        }
export type GetProductQueryHookResult = ReturnType<typeof useGetProductQuery>;
export type GetProductLazyQueryHookResult = ReturnType<typeof useGetProductLazyQuery>;
export type GetProductQueryResult = Apollo.QueryResult<GetProductQuery, GetProductQueryVariables>;
export const SearchDocument = gql`
    query Search($filters: SearchFilter) {
  search(filters: $filters) {
    hasNextPage
    hasPreviousPage
    isFirstPage
    isLastPage
    page
    pageCount
    pageNumberIsGood
    pageSize
    rows {
      ... on SearchCategory {
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
        id
        name
        slug
        tags {
          id
          title
        }
      }
      ... on SearchLiveEvent {
        category {
          id
          name
        }
        thumbnail {
          imgPath
        }
        id
        slug
        title
        tags {
          id
          title
        }
      }
      ... on SearchPost {
        id
        slug
        description
        title
        type
        thumbnail {
          imgPath
          baseUrl
        }
        media {
          ... on MediaAudio {
            mp3Path
            filename
          }
          ... on MediaPhoto {
            imgPath
          }
          ... on MediaVideo {
            thumbnailPath
            baseUrl
          }
        }
      }
    }
    total
  }
}
    `;
export type SearchComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SearchQuery, SearchQueryVariables>, 'query'>;

    export const SearchComponent = (props: SearchComponentProps) => (
      <ApolloReactComponents.Query<SearchQuery, SearchQueryVariables> query={SearchDocument} {...props} />
    );
    

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSearchQuery(baseOptions?: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;