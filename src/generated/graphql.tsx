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
  /**
   * The `Decimal` scalar type represents signed double-precision fractional
   * values parsed by the `Decimal` library.  The Decimal appears in a JSON
   * response as a string to preserve precision.
   */
  Decimal: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /**
   * The `JSONString` scalar type represents arbitrary json string data, represented as UTF-8
   * character sequences. The `JSONString` type is most often used to represent a free-form
   * human-readable json string.
   */
  JSONString: any;
  /** JSON field type in postgres */
  Json: any;
  /** Represents an uploaded file. */
  Upload: any;
  VoidScalar: any;
};

export enum AccessFlag {
  Exclusive = 'EXCLUSIVE',
  Inherited = 'INHERITED',
  Public = 'PUBLIC'
}

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type Account = {
  __typename?: 'Account';
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
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

export enum AccountModStatus {
  Banned = 'BANNED',
  BlockedPerm = 'BLOCKED_PERM',
  BlockedTemp = 'BLOCKED_TEMP',
  None = 'NONE'
}

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

export type Ad = BannerAd | ImaAd | InterstitialAd;

export type AdDimension = {
  __typename?: 'AdDimension';
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type AdDimensionInput = {
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type AdFilter = {
  deviceType?: Maybe<DeviceType>;
  location?: Maybe<AdLocation>;
  platform?: Maybe<Platform>;
  source?: Maybe<AdSource>;
  type?: Maybe<AdType>;
};

export enum AdLocation {
  /** Used per client's discretion */
  Any = 'ANY',
  /** The authentication screen */
  Auth = 'AUTH',
  /** The collection detail */
  Collection = 'COLLECTION',
  /** The list of collections */
  Collections = 'COLLECTIONS',
  /** The list of posts */
  Feed = 'FEED',
  /** The home screen */
  Home = 'HOME',
  /** The livestream event */
  Livestream = 'LIVESTREAM',
  /** The list of livestreams */
  Livestreams = 'LIVESTREAMS',
  /** The menu sidebar */
  Menu = 'MENU',
  /** The post detail */
  Post = 'POST',
  /** The room detail */
  Room = 'ROOM',
  /** The list of rooms */
  Rooms = 'ROOMS'
}

export enum AdPlacement {
  BottomCenter = 'BOTTOM_CENTER',
  BottomLeft = 'BOTTOM_LEFT',
  BottomRight = 'BOTTOM_RIGHT',
  Center = 'CENTER',
  CenterLeft = 'CENTER_LEFT',
  CenterRight = 'CENTER_RIGHT',
  TopCenter = 'TOP_CENTER',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT'
}

export enum AdSource {
  Admob = 'ADMOB',
  Dfp = 'DFP'
}

export enum AdType {
  Banner = 'BANNER',
  Ima = 'IMA',
  Interstitial = 'INTERSTITIAL'
}

export type AdminAdFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  deviceType?: Maybe<DeviceType>;
  location?: Maybe<AdLocation>;
  platform?: Maybe<Platform>;
  source?: Maybe<AdSource>;
  type?: Maybe<AdType>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type AdminAdTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminAdTypeSortEnum;
};

export enum AdminAdTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Location = 'location',
  Source = 'source',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminAttendeeFilter = {
  isActive?: Maybe<Scalars['Boolean']>;
  isModerator?: Maybe<Scalars['Boolean']>;
  /** search for records where is greater than */
  joinedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  joinedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  joinedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  joinedAtLte?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than */
  leftAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  leftAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  leftAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  leftAtLte?: Maybe<Scalars['DateTime']>;
  leftGracefully?: Maybe<Scalars['Boolean']>;
};

export type AdminAudioPost = PostCommon & {
  __typename?: 'AdminAudioPost';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaAudio>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<AdminMediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminBillboardTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminBillboardTypeSortEnum;
};

export enum AdminBillboardTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Target = 'target',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

/** Filters for the list of broadcasts */
export type AdminBroadcastFilter = {
  /** Matching a description */
  descriptionContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  descriptionNotcontains?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  /** Test whether is set or not */
  endedAtExists?: Maybe<Scalars['Boolean']>;
  /** Ended datetime */
  endedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  endedAtGte?: Maybe<Scalars['DateTime']>;
  /** Find records where is in the provided set */
  endedAtIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** search for records where is less than */
  endedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  endedAtLte?: Maybe<Scalars['DateTime']>;
  /** Find records where does not match the given value */
  endedAtNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  endedAtNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** IsLive boolean */
  isLive?: Maybe<Scalars['Boolean']>;
  /** search for records where is greater than */
  scheduledStartAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  scheduledStartAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  scheduledStartAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  scheduledStartAtLte?: Maybe<Scalars['DateTime']>;
  /** Started datetime */
  startedAtExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  startedAtIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Find records where does not match the given value */
  startedAtNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  startedAtNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Matching a title */
  titleContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  titleNotcontains?: Maybe<Scalars['String']>;
  /** Matching a type */
  typeContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  typeNotcontains?: Maybe<Scalars['String']>;
};

export type AdminBroadcastTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminBroadcastTypeSortEnum;
};

export enum AdminBroadcastTypeSortEnum {
  EndedAt = 'endedAt',
  IsLive = 'isLive',
  ScheduledStartAt = 'scheduledStartAt',
  StartedAt = 'startedAt',
  Title = 'title'
}

export type AdminCategoryTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminCategoryTypeSortEnum;
};

export enum AdminCategoryTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  FeaturedAt = 'featuredAt',
  Id = 'id',
  IsParent = 'isParent',
  Name = 'name',
  PostAdded = 'postAdded',
  PostCount = 'postCount',
  Sort = 'sort'
}

export type AdminCoupon = {
  __typename?: 'AdminCoupon';
  accountId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  couponCampaign?: Maybe<AdminCouponCampaign>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  externalReference?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  redeemCount?: Maybe<Scalars['Int']>;
  redeemsLeft?: Maybe<Scalars['Int']>;
  status?: Maybe<AdminCouponStatus>;
};

export type AdminCouponCampaign = {
  __typename?: 'AdminCouponCampaign';
  channel?: Maybe<Channel>;
  channelId?: Maybe<Scalars['String']>;
  coupons?: Maybe<Array<Maybe<AdminCoupon>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  emailTempalte?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  legal?: Maybe<Scalars['String']>;
  rules?: Maybe<AdminCouponCampaignRules>;
  status?: Maybe<AdminCouponCampaignStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminCouponCampaignRules = {
  __typename?: 'AdminCouponCampaignRules';
  expiresAt?: Maybe<Scalars['DateTime']>;
  matchAccount?: Maybe<Scalars['Boolean']>;
  redeemableTimes?: Maybe<Scalars['Int']>;
  type?: Maybe<AdminCouponCampaignRulesType>;
};

export type AdminCouponCampaignRulesType = DiscountPriceAmountRule | DiscountPricePercentRule | PriceOverrideRule | TrialOverrideRule;

export enum AdminCouponCampaignStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Ended = 'ENDED',
  Trash = 'TRASH'
}

export type AdminCouponCampaignTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminCouponCampaignTypeSortEnum;
};

export enum AdminCouponCampaignTypeSortEnum {
  CreatedAt = 'createdAt',
  Status = 'status',
  Title = 'title'
}

export type AdminCouponFilter = {
  /** Perform a simple text search similar to String.contains? */
  codeContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  codeNotcontains?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  status?: Maybe<AdminCouponStatus>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<AdminCouponStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<AdminCouponStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<AdminCouponStatus>>>;
};

export enum AdminCouponStatus {
  Active = 'ACTIVE',
  Redeemed = 'REDEEMED',
  Revoked = 'REVOKED'
}

export type AdminCouponTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminCouponTypeSortEnum;
};

export enum AdminCouponTypeSortEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Status = 'status'
}

export type AdminCustomForm = {
  __typename?: 'AdminCustomForm';
  createdAt?: Maybe<Scalars['DateTime']>;
  formAnswers?: Maybe<Array<Maybe<CustomFormAnswer>>>;
  /** Stringified JSON representation of the `https://formbuilder.online` data */
  formData?: Maybe<Scalars['JSONString']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminCustomFormTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminCustomFormTypeSortEnum;
};

export enum AdminCustomFormTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type AdminCustomerTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminCustomerTypeSortEnum;
};

export enum AdminCustomerTypeSortEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  GivenName = 'givenName',
  Surname = 'surname',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type AdminLayerFilter = {
  type?: Maybe<LayerType>;
};

export type AdminLivestreamEvent = {
  __typename?: 'AdminLivestreamEvent';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  analytics?: Maybe<LivestreamAnalytics>;
  author?: Maybe<Author>;
  backupPublishEndpoint?: Maybe<Scalars['String']>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  commentsCount?: Maybe<Scalars['Int']>;
  config?: Maybe<ConfigLivestream>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dashPlaybackUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  encodingProfile?: Maybe<LivestreamEncodingProfile>;
  encodingStatus?: Maybe<LivestreamEncodingStatus>;
  endedAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  geofence?: Maybe<Geofence>;
  hlsPlaybackUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCommentsEnabled?: Maybe<Scalars['Boolean']>;
  isPresenceEnabled?: Maybe<Scalars['Boolean']>;
  isReactionsEnabled?: Maybe<Scalars['Boolean']>;
  maxCommentSeats?: Maybe<Scalars['Int']>;
  maxReactionSeats?: Maybe<Scalars['Int']>;
  orientation?: Maybe<LivestreamOrientation>;
  primaryPublishEndpoint?: Maybe<Scalars['String']>;
  reactionsCount?: Maybe<Scalars['Int']>;
  region?: Maybe<LivestreamRegion>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<LivestreamStatus>;
  streamName?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<AdminMediaPhoto>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usersCount?: Maybe<Scalars['Int']>;
  video?: Maybe<AdminMediaLivestream>;
};

export type AdminLivestreamFilter = {
  categoryId?: Maybe<Scalars['String']>;
  encodingStatus?: Maybe<LivestreamEncodingStatus>;
  source?: Maybe<Sources>;
  status?: Maybe<LivestreamStatus>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<LivestreamStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<LivestreamStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<LivestreamStatus>>>;
};

export type AdminLivestreamTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminLivestreamTypeSortEnum;
};

export enum AdminLivestreamTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  DisplayName = 'displayName',
  EndedAt = 'endedAt',
  Id = 'id',
  ScheduledEndAt = 'scheduledEndAt',
  ScheduledStartAt = 'scheduledStartAt',
  StartedAt = 'startedAt',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdminMedia = AdminMediaAudio | AdminMediaLivestream | AdminMediaPhoto | AdminMediaVideo;

