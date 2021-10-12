import { ColorProps, SpaceProps, LayoutProps, TypographyProps, BorderProps, VariantArgs } from 'styled-system';

export interface ButtonProps extends SpaceProps, LayoutProps, TypographyProps, VariantArgs, BorderProps, ColorProps {
  label: String;
  style?: React.CSSProperties;
  type?: ButtonType;
  iconName?: String;
}

export const defaultProps = {
  label: ''
};

type ButtonType = 'submit' | 'reset' | 'billboard';
