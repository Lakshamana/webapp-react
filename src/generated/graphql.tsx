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

export type Account = {
  __typename?: 'Account';
  _id: Scalars['ID'];
  display_name?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  /** Account groups */
  groups?: Maybe<Array<GroupDto>>;
  last_name?: Maybe<Scalars['String']>;
  /** Account roles */
  roles?: Maybe<Array<RolesDto>>;
  status?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type AccountGdprLgpd = {
  __typename?: 'AccountGdprLgpd';
  _id: Scalars['ID'];
  accepted: Scalars['Boolean'];
  accepted_at: Scalars['DateTime'];
  account: Account;
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

export type Auth = {
  __typename?: 'Auth';
  accessToken: Scalars['String'];
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
  status: Status;
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
  banner?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
};

export type CreateCustomFieldInput = {
  custom_fields: Array<Scalars['JSONObject']>;
};

export type CreateEmailTemplateDto = {
  name: Scalars['String'];
  organization?: Maybe<Scalars['ID']>;
  template: Scalars['String'];
  type: Scalars['String'];
};

export type CreateGroupDto = {
  default: Scalars['Boolean'];
  /** Group description */
  description?: Maybe<Scalars['String']>;
  /** Group name */
  name: Scalars['String'];
  public: Scalars['Boolean'];
  /** Group roles */
  roles: Array<Scalars['ID']>;
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
  sessions_limit?: Maybe<Scalars['JSON']>;
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

export type CreateProfileInput = {
  account: Scalars['String'];
  address: Scalars['String'];
  avatar: Scalars['String'];
  birthday: Scalars['DateTime'];
  custom_fields: Scalars['JSONObject'];
  gender: Scalars['String'];
  locale: Scalars['String'];
  organization: Scalars['String'];
  phone: Scalars['String'];
};

export type CreateRoleInput = {
  default: Scalars['Boolean'];
  description: Scalars['String'];
  name: Scalars['String'];
  permissions: Array<Scalars['ID']>;
  public: Scalars['Boolean'];
};

export type CreateSubjectInput = {
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
};

export type CustomField = {
  __typename?: 'CustomField';
  _id: Scalars['ID'];
  custom_fields: Scalars['JSONObject'];
  organization_id: Scalars['ID'];
};

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
  organization_id?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
};

export type FindOneAccountSessionDto = {
  accountSessionId: Scalars['ID'];
};

export type FindOneCustomFieldsDto = {
  organizationId: Scalars['String'];
};

export type FindOneParamsDto = {
  id: Scalars['ID'];
};

export type FindOnePermissionInput = {
  permissionId: Scalars['ID'];
};

export type FindOneProfileDto = {
  account_id: Scalars['String'];
};

export type FindOneRoleInput = {
  roleId: Scalars['ID'];
};

export type FindOneSubjectInput = {
  subjectId: Scalars['ID'];
};

export type GroupDto = {
  __typename?: 'GroupDto';
  /** Id */
  _id: Scalars['String'];
  default: Scalars['Boolean'];
  /** Group description */
  description: Scalars['String'];
  /** Group name */
  name: Scalars['String'];
  public: Scalars['Boolean'];
  /** Group roles */
  roles: Array<RolesDto>;
};

export type IdDto = {
  /** Group name */
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: Account;
  createAccountGdprLgpd: AccountGdprLgpd;
  createAccountSession: AccountSession;
  createAccountSocialSignIn: Account;
  createChannel: ResponseChannelOutput;
  createCustomField: CustomField;
  createEmailTemplate: EmailTemplate;
  createGroup: GroupDto;
  createOrganization: ResponseOrganizationOutput;
  createPermission: PermissionDto;
  createProfile: Profile;
  createRole: RolesDto;
  createSubject: SubjectDto;
  forgetAccount: Scalars['VoidScalar'];
  refreshToken: Auth;
  removeAccount: Account;
  removeAccountGdprLgpd: AccountGdprLgpd;
  removeAccountSession: AccountSession;
  removeChannel: ResponseChannelOutput;
  removeCustomField: CustomField;
  removeEmailTemplate: EmailTemplate;
  removeGroup: GroupDto;
  removeOrganization: ResponseOrganizationOutput;
  removePermission: PermissionDto;
  removeProfile: Profile;
  removeRole: RolesDto;
  removeSubject: SubjectDto;
  sendEmail: ResponseEmailSendedDto;
  signIn: Auth;
  signOut: Scalars['VoidScalar'];
  updateAccount: Account;
  updateAccountGdprLgpd: AccountGdprLgpd;
  updateAccountSession: AccountSession;
  updateChannel: ResponseChannelOutput;
  updateCustomField: CustomField;
  updateEmailTemplate: EmailTemplate;
  updateGroup: GroupDto;
  updateOrganization: ResponseOrganizationOutput;
  updatePermission: PermissionDto;
  updateProfile: Profile;
  updateRole: RolesDto;
  updateSubject: SubjectDto;
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
  createCustomFieldInput: CreateCustomFieldInput;
};


export type MutationCreateEmailTemplateArgs = {
  createEmailTemplateInput: CreateEmailTemplateDto;
};


export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupDto;
};


export type MutationCreateOrganizationArgs = {
  createOrganizationInput: CreateOrganizationInput;
};


export type MutationCreatePermissionArgs = {
  createPermissionInput: CreatePermissionInput;
};


export type MutationCreateProfileArgs = {
  createProfileInput: CreateProfileInput;
};


export type MutationCreateRoleArgs = {
  createRoleInput: CreateRoleInput;
};


export type MutationCreateSubjectArgs = {
  createSubjectInput: CreateSubjectInput;
};


export type MutationForgetAccountArgs = {
  DeleteOneParams: DeleteOneParams;
};


export type MutationRefreshTokenArgs = {
  refreshToken: RefreshTokenInput;
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


export type MutationRemoveCustomFieldArgs = {
  FindOneCustomFieldsDto: FindOneCustomFieldsDto;
};


export type MutationRemoveEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
};


export type MutationRemoveGroupArgs = {
  id: IdDto;
};


export type MutationRemoveOrganizationArgs = {
  filterRemoveOrganizationInput: FilterRemoveOrganizationInput;
};


export type MutationRemovePermissionArgs = {
  findOnePermissionInput: FindOnePermissionInput;
};


export type MutationRemoveProfileArgs = {
  FindOneProfileDto: FindOneProfileDto;
};


export type MutationRemoveRoleArgs = {
  findOneRoleInput: FindOneRoleInput;
};


export type MutationRemoveSubjectArgs = {
  findOneSubjectInput: FindOneSubjectInput;
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
  FindOneCustomFieldsDto: FindOneCustomFieldsDto;
  updateCustomFieldInput: UpdateCustomFieldInput;
};


export type MutationUpdateEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
  updateEmailTemplateInput: UpdateEmailTemplateDto;
};


