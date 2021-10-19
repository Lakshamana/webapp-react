import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withChakra = (StoryFn) => (
  <ChakraProvider theme={theme}>
    <StoryFn />
  </ChakraProvider>
)

export const decorators = [withChakra]