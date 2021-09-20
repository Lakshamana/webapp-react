export interface Props {
  children: JSX.Element;
  trigger: JSX.Element;
  background?: string;
  props?: any;
}

export const defaultProps = {
  background: "#444444",
};
