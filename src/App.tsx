import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "./styles/index.css";

const App = () => {
  return (
    <ChakraProvider>
      <div className="App" />
    </ChakraProvider>
  );
};

export default App;
