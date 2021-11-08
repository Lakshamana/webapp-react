export interface Props {}

export interface PropsStyle {}

export interface ChannelType {
  id?: string;
  name?: string;
  image: string;
  url?: string;
  text?: string;
  isGeolocked?: boolean;
  isExclusive?: boolean;
}
