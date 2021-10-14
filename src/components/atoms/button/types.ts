import { ColorProps, SpaceProps, LayoutProps, TypographyProps, BorderProps, VariantArgs } from 'styled-system';

export interface ButtonProps extends SpaceProps, LayoutProps, TypographyProps, VariantArgs, BorderProps, ColorProps {
  label: string;
  style?: React.CSSProperties;
  type?: ButtonType;
  iconName?: string;
}

export const defaultProps = {
  label: ''
};

type ButtonType = 'submit' | 'reset' | 'billboard';
