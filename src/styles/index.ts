import { colors } from "./colors";
import * as metrics from "./metrics";
import {
  globalStyles,
  fonts,
  breakpoints,
  breakpointKeys,
} from "./globalStyles";

const theme = { 
  dark: colors, 
  light: colors, 
  ...metrics
};

export {
  theme,
  colors,
  metrics,
  globalStyles,
  breakpoints,
  breakpointKeys,
  fonts,
};
