export interface ChannelsProps {
    id?: string;
    name?: string;
    image: string;
    url?: string;
    text?: string;
    isGeolocked?: boolean;
    isExclusive?: boolean;
  }

  export const defaultProps = {
    isExclusive: false,
    isGeolocked: false
  }