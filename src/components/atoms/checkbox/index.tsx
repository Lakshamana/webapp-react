import { Checkbox as CheckboxComponent } from "@chakra-ui/react";
import { CheckboxProps } from "./types";

const Checkbox = ({ label, ...props }: CheckboxProps) => (
  <CheckboxComponent {...props}>{label}</CheckboxComponent>
);

export { Checkbox };
