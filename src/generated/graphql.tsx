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
  channel: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
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


export type GetPublicCategoriesQuery = { __typename?: 'Query', publicCategories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', access?: Maybe<AccessKinds>, parentId?: Maybe<string>, slug?: Maybe<string>, createdAt: any, sort: number, kind: Kinds, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, id: string, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', parentId?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, featuredAt?: Maybe<any>, sort: number, geoFence?: Maybe<any>, id: string, kind: Kinds, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetCategoriesCardsQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetCategoriesCardsQuery = { __typename?: 'Query', categories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetPublicCategoriesCardsQueryVariables = Exact<{
  filter?: Maybe<CategoryFilter>;
}>;


export type GetPublicCategoriesCardsQuery = { __typename?: 'Query', publicCategories: { __typename?: 'PaginatedCategoriesOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageNumberIsGood: boolean, pageSize: number, rows: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, children: Array<{ __typename?: 'Category', id: string, name: string, access?: Maybe<AccessKinds>, description?: Maybe<string>, slug?: Maybe<string>, kind: Kinds, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> }> } };

export type GetCategoryQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
  postFilter?: Maybe<PostFilter>;
}>;


export type GetCategoryQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, access?: Maybe<AccessKinds>, slug?: Maybe<string>, createdAt: any, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, status: string, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> }, children: Array<{ __typename?: 'Category', sort: number, description?: Maybe<string>, featuredAt?: Maybe<any>, geoFence?: Maybe<any>, name: string, slug?: Maybe<string>, id: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedCategory', pinned: boolean }>, customization?: Maybe<{ __typename?: 'CategoryCustomization', thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }> }> } };

export type GetCategoryKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetCategoryKindQuery = { __typename?: 'Query', category: { __typename?: 'Category', id: string, access?: Maybe<AccessKinds>, kind: Kinds, name: string, entitlements: Array<any> } };

export type ChannelQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type ChannelQuery = { __typename?: 'Query', channel: { __typename: 'AvailableChannel', access: AccessKinds, id: string, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string } | { __typename: 'GeolockedChannel', id: string, name: string, slug?: Maybe<string>, kind?: Maybe<Kinds> } };

export type PublicChannelQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PublicChannelQuery = { __typename?: 'Query', getPublicChannel: { __typename?: 'PublicChannelOutput', id: string, name: string, kind: Kinds, slug: string } };

export type GetChannelKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetChannelKindQuery = { __typename?: 'Query', channel: { __typename: 'AvailableChannel', access: AccessKinds, id: string, kind?: Maybe<Kinds>, name: string } | { __typename: 'GeolockedChannel', id: string, name: string, access: AccessKinds, kind?: Maybe<Kinds> } };

export type GetChannelEntitlementsQueryVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
}>;


export type GetChannelEntitlementsQuery = { __typename?: 'Query', channel: { __typename?: 'AvailableChannel', slug?: Maybe<string>, entitlements?: Maybe<Array<any>> } | { __typename?: 'GeolockedChannel' } };

export type ChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename: 'AvailableChannel', id: string, access: AccessKinds, kind?: Maybe<Kinds>, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string } | { __typename: 'GeolockedChannel', id: string, name: string, kind?: Maybe<Kinds> }> };

export type PublicChannelsQueryVariables = Exact<{
  filter: ChannelFindAllFilter;
}>;


export type PublicChannelsQuery = { __typename?: 'Query', publicChannels: Array<{ __typename: 'AvailableChannel', id: string, kind?: Maybe<Kinds>, access: AccessKinds, description: string, geofence?: Maybe<any>, slug?: Maybe<string>, name: string } | { __typename: 'GeolockedChannel', id: string, name: string, kind?: Maybe<Kinds> }> };

