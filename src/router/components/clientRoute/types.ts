export interface Props {
  path: string;
  component: any;
  children: JSX.Element | JSX.Element[];
  isAccesible: boolean;
  fallback?: any;
}
