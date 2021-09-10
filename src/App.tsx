import { ChakraProvider } from "@chakra-ui/react";
import { AppRouter } from "router";

import "./styles/index.css";
import "./App.css";

const App = () => (
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);

export default App;
