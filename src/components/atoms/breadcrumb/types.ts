export interface Props {
  options?: Array<Options>;
}

interface Options {
  onClick?: Function;
  name?: string;
  isCurrentPage?: boolean;
}

export interface PropsStyle {}