export type CommentsQueryVariables = Exact<{
  filter?: Maybe<CommentFilter>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: { __typename?: 'PaginatedCommentsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, total: number, isLastPage: boolean, page: number, pageCount: number, pageSize: number, rows: Array<{ __typename?: 'Comment', description: string, id: string, createdAt: any, countComments: number, parent?: Maybe<string>, account: string, myVote: string, author?: Maybe<{ __typename?: 'CommentAuthor', id?: Maybe<string>, displayName?: Maybe<string>, username?: Maybe<string> }>, commentVoteStats: { __typename?: 'CommentVoteStats', countDownvotes: number, countUpvotes: number } }> } };

export type EnvConfigQueryVariables = Exact<{
  origin: Scalars['String'];
}>;


export type EnvConfigQuery = { __typename?: 'Query', envConfig: { __typename?: 'EncryptedEnvConfig', result: string } };

export type GetLiveEventQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetLiveEventQuery = { __typename?: 'Query', liveEvent: { __typename?: 'LiveEvent', access?: Maybe<AccessKinds>, createdAt: any, description?: Maybe<string>, id: string, kind: Kinds, scheduledStartAt?: Maybe<any>, commentsEnabled?: Maybe<boolean>, hlsPlaybackUrl?: Maybe<string>, presenceEnabled?: Maybe<boolean>, reactionsEnabled?: Maybe<boolean>, slug?: Maybe<string>, status?: Maybe<Status>, streamName?: Maybe<string>, title: string, type: LiveEventType } };

export type GetLiveEventKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetLiveEventKindQuery = { __typename?: 'Query', liveEvent: { __typename?: 'LiveEvent', id: string, title: string, access?: Maybe<AccessKinds>, kind: Kinds, entitlements: Array<any> } };

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

export type GetOrganizationKindQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrganizationKindQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string, access: AccessKinds, kind?: Maybe<Kinds> } };

export type GetOrganizationEntitlementsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetOrganizationEntitlementsQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', id: string, entitlements: Array<any> } };

export type GetPlaylistQueryVariables = Exact<{
  id: Scalars['ID'];
  postsFilters: PostFilter;
}>;


export type GetPlaylistQuery = { __typename?: 'Query', playlist: { __typename: 'PlaylistOutput', id: string, title: string, posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto' } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } } };

export type GetPostQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, access: string, allowComments: boolean, countComments: number, countReactions: number, slug?: Maybe<string>, description: string, featured: boolean, geofence?: Maybe<any>, kind: string, title: string, type: string, categories?: Maybe<Array<{ __typename?: 'Category', id: string }>>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, playlists?: Maybe<Array<{ __typename?: 'PlaylistOutput', id: string, slug: string, title: string }>>, engagedUsers: Array<{ __typename?: 'EngagedUser', username?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number>, mp3Path?: Maybe<string> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, baseUrl?: Maybe<string>, mp4Path?: Maybe<string>, duration?: Maybe<number>, aspectRatio?: Maybe<string>, createdAt: any, hlsPath?: Maybe<string>, subtitles?: Maybe<Array<{ __typename?: 'MediaSubtitle', id: string, locale?: Maybe<string>, baseUrl?: Maybe<string>, vttPath?: Maybe<string>, label?: Maybe<string> }>> }>, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, reactions: Array<{ __typename?: 'PostReactions', name: string, count: number }> } };

export type GetPostKindQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type GetPostKindQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title: string, access: string, kind: string, entitlements: Array<any> } };

export type GetPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, status: string, title: string, type: string, publishedAt?: Maybe<any>, countComments: number, countReactions: number, inFeed: boolean, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }>, reactions: Array<{ __typename?: 'PostReactions', count: number, name: string }> }> } };

