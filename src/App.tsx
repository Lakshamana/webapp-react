import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BreakpointProvider } from "services/hooks";
import { AppRouter } from "router";

const App = () => (
  <ChakraProvider>
    <BreakpointProvider>
      <AppRouter />
    </BreakpointProvider>
  </ChakraProvider>
);

export default App;