export type MutationUpdateGroupArgs = {
  id: IdDto;
  updateGroupInput: UpdateGroupDto;
};


export type MutationUpdateOrganizationArgs = {
  filterUpdateOrganizationlInput: FilterUpdateOrganizationlInput;
  updateOrganizationInput: UpdateOrganizationInput;
};


export type MutationUpdatePermissionArgs = {
  findOnePermissionInput: FindOnePermissionInput;
  updatePermissionInput: UpdatePermissionInput;
};


export type MutationUpdateProfileArgs = {
  FindOneProfileDto: FindOneProfileDto;
  updateProfileInput: UpdateProfileInput;
};


export type MutationUpdateRoleArgs = {
  findOneRoleInput: FindOneRoleInput;
  updateRoleInput: UpdateRoleInput;
};


export type MutationUpdateSubjectArgs = {
  findOneSubjectInput: FindOneSubjectInput;
  updateSubjectInput: UpdateSubjectInput;
};

export type PermissionDto = {
  __typename?: 'PermissionDto';
  /** Id */
  _id: Scalars['String'];
  actions: Array<Scalars['String']>;
  description: Scalars['String'];
  name: Scalars['String'];
  subject: SubjectDto;
};

export type Profile = {
  __typename?: 'Profile';
  _id: Scalars['ID'];
  account: Scalars['ID'];
  address: Scalars['String'];
  avatar: Scalars['String'];
  birthday: Scalars['DateTime'];
  custom_fields: Scalars['JSONObject'];
  gender: Scalars['String'];
  locale: Scalars['String'];
  phone: Scalars['String'];
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
  customField: CustomField;
  customFields: Array<CustomField>;
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
  FindOneCustomFieldsDto: FindOneCustomFieldsDto;
};


export type QueryEmailTemplateArgs = {
  filterFindOneEmailTemplateDTO: FilterFindOneEmailTemplateDto;
};


export type QueryGroupArgs = {
  id: IdDto;
};


export type QueryGroupsArgs = {
  findParams: FindAllGroupsRequestDto;
};


export type QueryOrganizationArgs = {
  filterFindOneOrganizationInput: FilterFindOneOrganizationInput;
};


export type QueryOrganizationsArgs = {
  filterFindAllOrganizationsInput: FilterFindAllOrganizationsInput;
};


export type QueryPermissionArgs = {
  findOnePermissionInput: FindOnePermissionInput;
};


export type QueryProfileArgs = {
  FindOneProfileDto: FindOneProfileDto;
};


export type QueryRoleArgs = {
  findOneRoleInput: FindOneRoleInput;
};


