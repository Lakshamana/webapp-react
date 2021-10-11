import { ColorProps, SpaceProps, LayoutProps, TypographyProps, BorderProps, VariantArgs } from 'styled-system';
import { MenuItemProps as RawMenuItemsProps } from "@chakra-ui/react"

export interface FilterButtonProps extends SpaceProps, LayoutProps, TypographyProps, VariantArgs, BorderProps, ColorProps {
  label?: string | undefined;
  style?: React.CSSProperties;
  options?: Array<OptionsProps>;
  onChange?: Function;
}

export interface OptionsProps {
  label: string;
  value?: string | number | boolean;
}

export interface MenuItemProps extends RawMenuItemsProps {
  selected?: Boolean;
}

export interface ArrowMenuProps {
  selected?: Boolean;
}

export const defaultProps = {
  label: 'Filter by',
  options: [
    { label: 'Most recent', value: 'recent' },
    { label: 'Most liked', value: 'liked' }
  ]
}