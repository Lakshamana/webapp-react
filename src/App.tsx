import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "router";

const App = () => (
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);

export default App;
