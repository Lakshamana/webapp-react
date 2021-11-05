import React from "react"
import { ThemeProvider } from "styled-components";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  colors,
  metrics,
  fonts,
  theme,
  breakpoints as themeBreakpoints,
} from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const breakpoints = createBreakpoints(themeBreakpoints);

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  ...theme,
  ...metrics,
  fonts,
  breakpoints,
  config,
  colors,
});

const withChakra = (StoryFn) => (
  <ThemeProvider theme={{ ...theme }}>
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  </ThemeProvider>
)

export const decorators = [withChakra]