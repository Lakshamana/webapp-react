export interface Props {
  name: String;
  size?: Number | String;
  clickable: Boolean;
  color: String;
  margin: Number;
  iconify: Boolean;
  fontAwesome: Boolean;
  children: any;
}

export interface PropsStyle {
  size?: Number | String;
  clickable?: String;
  url?: String;
}
