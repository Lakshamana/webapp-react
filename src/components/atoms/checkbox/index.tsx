import { Checkbox as CheckboxComponent } from "@chakra-ui/react";
import { colors } from 'styles';
import { useThemeStore } from 'services/stores/theme';
import { CheckboxProps } from "./types";

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  const { colorMode } = useThemeStore()
  return (
    <CheckboxComponent spacing={'1rem'} fontSize={16} textColor={colors.generalText[colorMode]} iconColor={colors.black} {...props}>{label}</CheckboxComponent>
  );
}

export { Checkbox };
