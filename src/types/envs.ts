type PlayerLogo = {
  image: string
  altText: string
  link: string
}

export type EnvProps = {
  apiEndpoint?: string
  createdAt?: string
  deleted?: boolean
  deletedAt?: Maybe<string>
  firebaseApiKey?: string
  firebaseAppId?: string
  firebaseAuthApiKey?: string
  firebaseAuthDomain?: string
  firebaseBucket?: string
  firebaseDatabaseUrl?: string
  firebaseDomain?: string
  firebaseMeasurementId?: string
  firebaseProject?: string
  firebaseSender?: string
  muxKey?: string
  onesignalAppId?: string
  onesignalSafariWebId?: string
  organization?: string
  remoteConfigSecret?: string
  updatedAt?: string
  googleTag?: string
  facebookTag?: string
  playerLogo?: PlayerLogo
}