import { colors } from "./colors";
import * as metrics from "./metrics";
import { sizes } from "./sizes";
import {
  globalStyles,
  fonts,
  breakpoints,
  breakpointKeys,
} from "./globalStyles";

const theme = {
  colors,
  ...metrics,
};

export {
  theme,
  colors,
  metrics,
  globalStyles,
  breakpoints,
  breakpointKeys,
  fonts,
  sizes
};