export type AdminMediaAudio = {
  __typename?: 'AdminMediaAudio';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** audio url fragment */
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminMediaLivestream = {
  __typename?: 'AdminMediaLivestream';
  aspectRatio?: Maybe<Scalars['String']>;
  /** video base cdn url */
  baseUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** dash playlist url fragment */
  dashPath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  /** hls playlist url fragment */
  hlsPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** selected thumbnail url fragment */
  imgPath?: Maybe<Scalars['String']>;
  /** mp4 video file url fragment */
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type AdminMediaPhoto = {
  __typename?: 'AdminMediaPhoto';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** image url fragment */
  imgPath?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type AdminMediaTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminMediaTypeSortEnum;
};

export enum AdminMediaTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  Filename = 'filename',
  Id = 'id',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  Usage = 'usage'
}

export type AdminMediaVideo = {
  __typename?: 'AdminMediaVideo';
  /** video base cdn url */
  baseUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** dash playlist url fragment */
  dashPath?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  /** hls playlist url fragment */
  hlsPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** selected thumbnail url fragment */
  imgPath?: Maybe<Scalars['String']>;
  /** mp4 video file url fragment */
  mp4Path?: Maybe<Scalars['String']>;
  /** s3 bucket mp4 url */
  s3Mp4Url?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type AdminMutation = {
  __typename?: 'AdminMutation';
  activateConfiguredDestination?: Maybe<ConfiguredDestination>;
  addPostToCategory?: Maybe<Scalars['String']>;
  addReport?: Maybe<AdminReport>;
  addRoomModerator?: Maybe<AdminRoom>;
  createAudioPost?: Maybe<AdminAudioPost>;
  createBannerAd?: Maybe<Ad>;
  createBillboard?: Maybe<Billboard>;
  createBroadcast?: Maybe<Broadcast>;
  createBroadcastDestination?: Maybe<BroadcastDestination>;
  createBroadcastRoom?: Maybe<BroadcastRoom>;
  createCategory?: Maybe<Category>;
  createConfiguredDestination?: Maybe<ConfiguredDestination>;
  createCoupon?: Maybe<AdminCoupon>;
  createCouponCampaign?: Maybe<AdminCouponCampaign>;
  createCustomForm?: Maybe<AdminCustomForm>;
  createDestination?: Maybe<Destination>;
  /** Interactive Media Ad */
  createImaAd?: Maybe<Ad>;
  createInterstitialAd?: Maybe<Ad>;
  createLayer?: Maybe<Layer>;
  createOnDemandPost?: Maybe<AdminOnDemandPost>;
  createPhotoPost?: Maybe<AdminPhotoPost>;
  createPoll?: Maybe<AdminPoll>;
  createProduct?: Maybe<Product>;
  createProductPrice?: Maybe<AdminProductPrice>;
  /** Create a Livestream Event ASAP.  This will be ready to go in minutes, but cannot use DVR or DRM features */
  createQuickStartLivestream?: Maybe<AdminLivestreamEvent>;
  createRoom?: Maybe<AdminRoom>;
  createRoomWithModerators?: Maybe<AdminRoom>;
  /** Create a scheduled Livestream Event.  Scheduling enables the use of DVR and DRM, but must be at least 2 hours in the future */
  createScheduledLivestream?: Maybe<AdminLivestreamEvent>;
  createScreen?: Maybe<Screen>;
  createSubtitle?: Maybe<Subtitle>;
  createTextPost?: Maybe<AdminTextPost>;
  createVideoPost?: Maybe<AdminVideoPost>;
  deactivateConfiguredDestination?: Maybe<ConfiguredDestination>;
  deleteAd?: Maybe<Ad>;
  deleteBillboard?: Maybe<Billboard>;
  deleteBroadcast?: Maybe<Broadcast>;
  deleteBroadcastDestination?: Maybe<BroadcastDestination>;
  deleteCategory?: Maybe<Category>;
  deleteConfiguredDestination?: Maybe<ConfiguredDestination>;
  deleteCoupon?: Maybe<AdminCoupon>;
  deleteCouponCampaign?: Maybe<AdminCouponCampaign>;
  deleteCustomForm?: Maybe<AdminCustomForm>;
  deleteDestination?: Maybe<Destination>;
  deleteLayer?: Maybe<Layer>;
  deleteLivestream?: Maybe<AdminLivestreamEvent>;
  deleteMedia?: Maybe<AdminMedia>;
  deletePoll?: Maybe<AdminPoll>;
  deletePost?: Maybe<PostCommon>;
  deletePredefinedList?: Maybe<PredefinedList>;
  deleteProduct?: Maybe<Product>;
  deleteProductPrice?: Maybe<AdminProductPrice>;
  deleteReport?: Maybe<AdminReport>;
  deleteRoom?: Maybe<AdminRoom>;
  deleteScreen?: Maybe<Screen>;
  deleteSubtitle?: Maybe<Subtitle>;
  finishRoom?: Maybe<AdminRoom>;
  generateCoupon?: Maybe<AdminCoupon>;
  livestreamFinish?: Maybe<AdminLivestreamEvent>;
  livestreamGoLive?: Maybe<AdminLivestreamEvent>;
  livestreamVod?: Maybe<AdminLivestreamEvent>;
  removePostFromCategory?: Maybe<Scalars['String']>;
  removeRoomModerator?: Maybe<AdminRoom>;
  /** schedule a channel push notification for the future */
  scheduleChannelPushNotification?: Maybe<ScheduledPush>;
  /** Schedule an org push notification for the future */
  scheduleOrgPushNotification?: Maybe<ScheduledPush>;
  sendBroadcastChatMessages?: Maybe<Array<Maybe<ChatMessage>>>;
  /** Send a push notification only to a single channel */
  sendChannelPushNotification?: Maybe<Scalars['String']>;
  /** Send an org-wide push notification */
  sendOrgPushNotification?: Maybe<Scalars['String']>;
  startMediaUpload?: Maybe<UploadMedia>;
  updateAd?: Maybe<Ad>;
  updateAudioPost?: Maybe<AdminAudioPost>;
  updateBillboard?: Maybe<Billboard>;
  updateBroadcast?: Maybe<Broadcast>;
  updateBroadcastDestination?: Maybe<BroadcastDestination>;
  updateCategory?: Maybe<Category>;
  updateConfiguredDestination?: Maybe<ConfiguredDestination>;
  updateCoupon?: Maybe<AdminCoupon>;
  updateCouponCampaign?: Maybe<AdminCouponCampaign>;
  updateCustomForm?: Maybe<AdminCustomForm>;
  updateDestination?: Maybe<Destination>;
  updateLayer?: Maybe<Layer>;
  updateLivestream?: Maybe<AdminLivestreamEvent>;
  updateMedia?: Maybe<AdminMedia>;
  updateOnDemandPost?: Maybe<AdminOnDemandPost>;
  updatePhotoPost?: Maybe<AdminPhotoPost>;
  updatePoll?: Maybe<AdminPoll>;
  updatePostInCategory?: Maybe<Scalars['String']>;
  updatePredefinedList?: Maybe<PredefinedList>;
  updateProduct?: Maybe<Product>;
  updateProductPrice?: Maybe<AdminProductPrice>;
  updateReport?: Maybe<AdminReport>;
  updateRoom?: Maybe<AdminRoom>;
  updateScreen?: Maybe<Screen>;
  updateTextPost?: Maybe<AdminTextPost>;
  updateVideoPost?: Maybe<AdminVideoPost>;
};


export type AdminMutationActivateConfiguredDestinationArgs = {
  id: Scalars['String'];
};


export type AdminMutationAddPostToCategoryArgs = {
  categoryId: Scalars['String'];
  postId: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
};


export type AdminMutationAddReportArgs = {
  description?: Maybe<Scalars['String']>;
  idReported: Scalars['String'];
  reason: Scalars['String'];
  type: ReportType;
};


export type AdminMutationAddRoomModeratorArgs = {
  accountId: Scalars['String'];
  roomId: Scalars['String'];
};


export type AdminMutationCreateAudioPostArgs = {
  post: CreateAudioPost;
};


export type AdminMutationCreateBannerAdArgs = {
  banner: CreateBannerAd;
};


export type AdminMutationCreateBillboardArgs = {
  billboard: CreateBillboard;
};


export type AdminMutationCreateBroadcastArgs = {
  broadcast: CreateBroadcast;
};


export type AdminMutationCreateBroadcastDestinationArgs = {
  broadcastDestination: CreateBroadcastDestination;
};


export type AdminMutationCreateBroadcastRoomArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type AdminMutationCreateCategoryArgs = {
  category: CreateCategory;
};


export type AdminMutationCreateConfiguredDestinationArgs = {
  configuredDestination: CreateConfiguredDestination;
};


export type AdminMutationCreateCouponArgs = {
  coupon: CreateCoupon;
};


export type AdminMutationCreateCouponCampaignArgs = {
  couponCampaign: CreateCouponCampaign;
};


export type AdminMutationCreateCustomFormArgs = {
  customForm: CreateCustomForm;
};


export type AdminMutationCreateDestinationArgs = {
  destination: CreateDestination;
};


export type AdminMutationCreateImaAdArgs = {
  ima: CreateImaAd;
};


export type AdminMutationCreateInterstitialAdArgs = {
  interstitial: CreateInterstitialAd;
};


export type AdminMutationCreateLayerArgs = {
  layer: CreateLayer;
};


export type AdminMutationCreateOnDemandPostArgs = {
  post: CreateOnDemandPost;
};


export type AdminMutationCreatePhotoPostArgs = {
  post: CreatePhotoPost;
};


export type AdminMutationCreatePollArgs = {
  poll: CreatePoll;
};


export type AdminMutationCreateProductArgs = {
  product: CreateProduct;
};


export type AdminMutationCreateProductPriceArgs = {
  productPrice: CreateProductPrice;
};


export type AdminMutationCreateQuickStartLivestreamArgs = {
  config?: Maybe<ConfigureQuickStartLivestream>;
  livestream: CreateQuickStartLivestream;
};


export type AdminMutationCreateRoomArgs = {
  room: CreateRoom;
};


export type AdminMutationCreateRoomWithModeratorsArgs = {
  moderators: Array<Maybe<Scalars['String']>>;
  room: CreateRoom;
};


export type AdminMutationCreateScheduledLivestreamArgs = {
  config?: Maybe<ConfigureScheduledLivestream>;
  livestream: CreateScheduledLivestream;
};


export type AdminMutationCreateScreenArgs = {
  screen: CreateScreen;
};


export type AdminMutationCreateSubtitleArgs = {
  subtitle: CreateSubtitle;
};


export type AdminMutationCreateTextPostArgs = {
  post: CreateTextPost;
};


export type AdminMutationCreateVideoPostArgs = {
  post: CreateVideoPost;
};


export type AdminMutationDeactivateConfiguredDestinationArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteAdArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteBillboardArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteBroadcastArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteBroadcastDestinationArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteConfiguredDestinationArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteCouponArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteCouponCampaignArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteCustomFormArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteDestinationArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteLayerArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteLivestreamArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteMediaArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeletePollArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeletePostArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeletePredefinedListArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteProductArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteProductPriceArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteReportArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteRoomArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteScreenArgs = {
  id: Scalars['String'];
};


export type AdminMutationDeleteSubtitleArgs = {
  id: Scalars['String'];
};


export type AdminMutationFinishRoomArgs = {
  id: Scalars['String'];
};


export type AdminMutationGenerateCouponArgs = {
  coupon: GenerateCoupon;
};


export type AdminMutationLivestreamFinishArgs = {
  id: Scalars['String'];
};


export type AdminMutationLivestreamGoLiveArgs = {
  id: Scalars['String'];
};


export type AdminMutationLivestreamVodArgs = {
  endPoint: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['String'];
  startPoint: Scalars['String'];
};


export type AdminMutationRemovePostFromCategoryArgs = {
  categoryId: Scalars['String'];
  postId: Scalars['String'];
};


export type AdminMutationRemoveRoomModeratorArgs = {
  accountId: Scalars['String'];
  roomId: Scalars['String'];
};


export type AdminMutationScheduleChannelPushNotificationArgs = {
  content: Scalars['String'];
  sendAt: Scalars['DateTime'];
};


export type AdminMutationScheduleOrgPushNotificationArgs = {
  content: Scalars['String'];
  sendAt: Scalars['DateTime'];
};


export type AdminMutationSendBroadcastChatMessagesArgs = {
  broadcastDestinationId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  message: Scalars['String'];
};


export type AdminMutationSendChannelPushNotificationArgs = {
  content: Scalars['String'];
};


export type AdminMutationSendOrgPushNotificationArgs = {
  content: Scalars['String'];
};


export type AdminMutationStartMediaUploadArgs = {
  description?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  type: UploadMediaType;
  usage: UploadMediaUsage;
};


export type AdminMutationUpdateAdArgs = {
  changes: UpdateAd;
  id: Scalars['String'];
};


export type AdminMutationUpdateAudioPostArgs = {
  changes: UpdateAudioPost;
  id: Scalars['String'];
};


export type AdminMutationUpdateBillboardArgs = {
  changes: UpdateBillboard;
  id: Scalars['String'];
};


export type AdminMutationUpdateBroadcastArgs = {
  changes: UpdateBroadcast;
  id: Scalars['String'];
};


export type AdminMutationUpdateBroadcastDestinationArgs = {
  changes: UpdateBroadcastDestination;
  id: Scalars['String'];
};


export type AdminMutationUpdateCategoryArgs = {
  changes: UpdateCategory;
  id: Scalars['String'];
};


export type AdminMutationUpdateConfiguredDestinationArgs = {
  changes: UpdateConfiguredDestination;
  id: Scalars['String'];
};


export type AdminMutationUpdateCouponArgs = {
  changes: UpdateCoupon;
  id: Scalars['String'];
};


export type AdminMutationUpdateCouponCampaignArgs = {
  changes: UpdateCouponCampaign;
  id: Scalars['String'];
};


export type AdminMutationUpdateCustomFormArgs = {
  changes: UpdateCustomForm;
  id: Scalars['String'];
};


export type AdminMutationUpdateDestinationArgs = {
  changes: UpdateDestination;
  id: Scalars['String'];
};


export type AdminMutationUpdateLayerArgs = {
  changes: UpdateLayer;
  id: Scalars['String'];
};


export type AdminMutationUpdateLivestreamArgs = {
  changes: UpdateLivestream;
  id: Scalars['String'];
};


export type AdminMutationUpdateMediaArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
};


export type AdminMutationUpdateOnDemandPostArgs = {
  changes: UpdateOnDemandPost;
  id: Scalars['String'];
};


export type AdminMutationUpdatePhotoPostArgs = {
  changes: UpdatePhotoPost;
  id: Scalars['String'];
};


export type AdminMutationUpdatePollArgs = {
  changes: UpdatePoll;
  id: Scalars['String'];
};


export type AdminMutationUpdatePostInCategoryArgs = {
  categoryId: Scalars['String'];
  postId: Scalars['String'];
  sort: Scalars['Int'];
};


export type AdminMutationUpdatePredefinedListArgs = {
  changes: UpdatePredefinedList;
  id: Scalars['String'];
};


export type AdminMutationUpdateProductArgs = {
  changes: UpdateProduct;
  id: Scalars['String'];
};


export type AdminMutationUpdateProductPriceArgs = {
  changes: UpdateProductPrice;
  id: Scalars['String'];
};


export type AdminMutationUpdateReportArgs = {
  changes: AdminUpdateReport;
  id: Scalars['String'];
};


export type AdminMutationUpdateRoomArgs = {
  changes: UpdateRoom;
  id: Scalars['String'];
};


export type AdminMutationUpdateScreenArgs = {
  changes: UpdateScreen;
  id: Scalars['String'];
};


export type AdminMutationUpdateTextPostArgs = {
  changes: UpdateTextPost;
  id: Scalars['String'];
};


export type AdminMutationUpdateVideoPostArgs = {
  changes: UpdateVideoPost;
  id: Scalars['String'];
};

export type AdminOnDemandPost = PostCommon & {
  __typename?: 'AdminOnDemandPost';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaLivestream>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<AdminMediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminOrder = {
  __typename?: 'AdminOrder';
  account?: Maybe<Account>;
  appliedProductPrice?: Maybe<AppliedProductPrice>;
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Stringified JSON representation of the Form Render data */
  customFormAnswers?: Maybe<Scalars['JSONString']>;
  error?: Maybe<OrderError>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  originalTransaction?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  platform?: Maybe<OrderPlatform>;
  productPrice?: Maybe<ProductPrice>;
  purchasedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<OrderStatus>;
  store?: Maybe<Store>;
  transaction?: Maybe<Scalars['String']>;
};

export type AdminOrderFilter = {
  accountId?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  status?: Maybe<OrderStatus>;
  type?: Maybe<ProductType>;
};

export type AdminOrderTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminOrderTypeSortEnum;
};

export enum AdminOrderTypeSortEnum {
  CreatedAt = 'createdAt',
  Status = 'status',
  Store = 'store'
}

export type AdminPaymentFilter = {
  accountId?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  processedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  processedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  processedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  processedAtLte?: Maybe<Scalars['DateTime']>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<PaymentStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<PaymentStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<PaymentStatus>>>;
};

export type AdminPaymentTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPaymentTypeSortEnum;
};

export enum AdminPaymentTypeSortEnum {
  CreatedAt = 'createdAt',
  Status = 'status'
}

export type AdminPhotoPost = PostCommon & {
  __typename?: 'AdminPhotoPost';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPoll = PostCommon & {
  __typename?: 'AdminPoll';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  choices?: Maybe<Array<Maybe<PollChoice>>>;
  closedAt?: Maybe<Scalars['DateTime']>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  myVote?: Maybe<Scalars['String']>;
  opensAt?: Maybe<Scalars['DateTime']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPollCreateChoice = {
  choice: Scalars['String'];
};

export type AdminPollFilter = {
  access?: Maybe<AccessFlag>;
  /** Test whether is set or not */
  featuredAtExists?: Maybe<Scalars['Boolean']>;
  /** search for records where is greater than */
  featuredAtGt?: Maybe<Scalars['String']>;
  /** search for records where is greater than or equal to */
  featuredAtGte?: Maybe<Scalars['String']>;
  /** Find records where is in the provided set */
  featuredAtIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** search for records where is less than */
  featuredAtLt?: Maybe<Scalars['String']>;
  /** search for records where is less than or equal to */
  featuredAtLte?: Maybe<Scalars['String']>;
  /** Find records where does not match the given value */
  featuredAtNot?: Maybe<Scalars['String']>;
  /** find records where is not in the provided set */
  featuredAtNotin?: Maybe<Array<Maybe<Scalars['String']>>>;
  inFeed?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PostStatus>;
};

export type AdminPollTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPollTypeSortEnum;
};

export enum AdminPollTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  FeaturedAt = 'featuredAt',
  Id = 'id',
  PublishedAt = 'publishedAt',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdminPollUpdateChoice = {
  choice?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type AdminPost = AdminAudioPost | AdminOnDemandPost | AdminPhotoPost | AdminTextPost | AdminVideoPost;

export type AdminPostFilter = {
  access?: Maybe<AccessFlag>;
  categoryId?: Maybe<Scalars['String']>;
  /** Test whether is set or not */
  featuredAtExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  featuredAtIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Find records where does not match the given value */
  featuredAtNot?: Maybe<Scalars['String']>;
  /** find records where is not in the provided set */
  featuredAtNotin?: Maybe<Array<Maybe<Scalars['String']>>>;
  inFeed?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PostStatus>;
  type?: Maybe<AdminPostType>;
  /** Test whether is set or not */
  typeExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  typeIn?: Maybe<Array<Maybe<AdminPostType>>>;
  /** Find records where does not match the given value */
  typeNot?: Maybe<AdminPostType>;
  /** find records where is not in the provided set */
  typeNotin?: Maybe<Array<Maybe<AdminPostType>>>;
};

export enum AdminPostType {
  Audio = 'AUDIO',
  OnDemand = 'ON_DEMAND',
  Photo = 'PHOTO',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type AdminPostTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPostTypeSortEnum;
};

export enum AdminPostTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  FeaturedAt = 'featuredAt',
  Id = 'id',
  PublishedAt = 'publishedAt',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminPredefinedListTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPredefinedListTypeSortEnum;
};

export enum AdminPredefinedListTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Sort = 'sort',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdminPriceTiers = {
  __typename?: 'AdminPriceTiers';
  country?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  purchaseTiers?: Maybe<Array<Maybe<Tier>>>;
  recurringTiers?: Maybe<Array<Maybe<Tier>>>;
};

export type AdminPriceTiersTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPriceTiersTypeSortEnum;
};

export enum AdminPriceTiersTypeSortEnum {
  CountryName = 'countryName',
  Currency = 'currency',
  Id = 'id'
}

export type AdminProductFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  /** Perform a simple text search similar to String.contains? */
  nameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  nameNotcontains?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<ProductStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<ProductStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<ProductStatus>>>;
  type?: Maybe<ProductType>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type AdminProductPrice = {
  __typename?: 'AdminProductPrice';
  badge?: Maybe<Scalars['String']>;
  couponCampaigns?: Maybe<Array<Maybe<AdminCouponCampaign>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasAndroid?: Maybe<Scalars['Boolean']>;
  hasApple?: Maybe<Scalars['Boolean']>;
  hasStripe?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<PriceInterval>;
  /** Will always return `1` for requests outside Brazil. */
  maxInstallments?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  price?: Maybe<Price>;
  product?: Maybe<Product>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<ProductStatus>;
  trialPeriod?: Maybe<PriceInterval>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminProductPriceFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  /** Perform a simple text search similar to String.contains? */
  nameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  nameNotcontains?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  type?: Maybe<ProductType>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type AdminProductPriceTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminProductPriceTypeSortEnum;
};

export enum AdminProductPriceTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Sort = 'sort',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminProductTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminProductTypeSortEnum;
};

export enum AdminProductTypeSortEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminPushTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminPushTypeSortEnum;
};

export enum AdminPushTypeSortEnum {
  CreatedAt = 'createdAt',
  ExecutesAt = 'executesAt'
}

export type AdminQuery = {
  __typename?: 'AdminQuery';
  ad?: Maybe<Ad>;
  ads?: Maybe<Array<Maybe<Ad>>>;
  adsCount?: Maybe<Scalars['Int']>;
  billboard?: Maybe<Billboard>;
  billboards?: Maybe<Array<Maybe<Billboard>>>;
  billboardsCount?: Maybe<Scalars['Int']>;
  broadcast?: Maybe<Broadcast>;
  broadcastDestination?: Maybe<BroadcastDestination>;
  broadcastDestinations?: Maybe<Array<Maybe<BroadcastDestination>>>;
  broadcasts?: Maybe<Array<Maybe<Broadcast>>>;
  broadcastsCount?: Maybe<Scalars['Int']>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  configuredDestination?: Maybe<ConfiguredDestination>;
  configuredDestinations?: Maybe<Array<Maybe<ConfiguredDestination>>>;
  coupon?: Maybe<AdminCoupon>;
  couponCampaign?: Maybe<AdminCouponCampaign>;
  couponCampaigns?: Maybe<Array<Maybe<AdminCouponCampaign>>>;
  couponCampaignsCount?: Maybe<Scalars['Int']>;
  coupons?: Maybe<Array<Maybe<AdminCoupon>>>;
  couponsCount?: Maybe<Scalars['Int']>;
  customForm?: Maybe<AdminCustomForm>;
  customForms?: Maybe<Array<Maybe<AdminCustomForm>>>;
  customFormsCount?: Maybe<Scalars['Int']>;
  customer?: Maybe<Customer>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customersCount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Destination>;
  destinations?: Maybe<Array<Maybe<Destination>>>;
  layer?: Maybe<Layer>;
  layers?: Maybe<Array<Maybe<Layer>>>;
  layersCount?: Maybe<Scalars['Int']>;
  livestream?: Maybe<AdminLivestreamEvent>;
  livestreams?: Maybe<Array<Maybe<AdminLivestreamEvent>>>;
  livestreamsCount?: Maybe<Scalars['Int']>;
  media?: Maybe<AdminMedia>;
  medias?: Maybe<Array<Maybe<AdminMedia>>>;
  mediasCount?: Maybe<Scalars['Int']>;
  order?: Maybe<AdminOrder>;
  orders?: Maybe<Array<Maybe<AdminOrder>>>;
  ordersCount?: Maybe<Scalars['Int']>;
  payment?: Maybe<Payment>;
  payments?: Maybe<Array<Maybe<Payment>>>;
  paymentsChannelNetSum?: Maybe<Price>;
  paymentsCount?: Maybe<Scalars['Int']>;
  paymentsSumByCurrency?: Maybe<Array<Maybe<Price>>>;
  pinnedCategories?: Maybe<Array<Maybe<Category>>>;
  poll?: Maybe<AdminPoll>;
  polls?: Maybe<Array<Maybe<AdminPoll>>>;
  pollsCount?: Maybe<Scalars['Int']>;
  post?: Maybe<AdminPost>;
  posts?: Maybe<Array<Maybe<AdminPost>>>;
  postsCount?: Maybe<Scalars['Int']>;
  predefinedList?: Maybe<PredefinedList>;
  predefinedLists?: Maybe<Array<Maybe<PredefinedList>>>;
  predefinedListsCount?: Maybe<Scalars['Int']>;
  priceTier?: Maybe<AdminPriceTiers>;
  priceTiers?: Maybe<Array<Maybe<AdminPriceTiers>>>;
  priceTiersCount?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  productPrice?: Maybe<AdminProductPrice>;
  productPrices?: Maybe<Array<Maybe<AdminProductPrice>>>;
  productPricesCount?: Maybe<Scalars['Int']>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsCount?: Maybe<Scalars['Int']>;
  pushes?: Maybe<Array<Maybe<ScheduledPush>>>;
  report?: Maybe<AdminReport>;
  reports?: Maybe<Array<Maybe<AdminReport>>>;
  reportsCount?: Maybe<Scalars['Int']>;
  room?: Maybe<AdminRoom>;
  roomAttendees?: Maybe<Array<Maybe<Attendee>>>;
  rooms?: Maybe<Array<Maybe<AdminRoom>>>;
  roomsCount?: Maybe<Scalars['Int']>;
  screen?: Maybe<Screen>;
  screens?: Maybe<Array<Maybe<Screen>>>;
  screensCount?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Subtitle>;
  subtitleCount?: Maybe<Scalars['Int']>;
  subtitles?: Maybe<Array<Maybe<Subtitle>>>;
};


export type AdminQueryAdArgs = {
  id: Scalars['String'];
};


