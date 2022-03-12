import { CheckboxStyled } from './styles';
import { colors } from 'styles';
import { useThemeStore } from 'services/stores/theme';
import { CheckboxProps } from "./types";

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const { colorMode } = useThemeStore()
  return (
    <CheckboxStyled spacing={'1rem'} fontSize={'0.9rem'} textColor={colors.generalText[colorMode]} iconColor={colors.black} {...props}>{label}</CheckboxStyled>
  );
}

export { Checkbox };
