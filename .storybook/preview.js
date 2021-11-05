import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/styles/theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
}

const withChakra = (StoryFn) => (
  <ChakraProvider theme={theme}>
    <StoryFn />
  </ChakraProvider>
)

export const decorators = [withChakra]