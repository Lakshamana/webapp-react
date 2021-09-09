export interface Props {
  children: JSX.Element;
  trigger: JSX.Element;
  background?: string;
}

export const defaultProps = {
  background: "#444444"
};