export type AdminQueryAdsArgs = {
  filter?: Maybe<AdminAdFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminAdTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryAdsCountArgs = {
  filter?: Maybe<AdminAdFilter>;
};


export type AdminQueryBillboardArgs = {
  id: Scalars['String'];
};


export type AdminQueryBillboardsArgs = {
  filter?: Maybe<BillboardFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminBillboardTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryBillboardsCountArgs = {
  filter?: Maybe<BillboardFilter>;
};


export type AdminQueryBroadcastArgs = {
  id: Scalars['String'];
};


export type AdminQueryBroadcastDestinationArgs = {
  id: Scalars['String'];
};


export type AdminQueryBroadcastsArgs = {
  filter?: Maybe<AdminBroadcastFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminBroadcastTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryBroadcastsCountArgs = {
  filter?: Maybe<AdminBroadcastFilter>;
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCategoryTypeSortDirective>>>;
  search?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryCategoriesCountArgs = {
  filter?: Maybe<CategoryFilter>;
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryCategoryArgs = {
  id: Scalars['String'];
};


export type AdminQueryConfiguredDestinationArgs = {
  id: Scalars['String'];
};


export type AdminQueryCouponArgs = {
  id: Scalars['String'];
};


export type AdminQueryCouponCampaignArgs = {
  id: Scalars['String'];
};


export type AdminQueryCouponCampaignsArgs = {
  filter?: Maybe<CouponCampaignFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCouponCampaignTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryCouponCampaignsCountArgs = {
  filter?: Maybe<CouponCampaignFilter>;
};


export type AdminQueryCouponsArgs = {
  filter?: Maybe<AdminCouponFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCouponTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryCouponsCountArgs = {
  filter?: Maybe<AdminCouponFilter>;
};


export type AdminQueryCustomFormArgs = {
  id: Scalars['String'];
};


export type AdminQueryCustomFormsArgs = {
  filter?: Maybe<CustomFormFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCustomFormTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryCustomFormsCountArgs = {
  filter?: Maybe<CustomFormFilter>;
};


export type AdminQueryCustomerArgs = {
  id: Scalars['String'];
};


export type AdminQueryCustomersArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCustomerTypeSortDirective>>>;
  search?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryCustomersCountArgs = {
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryDestinationArgs = {
  id: Scalars['String'];
};


export type AdminQueryLayerArgs = {
  id: Scalars['String'];
};


export type AdminQueryLayersArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminLayerFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryLayersCountArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminLayerFilter>;
};


export type AdminQueryLivestreamArgs = {
  id: Scalars['String'];
};


export type AdminQueryLivestreamsArgs = {
  filter?: Maybe<AdminLivestreamFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminLivestreamTypeSortDirective>>>;
  search?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryLivestreamsCountArgs = {
  filter?: Maybe<AdminLivestreamFilter>;
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryMediaArgs = {
  id: Scalars['String'];
};


export type AdminQueryMediasArgs = {
  filter?: Maybe<MediaFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminMediaTypeSortDirective>>>;
  search?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryMediasCountArgs = {
  filter?: Maybe<MediaFilter>;
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryOrderArgs = {
  id: Scalars['String'];
};


export type AdminQueryOrdersArgs = {
  filter?: Maybe<AdminOrderFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminOrderTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryOrdersCountArgs = {
  filter?: Maybe<AdminOrderFilter>;
};


export type AdminQueryPaymentArgs = {
  id: Scalars['String'];
};


export type AdminQueryPaymentsArgs = {
  filter?: Maybe<AdminPaymentFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPaymentTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPaymentsChannelNetSumArgs = {
  filter?: Maybe<AdminPaymentFilter>;
};


export type AdminQueryPaymentsCountArgs = {
  filter?: Maybe<AdminPaymentFilter>;
};


export type AdminQueryPaymentsSumByCurrencyArgs = {
  filter?: Maybe<AdminPaymentFilter>;
};


export type AdminQueryPinnedCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminCategoryTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPollArgs = {
  id: Scalars['String'];
};


export type AdminQueryPollsArgs = {
  filter?: Maybe<AdminPollFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPollTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPollsCountArgs = {
  filter?: Maybe<AdminPollFilter>;
};


export type AdminQueryPostArgs = {
  id: Scalars['String'];
};


export type AdminQueryPostsArgs = {
  filter?: Maybe<AdminPostFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPostTypeSortDirective>>>;
  search?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPostsCountArgs = {
  filter?: Maybe<AdminPostFilter>;
  search?: Maybe<Scalars['String']>;
};


export type AdminQueryPredefinedListArgs = {
  id: Scalars['String'];
};


export type AdminQueryPredefinedListsArgs = {
  filter?: Maybe<PredifinedListFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPredefinedListTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPredefinedListsCountArgs = {
  filter?: Maybe<PredifinedListFilter>;
};


export type AdminQueryPriceTierArgs = {
  id: Scalars['String'];
};


export type AdminQueryPriceTiersArgs = {
  filter?: Maybe<PriceTiersFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPriceTiersTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryPriceTiersCountArgs = {
  filter?: Maybe<PriceTiersFilter>;
};


export type AdminQueryProductArgs = {
  id: Scalars['String'];
};


export type AdminQueryProductPriceArgs = {
  id: Scalars['String'];
};


export type AdminQueryProductPricesArgs = {
  filter?: Maybe<AdminProductPriceFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminProductPriceTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryProductPricesCountArgs = {
  filter?: Maybe<AdminProductPriceFilter>;
};


export type AdminQueryProductsArgs = {
  filter?: Maybe<AdminProductFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminProductTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryProductsCountArgs = {
  filter?: Maybe<AdminProductFilter>;
};


export type AdminQueryPushesArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminPushTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryReportArgs = {
  id: Scalars['String'];
};


export type AdminQueryReportsArgs = {
  filter?: Maybe<AdminReportFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminReportTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryReportsCountArgs = {
  filter?: Maybe<AdminReportFilter>;
};


export type AdminQueryRoomArgs = {
  id: Scalars['String'];
};


export type AdminQueryRoomAttendeesArgs = {
  filter?: Maybe<AdminAttendeeFilter>;
  limit?: Maybe<Scalars['Int']>;
  roomId: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryRoomsArgs = {
  filter?: Maybe<AdminRoomFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<AdminRoomTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryRoomsCountArgs = {
  filter?: Maybe<AdminRoomFilter>;
};


export type AdminQueryScreenArgs = {
  id: Scalars['String'];
};


export type AdminQueryScreensArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminScreenFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type AdminQueryScreensCountArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminScreenFilter>;
};


export type AdminQuerySubtitleArgs = {
  id: Scalars['String'];
};


export type AdminQuerySubtitleCountArgs = {
  mediaId: Scalars['String'];
};


export type AdminQuerySubtitlesArgs = {
  limit?: Maybe<Scalars['Int']>;
  mediaId: Scalars['String'];
  orderBy?: Maybe<Array<Maybe<AdminSubtitleTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};

export type AdminReport = {
  __typename?: 'AdminReport';
  accountId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  idReported?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  type?: Maybe<ReportType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminReportFilter = {
  accountId?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  idReported?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to String.contains? */
  reasonContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  reasonNotcontains?: Maybe<Scalars['String']>;
  status?: Maybe<ReportStatus>;
  type?: Maybe<ReportType>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type AdminReportTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminReportTypeSortEnum;
};

export enum AdminReportTypeSortEnum {
  CreatedAt = 'createdAt',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type AdminRoom = {
  __typename?: 'AdminRoom';
  access?: Maybe<AccessFlag>;
  attendees?: Maybe<Array<Maybe<Attendee>>>;
  channel?: Maybe<Channel>;
  /** Returns the count of `ACTIVE` attendees including moderators */
  countAttendees?: Maybe<Scalars['Int']>;
  countModerators?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  mediaPlacement?: Maybe<RoomMediaPlacement>;
  meetingId?: Maybe<Scalars['String']>;
  region?: Maybe<RoomRegion>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<RoomStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
};


export type AdminRoomAttendeesArgs = {
  filter?: Maybe<AdminAttendeeFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AdminRoomFilter = {
  /** Test whether is set or not */
  accessExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  accessIn?: Maybe<Array<Maybe<AccessFlag>>>;
  /** Find records where does not match the given value */
  accessNot?: Maybe<AccessFlag>;
  /** find records where is not in the provided set */
  accessNotin?: Maybe<Array<Maybe<AccessFlag>>>;
  /** search for records where is greater than */
  endedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  endedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  endedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  endedAtLte?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than */
  maxAttendeesGt?: Maybe<Scalars['Int']>;
  /** search for records where is greater than or equal to */
  maxAttendeesGte?: Maybe<Scalars['Int']>;
  /** search for records where is less than */
  maxAttendeesLt?: Maybe<Scalars['Int']>;
  /** search for records where is less than or equal to */
  maxAttendeesLte?: Maybe<Scalars['Int']>;
  /** search for records where is greater than */
  scheduledStartAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  scheduledStartAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  scheduledStartAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  scheduledStartAtLte?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than */
  startedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  startedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  startedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  startedAtLte?: Maybe<Scalars['DateTime']>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<RoomStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<RoomStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<RoomStatus>>>;
  /** Perform a simple text search similar to String.contains? */
  titleContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  titleNotcontains?: Maybe<Scalars['String']>;
};

export type AdminRoomTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminRoomTypeSortEnum;
};

export enum AdminRoomTypeSortEnum {
  Access = 'access',
  CreatedAt = 'createdAt',
  Description = 'description',
  EndedAt = 'endedAt',
  Id = 'id',
  MaxAttendees = 'maxAttendees',
  ScheduledStartAt = 'scheduledStartAt',
  StartedAt = 'startedAt',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AdminScreenFilter = {
  /** search for records where is greater than */
  imageWidthGt?: Maybe<Scalars['Int']>;
  /** search for records where is greater than or equal to */
  imageWidthGte?: Maybe<Scalars['Int']>;
  /** search for records where is less than */
  imageWidthLt?: Maybe<Scalars['Int']>;
  /** search for records where is less than or equal to */
  imageWidthLte?: Maybe<Scalars['Int']>;
  /** Perform a simple text search similar to String.contains? */
  nameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  nameNotcontains?: Maybe<Scalars['String']>;
  type?: Maybe<ScreenType>;
};

export type AdminSubtitleTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: AdminSubtitleTypeSortEnum;
};

export enum AdminSubtitleTypeSortEnum {
  Label = 'label',
  Locale = 'locale',
  MediaId = 'mediaId',
  Type = 'type'
}

export type AdminTextPost = PostCommon & {
  __typename?: 'AdminTextPost';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminUpdateReport = {
  description?: Maybe<Scalars['String']>;
  status: ReportStatus;
};

export type AdminVideoPost = PostCommon & {
  __typename?: 'AdminVideoPost';
  access?: Maybe<AccessFlag>;
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  alias?: Maybe<Account>;
  aliasId?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<Geofence>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<AdminMediaVideo>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  pushNotification?: Maybe<PushNotification>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<AdminMediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AndroidOrder = {
  developerPayload: Scalars['String'];
  packageName: Scalars['String'];
  productId: Scalars['String'];
  purchaseState: Scalars['String'];
  signature: Scalars['String'];
  token: Scalars['String'];
};

export type AppliedProductPrice = {
  __typename?: 'AppliedProductPrice';
  price?: Maybe<Price>;
  trialPeriod?: Maybe<PriceInterval>;
};

export type Attendee = {
  __typename?: 'Attendee';
  account?: Maybe<Account>;
  attendeeId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isActive?: Maybe<Scalars['Boolean']>;
  isModerator?: Maybe<Scalars['Boolean']>;
  joinToken?: Maybe<Scalars['String']>;
  joinedAt?: Maybe<Scalars['DateTime']>;
  leftAt?: Maybe<Scalars['DateTime']>;
  leftGracefully?: Maybe<Scalars['Boolean']>;
  meetingId?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
};

export type AudioPost = PostCommon & {
  __typename?: 'AudioPost';
  access?: Maybe<AccessFlag>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaAudio>;
  mediaPosition?: Maybe<MediaPosition>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Author = {
  __typename?: 'Author';
  avatarDynamicUrl?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type AvailableChannel = {
  __typename?: 'AvailableChannel';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<Scalars['JSON']>;
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

export type BannerAd = {
  __typename?: 'BannerAd';
  /** Example: /123456/example_ad_name */
  adUnitId?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  deviceType?: Maybe<DeviceType>;
  dimensions?: Maybe<Array<Maybe<AdDimension>>>;
  entitlementsBypass?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<AdLocation>;
  placement?: Maybe<AdPlacement>;
  platform?: Maybe<Platform>;
  size?: Maybe<BannerSize>;
  source?: Maybe<AdSource>;
};

export enum BannerSize {
  Adaptive = 'ADAPTIVE',
  Banner = 'BANNER',
  /** Use `width` and `height`. */
  Custom = 'CUSTOM',
  FullBanner = 'FULL_BANNER',
  LargeBanner = 'LARGE_BANNER',
  Leaderboard = 'LEADERBOARD',
  MediumRectangle = 'MEDIUM_RECTANGLE',
  SmartBanner = 'SMART_BANNER'
}

export type BexsOrderIntent = {
  __typename?: 'BexsOrderIntent';
  clientSecret?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  status?: Maybe<IntentStatus>;
  type?: Maybe<PaymentType>;
};

export type Billboard = {
  __typename?: 'Billboard';
  actions?: Maybe<Array<Maybe<BillboardAction>>>;
  banner?: Maybe<MediaPhoto>;
  channel?: Maybe<Channel>;
  cover?: Maybe<MediaPhoto>;
  delay?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<BillboardTarget>;
  title?: Maybe<Scalars['String']>;
};

export type BillboardAction = {
  __typename?: 'BillboardAction';
  /** Format: #AARRGGBB */
  bgColor?: Maybe<Scalars['String']>;
  /** Format: #AARRGGBB */
  borderColor?: Maybe<Scalars['String']>;
  /** From materialdesignicons.com */
  icon?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  /** Example: /collections/123 */
  route?: Maybe<Scalars['String']>;
  /** Format: #AARRGGBB */
  textColor?: Maybe<Scalars['String']>;
};

export type BillboardFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  target?: Maybe<BillboardTarget>;
  /** Perform a simple text search similar to String.contains? */
  titleContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  titleNotcontains?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export enum BillboardTarget {
  Collection = 'COLLECTION',
  Extra = 'EXTRA',
  Feed = 'FEED',
  Home = 'HOME',
  Livestream = 'LIVESTREAM'
}

export type Broadcast = {
  __typename?: 'Broadcast';
  broadcastDestination?: Maybe<Array<Maybe<BroadcastDestination>>>;
  channelId?: Maybe<Scalars['String']>;
  chimeId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isLive?: Maybe<Scalars['Boolean']>;
  liveStatistics?: Maybe<Scalars['JSONString']>;
  name?: Maybe<Scalars['String']>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  streamSettings?: Maybe<Scalars['Json']>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type BroadcastAttendee = {
  __typename?: 'BroadcastAttendee';
  attendeeId?: Maybe<Scalars['String']>;
  externalUserId?: Maybe<Scalars['String']>;
  joinToken?: Maybe<Scalars['String']>;
};

export type BroadcastDestination = {
  __typename?: 'BroadcastDestination';
  broadcastId?: Maybe<Scalars['String']>;
  configuredDestinationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  livestreamEventId?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['Json']>;
  settings?: Maybe<Scalars['Json']>;
};

export type BroadcastRoom = {
  __typename?: 'BroadcastRoom';
  attendee?: Maybe<BroadcastAttendee>;
  meeting?: Maybe<Meeting>;
  streamSettings?: Maybe<Scalars['Json']>;
};

export type CardInfo = {
  cardHolderName: Scalars['String'];
  cvv: Scalars['String'];
  expirationMonth: Scalars['Int'];
  expirationYear: Scalars['Int'];
  number: Scalars['String'];
};

export type Category = {
  __typename?: 'Category';
  banner?: Maybe<MediaPhoto>;
  channel?: Maybe<Channel>;
  children?: Maybe<Array<Maybe<Category>>>;
  color?: Maybe<Scalars['String']>;
  cover?: Maybe<MediaPhoto>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<MediaPhoto>;
  isParent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  postAdded?: Maybe<Scalars['DateTime']>;
  postCount?: Maybe<Scalars['Int']>;
  postTypes?: Maybe<Array<Maybe<PostTypes>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  shareLink?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type CategoryChildrenArgs = {
  filter?: Maybe<CategoryFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CategoryTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type CategoryPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<PostTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};

export type CategoryFilter = {
  /** Test whether is set or not */
  featuredAtExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  featuredAtIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Find records where does not match the given value */
  featuredAtNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  featuredAtNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  isParent?: Maybe<Scalars['Boolean']>;
  parentId?: Maybe<Scalars['String']>;
  /** Test whether is set or not */
  parentIdExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  parentIdIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Find records where does not match the given value */
  parentIdNot?: Maybe<Scalars['String']>;
  /** find records where is not in the provided set */
  parentIdNotin?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Test whether is set or not */
  postAddedExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  postAddedIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Find records where does not match the given value */
  postAddedNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  postAddedNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  postCount?: Maybe<Scalars['Int']>;
};

export type CategoryTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: CategoryTypeSortEnum;
};

export enum CategoryTypeSortEnum {
  CreatedAt = 'createdAt',
  Description = 'description',
  FeaturedAt = 'featuredAt',
  Id = 'id',
  IsParent = 'isParent',
  Name = 'name',
  PostAdded = 'postAdded',
  PostCount = 'postCount',
  Sort = 'sort'
}

export type Channel = AvailableChannel | GeolockedChannel;

export type ChatMessage = {
  __typename?: 'ChatMessage';
  author?: Maybe<MessageAuthor>;
  message?: Maybe<Scalars['String']>;
  publishedDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<Scalars['String']>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Author>;
  countComments?: Maybe<Scalars['Int']>;
  countUniqueCommenters?: Maybe<Scalars['Int']>;
  countUpvotes?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  myUpvote?: Maybe<UpvoteDirection>;
  parentId?: Maybe<Scalars['ID']>;
};

export type CommentFilter = {
  parentId?: Maybe<Scalars['String']>;
  postId?: Maybe<Scalars['String']>;
  since?: Maybe<Scalars['DateTime']>;
};

export type CommentTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: CommentTypeSortEnum;
};

export enum CommentTypeSortEnum {
  CreatedAt = 'createdAt'
}

export type ConfigLivestream = {
  __typename?: 'ConfigLivestream';
  enableDrm?: Maybe<Scalars['Boolean']>;
  enableDvr?: Maybe<Scalars['Boolean']>;
  loop?: Maybe<Scalars['Boolean']>;
  loopUrl?: Maybe<Scalars['String']>;
  primarySource?: Maybe<Scalars['String']>;
  redundancy?: Maybe<Scalars['Boolean']>;
  secondarySource?: Maybe<Scalars['String']>;
  streamInput?: Maybe<LivestreamContentSource>;
  streamProfile?: Maybe<LivestreamQualityProfile>;
};

export type ConfigureQuickStartLivestream = {
  /** used only when the `streamInput` is ULR_PULL or MP4_FILE, default: false */
  loop?: Maybe<Scalars['Boolean']>;
  /** used only when the `loop` is true */
  loopUrl?: Maybe<Scalars['String']>;
  /** primary source url, used and required when input is RTMP_PULL, ULR_PULL, or MEDIA_CONNECT */
  primarySource?: Maybe<Scalars['String']>;
  /** whether to use multiple streaming urls for fallback, default: false */
  redundancy?: Maybe<Scalars['Boolean']>;
  /** secondary source urlm used and required when when input is RTMP_PULL, ULR_PULL, or MEDIA_CONNECT */
  secondarySource?: Maybe<Scalars['String']>;
  /** configure stram source, default: RTMP_PUSH */
  streamInput?: Maybe<LivestreamContentSource>;
  /** set stream quality profile, default: SD */
  streamProfile?: Maybe<LivestreamQualityProfile>;
};

export type ConfigureScheduledLivestream = {
  /** enable DRM protection for this stream, default: false */
  enableDrm?: Maybe<Scalars['Boolean']>;
  /** enable DVR features for this stream, default: false */
  enableDvr?: Maybe<Scalars['Boolean']>;
  /** used only when the `streamInput` is ULR_PULL or MP4_FILE, default: false */
  loop?: Maybe<Scalars['Boolean']>;
  /** used only when the `loop` is true */
  loopUrl?: Maybe<Scalars['String']>;
  /** primary source url, used and required when input is RTMP_PULL, ULR_PULL, or MEDIA_CONNECT */
  primarySource?: Maybe<Scalars['String']>;
  /** whether to use multiple streaming urls for fallback, default: false */
  redundancy?: Maybe<Scalars['Boolean']>;
  /** secondary source urlm used and required when when input is RTMP_PULL, ULR_PULL, or MEDIA_CONNECT */
  secondarySource?: Maybe<Scalars['String']>;
  /** configure stram source, default: RTMP_PUSH */
  streamInput?: Maybe<LivestreamContentSource>;
  /** set stream quality profile, default: SD */
  streamProfile?: Maybe<LivestreamQualityProfile>;
};

export type ConfiguredDestination = {
  __typename?: 'ConfiguredDestination';
  channelId?: Maybe<Scalars['String']>;
  destination?: Maybe<Destination>;
  destinationId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
};

export type ContinueWatchingFilter = {
  /** search for records where is greater than */
  percentGt?: Maybe<Scalars['Float']>;
  /** search for records where is greater than or equal to */
  percentGte?: Maybe<Scalars['Float']>;
  /** search for records where is less than */
  percentLt?: Maybe<Scalars['Float']>;
  /** search for records where is less than or equal to */
  percentLte?: Maybe<Scalars['Float']>;
  /** search for records where is greater than */
  secondsGt?: Maybe<Scalars['Int']>;
  /** search for records where is greater than or equal to */
  secondsGte?: Maybe<Scalars['Int']>;
  /** search for records where is less than */
  secondsLt?: Maybe<Scalars['Int']>;
  /** search for records where is less than or equal to */
  secondsLte?: Maybe<Scalars['Int']>;
  type?: Maybe<WatchingPostType>;
};

export type CountMeta = {
  __typename?: 'CountMeta';
  countAggregate?: Maybe<Scalars['Int']>;
  countComments?: Maybe<Scalars['Int']>;
  countLikes?: Maybe<Scalars['Int']>;
  countReactions?: Maybe<Scalars['Int']>;
  countShares?: Maybe<Scalars['Int']>;
  countThreads?: Maybe<Scalars['Int']>;
  countUniqueCommenters?: Maybe<Scalars['Int']>;
  countViews?: Maybe<Scalars['Int']>;
  countViewsTotal?: Maybe<Scalars['Int']>;
  engagedUsers?: Maybe<Array<Maybe<Account>>>;
  id?: Maybe<Scalars['ID']>;
  reactions?: Maybe<Array<Maybe<PostReaction>>>;
};

export type Coupon = {
  __typename?: 'Coupon';
  campaign?: Maybe<CouponCampaign>;
  code?: Maybe<Scalars['String']>;
  errorReason?: Maybe<CouponErrorReason>;
  /** The coupon will override these attributes from the product price object. */
  productPriceOverride?: Maybe<ProductPriceOverride>;
  redeemable?: Maybe<Scalars['Boolean']>;
};


export type CouponProductPriceOverrideArgs = {
  orderId: Scalars['String'];
};

export type CouponCampaign = {
  __typename?: 'CouponCampaign';
  description?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CouponCampaignFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  status?: Maybe<AdminCouponCampaignStatus>;
  /** Perform a simple text search similar to String.contains? */
  titleContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  titleNotcontains?: Maybe<Scalars['String']>;
};

export enum CouponErrorReason {
  /** The coupon has already expired. */
  Expired = 'EXPIRED',
  /** The coupon has reached the max amount s of redeems allowed. */
  Redeemed = 'REDEEMED',
  /** The account applying the coupon is not eligible. */
  Unqualified = 'UNQUALIFIED'
}

export type CreateAccountGdprLgpdInput = {
  accepted: Scalars['Boolean'];
  account: Scalars['String'];
};

export type CreateAccountInput = {
  display_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username?: Maybe<Scalars['String']>;
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
  email: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type CreateAudioPost = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateBannerAd = {
  adUnitId: Scalars['String'];
  /** Leave empty for all device types */
  deviceType?: Maybe<DeviceType>;
  dimensions?: Maybe<Array<Maybe<AdDimensionInput>>>;
  entitlementsBypass?: Maybe<Array<Maybe<Scalars['String']>>>;
  location: AdLocation;
  placement?: Maybe<AdPlacement>;
  /** Leave empty for all platforms */
  platform?: Maybe<Platform>;
  size: BannerSize;
  source: AdSource;
};

export type CreateBillboard = {
  actions?: Maybe<Array<Maybe<SetBillboardAction>>>;
  bannerId: Scalars['String'];
  coverId: Scalars['String'];
  delay?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target: BillboardTarget;
  title?: Maybe<Scalars['String']>;
};

export type CreateBroadcast = {
  broadcastDestination?: Maybe<Array<Maybe<Destinations>>>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  isLive?: Maybe<Scalars['Boolean']>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CreateBroadcastDestination = {
  broadcastId?: Maybe<Scalars['String']>;
  configuredDestinationId?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  livestreamEventId?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['Json']>;
  settings?: Maybe<Scalars['Json']>;
};

export type CreateCategory = {
  bannerId?: Maybe<Scalars['String']>;
  coverId?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  featuredAt?: Maybe<Scalars['DateTime']>;
  imageId: Scalars['String'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type CreateChannelInput = {
  customization?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  menu: Scalars['ID'];
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type CreateCommentResponse = {
  __typename?: 'CreateCommentResponse';
  comment?: Maybe<Comment>;
  counts?: Maybe<CountMeta>;
};

export type CreateConfiguredDestination = {
  authCode?: Maybe<Scalars['String']>;
  channelId?: Maybe<Scalars['String']>;
  destinationId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
};

export type CreateCoupon = {
  accountId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  couponCampaignId?: Maybe<Scalars['ID']>;
  externalReference?: Maybe<Scalars['String']>;
  status?: Maybe<AdminCouponStatus>;
};

export type CreateCouponCampaign = {
  channelId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  emailTemplate?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
  rules: CreateCouponCampaignRules;
  status: AdminCouponCampaignStatus;
  title: Scalars['String'];
};

export type CreateCouponCampaignRules = {
  /** if null, will never expire */
  expiresAt?: Maybe<Scalars['DateTime']>;
  /** default: FALSE */
  matchAccount?: Maybe<Scalars['Boolean']>;
  /** if null, will be redeemable infinitely */
  redeemableTimes?: Maybe<Scalars['Int']>;
  /** provide just one of the fields. If more than one is provided, the order priority will be: discount_percentage > discount_amount > new_price > new_trial_period */
  type: SetCouponCampaignRulesType;
};

export type CreateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type CreateCustomForm = {
  /** Stringified JSON representation of the `https://formbuilder.online` data */
  formData: Scalars['JSONString'];
  name: Scalars['String'];
};

export type CreateDestination = {
  apiurl?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  redirectUrl?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type CreateEmailTemplateDto = {
  name: Scalars['String'];
  organization?: Maybe<Scalars['ID']>;
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

export type CreateImaAd = {
  adTagUrl: Scalars['String'];
  /** Leave empty for all device types */
  deviceType?: Maybe<DeviceType>;
  entitlementsBypass?: Maybe<Array<Maybe<Scalars['String']>>>;
  imaType: ImaType;
  /** in milliseconds */
  maxDuration?: Maybe<Scalars['Int']>;
  /** Leave empty for all platforms */
  platform?: Maybe<Platform>;
  source: AdSource;
};

export type CreateInterstitialAd = {
  adUnitId: Scalars['String'];
  /** Leave empty for all device types */
  deviceType?: Maybe<DeviceType>;
  entitlementsBypass?: Maybe<Array<Maybe<Scalars['String']>>>;
  location: AdLocation;
  /** Leave empty for all platforms */
  platform?: Maybe<Platform>;
  source: AdSource;
  timing: InterstitialAdTiming;
};

export type CreateLayer = {
  broadcastId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<InputStyle>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<InputStyle>;
  type?: Maybe<LayerType>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type CreateMenu = {
  icon?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: Maybe<Scalars['ID']>;
  route: Scalars['String'];
  sort?: Maybe<Scalars['Int']>;
};

export type CreateOnDemandPost = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateOrganizationInput = {
  name: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type CreatePermissionInput = {
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['ID'];
};

export type CreatePhotoPost = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title: Scalars['String'];
};

export type CreatePoll = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  choices: Array<Maybe<AdminPollCreateChoice>>;
  closedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  opensAt: Scalars['DateTime'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title: Scalars['String'];
};

export type CreateProduct = {
  customFormId?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  platformExclusive?: Maybe<Platform>;
  thumbnailId?: Maybe<Scalars['String']>;
  type: ProductType;
};

export type CreateProductPrice = {
  badge?: Maybe<Scalars['String']>;
  couponCampaigns?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  /** Required when product type is recurring. */
  interval?: Maybe<SetInterval>;
  /** Only for payments from Brazil using Bexs and NOT for products of type `recurring`. */
  maxInstallments?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  platformExclusive?: Maybe<Platform>;
  /** Only when platform exclusive is WEB. */
  price?: Maybe<Scalars['Decimal']>;
  priceTier: SetPriceTier;
  productId: Scalars['String'];
  trialPeriod?: Maybe<SetInterval>;
};

export type CreateQuickStartLivestream = {
  access?: Maybe<AccessFlag>;
  aliasId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  isCommentsEnabled?: Maybe<Scalars['Boolean']>;
  isPresenceEnabled?: Maybe<Scalars['Boolean']>;
  isReactionsEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  /** orientation of the stream, default: landscape */
  orientation?: Maybe<LivestreamOrientation>;
  /** the datacenter region which the livestream will run, default: US_EAST_1 */
  region?: Maybe<LivestreamRegion>;
  source?: Maybe<Sources>;
  thumbnailId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateRoleInput = {
  default?: Maybe<Scalars['Boolean']>;
  description: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Scalars['ID']>;
  public?: Maybe<Scalars['Boolean']>;
};

export type CreateRoom = {
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  /** Default: 16 */
  maxAttendees?: Maybe<Scalars['Int']>;
  /** Default: US_EAST_1 */
  region?: Maybe<RoomRegion>;
  scheduledStartAt: Scalars['DateTime'];
  thumbnailId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateScheduledLivestream = {
  access?: Maybe<AccessFlag>;
  aliasId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  isCommentsEnabled?: Maybe<Scalars['Boolean']>;
  isPresenceEnabled?: Maybe<Scalars['Boolean']>;
  isReactionsEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  /** orientation of the stream, default: landscape */
  orientation?: Maybe<LivestreamOrientation>;
  /** the datacenter region which the livestream will run, default: US_EAST_1 */
  region?: Maybe<LivestreamRegion>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt: Scalars['DateTime'];
  source?: Maybe<Sources>;
  thumbnailId: Scalars['String'];
  title: Scalars['String'];
};

export type CreateScreen = {
  approved?: Maybe<Scalars['Boolean']>;
  attached?: Maybe<Scalars['Boolean']>;
  attendeeId?: Maybe<Scalars['String']>;
  broadcastId?: Maybe<Scalars['String']>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['String']>;
  microphoneMuted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  objectFit?: Maybe<ScreenObjectFit>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<ScreenType>;
  videoEnabled?: Maybe<Scalars['Boolean']>;
};

export type CreateSubjectInput = {
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
};

export type CreateSubtitle = {
  /** Base64 encoded */
  file: Scalars['String'];
  label: Scalars['String'];
  /** ISO 15897 Posix locale */
  locale: Scalars['String'];
  /** Allowed types: `VIDEO` and `LIVESTREAM` */
  mediaId: Scalars['String'];
};

export type CreateTextPost = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title: Scalars['String'];
};

export type CreateVideoPost = {
  access: AccessFlag;
  aliasId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
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

export type CustomFormAnswer = {
  __typename?: 'CustomFormAnswer';
  account?: Maybe<Account>;
  /** Stringified JSON representation of the `https://formbuilder.online` data */
  answers?: Maybe<Scalars['JSONString']>;
};

export type CustomFormFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  /** Perform a simple text search similar to String.contains? */
  nameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  nameNotcontains?: Maybe<Scalars['String']>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type Customer = {
  __typename?: 'Customer';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
};

export type Destination = {
  __typename?: 'Destination';
  apiurl?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  redirectUrl?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<MediaPhoto>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Destinations = {
  configuredDestinationId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['Json']>;
};

export enum DeviceType {
  Android = 'ANDROID',
  Ios = 'IOS'
}

export type DiscountPriceAmountRule = {
  __typename?: 'DiscountPriceAmountRule';
  discountAmount?: Maybe<Price>;
};

export type DiscountPricePercentRule = {
  __typename?: 'DiscountPricePercentRule';
  discountPercentage?: Maybe<Scalars['Float']>;
};

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
  name: Scalars['String'];
  organization: Scalars['ID'];
  template: Scalars['String'];
  type: Scalars['String'];
};

export type Excerpt = {
  __typename?: 'Excerpt';
  content?: Maybe<Scalars['String']>;
  isTruncated?: Maybe<Scalars['Boolean']>;
};

export type FilterFindAllChannelsInput = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  status__contains?: Maybe<Scalars['String']>;
  status__exact?: Maybe<Scalars['String']>;
};

export type FilterFindAllOrganizationsInput = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  web_url__exact?: Maybe<Scalars['String']>;
};

export type FindAllGroupsRequestDto = {
  name__contains?: Maybe<Scalars['String']>;
  name__exact?: Maybe<Scalars['String']>;
};

export type FindAllQueryParamsDto = {
  email__exact?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
};

export type ForgotPassword = {
  email: Scalars['String'];
};

export type GenerateCoupon = {
  accountId?: Maybe<Scalars['String']>;
  couponCampaignId?: Maybe<Scalars['ID']>;
  externalReference?: Maybe<Scalars['String']>;
};

export type Geofence = {
  __typename?: 'Geofence';
  /** List of ISO 3166-1 country codes */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<GeofenceType>;
};

export enum GeofenceType {
  /** Block these, allow everyone else */
  Blacklist = 'BLACKLIST',
  /** Allow these, block everyone else */
  Whitelist = 'WHITELIST'
}

export type GeolockedChannel = {
  __typename?: 'GeolockedChannel';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<Scalars['JSON']>;
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

export type IapOrderIntent = {
  __typename?: 'IapOrderIntent';
  status?: Maybe<IntentStatus>;
};

export type ImaAd = {
  __typename?: 'ImaAd';
  adTagUrl?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  deviceType?: Maybe<DeviceType>;
  entitlementsBypass?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['ID']>;
  imaType?: Maybe<ImaType>;
  location?: Maybe<AdLocation>;
  /** in milliseconds */
  maxDuration?: Maybe<Scalars['Int']>;
  platform?: Maybe<Platform>;
  source?: Maybe<AdSource>;
};

export enum ImaType {
  Companion = 'COMPANION',
  Linear = 'LINEAR',
  NonLinear = 'NON_LINEAR'
}

export type InputStyle = {
  background?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export enum IntentStatus {
  /** The user canceled the intent */
  Canceled = 'CANCELED',
  /** Once required actions are handled, the SetupIntent moves to processing. */
  Processing = 'PROCESSING',
  /** The user needs addictional actions such as authenticating with 3D Secure */
  RequiresAction = 'REQUIRES_ACTION',
  /** The user needs to confirm the payment */
  RequiresConfirmation = 'REQUIRES_CONFIRMATION',
  /** The user has no payment method attached */
  RequiresPaymentMethod = 'REQUIRES_PAYMENT_METHOD',
  /** The setup was successful */
  Succeeded = 'SUCCEEDED',
  /** The payment is unavailable */
  Unavailable = 'UNAVAILABLE'
}

export type InterstitialAd = {
  __typename?: 'InterstitialAd';
  /** Example: /123456/example_ad_name */
  adUnitId?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  deviceType?: Maybe<DeviceType>;
  entitlementsBypass?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['ID']>;
  location?: Maybe<AdLocation>;
  platform?: Maybe<Platform>;
  source?: Maybe<AdSource>;
  timing?: Maybe<InterstitialAdTiming>;
};

export enum InterstitialAdTiming {
  After = 'AFTER',
  Before = 'BEFORE',
  /** `BEFORE` and `AFTER`. */
  Wrap = 'WRAP'
}

export enum IntervalUnit {
  Day = 'DAY',
  Month = 'MONTH',
  Week = 'WEEK',
  Year = 'YEAR'
}

export type IosOrder = {
  productId: Scalars['String'];
  receipt: Scalars['Upload'];
};

export type Layer = {
  __typename?: 'Layer';
  broadcastId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<Style>;
  id?: Maybe<Scalars['String']>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  media?: Maybe<MediaPhoto>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<Style>;
  type?: Maybe<LayerType>;
  visible?: Maybe<Scalars['Boolean']>;
};

export enum LayerType {
  Background = 'BACKGROUND',
  BackgroundColor = 'BACKGROUND_COLOR',
  Banner = 'BANNER',
  Layer = 'LAYER'
}

export type Livestream = LivestreamEvent | RedactedLivestreamEvent;

export type LivestreamAnalytics = {
  __typename?: 'LivestreamAnalytics';
  comments?: Maybe<Scalars['Int']>;
  reactions?: Maybe<Scalars['Int']>;
  users?: Maybe<Scalars['Int']>;
};

export enum LivestreamContentSource {
  Mediaconnect = 'MEDIACONNECT',
  Mp4File = 'MP4_FILE',
  RtmpPull = 'RTMP_PULL',
  RtmpPush = 'RTMP_PUSH',
  RtpPush = 'RTP_PUSH',
  UrlPull = 'URL_PULL'
}

export enum LivestreamEncodingProfile {
  P160 = 'P160',
  P240 = 'P240',
  P480 = 'P480',
  P720 = 'P720',
  P1080 = 'P1080'
}

export enum LivestreamEncodingStatus {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  None = 'NONE',
  Progressing = 'PROGRESSING'
}

export type LivestreamEvent = {
  __typename?: 'LivestreamEvent';
  access?: Maybe<AccessFlag>;
  analytics?: Maybe<LivestreamAnalytics>;
  author?: Maybe<Author>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  commentsCount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dashPlaybackUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  encodingProfile?: Maybe<LivestreamEncodingProfile>;
  encodingStatus?: Maybe<LivestreamEncodingStatus>;
  endedAt?: Maybe<Scalars['DateTime']>;
  hlsPlaybackUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  isCommentsEnabled?: Maybe<Scalars['Boolean']>;
  isEmojisEnabled?: Maybe<Scalars['Boolean']>;
  isPresenceEnabled?: Maybe<Scalars['Boolean']>;
  isReactionsEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  maxCommentSeats?: Maybe<Scalars['Int']>;
  maxReactionSeats?: Maybe<Scalars['Int']>;
  orientation?: Maybe<LivestreamOrientation>;
  publishUrl?: Maybe<Scalars['String']>;
  reactionsCount?: Maybe<Scalars['Int']>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Scalars['String']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<LivestreamStatus>;
  streamName?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  usersCount?: Maybe<Scalars['Int']>;
  video?: Maybe<MediaLivestream>;
};

export type LivestreamFilter = {
  categoryId?: Maybe<Scalars['String']>;
  source?: Maybe<Sources>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<LivestreamStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<LivestreamStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<LivestreamStatus>>>;
};

export enum LivestreamOrientation {
  Landscape = 'LANDSCAPE',
  Portrait = 'PORTRAIT'
}

export enum LivestreamQualityProfile {
  Fhd = 'FHD',
  Hd = 'HD',
  Sd = 'SD',
  Uhd = 'UHD'
}

export enum LivestreamRegion {
  /** South America (São Paulo) */
  SaEast_1 = 'SA_EAST_1',
  /** US East (N. Virginia) */
  UsEast_1 = 'US_EAST_1'
}

export enum LivestreamStatus {
  Active = 'ACTIVE',
  Error = 'ERROR',
  Finished = 'FINISHED',
  Preparing = 'PREPARING',
  Scheduled = 'SCHEDULED',
  Trash = 'TRASH'
}

export type LivestreamTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: LivestreamTypeSortEnum;
};

export enum LivestreamTypeSortEnum {
  ScheduledEndAt = 'scheduledEndAt',
  ScheduledStartAt = 'scheduledStartAt',
  StartedAt = 'startedAt'
}

export type MediaAudio = {
  __typename?: 'MediaAudio';
  createdAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** audio url fragment */
  mp3Path?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MediaFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  /** Perform a simple text search similar to String.contains? */
  descriptionContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  descriptionNotcontains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to String.contains? */
  filenameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  filenameNotcontains?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  /** Test whether is set or not */
  typeExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  typeIn?: Maybe<Array<Maybe<MediaType>>>;
  /** Find records where does not match the given value */
  typeNot?: Maybe<MediaType>;
  /** find records where is not in the provided set */
  typeNotin?: Maybe<Array<Maybe<MediaType>>>;
  usage?: Maybe<Scalars['String']>;
};

export type MediaLivestream = {
  __typename?: 'MediaLivestream';
  aspectRatio?: Maybe<Scalars['String']>;
  /** video base cdn url */
  baseUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** dash playlist url fragment */
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  /** hls playlist url fragment */
  hlsPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** selected thumbnail url fragment */
  imgPath?: Maybe<Scalars['String']>;
  /** mp4 video file url fragment */
  mp4Path?: Maybe<Scalars['String']>;
  orientation?: Maybe<MediaOrientation>;
  status?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export enum MediaOrientation {
  Landscape = 'LANDSCAPE',
  Portrait = 'PORTRAIT'
}

export type MediaPhoto = {
  __typename?: 'MediaPhoto';
  createdAt?: Maybe<Scalars['DateTime']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** image url fragment */
  imgPath?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type MediaPlacement = {
  __typename?: 'MediaPlacement';
  audioFallbackUrl?: Maybe<Scalars['String']>;
  audioHostUrl?: Maybe<Scalars['String']>;
  screenDataUrl?: Maybe<Scalars['String']>;
  screenSharingUrl?: Maybe<Scalars['String']>;
  screenViewingUrl?: Maybe<Scalars['String']>;
  signalingUrl?: Maybe<Scalars['String']>;
  turnControlUrl?: Maybe<Scalars['String']>;
};

export type MediaPosition = {
  __typename?: 'MediaPosition';
  percent?: Maybe<Scalars['Float']>;
  seconds?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MediaThumbStub = {
  __typename?: 'MediaThumbStub';
  createdAt?: Maybe<Scalars['DateTime']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  /** selected thumbnail url fragment */
  imgPath?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum MediaType {
  Audio = 'AUDIO',
  Livestream = 'LIVESTREAM',
  Photo = 'PHOTO',
  Video = 'VIDEO'
}

export type MediaVideo = {
  __typename?: 'MediaVideo';
  /** video base cdn url */
  baseUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** dash playlist url fragment */
  dashPath?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  /** hls playlist url fragment */
  hlsPath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  /** selected thumbnail url fragment */
  imgPath?: Maybe<Scalars['String']>;
  /** mp4 video file url fragment */
  mp4Path?: Maybe<Scalars['String']>;
  /** s3 bucket mp4 url */
  s3Mp4Url?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  subtitles?: Maybe<Array<Maybe<Subtitle>>>;
  type?: Maybe<MediaType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  width?: Maybe<Scalars['Int']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  externalMeetingId?: Maybe<Scalars['String']>;
  mediaPlacement?: Maybe<MediaPlacement>;
  mediaRegion?: Maybe<Scalars['String']>;
  meetingId?: Maybe<Scalars['String']>;
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

export type MessageAuthor = {
  __typename?: 'MessageAuthor';
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorProfilePicture?: Maybe<Scalars['String']>;
  chatHost?: Maybe<Scalars['Boolean']>;
};

export type ModeratorRoom = {
  __typename?: 'ModeratorRoom';
  access?: Maybe<AccessFlag>;
  /** Returns the count of `ACTIVE` attendees including moderators */
  countAttendees?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  mediaPlacement?: Maybe<RoomMediaPlacement>;
  meetingId?: Maybe<Scalars['String']>;
  region?: Maybe<RoomRegion>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<RoomStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  activeAccount: Account;
  addComment?: Maybe<CreateCommentResponse>;
  addReaction?: Maybe<CountMeta>;
  addReport?: Maybe<Report>;
  addView?: Maybe<CountMeta>;
  addVote?: Maybe<VoteResult>;
  admin?: Maybe<AdminMutation>;
  applyCoupon?: Maybe<Order>;
  banAccountPerm: Account;
  banAccountTemp: Account;
  cancelPurebrosSubscription?: Maybe<Scalars['String']>;
  confirmBexPayment?: Maybe<Order>;
  confirmOrder?: Maybe<Order>;
  createAccount: Account;
  createAccountGdprLgpd: AccountGdprLgpd;
  createAccountSession: AccountSession;
  createBexPayment?: Maybe<Order>;
  createChannel: AvailableChannel;
  createCustomField: ResponseCustomFieldsOutput;
  createEmailTemplate: EmailTemplate;
  createGroup: GroupDto;
  createMenu: Menu;
  createOrderIntent?: Maybe<OrderIntent>;
  createOrganization: ResponseOrganizationOutput;
  createPermission: PermissionDto;
  createRole: RolesDto;
  createSubject: SubjectDto;
  deactiveAccount: Account;
  deleteComment?: Maybe<Comment>;
  deleteCustomField: ResponseCustomFieldsOutput;
  deleteMenu: Menu;
  finishRoom?: Maybe<Room>;
  forgetAccount: Account;
  joinBroadcastRoom?: Maybe<BroadcastRoom>;
  joinRoom?: Maybe<Attendee>;
  leaveRoom?: Maybe<Attendee>;
  moderateAttendee?: Maybe<Attendee>;
  orderCustomFormAnswers?: Maybe<Order>;
  pinCategory?: Maybe<Category>;
  pinPost?: Maybe<Post>;
  refreshToken: RefreshSignIn;
  removeAccount: Account;
  removeAccountGdprLgpd: AccountGdprLgpd;
  removeAccountSession: AccountSession;
  removeChannel: Channel;
  removeCoupon?: Maybe<Order>;
  removeEmailTemplate: EmailTemplate;
  removeGroup: GroupDto;
  removeOrganization: ResponseOrganizationOutput;
  removePermission: PermissionDto;
  removeProfile: Profile;
  removeReaction?: Maybe<CountMeta>;
  removeRole: RolesDto;
  removeSubject: SubjectDto;
  resetPassword: EmailSent;
  sendEmail: ResponseEmailSendedDto;
  signIn: SingIn;
  signOut: Scalars['VoidScalar'];
  socialSignIn: SingIn;
  subscribeAndroid?: Maybe<Scalars['String']>;
  subscribeIos?: Maybe<Scalars['String']>;
  subscribePurebros?: Maybe<Scalars['String']>;
  unbanAccountPerm: Account;
  unbanAccountTemp: Account;
  unpinCategory?: Maybe<Category>;
  unpinPost?: Maybe<Post>;
  updateAccount: Account;
  updateAccountGdprLgpd: AccountGdprLgpd;
  updateAccountSession: AccountSession;
  updateChannel: Channel;
  updateComment?: Maybe<Comment>;
  updateCustomField: ResponseCustomFieldsOutput;
  updateEmailTemplate: EmailTemplate;
  updateGroup: GroupDto;
  updateMenu: Menu;
  updateMyAccount: Account;
  updateMyProfile: Profile;
  updateOrganization: ResponseOrganizationOutput;
  updatePassword: PasswordChanged;
  updatePermission: PermissionDto;
  updateProfile: Profile;
  updateRole: RolesDto;
  updateSubject: SubjectDto;
  upvoteComment?: Maybe<Comment>;
  verifyMail: VerifyMail;
};


export type MutationActiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationAddCommentArgs = {
  description: Scalars['String'];
  parentId?: Maybe<Scalars['String']>;
  postId: Scalars['String'];
};


export type MutationAddReactionArgs = {
  postId: Scalars['String'];
  reaction: Reaction;
};


export type MutationAddReportArgs = {
  description?: Maybe<Scalars['String']>;
  idReported: Scalars['String'];
  reason: Scalars['String'];
  type: ReportType;
};


export type MutationAddViewArgs = {
  postId: Scalars['String'];
};


export type MutationAddVoteArgs = {
  choiceId: Scalars['String'];
  pollId: Scalars['String'];
};


export type MutationApplyCouponArgs = {
  couponCode: Scalars['String'];
  orderId: Scalars['String'];
};


export type MutationBanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationBanAccountTempArgs = {
  account: Scalars['String'];
  input: BanAccountTemporary;
};


export type MutationCancelPurebrosSubscriptionArgs = {
  subscriptionId: Scalars['String'];
};


export type MutationConfirmBexPaymentArgs = {
  clientSecret: Scalars['String'];
  orderId: Scalars['String'];
};


export type MutationConfirmOrderArgs = {
  cardToken: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  installments?: Maybe<Scalars['Int']>;
  nationalId?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  paymentType: PaymentType;
  phone?: Maybe<Scalars['String']>;
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


export type MutationCreateBexPaymentArgs = {
  cardInfo?: Maybe<CardInfo>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  nationalId: Scalars['String'];
  orderId: Scalars['String'];
  paymentType: PaymentType;
  phone?: Maybe<Scalars['String']>;
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


export type MutationCreateGroupArgs = {
  payload: CreateGroupDto;
};


export type MutationCreateMenuArgs = {
  payload: CreateMenu;
};


export type MutationCreateOrderIntentArgs = {
  platform: OrderPlatform;
  productPriceId: Scalars['String'];
  store?: Maybe<Store>;
};


export type MutationCreateOrganizationArgs = {
  payload: CreateOrganizationInput;
};


export type MutationCreatePermissionArgs = {
  payload: CreatePermissionInput;
};


export type MutationCreateRoleArgs = {
  payload: CreateRoleInput;
};


export type MutationCreateSubjectArgs = {
  payload: CreateSubjectInput;
};


export type MutationDeactiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['String'];
};


export type MutationDeleteCustomFieldArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteMenuArgs = {
  id: Scalars['ID'];
};


export type MutationFinishRoomArgs = {
  id: Scalars['String'];
};


export type MutationForgetAccountArgs = {
  id: Scalars['ID'];
};


export type MutationJoinBroadcastRoomArgs = {
  id: Scalars['String'];
  name: Scalars['String'];
};


export type MutationJoinRoomArgs = {
  id: Scalars['String'];
};


export type MutationLeaveRoomArgs = {
  id: Scalars['String'];
};


export type MutationModerateAttendeeArgs = {
  id: Scalars['String'];
  modStatus: AccountModStatus;
};


export type MutationOrderCustomFormAnswersArgs = {
  customFormAnswers: Scalars['JSONString'];
  orderId: Scalars['String'];
};


export type MutationPinCategoryArgs = {
  categoryId: Scalars['String'];
};


export type MutationPinPostArgs = {
  postId: Scalars['String'];
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


export type MutationRemoveCouponArgs = {
  orderId: Scalars['String'];
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


export type MutationRemoveProfileArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveReactionArgs = {
  postId: Scalars['String'];
  reaction: Reaction;
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveSubjectArgs = {
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


export type MutationSignOutArgs = {
  payload: RefreshTokenInput;
};


export type MutationSocialSignInArgs = {
  input: CreateAccountSocialSignInDto;
};


export type MutationSubscribeAndroidArgs = {
  order: AndroidOrder;
};


export type MutationSubscribeIosArgs = {
  order: IosOrder;
};


export type MutationSubscribePurebrosArgs = {
  order: PurebrosOrder;
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


export type MutationUpdateAccountSessionArgs = {
  id: Scalars['String'];
  updateAccountSessionInput: UpdateAccountSessionInput;
};


export type MutationUpdateChannelArgs = {
  id: Scalars['ID'];
  payload: UpdateChannelInput;
};


export type MutationUpdateCommentArgs = {
  description: Scalars['String'];
  id: Scalars['String'];
};


export type MutationUpdateCustomFieldArgs = {
  id: Scalars['ID'];
  payload: UpdateCustomFieldInput;
};


export type MutationUpdateEmailTemplateArgs = {
  id: Scalars['ID'];
  payload: UpdateEmailTemplateDto;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID'];
  payload: UpdateGroupDto;
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


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  payload: UpdatePermissionInput;
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


export type MutationUpvoteCommentArgs = {
  commentId: Scalars['String'];
  direction?: Maybe<UpvoteDirection>;
};


export type MutationVerifyMailArgs = {
  payload: VerifyEmailDto;
};

export type MyReaction = {
  __typename?: 'MyReaction';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Reaction>;
};

export type OnDemandPost = PostCommon & {
  __typename?: 'OnDemandPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaLivestream>;
  mediaPosition?: Maybe<MediaPosition>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Order = {
  __typename?: 'Order';
  appliedProductPrice?: Maybe<AppliedProductPrice>;
  couponId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Stringified JSON representation of the Form Render data */
  customFormAnswers?: Maybe<Scalars['JSONString']>;
  error?: Maybe<OrderError>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  originalTransaction?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  platform?: Maybe<OrderPlatform>;
  productPrice?: Maybe<ProductPrice>;
  purchasedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<OrderStatus>;
  store?: Maybe<Store>;
  transaction?: Maybe<Scalars['String']>;
};

export enum OrderDeclineCode {
  /** by STRIPE */
  ApproveWithId = 'APPROVE_WITH_ID',
  /** by STRIPE */
  AuthenticationRequired = 'AUTHENTICATION_REQUIRED',
  /** by STRIPE */
  CallIssuer = 'CALL_ISSUER',
  /** by STRIPE */
  CardNotSupported = 'CARD_NOT_SUPPORTED',
  /** by STRIPE */
  CardVelocityExceeded = 'CARD_VELOCITY_EXCEEDED',
  /** by STRIPE */
  CurrencyNotSupported = 'CURRENCY_NOT_SUPPORTED',
  /** by STRIPE */
  DoNotHonor = 'DO_NOT_HONOR',
  /** by STRIPE */
  DoNotTryAgain = 'DO_NOT_TRY_AGAIN',
  /** by STRIPE */
  DuplicateTransaction = 'DUPLICATE_TRANSACTION',
  /** by STRIPE */
  ExpiredCard = 'EXPIRED_CARD',
  /** by STRIPE */
  Fraudulent = 'FRAUDULENT',
  /** by STRIPE */
  GenericDecline = 'GENERIC_DECLINE',
  /** by STRIPE */
  IncorrectCvc = 'INCORRECT_CVC',
  /** by STRIPE */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** by STRIPE */
  IncorrectPin = 'INCORRECT_PIN',
  /** by STRIPE */
  IncorrectZip = 'INCORRECT_ZIP',
  /** by STRIPE */
  InsufficientFunds = 'INSUFFICIENT_FUNDS',
  /** by STRIPE */
  InvalidAccount = 'INVALID_ACCOUNT',
  /** by STRIPE */
  InvalidAmount = 'INVALID_AMOUNT',
  /** by STRIPE */
  InvalidCvc = 'INVALID_CVC',
  /** by STRIPE */
  InvalidExpiryYear = 'INVALID_EXPIRY_YEAR',
  /** by STRIPE */
  InvalidNumber = 'INVALID_NUMBER',
  /** by STRIPE */
  InvalidPin = 'INVALID_PIN',
  /** by STRIPE */
  IssuerNotAvailable = 'ISSUER_NOT_AVAILABLE',
  /** by STRIPE */
  LostCard = 'LOST_CARD',
  /** by STRIPE */
  MerchantBlacklist = 'MERCHANT_BLACKLIST',
  /** by STRIPE */
  NewAccountInformationAvailable = 'NEW_ACCOUNT_INFORMATION_AVAILABLE',
  /** by STRIPE */
  NotPermitted = 'NOT_PERMITTED',
  /** by STRIPE */
  NoActionTaken = 'NO_ACTION_TAKEN',
  /** by STRIPE */
  OfflinePinRequired = 'OFFLINE_PIN_REQUIRED',
  /** by STRIPE */
  OnlineOrOfflinePinRequired = 'ONLINE_OR_OFFLINE_PIN_REQUIRED',
  /** by STRIPE */
  PickupCard = 'PICKUP_CARD',
  /** by STRIPE */
  PinTryExceeded = 'PIN_TRY_EXCEEDED',
  /** by STRIPE */
  ProcessingError = 'PROCESSING_ERROR',
  /** by STRIPE */
  ReenterTransaction = 'REENTER_TRANSACTION',
  /** by STRIPE */
  RestrictedCard = 'RESTRICTED_CARD',
  /** by STRIPE */
  RevocationOfAllAuthorizations = 'REVOCATION_OF_ALL_AUTHORIZATIONS',
  /** by STRIPE */
  RevocationOfAuthorization = 'REVOCATION_OF_AUTHORIZATION',
  /** by STRIPE */
  SecurityViolation = 'SECURITY_VIOLATION',
  /** by STRIPE */
  ServiceNotAllowed = 'SERVICE_NOT_ALLOWED',
  /** by STRIPE */
  StolenCard = 'STOLEN_CARD',
  /** by STRIPE */
  StopPaymentOrder = 'STOP_PAYMENT_ORDER',
  /** by STRIPE */
  TestmodeDecline = 'TESTMODE_DECLINE',
  /** by STRIPE */
  TransactionNotAllowed = 'TRANSACTION_NOT_ALLOWED',
  /** by STRIPE */
  TryAgainLater = 'TRY_AGAIN_LATER',
  /** by STRIPE */
  WithdrawalCountLimitExceeded = 'WITHDRAWAL_COUNT_LIMIT_EXCEEDED'
}

export type OrderError = {
  __typename?: 'OrderError';
  code?: Maybe<OrderErrorCode>;
  declineCode?: Maybe<OrderDeclineCode>;
  message?: Maybe<Scalars['String']>;
  type?: Maybe<OrderErrorType>;
};

export enum OrderErrorCode {
  /** by STRIPE */
  AccountAlreadyExists = 'ACCOUNT_ALREADY_EXISTS',
  /** by STRIPE */
  AccountCountryInvalidAddress = 'ACCOUNT_COUNTRY_INVALID_ADDRESS',
  /** by STRIPE */
  AccountInvalid = 'ACCOUNT_INVALID',
  /** by STRIPE */
  AccountNumberInvalid = 'ACCOUNT_NUMBER_INVALID',
  /** by STRIPE */
  AlipayUpgradeRequired = 'ALIPAY_UPGRADE_REQUIRED',
  /** by STRIPE */
  AmountTooLarge = 'AMOUNT_TOO_LARGE',
  /** by STRIPE */
  AmountTooSmall = 'AMOUNT_TOO_SMALL',
  /** by STRIPE */
  ApiKeyExpired = 'API_KEY_EXPIRED',
  /** by STRIPE */
  AuthenticationRequired = 'AUTHENTICATION_REQUIRED',
  /** by BEXS */
  Authorized = 'AUTHORIZED',
  /** by STRIPE */
  BalanceInsufficient = 'BALANCE_INSUFFICIENT',
  /** by STRIPE */
  BankAccountDeclined = 'BANK_ACCOUNT_DECLINED',
  /** by STRIPE */
  BankAccountExists = 'BANK_ACCOUNT_EXISTS',
  /** by STRIPE */
  BankAccountUnusable = 'BANK_ACCOUNT_UNUSABLE',
  /** by STRIPE */
  BankAccountUnverified = 'BANK_ACCOUNT_UNVERIFIED',
  /** by STRIPE */
  BankAccountVerificationFailed = 'BANK_ACCOUNT_VERIFICATION_FAILED',
  /** by STRIPE */
  BitcoinUpgradeRequired = 'BITCOIN_UPGRADE_REQUIRED',
  /** by BEXS */
  Canceled = 'CANCELED',
  /** by STRIPE */
  CardDeclined = 'CARD_DECLINED',
  /** by STRIPE */
  CardDeclineRateLimitExceeded = 'CARD_DECLINE_RATE_LIMIT_EXCEEDED',
  /** by STRIPE */
  ChargeAlreadyCaptured = 'CHARGE_ALREADY_CAPTURED',
  /** by STRIPE */
  ChargeAlreadyRefunded = 'CHARGE_ALREADY_REFUNDED',
  /** by STRIPE */
  ChargeDisputed = 'CHARGE_DISPUTED',
  /** by STRIPE */
  ChargeExceedsSourceLimit = 'CHARGE_EXCEEDS_SOURCE_LIMIT',
  /** by STRIPE */
  ChargeExpiredForCapture = 'CHARGE_EXPIRED_FOR_CAPTURE',
  /** by STRIPE */
  ChargeInvalidParameter = 'CHARGE_INVALID_PARAMETER',
  /** by BEXS */
  Confirmed = 'CONFIRMED',
  /** by STRIPE */
  CountryUnsupported = 'COUNTRY_UNSUPPORTED',
  /** by STRIPE */
  CouponExpired = 'COUPON_EXPIRED',
  /** by STRIPE */
  CustomerMaxPaymentMethods = 'CUSTOMER_MAX_PAYMENT_METHODS',
  /** by STRIPE */
  CustomerMaxSubscriptions = 'CUSTOMER_MAX_SUBSCRIPTIONS',
  /** by BEXS */
  DeclinedByBusinessRules = 'DECLINED_BY_BUSINESS_RULES',
  /** by BEXS */
  DeclinedByIssuer = 'DECLINED_BY_ISSUER',
  /** by STRIPE */
  EmailInvalid = 'EMAIL_INVALID',
  /** by STRIPE */
  ExpiredCard = 'EXPIRED_CARD',
  /** by STRIPE */
  IdempotencyKeyInUse = 'IDEMPOTENCY_KEY_IN_USE',
  /** by STRIPE */
  IncorrectAddress = 'INCORRECT_ADDRESS',
  /** by STRIPE */
  IncorrectCvc = 'INCORRECT_CVC',
  /** by STRIPE */
  IncorrectNumber = 'INCORRECT_NUMBER',
  /** by STRIPE */
  IncorrectZip = 'INCORRECT_ZIP',
  /** by STRIPE */
  InstantPayoutsUnsupported = 'INSTANT_PAYOUTS_UNSUPPORTED',
  /** by STRIPE */
  InvalidCardType = 'INVALID_CARD_TYPE',
  /** by STRIPE */
  InvalidCharacters = 'INVALID_CHARACTERS',
  /** by STRIPE */
  InvalidChargeAmount = 'INVALID_CHARGE_AMOUNT',
  /** by STRIPE */
  InvalidCvc = 'INVALID_CVC',
  /** by STRIPE */
  InvalidExpiryMonth = 'INVALID_EXPIRY_MONTH',
  /** by STRIPE */
  InvalidExpiryYear = 'INVALID_EXPIRY_YEAR',
  /** by STRIPE */
  InvalidNumber = 'INVALID_NUMBER',
  /** by STRIPE */
  InvalidSourceUsage = 'INVALID_SOURCE_USAGE',
  /** by STRIPE */
  InvoiceNotEditable = 'INVOICE_NOT_EDITABLE',
  /** by STRIPE */
  InvoiceNoCustomerLineItems = 'INVOICE_NO_CUSTOMER_LINE_ITEMS',
  /** by STRIPE */
  InvoiceNoSubscriptionLineItems = 'INVOICE_NO_SUBSCRIPTION_LINE_ITEMS',
  /** by STRIPE */
  InvoicePaymentIntentRequiresAction = 'INVOICE_PAYMENT_INTENT_REQUIRES_ACTION',
  /** by STRIPE */
  InvoiceUpcomingNone = 'INVOICE_UPCOMING_NONE',
  /** by STRIPE */
  LivemodeMismatch = 'LIVEMODE_MISMATCH',
  /** by STRIPE */
  LockTimeout = 'LOCK_TIMEOUT',
  /** by STRIPE */
  Missing = 'MISSING',
  /** by STRIPE */
  NotAllowedOnStandardAccount = 'NOT_ALLOWED_ON_STANDARD_ACCOUNT',
  /** by STRIPE */
  OrderCreationFailed = 'ORDER_CREATION_FAILED',
  /** by STRIPE */
  OrderRequiredSettings = 'ORDER_REQUIRED_SETTINGS',
  /** by STRIPE */
  OrderStatusInvalid = 'ORDER_STATUS_INVALID',
  /** by STRIPE */
  OrderUpstreamTimeout = 'ORDER_UPSTREAM_TIMEOUT',
  /** by STRIPE */
  OutOfInventory = 'OUT_OF_INVENTORY',
  /** by STRIPE */
  ParametersExclusive = 'PARAMETERS_EXCLUSIVE',
  /** by STRIPE */
  ParameterInvalidEmpty = 'PARAMETER_INVALID_EMPTY',
  /** by STRIPE */
  ParameterInvalidInteger = 'PARAMETER_INVALID_INTEGER',
  /** by STRIPE */
  ParameterInvalidStringBlank = 'PARAMETER_INVALID_STRING_BLANK',
  /** by STRIPE */
  ParameterInvalidStringEmpty = 'PARAMETER_INVALID_STRING_EMPTY',
  /** by STRIPE */
  ParameterMissing = 'PARAMETER_MISSING',
  /** by STRIPE */
  ParameterUnknown = 'PARAMETER_UNKNOWN',
  /** by STRIPE */
  PaymentIntentActionRequired = 'PAYMENT_INTENT_ACTION_REQUIRED',
  /** by STRIPE */
  PaymentIntentAuthenticationFailure = 'PAYMENT_INTENT_AUTHENTICATION_FAILURE',
  /** by STRIPE */
  PaymentIntentIncompatiblePaymentMethod = 'PAYMENT_INTENT_INCOMPATIBLE_PAYMENT_METHOD',
  /** by STRIPE */
  PaymentIntentInvalidParameter = 'PAYMENT_INTENT_INVALID_PARAMETER',
  /** by STRIPE */
  PaymentIntentPaymentAttemptFailed = 'PAYMENT_INTENT_PAYMENT_ATTEMPT_FAILED',
  /** by STRIPE */
  PaymentIntentUnexpectedState = 'PAYMENT_INTENT_UNEXPECTED_STATE',
  /** by STRIPE */
  PaymentMethodUnactivated = 'PAYMENT_METHOD_UNACTIVATED',
  /** by STRIPE */
  PaymentMethodUnexpectedState = 'PAYMENT_METHOD_UNEXPECTED_STATE',
  /** by STRIPE */
  PayoutsNotAllowed = 'PAYOUTS_NOT_ALLOWED',
  /** by STRIPE */
  PlatformApiKeyExpired = 'PLATFORM_API_KEY_EXPIRED',
  /** by STRIPE */
  PostalCodeInvalid = 'POSTAL_CODE_INVALID',
  /** by STRIPE */
  ProcessingError = 'PROCESSING_ERROR',
  /** by STRIPE */
  ProductInactive = 'PRODUCT_INACTIVE',
  /** by STRIPE */
  RateLimit = 'RATE_LIMIT',
  /** by STRIPE */
  ResourceAlreadyExists = 'RESOURCE_ALREADY_EXISTS',
  /** by STRIPE */
  ResourceMissing = 'RESOURCE_MISSING',
  /** by STRIPE */
  RoutingNumberInvalid = 'ROUTING_NUMBER_INVALID',
  /** by STRIPE */
  SecretKeyRequired = 'SECRET_KEY_REQUIRED',
  /** by STRIPE */
  SepaUnsupportedAccount = 'SEPA_UNSUPPORTED_ACCOUNT',
  /** by STRIPE */
  SetupAttemptFailed = 'SETUP_ATTEMPT_FAILED',
  /** by STRIPE */
  SetupIntentAuthenticationFailure = 'SETUP_INTENT_AUTHENTICATION_FAILURE',
  /** by STRIPE */
  SetupIntentInvalidParameter = 'SETUP_INTENT_INVALID_PARAMETER',
  /** by STRIPE */
  SetupIntentUnexpectedState = 'SETUP_INTENT_UNEXPECTED_STATE',
  /** by STRIPE */
  ShippingCalculationFailed = 'SHIPPING_CALCULATION_FAILED',
  /** by STRIPE */
  SkuInactive = 'SKU_INACTIVE',
  /** by STRIPE */
  StateUnsupported = 'STATE_UNSUPPORTED',
  /** by STRIPE */
  TaxesCalculationFailed = 'TAXES_CALCULATION_FAILED',
  /** by STRIPE */
  TaxIdInvalid = 'TAX_ID_INVALID',
  /** by STRIPE */
  TestmodeChargesOnly = 'TESTMODE_CHARGES_ONLY',
  /** by STRIPE */
  TlsVersionUnsupported = 'TLS_VERSION_UNSUPPORTED',
  /** by STRIPE */
  TokenAlreadyUsed = 'TOKEN_ALREADY_USED',
  /** by STRIPE */
  TokenInUse = 'TOKEN_IN_USE',
  /** by BEXS */
  Transference = 'TRANSFERENCE',
  /** by STRIPE */
  TransfersNotAllowed = 'TRANSFERS_NOT_ALLOWED',
  Unknown = 'UNKNOWN',
  /** by STRIPE */
  UpstreamOrderCreationFailed = 'UPSTREAM_ORDER_CREATION_FAILED',
  /** by STRIPE */
  UrlInvalid = 'URL_INVALID',
  /** by BEXS */
  WaitingCancelation = 'WAITING_CANCELATION',
  /** by BEXS */
  WaitingConsumer = 'WAITING_CONSUMER'
}

export enum OrderErrorType {
  ApiConnectionError = 'API_CONNECTION_ERROR',
  ApiError = 'API_ERROR',
  AuthenticationError = 'AUTHENTICATION_ERROR',
  CardError = 'CARD_ERROR',
  CreditCard = 'CREDIT_CARD',
  IdempotencyError = 'IDEMPOTENCY_ERROR',
  InvalidRequestError = 'INVALID_REQUEST_ERROR',
  RateLimitError = 'RATE_LIMIT_ERROR'
}

export enum OrderExtraField {
  Email = 'EMAIL',
  FullName = 'FULL_NAME',
  Installments = 'INSTALLMENTS',
  NationalId = 'NATIONAL_ID'
}

export type OrderFilter = {
  platform?: Maybe<OrderPlatform>;
  productId?: Maybe<Scalars['String']>;
  productPriceId?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  store?: Maybe<Store>;
  transaction?: Maybe<Scalars['String']>;
};

export type OrderIntent = BexsOrderIntent | IapOrderIntent | RevenuecatOrderIntent | SpreedlyOrderIntent | StripeOrderIntent;

export enum OrderPlatform {
  Android = 'ANDROID',
  Ios = 'IOS',
  Unknown = 'UNKNOWN',
  Web = 'WEB'
}

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Invalid = 'INVALID',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Revoked = 'REVOKED',
  Valid = 'VALID'
}

export type OrderTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: OrderTypeSortEnum;
};

export enum OrderTypeSortEnum {
  ExpiresAt = 'expiresAt',
  PurchasedAt = 'purchasedAt'
}

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

export type Parameters = {
  __typename?: 'Parameters';
  id: Scalars['ID'];
  missing?: Maybe<Scalars['String']>;
};

export type PasswordChanged = {
  __typename?: 'PasswordChanged';
  success: Scalars['Boolean'];
};

export type Payment = {
  __typename?: 'Payment';
  account?: Maybe<Account>;
  amount?: Maybe<Price>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  order?: Maybe<Order>;
  processedAt?: Maybe<Scalars['DateTime']>;
  receipt?: Maybe<Scalars['JSONString']>;
  status?: Maybe<PaymentStatus>;
  zoho?: Maybe<Scalars['JSONString']>;
};

export type PaymentBank = {
  __typename?: 'PaymentBank';
  accountLast4?: Maybe<Scalars['String']>;
  agency?: Maybe<Scalars['String']>;
  bankCode?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type PaymentCard = {
  __typename?: 'PaymentCard';
  brand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  funding?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  type?: Maybe<PaymentType>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  bank?: Maybe<PaymentBank>;
  card?: Maybe<PaymentCard>;
  cardToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  recache?: Maybe<Scalars['Boolean']>;
};

export enum PaymentStatus {
  Authorized = 'AUTHORIZED',
  Declined = 'DECLINED',
  Error = 'ERROR',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  Succeeded = 'SUCCEEDED'
}

export enum PaymentType {
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD'
}

export type PbStatus = {
  __typename?: 'PbStatus';
  expires?: Maybe<Scalars['DateTime']>;
  subscriptionId?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
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

export type PhotoPost = PostCommon & {
  __typename?: 'PhotoPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Platform {
  Mobile = 'MOBILE',
  Web = 'WEB'
}

export enum PlatformExclusive {
  Mobile = 'Mobile',
  Web = 'Web'
}

export type Poll = PostCommon & {
  __typename?: 'Poll';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  choices?: Maybe<Array<Maybe<PollChoice>>>;
  closedAt?: Maybe<Scalars['DateTime']>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  myVote?: Maybe<Scalars['String']>;
  opensAt?: Maybe<Scalars['DateTime']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PollChoice = {
  __typename?: 'PollChoice';
  choice?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  voteCount?: Maybe<Scalars['Int']>;
};

export type PopTrendPostFilter = {
  /** Test whether is set or not */
  featuredAtExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  featuredAtIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Find records where does not match the given value */
  featuredAtNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  featuredAtNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PostType>;
  /** Test whether is set or not */
  typeExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  typeIn?: Maybe<Array<Maybe<PostType>>>;
  /** Find records where does not match the given value */
  typeNot?: Maybe<PostType>;
  /** find records where is not in the provided set */
  typeNotin?: Maybe<Array<Maybe<PostType>>>;
};

export type Post = AudioPost | OnDemandPost | PhotoPost | Poll | RedactedAudioPost | RedactedOnDemandPost | RedactedPhotoPost | RedactedPoll | RedactedTextPost | RedactedVideoPost | TextPost | VideoPost;

export type PostCommon = {
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PostFilter = {
  categoryId?: Maybe<Scalars['String']>;
  /** Test whether is set or not */
  featuredAtExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  featuredAtIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  /** Find records where does not match the given value */
  featuredAtNot?: Maybe<Scalars['DateTime']>;
  /** find records where is not in the provided set */
  featuredAtNotin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  type?: Maybe<PostType>;
  /** Test whether is set or not */
  typeExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  typeIn?: Maybe<Array<Maybe<PostType>>>;
  /** Find records where does not match the given value */
  typeNot?: Maybe<PostType>;
  /** find records where is not in the provided set */
  typeNotin?: Maybe<Array<Maybe<PostType>>>;
};

export type PostReaction = {
  __typename?: 'PostReaction';
  count?: Maybe<Scalars['Int']>;
  name?: Maybe<Reaction>;
};

export enum PostStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Scheduled = 'SCHEDULED',
  Trash = 'TRASH'
}

export enum PostType {
  Audio = 'AUDIO',
  OnDemand = 'ON_DEMAND',
  Photo = 'PHOTO',
  Poll = 'POLL',
  Text = 'TEXT',
  Video = 'VIDEO'
}

export type PostTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: PostTypeSortEnum;
};

export enum PostTypeSortEnum {
  Popular = 'popular',
  PublishedAt = 'publishedAt',
  Trending = 'trending',
  Type = 'type'
}

export type PostTypes = {
  __typename?: 'PostTypes';
  count?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type PredefinedList = {
  __typename?: 'PredefinedList';
  channel?: Maybe<Channel>;
  id?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<PredefinedListStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<PredefinedListType>;
};

export enum PredefinedListStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum PredefinedListType {
  Bookmarked = 'BOOKMARKED',
  ContinueWatching = 'CONTINUE_WATCHING',
  LiveAndUpcoming = 'LIVE_AND_UPCOMING',
  MostPopularCollections = 'MOST_POPULAR_COLLECTIONS',
  MostPopularPosts = 'MOST_POPULAR_POSTS',
  MostRecentCollections = 'MOST_RECENT_COLLECTIONS',
  MostRecentPosts = 'MOST_RECENT_POSTS',
  RecentlyWatchedCollections = 'RECENTLY_WATCHED_COLLECTIONS',
  RecentlyWatchedPosts = 'RECENTLY_WATCHED_POSTS',
  TrendingCollections = 'TRENDING_COLLECTIONS',
  TrendingPosts = 'TRENDING_POSTS'
}

export type PredifinedListFilter = {
  /** search for records where is greater than */
  createdAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  createdAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  createdAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  createdAtLte?: Maybe<Scalars['DateTime']>;
  status?: Maybe<PredefinedListStatus>;
  /** Perform a simple text search similar to String.contains? */
  titleContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  titleNotcontains?: Maybe<Scalars['String']>;
  type?: Maybe<PredefinedListType>;
  /** search for records where is greater than */
  updatedAtGt?: Maybe<Scalars['DateTime']>;
  /** search for records where is greater than or equal to */
  updatedAtGte?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than */
  updatedAtLt?: Maybe<Scalars['DateTime']>;
  /** search for records where is less than or equal to */
  updatedAtLte?: Maybe<Scalars['DateTime']>;
};

export type Price = {
  __typename?: 'Price';
  /** The amount in cents, represented as a whole integer (or 0 for a free price) */
  amount?: Maybe<Scalars['Int']>;
  /** The amount represented as decimal */
  amountAsDecimal?: Maybe<Scalars['Decimal']>;
  /** Three-letter ISO 4217 currency code */
  currency?: Maybe<Scalars['String']>;
  /** Money representation with correct symbol and separator for the currency */
  formatted?: Maybe<Scalars['String']>;
  /** The symbol of the currency or NULL if it doesn’t exist */
  symbol?: Maybe<Scalars['String']>;
};

export type PriceInterval = {
  __typename?: 'PriceInterval';
  count?: Maybe<Scalars['Int']>;
  unit?: Maybe<IntervalUnit>;
};

export type PriceOverrideRule = {
  __typename?: 'PriceOverrideRule';
  newPrice?: Maybe<Price>;
};

export enum PriceTierType {
  Purchase = 'PURCHASE',
  Recurring = 'RECURRING'
}

export type PriceTiersFilter = {
  /** Perform a simple text search similar to String.contains? */
  countryNameContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  countryNameNotcontains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to String.contains? */
  currencyContains?: Maybe<Scalars['String']>;
  /** Perform a simple text search similar to !String.contains? */
  currencyNotcontains?: Maybe<Scalars['String']>;
  type?: Maybe<PriceTierType>;
};

export type Product = {
  __typename?: 'Product';
  channel?: Maybe<Channel>;
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Stringified JSON representation of the Form Builder data */
  customFormData?: Maybe<Scalars['JSONString']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasAndroid?: Maybe<Scalars['Boolean']>;
  hasApple?: Maybe<Scalars['Boolean']>;
  hasStripe?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  isBundle?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  prices?: Maybe<Array<Maybe<ProductPrice>>>;
  status?: Maybe<ProductStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductFilter = {
  isBundle?: Maybe<Scalars['Boolean']>;
  type?: Maybe<ProductType>;
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  badge?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  hasAndroid?: Maybe<Scalars['Boolean']>;
  hasApple?: Maybe<Scalars['Boolean']>;
  hasStripe?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  interval?: Maybe<PriceInterval>;
  /** Will always return `1` for requests outside Brazil. */
  maxInstallments?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  price?: Maybe<Price>;
  product?: Maybe<Product>;
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<ProductStatus>;
  trialPeriod?: Maybe<PriceInterval>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductPriceOverride = {
  __typename?: 'ProductPriceOverride';
  price?: Maybe<Price>;
  trialPeriod?: Maybe<PriceInterval>;
};

export type ProductPriceTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: ProductPriceTypeSortEnum;
};

export enum ProductPriceTypeSortEnum {
  Name = 'name',
  Sort = 'sort',
  Type = 'type'
}

export enum ProductStatus {
  Active = 'ACTIVE',
  Error = 'ERROR',
  Pending = 'PENDING',
  Trash = 'TRASH'
}

export enum ProductType {
  Donation = 'DONATION',
  Ppv = 'PPV',
  Purchase = 'PURCHASE',
  Recurring = 'RECURRING',
  Rental = 'RENTAL'
}

export type ProductTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: ProductTypeSortEnum;
};

export enum ProductTypeSortEnum {
  CreatedAt = 'createdAt',
  IsBundle = 'isBundle',
  Name = 'name',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type Profile = {
  __typename?: 'Profile';
  account: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  custom_fields?: Maybe<Scalars['JSONObject']>;
  gender?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  callToAction?: Maybe<Scalars['String']>;
  countOpens?: Maybe<Scalars['Int']>;
  countViews?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  media?: Maybe<MediaPhoto>;
  startedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type PromotionTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: PromotionTypeSortEnum;
};

export enum PromotionTypeSortEnum {
  EndedAt = 'endedAt',
  StartedAt = 'startedAt'
}

export type PurebrosOrder = {
  platform: Scalars['String'];
  productId: Scalars['String'];
  subscriptionId: Scalars['String'];
};

export type PushNotification = {
  __typename?: 'PushNotification';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  /** does not send if true, default: false */
  ignore?: Maybe<Scalars['Boolean']>;
  status?: Maybe<PushNotificationStatus>;
  title?: Maybe<Scalars['String']>;
};

export enum PushNotificationStatus {
  Complete = 'COMPLETE',
  Error = 'ERROR'
}

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountGdprLgpd: AccountGdprLgpd;
  accountSession: AccountSession;
  accountSessions: Array<AccountSession>;
  accounts: Array<Account>;
  accountsGdprLgpd: Array<AccountGdprLgpd>;
  ad?: Maybe<Ad>;
  admin?: Maybe<AdminQuery>;
  ads?: Maybe<Array<Maybe<Ad>>>;
  billboard?: Maybe<Array<Maybe<Billboard>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  channel: Channel;
  channels: Array<Channel>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  /** List of posts recently played by the user. */
  continueWatchingPosts?: Maybe<Array<Maybe<Post>>>;
  coupon?: Maybe<Coupon>;
  customField: ResponseCustomFieldsOutput;
  customFields: Array<ResponseCustomFieldsOutput>;
  emailTemplate: EmailTemplate;
  emailTemplates: Array<EmailTemplate>;
  group: GroupDto;
  groups: Array<GroupDto>;
  joinedRooms?: Maybe<Array<Maybe<Room>>>;
  layer?: Maybe<Layer>;
  layers?: Maybe<Array<Maybe<Layer>>>;
  layersCount?: Maybe<Scalars['Int']>;
  livestream?: Maybe<Livestream>;
  livestreams?: Maybe<Array<Maybe<Livestream>>>;
  menu: Menu;
  menus: Array<Menu>;
  order?: Maybe<Order>;
  orders?: Maybe<Array<Maybe<Order>>>;
  ordersByChannel?: Maybe<Array<Maybe<Order>>>;
  organization: ResponseOrganizationOutput;
  organizationPublicSettings: ResponseOrganizationOutput;
  organizations: Array<ResponseOrganizationOutput>;
  permission: PermissionDto;
  permissions: Array<PermissionDto>;
  pinnedCategories?: Maybe<Array<Maybe<Category>>>;
  pinnedPosts?: Maybe<Array<Maybe<Post>>>;
  /** Most popular posts of all time */
  popularPosts?: Maybe<Array<Maybe<Post>>>;
  post?: Maybe<Post>;
  /** The main list of published content, unless explicitly excluded */
  posts?: Maybe<Array<Maybe<Post>>>;
  price?: Maybe<ProductPrice>;
  prices?: Maybe<Array<Maybe<ProductPrice>>>;
  product?: Maybe<Product>;
  products?: Maybe<Array<Maybe<Product>>>;
  profile: Profile;
  profiles: Array<Profile>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  purebrosStatus?: Maybe<PbStatus>;
  purebrosToken?: Maybe<Scalars['String']>;
  revenuecatStatus?: Maybe<SubscriptionStatus>;
  role: RolesDto;
  roles: Array<RolesDto>;
  room?: Maybe<Room>;
  rooms?: Maybe<Array<Maybe<Room>>>;
  screen?: Maybe<Screen>;
  screens?: Maybe<Array<Maybe<Screen>>>;
  screensCount?: Maybe<Scalars['Int']>;
  search?: Maybe<Array<Maybe<SearchResult>>>;
  subject: SubjectDto;
  subjects: Array<SubjectDto>;
  /** Most popular posts within the past week */
  trendingPosts?: Maybe<Array<Maybe<Post>>>;
};


export type QueryAccountArgs = {
  id: Scalars['ID'];
};


export type QueryAccountGdprLgpdArgs = {
  account: Scalars['ID'];
};


export type QueryAccountSessionArgs = {
  id: Scalars['String'];
};


export type QueryAccountsArgs = {
  filter?: Maybe<FindAllQueryParamsDto>;
};


export type QueryAdArgs = {
  id: Scalars['String'];
};


export type QueryAdsArgs = {
  filter?: Maybe<AdFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryBillboardArgs = {
  target: BillboardTarget;
};


export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CategoryTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesCountArgs = {
  filter?: Maybe<CategoryFilter>;
};


export type QueryCategoryArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryChannelArgs = {
  id: Scalars['ID'];
};


export type QueryChannelsArgs = {
  filter?: Maybe<FilterFindAllChannelsInput>;
};


export type QueryCommentArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryCommentsArgs = {
  filter?: Maybe<CommentFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CommentTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryContinueWatchingPostsArgs = {
  filter?: Maybe<ContinueWatchingFilter>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCouponArgs = {
  code: Scalars['String'];
};


export type QueryCustomFieldArgs = {
  id: Scalars['ID'];
};


export type QueryEmailTemplateArgs = {
  id: Scalars['ID'];
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  filter?: Maybe<FindAllGroupsRequestDto>;
};


export type QueryJoinedRoomsArgs = {
  filter?: Maybe<RoomFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoomTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryLayerArgs = {
  id: Scalars['String'];
};


export type QueryLayersArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminLayerFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryLayersCountArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminLayerFilter>;
};


export type QueryLivestreamArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryLivestreamsArgs = {
  filter?: Maybe<LivestreamFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<LivestreamTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryMenuArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['String'];
};


export type QueryOrdersArgs = {
  filter?: Maybe<OrderFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<OrderTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrdersByChannelArgs = {
  filter?: Maybe<OrderFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<OrderTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationPublicSettingsArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  filter?: Maybe<FilterFindAllOrganizationsInput>;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryPinnedCategoriesArgs = {
  filter?: Maybe<CategoryFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<CategoryTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPinnedPostsArgs = {
  filter?: Maybe<PostFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<PostTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPopularPostsArgs = {
  filter?: Maybe<PopTrendPostFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  filter?: Maybe<PostFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<PostTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPriceArgs = {
  id: Scalars['String'];
};


export type QueryPricesArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ProductPriceTypeSortDirective>>>;
  productId: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductsArgs = {
  filter?: Maybe<ProductFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<ProductTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryProfileArgs = {
  account: Scalars['ID'];
};


export type QueryPromotionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<PromotionTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRoomArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryRoomsArgs = {
  filter?: Maybe<RoomFilter>;
  limit?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<RoomTypeSortDirective>>>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryScreenArgs = {
  id: Scalars['String'];
};


export type QueryScreensArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminScreenFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryScreensCountArgs = {
  broadcastId: Scalars['String'];
  filter?: Maybe<AdminScreenFilter>;
};


export type QuerySearchArgs = {
  channelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  limit?: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  skip?: Maybe<Scalars['Int']>;
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
};


export type QueryTrendingPostsArgs = {
  filter?: Maybe<PopTrendPostFilter>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
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

export enum RedactReason {
  /** The content is exclusive and the user doesn't have access */
  Exclusive = 'EXCLUSIVE',
  /** The content is not available in the user's region */
  Geofence = 'GEOFENCE'
}

export type RedactedAudioPost = PostCommon & {
  __typename?: 'RedactedAudioPost';
  access?: Maybe<AccessFlag>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaThumbStub>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RedactedLivestreamEvent = {
  __typename?: 'RedactedLivestreamEvent';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  category?: Maybe<Category>;
  categoryId?: Maybe<Scalars['String']>;
  channel?: Maybe<Channel>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['ID']>;
  reason?: Maybe<RedactReason>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<LivestreamStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
};

export type RedactedOnDemandPost = PostCommon & {
  __typename?: 'RedactedOnDemandPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaThumbStub>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RedactedPhotoPost = PostCommon & {
  __typename?: 'RedactedPhotoPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaThumbStub>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RedactedPoll = PostCommon & {
  __typename?: 'RedactedPoll';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  choices?: Maybe<Array<Maybe<PollChoice>>>;
  closedAt?: Maybe<Scalars['DateTime']>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  opensAt?: Maybe<Scalars['DateTime']>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RedactedRoom = {
  __typename?: 'RedactedRoom';
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  id?: Maybe<Scalars['ID']>;
  reason?: Maybe<RedactReason>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<RoomStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
};

export type RedactedTextPost = PostCommon & {
  __typename?: 'RedactedTextPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  hadFeatured?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RedactedVideoPost = PostCommon & {
  __typename?: 'RedactedVideoPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  entitlements?: Maybe<Array<Maybe<Product>>>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaThumbStub>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  reason?: Maybe<RedactReason>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type RefreshSignIn = {
  __typename?: 'RefreshSignIn';
  account: Account;
  refreshToken: RefreshToken;
};

export type RefreshToken = {
  __typename?: 'RefreshToken';
  accessToken: Scalars['String'];
  /** Id */
  id: Scalars['String'];
};

export type RefreshTokenInput = {
  accessToken: Scalars['String'];
};

export type Report = {
  __typename?: 'Report';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  idReported?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  type?: Maybe<ReportType>;
};

export enum ReportStatus {
  Open = 'OPEN',
  Reviewed = 'REVIEWED',
  Reviewing = 'REVIEWING'
}

export enum ReportType {
  Comment = 'COMMENT',
  Post = 'POST',
  User = 'USER'
}

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

export type ResponseOrganizationOutput = {
  __typename?: 'ResponseOrganizationOutput';
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
  web_url?: Maybe<Scalars['String']>;
};

export type RevenuecatOrderIntent = {
  __typename?: 'RevenuecatOrderIntent';
  status?: Maybe<IntentStatus>;
};

export type RichLink = {
  __typename?: 'RichLink';
  author?: Maybe<Scalars['String']>;
  authorUrl?: Maybe<Scalars['String']>;
  cacheAge?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  providerName?: Maybe<Scalars['String']>;
  short?: Maybe<Scalars['String']>;
  thumbnailHeight?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  thumbnailWidth?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
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

export type Room = ModeratorRoom | RedactedRoom | UserRoom;

export type RoomFilter = {
  /** Test whether is set or not */
  accessExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  accessIn?: Maybe<Array<Maybe<AccessFlag>>>;
  /** Find records where does not match the given value */
  accessNot?: Maybe<AccessFlag>;
  /** find records where is not in the provided set */
  accessNotin?: Maybe<Array<Maybe<AccessFlag>>>;
  /** Test whether is set or not */
  statusExists?: Maybe<Scalars['Boolean']>;
  /** Find records where is in the provided set */
  statusIn?: Maybe<Array<Maybe<RoomStatus>>>;
  /** Find records where does not match the given value */
  statusNot?: Maybe<RoomStatus>;
  /** find records where is not in the provided set */
  statusNotin?: Maybe<Array<Maybe<RoomStatus>>>;
};

export type RoomMediaPlacement = {
  __typename?: 'RoomMediaPlacement';
  audioFallbackUrl?: Maybe<Scalars['String']>;
  audioHostUrl?: Maybe<Scalars['String']>;
  screenDataUrl?: Maybe<Scalars['String']>;
  screenSharingUrl?: Maybe<Scalars['String']>;
  screenViewingUrl?: Maybe<Scalars['String']>;
  signalingUrl?: Maybe<Scalars['String']>;
  turnControlUrl?: Maybe<Scalars['String']>;
};

export enum RoomRegion {
  AfSouth_1 = 'AF_SOUTH_1',
  ApNortheast_1 = 'AP_NORTHEAST_1',
  ApNortheast_2 = 'AP_NORTHEAST_2',
  ApSoutheast_1 = 'AP_SOUTHEAST_1',
  ApSoutheast_2 = 'AP_SOUTHEAST_2',
  ApSouth_1 = 'AP_SOUTH_1',
  CaCentral_1 = 'CA_CENTRAL_1',
  EuCentral_1 = 'EU_CENTRAL_1',
  EuNorth_1 = 'EU_NORTH_1',
  EuSouth_1 = 'EU_SOUTH_1',
  EuWest_1 = 'EU_WEST_1',
  EuWest_2 = 'EU_WEST_2',
  EuWest_3 = 'EU_WEST_3',
  SaEast_1 = 'SA_EAST_1',
  /** Default */
  UsEast_1 = 'US_EAST_1',
  UsEast_2 = 'US_EAST_2',
  UsWest_1 = 'US_WEST_1',
  UsWest_2 = 'US_WEST_2'
}

export enum RoomStatus {
  Active = 'ACTIVE',
  Error = 'ERROR',
  Finished = 'FINISHED',
  Scheduled = 'SCHEDULED',
  Trash = 'TRASH'
}

export type RoomTypeSortDirective = {
  direction?: Maybe<SortDirection>;
  name: RoomTypeSortEnum;
};

export enum RoomTypeSortEnum {
  ScheduledStartAt = 'scheduledStartAt',
  StartedAt = 'startedAt',
  Status = 'status'
}

export type ScheduledPush = {
  __typename?: 'ScheduledPush';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  executesAt?: Maybe<Scalars['DateTime']>;
  filters?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  segments?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Screen = {
  __typename?: 'Screen';
  approved?: Maybe<Scalars['Boolean']>;
  attached?: Maybe<Scalars['Boolean']>;
  attendeeId?: Maybe<Scalars['String']>;
  broadcastId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  media?: Maybe<MediaVideo>;
  microphoneMuted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  objectFit?: Maybe<ScreenObjectFit>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<ScreenType>;
  videoEnabled?: Maybe<Scalars['Boolean']>;
};

export enum ScreenObjectFit {
  Contain = 'CONTAIN',
  Cover = 'COVER'
}

export enum ScreenType {
  Guest = 'GUEST',
  Host = 'HOST',
  ScreenShare = 'SCREEN_SHARE',
  VideoContent = 'VIDEO_CONTENT'
}

export enum SearchAccessFlag {
  Exclusive = 'EXCLUSIVE',
  Granted = 'GRANTED',
  Public = 'PUBLIC',
  Subscriber = 'SUBSCRIBER'
}

export type SearchAuthor = {
  __typename?: 'SearchAuthor';
  givenName?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type SearchCategory = {
  __typename?: 'SearchCategory';
  background?: Maybe<SearchImage>;
  banner?: Maybe<SearchImage>;
  channel?: Maybe<Channel>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SearchCategoryHead = {
  __typename?: 'SearchCategoryHead';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type SearchImage = {
  __typename?: 'SearchImage';
  height?: Maybe<Scalars['Int']>;
  orientation?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type SearchPost = {
  __typename?: 'SearchPost';
  access?: Maybe<SearchAccessFlag>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  author?: Maybe<SearchAuthor>;
  categories?: Maybe<Array<Maybe<SearchCategoryHead>>>;
  channel?: Maybe<Channel>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<SearchImage>;
  publishedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SearchResult = SearchCategory | SearchPost;

export type SendEmailDto = {
  context?: Maybe<Scalars['JSON']>;
  from: Scalars['String'];
  subject: Scalars['String'];
  to: Scalars['String'];
  type: Scalars['ID'];
};

export type SendPushNotification = {
  content?: Maybe<Scalars['String']>;
  /** does not send if true, default: false */
  ignore?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

export type SetBillboardAction = {
  /** Format: #AARRGGBB */
  bgColor?: Maybe<Scalars['String']>;
  /** Format: #AARRGGBB */
  borderColor?: Maybe<Scalars['String']>;
  /** From Material Design Icons */
  icon?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  route: Scalars['String'];
  /** Format: #AARRGGBB */
  textColor?: Maybe<Scalars['String']>;
};

export type SetCouponCampaignRulesType = {
  discountAmount?: Maybe<SetPrice>;
  /** greater tha 0.0 and equal or less than 1.0 */
  discountPercentage?: Maybe<Scalars['Float']>;
  newPrice?: Maybe<SetPrice>;
  newTrialPeriod?: Maybe<SetInterval>;
};

export type SetGeofence = {
  /** List of ISO 3166-1 country codes */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<GeofenceType>;
};

export type SetInterval = {
  count: Scalars['Int'];
  unit: IntervalUnit;
};

export type SetPrice = {
  /** The amount represented as decimal */
  amountAsDecimal: Scalars['Decimal'];
  /** Three-letter ISO 4217 currency code */
  currency: Scalars['String'];
};

export type SetPriceTier = {
  country: Scalars['String'];
  /** Required when platform exclusive is not WEB. */
  tier?: Maybe<Scalars['String']>;
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
  /** Oldest First */
  Asc = 'ASC',
  /** Newest First */
  Desc = 'DESC'
}

export enum Sources {
  Unknown = 'UNKNOWN',
  Wowza = 'WOWZA'
}

export type SpreedlyOrderIntent = {
  __typename?: 'SpreedlyOrderIntent';
  envKey?: Maybe<Scalars['String']>;
  extraFields?: Maybe<Array<Maybe<OrderExtraField>>>;
  maxInstallments?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['String']>;
  paymentMethods?: Maybe<Array<Maybe<PaymentMethod>>>;
  status?: Maybe<IntentStatus>;
  type?: Maybe<PaymentType>;
};

export enum Store {
  Bexs = 'BEXS',
  Iap = 'IAP',
  Override = 'OVERRIDE',
  PublicApi = 'PUBLIC_API',
  Revenuecat = 'REVENUECAT',
  Spreedly = 'SPREEDLY',
  Stripe = 'STRIPE'
}

export type StripeOrderIntent = {
  __typename?: 'StripeOrderIntent';
  clientSecret?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  orderId?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  status?: Maybe<IntentStatus>;
};

export type Style = {
  __typename?: 'Style';
  background?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type SubjectDto = {
  __typename?: 'SubjectDto';
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
};

export type SubscriptionStatus = {
  __typename?: 'SubscriptionStatus';
  expires?: Maybe<Scalars['DateTime']>;
  product?: Maybe<Scalars['String']>;
  valid?: Maybe<Scalars['Boolean']>;
};

export type Subtitle = {
  __typename?: 'Subtitle';
  filePath?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['String']>;
  type?: Maybe<SubtitleType>;
};

export enum SubtitleType {
  Srt = 'SRT',
  Vtt = 'VTT'
}

export type TextPost = PostCommon & {
  __typename?: 'TextPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaPhoto>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Tier = {
  __typename?: 'Tier';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type TrialOverrideRule = {
  __typename?: 'TrialOverrideRule';
  newTrialPeriod?: Maybe<PriceInterval>;
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

export type UpdateAccountSessionInput = {
  expires_in: Scalars['Int'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type UpdateAd = {
  adTagUrl?: Maybe<Scalars['String']>;
  adUnitId?: Maybe<Scalars['String']>;
  deviceType?: Maybe<DeviceType>;
  dimensions?: Maybe<Array<Maybe<AdDimensionInput>>>;
  entitlementsBypass?: Maybe<Array<Maybe<Scalars['String']>>>;
  imaType?: Maybe<ImaType>;
  location?: Maybe<AdLocation>;
  /** in milliseconds */
  maxDuration?: Maybe<Scalars['Int']>;
  placement?: Maybe<AdPlacement>;
  platform?: Maybe<Platform>;
  size?: Maybe<BannerSize>;
  source?: Maybe<AdSource>;
  timing?: Maybe<InterstitialAdTiming>;
};

export type UpdateAudioPost = {
  access?: Maybe<AccessFlag>;
  audioArtist?: Maybe<Scalars['String']>;
  audioTitle?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateBillboard = {
  actions?: Maybe<Array<Maybe<SetBillboardAction>>>;
  bannerId?: Maybe<Scalars['String']>;
  coverId?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
  target?: Maybe<BillboardTarget>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateBroadcast = {
  broadcastDestination?: Maybe<Array<Maybe<Destinations>>>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  isLive?: Maybe<Scalars['Boolean']>;
  scheduledEndAt?: Maybe<Scalars['DateTime']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UpdateBroadcastDestination = {
  id?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  livestreamEventId?: Maybe<Scalars['String']>;
  response?: Maybe<Scalars['Json']>;
  settings?: Maybe<Scalars['Json']>;
};

export type UpdateCategory = {
  bannerId?: Maybe<Scalars['String']>;
  coverId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  imageId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type UpdateChannelInput = {
  customization?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  menu?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateConfiguredDestination = {
  authCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  settings?: Maybe<Scalars['Json']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCoupon = {
  accountId?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  externalReference?: Maybe<Scalars['String']>;
  status?: Maybe<AdminCouponStatus>;
};

export type UpdateCouponCampaign = {
  description?: Maybe<Scalars['String']>;
  emailTemplate?: Maybe<Scalars['String']>;
  legal?: Maybe<Scalars['String']>;
  status?: Maybe<AdminCouponCampaignStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
};

export type UpdateCustomForm = {
  /** Stringified JSON representation of the `https://formbuilder.online` data */
  formData?: Maybe<Scalars['JSONString']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateDestination = {
  apiurl?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  redirectUrl?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateEmailTemplateDto = {
  name: Scalars['String'];
  template: Scalars['String'];
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

export type UpdateLayer = {
  broadcastId?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  description?: Maybe<InputStyle>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  title?: Maybe<InputStyle>;
  type?: Maybe<LayerType>;
  visible?: Maybe<Scalars['Boolean']>;
};

export type UpdateLivestream = {
  access?: Maybe<AccessFlag>;
  aliasId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  config?: Maybe<ConfigureScheduledLivestream>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  isCommentsEnabled?: Maybe<Scalars['Boolean']>;
  isPresenceEnabled?: Maybe<Scalars['Boolean']>;
  isReactionsEnabled?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  source?: Maybe<Sources>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateMenu = {
  icon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  route?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['Int']>;
};

export type UpdateOnDemandPost = {
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateOrganizationInput = {
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdatePassword = {
  email: Scalars['String'];
  oobCode: Scalars['String'];
  password: Scalars['String'];
};

export type UpdatePermissionInput = {
  actions?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdatePhotoPost = {
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePoll = {
  access?: Maybe<AccessFlag>;
  aliasId?: Maybe<Scalars['String']>;
  choices?: Maybe<Array<Maybe<AdminPollUpdateChoice>>>;
  closedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  opensAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdatePredefinedList = {
  sort?: Maybe<Scalars['Int']>;
  status?: Maybe<PredefinedListStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateProduct = {
  customFormId?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  platformExclusive?: Maybe<Platform>;
  thumbnailId?: Maybe<Scalars['String']>;
};

export type UpdateProductPrice = {
  couponCampaigns?: Maybe<Array<Maybe<Scalars['String']>>>;
  features?: Maybe<Array<Maybe<Scalars['String']>>>;
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

export type UpdateRoom = {
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  geofence?: Maybe<SetGeofence>;
  maxAttendees?: Maybe<Scalars['Int']>;
  region?: Maybe<RoomRegion>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateScreen = {
  approved?: Maybe<Scalars['Boolean']>;
  attached?: Maybe<Scalars['Boolean']>;
  attendeeId?: Maybe<Scalars['String']>;
  broadcastId?: Maybe<Scalars['String']>;
  imageHeight?: Maybe<Scalars['Int']>;
  imageWidth?: Maybe<Scalars['Int']>;
  imageX?: Maybe<Scalars['Int']>;
  imageY?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['String']>;
  microphoneMuted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  objectFit?: Maybe<ScreenObjectFit>;
  order?: Maybe<Scalars['Int']>;
  type?: Maybe<ScreenType>;
  videoEnabled?: Maybe<Scalars['Boolean']>;
};

export type UpdateSubjectInput = {
  entity?: Maybe<Scalars['String']>;
  fields: Array<Scalars['String']>;
};

export type UpdateTextPost = {
  access?: Maybe<AccessFlag>;
  aliasId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  title?: Maybe<Scalars['String']>;
};

export type UpdateVideoPost = {
  access?: Maybe<AccessFlag>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Array<Maybe<Scalars['String']>>>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  geofence?: Maybe<SetGeofence>;
  mediaId?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** if not provided, we will infer from the post content */
  pushNotification?: Maybe<SendPushNotification>;
  status?: Maybe<PostStatus>;
  thumbnailId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type UploadMedia = {
  __typename?: 'UploadMedia';
  awsBucket?: Maybe<Scalars['String']>;
  awsKey?: Maybe<Scalars['String']>;
  mediaId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
};

export enum UploadMediaType {
  Audio = 'AUDIO',
  Photo = 'PHOTO',
  Video = 'VIDEO'
}

export enum UploadMediaUsage {
  CategoryBackground = 'CATEGORY_BACKGROUND',
  CategoryImage = 'CATEGORY_IMAGE',
  LivestreamCover = 'LIVESTREAM_COVER',
  Post = 'POST',
  Profile = 'PROFILE'
}

export enum UpvoteDirection {
  Downvote = 'DOWNVOTE',
  Novote = 'NOVOTE',
  Upvote = 'UPVOTE'
}

export type UserRoom = {
  __typename?: 'UserRoom';
  access?: Maybe<AccessFlag>;
  /** Returns the count of `ACTIVE` attendees including moderators */
  countAttendees?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  maxAttendees?: Maybe<Scalars['Int']>;
  mediaPlacement?: Maybe<RoomMediaPlacement>;
  scheduledStartAt?: Maybe<Scalars['DateTime']>;
  startedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<RoomStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
};

export type VerifyEmailDto = {
  email: Scalars['String'];
};

export type VerifyMail = {
  __typename?: 'VerifyMail';
  exist: Scalars['Boolean'];
};

export type VideoPost = PostCommon & {
  __typename?: 'VideoPost';
  access?: Maybe<AccessFlag>;
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Category>>>;
  channel?: Maybe<Channel>;
  counts?: Maybe<CountMeta>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Excerpt>;
  featuredAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  links?: Maybe<Array<Maybe<RichLink>>>;
  media?: Maybe<MediaVideo>;
  mediaPosition?: Maybe<MediaPosition>;
  myReactions?: Maybe<Array<Maybe<MyReaction>>>;
  pinnedAt?: Maybe<Scalars['DateTime']>;
  pinnedComment?: Maybe<Comment>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  shareLink?: Maybe<Scalars['String']>;
  status?: Maybe<PostStatus>;
  thumbnail?: Maybe<MediaPhoto>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type VoteResult = {
  __typename?: 'VoteResult';
  choices?: Maybe<Array<Maybe<PollChoice>>>;
  myVote?: Maybe<Scalars['String']>;
};

export enum WatchingPostType {
  Audio = 'AUDIO',
  Video = 'VIDEO'
}

export type CreateAccountMutationVariables = Exact<{
  createAccount: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, tenant_id?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename?: 'AccountStatus', active?: Maybe<boolean>, block_perm?: Maybe<boolean>, block_temp?: Maybe<any>, pending_activation?: Maybe<boolean> }> } };

export type CreateAccountGdprLgpdMutationVariables = Exact<{
  payload: CreateAccountGdprLgpdInput;
}>;


export type CreateAccountGdprLgpdMutation = { __typename?: 'Mutation', createAccountGdprLgpd: { __typename: 'AccountGdprLgpd', id: string, accepted: boolean, accepted_at: any, account: { __typename?: 'Account', id: string } } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'RefreshSignIn', refreshToken: { __typename?: 'RefreshToken', accessToken: string } } };

export type ResetPasswordMutationVariables = Exact<{
  payload: ForgotPassword;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'EmailSent', sent: boolean } };

export type SigninMutationVariables = Exact<{
  payload: SignInInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SingIn', token: { __typename?: 'AccessToken', accessToken: string }, account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, username?: Maybe<string> } } };

export type SignOutMutationVariables = Exact<{
  payload: RefreshTokenInput;
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: any };

export type SocialSignInMutationVariables = Exact<{
  input: CreateAccountSocialSignInDto;
}>;


export type SocialSignInMutation = { __typename?: 'Mutation', socialSignIn: { __typename?: 'SingIn', account: { __typename?: 'Account', id: string, display_name?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename?: 'AccountStatus', gdpr?: Maybe<boolean> }> }, token: { __typename?: 'AccessToken', accessToken: string } } };

export type UpdatePasswordMutationVariables = Exact<{
  payload: UpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'PasswordChanged', success: boolean } };

export type VerifyMailMutationVariables = Exact<{
  payload: VerifyEmailDto;
}>;


export type VerifyMailMutation = { __typename?: 'Mutation', verifyMail: { __typename?: 'VerifyMail', exist: boolean } };

export type AccountQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AccountQuery = { __typename?: 'Query', account: { __typename: 'Account', display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, id: string, last_name?: Maybe<string>, organization?: Maybe<string>, tenant_id?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename: 'AccountStatus', active?: Maybe<boolean>, gdpr?: Maybe<boolean> }> } };

export type ChannelsQueryVariables = Exact<{
  filter: FilterFindAllChannelsInput;
}>;


export type ChannelsQuery = { __typename?: 'Query', channels: Array<{ __typename: 'AvailableChannel', banner?: Maybe<any>, customization?: Maybe<any>, description: string, entitlements?: Maybe<any>, geofence?: Maybe<any>, id: string, logo?: Maybe<any>, name: string, organization: string, status: string, thumbnail?: Maybe<any> } | { __typename: 'GeolockedChannel', id: string, name: string, customization?: Maybe<any>, thumbnail?: Maybe<any> }> };

export type OrganizationQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationQuery = { __typename?: 'Query', organization: { __typename?: 'ResponseOrganizationOutput', id: string } };

export type OrganizationPublicSettingsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrganizationPublicSettingsQuery = { __typename?: 'Query', organizationPublicSettings: { __typename?: 'ResponseOrganizationOutput', id: string, status?: Maybe<string>, customization?: Maybe<any>, avatarCdnBaseUrl?: Maybe<string>, audioCdnBaseUrl?: Maybe<string>, imageCdnBaseUrl?: Maybe<string>, settings?: Maybe<{ __typename?: 'OrganizationSettings', bucket?: Maybe<string>, aws?: Maybe<any> }> } };

export type ProfileQueryVariables = Exact<{
  account: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', avatar?: Maybe<string>, id: string, phone?: Maybe<string>, locale?: Maybe<string> } };


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
export const AccountDocument = gql`
    query Account($id: ID!) {
  account(id: $id) {
    display_name
    email
    first_name
    id
    last_name
    organization
    status {
      active
      gdpr
      __typename
    }
    tenant_id
    __typename
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
export const ChannelsDocument = gql`
    query Channels($filter: FilterFindAllChannelsInput!) {
  channels(filter: $filter) {
    ... on AvailableChannel {
      banner
      customization
      description
      entitlements
      geofence
      id
      logo
      name
      organization
      status
      thumbnail
      __typename
    }
    ... on GeolockedChannel {
      id
      name
      customization
      thumbnail
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
    status
    customization
    settings {
      bucket
      aws
    }
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
export const ProfileDocument = gql`
    query Profile($account: ID!) {
  profile(account: $account) {
    avatar
    id
    phone
    locale
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