export type GetPubicPostsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPubicPostsQuery = { __typename?: 'Query', publicPosts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, description: string, geofence?: Maybe<any>, kind: string, slug?: Maybe<string>, status: string, title: string, type: string, publishedAt?: Maybe<any>, countComments: number, countReactions: number, inFeed: boolean, myReactions: Array<{ __typename?: 'PostReactions', name: string }>, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', id: string, duration?: Maybe<number> } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }>, reactions: Array<{ __typename?: 'PostReactions', count: number, name: string }> }> } };

export type GetPostsCardsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPostsCardsQuery = { __typename?: 'Query', posts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetPublicPostsCardsQueryVariables = Exact<{
  filter?: Maybe<PostFilter>;
}>;


export type GetPublicPostsCardsQuery = { __typename?: 'Query', publicPosts: { __typename?: 'PaginatedPostsOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, total: number, rows: Array<{ __typename?: 'Post', id: string, access: string, title: string, description: string, kind: string, slug?: Maybe<string>, type: string, pinnedStatus?: Maybe<{ __typename?: 'AccountPinnedPost', pinned: boolean }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio' } | { __typename?: 'MediaPhoto', id: string, imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', id: string, duration?: Maybe<number>, thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };

export type GetProductQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetProductQuery = { __typename?: 'Query', product: { __typename?: 'InspireProduct', description?: Maybe<string>, imageUrl: string, isActive?: Maybe<boolean>, name?: Maybe<string>, unitLabel?: Maybe<string>, metadata?: Maybe<Array<{ __typename?: 'InspireMetadata', key?: Maybe<string>, value?: Maybe<string> }>>, productPrices?: Maybe<Array<{ __typename?: 'InspireProductPrices', id?: Maybe<string>, internalDescription?: Maybe<string>, unitPrice?: Maybe<number>, billingTypes?: Maybe<{ __typename?: 'InspireBillingTypes', id?: Maybe<string>, name?: Maybe<string> }>, currency?: Maybe<{ __typename?: 'InspireCurrency', isoCode?: Maybe<string> }>, billingPeriods?: Maybe<{ __typename?: 'InspireBillingPeriods', id?: Maybe<string>, name?: Maybe<string> }>, recurringUsageTypes?: Maybe<{ __typename?: 'InspireRecurringUsageTypes', id?: Maybe<string>, name?: Maybe<string> }> }>> } };

export type SearchQueryVariables = Exact<{
  filters?: Maybe<SearchFilter>;
}>;


export type SearchQuery = { __typename?: 'Query', search: { __typename?: 'PaginatedSearchResultOutput', hasNextPage: boolean, hasPreviousPage: boolean, isFirstPage: boolean, isLastPage: boolean, page: number, pageCount: number, pageNumberIsGood: boolean, pageSize: number, total: number, rows: Array<{ __typename?: 'SearchCategory', id?: Maybe<string>, name?: Maybe<string>, slug?: Maybe<string>, customization?: Maybe<{ __typename?: 'CategoryCustomization', desktop?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, mobile?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaCustomizationOutput', imgPath?: Maybe<string> }> }>, tags?: Maybe<Array<{ __typename?: 'SearchTag', id?: Maybe<string>, title?: Maybe<string> }>> } | { __typename?: 'SearchLiveEvent', id?: Maybe<string>, slug?: Maybe<string>, title?: Maybe<string>, category?: Maybe<{ __typename?: 'SearchCategoryHead', id?: Maybe<string>, name?: Maybe<string> }>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string> }>, tags?: Maybe<Array<{ __typename?: 'SearchTag', id?: Maybe<string>, title?: Maybe<string> }>> } | { __typename?: 'SearchPost', id?: Maybe<string>, slug?: Maybe<string>, description?: Maybe<string>, title?: Maybe<string>, type?: Maybe<string>, thumbnail?: Maybe<{ __typename?: 'MediaPhoto', imgPath?: Maybe<string>, baseUrl?: Maybe<string> }>, media?: Maybe<{ __typename?: 'MediaAudio', mp3Path?: Maybe<string>, filename?: Maybe<string> } | { __typename?: 'MediaPhoto', imgPath?: Maybe<string> } | { __typename?: 'MediaSubtitle' } | { __typename?: 'MediaVideo', thumbnailPath?: Maybe<string>, baseUrl?: Maybe<string> }> }> } };


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
export const GetCategoryDocument = gql`
    query GetCategory($slug: String, $postFilter: PostFilter) {
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
 *      postFilter: // value for 'postFilter'
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
    entitlements
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
    }
    ... on GeolockedChannel {
      id
      name
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
export const PublicChannelDocument = gql`
    query PublicChannel($slug: String) {
  getPublicChannel(slug: $slug) {
    id
    name
    kind
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
export const GetChannelKindDocument = gql`
    query GetChannelKind($slug: String) {
  channel(slug: $slug) {
    ... on AvailableChannel {
      access
      id
      kind
      name
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      access
      kind
      __typename
    }
  }
}
    `;
export type GetChannelKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetChannelKindQuery, GetChannelKindQueryVariables>, 'query'>;

    export const GetChannelKindComponent = (props: GetChannelKindComponentProps) => (
      <ApolloReactComponents.Query<GetChannelKindQuery, GetChannelKindQueryVariables> query={GetChannelKindDocument} {...props} />
    );
    

/**
 * __useGetChannelKindQuery__
 *
 * To run a query within a React component, call `useGetChannelKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelKindQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetChannelKindQuery(baseOptions?: Apollo.QueryHookOptions<GetChannelKindQuery, GetChannelKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelKindQuery, GetChannelKindQueryVariables>(GetChannelKindDocument, options);
      }
export function useGetChannelKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelKindQuery, GetChannelKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelKindQuery, GetChannelKindQueryVariables>(GetChannelKindDocument, options);
        }
export type GetChannelKindQueryHookResult = ReturnType<typeof useGetChannelKindQuery>;
export type GetChannelKindLazyQueryHookResult = ReturnType<typeof useGetChannelKindLazyQuery>;
export type GetChannelKindQueryResult = Apollo.QueryResult<GetChannelKindQuery, GetChannelKindQueryVariables>;
export const GetChannelEntitlementsDocument = gql`
    query GetChannelEntitlements($id: ID, $slug: String) {
  channel(id: $id, slug: $slug) {
    ... on AvailableChannel {
      slug
      entitlements
    }
  }
}
    `;
export type GetChannelEntitlementsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>, 'query'>;

    export const GetChannelEntitlementsComponent = (props: GetChannelEntitlementsComponentProps) => (
      <ApolloReactComponents.Query<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables> query={GetChannelEntitlementsDocument} {...props} />
    );
    

/**
 * __useGetChannelEntitlementsQuery__
 *
 * To run a query within a React component, call `useGetChannelEntitlementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChannelEntitlementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChannelEntitlementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetChannelEntitlementsQuery(baseOptions?: Apollo.QueryHookOptions<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>(GetChannelEntitlementsDocument, options);
      }
export function useGetChannelEntitlementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>(GetChannelEntitlementsDocument, options);
        }
export type GetChannelEntitlementsQueryHookResult = ReturnType<typeof useGetChannelEntitlementsQuery>;
export type GetChannelEntitlementsLazyQueryHookResult = ReturnType<typeof useGetChannelEntitlementsLazyQuery>;
export type GetChannelEntitlementsQueryResult = Apollo.QueryResult<GetChannelEntitlementsQuery, GetChannelEntitlementsQueryVariables>;
export const ChannelsDocument = gql`
    query Channels($filter: ChannelFindAllFilter!) {
  channels(filter: $filter) {
    ... on AvailableChannel {
      id
      access
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
export const PublicChannelsDocument = gql`
    query PublicChannels($filter: ChannelFindAllFilter!) {
  publicChannels(filter: $filter) {
    ... on AvailableChannel {
      id
      kind
      access
      description
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
    entitlements
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
export const GetOrganizationKindDocument = gql`
    query GetOrganizationKind($id: ID!) {
  organization(id: $id) {
    id
    access
    kind
  }
}
    `;
export type GetOrganizationKindComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>, 'query'> & ({ variables: GetOrganizationKindQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrganizationKindComponent = (props: GetOrganizationKindComponentProps) => (
      <ApolloReactComponents.Query<GetOrganizationKindQuery, GetOrganizationKindQueryVariables> query={GetOrganizationKindDocument} {...props} />
    );
    

/**
 * __useGetOrganizationKindQuery__
 *
 * To run a query within a React component, call `useGetOrganizationKindQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationKindQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationKindQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationKindQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>(GetOrganizationKindDocument, options);
      }
export function useGetOrganizationKindLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>(GetOrganizationKindDocument, options);
        }
export type GetOrganizationKindQueryHookResult = ReturnType<typeof useGetOrganizationKindQuery>;
export type GetOrganizationKindLazyQueryHookResult = ReturnType<typeof useGetOrganizationKindLazyQuery>;
export type GetOrganizationKindQueryResult = Apollo.QueryResult<GetOrganizationKindQuery, GetOrganizationKindQueryVariables>;
export const GetOrganizationEntitlementsDocument = gql`
    query GetOrganizationEntitlements($id: ID!) {
  organization(id: $id) {
    id
    entitlements
  }
}
    `;
export type GetOrganizationEntitlementsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>, 'query'> & ({ variables: GetOrganizationEntitlementsQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetOrganizationEntitlementsComponent = (props: GetOrganizationEntitlementsComponentProps) => (
      <ApolloReactComponents.Query<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables> query={GetOrganizationEntitlementsDocument} {...props} />
    );
    

/**
 * __useGetOrganizationEntitlementsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationEntitlementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationEntitlementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationEntitlementsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOrganizationEntitlementsQuery(baseOptions: Apollo.QueryHookOptions<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>(GetOrganizationEntitlementsDocument, options);
      }
export function useGetOrganizationEntitlementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>(GetOrganizationEntitlementsDocument, options);
        }
export type GetOrganizationEntitlementsQueryHookResult = ReturnType<typeof useGetOrganizationEntitlementsQuery>;
export type GetOrganizationEntitlementsLazyQueryHookResult = ReturnType<typeof useGetOrganizationEntitlementsLazyQuery>;
export type GetOrganizationEntitlementsQueryResult = Apollo.QueryResult<GetOrganizationEntitlementsQuery, GetOrganizationEntitlementsQueryVariables>;
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
export const GetPostDocument = gql`
    query GetPost($slug: String) {
  post(slug: $slug) {
    id
    access
    allowComments
    countComments
    countReactions
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