export type QuerySubjectArgs = {
  findOneSubjectInput: FindOneSubjectInput;
};

export type RefreshTokenInput = {
  accessToken: Scalars['String'];
};

export type ResponseChannelOutput = {
  __typename?: 'ResponseChannelOutput';
  _id: Scalars['ID'];
  banner?: Maybe<Scalars['JSON']>;
  description: Scalars['String'];
  entitlements?: Maybe<Scalars['JSON']>;
  geofence?: Maybe<Scalars['JSON']>;
  logo?: Maybe<Scalars['JSON']>;
  name: Scalars['String'];
  organization: Scalars['ID'];
  status: Scalars['String'];
  thumbnail?: Maybe<Scalars['JSON']>;
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

export type ResponseOrganizationOutput = {
  __typename?: 'ResponseOrganizationOutput';
  _id: Scalars['ID'];
  bundle_id?: Maybe<Scalars['String']>;
  current_version?: Maybe<Scalars['String']>;
  customization?: Maybe<Scalars['String']>;
  email_settings?: Maybe<Scalars['String']>;
  identifier?: Maybe<Scalars['String']>;
  itunes_id?: Maybe<Scalars['String']>;
  min_compat_version?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  onesignal_id?: Maybe<Scalars['String']>;
  portal_url?: Maybe<Scalars['String']>;
  sessions_limit?: Maybe<Scalars['String']>;
  settings?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['String']>;
  web_url?: Maybe<Scalars['String']>;
};

export type RolesDto = {
  __typename?: 'RolesDto';
  /** Id */
  _id: Scalars['String'];
  default: Scalars['Boolean'];
  description: Scalars['String'];
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

export type Status = {
  active?: Maybe<Scalars['Boolean']>;
  block_perm?: Maybe<Scalars['Boolean']>;
  block_temp?: Maybe<Scalars['DateTime']>;
  pending_activation?: Maybe<Scalars['Boolean']>;
};

export type SubjectDto = {
  __typename?: 'SubjectDto';
  /** Id */
  _id: Scalars['String'];
  entity: Scalars['String'];
  fields: Array<Scalars['String']>;
};

export type UpdateAccountGdprLgpdInput = {
  accepted?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Scalars['String']>;
};

export type UpdateAccountInput = {
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  status?: Maybe<Status>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateAccountSessionInput = {
  expires_in: Scalars['Int'];
  id_token: Scalars['String'];
  refresh_token: Scalars['String'];
};

export type UpdateChannelInput = {
  banner?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  entitlements?: Maybe<Scalars['String']>;
  geofence?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type UpdateCustomFieldInput = {
  custom_fields: Array<Scalars['JSONObject']>;
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
  /** Group roles */
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
  sessions_limit?: Maybe<Scalars['JSON']>;
  settings?: Maybe<Scalars['JSON']>;
  status?: Maybe<Scalars['String']>;
  web_url?: Maybe<Scalars['String']>;
};

export type UpdatePermissionInput = {
  actions?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateProfileInput = {
  account?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  custom_fields?: Maybe<Scalars['JSONObject']>;
  gender?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
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
  fields?: Maybe<Array<Scalars['String']>>;
};

export type CreateAccountMutationVariables = Exact<{
  createAccount: CreateAccountInput;
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename: 'Account', _id: string, display_name?: Maybe<string>, email: string, first_name?: Maybe<string>, last_name?: Maybe<string>, status?: Maybe<string>, tenant_id?: Maybe<string>, username?: Maybe<string> } };

export type CreateAccountGdprLgpdMutationVariables = Exact<{
  createAccountGdprLgpd: CreateAccountGdprLgpdInput;
}>;


export type CreateAccountGdprLgpdMutation = { __typename?: 'Mutation', createAccountGdprLgpd: { __typename: 'AccountGdprLgpd', _id: string, accepted: boolean, accepted_at: any, ip: string, account: { __typename?: 'Account', _id: string } } };

export type SigninMutationVariables = Exact<{
  signIn: SignInInput;
}>;


export type SigninMutation = { __typename?: 'Mutation', signIn: { __typename?: 'Auth', accessToken: string } };

export type SignOutMutationVariables = Exact<{
  signOutSignOut: RefreshTokenInput;
}>;


export type SignOutMutation = { __typename?: 'Mutation', signOut: any };


export const CreateAccountDocument = gql`
    mutation CreateAccount($createAccount: CreateAccountInput!) {
  createAccount(createAccountInput: $createAccount) {
    _id
    display_name
    email
    first_name
    last_name
    status
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
    _id
    accepted
    accepted_at
    account {
      _id
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
export const SigninDocument = gql`
    mutation Signin($signIn: SignInInput!) {
  signIn(signIn: $signIn) {
    accessToken
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