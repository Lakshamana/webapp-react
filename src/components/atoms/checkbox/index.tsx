import { CheckboxStyled } from './styles';
import { colors } from 'styles';
import { useThemeStore } from 'services/stores/theme';
import { CheckboxProps } from "./types";

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const { colorMode } = useThemeStore()
  return (
    <CheckboxStyled spacing={'1rem'} fontSize={16} textColor={colors.generalText[colorMode]} iconColor={colors.black} {...props}>{label}</CheckboxStyled>
  );
}

export { Checkbox };
