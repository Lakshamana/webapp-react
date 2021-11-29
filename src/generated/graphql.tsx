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

export type AccountGdprLgpdFindOneDto = {
  accountId: Scalars['ID'];
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
  pending_activation?: Maybe<Scalars['Boolean']>;
};

export type BanAccountTemporary = {
  banUntil: Scalars['DateTime'];
};

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

export type CreateChannelInput = {
  customization?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: Scalars['String'];
};

export type CreateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
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

export type CreateOrganizationInput = {
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  email_settings?: Maybe<Scalars['JSON']>;
  identifier?: Maybe<Scalars['String']>;
  itunes_id?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  onesignal_id?: Maybe<Scalars['String']>;
  portal_url: Scalars['String'];
  settings?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  web_url: Scalars['String'];
};

export type CreatePermissionInput = {
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
  subject: Scalars['ID'];
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

export type DeleteOneParams = {
  id: Scalars['String'];
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

export type FilterFindOneChannelInput = {
  channelId: Scalars['String'];
};

export type FilterFindOneEmailTemplateDto = {
  id: Scalars['ID'];
};

export type FilterFindOneOrganizationInput = {
  organizationId: Scalars['String'];
};

export type FilterRemoveChannelInput = {
  channelId: Scalars['String'];
};

export type FilterRemoveOrganizationInput = {
  organizationId: Scalars['String'];
};

export type FilterUpdateChannelInput = {
  channelId: Scalars['String'];
};

export type FilterUpdateOrganizationlInput = {
  organizationId: Scalars['String'];
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

export type FindOneAccountSessionDto = {
  accountSessionId: Scalars['ID'];
};

export type FindOneParamsDto = {
  id: Scalars['ID'];
};

export type ForgotPassword = {
  email: Scalars['String'];
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

export type Mutation = {
  __typename?: 'Mutation';
  activeAccount: Account;
  banAccountPerm: Account;
  banAccountTemp: Account;
  createAccount: Account;
  createAccountGdprLgpd: AccountGdprLgpd;
  createAccountSession: AccountSession;
  createAccountSocialSignIn: Account;
  createChannel: ResponseChannelOutput;
  createCustomField: ResponseCustomFieldsOutput;
  createEmailTemplate: EmailTemplate;
  createGroup: GroupDto;
  createOrganization: ResponseOrganizationOutput;
  createPermission: PermissionDto;
  createRole: RolesDto;
  createSubject: SubjectDto;
  deactiveAccount: Account;
  deleteCustomField: ResponseCustomFieldsOutput;
  forgetAccount: Account;
  refreshToken: RefreshSignIn;
  removeAccount: Account;
  removeAccountGdprLgpd: AccountGdprLgpd;
  removeAccountSession: AccountSession;
  removeChannel: ResponseChannelOutput;
  removeEmailTemplate: EmailTemplate;
  removeGroup: GroupDto;
  removeOrganization: ResponseOrganizationOutput;
  removePermission: PermissionDto;
  removeProfile: Profile;
  removeRole: RolesDto;
  removeSubject: SubjectDto;
  resetPassword: EmailSent;
  sendEmail: ResponseEmailSendedDto;
  signIn: SingIn;
  signOut: Scalars['VoidScalar'];
  unbanAccountPerm: Account;
  unbanAccountTemp: Account;
  updateAccount: Account;
  updateAccountGdprLgpd: AccountGdprLgpd;
  updateAccountSession: AccountSession;
  updateChannel: ResponseChannelOutput;
  updateCustomField: ResponseCustomFieldsOutput;
  updateEmailTemplate: EmailTemplate;
  updateGroup: GroupDto;
  updateOrganization: ResponseOrganizationOutput;
  updatePassword: PasswordChanged;
  updatePermission: PermissionDto;
  updateProfile: Profile;
  updateRole: RolesDto;
  updateSubject: SubjectDto;
  verifyMail: VerifyMail;
};


export type MutationActiveAccountArgs = {
  account: Scalars['String'];
};


export type MutationBanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationBanAccountTempArgs = {
  account: Scalars['String'];
  input: BanAccountTemporary;
};


export type MutationCreateAccountArgs = {
  createAccountInput: CreateAccountInput;
};


export type MutationCreateAccountGdprLgpdArgs = {
  createAccountGdprLgpdInput: CreateAccountGdprLgpdInput;
};


export type MutationCreateAccountSessionArgs = {
  createAccountSessionInput: CreateAccountSessionInput;
};


export type MutationCreateAccountSocialSignInArgs = {
  createAccountSocialSignInInput: CreateAccountSocialSignInDto;
};


export type MutationCreateChannelArgs = {
  createChannelInput: CreateChannelInput;
};


export type MutationCreateCustomFieldArgs = {
  input: CreateCustomFieldInput;
};


export type MutationCreateEmailTemplateArgs = {
  createEmailTemplateInput: CreateEmailTemplateDto;
};


export type MutationCreateGroupArgs = {
  payload: CreateGroupDto;
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
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


export type MutationDeleteCustomFieldArgs = {
  id: Scalars['String'];
};


export type MutationForgetAccountArgs = {
  account: Scalars['String'];
};


export type MutationRemoveAccountArgs = {
  DeleteOneParams: DeleteOneParams;
};


export type MutationRemoveAccountGdprLgpdArgs = {
  params: AccountGdprLgpdFindOneDto;
};


export type MutationRemoveAccountSessionArgs = {
  findOneAccountSession: FindOneAccountSessionDto;
};


export type MutationRemoveChannelArgs = {
  filterRemoveChannelInput: FilterRemoveChannelInput;
};


export type MutationRemoveEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
};


export type MutationRemoveGroupArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveOrganizationArgs = {
  filterRemoveOrganizationInput: FilterRemoveOrganizationInput;
};


export type MutationRemovePermissionArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveProfileArgs = {
  account: Scalars['ID'];
};


export type MutationRemoveRoleArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveSubjectArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  forgotPassword: ForgotPassword;
};


export type MutationSendEmailArgs = {
  SendEmailDTO: SendEmailDto;
};


export type MutationSignInArgs = {
  signIn: SignInInput;
};


export type MutationSignOutArgs = {
  signOut: RefreshTokenInput;
};


export type MutationUnbanAccountPermArgs = {
  account: Scalars['String'];
};


export type MutationUnbanAccountTempArgs = {
  account: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  FindOneParamsDto: FindOneParamsDto;
  updateAccountInput: UpdateAccountInput;
};


export type MutationUpdateAccountGdprLgpdArgs = {
  params: AccountGdprLgpdFindOneDto;
  updateAccountGdprLgpdInput: UpdateAccountGdprLgpdInput;
};


export type MutationUpdateAccountSessionArgs = {
  findOneAccountSession: FindOneAccountSessionDto;
  updateAccountSessionInput: UpdateAccountSessionInput;
};


export type MutationUpdateChannelArgs = {
  filterUpdateChannelInput: FilterUpdateChannelInput;
  updateChannelInput: UpdateChannelInput;
};


export type MutationUpdateCustomFieldArgs = {
  id: Scalars['String'];
  updateCustomFieldInput: UpdateCustomFieldInput;
};


export type MutationUpdateEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
  updateEmailTemplateInput: UpdateEmailTemplateDto;
};


export type MutationUpdateGroupArgs = {
  id: Scalars['ID'];
  payload: UpdateGroupDto;
};


export type MutationUpdateOrganizationArgs = {
  filterUpdateOrganizationlInput: FilterUpdateOrganizationlInput;
  updateOrganizationInput: UpdateOrganizationInput;
};


export type MutationUpdatePasswordArgs = {
  updatePassword: UpdatePassword;
};


export type MutationUpdatePermissionArgs = {
  id: Scalars['ID'];
  payload: UpdatePermissionInput;
};


export type MutationUpdateProfileArgs = {
  account: Scalars['ID'];
  input: UpdateProfileInput;
};


export type MutationUpdateRoleArgs = {
  id: Scalars['ID'];
  payload: UpdateRoleInput;
};


export type MutationUpdateSubjectArgs = {
  id: Scalars['ID'];
  payload: UpdateSubjectInput;
};


export type MutationVerifyMailArgs = {
  verifyMailInput: VerifyEmailDto;
};

export type PasswordChanged = {
  __typename?: 'PasswordChanged';
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

export type Profile = {
  __typename?: 'Profile';
  account: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday: Scalars['DateTime'];
  custom_fields: Scalars['JSONObject'];
  gender?: Maybe<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  accountGdprLgpd: AccountGdprLgpd;
  accountSession: AccountSession;
  accountSessions: Array<AccountSession>;
  accounts: Array<Account>;
  accountsGdprLgpd: Array<AccountGdprLgpd>;
  channel: ResponseChannelOutput;
  channels: Array<ResponseChannelOutput>;
  customField: ResponseCustomFieldsOutput;
  customFields: Array<ResponseCustomFieldsOutput>;
  emailTemplate: EmailTemplate;
  emailTemplates: Array<EmailTemplate>;
  group: GroupDto;
  groups: Array<GroupDto>;
  organization: ResponseOrganizationOutput;
  organizations: Array<ResponseOrganizationOutput>;
  permission: PermissionDto;
  permissions: Array<PermissionDto>;
  profile: Profile;
  profiles: Array<Profile>;
  role: RolesDto;
  roles: Array<RolesDto>;
  subject: SubjectDto;
  subjects: Array<SubjectDto>;
};


export type QueryAccountArgs = {
  FindOneParamsDto: FindOneParamsDto;
};


export type QueryAccountGdprLgpdArgs = {
  AccountGdprLgpdFindOneDto: AccountGdprLgpdFindOneDto;
};


export type QueryAccountSessionArgs = {
  findOneAccountSession: FindOneAccountSessionDto;
};


export type QueryAccountsArgs = {
  FindAllQueryParamsDto: FindAllQueryParamsDto;
};


export type QueryChannelArgs = {
  filterFindOneChannelInput: FilterFindOneChannelInput;
};


export type QueryChannelsArgs = {
  filterFindAllChannelsInput: FilterFindAllChannelsInput;
};


export type QueryCustomFieldArgs = {
  id: Scalars['String'];
};


export type QueryEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryGroupsArgs = {
  filter?: Maybe<FindAllGroupsRequestDto>;
};


export type QueryOrganizationArgs = {
  filterFindOneOrganizationInput: FilterFindOneOrganizationInput;
};


export type QueryOrganizationsArgs = {
  filterFindAllOrganizationsInput: FilterFindAllOrganizationsInput;
};


export type QueryPermissionArgs = {
  id: Scalars['ID'];
};


export type QueryProfileArgs = {
  account: Scalars['ID'];
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QuerySubjectArgs = {
  id: Scalars['ID'];
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

export type ResponseChannelOutput = {
  __typename?: 'ResponseChannelOutput';
  banner?: Maybe<Scalars['JSON']>;
  customization?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSON']>;
  geofence?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  logo?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
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

export type ResponseOrganizationOutput = {
  __typename?: 'ResponseOrganizationOutput';
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  email_settings?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  identifier?: Maybe<Scalars['String']>;
  itunes_id?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onesignal_id?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  web_url?: Maybe<Scalars['String']>;
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

export type SubjectDto = {
  __typename?: 'SubjectDto';
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
  /** Id */
  id: Scalars['String'];
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

export type UpdateChannelInput = {
  customization?: Maybe<Scalars['JSON']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type UpdateCustomFieldInput = {
  fields: Array<CustomFieldInput>;
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

export type UpdateOrganizationInput = {
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['JSON']>;
  email_settings?: Maybe<Scalars['JSON']>;
  identifier?: Maybe<Scalars['String']>;
  itunes_id?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onesignal_id?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  web_url?: Maybe<Scalars['String']>;
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

export type VerifyEmailDto = {
  email: Scalars['String'];
};

export type VerifyMail = {
  __typename?: 'VerifyMail';
  exist: Scalars['Boolean'];
};

export type CreateAccountMutationVariables = Exact<{
  createAccount: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename: 'Account', id: string, display_name?: Maybe<string>, email?: Maybe<string>, first_name?: Maybe<string>, last_name?: Maybe<string>, tenant_id?: Maybe<string>, username?: Maybe<string>, status?: Maybe<{ __typename?: 'AccountStatus', active?: Maybe<boolean>, block_perm?: Maybe<boolean>, block_temp?: Maybe<any>, pending_activation?: Maybe<boolean> }> } };

export type CreateAccountGdprLgpdMutationVariables = Exact<{
  createAccountGdprLgpd: CreateAccountGdprLgpdInput;
}>;


export type CreateAccountGdprLgpdMutation = { __typename?: 'Mutation', createAccountGdprLgpd: { __typename: 'AccountGdprLgpd', id: string, accepted: boolean, accepted_at: any, ip: string, account: { __typename?: 'Account', id: string } } };

export type ResetPasswordMutationVariables = Exact<{
  forgotPassword: ForgotPassword;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'EmailSent', sent: boolean } };

export type SigninMutationVariables = Exact<{
  signIn: SignInInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SingIn', token: { __typename?: 'AccessToken', accessToken: string }, account: { __typename?: 'Account', id: string } } };

export type SignOutMutationVariables = Exact<{
  signOutSignOut: RefreshTokenInput;
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: any };

export type UpdatePasswordMutationVariables = Exact<{
  updatePassword: UpdatePassword;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'PasswordChanged', success: boolean } };

export type VerifyMailMutationVariables = Exact<{
  verifyMailInput: VerifyEmailDto;
}>;


export type VerifyMailMutation = { __typename?: 'Mutation', verifyMail: { __typename?: 'VerifyMail', exist: boolean } };

export type ProfileQueryVariables = Exact<{
  account: Scalars['ID'];
}>;


export type ProfileQuery = { __typename?: 'Query', profile: { __typename?: 'Profile', address?: Maybe<string>, avatar?: Maybe<string>, birthday: any, gender?: Maybe<string>, id: string, phone?: Maybe<string>, account: string, locale?: Maybe<string> } };


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
    mutation CreateAccountGdprLgpd($createAccountGdprLgpd: CreateAccountGdprLgpdInput!) {
  createAccountGdprLgpd(createAccountGdprLgpdInput: $createAccountGdprLgpd) {
    id
    accepted
    accepted_at
    account {
      id
    }
    ip
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
 *      createAccountGdprLgpd: // value for 'createAccountGdprLgpd'
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
export const ResetPasswordDocument = gql`
    mutation ResetPassword($forgotPassword: ForgotPassword!) {
  resetPassword(forgotPassword: $forgotPassword) {
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
 *      forgotPassword: // value for 'forgotPassword'
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
    mutation Signin($signIn: SignInInput!) {
  signIn(signIn: $signIn) {
    token {
      accessToken
    }
    account {
      id
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
 *      signIn: // value for 'signIn'
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
    mutation SignOut($signOutSignOut: RefreshTokenInput!) {
  signOut(signOut: $signOutSignOut)
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
 *      signOutSignOut: // value for 'signOutSignOut'
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
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($updatePassword: UpdatePassword!) {
  updatePassword(updatePassword: $updatePassword) {
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
 *      updatePassword: // value for 'updatePassword'
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
    mutation VerifyMail($verifyMailInput: VerifyEmailDTO!) {
  verifyMail(verifyMailInput: $verifyMailInput) {
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
 *      verifyMailInput: // value for 'verifyMailInput'
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
export const ProfileDocument = gql`
    query Profile($account: ID!) {
  profile(account: $account) {
    address
    avatar
    birthday
    gender
    id
    phone
    account
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